// Module ID: 650
// Function ID: 651
// Name: SetCache
// Dependencies: [600, 651, 652]

// Module 650 (SetCache)
import MapCache from "MapCache" /* 600 */;
import _mod652 from "module_652" /* 652 */;
import module_651 from "module_651" /* 651 */;

class SetCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    tmp = new closure_0(closure_1[0])();
    this.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = module_651;
prototype.add = module_651;
SetCache.prototype.has = _mod652;

export default SetCache;
