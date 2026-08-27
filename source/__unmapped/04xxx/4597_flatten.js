// Module ID: 4597
// Function ID: 4598
// Name: flatten
// Dependencies: [4598]

// Module 4597 (flatten)
import baseFlatten from "baseFlatten" /* 4598 */;


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
