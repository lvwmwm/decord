// Module ID: 16432
// Function ID: 16433
// Dependencies: [16429]

// Module 16432
import _mod16429 from "module_16429" /* 16429 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16429(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
