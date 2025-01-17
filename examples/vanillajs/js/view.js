/*global qs, qsa, $on, $parent, $delegate */

(function (window) {
	'use strict';

	/**
	     * View that abstracts away the browser's DOM completely.
	     * It has two simple entry points:
	     *
	     *   - bind(eventName, handler)
	     *     Takes a todo application event and registers the handler
	     *   - render(command, parameterObject)
	     *     Renders the given command with the options
	     */
	function View(template) {
		this.template = template;

		this.ENTER_KEY = 13;
		this.ESCAPE_KEY = 27;

		this.$todoList = qs('.todo-list');
		this.$todoItemCounter = qs('.todo-count');
		this.$clearCompleted = qs('.clear-completed');
		this.$main = qs('.main');
		this.$footer = qs('.footer');
		this.$toggleAll = qs('.toggle-all');
		this.$newTodo = qs('.new-todo');
		this.$newTodoTag = qs('.new-todo-tag');
	}

	View.prototype._removeItem = function (id) {
		var elem = qs('[data-id="' + id + '"]');

		if (elem) {
			this.$todoList.removeChild(elem);
		}
	};

	View.prototype._clearCompletedButton = function (completedCount, visible) {
		this.$clearCompleted.innerHTML = this.template.clearCompletedButton(completedCount);
		this.$clearCompleted.style.display = visible ? 'block' : 'none';
	};

	View.prototype._setFilter = function (currentPage) {
		qs('.filters .selected').className = '';
		qs('.filters [href="#/' + currentPage + '"]').className = 'selected';
	};

	View.prototype._elementComplete = function (id, completed) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = completed ? 'completed' : '';

		// In case it was toggled from an event and not by clicking the checkbox
		qs('input', listItem).checked = completed;
	};

	View.prototype._editTitle = function (id, title) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = listItem.className + ' editing-title';

		var input = document.createElement('input');
		input.className = 'edit-title';

		listItem.appendChild(input);
		input.focus();
		input.value = title;
	};

	View.prototype._editTag = function (id, tag) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		listItem.className = listItem.className + ' editing-tag';

		var input = document.createElement('input');
		input.className = 'edit-tag';

		listItem.appendChild(input);
		input.focus();
		input.value = tag;
	};

	View.prototype._editTitleDone = function (id, title) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		var input = qs('input.edit-title', listItem);
		listItem.removeChild(input);

		listItem.className = listItem.className.replace(' editing-title', '');

		qsa('label', listItem).forEach(function (label) {
			label.textContent = title;
		});
	};

	View.prototype._editTagDone = function (id, tag) {
		var listItem = qs('[data-id="' + id + '"]');

		if (!listItem) {
			return;
		}

		var input = qs('input.edit-tag', listItem);
		listItem.removeChild(input);

		listItem.className = listItem.className.replace(' editing-tag', '');

		qsa('span', listItem).forEach(function (span) {
			span.textContent = tag;
		});
	};

	View.prototype.render = function (viewCmd, parameter) {
		var self = this;
		var viewCommands = {
			showEntries: function () {
				self.$todoList.innerHTML = self.template.show(parameter);
			},
			removeItem: function () {
				self._removeItem(parameter);
			},
			updateElementCount: function () {
				self.$todoItemCounter.innerHTML = self.template.itemCounter(parameter);
			},
			clearCompletedButton: function () {
				self._clearCompletedButton(parameter.completed, parameter.visible);
			},
			contentBlockVisibility: function () {
				self.$main.style.display = self.$footer.style.display = parameter.visible ? 'block' : 'none';
			},
			toggleAll: function () {
				self.$toggleAll.checked = parameter.checked;
			},
			setFilter: function () {
				self._setFilter(parameter);
			},
			clearNewTodo: function () {
				self.$newTodo.value = '';
				self.$newTodoTag.value = '';
			},
			elementComplete: function () {
				self._elementComplete(parameter.id, parameter.completed);
			},
			editTitle: function () {
				self._editTitle(parameter.id, parameter.title);
			},
			editTag: function () {
				self._editTag(parameter.id, parameter.tag);
			},
			editTitleDone: function () {
				self._editTitleDone(parameter.id, parameter.title);
			},
			editTagDone: function () {
				self._editTagDone(parameter.id, parameter.tag);
			}
		};

		viewCommands[viewCmd]();
	};

	View.prototype._itemId = function (element) {
		var li = $parent(element, 'li');
		return parseInt(li.dataset.id, 10);
	};

	View.prototype._bindTitleEditDone = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit-title', 'blur', function () {
			if (!this.dataset.iscanceled) {
				handler({
					id: self._itemId(this),
					title: this.value,
				});
			}
		});

		$delegate(self.$todoList, 'li .edit-title', 'keypress', function (event) {
			if (event.keyCode === 13) {
				// Remove the cursor from the input when you hit enter just like if it
				// were a real form
				this.blur();
			}
		});
	};

		View.prototype._bindTagEditDone = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit-tag', 'blur', function () {
			if (!this.dataset.iscanceled) {
				handler({
					id: self._itemId(this),
					tag: this.value,
				});
			}
		});

		$delegate(self.$todoList, 'li .edit-tag', 'keypress', function (event) {
			if (event.keyCode === 13) {
				// Remove the cursor from the input when you hit enter just like if it
				// were a real form
				this.blur();
			}
		});
	};

	View.prototype._bindTitleEditCancel = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit-title', 'keyup', function (event) {
			if (event.keyCode === self.ESCAPE_KEY) {
				this.dataset.iscanceled = true;
				this.blur();

				handler({id: self._itemId(this)});
			}
		});
	};

	View.prototype._bindTagEditCancel = function (handler) {
		var self = this;
		$delegate(self.$todoList, 'li .edit-tag', 'keyup', function (event) {
			if (event.keyCode === self.ESCAPE_KEY) {
				this.dataset.iscanceled = true;
				this.blur();

				handler({id: self._itemId(this)});
			}
		});
	};

	View.prototype.bind = function (event, handler) {
		var self = this;
		if (event === 'newTodo') {
			$on((self.$newTodo), 'keydown', function (event) {
				if (event.keyCode === 13) {
					handler(self.$newTodo.value, self.$newTodoTag.value);
				}
			});

			$on((self.$newTodoTag), 'keydown', function (event) {
				if (event.keyCode === 13) {
					handler(self.$newTodo.value, self.$newTodoTag.value);
				}
			});

		} else if (event === 'removeCompleted') {
			$on(self.$clearCompleted, 'click', function () {
				handler();
			});

		} else if (event === 'toggleAll') {
			$on(self.$toggleAll, 'click', function () {
				handler({completed: this.checked});
			});

		} else if (event === 'titleEdit') {
			$delegate(self.$todoList, 'li label', 'dblclick', function () {
				handler({id: self._itemId(this)});
			});

		} else if (event === 'tagEdit') {
			$delegate(self.$todoList, 'li span', 'dblclick', function () {
				handler({id: self._itemId(this)});
			});

		} else if (event === 'itemRemove') {
			$delegate(self.$todoList, '.destroy', 'click', function () {
				handler({id: self._itemId(this)});
			});

		} else if (event === 'itemToggle') {
			$delegate(self.$todoList, '.toggle', 'click', function () {
				handler({
					id: self._itemId(this),
					completed: this.checked
				});
			});

		} else if (event === 'titleEditDone') {
			self._bindTitleEditDone(handler);

		} else if (event === 'tagEditDone') {
			self._bindTagEditDone(handler);

		} else if (event === 'titleEditCancel') {
			self._bindTitleEditCancel(handler);
		} else if (event === 'tagEditCancel') {
			self._bindTagEditCancel(handler);
		}
	};

	// Export to window
	window.app = window.app || {};
	window.app.View = View;
}(window));
