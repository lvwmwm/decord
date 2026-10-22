// Module ID: 5780
// Function ID: 5781
// Name: flatten
// Dependencies: [5781]

// Module 5780 (flatten)
import baseFlatten from "baseFlatten" /* 5781 */;


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
