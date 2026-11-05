// Module ID: 16190
// Function ID: 16191
// Dependencies: [16187]

// Module 16190
import _mod16187 from "module_16187" /* 16187 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16187(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
