// Module ID: 4867
// Function ID: 4868
// Name: flatten
// Dependencies: [4868]

// Module 4867 (flatten)
import baseFlatten from "baseFlatten" /* 4868 */;


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
