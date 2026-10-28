// Module ID: 5830
// Function ID: 5831
// Name: flatten
// Dependencies: [5831]

// Module 5830 (flatten)
import baseFlatten from "baseFlatten" /* 5831 */;


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
