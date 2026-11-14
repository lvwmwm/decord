// Module ID: 6151
// Function ID: 6152
// Name: flatten
// Dependencies: [6152]

// Module 6151 (flatten)
import baseFlatten from "baseFlatten" /* 6152 */;


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
