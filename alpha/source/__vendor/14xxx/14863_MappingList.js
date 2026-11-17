// Module ID: 14863
// Function ID: 14864
// Name: MappingList
// Dependencies: [14861]

// Module 14863 (MappingList)
import _mod14861 from "module_14861" /* 14861 */;

class MappingList {
  constructor() {

  }
  unsortedForEach(arg0, arg1) {
    const _array = this._array;
    const item = _array.forEach(arg0, arg1);
  }
  add(generatedLine) {
    const self = this;
    const _last = this._last;
    generatedLine = _last.generatedLine;
    const generatedLine2 = generatedLine.generatedLine;
    let tmp3 = generatedLine2 > generatedLine;
    if (!tmp3) {
      tmp3 = generatedLine2 == generatedLine && tmp2 >= tmp;
    }
    if (!tmp3) {
      const obj = _mod14861;
      tmp3 = obj.compareByGeneratedPositionsInflated(_last, generatedLine) <= 0;
    }
    if (tmp3) {
      self._last = generatedLine;
      const _array = self._array;
      _array.push(generatedLine);
    } else {
      self._sorted = false;
      const _array1 = self._array;
      _array1.push(generatedLine);
    }
  }
  toArray() {
    const self = this;
    if (!this._sorted) {
      const _array = self._array;
      const sorted = _array.sort(_mod14861.compareByGeneratedPositionsInflated);
      self._sorted = true;
    }
    return self._array;
  }
}

export { MappingList };
