// Module ID: 15209
// Function ID: 15210
// Dependencies: [15210]

// Module 15209
import _mod15210 from "module_15210" /* 15210 */;


export default !_mod15210(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
