// Module ID: 5839
// Function ID: 5840
// Name: flatten
// Dependencies: [5840]

// Module 5839 (flatten)
import baseFlatten from "baseFlatten" /* 5840 */;


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
