// Module ID: 616
// Function ID: 617
// Name: ListCache
// Dependencies: [617, 618, 621, 622, 623]

// Module 616 (ListCache)
import listCacheClear from "listCacheClear" /* 617 */;
import listCacheDelete from "listCacheDelete" /* 618 */;
import listCacheGet from "listCacheGet" /* 621 */;
import listCacheHas from "listCacheHas" /* 622 */;
import listCacheSet from "listCacheSet" /* 623 */;

class ListCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    clearResult = this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = self.set(tmp2[0], tmp2[1]);
    }
    return;
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

export default ListCache;
