// Module ID: 4954
// Function ID: 4955
// Name: flatten
// Dependencies: [4955]

// Module 4954 (flatten)
import baseFlatten from "baseFlatten" /* 4955 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
