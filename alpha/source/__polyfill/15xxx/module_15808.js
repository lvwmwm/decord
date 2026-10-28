// Module ID: 15808
// Function ID: 15809
// Dependencies: [15807]

// Module 15808
import _mod15807 from "module_15807" /* 15807 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15807, arg0, obj);
  } catch (err) {
    _mod15807[arg0] = value;
  }
  return value;
};
