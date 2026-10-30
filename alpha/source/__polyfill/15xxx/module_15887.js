// Module ID: 15887
// Function ID: 15888
// Dependencies: [15884]

// Module 15887
import _mod15884 from "module_15884" /* 15884 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15884(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
