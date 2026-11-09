// Module ID: 16444
// Function ID: 16445
// Dependencies: [16445]

// Module 16444
import _mod16445 from "module_16445" /* 16445 */;


export default !_mod16445(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
