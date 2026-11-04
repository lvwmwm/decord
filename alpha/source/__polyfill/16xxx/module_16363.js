// Module ID: 16363
// Function ID: 16364
// Dependencies: [16364]

// Module 16363
import _mod16364 from "module_16364" /* 16364 */;


export default !_mod16364(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
