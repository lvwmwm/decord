// Module ID: 15547
// Function ID: 15548
// Dependencies: [15548]

// Module 15547
import _mod15548 from "module_15548" /* 15548 */;


export default !_mod15548(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
