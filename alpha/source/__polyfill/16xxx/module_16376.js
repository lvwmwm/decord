// Module ID: 16376
// Function ID: 16377
// Dependencies: [16377]

// Module 16376
import _mod16377 from "module_16377" /* 16377 */;


export default !_mod16377(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
