// Module ID: 14559
// Function ID: 14560
// Dependencies: [14560]

// Module 14559
import _mod14560 from "module_14560" /* 14560 */;


export default !_mod14560(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
