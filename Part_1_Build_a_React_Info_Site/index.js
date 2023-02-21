// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>contract</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

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

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// import React from "react"
// import ReactDOM from "react-dom"

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

// ReactDOM.render(page, document.getElementById("root"))
// // document.getElementById("root").append(JSON.stringify(page))

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
// import ReactDOM from "react-dom"

// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"


// function TemporaryName() {
//     return (
//         <div>
//             <img src="./react-logo.png" width="40px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="./react-logo.png" width="40px" />
//                 </nav>
//             </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be able to fit in the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer if I know React</li>
//             </ol>
//             <footer>
//                 <small>@ 2023 Wong development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// function App() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))