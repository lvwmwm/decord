// Module ID: 7677
// Function ID: 60942
// Name: _isNativeReflectConstruct
// Dependencies: [29, 15, 17, 18, 57, 6, 7, 31, 27, 33, 22, 620, 5515, 4126, 477, 3991, 7678, 7679, 5189, 7680, 5217, 3994, 2]
// Exports: getItemSizeOverrideKey

// Module 7677 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import module_3991 from "module_3991";
import createFakeSharedValue from "createFakeSharedValue";
import BottomSheetModal from "BottomSheetModal";
import _slicedToArray from "_slicedToArray";
import _defineProperties from "_defineProperties";
import result from "result";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult from "module_3991";

let StyleSheet;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function renderDefaultEmpty() {
  return null;
}
function defaultRecyclerKey() {

}
function getBatchSize(rounded) {
  return Math.ceil(rounded / 4);
}
function computeBlock(endImportTime) {
  if (0 === endImportTime) {
    return { batchSize: 0, blockStart: 0, blockEnd: 0 };
  } else {
    const _Math = Math;
    const rounded = Math.ceil(endImportTime);
    const _Math2 = Math;
    const rounded1 = Math.floor(arg1);
    const tmp6 = getBatchSize(rounded);
    const _Math3 = Math;
    const _Math4 = Math;
    const result = Math.max(0, Math.round((rounded1 + rounded / 2) / tmp6) - arg2 / 2) * tmp6;
    const obj = { batchSize: tmp6, blockStart: result, blockEnd: result + tmp6 * arg2 };
    return obj;
  }
}
class FastListIosFabricGestureWorkaround {
  constructor(arg0) {
    children = global.children;
    tmp2 = children;
    if (true !== global.inActionSheet) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      num = 21;
      obj = require("isFabric");
      tmp2 = children;
      if (obj.isIosFabric()) {
        tmp5 = jsx;
        tmp6 = closure_0;
        tmp7 = closure_2;
        num2 = 20;
        obj = {};
        obj.gesture = tmp;
        obj.children = children;
        tmp2 = jsx(require("Directions").GestureDetector, obj);
      }
    }
    return tmp2;
  }
}
let closure_3 = ["manualRef", "onScroll", "onScrollWorklet", "onScrollEnd", "onLayout", "renderHeader", "renderFooter", "renderSection", "renderItem", "renderSectionFooter", "getRecyclerKey", "onEndReached", "endReachedThreshold", "headerSize", "footerSize", "sectionSize", "sectionFooterSize", "itemSize", "sections", "scrollPosValue", "batchesToRender", "optimizeListItemRender", "initialScrollSection", "initialScrollItem", "initialScrollOrientation", "initialScrollStart", "getAnchorIdFromIndex", "getAnchorIndexFromId", "EXPERIMENTAL_enableAnchorWhileScrolling", "chunkBase", "disableContentWrappers", "childrenWrapper", "stickyHeaderFooter", "stickySectionsVariant", "persistantKeys", "disableRecyclingOnFullCompute", "disableLegacyGestureHandling", "viewabilityConfig", "onViewableItemsChanged", "debugLayout", "renderAccessory", "removeClippedSubviews", "inActionSheet"];
({ PixelRatio: closure_12, ScrollView: closure_13, StyleSheet, findNodeHandle: closure_14 } = get_ActivityIndicator);
({ jsxs: closure_15, jsx: closure_16, Fragment: closure_17 } = jsxProd);
let map = new Map();
let obj = { SPACER: "SPACER", HEADER: "HEADER", FOOTER: "FOOTER", SECTION: "SECTION", ITEM: "ITEM", SECTION_FOOTER: "SECTION_FOOTER" };
let tmp5 = (() => {
  class FastListItemRecycler {
    constructor(arg0) {
      self = this;
      tmp = outer1_9(this, self);
      this._items = {};
      this._pendingItems = {};
      item = arg0.forEach((recyclerKey) => {
        outer2_8(self._itemsForType(recyclerKey.type), 1)[0][recyclerKey.recyclerKey] = recyclerKey;
      });
      return;
    }
  }
  let obj = {
    key: "_itemsForType",
    value(arg0) {
      const self = this;
      let tmp = this._items[arg0];
      if (null == tmp) {
        const obj = {};
        self._items[arg0] = obj;
        tmp = obj;
      }
      const items = [tmp, ];
      let tmp2 = self._pendingItems[arg0];
      if (null == tmp2) {
        const items1 = [];
        self._pendingItems[arg0] = items1;
        tmp2 = items1;
      }
      items[1] = tmp2;
      return items;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "get",
    value(type, layoutStart, layoutSize, customKey) {
      let num = arg4;
      let num2 = arg5;
      const self = this;
      if (arg4 === undefined) {
        num = 0;
      }
      if (num2 === undefined) {
        num2 = -1;
      }
      const obj = { type, layoutStart, layoutSize, customKey, section: num, item: num2 };
      [obj.items, obj.pendingItems] = outer1_8(self._itemsForType(type), 2);
      return self._get(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "_get",
    value(arg0) {
      let customKey;
      let item;
      let layoutSize;
      let layoutStart;
      let pendingItems;
      let section;
      let type;
      ({ type, layoutStart, layoutSize, customKey, section, item, pendingItems } = arg0);
      if (null == customKey) {
        const _HermesInternal = HermesInternal;
        customKey = "" + type + ":" + section + ":" + item;
      }
      if (null == arg0.items[customKey]) {
        let obj = { type, key: -1, layoutStart, layoutSize, section, item, recyclerKey: customKey };
        pendingItems.push(obj);
      } else {
        obj = {};
        const merged = Object.assign(tmp7);
        obj.layoutStart = layoutStart;
        obj.layoutSize = layoutSize;
        obj.section = section;
        obj.item = item;
        delete tmp[tmp2];
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fill",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      const item = outer1_1(outer1_2[10]).forEach(outer1_19, (arg0) => {
        const tmp = outer2_8(self._itemsForType(arg0), 2);
        self._fill(tmp[0], tmp[1], closure_1);
      });
    }
  };
  items[4] = {
    key: "_fill",
    value(arg0, arg1, arg2) {
      let length;
      let sum1;
      const FastListItemRecycler = arg1;
      let c1 = 0;
      if (!arg2) {
        const item = outer1_1(outer1_2[10]).forEach(arg0, (arg0) => {
          if (null == table[closure_1]) {
            return false;
          } else {
            tmp2.key = tmp;
            closure_1 = closure_1 + 1;
          }
        });
        const arr = outer1_1(outer1_2[10]);
      }
      if (c1 < arg1.length) {
        do {
          let tmp5 = c1;
          let tmp6 = FastListItemRecycler;
          let sum = FastListItemRecycler._LAST_KEY + 1;
          FastListItemRecycler._LAST_KEY = sum;
          arg1[c1].key = sum;
          let tmp8 = c1;
          sum1 = c1 + 1;
          c1 = sum1;
          length = arg1.length;
        } while (sum1 < length);
      }
      arg1.length = 0;
    }
  };
  return callback2(FastListItemRecycler, items);
})();
let closure_20 = tmp5;
tmp5._LAST_KEY = 0;
let tmp6 = (() => {
  class FastListComputer {
    constructor(arg0) {
      tmp = outer1_9(this, FastListComputer);
      this.chunkSize = 0;
      this.uniform = false;
      this.dataCache = [];
      this.size = 0;
      this.dirty = true;
      this.lastStartChunk = -1;
      this.lastEndChunk = -1;
      this.items = [];
      this.persistantItemData = [];
      this.disableRecycling = false;
      this.props = arg0;
      updatePropsResult = this.updateProps(arg0);
      return;
    }
  }
  let obj = {
    key: "updateProps",
    value(props) {
      const self = this;
      let tmp2 = !tmp;
      if (!this.dirty) {
        tmp2 = !outer1_1(outer1_2[11])(props, self.props);
      }
      self.dirty = tmp2;
      self.props = props;
      self.uniform = "number" === typeof props.itemSize;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "setInfo",
    value(arg0) {
      const self = this;
      const rounded = Math.ceil(arg0 / 4);
      let tmp3 = !tmp2;
      if (!this.dirty) {
        tmp3 = rounded !== self.chunkSize;
      }
      self.dirty = tmp3;
      self.chunkSize = rounded;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSizeForHeader",
    value() {
      const headerSize = this.props.headerSize;
      let num = 0;
      if (undefined !== headerSize) {
        num = headerSize;
      }
      let numResult = num;
      if ("number" !== typeof num) {
        numResult = num();
      }
      return numResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSizeForFooter",
    value() {
      const footerSize = this.props.footerSize;
      let num = 0;
      if (undefined !== footerSize) {
        num = footerSize;
      }
      let numResult = num;
      if ("number" !== typeof num) {
        numResult = num();
      }
      return numResult;
    }
  };
  items[4] = {
    key: "getSizeForSection",
    value(c4) {
      const sectionSize = this.props.sectionSize;
      let num = 0;
      if (undefined !== sectionSize) {
        num = sectionSize;
      }
      let numResult = num;
      if ("number" !== typeof num) {
        numResult = num(c4);
      }
      return numResult;
    }
  };
  items[5] = {
    key: "getSizeForItem",
    value(arg0, arg1) {
      const itemSize = this.props.itemSize;
      let itemSizeResult = itemSize;
      if ("number" !== typeof itemSize) {
        itemSizeResult = itemSize(arg0, arg1);
      }
      return itemSizeResult;
    }
  };
  items[6] = {
    key: "getSizeForSectionFooter",
    value(c4) {
      const sectionFooterSize = this.props.sectionFooterSize;
      let num = 0;
      if (undefined !== sectionFooterSize) {
        num = sectionFooterSize;
      }
      let numResult = num;
      if ("number" !== typeof num) {
        numResult = num(c4);
      }
      return numResult;
    }
  };
  items[7] = {
    key: "getChunk",
    value(arg0) {
      const self = this;
      const dataCache = this.dataCache;
      let diff = dataCache.length - 1;
      if (null != this.chunkCache) {
        if (arg0 >= self.chunkCache.start) {
          if (arg0 <= self.chunkCache.end) {
            return self.chunkCache;
          }
        }
      }
      let num = 0;
      if (0 <= diff) {
        const sum = num + ((diff - num) / 2 | 0);
        while (null != dataCache[sum]) {
          if (arg0 >= tmp3.start) {
            if (arg0 <= tmp3.end) {
              self.chunkCache = tmp3;
              return tmp3;
            }
          }
          if (arg0 < tmp3.start) {
            diff = sum - 1;
            let sum1 = num;
            num = sum1;
            if (sum1 <= diff) {
              continue;
            } else {
              break;
            }
            break;
          } else if (arg0 <= tmp3.end) {
            break;
          } else {
            sum1 = sum + 1;
          }
          break;
        }
      }
    }
  };
  items[8] = {
    key: "compute",
    value(lastStartChunk, lastEndChunk) {
      let getRecyclerKey;
      let iter10;
      let iter12;
      let iter14;
      let iter2;
      let iter7;
      let layoutSize;
      let layoutSize2;
      let layoutStart3;
      let layoutStart4;
      let section;
      let section2;
      let section3;
      let stickyHeaderFooter;
      let tmp;
      let tmp90;
      let tmp91;
      let type;
      let type2;
      let type3;
      let flag = arg3;
      const self = this;
      let closure_0 = lastStartChunk;
      let closure_1 = lastEndChunk;
      if (arg3 === undefined) {
        flag = false;
      }
      getRecyclerKey = undefined;
      let items;
      let obj3;
      let c6;
      function addInitialSection(section, layoutStart, layoutSize, layoutStart2) {
        items.push(obj3.get(outer2_19.SECTION, layoutStart, layoutSize, getRecyclerKey(outer2_19.SECTION, section), section));
        const sum = layoutStart + layoutSize;
        if (sum < layoutStart2) {
          createFakeSharedValue = createFakeSharedValue + 1;
          items.push(obj3.get(outer2_19.SPACER, sum, layoutStart2 - sum, undefined, 0, createFakeSharedValue));
        }
      }
      function isVisible(layoutStart, layoutSize) {
        let tmp = !flag;
        if (!tmp) {
          let tmp4 = layoutStart >= closure_0 - layoutSize;
          if (tmp4) {
            tmp4 = layoutStart < closure_1;
          }
          tmp = tmp4;
        }
        return tmp;
      }
      if (self.dirty) {
        let fullComputeResult = self.fullCompute();
        let flag2 = true;
      } else {
        flag2 = false;
        if (lastStartChunk === self.lastStartChunk) {
          flag2 = false;
          if (lastEndChunk === self.lastEndChunk) {
            let obj = {};
            ({ size: obj.size, items: obj.items } = self);
            return obj;
          }
        }
      }
      ({ stickyHeaderFooter, getRecyclerKey } = self.props);
      if (undefined === getRecyclerKey) {
        getRecyclerKey = outer1_35;
      }
      self.lastStartChunk = lastStartChunk;
      self.lastEndChunk = lastEndChunk;
      const map = new Map();
      const tmp2 = outer1_32(self.persistantItemData);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp3 = outer1_19;
          let item;
          ({ type, section } = value);
          if (value.type === outer1_19.ITEM) {
            item = value.item;
          }
          let recyclerKey = getRecyclerKey(type, section, item);
          if (null != recyclerKey) {
            let result = map.set(recyclerKey, value);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      let rounded = Math.floor(lastStartChunk / self.chunkSize);
      const bound = Math.max(Math.ceil(lastEndChunk / self.chunkSize), rounded);
      let result1 = rounded * self.chunkSize;
      items = [];
      self.items = items;
      obj3 = new outer1_20(arg2);
      obj = { initialSection: -1, initialItem: -1, lastSection: -1, lastItem: -1 };
      c6 = 0;
      const set = new Set();
      if (rounded <= bound) {
        do {
          let chunk = self.getChunk(rounded);
          let tmp12 = rounded;
          if (null != chunk) {
            let addResult = set.add(chunk);
          }
          rounded = rounded + 1;
        } while (rounded <= bound);
      }
      const tmp14 = outer1_32(set);
      const iter3 = tmp14();
      let iter4 = iter3;
      if (!iter3.done) {
        do {
          value = iter4.value;
          let tmp20 = result1;
          let tmp21 = tmp15;
          let tmp22 = tmp16;
          let tmp23 = tmp17;
          let tmp24 = tmp18;
          let tmp25 = tmp19;
          if (null != value) {
            fullComputeResult = outer1_32;
            fullComputeResult = outer1_32(value.data);
            let iter15 = fullComputeResult();
            let tmp80 = result1;
            let iter6 = iter15;
            let tmp81 = tmp16;
            let tmp82 = tmp17;
            let tmp83 = tmp18;
            let tmp84 = tmp19;
            tmp20 = result1;
            fullComputeResult = iter15;
            tmp21 = tmp15;
            tmp22 = tmp16;
            tmp23 = tmp17;
            tmp24 = tmp18;
            tmp25 = tmp19;
            if (!iter15.done) {
              do {
                value = iter6.value;
                let sum = tmp80;
                let tmp27 = tmp81;
                let tmp28 = tmp82;
                let tmp29 = tmp83;
                let tmp30 = tmp84;
                if (value.layoutStart + value.layoutSize >= tmp80) {
                  let type4 = value.type;
                  fullComputeResult = outer1_19;
                  if (outer1_19.HEADER === type4) {
                    if (isVisible(value.layoutStart, value.layoutSize)) {
                      let tmp77 = outer1_19;
                      let tmp78 = obj3;
                      let arr = items.push(obj3.get(outer1_19.HEADER, value.layoutStart, value.layoutSize, undefined));
                    }
                    sum = value.layoutStart + value.layoutSize;
                    tmp27 = tmp81;
                    tmp28 = tmp82;
                    tmp29 = tmp83;
                    tmp30 = tmp84;
                  } else {
                    fullComputeResult = outer1_19;
                    if (outer1_19.SECTION === type4) {
                      let tmp68 = tmp81;
                      if (isVisible(value.layoutStart, value.layoutSize)) {
                        if (-1 === obj.initialSection) {
                          ({ section: obj4.initialSection, section: obj4.lastSection } = value);
                        } else {
                          obj.lastSection = value.section;
                        }
                        let tmp69 = outer1_19;
                        let recyclerKey1 = getRecyclerKey(outer1_19.SECTION, value.section);
                        let tmp71 = null != recyclerKey1 && map.has(recyclerKey1);
                        if (tmp71) {
                          let deleteResult = map.delete(recyclerKey1);
                        }
                        let tmp73 = outer1_19;
                        let tmp74 = obj3;
                        let tmp75 = recyclerKey1;
                        arr = items.push(obj3.get(outer1_19.SECTION, value.layoutStart, value.layoutSize, recyclerKey1, value.section));
                        tmp68 = recyclerKey1;
                      }
                      sum = value.layoutStart + value.layoutSize;
                      tmp27 = tmp68;
                      tmp28 = tmp82;
                      tmp29 = tmp83;
                      tmp30 = tmp84;
                    } else {
                      fullComputeResult = outer1_19;
                      if (outer1_19.ITEM === type4) {
                        if (null == value.uniform) {
                          let tmp58 = tmp82;
                          if (isVisible(value.layoutStart, value.layoutSize)) {
                            if (0 === items.length) {
                              let addInitialSectionResult = addInitialSection(value.section, value.sectionData.layoutStart, value.sectionData.layoutSize, value.layoutStart);
                            }
                            if (-1 === obj.initialSection) {
                              obj.initialSection = value.section;
                            }
                            if (-1 === obj.initialItem) {
                              obj.initialItem = value.item;
                            }
                            ({ section: obj4.lastSection, item: obj4.lastItem } = value);
                            let tmp60 = outer1_19;
                            let recyclerKey2 = getRecyclerKey(outer1_19.ITEM, value.section, value.item);
                            let tmp62 = null != recyclerKey2 && map.has(recyclerKey2);
                            if (tmp62) {
                              let deleteResult1 = map.delete(recyclerKey2);
                            }
                            let tmp64 = outer1_19;
                            let tmp65 = obj3;
                            let tmp66 = recyclerKey2;
                            let arr1 = items.push(obj3.get(outer1_19.ITEM, value.layoutStart, value.layoutSize, recyclerKey2, value.section, value.item));
                            tmp58 = recyclerKey2;
                          }
                          sum = value.layoutStart + value.layoutSize;
                          tmp28 = tmp58;
                          tmp27 = tmp81;
                          tmp29 = tmp83;
                          tmp30 = tmp84;
                        } else {
                          let num = 0;
                          if (tmp80 > value.layoutStart) {
                            let _Math = Math;
                            num = Math.floor((tmp80 - value.layoutStart) / value.itemSize);
                          }
                          let sum1 = value.layoutStart + value.itemSize * num;
                          sum = sum1;
                          tmp27 = tmp81;
                          tmp28 = tmp82;
                          tmp29 = num;
                          tmp30 = tmp84;
                          if (sum1 < bound * self.chunkSize) {
                            fullComputeResult = sum1;
                            fullComputeResult = num;
                            let tmp54 = tmp84;
                            sum = sum1;
                            tmp27 = tmp81;
                            tmp28 = tmp82;
                            tmp30 = tmp84;
                            tmp29 = num;
                            if (num < value.items) {
                              while (true) {
                                let tmp41 = fullComputeResult;
                                if (isVisible(fullComputeResult, value.itemSize)) {
                                  if (0 === items.length) {
                                    let tmp42 = fullComputeResult;
                                    let addInitialSectionResult1 = addInitialSection(value.section, value.sectionData.layoutStart, value.sectionData.layoutSize, tmp41);
                                  }
                                  if (-1 === obj.initialSection) {
                                    obj.initialSection = value.section;
                                  }
                                  if (-1 === obj.initialItem) {
                                    obj.initialItem = fullComputeResult;
                                  }
                                  obj.lastSection = value.section;
                                  obj.lastItem = fullComputeResult;
                                  let tmp44 = outer1_19;
                                  let recyclerKey3 = getRecyclerKey(outer1_19.ITEM, value.section, fullComputeResult);
                                  let tmp46 = null != recyclerKey3 && map.has(recyclerKey3);
                                  if (tmp46) {
                                    let deleteResult2 = map.delete(recyclerKey3);
                                  }
                                  let tmp48 = outer1_19;
                                  let tmp49 = obj3;
                                  let tmp50 = fullComputeResult;
                                  let tmp51 = recyclerKey3;
                                  let tmp52 = fullComputeResult;
                                  let arr2 = items.push(obj3.get(outer1_19.ITEM, tmp41, value.itemSize, recyclerKey3, value.section, fullComputeResult));
                                  tmp54 = recyclerKey3;
                                }
                                let sum2 = fullComputeResult + value.itemSize;
                                let sum3 = fullComputeResult + 1;
                                let tmp57 = tmp54;
                                sum = sum2;
                                tmp27 = tmp81;
                                tmp28 = tmp82;
                                tmp29 = sum3;
                                tmp30 = tmp54;
                                if (sum2 >= bound * self.chunkSize) {
                                  break;
                                } else {
                                  fullComputeResult = sum2;
                                  fullComputeResult = sum3;
                                  sum = sum2;
                                  tmp27 = tmp81;
                                  tmp28 = tmp82;
                                  tmp30 = tmp54;
                                  tmp29 = sum3;
                                  if (sum3 < value.items) {
                                    continue;
                                  } else {
                                    break;
                                  }
                                  break;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        fullComputeResult = outer1_19;
                        if (outer1_19.SECTION_FOOTER === type4) {
                          if (isVisible(value.layoutStart, value.layoutSize)) {
                            if (0 === items.length) {
                              let addInitialSectionResult2 = addInitialSection(value.section, value.sectionData.layoutStart, value.sectionData.layoutSize, value.layoutStart);
                            }
                            let tmp35 = outer1_19;
                            let SECTION_FOOTER = outer1_19.SECTION_FOOTER;
                            let layoutStart = value.layoutStart;
                            let tmp36 = obj3;
                            let tmp37 = SECTION_FOOTER;
                            let tmp38 = layoutStart;
                            let arr3 = items.push(obj3.get(SECTION_FOOTER, layoutStart, value.layoutSize, getRecyclerKey(outer1_19.SECTION_FOOTER, value.section), value.section));
                          }
                          sum = value.layoutStart + value.layoutSize;
                          tmp27 = tmp81;
                          tmp28 = tmp82;
                          tmp29 = tmp83;
                          tmp30 = tmp84;
                        } else {
                          fullComputeResult = outer1_19;
                          sum = tmp80;
                          tmp27 = tmp81;
                          tmp28 = tmp82;
                          tmp29 = tmp83;
                          tmp30 = tmp84;
                          if (outer1_19.FOOTER === type4) {
                            if (isVisible(value.layoutStart, value.layoutSize)) {
                              let tmp31 = outer1_19;
                              let tmp32 = obj3;
                              let arr4 = items.push(obj3.get(outer1_19.FOOTER, value.layoutStart, value.layoutSize, undefined));
                            }
                            sum = value.layoutStart + value.layoutSize;
                            tmp27 = tmp81;
                            tmp28 = tmp82;
                            tmp29 = tmp83;
                            tmp30 = tmp84;
                          }
                        }
                      }
                    }
                  }
                }
                iter5 = fullComputeResult();
                tmp80 = sum;
                tmp81 = tmp27;
                tmp82 = tmp28;
                tmp83 = tmp29;
                tmp84 = tmp30;
                iter6 = iter5;
                tmp20 = sum;
                let tmp85 = iter5;
                let tmp86 = fullComputeResult;
                tmp21 = value;
                tmp22 = tmp27;
                tmp23 = tmp28;
                tmp24 = tmp29;
                tmp25 = tmp30;
              } while (!iter5.done);
            }
          }
          iter7 = tmp14();
          result1 = tmp20;
          tmp15 = tmp21;
          tmp16 = tmp22;
          tmp17 = tmp23;
          tmp18 = tmp24;
          tmp19 = tmp25;
          iter4 = iter7;
        } while (!iter7.done);
      }
      const items1 = [];
      const items2 = [];
      const tmp87 = outer1_32(map);
      const iter8 = tmp87();
      let iter9 = iter8;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      if (!iter8.done) {
        do {
          let tmp88 = outer1_8;
          let tmp89 = outer1_8(iter9.value, 2);
          [tmp90, tmp91] = tmp89;
          if (tmp91.section < obj.initialSection) {
            let sum4 = num2 + tmp91.layoutSize;
            let items3 = [tmp90, tmp91];
            let arr5 = items1.push(items3);
            let sum5 = num3;
          } else if (tmp91.section > obj.lastSection) {
            sum5 = num3 + tmp91.layoutSize;
            let items4 = [tmp90, tmp91];
            let arr6 = items2.push(items4);
            sum4 = num2;
          } else {
            fullComputeResult = outer1_19;
            sum4 = num2;
            sum5 = num3;
            if (tmp91.type === outer1_19.ITEM) {
              if (tmp91.section === obj.initialSection) {
                if (tmp91.item < obj.initialItem) {
                  let sum6 = num2 + tmp91.layoutSize;
                  let items5 = [tmp90, tmp91];
                  let arr7 = items1.push(items5);
                  let sum7 = num3;
                  sum4 = sum6;
                  sum5 = sum7;
                }
              }
              sum7 = num3 + tmp91.layoutSize;
              let items6 = [tmp90, tmp91];
              let arr8 = items2.push(items6);
              sum6 = num2;
            }
          }
          iter10 = tmp87();
          num2 = sum4;
          num3 = sum5;
          iter9 = iter10;
          num4 = sum4;
          num5 = sum5;
        } while (!iter10.done);
      }
      fullComputeResult = items[0];
      if (null != fullComputeResult) {
        if (fullComputeResult.layoutStart > 0) {
          const headerDataCache = self.headerDataCache;
          const layoutStart5 = fullComputeResult.layoutStart;
          fullComputeResult = stickyHeaderFooter;
          if (stickyHeaderFooter) {
            fullComputeResult = null != headerDataCache;
          }
          if (fullComputeResult) {
            fullComputeResult = "HEADER" !== fullComputeResult.type;
          }
          let layoutStart2 = layoutStart5;
          if (fullComputeResult) {
            if (layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize > 0) {
              fullComputeResult = outer1_19;
              fullComputeResult = obj3;
              fullComputeResult = items.unshift(obj3.get(outer1_19.SPACER, headerDataCache.layoutStart + headerDataCache.layoutSize, layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize, undefined, 0, 0));
            }
            fullComputeResult = outer1_19;
            fullComputeResult = obj3;
            fullComputeResult = items.unshift(obj3.get(outer1_19.HEADER, headerDataCache.layoutStart, headerDataCache.layoutSize, undefined));
            layoutStart2 = headerDataCache.layoutStart;
          }
          const _Math2 = Math;
          fullComputeResult = Math.max(layoutStart2 - num4, 0);
          fullComputeResult = outer1_32;
          fullComputeResult = outer1_32(items1);
          let iter11 = fullComputeResult();
          if (!iter11.done) {
            do {
              fullComputeResult = outer1_8;
              fullComputeResult = outer1_8(iter11.value, 2);
              [tmp, tmp] = fullComputeResult;
              ({ type: type2, layoutStart: layoutStart3, layoutSize, section: section2 } = fullComputeResult);
              fullComputeResult = outer1_19;
              fullComputeResult = undefined;
              if (fullComputeResult.type === outer1_19.ITEM) {
                fullComputeResult = fullComputeResult.item;
              }
              fullComputeResult = obj3;
              fullComputeResult = type2;
              fullComputeResult = layoutStart3;
              fullComputeResult = layoutSize;
              fullComputeResult = section2;
              fullComputeResult = items.unshift(obj3.get(type2, layoutStart3, layoutSize, fullComputeResult, section2, fullComputeResult));
              iter12 = fullComputeResult();
              iter11 = iter12;
            } while (!iter12.done);
          }
          if (fullComputeResult > 0) {
            fullComputeResult = outer1_19;
            fullComputeResult = obj3;
            fullComputeResult = items.unshift(obj3.get(outer1_19.SPACER, 0, fullComputeResult, undefined, 0, 1));
          }
        }
      }
      fullComputeResult = items[items.length - 1];
      if (null != fullComputeResult) {
        let size = fullComputeResult.layoutStart + fullComputeResult.layoutSize;
      } else {
        size = self.size;
      }
      if (size < self.size) {
        const footerDataCache = self.footerDataCache;
        if (stickyHeaderFooter) {
          stickyHeaderFooter = null != footerDataCache;
        }
        if (stickyHeaderFooter) {
          stickyHeaderFooter = "FOOTER" !== fullComputeResult.type;
        }
        fullComputeResult = size;
        if (stickyHeaderFooter) {
          if (size < footerDataCache.layoutStart) {
            fullComputeResult = outer1_19;
            fullComputeResult = obj3;
            fullComputeResult = size;
            fullComputeResult = items.push(obj3.get(outer1_19.SPACER, size, footerDataCache.layoutStart + footerDataCache.layoutSize - size, undefined, 1, 0));
          }
          fullComputeResult = outer1_19;
          fullComputeResult = obj3;
          fullComputeResult = items.push(obj3.get(outer1_19.FOOTER, footerDataCache.layoutStart, footerDataCache.layoutSize, undefined));
          fullComputeResult = footerDataCache.layoutStart + footerDataCache.layoutSize;
        }
        fullComputeResult = fullComputeResult + num5;
        if (fullComputeResult < self.size) {
          fullComputeResult = outer1_19;
          fullComputeResult = obj3;
          fullComputeResult = items.push(obj3.get(outer1_19.SPACER, fullComputeResult, self.size - fullComputeResult, undefined, 1, 1));
        }
        fullComputeResult = outer1_32;
        fullComputeResult = outer1_32(items2);
        let iter13 = fullComputeResult();
        if (!iter13.done) {
          do {
            fullComputeResult = outer1_8;
            fullComputeResult = outer1_8(iter13.value, 2);
            [tmp, tmp] = fullComputeResult;
            ({ type: type3, layoutStart: layoutStart4, layoutSize: layoutSize2, section: section3 } = fullComputeResult);
            fullComputeResult = outer1_19;
            fullComputeResult = undefined;
            if (fullComputeResult.type === outer1_19.ITEM) {
              fullComputeResult = fullComputeResult.item;
            }
            fullComputeResult = obj3;
            fullComputeResult = type3;
            fullComputeResult = layoutStart4;
            fullComputeResult = layoutSize2;
            fullComputeResult = section3;
            fullComputeResult = items.push(obj3.get(type3, layoutStart4, layoutSize2, fullComputeResult, section3, fullComputeResult));
            iter14 = fullComputeResult();
            iter13 = iter14;
          } while (!iter14.done);
        }
      }
      let disableRecycling = self.disableRecycling;
      if (!disableRecycling) {
        fullComputeResult = self.props.disableRecyclingOnFullCompute && flag2;
        disableRecycling = fullComputeResult;
      }
      fullComputeResult = obj3.fill(disableRecycling);
      obj = { size: self.size, items };
      return obj;
    }
  };
  items[9] = {
    key: "fullCompute",
    value() {
      let insetStart;
      let sections;
      let self = this;
      self = this;
      const props = this.props;
      ({ sections, insetStart } = props);
      let num = 0;
      if (undefined !== insetStart) {
        num = insetStart;
      }
      const insetEnd = props.insetEnd;
      let num2 = 0;
      if (undefined !== insetEnd) {
        num2 = insetEnd;
      }
      let getRecyclerKey = props.getRecyclerKey;
      if (undefined === getRecyclerKey) {
        getRecyclerKey = outer1_35;
      }
      const set = new Set(self.props.persistantKeys);
      self.persistantItemData = [];
      const items = [];
      self.dataCache = items;
      self.chunkCache = undefined;
      const chunkSize = self.chunkSize;
      let closure_3 = num;
      self.headerDataCache = undefined;
      self.footerDataCache = undefined;
      function pushData(closure_3, arg1, type) {
        closure_3 = closure_3 + (arg1 - closure_3);
        const bound = Math.max(Math.floor(closure_3 / chunkSize), 0);
        const bound1 = Math.max(Math.floor(arg1 / chunkSize) - 1, bound);
        let chunk = self.getChunk(bound);
        if (null == chunk) {
          const obj = { start: bound, end: bound1, data: [] };
          items.push(obj);
          chunk = obj;
        }
        if (type.type === outer2_19.HEADER) {
          self.headerDataCache = type;
        } else if (type.type === outer2_19.FOOTER) {
          self.footerDataCache = type;
        }
        chunk.end = bound1;
        const data = chunk.data;
        data.push(type);
      }
      const sizeForHeader = self.getSizeForHeader();
      if (sizeForHeader > 0) {
        let obj = { type: outer1_19.HEADER, layoutStart: closure_3, layoutSize: sizeForHeader };
        pushData(closure_3, closure_3 + sizeForHeader, obj);
      }
      let num3 = 0;
      if (0 < sections.length) {
        do {
          let tmp10 = sections[num3];
          let tmp11 = tmp6;
          let tmp12 = tmp7;
          let tmp13 = tmp8;
          let tmp14 = tmp9;
          if (0 !== tmp10) {
            let tmp55 = closure_3;
            let sizeForSection = self.getSizeForSection(num3);
            obj = {};
            let tmp57 = outer1_19;
            obj.type = outer1_19.SECTION;
            obj.layoutStart = closure_3;
            obj.layoutSize = sizeForSection;
            obj.section = num3;
            if (set.size > 0) {
              let tmp15 = outer1_19;
              let recyclerKey = getRecyclerKey(outer1_19.SECTION, num3);
              let tmp17 = null != recyclerKey && set.has(recyclerKey);
              tmp6 = recyclerKey;
              if (tmp17) {
                let persistantItemData = self.persistantItemData;
                let arr = persistantItemData.push(obj);
                let deleteResult = set.delete(recyclerKey);
                tmp6 = recyclerKey;
              }
            }
            let pushDataResult1 = pushData(tmp55, tmp55 + sizeForSection, obj);
            if (self.uniform) {
              let sizeForItem = self.getSizeForItem(num3, 0);
              let tmp36 = closure_3;
              let obj1 = {};
              let tmp37 = outer1_19;
              obj1.type = outer1_19.ITEM;
              obj1.uniform = true;
              obj1.layoutStart = closure_3;
              obj1.itemSize = sizeForItem;
              obj1.layoutSize = sizeForItem * tmp10;
              obj1.section = num3;
              obj1.items = tmp10;
              obj1.sectionData = obj;
              let pushDataResult2 = pushData(closure_3, closure_3 + sizeForItem * tmp10, obj1);
              let tmp22 = closure_3;
              let num5 = tmp7;
              let tmp23 = tmp8;
              let tmp24 = tmp9;
            } else {
              let num4 = 0;
              let tmp21 = tmp9;
              tmp22 = tmp55;
              num5 = 0;
              tmp23 = tmp8;
              tmp24 = tmp9;
              if (0 < tmp10) {
                do {
                  let sizeForItem1 = self.getSizeForItem(num3, num4);
                  let obj2 = {};
                  let tmp27 = outer1_19;
                  obj2.type = outer1_19.ITEM;
                  obj2.layoutStart = closure_3;
                  obj2.layoutSize = sizeForItem1;
                  obj2.section = num3;
                  obj2.item = num4;
                  obj2.sectionData = obj;
                  let tmp26 = closure_3;
                  let pushDataResult3 = pushData(closure_3, closure_3 + sizeForItem1, obj2);
                  let tmp29 = num4;
                  if (set.size > 0) {
                    let tmp30 = outer1_19;
                    let recyclerKey1 = getRecyclerKey(outer1_19.ITEM, num3, num4);
                    let tmp32 = null != recyclerKey1 && set.has(recyclerKey1);
                    tmp21 = recyclerKey1;
                    if (tmp32) {
                      let persistantItemData1 = self.persistantItemData;
                      arr = persistantItemData1.push(obj2);
                      let deleteResult1 = set.delete(recyclerKey1);
                      tmp21 = recyclerKey1;
                    }
                  }
                  num4 = num4 + 1;
                  tmp22 = tmp26;
                  tmp23 = obj2;
                  tmp24 = tmp21;
                  num5 = num4;
                } while (num4 < tmp10);
              }
            }
            let sizeForSectionFooter = self.getSizeForSectionFooter(num3);
            let tmp40 = tmp22;
            let tmp41 = sizeForSection;
            let tmp42 = obj;
            tmp11 = tmp6;
            tmp12 = num5;
            tmp13 = tmp23;
            tmp14 = tmp24;
            let tmp43 = sizeForSectionFooter;
            if (sizeForSectionFooter > 0) {
              let tmp44 = closure_3;
              let obj3 = {};
              let tmp45 = outer1_19;
              obj3.type = outer1_19.SECTION_FOOTER;
              obj3.layoutStart = closure_3;
              obj3.layoutSize = sizeForSectionFooter;
              obj3.section = num3;
              obj3.sectionData = obj;
              let pushDataResult4 = pushData(closure_3, closure_3 + sizeForSectionFooter, obj3);
              let tmp47 = closure_3;
              let tmp48 = sizeForSection;
              let tmp49 = obj;
              tmp11 = tmp6;
              tmp12 = num5;
              tmp13 = tmp23;
              tmp14 = tmp24;
              let tmp50 = sizeForSectionFooter;
            }
          }
          num3 = num3 + 1;
          tmp6 = tmp11;
          tmp7 = tmp12;
          tmp8 = tmp13;
          tmp9 = tmp14;
        } while (num3 < sections.length);
      }
      const sizeForFooter = self.getSizeForFooter();
      if (sizeForFooter > 0) {
        const obj4 = { type: outer1_19.FOOTER, layoutStart: closure_3, layoutSize: sizeForFooter };
        pushData(closure_3, closure_3 + sizeForFooter, obj4);
      }
      closure_3 = closure_3 + num2;
      self.size = outer1_12.roundToNearestPixel(closure_3);
      self.dirty = false;
    }
  };
  items[10] = {
    key: "getChunkDataFromSectionItem",
    value(arg0, arg1) {
      const self = this;
      if (this.dirty) {
        self.fullCompute();
      }
      const tmp2 = outer1_32(self.dataCache);
      const iter = tmp2();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          let tmp3 = outer1_32;
          let tmp4 = outer1_32(value.data);
          let iter3 = tmp4();
          if (!iter3.done) {
            while (true) {
              value = iter3.value;
              let type = value.type;
              let tmp5 = outer1_19;
              if (outer1_19.ITEM === type) {
                if (null != arg1) {
                  if (true === value.uniform) {
                    if (value.section === arg0) {
                      return arg1 > value.items ? undefined : value;
                    }
                  }
                  if (null == value.uniform) {
                    if (value.section === arg0) {
                      if (value.item === arg1) {
                        return value;
                      }
                    }
                  }
                }
              } else {
                let tmp6 = outer1_19;
                if (outer1_19.SECTION === type) {
                  if (value.section > arg0) {
                    break;
                  } else if (null == arg1) {
                    return value;
                  }
                }
              }
              let iter4 = tmp4();
              iter3 = iter4;
              let tmp7 = value;
              continue;
            }
          }
          let iter5 = tmp2();
          iter2 = iter5;
        }
      }
    }
  };
  items[11] = {
    key: "getChunkIndexFromSectionItem",
    value(chunk) {
      let padBottom;
      let targetItem;
      let targetSection;
      let value;
      const self = this;
      ({ targetSection, targetItem, padBottom } = chunk);
      if (padBottom === undefined) {
        padBottom = 16;
      }
      const tmp = outer1_32(chunk.chunk.data);
      let iter = tmp();
      if (!iter.done) {
        while (true) {
          value = iter.value;
          let type = value.type;
          let tmp2 = outer1_19;
          if (outer1_19.ITEM === type) {
            if (value.section === targetSection) {
              if (null != targetItem) {
                if (value.uniform) {
                  if (targetItem < value.items) {
                    let sum = value.layoutStart + value.sectionData.layoutSize + value.itemSize * targetItem;
                    let obj = {};
                    let tmp4 = globalThis;
                    let _Math = Math;
                    obj.startIndex = Math.floor(sum / self.chunkSize);
                    let _Math2 = Math;
                    obj.endIndex = Math.floor((sum + value.itemSize + padBottom) / self.chunkSize);
                    return obj;
                  }
                } else if (value.item < targetItem) {
                  if (value.item === targetItem) {
                    obj = {};
                    let tmp7 = globalThis;
                    let _Math5 = Math;
                    obj.startIndex = Math.floor((value.layoutStart - value.sectionData.layoutSize) / self.chunkSize);
                    let _Math6 = Math;
                    obj.endIndex = Math.floor((value.layoutStart + value.layoutSize + padBottom) / self.chunkSize);
                    return obj;
                  }
                }
              }
            }
          } else {
            let tmp5 = outer1_19;
            if (outer1_19.SECTION === type) {
              if (null == targetItem) {
                if (targetSection >= value.section) {
                  if (targetSection === value.section) {
                    break;
                  }
                }
              }
            }
          }
          let iter2 = tmp();
          iter = iter2;
        }
        obj = {};
        const _Math3 = Math;
        obj.startIndex = Math.floor(value.layoutStart / self.chunkSize);
        const _Math4 = Math;
        obj.endIndex = Math.floor((value.layoutStart + value.layoutSize + padBottom) / self.chunkSize);
        return obj;
      }
    }
  };
  items[12] = {
    key: "computeScrollPosition",
    value(arg0, arg1, arg2) {
      const self = this;
      if (null == arg2) {
        if (self.dirty) {
          self.fullCompute();
        }
        if (arg1 < 0) {
          return { scrollPosition: 0, size: 0, sectionOffset: 0 };
        } else {
          const tmp9 = outer1_32(tmp2);
          const iter5 = tmp9();
          let iter4 = iter5;
          if (!iter5.done) {
            while (true) {
              let tmp3 = outer1_32;
              let tmp4 = outer1_32(iter4.value.data);
              let iter = tmp4();
              if (!iter.done) {
                while (true) {
                  let value = iter.value;
                  let type = value.type;
                  let tmp5 = outer1_19;
                  if (outer1_19.ITEM === type) {
                    if (null != arg2) {
                      if (true === value.uniform) {
                        if (value.section === arg1) {
                          break;
                        }
                      }
                      if (null == value.uniform) {
                        if (value.section === arg1) {
                          if (value.item === arg2) {
                            let obj = {};
                            ({ layoutStart: obj3.scrollPosition, layoutSize: obj3.size } = value);
                            let num3 = 0;
                            if (arg0) {
                              num3 = value.sectionData.layoutSize;
                            }
                            obj.sectionOffset = num3;
                            return obj;
                          }
                        }
                      }
                    }
                  } else {
                    let tmp6 = outer1_19;
                    if (outer1_19.SECTION === type) {
                      if (value.section <= arg1) {
                        if (null == arg2) {
                          if (value.section === arg1) {
                            obj = {};
                            ({ layoutStart: obj2.scrollPosition, layoutSize: obj2.size } = value);
                            obj.sectionOffset = 0;
                            return obj;
                          }
                        }
                      }
                    }
                  }
                  let iter2 = tmp4();
                  iter = iter2;
                  let tmp7 = value;
                  continue;
                }
                if (arg2 <= value.items) {
                  obj = { scrollPosition: value.sectionData.layoutStart + value.sectionData.layoutSize + value.itemSize * arg2, size: value.itemSize };
                  let num4 = 0;
                  if (arg0) {
                    num4 = value.sectionData.layoutSize;
                  }
                  obj.sectionOffset = num4;
                  return obj;
                }
              }
              let iter3 = tmp9();
              iter4 = iter3;
            }
          }
        }
      }
    }
  };
  items[13] = {
    key: "getSectionItemFromPosition",
    value(arg0) {
      let layoutSize;
      let sum;
      let value;
      let obj = arg1;
      const self = this;
      if (arg1 === undefined) {
        obj = outer1_18;
      }
      if (self.dirty) {
        self.fullCompute();
      }
      const tmp2 = outer1_32(self.items);
      const iter = tmp2();
      let iter2 = iter;
      let num = 0;
      let tmp3;
      let num2 = 0;
      if (!iter.done) {
        while (true) {
          value = iter2.value;
          sum = value.layoutStart + num;
          value = obj.get(value.recyclerKey);
          layoutSize = value;
          if (null == value) {
            layoutSize = value.layoutSize;
          }
          if (layoutSize > 0) {
            if (arg0 >= sum) {
              if (arg0 <= sum + layoutSize) {
                break;
              }
            }
          }
          let num3 = 0;
          if (null != value) {
            num3 = value - value.layoutSize;
          }
          num = num + num3;
          let iter3 = tmp2();
          iter2 = iter3;
          num2 = 0;
        }
        num2 = (arg0 - sum) / layoutSize;
        tmp3 = value;
      }
      obj = { item: tmp3, positionPercentage: num2 };
      return obj;
    }
  };
  items[14] = {
    key: "setDisableRecycling",
    value(disableRecycling) {
      this.disableRecycling = disableRecycling;
    }
  };
  items[15] = {
    key: "getSize",
    value() {
      const self = this;
      if (this.dirty) {
        self.fullCompute();
      }
      return self.size;
    }
  };
  items[16] = {
    key: "isDirty",
    value() {
      return this.dirty;
    }
  };
  return callback2(FastListComputer, items);
})();
let closure_21 = tmp6;
let closure_22 = { code: "function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}" };
let closure_23 = importAllResult.memo(function FastListStickySectionRendererComponent(children) {
  let debug;
  let fastListInstance;
  let horizontal;
  let layoutSize;
  let layoutStart;
  let nextSectionLayoutPosition;
  let recyclerKey;
  let scrollPosValue;
  let section;
  ({ layoutStart, layoutSize, horizontal } = children);
  ({ nextSectionLayoutPosition, scrollPosValue } = children);
  ({ fastListInstance, section, debug, recyclerKey } = children);
  const items = [-1, 0];
  const items1 = [0, 0];
  items.push(layoutStart);
  items1.push(0);
  let num = 0;
  if (null != nextSectionLayoutPosition) {
    num = nextSectionLayoutPosition;
  }
  const diff = num - layoutSize;
  if (diff >= layoutStart) {
    let obj = horizontal(items[14]);
    let num4 = 0;
    if (obj.isAndroid()) {
      num4 = -1;
    }
    items.push(diff, diff + 1);
    items1.push(diff - layoutStart + num4, diff - layoutStart + num4);
  } else {
    items.push(layoutStart + 1);
    items1.push(1);
  }
  let obj1 = horizontal(items[15]);
  const fn = function v() {
    let interpolateResult = null;
    if (null != scrollPosValue) {
      let obj = horizontal(items[15]);
      interpolateResult = obj.interpolate(scrollPosValue.get(), items, items1);
    }
    obj = {};
    if (null == interpolateResult) {
      obj.transform = undefined;
      return obj;
    } else {
      obj = {};
      if (horizontal) {
        obj.translateX = interpolateResult;
        let tmp8 = obj;
      } else {
        obj.translateY = interpolateResult;
        tmp8 = obj;
      }
      obj = [tmp8];
    }
  };
  obj = { scrollPosValue, interpolate: horizontal(items[15]).interpolate, inputRange: items, outputRange: items1, horizontal };
  fn.__closure = obj;
  fn.__workletHash = 699810682881;
  fn.__initData = closure_22;
  const Children = importAllResult.Children;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const onlyResult = Children.only(children.children(section, fastListInstance, scrollPosValue, layoutStart));
  obj = { style: null, collapsable: false, preventClipping: true };
  let style;
  if (null != onlyResult) {
    if ("props" in onlyResult) {
      style = onlyResult.props.style;
    }
  }
  const items2 = [style, , ];
  obj1 = { zIndex: 10, position: "relative" };
  let tmp15;
  if (!horizontal) {
    tmp15 = layoutSize;
  }
  obj1.height = tmp15;
  let tmp16;
  if (horizontal) {
    tmp16 = layoutSize;
  }
  obj1.width = tmp16;
  items2[1] = obj1;
  items2[2] = animatedStyle;
  obj.style = items2;
  let cloneElementResult;
  if (null != onlyResult) {
    const obj2 = {};
    const obj3 = { flex: 1 };
    obj2.style = obj3;
    cloneElementResult = importAllResult.cloneElement(onlyResult, obj2);
  }
  const items3 = [cloneElementResult, false];
  obj.children = items3;
  return closure_15(scrollPosValue(items[16]), obj);
});
let closure_24 = importAllResult.memo(function _FastListSectionRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let layoutSize;
  let recyclerKey;
  let section;
  ({ layoutSize, children, fastListInstance, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      let obj = { children: children(section, fastListInstance) };
      return callback3(closure_17, obj);
    }
  }
  obj = { collapsable: false, style: null, preventClipping: true };
  obj = {};
  if (horizontal) {
    obj.width = layoutSize;
    let tmp5 = obj;
  } else {
    obj.height = layoutSize;
    tmp5 = obj;
  }
  obj.style = tmp5;
  fastListInstance = children(section, fastListInstance);
  section = [fastListInstance, false];
  obj.children = section;
  closure_15(importDefault(5515), obj);
});
let closure_25 = importAllResult.memo(function _FastListSectionFooterRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let layoutSize;
  let recyclerKey;
  let section;
  ({ layoutSize, fastListInstance, children, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      let obj = { children: children(section, fastListInstance) };
      return callback3(closure_17, obj);
    }
  }
  obj = { collapsable: false };
  obj = {};
  if (horizontal) {
    obj.width = layoutSize;
    let tmp5 = obj;
  } else {
    obj.height = layoutSize;
    tmp5 = obj;
  }
  obj.style = tmp5;
  children = children(section, fastListInstance);
  section = [children, false];
  obj.children = section;
  closure_15(importDefault(5515), obj);
});
let closure_26 = importAllResult.memo(function _FastListItemRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let item;
  let layoutSize;
  let recyclerKey;
  let section;
  ({ layoutSize, children, section, fastListInstance, item, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      if (null != children) {
        let childrenResult = children(section, item, fastListInstance);
      }
    }
    return childrenResult;
  }
  let obj = { collapsable: false };
  obj = {};
  if (horizontal) {
    obj.width = layoutSize;
    let tmp5 = obj;
  } else {
    obj.height = layoutSize;
    tmp5 = obj;
  }
  obj.style = tmp5;
  let childrenResult1;
  if (null != children) {
    childrenResult1 = children(section, item, fastListInstance);
  }
  const items = [childrenResult1, false];
  obj.children = items;
  childrenResult = closure_15(importDefault(5515), obj);
});
let closure_27 = importAllResult.memo(function _FastListHeaderFooterRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let layoutSize;
  let recyclerKey;
  ({ layoutSize, children, fastListInstance, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      let obj = { children: children(fastListInstance) };
      return callback3(closure_17, obj);
    }
  }
  obj = { collapsable: false, style: null, preventClipping: true };
  obj = {};
  if (horizontal) {
    obj.width = layoutSize;
    let tmp5 = obj;
  } else {
    obj.height = layoutSize;
    tmp5 = obj;
  }
  obj.style = tmp5;
  children = children(fastListInstance);
  fastListInstance = [children, false];
  obj.children = fastListInstance;
  closure_15(importDefault(5515), obj);
});
let closure_28 = importAllResult.memo(function _FastListSpacer(layoutSize) {
  layoutSize = layoutSize.layoutSize;
  let obj = { collapsable: false };
  obj = {};
  if (layoutSize.horizontal) {
    obj.width = layoutSize;
    let tmp3 = obj;
  } else {
    obj.height = layoutSize;
    tmp3 = obj;
  }
  obj.style = tmp3;
  return closure_16(importDefault(5515), obj);
});
let closure_29 = (() => {
  class FastListScrollAnchor {
    constructor(arg0) {
      tmp = outer1_9(this, FastListScrollAnchor);
      this.getScrollPosition = arg0;
      this.isCustomAnchor = false;
      return;
    }
  }
  let obj = {
    key: "hasAnchor",
    value() {
      return null != this.anchorId;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "cleanAnchor",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!tmp) {
        self.isCustomAnchor = false;
        self.anchorId = undefined;
        self.anchorOffset = undefined;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleUserScroll",
    value() {
      this.cleanAnchor(true);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setCustomAnchor",
    value(arg0, anchorOffset) {
      const self = this;
      this.isCustomAnchor = true;
      this.anchorOffset = anchorOffset;
      this.anchorId = arg0(arg2, arg3);
      if (null == this.anchorId) {
        self.cleanAnchor(true);
      }
    }
  };
  items[4] = {
    key: "findOrUpdateAnchor",
    value(arg0, arg1) {
      let value;
      const self = this;
      const scrollPosition = this.getScrollPosition();
      this.cleanAnchor();
      const tmp3 = outer1_32(arg1);
      const iter = tmp3();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          value = iter2.value;
          let tmp5 = outer1_19;
          let tmp6 = tmp4;
          if (value.type === outer1_19.ITEM) {
            if (self.isCustomAnchor) {
              let item = value.item;
              let num = 0;
              if (null != item) {
                num = item;
              }
              tmp4 = item;
              if (self.anchorId === arg0(value.section, num)) {
                break;
              }
            }
            tmp6 = tmp4;
            if (!self.isCustomAnchor) {
              tmp6 = tmp4;
              if (value.layoutStart >= scrollPosition) {
                self.anchorOffset = value.layoutStart - scrollPosition;
                let item2 = value.item;
                let num2 = 0;
                if (null != item2) {
                  num2 = item2;
                }
                self.anchorId = arg0(value.section, num2);
              }
            }
          }
          let iter3 = tmp3();
          tmp4 = tmp6;
          iter2 = iter3;
        }
        self.anchorOffset = value.layoutStart - scrollPosition;
      }
    }
  };
  items[5] = {
    key: "getAnchorIndex",
    value(arg0) {
      const self = this;
      if (null != this.anchorId) {
        self.cleanAnchor();
        return arg0(self.anchorId);
      }
    }
  };
  return callback2(FastListScrollAnchor, items);
})();
let closure_30 = { code: "function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue,onScrollWorklet}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));if(onScrollWorklet!=null){const layoutSize=!horizontal?event.layoutMeasurement.height:event.layoutMeasurement.width;onScrollWorklet(scrollPosition,contentSize,layoutSize);}}" };
let tmp7 = ((PureComponent) => {
  class FastList {
    constructor(arg0) {
      self = this;
      tmp = outer1_9(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_31()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.containerSize = 0;
      tmp2Result.scrollPos = 0;
      obj3 = FastList(outer1_2[17]);
      tmp2Result.scrollPosValue = obj3.createFakeSharedValue(0);
      manualRef = tmp2Result.props.manualRef;
      if (null == manualRef) {
        tmp6 = outer1_11;
        manualRef = outer1_11.createRef();
      }
      tmp2Result.scrollView = manualRef;
      tmp2Result.getItems = () => tmp2Result.state.items;
      tmp2Result.getScrollPosition = () => tmp2Result.scrollPos;
      tmp2Result.disableAnchoringTimeout = undefined;
      tmp2Result.viewTag = null;
      obj4 = FastList(outer1_2[15]);
      tmp2Result.workletMounted = obj4.makeMutable(false);
      tmp2Result.deferredCompute = -1;
      tmp2Result.deferNextCompute = false;
      tmp7 = new outer1_29(tmp2Result.getScrollPosition);
      tmp2Result.scrollAnchor = tmp7;
      tmp2Result.viewabilityDebounce = -1;
      tmp2Result.previouslyViewableItems = [];
      tmp2Result._scrollPositionToPoint = (arg0) => {
        const horizontal = tmp2Result.props.horizontal;
        const obj = {};
        let num = 0;
        if (horizontal) {
          num = arg0;
        }
        obj.x = num;
        let num2 = 0;
        if (!horizontal) {
          num2 = arg0;
        }
        obj.y = num2;
        return obj;
      };
      tmp2Result._calculateScrollPosition = (paddingStart) => {
        let itemCoords;
        let orientation;
        let scrollPosition;
        let sectionOffset;
        let size;
        ({ itemCoords, orientation } = paddingStart);
        if (orientation === undefined) {
          orientation = "top";
        }
        let num = paddingStart.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        let num2 = paddingStart.paddingEnd;
        if (num2 === undefined) {
          num2 = 0;
        }
        ({ scrollPosition, size, sectionOffset } = itemCoords);
        if (tmp2Result.containerSize > 0) {
          let num3 = tmp2Result.containerSize;
        } else {
          const chunkBase = tmp2Result.props.chunkBase;
          num3 = 0;
          if (null != chunkBase) {
            num3 = chunkBase;
          }
        }
        if (size >= num3) {
          orientation = "top";
        }
        if ("visible" === orientation) {
          if (scrollPosition + sectionOffset >= tmp2Result.scrollPos + num) {
            if (scrollPosition + size <= tmp2Result.scrollPos + (num3 - num2)) {
              return null;
            }
          }
          if (size <= num3) {
            if (scrollPosition >= tmp2Result.scrollPos) {
              let diff = scrollPosition + size + num2 - num3;
            }
          }
          diff = scrollPosition - (sectionOffset + num);
        } else if ("top" === orientation) {
          diff = scrollPosition - (sectionOffset + num);
        } else {
          diff = scrollPosition;
          if ("center" === orientation) {
            const _Math = Math;
            const _Math2 = Math;
            const sum = itemCoords.scrollPosition + Math.floor(itemCoords.size / 2);
            diff = sum - Math.floor(num3 / 2);
          }
        }
        return Math.max(0, Math.min(diff, paddingStart.fullSize - num3));
      };
      props = tmp2Result.props;
      chunkBase = props.chunkBase;
      obj = { headerSize: props.headerSize, footerSize: props.footerSize, sectionSize: props.sectionSize, itemSize: props.itemSize, sectionFooterSize: props.sectionFooterSize, sections: props.sections, insetStart: props.insetStart, insetEnd: props.insetEnd, stickyHeaderFooter: props.stickyHeaderFooter, getRecyclerKey: props.getRecyclerKey, persistantKeys: props.persistantKeys, disableRecyclingOnFullCompute: props.disableRecyclingOnFullCompute };
      tmp8 = new outer1_21(obj);
      num = 0;
      if (null != chunkBase) {
        num = chunkBase;
      }
      tmp2Result.state = tmp2Result.getInitialState(num, tmp8, true);
      tmp2Result.handleViewabilityChange = () => {
        const onViewableItemsChanged = tmp2Result.props.onViewableItemsChanged;
        if (null != onViewableItemsChanged) {
          const sum = tmp2Result.scrollPos + tmp2Result.containerSize;
          const items = [];
          const tmp14 = outer2_32(tmp2Result.state.items);
          let iter2 = tmp14();
          if (!iter2.done) {
            const value = iter2.value;
            while (value.layoutStart <= sum) {
              let _Math = Math;
              let bound = Math.max(value.layoutStart, tmp11);
              let _Math2 = Math;
              let bound1 = Math.min(value.layoutStart + value.layoutSize, sum);
              if (bound < bound1) {
                if ((bound1 - bound) / value.layoutSize >= tmp10) {
                  let arr = items.push(value.recyclerKey);
                }
              }
              let iter = tmp14();
              iter2 = iter;
              if (iter.done) {
                break;
              }
            }
          }
          if (!obj.areArraysShallowEqual(items, tmp2Result.previouslyViewableItems)) {
            tmp2Result.previouslyViewableItems = items;
            const result = onViewableItemsChanged(items);
          }
          obj = FastList(outer2_2[11]);
        }
      };
      tmp2Result.isVisible = (arg0) => {
        let num = arg1;
        let num2 = arg2;
        if (arg1 === undefined) {
          num = 0;
        }
        if (num2 === undefined) {
          num2 = 0;
        }
        let tmp = arg0 >= tmp2Result.scrollPos + num;
        if (tmp) {
          tmp = arg0 <= tmp2Result.scrollPos + tmp2Result.containerSize - num2;
        }
        return tmp;
      };
      tmp2Result.scrollToTop = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = true;
        }
        const scrollView = tmp2Result.scrollView;
        let tmp = null == scrollView;
        let obj = scrollView;
        if (!tmp) {
          const current = scrollView.current;
          tmp = null == current;
          obj = current;
        }
        if (!tmp) {
          obj = { x: 0, y: 0, animated: flag };
          obj.scrollTo(obj);
        }
      };
      tmp2Result.scrollToLocation = (orientation) => {
        let animated;
        let getAnchorIdFromIndex;
        let item;
        let section;
        let stickySectionsVariant;
        ({ section, item, animated } = orientation);
        if (animated === undefined) {
          animated = false;
        }
        let str = orientation.orientation;
        if (str === undefined) {
          str = "top";
        }
        let num = orientation.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        let num2 = orientation.paddingEnd;
        if (num2 === undefined) {
          num2 = 0;
        }
        let flag = orientation.setAnchor;
        if (flag === undefined) {
          flag = false;
        }
        const current = tmp2Result.scrollView.current;
        if (null == current) {
          return false;
        } else {
          ({ getAnchorIdFromIndex, stickySectionsVariant } = tmp2Result.props);
          let str2 = "default";
          if (undefined !== stickySectionsVariant) {
            str2 = stickySectionsVariant;
          }
          const fastListComputer = tmp2Result.state.fastListComputer;
          const scrollPosition = fastListComputer.computeScrollPosition("default" === str2, section, item);
          if (null == scrollPosition) {
            return false;
          } else {
            if ("visible" === str) {
              if (tmp2Result.isVisible(scrollPosition.scrollPosition, num, num2)) {
                return false;
              }
            }
            let obj = { itemCoords: scrollPosition, fullSize: fastListComputer.getSize(), orientation: str, paddingStart: num, paddingEnd: num2 };
            const result = tmp2Result._calculateScrollPosition(obj);
            if (tmp5) {
              const scrollAnchor = tmp2Result.scrollAnchor;
              let num3 = 0;
              if (null != result) {
                num3 = result;
              }
              scrollAnchor.setCustomAnchor(getAnchorIdFromIndex, scrollPosition.scrollPosition - num3, section, item);
            }
            let flag2 = null != result;
            if (flag2) {
              flag2 = result !== tmp2Result.scrollPos;
            }
            if (flag2) {
              if (!animated) {
                tmp2Result.scrollPos = result;
                const blocks = tmp2Result.computeBlocks();
              }
              obj = {};
              const merged = Object.assign(tmp2Result._scrollPositionToPoint(result));
              obj["animated"] = animated;
              current.scrollTo(obj);
              flag2 = true;
            }
            return flag2;
          }
          const tmp19 = tmp2Result;
        }
      };
      tmp2Result.scrollTo = (arg0) => {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = false;
        }
        const current = tmp2Result.scrollView.current;
        const fastListComputer = tmp2Result.state.fastListComputer;
        let tmp = null != current;
        if (tmp) {
          let flag2 = arg0 <= fastListComputer.getSize() - tmp2Result.containerSize;
          if (flag2) {
            flag2 = arg0 !== tmp2Result.scrollPos;
          }
          if (flag2) {
            const obj = {};
            const merged = Object.assign(tmp2Result._scrollPositionToPoint(arg0));
            obj["animated"] = flag;
            current.scrollTo(obj);
            flag2 = true;
          }
          tmp = flag2;
        }
        return tmp;
      };
      tmp2Result.handleScroll = (nativeEvent) => {
        let EXPERIMENTAL_enableAnchorWhileScrolling;
        let contentInset;
        let endReachedThreshold;
        let fastListComputer;
        let hasReachedEndBefore;
        let horizontal;
        let onEndReached;
        let onScroll;
        ({ contentInset, horizontal, onScroll, onEndReached, endReachedThreshold, EXPERIMENTAL_enableAnchorWhileScrolling } = tmp2Result.props);
        let tmp2 = undefined !== EXPERIMENTAL_enableAnchorWhileScrolling;
        if (tmp2) {
          tmp2 = EXPERIMENTAL_enableAnchorWhileScrolling;
        }
        ({ fastListComputer, hasReachedEndBefore } = tmp2Result.state);
        const layoutMeasurement = nativeEvent.nativeEvent.layoutMeasurement;
        const tmp3 = horizontal ? layoutMeasurement.width : layoutMeasurement.height;
        const tmp4 = horizontal ? contentInset.left : contentInset.top;
        let num = 0;
        if (null != tmp4) {
          num = tmp4;
        }
        const tmp5 = horizontal ? contentInset.right : contentInset.bottom;
        let num2 = 0;
        if (null != tmp5) {
          num2 = tmp5;
        }
        tmp2Result.containerSize = tmp3 - num - num2;
        const bound = Math.max(0, tmp2Result.getScrollPositionFromEvent(nativeEvent));
        const bound1 = Math.min(bound, fastListComputer.getSize() - tmp2Result.containerSize);
        tmp2Result.scrollPos = bound1;
        if (null != onScroll) {
          onScroll(nativeEvent);
        }
        let obj = tmp2Result;
        if (tmp2Result.deferNextCompute) {
          obj.deferNextCompute = false;
          if (-1 !== obj.deferredCompute) {
            const _cancelAnimationFrame = cancelAnimationFrame;
            cancelAnimationFrame(tmp2Result.deferredCompute);
          }
          const _requestAnimationFrame = requestAnimationFrame;
          tmp2Result.deferredCompute = requestAnimationFrame(() => outer1_0.computeBlocks());
        } else {
          const blocks = obj.computeBlocks();
        }
        if (!tmp2) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp2Result.disableAnchoringTimeout);
          const _setTimeout = setTimeout;
          tmp2Result.disableAnchoringTimeout = setTimeout(() => {
            clearTimeout(outer1_0.disableAnchoringTimeout);
            outer1_0.disableAnchoringTimeout = undefined;
          }, 100);
        }
        if (null != onEndReached) {
          const contentSize = nativeEvent.nativeEvent.contentSize;
          let num5 = 0;
          if (null != endReachedThreshold) {
            num5 = endReachedThreshold;
          }
          const rounded = Math.ceil((horizontal ? contentSize.width : contentSize.height) - num5 - tmp3);
          const _Math = Math;
          const rounded1 = Math.ceil(bound1);
          if (rounded1 >= rounded) {
            if (!hasReachedEndBefore) {
              obj = { hasReachedEndBefore: true };
              tmp2Result.setState(obj);
              obj = { distanceFromEnd: rounded1 - rounded };
              onEndReached(obj);
            }
          }
          let tmp22 = !tmp18;
          if (rounded1 < rounded) {
            tmp22 = hasReachedEndBefore;
          }
          if (tmp22) {
            const obj1 = { hasReachedEndBefore: false };
            tmp2Result.setState(obj1);
          }
          const tmp15 = horizontal ? contentSize.width : contentSize.height;
        }
        const result = tmp2Result.queueViewabilityChange();
      };
      tmp2Result.handleLayout = (nativeEvent) => {
        let chunkBase;
        let contentInset;
        let horizontal;
        let onLayout;
        const state = tmp2Result.state;
        const fastListComputer = state.fastListComputer;
        ({ contentInset, onLayout, horizontal, chunkBase } = tmp2Result.props);
        const layout = nativeEvent.nativeEvent.layout;
        const tmp2 = horizontal ? contentInset.left : contentInset.top;
        let num = 0;
        if (null != tmp2) {
          num = tmp2;
        }
        const tmp3 = horizontal ? contentInset.right : contentInset.bottom;
        let num2 = 0;
        if (null != tmp3) {
          num2 = tmp3;
        }
        tmp2Result.containerSize = (horizontal ? layout.width : layout.height) - num - num2;
        if (null == chunkBase) {
          fastListComputer.setInfo(tmp2Result.containerSize);
        }
        if (null != onLayout) {
          onLayout(nativeEvent, tmp2Result);
        }
        if (state.isFirstLayout) {
          if (null == chunkBase) {
            tmp2Result.setState(tmp2Result.getInitialState(tmp2Result.containerSize, fastListComputer, false));
          }
          const result = tmp2Result.queueViewabilityChange();
        }
        const blocks = tmp2Result.computeBlocks();
      };
      tmp2Result.handleMomentumScrollEnd = (result) => {
        const onScrollEnd = tmp2Result.props.onScrollEnd;
        if (null != onScrollEnd) {
          onScrollEnd(result);
        }
      };
      tmp2Result.handleScrollBeginDrag = (arg0) => {
        const scrollAnchor = tmp2Result.scrollAnchor;
        scrollAnchor.handleUserScroll();
        if (null != tmp2Result.props.onScrollBeginDrag) {
          const props = tmp2Result.props;
          props.onScrollBeginDrag(arg0);
        }
      };
      props2 = tmp2Result.props;
      ({ getAnchorIdFromIndex, getAnchorIndexFromId } = props2);
      if (props2.batchesToRender < 5) {
        tmp25 = globalThis;
        _Error4 = Error;
        prototype4 = Error.prototype;
        tmp26 = new.target;
        str4 = "FastList: `batchesToRender` must be >= 6";
        tmp27 = new.target;
        error = new Error("FastList: `batchesToRender` must be >= 6");
        tmp29 = error;
        throw error;
      } else {
        if (null != getAnchorIdFromIndex) {
          if (null != getAnchorIdFromIndex) {
          }
          tmp9 = globalThis;
          _Error = Error;
          prototype = Error.prototype;
          tmp10 = new.target;
          str = "FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither";
          tmp11 = new.target;
          error1 = new Error("FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither");
          tmp13 = error1;
          throw error1;
        }
        viewabilityConfig = tmp2Result.getViewabilityConfig();
        if (viewabilityConfig.minimumViewTime <= 0) {
          tmp20 = globalThis;
          _Error3 = Error;
          prototype3 = Error.prototype;
          tmp21 = new.target;
          str3 = "FastList: `viewabilityConfig.minimumViewTime` must be greater than 0";
          tmp22 = new.target;
          error2 = new Error("FastList: `viewabilityConfig.minimumViewTime` must be greater than 0");
          tmp24 = error2;
          throw error2;
        } else {
          if (viewabilityConfig.visibilityThreshold > 0) {
            num2 = 1;
            if (viewabilityConfig.visibilityThreshold <= 1) {
              return tmp2Result;
            }
          }
          tmp15 = globalThis;
          _Error2 = Error;
          prototype2 = Error.prototype;
          tmp16 = new.target;
          str2 = "FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1";
          tmp17 = new.target;
          error3 = new Error("FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1");
          tmp19 = error3;
          throw error3;
        }
      }
    }
  }
  callback(FastList, PureComponent);
  let obj = {
    key: "computeScrollPosition",
    value(arg0, arg1) {
      const fastListComputer = this.state.fastListComputer;
      return fastListComputer.computeScrollPosition(false, arg0, arg1);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getInitialState",
    value(arg0, setInfo) {
      let batchSize;
      let blockEnd;
      let blockStart;
      let initialScrollItem;
      let initialScrollOrientation;
      let initialScrollStart;
      let stickySectionsVariant;
      let items = arg3;
      const self = this;
      if (arg3 === undefined) {
        items = [];
      }
      const props = self.props;
      const initialScrollSection = props.initialScrollSection;
      let num = 0;
      if (undefined !== initialScrollSection) {
        num = initialScrollSection;
      }
      ({ initialScrollItem, initialScrollOrientation } = props);
      let str = "visible";
      if (undefined !== initialScrollOrientation) {
        str = initialScrollOrientation;
      }
      ({ initialScrollStart, stickySectionsVariant } = props);
      let str2 = "default";
      if (undefined !== stickySectionsVariant) {
        str2 = stickySectionsVariant;
      }
      const horizontal = props.horizontal;
      const scrollPosValue = props.scrollPosValue;
      setInfo.setInfo(arg0);
      let num2 = 0;
      if (null != initialScrollStart) {
        num2 = initialScrollStart;
      }
      if (null != initialScrollStart) {
        let point = self._scrollPositionToPoint(initialScrollStart);
        let tmp3 = num2;
      } else if (num > 0) {
        tmp3 = num2;
        if (arg0 > 0) {
          const scrollPosition = setInfo.computeScrollPosition("default" === str2, num, initialScrollItem);
          tmp3 = num2;
          if (null != scrollPosition) {
            let obj = { itemCoords: scrollPosition, fullSize: setInfo.getSize(), orientation: str, paddingEnd: 16 };
            const result = self._calculateScrollPosition(obj);
            let diff = result;
            if (null == result) {
              diff = scrollPosition.scrollPosition - scrollPosition.sectionOffset;
            }
            tmp3 = diff;
            if (null != result) {
              point = self._scrollPositionToPoint(result);
              tmp3 = diff;
            }
          }
        }
      } else {
        tmp3 = num2;
      }
      if (arg2) {
        if (arg0 > 0) {
          ({ batchSize, blockStart, blockEnd } = outer1_37(arg0, tmp3, props.batchesToRender));
          const tmp8 = outer1_37(arg0, tmp3, props.batchesToRender);
        }
        if (null == point) {
          point = { x: 0, y: 0 };
        }
        const tmp9 = tmp ? point.x : point.y;
        self.scrollPos = tmp9;
        if (null != scrollPosValue) {
          const result1 = scrollPosValue.set(tmp9);
          self.scrollPosValue = scrollPosValue;
        } else {
          self.scrollPosValue = FastList(outer1_2[15]).makeMutable(tmp9);
          const obj2 = FastList(outer1_2[15]);
        }
        obj = {};
        if (arg0 > 0) {
          let computeResult = setInfo.compute(blockStart, blockEnd, items, true);
        } else {
          computeResult = { size: 0, items: [] };
        }
        const merged = Object.assign(computeResult);
        obj["batchSize"] = batchSize;
        obj["blockStart"] = blockStart;
        obj["blockEnd"] = blockEnd;
        obj["isFirstLayout"] = arg2;
        obj["fastListComputer"] = setInfo;
        obj["initialContentOffset"] = point;
        obj["hasReachedEndBefore"] = false;
        return obj;
      }
      batchSize = outer1_36(arg0);
      blockEnd = tmp3 + arg0;
      blockStart = tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      const scrollPosValue = this.scrollPosValue;
      const workletMounted = this.workletMounted;
      const props = this.props;
      const horizontal = props.horizontal;
      let closure_2 = tmp;
      const onScrollWorklet = props.onScrollWorklet;
      const fn = function t(contentOffset) {
        contentOffset = contentOffset.contentOffset;
        const tmp = closure_2 ? contentOffset.x : contentOffset.y;
        const contentSize = contentOffset.contentSize;
        const tmp2 = closure_2 ? contentSize.width : contentSize.height;
        if (0 !== tmp2) {
          const result = workletMounted.set(true);
          const _Math = Math;
          const result1 = scrollPosValue.set(Math.min(tmp, tmp2));
          if (null != onScrollWorklet) {
            let layoutMeasurement = contentOffset.layoutMeasurement;
            layoutMeasurement = onScrollWorklet;
            onScrollWorklet(tmp, tmp2, closure_2 ? layoutMeasurement.width : layoutMeasurement.height);
            const tmp12 = closure_2 ? layoutMeasurement.width : layoutMeasurement.height;
          }
        }
      };
      fn.__closure = { horizontal: undefined !== horizontal && horizontal, workletMounted, scrollPosValue, onScrollWorklet };
      fn.__workletHash = 16225357996403;
      fn.__initData = outer1_30;
      self.worklet = new FastList(outer1_2[15]).WorkletEventHandler(fn, ["onScroll"]);
      self.viewTag = outer1_14(self.scrollView.current);
      const worklet = self.worklet;
      worklet.registerForEvents(self.viewTag);
      let result = self.queueViewabilityChange();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSnapshotBeforeUpdate",
    value(getAnchorIdFromIndex, isFirstLayout) {
      const self = this;
      getAnchorIdFromIndex = getAnchorIdFromIndex.getAnchorIdFromIndex;
      const EXPERIMENTAL_enableAnchorWhileScrolling = this.props.EXPERIMENTAL_enableAnchorWhileScrolling;
      isFirstLayout = self.state.isFirstLayout;
      if (tmp) {
        if (!tmp4) {
          const scrollAnchor = self.scrollAnchor;
          scrollAnchor.findOrUpdateAnchor(getAnchorIdFromIndex, isFirstLayout.items);
        }
        const scrollAnchor2 = self.scrollAnchor;
        let tmp2 = scrollAnchor2.hasAnchor() || null;
        tmp4 = null == getAnchorIdFromIndex || isFirstLayout || isFirstLayout !== isFirstLayout.isFirstLayout;
        const tmp6 = scrollAnchor2.hasAnchor() || null;
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "componentDidUpdate",
    value(scrollPosValue, isFirstLayout) {
      let self = this;
      self = this;
      if (scrollPosValue.scrollPosValue !== this.props.scrollPosValue) {
        const _Error = Error;
        const error = new Error("FastList: scrollPosValue cannot changed after mounting");
        throw error;
      } else {
        if (!self.state.isFirstLayout) {
          if (isFirstLayout.isFirstLayout) {
            if (null == self.props.chunkBase) {
              const current = self.scrollView.current;
              if (null != current) {
                current.measure(() => self.restoreScrollPosition());
              }
            }
          }
          if (self.state.items !== isFirstLayout.items) {
            const result = self.queueViewabilityChange();
          }
        }
        if (arg2) {
          self.anchorScroll();
        }
      }
    }
  };
  items[5] = {
    key: "getViewabilityConfig",
    value() {
      const viewabilityConfig = this.props.viewabilityConfig;
      const obj = {};
      let minimumViewTime;
      if (null != viewabilityConfig) {
        minimumViewTime = viewabilityConfig.minimumViewTime;
      }
      let num = 1000;
      if (null != minimumViewTime) {
        num = minimumViewTime;
      }
      obj.minimumViewTime = num;
      let visibilityThreshold;
      if (null != viewabilityConfig) {
        visibilityThreshold = viewabilityConfig.visibilityThreshold;
      }
      let num2 = 0.5;
      if (null != visibilityThreshold) {
        num2 = visibilityThreshold;
      }
      obj.visibilityThreshold = num2;
      return obj;
    }
  };
  items[6] = {
    key: "queueViewabilityChange",
    value() {
      const self = this;
      if (null != this.props.onViewableItemsChanged) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.viewabilityDebounce);
        const _setTimeout = setTimeout;
        self.viewabilityDebounce = setTimeout(self.handleViewabilityChange, self.getViewabilityConfig().minimumViewTime);
      }
    }
  };
  items[7] = {
    key: "reset",
    value() {
      let fastListComputer;
      let getInitialState;
      let items;
      let setState;
      const self = this;
      const chunkBase = this.props.chunkBase;
      const state = this.state;
      ({ fastListComputer, items } = state);
      if (!state.isFirstLayout) {
        let num = 0;
        ({ setState, getInitialState } = self);
        if (null != chunkBase) {
          num = chunkBase;
        }
        setState(getInitialState(num, fastListComputer, false, items));
      }
    }
  };
  items[8] = {
    key: "componentWillUnmount",
    value() {
      const self = this;
      const worklet = this.worklet;
      if (null != worklet) {
        worklet.unregisterFromEvents(self.viewTag);
      }
      if (-1 !== self.deferredCompute) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(self.deferredCompute);
      }
      if (-1 !== self.viewabilityDebounce) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.viewabilityDebounce);
      }
    }
  };
  items[9] = {
    key: "anchorScroll",
    value() {
      let getAnchorIndexFromId;
      let stickySectionsVariant;
      const self = this;
      ({ getAnchorIndexFromId, stickySectionsVariant } = this.props);
      let str = "default";
      if (undefined !== stickySectionsVariant) {
        str = stickySectionsVariant;
      }
      const fastListComputer = self.state.fastListComputer;
      if (null != getAnchorIndexFromId) {
        const anchorOffset = self.scrollAnchor.anchorOffset;
        if (null != anchorOffset) {
          const scrollAnchor = self.scrollAnchor;
          const anchorIndex = scrollAnchor.getAnchorIndex(getAnchorIndexFromId);
          if (null != anchorIndex) {
            const scrollPosition = fastListComputer.computeScrollPosition("default" === str, anchorIndex.section, anchorIndex.item);
            if (tmp3) {
              self.scrollTo(scrollPosition.scrollPosition - anchorOffset);
            }
            tmp3 = null != scrollPosition && self.scrollPos !== scrollPosition.scrollPosition - anchorOffset;
          }
        }
      }
    }
  };
  items[10] = {
    key: "getSectionItemFromPosition",
    value(arg0, arg1) {
      const fastListComputer = this.state.fastListComputer;
      return fastListComputer.getSectionItemFromPosition(arg0, arg1);
    }
  };
  items[11] = {
    key: "getScrollPositionFromEvent",
    value(nativeEvent) {
      const contentOffset = nativeEvent.nativeEvent.contentOffset;
      return this.props.horizontal ? contentOffset.x : contentOffset.y;
    }
  };
  items[12] = {
    key: "restoreScrollPosition",
    value() {
      let initialScrollItem;
      let initialScrollSection;
      let self = this;
      self = this;
      const props = this.props;
      ({ initialScrollItem, initialScrollSection } = props);
      let num = 0;
      if (undefined !== initialScrollSection) {
        num = initialScrollSection;
      }
      const initialScrollOrientation = props.initialScrollOrientation;
      let str = "visible";
      if (undefined !== initialScrollOrientation) {
        str = initialScrollOrientation;
      }
      const initialScrollStart = props.initialScrollStart;
      if (null == initialScrollItem) {
        if (num <= 0) {
          if (null == initialScrollStart) {
            const blocks = self.computeBlocks();
          }
        }
      }
      if (null != initialScrollStart) {
        self.scrollTo(initialScrollStart, false);
      } else {
        const obj = { section: num };
        let num2 = -1;
        if (null != initialScrollItem) {
          num2 = initialScrollItem;
        }
        obj.item = num2;
        obj.orientation = str;
        obj.paddingEnd = 16;
        obj.setAnchor = true;
        if (self.scrollToLocation(obj)) {
          self.deferNextCompute = true;
        } else {
          const scrollPosValue = self.scrollPosValue;
          const result = scrollPosValue.set(0);
          if (-1 !== self.deferredCompute) {
            const _cancelAnimationFrame = cancelAnimationFrame;
            cancelAnimationFrame(self.deferredCompute);
          }
          const _requestAnimationFrame = requestAnimationFrame;
          self.deferredCompute = requestAnimationFrame(() => self.computeBlocks());
        }
      }
    }
  };
  items[13] = {
    key: "computeBlocks",
    value() {
      let isFirstLayout;
      let items;
      const self = this;
      const props = this.props;
      let containerSize = props.chunkBase;
      const state = this.state;
      const fastListComputer = state.fastListComputer;
      ({ isFirstLayout, items } = state);
      if (null == containerSize) {
        containerSize = self.containerSize;
      }
      const tmpResult = outer1_37(containerSize, self.scrollPos, props.batchesToRender);
      if (tmpResult.batchSize === self.state.batchSize) {
        if (tmpResult.blockStart === self.state.blockStart) {
          if (tmpResult.blockEnd === self.state.blockEnd) {
            if (isFirstLayout) {
              let obj = { isFirstLayout: false };
              self.setState(obj);
            }
          }
        }
      }
      obj = {};
      const merged = Object.assign(tmpResult);
      const merged1 = Object.assign(fastListComputer.compute(tmpResult.blockStart, tmpResult.blockEnd, items));
      obj["isFirstLayout"] = false;
      self.setState(obj);
    }
  };
  items[14] = {
    key: "renderItems",
    value() {
      let iter2;
      let key;
      let layoutSize;
      let layoutStart;
      let recyclerKey;
      let section;
      let type;
      const self = this;
      const props = this.props;
      const stickySectionsVariant = props.stickySectionsVariant;
      let str = "default";
      if (undefined !== stickySectionsVariant) {
        str = stickySectionsVariant;
      }
      let renderHeader = props.renderHeader;
      if (undefined === renderHeader) {
        renderHeader = outer1_34;
      }
      let renderFooter = props.renderFooter;
      if (undefined === renderFooter) {
        renderFooter = outer1_34;
      }
      let renderSection = props.renderSection;
      if (undefined === renderSection) {
        renderSection = outer1_34;
      }
      const renderItem = props.renderItem;
      let renderSectionFooter = props.renderSectionFooter;
      if (undefined === renderSectionFooter) {
        renderSectionFooter = outer1_34;
      }
      const optimizeListItemRender = props.optimizeListItemRender;
      const items = self.state.items;
      const horizontal = self.props.horizontal;
      const items1 = [];
      const item = items.forEach((type) => {
        if (type.type === outer2_19.SECTION) {
          items1.push(tmp);
        }
      });
      const items2 = [];
      const tmp5 = outer1_32(items);
      let iter = tmp5();
      if (!iter.done) {
        do {
          ({ type, key, layoutStart, recyclerKey, layoutSize, section } = iter.value);
          if (0 !== layoutSize) {
            let tmp26 = outer1_19;
            if (outer1_19.SPACER === type) {
              let tmp23 = outer1_16;
              let tmp24 = outer1_28;
              let obj = { horizontal: tmp3, layoutSize };
              let _HermesInternal7 = HermesInternal;
              let arr = items2.push(outer1_16(outer1_28, obj, "" + key));
            } else {
              let tmp27 = outer1_19;
              if (outer1_19.HEADER === type) {
                obj = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, fastListInstance: self, layoutSize, debug: false };
                let fn6 = renderHeader;
                let tmp20 = outer1_16;
                let tmp21 = outer1_27;
                if (!tmp) {
                  fn6 = (arg0) => renderHeader(...HermesBuiltin.copyRestArgs());
                }
                obj.children = fn6;
                let _HermesInternal6 = HermesInternal;
                arr = items2.push(tmp20(tmp21, obj, "" + key));
              } else {
                let tmp28 = outer1_19;
                if (outer1_19.FOOTER === type) {
                  let obj1 = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, fastListInstance: self, layoutSize, debug: false };
                  let fn5 = renderFooter;
                  let tmp17 = outer1_16;
                  let tmp18 = outer1_27;
                  if (!tmp) {
                    fn5 = (arg0) => renderFooter(...HermesBuiltin.copyRestArgs());
                  }
                  obj1.children = fn5;
                  let _HermesInternal5 = HermesInternal;
                  let arr1 = items2.push(tmp17(tmp18, obj1, "" + key));
                } else {
                  let tmp29 = outer1_19;
                  if (outer1_19.SECTION === type) {
                    let arr2 = items1.shift();
                    if ("default" !== str) {
                      let obj2 = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, layoutStart, layoutSize, fastListInstance: self, section, debug: false };
                      let fn4 = renderSection;
                      let tmp14 = outer1_16;
                      let tmp15 = outer1_24;
                      if (!tmp) {
                        fn4 = (arg0) => renderSection(...HermesBuiltin.copyRestArgs());
                      }
                      obj2.children = fn4;
                      let _HermesInternal4 = HermesInternal;
                      let arr3 = items2.push(tmp14(tmp15, obj2, "" + key));
                    } else {
                      let obj3 = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, layoutStart, layoutSize, nextSectionLayoutPosition: items1[0], scrollPosValue: self.scrollPosValue, fastListInstance: self, section, debug: false };
                      let fn3 = renderSection;
                      let tmp33 = outer1_16;
                      let tmp34 = outer1_23;
                      if (!tmp) {
                        fn3 = (arg0) => renderSection(...HermesBuiltin.copyRestArgs());
                      }
                      obj3.children = fn3;
                      let _HermesInternal3 = HermesInternal;
                      let arr4 = items2.push(tmp33(tmp34, obj3, "" + key));
                    }
                  } else {
                    let tmp30 = outer1_19;
                    if (outer1_19.ITEM === type) {
                      obj = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, layoutSize, fastListInstance: self, section, item: tmp6, debug: false };
                      let fn2 = renderItem;
                      let tmp9 = outer1_16;
                      let tmp10 = outer1_26;
                      if (!tmp) {
                        fn2 = (arg0) => renderItem(...HermesBuiltin.copyRestArgs());
                      }
                      obj.children = fn2;
                      let _HermesInternal2 = HermesInternal;
                      let arr5 = items2.push(tmp9(tmp10, obj, "" + key));
                    } else {
                      let tmp7 = outer1_19;
                      if (outer1_19.SECTION_FOOTER === type) {
                        let obj4 = { recyclerKey, horizontal: tmp3, disableWrapper: tmp2, fastListInstance: self, layoutSize, section, debug: false };
                        let fn = renderSectionFooter;
                        let tmp31 = outer1_16;
                        let tmp32 = outer1_25;
                        if (!tmp) {
                          fn = (arg0) => renderSectionFooter(...HermesBuiltin.copyRestArgs());
                        }
                        obj4.children = fn;
                        let _HermesInternal = HermesInternal;
                        let arr6 = items2.push(tmp31(tmp32, obj4, "" + key));
                      }
                    }
                  }
                }
              }
            }
          }
          iter2 = tmp5();
          iter = iter2;
        } while (!iter2.done);
      }
      return items2;
    }
  };
  items[15] = {
    key: "isEmpty",
    value() {
      const sections = this.props.sections;
      return 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0);
    }
  };
  items[16] = {
    key: "setDisableRecycling",
    value(arg0) {
      const fastListComputer = this.state.fastListComputer;
      fastListComputer.setDisableRecycling(arg0);
    }
  };
  items[17] = {
    key: "render",
    value() {
      let EXPERIMENTAL_enableAnchorWhileScrolling;
      let batchesToRender;
      let childrenWrapper;
      let chunkBase;
      let debugLayout;
      let disableContentWrappers;
      let disableLegacyGestureHandling;
      let disableRecyclingOnFullCompute;
      let endReachedThreshold;
      let footerSize;
      let getAnchorIdFromIndex;
      let getAnchorIndexFromId;
      let getRecyclerKey;
      let headerSize;
      let initialScrollItem;
      let initialScrollOrientation;
      let initialScrollSection;
      let initialScrollStart;
      let itemSize;
      let manualRef;
      let onEndReached;
      let onLayout;
      let onScroll;
      let onScrollEnd;
      let onScrollWorklet;
      let onViewableItemsChanged;
      let optimizeListItemRender;
      let persistantKeys;
      let removeClippedSubviews;
      let renderAccessory;
      let renderFooter;
      let renderHeader;
      let renderItem;
      let renderSection;
      let renderSectionFooter;
      let scrollPosValue;
      let sectionFooterSize;
      let sectionSize;
      let sections;
      let stickyHeaderFooter;
      let stickySectionsVariant;
      let viewabilityConfig;
      const self = this;
      const props = this.props;
      ({ manualRef, onScroll, onScrollWorklet, onScrollEnd, onLayout, renderHeader, renderFooter, renderSection, renderItem, renderSectionFooter, getRecyclerKey, onEndReached, endReachedThreshold, headerSize, footerSize, sectionSize, sectionFooterSize, itemSize, sections, scrollPosValue, batchesToRender, optimizeListItemRender, initialScrollSection, initialScrollItem, initialScrollOrientation, initialScrollStart, getAnchorIdFromIndex, getAnchorIndexFromId, EXPERIMENTAL_enableAnchorWhileScrolling, chunkBase, disableContentWrappers, childrenWrapper, stickyHeaderFooter, stickySectionsVariant, persistantKeys, disableRecyclingOnFullCompute, disableLegacyGestureHandling, viewabilityConfig, onViewableItemsChanged, debugLayout, renderAccessory, removeClippedSubviews } = props);
      if (undefined === removeClippedSubviews) {
        let obj = FastList(outer1_2[14]);
        removeClippedSubviews = obj.isAndroid();
      }
      const inActionSheet = props.inActionSheet;
      if (inActionSheet) {
        let BottomSheetScrollView = FastList(outer1_2[18]).BottomSheetScrollView;
      } else {
        BottomSheetScrollView = outer1_13;
      }
      obj = {};
      const merged = Object.assign(outer1_4(props, outer1_3));
      obj["accessibilityRole"] = "list";
      obj["ref"] = outer1_1(outer1_2[19])(self.scrollView);
      obj["scrollEventThrottle"] = 16;
      obj["contentOffset"] = self.state.initialContentOffset;
      obj["onScroll"] = self.handleScroll;
      obj["onLayout"] = self.handleLayout;
      obj["onMomentumScrollEnd"] = self.handleMomentumScrollEnd;
      obj["onScrollBeginDrag"] = self.handleScrollBeginDrag;
      obj["removeClippedSubviews"] = removeClippedSubviews;
      obj["children"] = self.renderItems();
      obj = {};
      const obj1 = { inActionSheet, children: outer1_16(BottomSheetScrollView, obj) };
      const items = [outer1_16(outer1_38, obj1), ];
      let renderAccessoryResult = null;
      if (null != renderAccessory) {
        renderAccessoryResult = renderAccessory(self);
      }
      items[1] = renderAccessoryResult;
      obj.children = items;
      return outer1_15(outer1_17, obj);
    }
  };
  let items1 = [
    {
      key: "getDerivedStateFromProps",
      value(headerSize, fastListComputer) {
        let blockEnd;
        let blockStart;
        fastListComputer = fastListComputer.fastListComputer;
        let obj = { headerSize: headerSize.headerSize, footerSize: headerSize.footerSize, sectionSize: headerSize.sectionSize, itemSize: headerSize.itemSize, sectionFooterSize: headerSize.sectionFooterSize, sections: headerSize.sections, insetStart: headerSize.insetStart, insetEnd: headerSize.insetEnd, stickyHeaderFooter: headerSize.stickyHeaderFooter, getRecyclerKey: headerSize.getRecyclerKey, persistantKeys: headerSize.persistantKeys, disableRecyclingOnFullCompute: headerSize.disableRecyclingOnFullCompute };
        fastListComputer.updateProps(obj);
        if (0 === fastListComputer.batchSize) {
          obj = {};
          const merged = Object.assign(fastListComputer);
          const insetStart = headerSize.insetStart;
          let num = 0;
          if (null != insetStart) {
            num = insetStart;
          }
          const insetEnd = headerSize.insetEnd;
          let num2 = 0;
          if (null != insetEnd) {
            num2 = insetEnd;
          }
          obj["size"] = num + num2;
          obj["items"] = [];
          let tmp3 = obj;
        } else {
          tmp3 = null;
          if (fastListComputer.isDirty()) {
            obj = {};
            const merged1 = Object.assign(fastListComputer);
            let items = fastListComputer.items;
            ({ blockStart, blockEnd } = fastListComputer);
            if (null == items) {
              items = [];
            }
            const merged2 = Object.assign(fastListComputer.compute(blockStart, blockEnd, items));
            tmp3 = obj;
          }
        }
        return tmp3;
      }
    }
  ];
  return callback2(FastList, items, items1);
})(importAllResult.PureComponent);
obj = { batchesToRender: 12, contentInset: { top: 0, right: 0, left: 0, bottom: 0 }, disableLegacyGestureHandling: false, disableRecyclingOnFullCompute: false, stickyHeaderFooter: false };
tmp7.defaultProps = obj;
const animatedComponent = require("module_3991").createAnimatedComponent(tmp7);
let result = require("_getPrototypeOf").fileFinishedImporting("lib/native/FastList.tsx");

export default tmp7;
export const DEFAULT_BATCHES_TO_RENDER = 12;
export const MINIMUM_BATCHES_TO_RENDER = 5;
export const getItemSizeOverrideKey = function getItemSizeOverrideKey(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
};
export const FastListItemTypes = obj;
export const FastListComputer = tmp6;
export { FastListIosFabricGestureWorkaround };
export const AnimatedFastList = animatedComponent;
