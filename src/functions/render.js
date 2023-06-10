import '../styles/index.css'

export const render = () => {
  const content = document.getElementById("content");
  content.classList.add("content")
  while (content.children.length > 0) {
    content.removeChild(content.children[0]);
  }
};
