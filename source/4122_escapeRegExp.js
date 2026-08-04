// Module ID: 4122
// Function ID: 4123
// Name: escapeRegExp
// Dependencies: [762]

// Module 4122 (escapeRegExp)
const tmp = /[\\^$.*+?()[\]{}|]/g;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = require(762) /* toString */(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(closure_2, "\\$&");
    }
  }
  return replaced;
};
