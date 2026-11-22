// Module ID: 15539
// Function ID: 15540
// Dependencies: [15540]

// Module 15539
import _mod15540 from "module_15540" /* 15540 */;


export default !_mod15540(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
