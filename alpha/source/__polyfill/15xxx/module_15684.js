// Module ID: 15684
// Function ID: 15685
// Dependencies: [15685]

// Module 15684
import _mod15685 from "module_15685" /* 15685 */;


export default !_mod15685(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
