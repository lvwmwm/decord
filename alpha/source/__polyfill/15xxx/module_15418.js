// Module ID: 15418
// Function ID: 15419
// Dependencies: [15419]

// Module 15418
import _mod15419 from "module_15419" /* 15419 */;


export default !_mod15419(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
