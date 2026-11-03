// Module ID: 5964
// Function ID: 5965
// Name: flatten
// Dependencies: [5965]

// Module 5964 (flatten)
import baseFlatten from "baseFlatten" /* 5965 */;


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
