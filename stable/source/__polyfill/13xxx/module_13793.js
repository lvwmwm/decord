// Module ID: 13793
// Function ID: 13794
// Dependencies: [13794]

// Module 13793
import _mod13794 from "module_13794" /* 13794 */;


export default !_mod13794(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
