// Module ID: 307
// Function ID: 4733
// Name: ChildListCollection
// Dependencies: []

// Module 307 (ChildListCollection)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class ChildListCollection {
    constructor() {
      tmp = closure_2(this, ChildListCollection);
      map = new Map();
      this._cellKeyToChildren = map;
      map1 = new Map();
      this._childrenToCellKey = map1;
      return;
    }
  }
  const importDefault = ChildListCollection;
  let obj = {
    key: "add",
    value: function add(arg0, arg1) {
      const self = this;
      const _childrenToCellKey = this._childrenToCellKey;
      ChildListCollection(closure_1[2])(!_childrenToCellKey.has(arg0), "Trying to add already present child list");
      const _cellKeyToChildren = this._cellKeyToChildren;
      let set = _cellKeyToChildren.get(arg1);
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      set.add(arg0);
      const _cellKeyToChildren2 = self._cellKeyToChildren;
      const result = _cellKeyToChildren2.set(arg1, set);
      const _childrenToCellKey2 = self._childrenToCellKey;
      const result1 = _childrenToCellKey2.set(arg0, arg1);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "remove",
    value: function remove(arg0) {
      const _childrenToCellKey = this._childrenToCellKey;
      let value = _childrenToCellKey.get(arg0);
      ChildListCollection(closure_1[2])(null != value, "Trying to remove non-present child list");
      const _childrenToCellKey2 = this._childrenToCellKey;
      _childrenToCellKey2.delete(arg0);
      const _cellKeyToChildren = this._cellKeyToChildren;
      value = _cellKeyToChildren.get(value);
      ChildListCollection(closure_1[2])(value, "_cellKeyToChildren should contain cellKey");
      value.delete(arg0);
      if (0 === value.size) {
        const _cellKeyToChildren2 = this._cellKeyToChildren;
        _cellKeyToChildren2.delete(value);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "forEach",
    value: function forEach(arg0) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      const values = _cellKeyToChildren.values();
      for (const item10008 of values) {
        let tmp2 = item10008;
        for (const item10012 of item10008) {
          let tmp3 = arg0;
          let tmp4 = arg0(item10012);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEachInCell",
    value: function forEachInCell(tmp2Result, arg1) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(tmp2Result);
      if (null == items) {
        items = [];
      }
      for (const item10010 of items) {
        let tmp = arg1;
        let tmp2 = arg1(item10010);
      }
    }
  };
  items[4] = {
    key: "anyInCell",
    value: function anyInCell(value, arg1) {
      const _cellKeyToChildren = this._cellKeyToChildren;
      let items = _cellKeyToChildren.get(value);
      if (null == items) {
        items = [];
      }
      for (const item10010 of items) {
        let tmp = arg1;
        if (arg1(item10010)) {
          obj.return();
          let flag = true;
          return true;
        } else {
          // continue
        }
      }
      return false;
    }
  };
  items[5] = {
    key: "size",
    value: function size() {
      return this._childrenToCellKey.size;
    }
  };
  return callback(ChildListCollection, items);
}();
