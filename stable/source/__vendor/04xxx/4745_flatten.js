// Module ID: 4745
// Function ID: 4746
// Name: flatten
// Dependencies: [4746]

// Module 4745 (flatten)
import baseFlatten from "baseFlatten" /* 4746 */;


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
