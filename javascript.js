// //Part 1: Array Higher-Order Methods
// //1. Create an array of 10 numbers and use forEach() to print each number.
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// arr1.forEach(num => console.log(num));

// //2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
// let arr2 = [1,2,3,4,5];
// let multiply= arr2.map(num => num * 5);
// console.log(multiply)

// //3. Given an array of numbers, use filter() to get only numbers greater than 20.
// let arr3 = [5, 15, 25, 30, 10, 40];
// let greaterThan20 = arr3.filter(num => num > 20);
// console.log(greaterThan20);

// //4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
// let employees = [
//   { name: "sachin", salary: 250000 },
//   { name: "dhanush", salary: 400000 },
//   { name: "ajith", salary: 300000 },
   
// ];
// let Salary = employees.filter(emp => emp.salary <= 300000);
// console.log(Salary);

//5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000
// let employees = [
//   { name: "sachin", salary: 190000 },
//   { name: "dhanush", salary: 400000 },
//   { name: "ajith", salary: 300000 },
   
// ];
// let highsalary = employees.find(emp => emp.salary > 200000);
// console.log(highsalary);

//6. Use reduce() to calculate the total of all numbers in an array.
// let arr6 = [10, 20, 30, 40];
// let total = arr6.reduce((sum, num) => sum + num, 0);
// console.log(total);

//7. Create an array of numbers and use some() to check whether at least one number is even.
// let arr=[1,2,3,4,5,];
// let even=arr.some(num=>num%2==0);
// console.log(even);

//8. Use every() to check whether all numbers in an array are greater than zero.
// let arr = [1, 2, 3, 4, 5];
// let thanzero = arr.every(num => num > 0);
// console.log(thanzero);

//9. Given an array of numbers, sort them in ascending order using the sort callback.
// let arr = [40, 10, 5, 100, 25];
// arr.sort((a, b) => a - b);
// console.log(arr);

//10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
// let arr = [40, 10, 5, 100, 25];
// arr.sort((a, b) => b - a);
// console.log(arr);

//Part 2: String Methods
//11. Create a string "javascript" and print the character at index 4 using charAt().
// let str="javascript";
// console.log(str.charAt(4));

//12. Find the character code at index 2 using charCodeAt().
// let str="javascript";
// console.log(str.charAt(2));

//13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
// let str=" javascript ";
// console.log(str.trim());

//14. Convert a string to uppercase and lowercase using the appropriate methods.
// let str="javascript";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//15. Check whether a string contains "script" using includes().
// let str="javascript";
// console.log(str.includes("script"));

//16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
// let str= "JavaScript";
// console.log(str16.startsWith("Java"));
// console.log(str16.endsWith("Script"));

//17. Replace every occurrence of "java" with "python" in a string using replaceAll()
//  let str= "JavaScript";
// console.log(str.replaceAll("Java", "python"));

//18. Split the string "html-css-javascript-react" into an array using split().
// let str = "html-css-javascript-react";
// let arr = str.split("-");
// console.log(arr);

//19. Convert an array of names into a single string using join() with a comma separator.
// let names=["sachin","ajith","dhanush"];
// console.log(names.join(","));

//20. Create a string and extract a portion of it using slice().
// let str20 = "javascript";
// console.log(str20.slice(0, 5)); 
// console.log(str20.slice(5, 10));

//Part 3: Date Methods
//21. Create a Date object and print the current year, month, date, and day.
// const now = new Date();
// console.log("Year:", now.getFullYear());
// console.log("Month:", now.getMonth() + 1); 
// console.log("Date:", now.getDate());
// console.log("Day:", now.getDay()); 

//22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let now = new Date();
// console.log("Current Month:", months[now.getMonth()]);

//23. Print the current hours, minutes, and seconds using the appropriate date methods.
// let now = new Date();
// console.log("hours:",now.getHours());
// console.log("minutes:",now.getMinutes());
// console.log("seconds:",now.getMonth());

//24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
// let setter= new Date();
// setter.setFullYear(2003);
// setter.setMonth(0);
// setter.setDate(30);
// console.log(setter);

//Part 4: Asynchronous JavaScript
//25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
// setTimeout(() => {
//   console.log("Welcome to JavaScript");
// }, 3000);

//26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
// let intervalId = setInterval(() => {
//   console.log("Learning JavaScript");
// }, 2000);

//27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
// let intervalId = setInterval(() => {
//   console.log("Learning JavaScript");
// }, 2000);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped");
// }, 8000);

//28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
// function one() {
//   console.log("one");
// }
// function two() {
//   console.log("two");
// }
// function three() {
//   console.log("three");
// }
// one();
// setTimeout(two, 0);
// three();

//Part 5: Promises and API Fetching
//29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
// let login = new Promise(function(resolve, reject) {
//     resolve("Login successful");
// });

// login.then(function(message) {
//     console.log(message);
// });

//30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
// let login = new Promise(function(resolve, reject) {
//     reject("Invalid password");
// });

// login.catch(function(error) {
//     console.log(error);
// });

//31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
// let login = new Promise(function(resolve, reject) {
//      resolve("TASK COMPLETED");
// });
// login.then(function(message){
//     console.log(message);
// }).finally (function(){
//     console.log("Process completed");
// })

//32. Fetch product data from the Fake Store API:
//https://fakestoreapi.com/products
//Convert the response to JSON and print all product titles using forEach().
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     data.forEach(function(product) {
//         console.log(product.title);
//     });
// });

//33. Fetch the same API and print the title, price, and category of every product.
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     data.forEach(function(product) {
//         console.log("Title: " + product.title);
//         console.log("Price: " + product.price);
//         console.log("Category: " + product.category);
//     });
// });

//34. Handle API errors using .catch() and display the error message using console.warn().
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.warn(error.message);
// });

//35. Use .finally() to print "API call completed" after the fetch process.
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .finally(function() {
//     console.log("API call completed");
// });
//Part 6: Real-Time Mini Tasks
//36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
// let employees = [
//     { name: "sachin", salary: 250000 },
//     { name: "ajith", salary: 350000 },
//     { name: "dhanush", salary: 280000 },
//     { name: "hp", salary: 400000 }
// ];

// let result = employees.filter(function(employee) {
//     return employee.salary < 300000;
// });

// result.forEach(function(employee) {
//     console.log(employee.name, employee.salary);
// });

//37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     let products = data.map(function(product) {
//         return {
//             title: product.title,
//             price: product.price
//         };
//     });

//     console.log(products);
// });

//38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     let result = data.filter(function(product) {
//         return product.category === "electronics";
//     });

//     console.log(result);
// });

//39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
// let numbers = [10, 20, 30, 40, 50];
// let mul = numbers.map(function(num) {
//     return num * 2;
// });
// console.log("multiply:", mul);
// let filtered = numbers.filter(function(num) {
//     return num > 25;
// });
// console.log("Greater than 25:", filtered);
// let total = numbers.reduce(function(sum, num) {
//     return sum + num;
// }, 0);
// console.log("Total:", total);
// let check = numbers.some(function(num) {
//     return num > 40;
// });
// console.log("Any number greater than 40:", check);
// let checkEvery = numbers.every(function(num) {
//     return num > 0;
// });
// console.log("All numbers are positive:", checkEvery);

//40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
// fetch("https://fakestoreapi.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     data.forEach(function(product) {
//         console.log("Title: " + product.title);
//         console.log("Price: " + product.price);
//         console.log("Category: " + product.category);
//     });
// })
// .catch(function(error) {
//     console.warn(error.message);
// })
// .finally(function() {
//     console.log("API call completed");
// });
