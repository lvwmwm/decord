// Module ID: 15445
// Function ID: 15446
// Dependencies: [15446]

// Module 15445
import _mod15446 from "module_15446" /* 15446 */;


export default !_mod15446(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
