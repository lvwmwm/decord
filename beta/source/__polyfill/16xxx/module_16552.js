// Module ID: 16552
// Function ID: 16553
// Dependencies: [16549]

// Module 16552
import _mod16549 from "module_16549" /* 16549 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16549(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
