// Module ID: 5826
// Function ID: 5827
// Name: flatten
// Dependencies: [5827]

// Module 5826 (flatten)
import baseFlatten from "baseFlatten" /* 5827 */;


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
