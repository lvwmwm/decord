// Module ID: 14062
// Function ID: 14063
// Dependencies: [14063]

// Module 14062
import _mod14063 from "module_14063" /* 14063 */;


export default !_mod14063(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
