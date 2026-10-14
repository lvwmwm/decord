// Module ID: 5196
// Function ID: 5197
// Name: flatten
// Dependencies: [5197]

// Module 5196 (flatten)
import baseFlatten from "baseFlatten" /* 5197 */;


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
