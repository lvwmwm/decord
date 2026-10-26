// Module ID: 5794
// Function ID: 5795
// Name: flatten
// Dependencies: [5795]

// Module 5794 (flatten)
import baseFlatten from "baseFlatten" /* 5795 */;


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
