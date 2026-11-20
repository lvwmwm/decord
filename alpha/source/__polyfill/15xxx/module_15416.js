// Module ID: 15416
// Function ID: 15417
// Dependencies: [15415]

// Module 15416
import _mod15415 from "module_15415" /* 15415 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15415, arg0, obj);
  } catch (err) {
    _mod15415[arg0] = value;
  }
  return value;
};
