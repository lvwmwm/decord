// Module ID: 6088
// Function ID: 6089
// Name: flatten
// Dependencies: [6089]

// Module 6088 (flatten)
import baseFlatten from "baseFlatten" /* 6089 */;


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
