// Module ID: 4599
// Function ID: 4600
// Name: flatten
// Dependencies: [4600]

// Module 4599 (flatten)
import baseFlatten from "baseFlatten" /* 4600 */;


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
