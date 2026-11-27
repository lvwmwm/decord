// Module ID: 15742
// Function ID: 15743
// Dependencies: [15743]

// Module 15742
import _mod15743 from "module_15743" /* 15743 */;


export default !_mod15743(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
