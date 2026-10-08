// Module ID: 14381
// Function ID: 14382
// Dependencies: [14382]

// Module 14381
import _mod14382 from "module_14382" /* 14382 */;


export default !_mod14382(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
