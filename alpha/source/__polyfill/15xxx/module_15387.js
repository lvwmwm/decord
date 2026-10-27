// Module ID: 15387
// Function ID: 15388
// Dependencies: [15384]

// Module 15387
import _mod15384 from "module_15384" /* 15384 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15384(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
