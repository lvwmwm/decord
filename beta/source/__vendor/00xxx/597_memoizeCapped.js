// Module ID: 597
// Function ID: 598
// Name: memoizeCapped
// Dependencies: [598]

// Module 597 (memoizeCapped)
import _mod598 from "module_598" /* 598 */;

const re0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const re1 = /\\(\\)?/g;

export default _mod598((str) => {
  const items = [];
  if (46 === str.charCodeAt(0)) {
    items.push("");
  }
  let replaced = str.replace(items, (arg0, arg1, arg2, str) => {
    if (arg2) {
      let replaced = str.replace(re1, "$1");
    } else {
      replaced = arg1;
      if (!arg1) {
        replaced = arg0;
      }
    }
    items.push(replaced);
  });
  return items;
});
