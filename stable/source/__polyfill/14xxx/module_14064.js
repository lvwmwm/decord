// Module ID: 14064
// Function ID: 14065
// Dependencies: [14065]

// Module 14064
import _mod14065 from "module_14065" /* 14065 */;


export default !_mod14065(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
