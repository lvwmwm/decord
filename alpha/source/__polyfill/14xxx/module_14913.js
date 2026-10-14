// Module ID: 14913
// Function ID: 14914
// Dependencies: [14914]

// Module 14913
import _mod14914 from "module_14914" /* 14914 */;


export default !_mod14914(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
