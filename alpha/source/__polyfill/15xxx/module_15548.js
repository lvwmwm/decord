// Module ID: 15548
// Function ID: 15549
// Dependencies: [15549]

// Module 15548
import _mod15549 from "module_15549" /* 15549 */;


export default !_mod15549(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
