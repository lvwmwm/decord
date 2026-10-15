// Module ID: 15013
// Function ID: 15014
// Dependencies: [15010]

// Module 15013
import _mod15010 from "module_15010" /* 15010 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15010(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
