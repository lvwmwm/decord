// Module ID: 15543
// Function ID: 15544
// Dependencies: [15544]

// Module 15543
import _mod15544 from "module_15544" /* 15544 */;


export default !_mod15544(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
