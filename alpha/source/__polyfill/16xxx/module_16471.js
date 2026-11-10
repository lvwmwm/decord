// Module ID: 16471
// Function ID: 16472
// Dependencies: [16472]

// Module 16471
import _mod16472 from "module_16472" /* 16472 */;


export default !_mod16472(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
