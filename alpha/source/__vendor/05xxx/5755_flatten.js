// Module ID: 5755
// Function ID: 5756
// Name: flatten
// Dependencies: [5756]

// Module 5755 (flatten)
import baseFlatten from "baseFlatten" /* 5756 */;


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
