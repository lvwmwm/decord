// Module ID: 16389
// Function ID: 16390
// Dependencies: [16390]

// Module 16389
import _mod16390 from "module_16390" /* 16390 */;


export default !_mod16390(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
