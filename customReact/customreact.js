

function customRender(reactElement, container){


   /* this will raise issue when we try to create 3rd attribute
     const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) */

  //below is the best modular approach
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if (prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
 container.appendChild(domElement)

}
//how react shows tags functionality
//custom react
const reactElement = {
    type: 'a',  //type of elements 
    props: {    //properties of selected element
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}



const mainContainer = document.querySelector('#root')


//method to render
customRender(reactElement, mainContainer)

// here reactElement is a render that injects into container called "mainContainer"