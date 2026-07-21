// Module ID: 706
// Function ID: 8715
// Dependencies: []

// Module 706
let closure_0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
let closure_1 = /\\(\\)?/g;

export default require(dependencyMap[0])((str) => {
  const items = [];
  let closure_0 = items;
  if (46 === str.charCodeAt(0)) {
    items.push("");
  }
  const replaced = str.replace(closure_0, (arg0, arg1, arg2, str) => {
    let replaced = arg1;
    if (arg2) {
      replaced = str.replace(closure_1, "$1");
    } else if (!replaced) {
      replaced = arg0;
    }
    items.push(replaced);
  });
  return items;
});
