<h1>Mark's Goated Developer Template</h1>
<img src="https://raw.githubusercontent.com/RetributionByRevenue/Mark-s-Goated-Developer-Template/main/Architecture.png">
**How it Works?**

React has many great paradigms in place that make it a very popular and beloved way of programing modern web apps. Such things like Parent and Child Prop components (component inheritance), Hooks (and it's state), Code Maintainability of Easiness of Reading, etc all shed some light on why it is the most popular in the JavaScript Ecosystem.
However, many developers have identified short commings and frustriation with the current React Paradigm. Firstly, nodejs and react have a horrible experience when it comes to even starting a project. Majority of the time, you will experience issues with nodejs packages being out of date, and dependency version missmatching that will make it feel like a gamble if you will even be able to create a brand new ract app. Furthermore, i want to address the concerning file disk space usage react uses both on the local server and the deliverable size to the end user client. By default, a simple hello world react app is over 1GB in disk space usage and the end user client has to download a deliverable size over 200kb, which is a horrible end user experience. 
I have architechted a alternative solution to the current status quo, that still uses react like syantx but is only 16kb in size and has all the advantages of the FastApi ecosystem. 

**By default, i have opted to use Preact. What is It?**
Preact is a performance-focused, lightweight alternative to React. Developed by Jason Miller, it offers the same API and functionalities as React but with a significantly smaller footprint—just 3kB in size. Preact’s virtual DOM is minimal, making it efficient for server-to-client transfers and optimizing load times. It provides a compatibility layer with React, allowing it to serve as a drop-in replacement.  Its simplicity, speed, and seamless integration with existing React components make it an attractive choice for projects where minimizing bundle size matter.

