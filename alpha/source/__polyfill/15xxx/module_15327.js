// Module ID: 15327
// Function ID: 15328
// Dependencies: [15328]

// Module 15327
import _mod15328 from "module_15328" /* 15328 */;


export default !_mod15328(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
