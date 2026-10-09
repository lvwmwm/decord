// Module ID: 5165
// Function ID: 5166
// Dependencies: [671, 669, 670, 5161]

// Module 5165
import arrayPush from "arrayPush" /* 669 */;
import stubArray from "stubArray" /* 670 */;
import stubArray2 from "stubArray" /* 671 */;
import overArg from "overArg" /* 5161 */;

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
