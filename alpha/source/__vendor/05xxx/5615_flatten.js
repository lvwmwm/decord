// Module ID: 5615
// Function ID: 5616
// Name: flatten
// Dependencies: [5616]

// Module 5615 (flatten)
import baseFlatten from "baseFlatten" /* 5616 */;


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
