// Module ID: 12843
// Function ID: 12844
// Name: ArraySet
// Dependencies: [12842]

// Module 12843 (ArraySet)
import _mod12842 from "module_12842" /* 12842 */;

let map;

class ArraySet {
  constructor() {
    if (closure_3) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    } else {
      const _Object = Object;
      map = Object.create(null);
    }
    ({ _array: [] }._set) = map;
  }
  static fromArray(arg0, arg1) {
    let num;
    Object.create(ArraySet.prototype);
    const obj = { _array: [], _set: map };
    if (closure_3) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    } else {
      const _Object = Object;
      map = Object.create(null);
    }
    const length = arg0.length;
    for (let num = 0; num < length; num = num + 1) {
      let addResult = obj.add(arg0[num], arg1);
    }
    return obj;
  }
  size() {
    let length;
    const self = this;
    const tmp = closure_3;
    if (tmp) {
      length = self._set.size;
    } else {
      const _Object = Object;
      length = Object.getOwnPropertyNames(self._set).length;
    }
    return length;
  }
  add(relativeResult, arg1) {
    let hasItem;
    let toSetStringResult = relativeResult;
    if (!closure_3) {
      const obj = _mod12842;
      toSetStringResult = obj.toSetString(relativeResult);
    }
    const self = this;
    if (closure_3) {
      hasItem = self.has(relativeResult);
    } else {
      hasItem = hasOwnProperty.call(self._set, toSetStringResult);
    }
    const tmp6 = hasItem && !arg1;
    if (!tmp6) {
      const _array = self._array;
      _array.push(relativeResult);
    }
    if (!hasItem) {
      const _set = self._set;
      if (closure_3) {
        const result = _set.set(relativeResult, length);
      } else {
        _set[toSetStringResult] = self._array.length;
      }
    }
  }
  has(relativeResult) {
    const self = this;
    const tmp = closure_3;
    if (tmp) {
      const _set = self._set;
      return _set.has(relativeResult);
    } else {
      const obj = _mod12842;
      return hasOwnProperty.call(self._set, obj.toSetString(relativeResult));
    }
  }
  indexOf(relativeResult) {
    const self = this;
    const tmp = closure_3;
    if (tmp) {
      const _set = self._set;
      const value = _set.get(relativeResult);
      if (value >= 0) {
        return value;
      }
    } else {
      const obj = _mod12842;
      const toSetStringResult = obj.toSetString(relativeResult);
      if (hasOwnProperty.call(self._set, toSetStringResult)) {
        return self._set[toSetStringResult];
      }
    }
    const error = new Error("\"" + relativeResult + "\" is not in the set.");
    throw error;
  }
  at(arg0) {
    if (arg0 >= 0) {
      if (arg0 < this._array.length) {
        return this._array[arg0];
      }
    }
    const error = new Error("No element indexed by " + arg0);
    throw error;
  }
  toArray() {
    const _array = this._array;
    return _array.slice();
  }
}
let closure_3 = typeof Map !== "undefined";

export { ArraySet };
