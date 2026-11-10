// Module ID: 611
// Function ID: 612
// Name: ListCache
// Dependencies: [612, 613, 616, 617, 618]

// Module 611 (ListCache)
import listCacheClear from "listCacheClear" /* 612 */;
import listCacheDelete from "listCacheDelete" /* 613 */;
import listCacheGet from "listCacheGet" /* 616 */;
import listCacheHas from "listCacheHas" /* 617 */;
import listCacheSet from "listCacheSet" /* 618 */;

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
