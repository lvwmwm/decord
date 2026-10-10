// Module ID: 14531
// Function ID: 14532
// Dependencies: [14532]

// Module 14531
import _mod14532 from "module_14532" /* 14532 */;


export default !_mod14532(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
