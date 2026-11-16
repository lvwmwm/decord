// Module ID: 16473
// Function ID: 16474
// Dependencies: [16474]

// Module 16473
import _mod16474 from "module_16474" /* 16474 */;


export default !_mod16474(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
