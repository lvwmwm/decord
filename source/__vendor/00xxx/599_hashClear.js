// Module ID: 599
// Function ID: 600
// Name: hashClear
// Dependencies: [600]

// Module 599 (hashClear)
import getNative from "getNative" /* 600 */;


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
