// Module ID: 16632
// Function ID: 16633
// Dependencies: [16633]

// Module 16632
import _mod16633 from "module_16633" /* 16633 */;


export default !_mod16633(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
