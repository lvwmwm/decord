// Module ID: 5800
// Function ID: 5801
// Dependencies: [671, 669, 670, 5796]

// Module 5800
import arrayPush from "arrayPush" /* 669 */;
import stubArray from "stubArray" /* 670 */;
import stubArray2 from "stubArray" /* 671 */;
import overArg from "overArg" /* 5796 */;

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
