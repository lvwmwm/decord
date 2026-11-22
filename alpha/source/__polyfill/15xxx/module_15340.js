// Module ID: 15340
// Function ID: 15341
// Dependencies: [15337]

// Module 15340
import _mod15337 from "module_15337" /* 15337 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15337(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
