import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}



{/* here the custom react will not work */}
const anotherElement = (
  <a href = "https://google.com" target='_blank'>Visit google</a>

)


const anotherUser = "Another User here"


const reactElement = createElement(
  'a',
  {href: 'https:/google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  <StrictMode> {/*not manditory*/}
    {/* <App />  */}  {/* react use bundlers */}
   {reactElement}
  </StrictMode>,
)
