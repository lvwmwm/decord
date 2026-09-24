// Module ID: 4873
// Function ID: 4874
// Dependencies: [664, 662, 663, 4869]

// Module 4873
import arrayPush from "arrayPush" /* 662 */;
import stubArray from "stubArray" /* 663 */;
import _mod664 from "module_664" /* 664 */;
import _mod4869 from "module_4869" /* 4869 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4869(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod664;
}

export default fn;
