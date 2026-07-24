// Module ID: 725
// Function ID: 8755
// Name: ListCache
// Dependencies: [726, 727, 730, 731, 732]

// Module 725 (ListCache)
class ListCache {
  constructor(arg0) {
    self = this;
    num = 0;
    if (null != global) {
      num = global.length;
    }
    clearResult = self.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = require("listCacheClear");
    }
    return;
  }
}
ListCache.prototype.clear = require("listCacheClear");
ListCache.prototype.delete = require("listCacheDelete");
ListCache.prototype.get = require("listCacheGet");
ListCache.prototype.has = require("listCacheHas");
ListCache.prototype.set = require("listCacheSet");

export default ListCache;
