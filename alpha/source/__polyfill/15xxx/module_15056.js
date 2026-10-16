// Module ID: 15056
// Function ID: 15057
// Dependencies: [15053]

// Module 15056
import _mod15053 from "module_15053" /* 15053 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15053(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
