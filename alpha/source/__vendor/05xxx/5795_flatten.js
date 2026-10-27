// Module ID: 5795
// Function ID: 5796
// Name: flatten
// Dependencies: [5796]

// Module 5795 (flatten)
import baseFlatten from "baseFlatten" /* 5796 */;


export default function flatten(arg0) {
  let items;
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
