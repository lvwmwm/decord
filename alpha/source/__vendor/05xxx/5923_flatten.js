// Module ID: 5923
// Function ID: 5924
// Name: flatten
// Dependencies: [5924]

// Module 5923 (flatten)
import baseFlatten from "baseFlatten" /* 5924 */;


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
