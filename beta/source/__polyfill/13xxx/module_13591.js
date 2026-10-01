// Module ID: 13591
// Function ID: 13592
// Dependencies: [13588]

// Module 13591
import _mod13588 from "module_13588" /* 13588 */;

let set;


export default (arg0, arg1) => {
  set = new _mod13588(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
