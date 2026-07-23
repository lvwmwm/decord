// Module ID: 717
// Function ID: 8740
// Name: isMasked
// Dependencies: [718]

// Module 717 (isMasked)
const match = /[^.]+$/.exec(require("module_718") && require("module_718").keys && require("module_718").keys.IE_PROTO || "");
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
