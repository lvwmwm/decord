// Module ID: 15305
// Function ID: 15306
// Dependencies: [15302]

// Module 15305
import _mod15302 from "module_15302" /* 15302 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15302(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
