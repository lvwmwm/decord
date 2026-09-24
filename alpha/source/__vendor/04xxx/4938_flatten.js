// Module ID: 4938
// Function ID: 4939
// Name: flatten
// Dependencies: [4939]

// Module 4938 (flatten)
import baseFlatten from "baseFlatten" /* 4939 */;


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
