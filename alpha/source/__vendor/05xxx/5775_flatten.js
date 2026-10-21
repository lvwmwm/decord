// Module ID: 5775
// Function ID: 5776
// Name: flatten
// Dependencies: [5776]

// Module 5775 (flatten)
import baseFlatten from "baseFlatten" /* 5776 */;


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
