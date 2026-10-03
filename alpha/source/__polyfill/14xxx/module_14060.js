// Module ID: 14060
// Function ID: 14061
// Dependencies: [14059]

// Module 14060
import _mod14059 from "module_14059" /* 14059 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14059, arg0, obj);
  } catch (err) {
    _mod14059[arg0] = value;
  }
  return value;
};
