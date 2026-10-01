// Module ID: 612
// Function ID: 613
// Name: ListCache
// Dependencies: [613, 614, 617, 618, 619]

// Module 612 (ListCache)
import listCacheClear from "listCacheClear" /* 613 */;
import listCacheDelete from "listCacheDelete" /* 614 */;
import listCacheGet from "listCacheGet" /* 617 */;
import listCacheHas from "listCacheHas" /* 618 */;
import listCacheSet from "listCacheSet" /* 619 */;

class ListCache {
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
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

export default ListCache;
