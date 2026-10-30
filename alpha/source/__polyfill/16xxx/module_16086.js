// Module ID: 16086
// Function ID: 16087
// Dependencies: [16087]

// Module 16086
import _mod16087 from "module_16087" /* 16087 */;


export default !_mod16087(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
