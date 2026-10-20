// Module ID: 15175
// Function ID: 15176
// Dependencies: [15172]

// Module 15175
import _mod15172 from "module_15172" /* 15172 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15172(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
