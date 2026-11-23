// Module ID: 15541
// Function ID: 15542
// Dependencies: [15542]

// Module 15541
import _mod15542 from "module_15542" /* 15542 */;


export default !_mod15542(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
