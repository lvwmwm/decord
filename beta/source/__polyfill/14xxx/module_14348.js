// Module ID: 14348
// Function ID: 14349
// Dependencies: [14345]

// Module 14348
import _mod14345 from "module_14345" /* 14345 */;


export default (arg0, arg1) => {
  const tmp = new _mod14345(arg0, arg1);
  return new _mod14345(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
