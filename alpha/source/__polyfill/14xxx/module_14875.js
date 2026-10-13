// Module ID: 14875
// Function ID: 14876
// Dependencies: [14876]

// Module 14875
import _mod14876 from "module_14876" /* 14876 */;


export default !_mod14876(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
