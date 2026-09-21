// Module ID: 14324
// Function ID: 14325
// Dependencies: [14317]

// Module 14324
import _mod14317 from "module_14317" /* 14317 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14317(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
