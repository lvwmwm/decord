// Module ID: 15125
// Function ID: 15126
// Dependencies: [15122]

// Module 15125
import _mod15122 from "module_15122" /* 15122 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15122(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
