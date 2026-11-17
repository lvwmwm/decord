// Module ID: 16586
// Function ID: 16587
// Dependencies: [16583]

// Module 16586
import _mod16583 from "module_16583" /* 16583 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16583(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
