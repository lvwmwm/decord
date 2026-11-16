// Module ID: 6141
// Function ID: 6142
// Name: flatten
// Dependencies: [6142]

// Module 6141 (flatten)
import baseFlatten from "baseFlatten" /* 6142 */;


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
