// Module ID: 759
// Function ID: 8819
// Name: SetCache
// Dependencies: [709, 760, 761]

// Module 759 (SetCache)
import setCacheAdd from "setCacheAdd";

let prototype;
let prototype2;
class SetCache {
  constructor(arg0) {
    self = this;
    num = 0;
    if (null != global) {
      num = global.length;
    }
    tmp = require("MapCache");
    tmp = new tmp();
    self.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = setCacheAdd;
prototype.add = setCacheAdd;
SetCache.prototype.has = require("setCacheHas");

export default SetCache;
