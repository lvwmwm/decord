// Module ID: 15582
// Function ID: 15583
// Dependencies: [15583]

// Module 15582
import _mod15583 from "module_15583" /* 15583 */;


export default !_mod15583(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
