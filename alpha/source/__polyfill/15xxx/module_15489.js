// Module ID: 15489
// Function ID: 15490
// Dependencies: [15490]

// Module 15489
import _mod15490 from "module_15490" /* 15490 */;


export default !_mod15490(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
