// Module ID: 709
// Function ID: 8720
// Name: MapCache
// Dependencies: []

// Module 709 (MapCache)
class MapCache {
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
MapCache.prototype.clear = require(dependencyMap[0]);
MapCache.prototype.delete = require(dependencyMap[1]);
MapCache.prototype.get = require(dependencyMap[2]);
MapCache.prototype.has = require(dependencyMap[3]);
MapCache.prototype.set = require(dependencyMap[4]);

export default MapCache;
