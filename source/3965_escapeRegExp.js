// Module ID: 3965
// Function ID: 32820
// Name: escapeRegExp
// Dependencies: []

// Module 3965 (escapeRegExp)
const tmp = /[\\^$.*+?()[\]{}|]/g;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = require(dependencyMap[0])(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(tmp, "\\$&");
    }
  }
  return replaced;
};
