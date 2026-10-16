// Module ID: 5254
// Function ID: 5255
// Name: flatten
// Dependencies: [5255]

// Module 5254 (flatten)
import baseFlatten from "baseFlatten" /* 5255 */;


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
