// Module ID: 15219
// Function ID: 15220
// Dependencies: [15216]

// Module 15219
import _mod15216 from "module_15216" /* 15216 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15216(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
