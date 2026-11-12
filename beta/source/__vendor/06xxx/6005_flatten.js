// Module ID: 6005
// Function ID: 6006
// Name: flatten
// Dependencies: [6006]

// Module 6005 (flatten)
import baseFlatten from "baseFlatten" /* 6006 */;


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
