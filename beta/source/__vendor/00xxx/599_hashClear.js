// Module ID: 599
// Function ID: 600
// Name: hashClear
// Dependencies: [600]

// Module 599 (hashClear)
import getNative from "getNative" /* 600 */;


export default function hashClear() {
  if (getNative) {
    let obj2 = getNative(null);
  } else {
    obj2 = {};
  }
};
