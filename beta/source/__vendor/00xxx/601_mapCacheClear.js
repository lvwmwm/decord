// Module ID: 601
// Function ID: 602
// Name: mapCacheClear
// Dependencies: [602, 615, 616]

// Module 601 (mapCacheClear)
import Hash from "Hash" /* 602 */;
import _mod615 from "module_615" /* 615 */;
import ListCache from "ListCache" /* 616 */;


export default function mapCacheClear() {
  const obj = { hash: new Hash(), map: null, string: null };
  const tmp3 = new Hash();
  const tmp4 = _mod615 || ListCache;
  obj.map = new _mod615 || ListCache();
  const tmp42 = new _mod615 || ListCache();
  obj.string = new Hash();
  { size: 0 }.__data__ = obj;
};
