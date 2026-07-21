// Module ID: 717
// Function ID: 8739
// Name: isMasked
// Dependencies: []

// Module 717 (isMasked)
const match = /[^.]+$/.exec(require(dependencyMap[0]) && require(dependencyMap[0]).keys && require(dependencyMap[0]).keys.IE_PROTO || "");
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp2}`;
}

export default function isMasked(arg0) {
  let tmp = str;
  if (str) {
    tmp = str in arg0;
  }
  return tmp;
};
