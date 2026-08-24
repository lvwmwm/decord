// Module ID: 735
// Function ID: 736
// Name: hashClear
// Dependencies: [736]

// Module 735 (hashClear)
import getNative from "getNative" /* 736 */;


export default function hashClear() {
  let obj = {};
  if (getNative) {
    obj = getNative(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};
