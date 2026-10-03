// Module ID: 13861
// Function ID: 13862
// Dependencies: [13858]

// Module 13861
import _mod13858 from "module_13858" /* 13858 */;

let set;


export default (arg0, arg1) => {
  set = new _mod13858(arg0, arg1).set;
  return set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    const str2 = str.trim();
    return str2.split(" ");
  });
};
