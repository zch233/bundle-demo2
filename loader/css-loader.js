const cssLoader = code => `
  const code = ${JSON.stringify(code)};
  if (document) {
    const style = document.createElement('style');
    style.innerText = code;
    document.head.appendChild(style);
  }
  export default code;
`

module.exports = cssLoader
