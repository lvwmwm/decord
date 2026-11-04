// Module ID: 639
// Function ID: 640
// Name: stackClear
// Dependencies: [611]

// Module 639 (stackClear)
import ListCache from "ListCache" /* 611 */;


export default function stackClear() {
  ({ __data__: new ListCache(), size: 0 });
  new ListCache();
};
