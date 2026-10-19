// Module ID: 5291
// Function ID: 5292
// Name: flatten
// Dependencies: [5292]

// Module 5291 (flatten)
import baseFlatten from "baseFlatten" /* 5292 */;


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
