// Module ID: 16131
// Function ID: 16132
// Dependencies: [16132]

// Module 16131
import _mod16132 from "module_16132" /* 16132 */;


export default !_mod16132(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
