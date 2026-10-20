// Module ID: 15157
// Function ID: 15158
// Dependencies: [15154]

// Module 15157
import _mod15154 from "module_15154" /* 15154 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15154(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
