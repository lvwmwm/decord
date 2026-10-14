// Module ID: 651
// Function ID: 652
// Name: stackClear
// Dependencies: [623]

// Module 651 (stackClear)
import ListCache from "ListCache" /* 623 */;


export default function stackClear() {
  ({ __data__: new ListCache(), size: 0 });
  new ListCache();
};
