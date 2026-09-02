// Module ID: 729
// Function ID: 730
// Name: MapCache
// Dependencies: [730, 753, 756, 757, 758]

// Module 729 (MapCache)
import mapCacheClear from "mapCacheClear" /* 730 */;
import mapCacheDelete from "mapCacheDelete" /* 753 */;
import mapCacheGet from "mapCacheGet" /* 756 */;
import mapCacheHas from "mapCacheHas" /* 757 */;
import mapCacheSet from "mapCacheSet" /* 758 */;

class MapCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    clearResult = this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = require("mapCacheClear");
    }
    return;
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

export default MapCache;
