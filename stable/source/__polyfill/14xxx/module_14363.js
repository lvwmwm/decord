// Module ID: 14363
// Function ID: 14364
// Dependencies: [14360]

// Module 14363
import _mod14360 from "module_14360" /* 14360 */;

let set;


export default (arg0, arg1) => {
  set = new _mod14360(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
