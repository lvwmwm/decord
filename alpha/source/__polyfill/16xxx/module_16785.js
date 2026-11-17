// Module ID: 16785
// Function ID: 16786
// Dependencies: [16786]

// Module 16785
import _mod16786 from "module_16786" /* 16786 */;


export default !_mod16786(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
