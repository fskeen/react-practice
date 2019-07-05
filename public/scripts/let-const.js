"use strict";

console.log("Hello!");

// JSX = JavaScript XML, a JS language extension

// var template = (
//     <div>
//         <h1> Faye</h1>
//         <p>This is some sweeeeet info.</p>
//         <ol>
//             <li>One</li>
//             <li>Two</li>
//             <li>Three</li>
//         </ol>
//     </div>
// );

/*
- Only render subtitle + p tag if subtitle exists
- create brand new property on app called options
- render new p tag if there are items in the array. if options: "here are your options", no options: "no options" */

var user = {
    name: "Andrew Mead",
    age: 92
    // location: "Flavortown"
};

var appObject = {
    title: "Blob",
    subtitle: "The Blobbening",
    options: ['One', 'Two']
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            " Location: ",
            location
        );
        // } else {
        //     return undefined;
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age,
        " "
    ),
    getLocation(user.location),
    React.createElement(
        "p",
        null,
        "Favorite movie: ",
        appObject.title,
        appObject.subtitle && ': ' + appObject.subtitle
    ),
    appObject.options.length > 0 ? React.createElement(
        "p",
        null,
        "Here are your options: ",
        appObject.options[0],
        " and ",
        appObject.options[1]
    ) : React.createElement(
        "p",
        null,
        "No options available."
    )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
