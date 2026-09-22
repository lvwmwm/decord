// Module ID: 4866
// Function ID: 4867
// Name: flatten
// Dependencies: [4867]

// Module 4866 (flatten)
import baseFlatten from "baseFlatten" /* 4867 */;


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
