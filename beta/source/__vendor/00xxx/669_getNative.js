// Module ID: 669
// Function ID: 670
// Name: getNative
// Dependencies: [601]

// Module 669 (getNative)
import getNative from "getNative" /* 601 */;


export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();
