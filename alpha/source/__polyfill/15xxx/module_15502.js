// Module ID: 15502
// Function ID: 15503
// Dependencies: [15503]

// Module 15502
import _mod15503 from "module_15503" /* 15503 */;


export default !_mod15503(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
