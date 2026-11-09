// Module ID: 5973
// Function ID: 5974
// Name: flatten
// Dependencies: [5974]

// Module 5973 (flatten)
import baseFlatten from "baseFlatten" /* 5974 */;


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
