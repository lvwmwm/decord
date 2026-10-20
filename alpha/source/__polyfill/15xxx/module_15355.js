// Module ID: 15355
// Function ID: 15356
// Dependencies: [15356]

// Module 15355
import _mod15356 from "module_15356" /* 15356 */;


export default !_mod15356(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
