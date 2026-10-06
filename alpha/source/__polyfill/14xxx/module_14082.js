// Module ID: 14082
// Function ID: 14083
// Dependencies: [14083]

// Module 14082
import _mod14083 from "module_14083" /* 14083 */;


export default !_mod14083(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
