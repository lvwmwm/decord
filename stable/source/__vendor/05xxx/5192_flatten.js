// Module ID: 5192
// Function ID: 5193
// Name: flatten
// Dependencies: [5193]

// Module 5192 (flatten)
import baseFlatten from "baseFlatten" /* 5193 */;


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
