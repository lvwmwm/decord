// Module ID: 1497
// Function ID: 17274
// Name: decodeComponents
// Dependencies: []

// Module 1497 (decodeComponents)
function decodeComponents(join) {
  const items = [decodeURIComponent(join.join(""))];
  return items;
}
function decode(arg0) {
  return decodeURIComponent(arg0);
}
const regExp = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi");
const regExp1 = new RegExp("(%[a-f0-9]{2})+", "gi");

export default (arg0) => {
  if ("string" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof arg0 + "`");
    throw typeError;
  } else {
    const replaced = str.replace(/\+/g, " ");
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(replaced);
  }
  str = arg0;
};
