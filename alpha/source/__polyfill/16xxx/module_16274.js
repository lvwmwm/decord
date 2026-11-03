// Module ID: 16274
// Function ID: 16275
// Dependencies: [16275]

// Module 16274
import _mod16275 from "module_16275" /* 16275 */;


export default !_mod16275(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
