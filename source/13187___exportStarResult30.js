// Module ID: 13187
// Function ID: 101550
// Name: __exportStarResult30
// Dependencies: [13139]

// Module 13187 (__exportStarResult30)
const require = arg1;
const dependencyMap = arg6;
arg5.PartitionPattern = function PartitionPattern(arr) {
  const items = [];
  const index = arr.indexOf("{");
  let num = 0;
  if (index < arr.length) {
    let tmp2 = index;
    let num4 = 0;
    num = 0;
    if (index > -1) {
      while (true) {
        let index1 = arr.indexOf("}", tmp2);
        let tmp4 = require;
        let tmp5 = dependencyMap;
        let concat = "Invalid pattern ".concat;
        let tmp6 = index1 > tmp2;
        let invariantResult = require(13139) /* setInternalSlot */.invariant(tmp6, "Invalid pattern ".concat(arr));
        let tmp8 = tmp2;
        if (tmp2 > num4) {
          let obj = { type: "literal", value: arr.substring(num4, tmp2) };
          arr = items.push(obj);
        }
        obj = { type: arr.substring(tmp2 + 1, index1), value: undefined };
        arr = items.push(obj);
        let sum = index1 + 1;
        let index2 = arr.indexOf("{", sum);
        num = sum;
        if (index2 >= arr.length) {
          break;
        } else {
          num4 = sum;
          num = sum;
          tmp2 = index2;
          if (index2 <= -1) {
            break;
          }
        }
      }
    }
  }
  if (num < arr.length) {
    obj = { type: "literal", value: arr.substring(num, length) };
    items.push(obj);
  }
  return items;
};
