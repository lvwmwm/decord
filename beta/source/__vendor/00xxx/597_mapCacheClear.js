// Module ID: 597
// Function ID: 598
// Name: mapCacheClear
// Dependencies: [598, 611, 612]

// Module 597 (mapCacheClear)
import Hash from "Hash" /* 598 */;
import getNative from "getNative" /* 611 */;
import ListCache from "ListCache" /* 612 */;


export default function mapCacheClear() {
  let tmp4;
  const obj = { hash: new Hash(), map: new tmp4(), string: new Hash() };
  new Hash();
  tmp4 = getNative || ListCache;
  new tmp4();
  ({ size: 0 }.__data__) = obj;
  new Hash();
};
