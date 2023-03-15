// Spend a minute memorizing the line below
// Re-write the line of code as best you can from memory

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))


/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

// ReactDOM.render(
//                 <ul><li>yeh</li><li>yeeep</li></ul>,
//                 document.getElementById("root"))



// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )



/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navbar = (
//     <div>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </div>
    
// )

// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


// import React from "react"
// import ReactDOM from "react-dom/client"

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// // ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById(root)).render(navbar)

// import React from "react"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// document.getElementById("root").append(JSON.stringify(page))

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// import React from "react"
// import ReactDOM from "react-dom/client"

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page, document.getElementById(root))



/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// import React from "react"
// import ReactDOM from "react-dom/client"

// const page = (
//     <div>
//         <img src="react-logo.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById(root))

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// import React from "react"
// import ReactDOM from "react-dom/client"


// function Page() {
//   return (
//     <div>
//       <h1>Reasons why I like React</h1>
//       <ol>
//         <li>xyz</li>
//         <li>abc</li>
//         <li>efg</li>
//       </ol>
//     </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

    import React from "react"
    import ReactDOM from "react-dom"
    
    function Page() {
        return (
          <div>
            <header>
                <nav>
                  <img src="./react-logo.png" width="40px"/>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>© 2023 Wong development. All rights reserved.</footer>
          </div>
          
        )
    }
    
    ReactDOM.render(<Page />, document.getElementById("root"))