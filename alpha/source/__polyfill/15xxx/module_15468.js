// Module ID: 15468
// Function ID: 15469
// Dependencies: [15469]

// Module 15468
import _mod15469 from "module_15469" /* 15469 */;


export default !_mod15469(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
