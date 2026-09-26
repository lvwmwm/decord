// Module ID: 4897
// Function ID: 4898
// Name: flatten
// Dependencies: [4898]

// Module 4897 (flatten)
import baseFlatten from "baseFlatten" /* 4898 */;


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
