// Module ID: 4533
// Function ID: 4534
// Name: flatten
// Dependencies: [4534]

// Module 4533 (flatten)
import baseFlatten from "baseFlatten" /* 4534 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
