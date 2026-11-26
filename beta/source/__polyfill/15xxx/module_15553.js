// Module ID: 15553
// Function ID: 15554
// Dependencies: [15554]

// Module 15553
import _mod15554 from "module_15554" /* 15554 */;


export default !_mod15554(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
