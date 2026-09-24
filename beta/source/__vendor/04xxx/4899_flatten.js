// Module ID: 4899
// Function ID: 4900
// Name: flatten
// Dependencies: [4900]

// Module 4899 (flatten)
import baseFlatten from "baseFlatten" /* 4900 */;


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
