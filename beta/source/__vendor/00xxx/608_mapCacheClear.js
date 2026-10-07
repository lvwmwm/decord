// Module ID: 608
// Function ID: 609
// Name: mapCacheClear
// Dependencies: [609, 622, 623]

// Module 608 (mapCacheClear)
import Hash from "Hash" /* 609 */;
import getNative from "getNative" /* 622 */;
import ListCache from "ListCache" /* 623 */;


export default function mapCacheClear() {
  let tmp4;
  const obj = { hash: new Hash(), map: new tmp4(), string: new Hash() };
  new Hash();
  tmp4 = getNative || ListCache;
  new tmp4();
  ({ size: 0 }.__data__) = obj;
  new Hash();
};
