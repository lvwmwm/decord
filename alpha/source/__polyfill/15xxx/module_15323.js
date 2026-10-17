// Module ID: 15323
// Function ID: 15324
// Dependencies: [15324]

// Module 15323
import _mod15324 from "module_15324" /* 15324 */;


export default !_mod15324(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
