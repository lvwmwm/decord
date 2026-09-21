// Module ID: 4865
// Function ID: 4866
// Name: flatten
// Dependencies: [4866]

// Module 4865 (flatten)
import baseFlatten from "baseFlatten" /* 4866 */;


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
