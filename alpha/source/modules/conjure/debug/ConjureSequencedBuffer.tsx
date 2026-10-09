// Module ID: 10618
// Function ID: 10619
// Name: ConjureSequencedBuffer
// Dependencies: [2]

// Module 10618 (ConjureSequencedBuffer)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureSequencedBuffer.tsx");
class ConjureSequencedBuffer {
  constructor(seqOf) {
    const merged = Object.assign({ items: null, cached: null });
    merged[0] = [];
    merged.seqOf = seqOf;
    return merged;
  }
  at(arg0) {
    const items = this.items;
    return items.at(arg0);
  }
  findIndex(arg0) {
    const items = this.items;
    return items.findIndex(arg0);
  }
  indexOfSeq(seq) {
    const self = this;
    let diff = this.items.length - 1;
    let num = 0;
    if (0 <= diff) {
      const keyOfResult = self.keyOf(self.items[num + diff >> 1]);
      let sum = num;
      while (keyOfResult !== seq) {
        let diff1;
        if (keyOfResult < seq) {
          sum = tmp2 + 1;
          diff1 = diff;
        } else {
          diff1 = tmp2 - 1;
        }
        diff = diff1;
        num = sum;
      }
      return num + diff >> 1;
    }
    return -1;
  }
  insert(arg0) {
    const self = this;
    const keyOfResult = this.keyOf(arg0);
    let tmp2 = length;
    if (this.items.length > 0) {
      let tmp3 = length;
      tmp2 = length;
      if (self.keyOf(self.items[this.items.length - 1]) > keyOfResult) {
        const diff = tmp3 - 1;
        tmp2 = diff;
        while (diff > 0) {
          tmp3 = diff;
          tmp2 = diff;
          if (self.keyOf(self.items[diff - 1]) <= keyOfResult) {
            break;
          }
        }
      }
    }
    const items = self.items;
    items.splice(tmp2, 0, arg0);
    self.cached = null;
  }
  replace(arg0, arg1) {
    const self = this;
    const keyOfResult = this.keyOf(this.items[arg0]);
    if (keyOfResult === this.keyOf(arg1)) {
      self.items[arg0] = arg1;
      self.cached = null;
    } else {
      const items = self.items;
      items.splice(arg0, 1);
      self.insert(arg1);
    }
  }
  retain(arg0) {
    const self = this;
    const items = this.items;
    const found = items.filter(arg0);
    if (found.length !== this.items.length) {
      self.items = found;
      self.cached = null;
    }
  }
  trim(arg0) {
    const self = this;
    if (this.items.length > arg0) {
      const items = self.items;
      items.splice(0, self.items.length - arg0);
      self.cached = null;
    }
  }
  values() {
    return this.items;
  }
  snapshot() {
    const self = this;
    if (this.cached == null) {
      const items = self.items;
      self.cached = items.slice();
    }
    return self.cached;
  }
  keyOf(arg0) {
    let num = this.seqOf(arg0);
    if (num == null) {
      num = Infinity;
    }
    return num;
  }
}
const prototype = ConjureSequencedBuffer.prototype;

export { ConjureSequencedBuffer };
