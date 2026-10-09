// Module ID: 5191
// Function ID: 5192
// Name: flatten
// Dependencies: [5192]

// Module 5191 (flatten)
import baseFlatten from "baseFlatten" /* 5192 */;


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
