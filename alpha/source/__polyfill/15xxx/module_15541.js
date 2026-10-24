// Module ID: 15541
// Function ID: 15542
// Dependencies: [15540]

// Module 15541
import _mod15540 from "module_15540" /* 15540 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15540, arg0, obj);
  } catch (err) {
    _mod15540[arg0] = value;
  }
  return value;
};
