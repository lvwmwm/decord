// Module ID: 646
// Function ID: 647
// Name: SetCache
// Dependencies: [596, 647, 648]

// Module 646 (SetCache)
import MapCache from "MapCache" /* 596 */;
import setCacheHas from "setCacheHas" /* 648 */;
import setCacheAdd from "setCacheAdd" /* 647 */;

let prototype;
let prototype2;
class SetCache {
  constructor(arg0) {
    let num2;
    let num = 0;
    if (null != arg0) {
      num = arg0.length;
    }
    const self = this;
    this.__data__ = new MapCache();
    new MapCache();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let addResult = self.add(arg0[num2]);
    }
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = setCacheAdd;
prototype.add = setCacheAdd;
SetCache.prototype.has = setCacheHas;

export default SetCache;
