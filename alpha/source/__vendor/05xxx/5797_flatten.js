// Module ID: 5797
// Function ID: 5798
// Name: flatten
// Dependencies: [5798]

// Module 5797 (flatten)
import baseFlatten from "baseFlatten" /* 5798 */;


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
