export const render = () => {
    const content = document.getElementById("content")
    while (content.children.length > 0) {
        content.removeChild(content.children[0])
    }
}