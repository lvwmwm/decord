// Module ID: 646
// Function ID: 647
// Name: SetCache
// Dependencies: [596, 647, 648]

// Module 646 (SetCache)
import MapCache from "MapCache" /* 596 */;
import setCacheHas from "setCacheHas" /* 648 */;
import setCacheAdd from "setCacheAdd" /* 647 */;

class SetCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    tmp = new require("MapCache")();
    this.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = setCacheAdd;
prototype.add = setCacheAdd;
SetCache.prototype.has = setCacheHas;

export default SetCache;
