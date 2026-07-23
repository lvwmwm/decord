// Module ID: 706
// Function ID: 8716
// Name: memoizeCapped
// Dependencies: [707]

// Module 706 (memoizeCapped)
import memoizeCapped from "memoizeCapped";

const re0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const re1 = /\\(\\)?/g;

export default memoizeCapped((str) => {
  const items = [];
  if (46 === str.charCodeAt(0)) {
    items.push("");
  }
  let replaced = str.replace(items, (arg0, arg1, arg2, str) => {
    let replaced = arg1;
    if (arg2) {
      replaced = str.replace(outer1_1, "$1");
    } else if (!replaced) {
      replaced = arg0;
    }
    items.push(replaced);
  });
  return items;
});
