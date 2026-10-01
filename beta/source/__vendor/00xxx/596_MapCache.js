// Module ID: 596
// Function ID: 597
// Name: MapCache
// Dependencies: [597, 620, 623, 624, 625]

// Module 596 (MapCache)
import mapCacheClear from "mapCacheClear" /* 597 */;
import mapCacheDelete from "mapCacheDelete" /* 620 */;
import mapCacheGet from "mapCacheGet" /* 623 */;
import mapCacheHas from "mapCacheHas" /* 624 */;
import mapCacheSet from "mapCacheSet" /* 625 */;

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
