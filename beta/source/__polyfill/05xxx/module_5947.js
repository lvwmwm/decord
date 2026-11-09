// Module ID: 5947
// Function ID: 5948
// Dependencies: [659, 657, 658, 5943]

// Module 5947
import arrayPush from "arrayPush" /* 657 */;
import stubArray from "stubArray" /* 658 */;
import stubArray2 from "stubArray" /* 659 */;
import overArg from "overArg" /* 5943 */;

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
