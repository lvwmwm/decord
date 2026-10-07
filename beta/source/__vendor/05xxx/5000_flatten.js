// Module ID: 5000
// Function ID: 5001
// Name: flatten
// Dependencies: [5001]

// Module 5000 (flatten)
import baseFlatten from "baseFlatten" /* 5001 */;


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
