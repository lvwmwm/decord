// Module ID: 4598
// Function ID: 4599
// Name: flatten
// Dependencies: [4599]

// Module 4598 (flatten)
import baseFlatten from "baseFlatten" /* 4599 */;


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
