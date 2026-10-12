// Module ID: 14554
// Function ID: 14555
// Dependencies: [14555]

// Module 14554
import _mod14555 from "module_14555" /* 14555 */;


export default !_mod14555(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
