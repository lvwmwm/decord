// Module ID: 12831
// Function ID: 12832
// Name: clone
// Dependencies: [12800]

// Module 12831 (clone)
import List from "List" /* 12800 */;

function clone(obj) {
  obj = {};
  for (const key10006 in obj) {
    let arr = obj[key10006];
    let tmp6 = arr;
    if (tmp6) {
      let _Array = Array;
      if (!Array.isArray(arr)) {
        let mapped;
        if (!(arr instanceof List)) {
          let _Object = Object;
          mapped = arr;
          if (arr.constructor === Object) {
            mapped = clone(arr);
          }
        }
        tmp6 = mapped;
      }
      mapped = arr.map(clone);
    }
    obj[key10006] = tmp6;
    continue;
  }
  return obj;
}

export default clone;
