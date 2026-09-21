// Module ID: 14320
// Function ID: 14321
// Dependencies: [14317]

// Module 14320
import _mod14317 from "module_14317" /* 14317 */;


export default (arg0, arg1) => {
  const tmp = new _mod14317(arg0, arg1);
  return new _mod14317(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
