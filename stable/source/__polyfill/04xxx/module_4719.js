// Module ID: 4719
// Function ID: 4720
// Dependencies: [660, 658, 659, 4715]

// Module 4719
import arrayPush from "arrayPush" /* 658 */;
import stubArray from "stubArray" /* 659 */;
import _mod660 from "module_660" /* 660 */;
import _mod4715 from "module_4715" /* 4715 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4715(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;
