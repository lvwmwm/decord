// Module ID: 759
// Function ID: 8814
// Name: SetCache
// Dependencies: []

// Module 759 (SetCache)
let prototype;
let prototype2;
class SetCache {
  constructor(arg0) {
    self = this;
    num = 0;
    if (null != global) {
      num = global.length;
    }
    tmp = require(dependencyMap[0]);
    tmp = new tmp();
    self.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
const _module = require(dependencyMap[1]);
prototype2.push = _module;
prototype.add = _module;
SetCache.prototype.has = require(dependencyMap[2]);

export default SetCache;
