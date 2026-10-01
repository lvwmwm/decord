// Module ID: 4919
// Function ID: 4920
// Dependencies: [660, 658, 659, 4915]

// Module 4919
import arrayPush from "arrayPush" /* 658 */;
import stubArray from "stubArray" /* 659 */;
import stubArray2 from "stubArray" /* 660 */;
import overArg from "overArg" /* 4915 */;

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
