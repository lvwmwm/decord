// Module ID: 16274
// Function ID: 16275
// Dependencies: [16271]

// Module 16274
import _mod16271 from "module_16271" /* 16271 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16271(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
