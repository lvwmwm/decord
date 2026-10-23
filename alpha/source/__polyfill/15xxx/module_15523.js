// Module ID: 15523
// Function ID: 15524
// Dependencies: [15524]

// Module 15523
import _mod15524 from "module_15524" /* 15524 */;


export default !_mod15524(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
