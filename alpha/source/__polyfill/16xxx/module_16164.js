// Module ID: 16164
// Function ID: 16165
// Dependencies: [16161]

// Module 16164
import _mod16161 from "module_16161" /* 16161 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16161(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
