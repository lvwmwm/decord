// Module ID: 15292
// Function ID: 15293
// Dependencies: [15289]

// Module 15292
import _mod15289 from "module_15289" /* 15289 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15289(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
