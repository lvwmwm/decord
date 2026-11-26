// Module ID: 15735
// Function ID: 15736
// Dependencies: [15736]

// Module 15735
import _mod15736 from "module_15736" /* 15736 */;


export default !_mod15736(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
