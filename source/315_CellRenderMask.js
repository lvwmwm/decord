// Module ID: 315
// Function ID: 4805
// Name: CellRenderMask
// Dependencies: []

// Module 315 (CellRenderMask)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);

export const CellRenderMask = () => {
  class CellRenderMask {
    constructor(arg0) {
      tmp = closure_4(this, CellRenderMask);
      tmp2 = CellRenderMask(closure_1[4])(arg0 >= 0, "CellRenderMask must contain a non-negative number os cells");
      this._numCells = arg0;
      if (0 === arg0) {
        items = [];
      } else {
        obj = { "Bool(false)": "httpServerLocation", "Bool(false)": "hash", "Bool(false)": "httpServerLocation" };
        num = 1;
        obj.last = arg0 - 1;
        items = [];
        items[0] = obj;
      }
      this._regions = items;
      return;
    }
  }
  const importDefault = CellRenderMask;
  let obj = {
    key: "enumerateRegions",
    value: function enumerateRegions() {
      return this._regions;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "addCells",
    value: function addCells(VirtualizedList) {
      let splice;
      let tmp8;
      let self = this;
      let tmp2 = VirtualizedList.first >= 0;
      if (tmp2) {
        tmp2 = VirtualizedList.first < self._numCells;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last >= -1;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last < self._numCells;
      }
      if (tmp2) {
        tmp2 = VirtualizedList.last >= VirtualizedList.first - 1;
      }
      CellRenderMask(closure_1[4])(tmp2, "CellRenderMask.addCells called with invalid cell range");
      if (VirtualizedList.last >= VirtualizedList.first) {
        const tmp13 = callback2(self._findRegion(VirtualizedList.first), 2);
        const first = tmp13[0];
        let num3 = 1;
        [tmp8, splice] = callback2(self._findRegion(VirtualizedList.last), 2);
        const items = [];
        const items1 = [];
        const _Object = Object;
        let obj = { isSpacer: false };
        const merged = Object.assign({}, VirtualizedList, obj);
        if (first.first < merged.first) {
          if (first.isSpacer) {
            obj = { first: first.first, last: merged.first - num3, isSpacer: true };
            items.push(obj);
          } else {
            merged.first = first.first;
          }
        }
        if (combined.last <= merged.last) {
          const items2 = [];
          const items3 = [merged];
          const combined = items2.concat(items, items3, items1);
          const sum = splice - tmp15 + num3;
          num3 = self._regions;
          splice = num3.splice;
          self = splice.apply;
          const items4 = [tmp15, sum];
          self(num3, items4.concat(callback(combined)));
        } else if (!combined.isSpacer) {
          merged.last = combined.last;
        }
        obj = { first: merged.last + num3, last: combined.last, isSpacer: true };
        items1.push(obj);
        const tmp16 = callback2(self._findRegion(VirtualizedList.last), 2);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "numCells",
    value: function numCells() {
      return this._numCells;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "equals",
    value: function equals(_numCells) {
      const self = this;
      const CellRenderMask = _numCells;
      let everyResult = this._numCells === _numCells._numCells && self._regions.length === _numCells._regions.length;
      if (everyResult) {
        const _regions = self._regions;
        everyResult = _regions.every((first) => {
          let tmp = first.first === first._regions[arg1].first;
          if (tmp) {
            tmp = first.last === first._regions[arg1].last;
          }
          if (tmp) {
            tmp = first.isSpacer === first._regions[arg1].isSpacer;
          }
          return tmp;
        });
      }
      return everyResult;
    }
  };
  items[4] = {
    key: "_findRegion",
    value: function _findRegion(first) {
      let rounded;
      let tmp4;
      let diff = this._regions.length - 1;
      let num = 0;
      if (0 <= diff) {
        while (true) {
          let _Math = Math;
          rounded = Math.floor((num + diff) / 2);
          tmp4 = tmp._regions[rounded];
          if (first >= tmp4.first) {
            if (first <= tmp4.last) {
              break;
            }
          }
          if (first < tmp4.first) {
            let diff1 = rounded - 1;
            let sum = num;
          } else {
            sum = num;
            diff1 = diff;
            if (first > tmp4.last) {
              sum = rounded + 1;
              diff1 = diff;
            }
          }
          num = sum;
          diff = diff1;
        }
        const items = [tmp4, rounded];
        return items;
      }
      CellRenderMask(closure_1[4])(false, "A region was not found containing cellIdx " + first);
    }
  };
  return callback(CellRenderMask, items);
}();
