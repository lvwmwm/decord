// Module ID: 725
// Function ID: 8749
// Name: ListCache
// Dependencies: []

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
      result = self.set(tmp2[0], tmp2[1]);
    }
    return;
  }
}
ListCache.prototype.clear = require(dependencyMap[0]);
ListCache.prototype.delete = require(dependencyMap[1]);
ListCache.prototype.get = require(dependencyMap[2]);
ListCache.prototype.has = require(dependencyMap[3]);
ListCache.prototype.set = require(dependencyMap[4]);

export default ListCache;
