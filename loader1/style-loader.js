const styleLoader = code => `
  if (document) {
    const style = document.createElement('style');
    style.innerText = ${JSON.stringify(code)};
    document.head.appendChild(style);
  }
`
module.exports = styleLoader
