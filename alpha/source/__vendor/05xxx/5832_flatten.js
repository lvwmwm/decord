// Module ID: 5832
// Function ID: 5833
// Name: flatten
// Dependencies: [5833]

// Module 5832 (flatten)
import baseFlatten from "baseFlatten" /* 5833 */;


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
