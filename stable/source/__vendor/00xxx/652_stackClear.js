// Module ID: 652
// Function ID: 653
// Name: stackClear
// Dependencies: [624]

// Module 652 (stackClear)
import ListCache from "ListCache" /* 624 */;


export default function stackClear() {
  ({ __data__: new ListCache(), size: 0 });
  new ListCache();
};
