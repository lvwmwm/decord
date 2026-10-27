// Module ID: 15584
// Function ID: 15585
// Dependencies: [15585]

// Module 15584
import _mod15585 from "module_15585" /* 15585 */;


export default !_mod15585(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
