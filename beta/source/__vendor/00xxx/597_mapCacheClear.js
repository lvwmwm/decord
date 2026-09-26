// Module ID: 597
// Function ID: 598
// Name: mapCacheClear
// Dependencies: [598, 611, 612]

// Module 597 (mapCacheClear)
import Hash from "Hash" /* 598 */;
import _mod611 from "module_611" /* 611 */;
import ListCache from "ListCache" /* 612 */;


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  const tmp3 = new Hash();
  const tmp4 = _mod611 || ListCache;
  obj.map = new _mod611 || ListCache();
  const tmp42 = new _mod611 || ListCache();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
};
