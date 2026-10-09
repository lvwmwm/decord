// Module ID: 14477
// Function ID: 14478
// Dependencies: [14478]

// Module 14477
import _mod14478 from "module_14478" /* 14478 */;


export default !_mod14478(() => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty({}, 1, obj)[1];
});
