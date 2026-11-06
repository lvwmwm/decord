// Module ID: 16386
// Function ID: 16387
// Dependencies: [16387]

// Module 16386
import _mod16387 from "module_16387" /* 16387 */;


export default !_mod16387(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
