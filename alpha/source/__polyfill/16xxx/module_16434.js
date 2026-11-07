// Module ID: 16434
// Function ID: 16435
// Dependencies: [16435]

// Module 16434
import _mod16435 from "module_16435" /* 16435 */;


export default !_mod16435(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
