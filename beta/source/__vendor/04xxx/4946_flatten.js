// Module ID: 4946
// Function ID: 4947
// Name: flatten
// Dependencies: [4947]

// Module 4946 (flatten)
import baseFlatten from "baseFlatten" /* 4947 */;


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
