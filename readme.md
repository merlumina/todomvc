# ![TodoMVC](media/logo.png)

This repo is forked from [TodoMVC](https://github.com/tastejs/todomvc). Please check out that repository for full documentation, contribution, and license information.

### Running the Application

To run the app, clone this repository and navigate to the examples/vanillajs directory. Open index.html in your browser to test it out!

### Feature

For this project, I chose to implement a tag/category system. Each task can be given a single tag which is displayed to the right of the title, next to the delete button.

I started by adding a second input to the header (where the new todo form lives) to get the Tag name, and a span tag to the template.js file to display the Tag name. Next, I added a Tag attribute to the Todo model so the tag information could be stored in each Todo instance, along with the title and ID. I made sure that each method in the model, view, and controller that had `title` as a parameter also had `tag` as necessary. These changes allowed input from the secondary tag form to be stored in each Todo instance and then displayed on the screen alongside the title.

Lastly, I duplicated the functionality of the existing methods related to editing and created separate versions for editing Titles vs editing Tags. This allowed me to differentiate between clicking on the element that contained the title and the element that contained the tag, thus showing/hiding the appropriate elements and updating data in the model accordingly.

### Areas of Improvement

I have two main areas I would like to highlight:

1. Ideally, I would not have needed to separate out the methods for editing/saving into title-specific and tag-specific. Instead, I would have updated the original functions to take in additional information and change the elements that are listened to and updated based on if the user clicks on the title or the tag.

2. For the feature to feel "complete", I would have liked to have added a way to filter views by tag.

These aspects did not get implemented due to time and complexity. This codebase ended up being structured in a much more abstract way than I am used to, so I spent a significant portion of my time familiarizing myself with the code and making sure I knew which pieces were responsible for the functionality I was trying to add and change. Were I to have spent more time making it "perfect," I would have gone far over the expected timeframe noted in the project requirements.

### Personal Expression

I am someone who enjoys both front-end and back-end development, so I wanted to make sure the styling was consistent for the feature I implemented. My typical approach for things like this is to add a small amount of styling as I go, as doing so helps me visualize what I am making and how things will work in the final product. For a small project like this, it was easy to finish styling each discrete change I made as I went (adding the tag input to the new task form, adding the tag "capsule" to each task, styling and positioning the form for editing a tag that is displayed when double-clicking, etc.). For larger projects I would focus less on styling, mainly adding features like spacing and positioning for readability, and saving the major styling for when the functionality is finished.
