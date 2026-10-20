// Module ID: 15373
// Function ID: 15374
// Dependencies: [15374]

// Module 15373
import _mod15374 from "module_15374" /* 15374 */;


export default !_mod15374(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
