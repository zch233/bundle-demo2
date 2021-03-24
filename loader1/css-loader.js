const cssLoader = code => `
  const code = ${JSON.stringify(code)};
  export default code;
`

module.exports = cssLoader
