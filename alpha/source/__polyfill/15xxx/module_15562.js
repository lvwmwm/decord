// Module ID: 15562
// Function ID: 15563
// Dependencies: [15563]

// Module 15562
import _mod15563 from "module_15563" /* 15563 */;


export default !_mod15563(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
