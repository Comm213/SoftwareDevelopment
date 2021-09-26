// let container = document.getElementById("container");
// container.innerHTML = "<h1>Hello World</h1>";

// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World";

// let container = document.getElementById("container");
// container.appendChild(heading);

let heading = document.createElement('h1');
heading.innerHTML = document.getElementsById('message').value;
document.getElementById('output').appendChild(heading)

