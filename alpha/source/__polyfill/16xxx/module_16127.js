// Module ID: 16127
// Function ID: 16128
// Dependencies: [16128]

// Module 16127
import _mod16128 from "module_16128" /* 16128 */;


export default !_mod16128(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
