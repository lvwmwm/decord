// Module ID: 5253
// Function ID: 5254
// Name: flatten
// Dependencies: [5254]

// Module 5253 (flatten)
import baseFlatten from "baseFlatten" /* 5254 */;


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
