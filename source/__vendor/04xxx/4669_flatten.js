// Module ID: 4669
// Function ID: 4670
// Name: flatten
// Dependencies: [4670]

// Module 4669 (flatten)
import baseFlatten from "baseFlatten" /* 4670 */;


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
