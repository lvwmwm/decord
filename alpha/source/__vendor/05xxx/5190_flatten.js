// Module ID: 5190
// Function ID: 5191
// Name: flatten
// Dependencies: [5191]

// Module 5190 (flatten)
import baseFlatten from "baseFlatten" /* 5191 */;


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
