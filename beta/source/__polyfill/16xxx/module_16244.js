// Module ID: 16244
// Function ID: 16245
// Dependencies: [16241]

// Module 16244
import _mod16241 from "module_16241" /* 16241 */;

let set;


export default (arg0, arg1) => {
  set = new _mod16241(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
