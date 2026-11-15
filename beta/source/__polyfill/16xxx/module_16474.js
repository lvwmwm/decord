// Module ID: 16474
// Function ID: 16475
// Dependencies: [16475]

// Module 16474
import _mod16475 from "module_16475" /* 16475 */;


export default !_mod16475(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
