// Module ID: 15810
// Function ID: 15811
// Dependencies: [15811]

// Module 15810
import _mod15811 from "module_15811" /* 15811 */;


export default !_mod15811(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
