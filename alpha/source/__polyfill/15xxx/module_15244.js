// Module ID: 15244
// Function ID: 15245
// Dependencies: [15245]

// Module 15244
import _mod15245 from "module_15245" /* 15245 */;


export default !_mod15245(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
