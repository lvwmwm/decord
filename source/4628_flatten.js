// Module ID: 4628
// Function ID: 4629
// Name: flatten
// Dependencies: [4629]

// Module 4628 (flatten)
import baseFlatten from "baseFlatten" /* 4629 */;


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
