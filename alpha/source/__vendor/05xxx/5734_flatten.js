// Module ID: 5734
// Function ID: 5735
// Name: flatten
// Dependencies: [5735]

// Module 5734 (flatten)
import baseFlatten from "baseFlatten" /* 5735 */;


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
