// Module ID: 4636
// Function ID: 4637
// Name: flatten
// Dependencies: [4637]

// Module 4636 (flatten)
import baseFlatten from "baseFlatten" /* 4637 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
