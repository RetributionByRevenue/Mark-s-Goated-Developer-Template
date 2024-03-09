<h1>Mark's Goated Developer Template</h1>
<img src="https://raw.githubusercontent.com/RetributionByRevenue/Mark-s-Goated-Developer-Template/main/Architecture.png">
**How it works?**<br>
React has many great paradigms in place that make it a very popular and beloved way of programming modern web apps. Such things like Parent and Child Prop components (component inheritance), Hooks (and it's state), Code Maintainability, Easiness of Reading, etc all shed some light on why it is the most popular in the JavaScript Ecosystem.
However, many developers have identified shortcomings and frustration with the current React Paradigm. Firstly, nodejs and react have a horrible experience when it comes to even starting a project. Majority of the time, you will experience issues with nodejs packages being out of date, and dependency version mismatching that will make it feel like a gamble if you will even be able to create a brand new react app. Furthermore, i want to address the concerning file disk space usage react uses both on the local server and the deliverable size to the end user client. By default, a simple hello world react app is over 1GB in disk space usage and the end user client has to download a deliverable size over 200kb, which is a horrible end user experience.
I have architected a alternative solution to the current status quo, that still uses react like syntax but is only 16kb in size and has all the advantages of the FastApi ecosystem.

**By default, i have opted to use Preact. What is It?**<br>
Preact is a performance-focused, lightweight alternative to React. Developed by Jason Miller, it offers the same API and functionalities as React but with a significantly smaller footprint—just 3kB in size. Preact’s virtual DOM is minimal, making it efficient for server-to-client transfers and optimizing load times. It provides a compatibility layer with React, allowing it to serve as a drop-in replacement.  Its simplicity, speed, and seamless integration with existing React components make it an attractive choice for projects where minimizing bundle size matter.

**By default, i have opted to use Hyperscript Tagged Markup (HTM). What is It?**<br>
Hyperscript Tagged Markup is a programming paradigm that allows developers to write HTML-like markup directly within JavaScript, using tagged template literals. This approach enables the creation of web components and user interfaces in a more declarative and concise manner, where the structure and behavior of elements are defined within the JavaScript code itself. One significant advantage of Hyperscript Tagged Markup is its avoidance of transpilation processes typically required in other JavaScript frameworks like React or Vue. By eliminating the need for transpilation, developers can work more efficiently, reduce build times, and simplify their development workflows. Additionally, the direct integration of markup within JavaScript enhances code readability and maintainability, as it consolidates both markup and logic in a single coherent context, facilitating easier comprehension and debugging.






<img src="https://raw.githubusercontent.com/RetributionByRevenue/Mark-s-Goated-Developer-Template/main/Homepage.jpg">
