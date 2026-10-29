// Module ID: 16046
// Function ID: 16047
// Dependencies: [16047]

// Module 16046
import _mod16047 from "module_16047" /* 16047 */;


export default !_mod16047(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
