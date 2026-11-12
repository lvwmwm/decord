// Module ID: 16427
// Function ID: 16428
// Dependencies: [16424]

// Module 16427
import _mod16424 from "module_16424" /* 16424 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16424(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
