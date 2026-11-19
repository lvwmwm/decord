// Module ID: 15454
// Function ID: 15455
// Dependencies: [15455]

// Module 15454
import _mod15455 from "module_15455" /* 15455 */;


export default !_mod15455(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
