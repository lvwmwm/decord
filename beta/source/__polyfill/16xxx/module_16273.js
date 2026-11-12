// Module ID: 16273
// Function ID: 16274
// Dependencies: [16270]

// Module 16273
import _mod16270 from "module_16270" /* 16270 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16270(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
