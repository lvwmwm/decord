// Module ID: 7195
// Function ID: 7196
// Name: ExtendedMemoryLru
// Dependencies: [32, 7196, 7197, 2]

// Module 7195 (ExtendedMemoryLru)
import Lru from "Lru" /* 7196 */;
import IterableAll from "Iterable" /* 7197 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/util/ExtendedMemoryLru.tsx");
class ExtendedMemoryLru {
  constructor(primaryCapacity, extendedCapacity) {
    const obj = Object.create(new.target.prototype);
    const lru = new Lru.Lru(primaryCapacity);
    obj.primary = lru;
    const lru1 = new Lru.Lru(extendedCapacity);
    obj.extended = lru1;
    return obj;
  }
  clear() {
    const primary = this.primary;
    primary.clear();
    const extended = this.extended;
    extended.clear();
  }
  has(arg0) {
    const primary = this.primary;
    return primary.has(arg0);
  }
  hasExtended(id) {
    const primary = this.primary;
    let hasItem = primary.has(id);
    if (!hasItem) {
      const extended = this.extended;
      hasItem = extended.has(id);
    }
    return hasItem;
  }
  get(arg0) {
    const primary = this.primary;
    return primary.get(arg0);
  }
  put(arg0, arg1) {
    const primary = this.primary;
    const putResult = primary.put(arg0, arg1);
    if (undefined !== putResult) {
      const extended = this.extended;
      extended.put(putResult[0], putResult[1]);
    }
  }
  delete(arg0) {
    const primary = this.primary;
    let deleteResult = primary.delete(arg0);
    const extended = this.extended;
    const deleteResult1 = extended.delete(arg0);
    this.upstreamItems();
    if (!deleteResult) {
      deleteResult = deleteResult1;
    }
    return deleteResult;
  }
  upstreamItems() {
    let canUpstreamItemsResult;
    let first;
    let tmp4;
    const self = this;
    if (this.canUpstreamItems()) {
      do {
        let extended = self.extended;
        [first, tmp4] = extended.newest();
        let extended2 = self.extended;
        let deleteResult = extended2.delete(first);
        let primary = self.primary;
        let putOldestResult = primary.putOldest(first, tmp4);
        canUpstreamItemsResult = self.canUpstreamItems();
      } while (canUpstreamItemsResult);
    }
  }
  canUpstreamItems() {
    return this.primary.length < this.primary.capacity && this.extended.length > 0;
  }
  entries() {
    const primary = this.primary;
    return primary.entries();
  }
  keys() {
    const primary = this.primary;
    return primary.keys();
  }
  values() {
    const primary = this.primary;
    return primary.values();
  }
  allEntries() {
    const extended = this.extended;
    const chain = IterableAll.chain;
    const primary = this.primary;
    IterableAll;
    const entries = extended.entries();
    return chain(entries, primary.entries());
  }
  allKeys() {
    const extended = this.extended;
    const chain = IterableAll.chain;
    const primary = this.primary;
    IterableAll;
    const keys = extended.keys();
    return chain(keys, primary.keys());
  }
  allValues() {
    const extended = this.extended;
    const chain = IterableAll.chain;
    const primary = this.primary;
    IterableAll;
    const values = extended.values();
    return chain(values, primary.values());
  }
}
const prototype = ExtendedMemoryLru.prototype;
Object.defineProperty(prototype, "totalLength", {
  get: function totalLength() {
    return this.primary.length + this.extended.length;
  },
  set: undefined
});
Object.defineProperty(prototype, "primaryCapacity", {
  get: function primaryCapacity() {
    return this.primary.capacity;
  },
  set: undefined
});
Object.defineProperty(prototype, "extendedCapacity", {
  get: function extendedCapacity() {
    return this.extended.capacity;
  },
  set: undefined
});

export { ExtendedMemoryLru };
