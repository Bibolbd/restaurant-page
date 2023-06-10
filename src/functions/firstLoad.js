import header from './header.js'
import home from '../pages/home.js'

function firstLoad() {
    const content = document.createElement("div")
    content.id = 'content'
    const headerDiv = header()
    document.body.appendChild(headerDiv)
    document.body.appendChild(content)
    home()
}

export default firstLoad;