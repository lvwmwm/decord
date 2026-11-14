// Module ID: 16750
// Function ID: 16751
// Dependencies: [16751]

// Module 16750
import _mod16751 from "module_16751" /* 16751 */;


export default !_mod16751(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
