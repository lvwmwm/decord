// Module ID: 16276
// Function ID: 16277
// Dependencies: [16273]

// Module 16276
import _mod16273 from "module_16273" /* 16273 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16273(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
