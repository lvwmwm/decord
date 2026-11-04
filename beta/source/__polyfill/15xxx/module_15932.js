// Module ID: 15932
// Function ID: 15933
// Dependencies: [15929]

// Module 15932
import _mod15929 from "module_15929" /* 15929 */;

let set;


export default (arg0, arg1) => {
  set = new _mod15929(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
