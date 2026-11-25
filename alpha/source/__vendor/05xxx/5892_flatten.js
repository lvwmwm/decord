// Module ID: 5892
// Function ID: 5893
// Name: flatten
// Dependencies: [5893]

// Module 5892 (flatten)
import baseFlatten from "baseFlatten" /* 5893 */;


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
