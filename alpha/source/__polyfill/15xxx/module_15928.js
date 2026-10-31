// Module ID: 15928
// Function ID: 15929
// Dependencies: [15925]

// Module 15928
import _mod15925 from "module_15925" /* 15925 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15925(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
