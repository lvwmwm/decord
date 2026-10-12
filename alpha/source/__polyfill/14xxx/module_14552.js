// Module ID: 14552
// Function ID: 14553
// Dependencies: [14551]

// Module 14552
import _mod14551 from "module_14551" /* 14551 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod14551, arg0, obj);
  } catch (err) {
    _mod14551[arg0] = value;
  }
  return value;
};
