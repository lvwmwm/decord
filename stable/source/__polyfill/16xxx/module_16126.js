// Module ID: 16126
// Function ID: 16127
// Dependencies: [16127]

// Module 16126
import _mod16127 from "module_16127" /* 16127 */;


export default !_mod16127(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
