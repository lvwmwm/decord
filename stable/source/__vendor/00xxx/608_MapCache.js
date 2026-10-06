// Module ID: 608
// Function ID: 609
// Name: MapCache
// Dependencies: [609, 632, 635, 636, 637]

// Module 608 (MapCache)
import mapCacheClear from "mapCacheClear" /* 609 */;
import mapCacheDelete from "mapCacheDelete" /* 632 */;
import mapCacheGet from "mapCacheGet" /* 635 */;
import mapCacheHas from "mapCacheHas" /* 636 */;
import mapCacheSet from "mapCacheSet" /* 637 */;

class MapCache {
  constructor(arg0) {
    let num2;
    let num = 0;
    if (null != arg0) {
      num = arg0.length;
    }
    const self = this;
    this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let tmp2 = arg0[num2];
      let result = self.set(tmp2[0], tmp2[1]);
    }
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

export default MapCache;
