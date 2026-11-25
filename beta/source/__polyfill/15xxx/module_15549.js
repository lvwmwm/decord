// Module ID: 15549
// Function ID: 15550
// Dependencies: [15550]

// Module 15549
import _mod15550 from "module_15550" /* 15550 */;


export default !_mod15550(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
