// Module ID: 6000
// Function ID: 6001
// Name: flatten
// Dependencies: [6001]

// Module 6000 (flatten)
import baseFlatten from "baseFlatten" /* 6001 */;


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
