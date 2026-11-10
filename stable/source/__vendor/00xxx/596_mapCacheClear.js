// Module ID: 596
// Function ID: 597
// Name: mapCacheClear
// Dependencies: [597, 610, 611]

// Module 596 (mapCacheClear)
import Hash from "Hash" /* 597 */;
import getNative from "getNative" /* 610 */;
import ListCache from "ListCache" /* 611 */;


export default function mapCacheClear() {
  let tmp4;
  const obj = { hash: new Hash(), map: new tmp4(), string: new Hash() };
  new Hash();
  tmp4 = getNative || ListCache;
  new tmp4();
  ({ size: 0 }.__data__) = obj;
  new Hash();
};
