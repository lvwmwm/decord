// Module ID: 15254
// Function ID: 15255
// Dependencies: [15255]

// Module 15254
import _mod15255 from "module_15255" /* 15255 */;


export default !_mod15255(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
