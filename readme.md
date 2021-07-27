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

> Helping you select an MV\* framework

### [Website](http://todomvc.com)&nbsp;&nbsp;&nbsp;&nbsp;[Blog](http://blog.tastejs.com)&nbsp;&nbsp;&nbsp;&nbsp;[TasteJS](http://tastejs.com)

[![Build Status](https://travis-ci.org/tastejs/todomvc.svg)](https://travis-ci.org/tastejs/todomvc)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/n4ynap/runs)

Developers these days are spoiled with choice when it comes to selecting an MV\* framework for structuring and organizing JavaScript web apps.

Backbone, Ember, AngularJS... the list of new and stable solutions goes on and on, but just how do you decide on which to use in a sea of so many options?

To help solve this problem, we created TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV\* frameworks of today.


## Team

TodoMVC would not be possible without a strong team of [contributors](https://github.com/tastejs/todomvc/contributors) helping push the project forward each day. Additionally, we have a core project team composed of:

#### [Addy Osmani](https://github.com/addyosmani) - Founder/Lead

<img align="left" width="40" height="40" src="https://www.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275.png?s=40">
  Addy is a Software Engineer at Google who originally created TodoMVC. He oversees the project direction, maintenance and organizes the planning and development efforts of the team.

#### [Sindre Sorhus](https://github.com/sindresorhus) - Lead Developer

<img align="left" width="40" height="40" src="https://www.gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9.png?s=40">
Sindre is a Web Developer who leads core development, quality control and application design for the project. His engineering contributions have helped us ensure consistency and best practices are enforced wherever possible. Sindre also leads up development of the TodoMVC application spec.

#### [Pascal Hartig](https://github.com/passy) - Developer

<img align="left" width="40" height="40" src="https://www.gravatar.com/avatar/be451fcdbf0e5ff07f23ed16cb5c90a3.png?s=40">
Pascal is a Software Engineer at Twitter with a deep passion for consistency. He watches pull requests and helps developers getting their contributions integrated with TodoMVC.

#### [Stephen Sawchuk](https://github.com/stephenplusplus) - Developer

<img align="left" width="40" height="40" src="https://avatars3.githubusercontent.com/u/723048?v=2&s=40">
Stephen is a Front-end Engineer at Quicken Loans that cares about improving the maintainability and developer experience of open-source projects. His recent contributions include helping us move all apps over to using Bower and implementing the new information bar.

#### [Colin Eberhardt](https://github.com/colineberhardt) - Developer

<img align="left" width="40" height="40" src="https://secure.gravatar.com/avatar/73bba00b41ff1c9ecc3ee29487bace7d?s=40">
Colin is a software consultant at Scott Logic who is passionate about all software - from JavaScript to Java, and C# to Objective-C. His recent contribution to the project has been a fully automated test suite.

#### [Sam Saccone](https://github.com/samccone) - Developer

<img align="left" width="40" height="40" src="https://en.gravatar.com/userimage/602125/f2f1d93164ec62b527f0398c65b2d1f3.jpg?size=40">
Sam is a Software Engineer at Google who is driven by an endless desire to create, solve problems, and improve developers' lives.

#### [Arthur Verschaeve](https://github.com/arthurvr) - Developer

<img align="left" width="40" height="40" src="https://en.gravatar.com/avatar/e34daab0d2e344219adb5234198269c5?size=40">
Arthur is an open-source fanboy from Belgium. He is passionate about developer tooling and all things JavaScript.

#### [Fady Samir Sadek](https://github.com/FadySamirSadek) - Developer

<img align="left" width="40" height="40" src="https://avatars2.githubusercontent.com/u/7483806?s=40&u=99b3958687789735c12cf736332361a06b951355&v=4">
Fady is a front-end developer who loves all things JavaScript and enjoys solving real world problems using the web platform and helping other developers do the same. He currently leads maintenance of the project and ensures that the project is friendly for new contributors and upcoming developers.

#### [Gianni Chiappetta](https://github.com/gf3) - Logo designer

<img align="left" width="40" height="40" src="https://www.gravatar.com/avatar/4b0209ae3652cc5a7d53545e759fbe39.png?s=40">
Gianni is a programmer and designer currently working as the Chief Rigger at MetaLab.

## Disclaimer

<img align="right" width="230" height="230" src="media/icon-small.png">

TodoMVC has been called many things including the 'Speed-dating' and 'Rosetta Stone' of MV\* frameworks. Whilst we hope that this project can offer assistance in deciding what frameworks are worth spending more time looking at, remember that the Todo application offers a limited view of a framework's potential capability.

It is meant to be used as a gateway to reviewing how a basic application using a framework may be structured, and we heavily recommend investing time researching a solution in more depth before opting to use it.

Also, please keep in mind that TodoMVC is not the perfect way to compare the size of different frameworks. We intentionally use the unminified versions to make reading the source code easier.


## Getting Involved

Whilst we enjoy implementing and improving existing Todo apps, we're always interested in speaking to framework authors (and users) wishing to share Todo app implementations in their framework/solution of choice.

Check out our [contribution docs](contributing.md) for more info.


## License

Everything in this repo is MIT License unless otherwise specified.

[MIT](license.md) © Addy Osmani, Sindre Sorhus, Pascal Hartig, Stephen Sawchuk.
