// Module ID: 16752
// Function ID: 16753
// Dependencies: [16753]

// Module 16752
import _mod16753 from "module_16753" /* 16753 */;


export default !_mod16753(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
