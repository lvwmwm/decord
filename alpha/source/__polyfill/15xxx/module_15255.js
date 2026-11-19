// Module ID: 15255
// Function ID: 15256
// Dependencies: [15252]

// Module 15255
import _mod15252 from "module_15252" /* 15252 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15252(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
