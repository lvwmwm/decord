// Module ID: 4920
// Function ID: 4921
// Dependencies: [672, 670, 671, 4916]

// Module 4920
import arrayPush from "arrayPush" /* 670 */;
import stubArray from "stubArray" /* 671 */;
import stubArray2 from "stubArray" /* 672 */;
import overArg from "overArg" /* 4916 */;

let fn;
if (Object.getOwnPropertySymbols) {
  fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = overArg(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = stubArray2;
}

export default fn;
