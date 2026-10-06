// Module ID: 13593
// Function ID: 13594
// Dependencies: [13590]

// Module 13593
import _mod13590 from "module_13590" /* 13590 */;

let set;


export default (arg0, arg1) => {
  set = new _mod13590(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
