// Module ID: 605
// Function ID: 606
// Name: memoizeCapped
// Dependencies: [606]

// Module 605 (memoizeCapped)
import memoizeCapped from "memoizeCapped" /* 606 */;

const re0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const re1 = /\\(\\)?/g;

export default memoizeCapped((str) => {
  const items = [];
  if (46 === str.charCodeAt(0)) {
    items.push("");
  }
  let replaced = str.replace(items, (arg0, arg1, arg2, str) => {
    let replaced;
    const push = items.push;
    if (arg2) {
      replaced = str.replace(re1, "$1");
    } else {
      replaced = arg1 || arg0;
    }
    push(replaced);
  });
  return items;
});
