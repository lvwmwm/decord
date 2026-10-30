// Module ID: 583
// Function ID: 584
// Name: baseIteratee
// Dependencies: [549, 514, 584, 661, 664]

// Module 583 (baseIteratee)
import _mod514 from "module_514" /* 514 */;
import identity from "identity" /* 549 */;
import property from "property" /* 664 */;


export default function baseIteratee(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    let tmp5;
    if (null == fn) {
      tmp5 = identity;
    } else if (typeof fn === "object") {
      let tmp4;
      if (_mod514(fn)) {
        tmp4 = tmp2(584)(fn[0], fn[1]);
      } else {
        tmp4 = tmp2(661)(fn);
      }
      tmp5 = tmp4;
    } else {
      tmp5 = property(fn);
    }
    tmp = tmp5;
  }
  return tmp;
};
