// Module ID: 16627
// Function ID: 16628
// Dependencies: [16628]

// Module 16627
import _mod16628 from "module_16628" /* 16628 */;


export default !_mod16628(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
