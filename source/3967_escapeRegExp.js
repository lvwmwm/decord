// Module ID: 3967
// Function ID: 32833
// Name: escapeRegExp
// Dependencies: [739]

// Module 3967 (escapeRegExp)
const tmp = /[\\^$.*+?()[\]{}|]/g;
let closure_2 = tmp;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = require(739) /* toString */(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(closure_2, "\\$&");
    }
  }
  return replaced;
};
