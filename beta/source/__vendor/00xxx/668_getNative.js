// Module ID: 668
// Function ID: 669
// Name: getNative
// Dependencies: [600]

// Module 668 (getNative)
import getNative from "getNative" /* 600 */;


export default (() => {
  try {
    const _Object = Object;
    const tmp4 = getNative(Object, "defineProperty");
    tmp4({}, "", {});
    return tmp4;
  } catch (err) {
  }
})();
