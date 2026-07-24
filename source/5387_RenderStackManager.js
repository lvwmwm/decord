// Module ID: 5387
// Function ID: 46156
// Name: RenderStackManager
// Dependencies: [5359, 5368, 5369]

// Module 5387 (RenderStackManager)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const RenderStackManager = (() => {
  class RenderStackManager {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          MAX_SAFE_INTEGER = arguments[0];
        }
        tmp = outer1_1;
        tmp2 = RenderStackManager;
        tmp3 = outer1_1(self, RenderStackManager);
        flag = false;
        self.disableRecycling = false;
        self.maxItemsInRecyclePool = MAX_SAFE_INTEGER;
        tmp4 = globalThis;
        _Map = Map;
        prototype = Map.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        map = new Map();
        tmp8 = map;
        self.recycleKeyPools = map;
        _Map2 = Map;
        prototype2 = Map.prototype;
        tmp9 = new.target;
        tmp10 = new.target;
        map1 = new Map();
        tmp12 = map1;
        self.keyMap = map1;
        _Map3 = Map;
        prototype3 = Map.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        map2 = new Map();
        tmp16 = map2;
        self.stableIdMap = map2;
        self.keyCounter = 0;
        _Set = Set;
        prototype4 = Set.prototype;
        tmp17 = new.target;
        tmp18 = new.target;
        set = new Set();
        tmp20 = set;
        self.unProcessedIndices = set;
        return;
      }
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
      return;
    }
  }
  let obj = {
    key: "sync",
    value: function sync(arg0, arg1, items) {
      let self = this;
      let _slicedToArray = arg0;
      let _classCallCheck = arg1;
      let _defineProperties = items;
      let closure_3 = arg3;
      self = this;
      this.clearRecyclePool();
      let unProcessedIndices = this.unProcessedIndices;
      unProcessedIndices.clear();
      let keyMap = this.keyMap;
      const item = keyMap.forEach((index) => {
        index = index.index;
        if (index >= closure_3) {
          self.recycleKey(arg1);
        } else {
          if (!self.disableRecycling) {
            const unProcessedIndices = self.unProcessedIndices;
            unProcessedIndices.add(index);
          }
          if (items.includes(index)) {
            const tmp10 = callback(index);
            if (!tmp12) {
              self.recycleKey(arg1);
            }
            tmp12 = tmp === callback(index) && tmp2 === callback2(index);
          } else {
            self.recycleKey(arg1);
          }
        }
      });
      for (const item10027 of arg2) {
        let tmp7 = item10027;
        let tmp8 = arg0;
        if (self.hasOptimizedKey(tmp(item10027))) {
          let tmp9 = item10027;
          let tmp10 = arg1;
          let tmp12 = arg0;
          let tmp2Result = tmp2(tmp7);
          let syncItemResult = self.syncItem(tmp7, tmp2Result, tmp(tmp7));
        }
        continue;
      }
      for (const item10045 of arg2) {
        let tmp14 = item10045;
        let tmp15 = arg0;
        if (!self.hasOptimizedKey(tmp(item10045))) {
          let tmp16 = item10045;
          let tmp17 = arg1;
          let tmp19 = arg0;
          tmp2Result = tmp2(tmp14);
          let syncItemResult1 = self.syncItem(tmp14, tmp2Result, tmp(tmp14));
        }
        continue;
      }
      items = [];
      keyMap = self.keyMap;
      const values = keyMap.values();
      for (const item10066 of values) {
        let index = item10066.index;
        let tmp22 = index;
        let tmp23 = arg3;
        let tmp24 = index < tmp3;
        let tmp25 = tmp24;
        if (tmp24) {
          let tmp26 = arg2;
          let tmp27 = index;
          tmp25 = !obj.includes(tmp22);
        }
        if (tmp25) {
          let tmp28 = items;
          let tmp29 = index;
          let arr = items.push(tmp22);
        }
        continue;
      }
      for (const item10085 of items) {
        let tmp31 = item10085;
        let tmp32 = arg0;
        if (self.hasOptimizedKey(tmp(item10085))) {
          let tmp33 = item10085;
          let tmp34 = arg1;
          let tmp36 = arg0;
          let tmp2Result1 = tmp2(tmp31);
          let syncItemResult2 = self.syncItem(tmp31, tmp2Result1, tmp(tmp31));
        }
        continue;
      }
      for (const item10103 of items) {
        let tmp38 = item10103;
        let tmp39 = arg0;
        if (!self.hasOptimizedKey(tmp(item10103))) {
          let tmp40 = item10103;
          let tmp41 = arg1;
          let tmp43 = arg0;
          let tmp2Result2 = tmp2(tmp38);
          let syncItemResult3 = self.syncItem(tmp38, tmp2Result2, tmp(tmp38));
        }
        continue;
      }
      self.cleanup(arg0, arg1, items, arg3);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "hasOptimizedKey",
    value: function hasOptimizedKey(arg0) {
      const stableIdMap = this.stableIdMap;
      return stableIdMap.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "cleanup",
    value: function cleanup(arg0, arg1, arr) {
      let index;
      let itemType;
      let itemType2;
      let stableId;
      let stableId2;
      let tmp36;
      let tmp37;
      let tmp44;
      let tmp45;
      const self = this;
      const array = new Array();
      arr = array;
      const keyMap = this.keyMap;
      const entries = keyMap.entries();
      while (tmp3 !== undefined) {
        let tmp42 = RenderStackManager;
        let tmp43 = RenderStackManager(tmp4, 2);
        [tmp44, tmp45] = tmp43;
        ({ index, itemType: itemType2, stableId: stableId2 } = tmp45);
        let tmp47 = arg3;
        let tmp48 = index >= arg3;
        let tmp8 = !tmp48;
        let tmp49 = tmp48;
        if (!tmp48) {
          let tmp5 = arg0;
          let tmp6 = index;
          let tmp7 = stableId2;
          tmp8 = arg0(tmp46) !== stableId2;
        }
        let tmp10 = tmp48;
        if (tmp49) {
          let unProcessedIndices = self.unProcessedIndices;
          let iter = unProcessedIndices.values();
          let value = iter.next().value;
          let tmp12 = value;
          let flag = true;
          if (undefined !== value) {
            let tmp13 = arg1;
            let tmp14 = value;
            let tmp15 = arg1(tmp12);
            let tmp17 = arg0;
            let tmp16 = tmp15;
            let tmp18 = arg0(tmp12);
            let tmp19 = itemType2;
            if (itemType2 === tmp15) {
              let tmp20 = value;
              let tmp21 = tmp15;
              let tmp22 = tmp18;
              let syncItemResult = self.syncItem(tmp12, tmp16, tmp18);
              flag = false;
            }
          }
          let tmp24 = flag;
          if (flag) {
            let tmp25 = itemType2;
            let tmp26 = tmp44;
            let result = self.deleteKeyFromRecyclePool(itemType2, tmp44);
            let stableIdMap = self.stableIdMap;
            let tmp28 = stableId2;
            let deleteResult = stableIdMap.delete(stableId2);
            let tmp30 = array;
            arr = arr.push(tmp44);
          }
        } else {
          let tmp11 = tmp8;
        }
        continue;
      }
      for (const item10078 of array) {
        let keyMap2 = self.keyMap;
        let deleteResult1 = keyMap2.delete(item10078);
        continue;
      }
      const diff = self.keyMap.size - arr.length;
      if (diff > self.maxItemsInRecyclePool) {
        const diff1 = diff - self.maxItemsInRecyclePool;
        const _Array = Array;
        const keyMap4 = self.keyMap;
        arr = Array.from(keyMap4.entries());
        const reversed = arr.reverse();
        if (0 < reversed.length) {
          let num2 = 0;
          let num = 0;
          if (0 < diff1) {
            while (true) {
              let tmp34 = RenderStackManager;
              let tmp35 = RenderStackManager(reversed[num], 2);
              [tmp36, tmp37] = tmp35;
              ({ itemType, stableId } = tmp37);
              let sum = num2;
              if (!arr.includes(tmp37.index)) {
                let result1 = self.deleteKeyFromRecyclePool(itemType, tmp36);
                let stableIdMap2 = self.stableIdMap;
                let deleteResult2 = stableIdMap2.delete(stableId);
                let keyMap3 = self.keyMap;
                let deleteResult3 = keyMap3.delete(tmp36);
                sum = num2 + 1;
              }
              num = num + 1;
              if (num >= reversed.length) {
                break;
              } else {
                num2 = sum;
                if (sum >= diff1) {
                  break;
                }
              }
            }
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "recycleKey",
    value: function recycleKey(arg0) {
      const self = this;
      if (!this.disableRecycling) {
        const keyMap = self.keyMap;
        const value = keyMap.get(arg0);
        if (value) {
          const recyclePoolForType = self.getRecyclePoolForType(value.itemType);
          recyclePoolForType.add(arg0);
        }
      }
    }
  };
  items[4] = {
    key: "getRenderStack",
    value: function getRenderStack() {
      return this.keyMap;
    }
  };
  items[5] = {
    key: "syncItem",
    value: function syncItem(index, tmp2Result, stableId) {
      const self = this;
      const stableIdMap = this.stableIdMap;
      const tmp = stableIdMap.get(stableId) || self.getKeyFromRecyclePool(tmp2Result) || self.generateKey();
      const unProcessedIndices = self.unProcessedIndices;
      unProcessedIndices.delete(index);
      const keyMap = self.keyMap;
      const value = keyMap.get(tmp);
      if (value) {
        const result = self.deleteKeyFromRecyclePool(tmp2Result, tmp);
        const result1 = self.deleteKeyFromRecyclePool(value.itemType, tmp);
        const stableIdMap2 = self.stableIdMap;
        stableIdMap2.delete(value.stableId);
        value.index = index;
        value.itemType = tmp2Result;
        value.stableId = stableId;
      } else {
        const keyMap2 = self.keyMap;
        const obj = { itemType: tmp2Result, index, stableId };
        const result2 = keyMap2.set(tmp, obj);
      }
      const stableIdMap3 = self.stableIdMap;
      const result3 = stableIdMap3.set(stableId, tmp);
      return tmp;
    }
  };
  items[6] = {
    key: "clearRecyclePool",
    value: function clearRecyclePool() {
      const recycleKeyPools = this.recycleKeyPools;
      const values = recycleKeyPools.values();
      for (const item10007 of values) {
        let clearResult = item10007.clear();
        continue;
      }
    }
  };
  items[7] = {
    key: "generateKey",
    value: function generateKey() {
      this.keyCounter = +this.keyCounter + 1;
      return +this.keyCounter.toString();
    }
  };
  items[8] = {
    key: "deleteKeyFromRecyclePool",
    value: function deleteKeyFromRecyclePool(itemType, arg1) {
      const recycleKeyPools = this.recycleKeyPools;
      const value = recycleKeyPools.get(itemType);
      if (null != value) {
        value.delete(arg1);
      }
    }
  };
  items[9] = {
    key: "getRecyclePoolForType",
    value: function getRecyclePoolForType(itemType) {
      const recycleKeyPools = this.recycleKeyPools;
      let value = recycleKeyPools.get(itemType);
      if (!value) {
        const _Set = Set;
        const set = new Set();
        const recycleKeyPools2 = this.recycleKeyPools;
        const result = recycleKeyPools2.set(itemType, set);
        value = set;
      }
      return value;
    }
  };
  items[10] = {
    key: "getKeyFromRecyclePool",
    value: function getKeyFromRecyclePool(tmp2Result) {
      const recyclePoolForType = this.getRecyclePoolForType(tmp2Result);
      if (recyclePoolForType.size > 0) {
        const value = recyclePoolForType.values().next().value;
        recyclePoolForType.delete(value);
        return value;
      }
    }
  };
  return callback(RenderStackManager, items);
})();
