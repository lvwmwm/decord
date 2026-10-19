// Module ID: 15129
// Function ID: 15130
// Dependencies: [15126]

// Module 15129
import _mod15126 from "module_15126" /* 15126 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15126(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
