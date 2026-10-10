// Module ID: 8251
// Function ID: 8252
// Name: LimitedMap
// Dependencies: [2]

// Module 8251 (LimitedMap)
import size from "module_2" /* 2 */;

class LimitedMap extends Map {
  constructor(maxSize) {
    const tmp = new LimitedMap(new.target);
    tmp.maxSize = maxSize;
    return tmp;
  }
  set(arg0, arg1) {
    const self = this;
    if (this.size >= this.maxSize) {
      const iter = self.keys();
      const iter2 = iter.next();
      if (!iter2.done) {
        self.delete(iter2.value);
      }
    }
    return super.set(arg0, arg1);
  }
}
let closure_0 = LimitedMap.prototype;
const result = size.fileFinishedImporting("lib/LimitedMap.tsx");

export default LimitedMap;
