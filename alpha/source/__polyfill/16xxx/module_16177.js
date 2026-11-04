// Module ID: 16177
// Function ID: 16178
// Dependencies: [16174]

// Module 16177
import _mod16174 from "module_16174" /* 16174 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16174(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
