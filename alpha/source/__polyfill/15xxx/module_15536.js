// Module ID: 15536
// Function ID: 15537
// Dependencies: [15533]

// Module 15536
import _mod15533 from "module_15533" /* 15533 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15533(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
