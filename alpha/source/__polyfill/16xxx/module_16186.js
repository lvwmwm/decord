// Module ID: 16186
// Function ID: 16187
// Dependencies: [16183]

// Module 16186
import _mod16183 from "module_16183" /* 16183 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16183(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
