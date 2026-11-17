// Module ID: 6148
// Function ID: 6149
// Name: flatten
// Dependencies: [6149]

// Module 6148 (flatten)
import baseFlatten from "baseFlatten" /* 6149 */;


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
