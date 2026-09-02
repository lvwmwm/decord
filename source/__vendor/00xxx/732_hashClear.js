// Module ID: 732
// Function ID: 733
// Name: hashClear
// Dependencies: [733]

// Module 732 (hashClear)
import getNative from "getNative" /* 733 */;


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
