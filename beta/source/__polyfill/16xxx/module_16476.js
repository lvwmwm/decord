// Module ID: 16476
// Function ID: 16477
// Dependencies: [16477]

// Module 16476
import _mod16477 from "module_16477" /* 16477 */;


export default !_mod16477(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
