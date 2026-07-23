// Module ID: 10017
// Function ID: 77392
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 57, 31, 27, 4143, 10015, 10018, 4148, 3991, 10019, 620, 10020, 10021, 10022, 682, 2]
// Exports: useCardLayoutCoordsSubscription, useManagerSubscription, useTargetDimensionsSubscription

// Module 10017 (_createForOfIteratorHelperLoose)
import closure_3 from "VoicePanelModes";
import closure_4 from "CARD_SIZE";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { PixelRatio } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import CARD_SIZE from "CARD_SIZE";
import { ParticipantTypes } from "ParticipantTypes";
import set from "_slicedToArray";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
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
function getOrCreateRow(arg0, arg1, arr) {
  let tmp = arr[arg0];
  if (null == tmp) {
    const _Array = Array;
    const array = new Array(arg1);
    const fillResult = array.fill(0);
    arr.push(fillResult);
    tmp = fillResult;
  }
  return tmp;
}
function getTargetAspectRatio(width) {
  const result = width.width / width.height;
  let str = "landscape";
  if (result < 1.3) {
    let str2 = "square";
    if (result <= 0.8) {
      str2 = "portrait";
    }
    str = str2;
  }
  return str;
}
function getGridDimensionsFromAspectRatio(arg0, arg1, fillAspectRatio) {
  if ("portrait" === arg0) {
    if (fillAspectRatio.fillAspectRatio) {
      if (arg1) {
        let obj = { width: 2, height: 2 };
      } else {
        obj = { width: 2 };
        let num5 = 0;
        if (arg3) {
          num5 = 1;
        }
        obj.height = 3 + num5;
      }
    } else {
      return { width: 1, height: 2 };
    }
  } else if ("landscape" === arg0) {
    if (fillAspectRatio.fillAspectRatio) {
      if (arg1) {
        obj = {};
        let num = 0;
        if (arg3) {
          num = 1;
        }
        obj.width = 3 + num;
        obj.height = 2;
      } else {
        obj = { width: 2, height: 2 };
      }
    } else {
      return { width: 2, height: 1 };
    }
  } else if ("square" === arg0) {
    return fillAspectRatio.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
  }
}
function getTargetCardSize(windowWidth) {
  let safeAreaLeft;
  let safeAreaRight;
  windowWidth = windowWidth.windowWidth;
  let num = 3;
  ({ safeAreaLeft, safeAreaRight } = windowWidth);
  if (windowWidth > windowWidth.windowHeight) {
    num = 4;
  }
  return Math.max(closure_10, (windowWidth - safeAreaLeft - safeAreaRight - closure_15 * (num - 1)) / num);
}
const VoicePanelCardItemType = VoicePanelModes.VoicePanelCardItemType;
({ BASE_TARGET_CARD_SIZE: closure_10, VoicePanelCTACardDimensionKeys: closure_11, VoicePanelCTACardDimensions: closure_12, VOICE_PANEL_CHUNK_DIVISOR: closure_13 } = VoicePanelModes);
({ EDGE_GUTTER: closure_14, CALL_TILE_GUTTER: closure_15 } = CARD_SIZE);
let obj = { id: "invalid", type: VoicePanelCardItemType.PARTICIPANT, x: 0, y: 0, width: 0, height: 0, zIndex: 0 };
let set = new Set();
let closure_19 = { enlargeSquare: false, fillAspectRatio: false };
obj = { match: new Set(["1,camera", "2,camera", "2,camera,camera"]) };
let items = [{ enlargeSquare: true, fillAspectRatio: false }];
obj.layouts = items;
obj.global = true;
let items1 = [obj, ];
obj = {};
let set1 = new Set(["1,camera", "2,camera", "2,camera,camera"]);
obj.match = new Set(["1,stream", "2,stream", "3,stream", "2,stream,camera", "3,stream,camera", "3,stream,camera,camera", "3,camera", "3,camera,stream"]);
let items2 = [{ enlargeSquare: true, fillAspectRatio: true }, { enlargeSquare: false, fillAspectRatio: false }, { enlargeSquare: false, fillAspectRatio: false }];
obj.layouts = items2;
items1[1] = obj;
let set2 = new Set(["1,stream", "2,stream", "3,stream", "2,stream,camera", "3,stream,camera", "3,stream,camera,camera", "3,camera", "3,camera,stream"]);
let result = set.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx");

export default (() => {
  class VoicePanelCardLayoutManager {
    constructor(arg0) {
      tmp = outer1_3(this, VoicePanelCardLayoutManager);
      this.dirty = true;
      map = new Map();
      this.targetDimensions = map;
      map1 = new Map();
      this.cardCoords = map1;
      map2 = new Map();
      this.chunkedCoords = map2;
      this.contentDimensions = { width: 0, height: 0 };
      set = new Set();
      this.layoutCallbacks = set;
      set1 = new Set();
      this.managerSubscriptions = set1;
      this.items = [];
      this.emitItemChanges = true;
      this.mounted = false;
      this.layoutKey = 0;
      this.emitTimeout = -1;
      this.props = { windowWidth: 0, windowHeight: 0, chunkSize: 0, safeAreaLeft: 0, safeAreaRight: 0, safeAreaTop: 0, safeAreaBottom: 0, gutter: 0, controlBarSize: 0 };
      this.defaultTargetCoords = { width: 0, height: 0 };
      this.channelId = arg0;
      return;
    }
  }
  let obj = {
    key: "setDirty",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      if (arg0) {
        tmp = !self.dirty;
      }
      if (tmp) {
        self.dirty = true;
        self.emitItemChanges = true;
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleLayoutEffect",
    value() {
      this.mounted = true;
      this.emitLayoutChanges();
    }
  };
  items[1] = obj;
  obj = {
    key: "cleanUp",
    value() {
      this.mounted = false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateState",
    value(items, windowHeight) {
      let controlBarSize;
      let safeAreaBottom;
      let safeAreaRight;
      let safeAreaTop;
      const self = this;
      windowHeight = windowHeight.windowHeight;
      const obj = { windowHeight, windowWidth: windowHeight.windowWidth, chunkSize: windowHeight / outer1_13, safeAreaLeft: Math.max(windowHeight.safeAreaLeft, outer1_14), safeAreaRight: Math.max(safeAreaRight, outer1_14), safeAreaBottom: Math.max(safeAreaBottom, outer1_14), safeAreaTop, gutter: outer1_15, controlBarSize };
      ({ safeAreaRight, safeAreaTop, safeAreaBottom, controlBarSize } = windowHeight);
      if (!outer1_1(outer1_2[11])(obj, this.props)) {
        self.props = obj;
        self.setDirty(true);
      }
      self.setDirty(!(function areArraysShallowEqual(arr, items) {
        let closure_0 = items;
        return arr.length === items.length && !arr.some((arg0, arg1) => items[arg1] !== arg0);
      })(items, self.items));
      self.items = items;
      return self.getContentDimensions();
    }
  };
  items[4] = {
    key: "getLayoutKey",
    value() {
      return this.layoutKey;
    }
  };
  items[5] = {
    key: "getChunk",
    value(arg0) {
      const chunkedCoords = this.chunkedCoords;
      let value = chunkedCoords.get(arg0);
      if (null == value) {
        value = outer1_18;
      }
      return value;
    }
  };
  items[6] = {
    key: "getContentDimensions",
    value() {
      const cardsLayout = this.computeCardsLayout();
      return this.contentDimensions;
    }
  };
  items[7] = {
    key: "getCardCoords",
    value(arg0) {
      const cardsLayout = this.computeCardsLayout();
      const cardCoords = this.cardCoords;
      return cardCoords.get(arg0);
    }
  };
  items[8] = {
    key: "getCardCoordsMap",
    value() {
      const cardsLayout = this.computeCardsLayout();
      return this.cardCoords;
    }
  };
  items[9] = {
    key: "getDefaultTargetDimensions",
    value() {
      return this.defaultTargetCoords;
    }
  };
  items[10] = {
    key: "getTargetDimensions",
    value(arg0) {
      const self = this;
      if (null == arg0) {
        let defaultTargetCoords = self.defaultTargetCoords;
      } else if (outer1_11.has(arg0)) {
        defaultTargetCoords = outer1_12[arg0];
      } else {
        const targetDimensions = self.targetDimensions;
        defaultTargetCoords = targetDimensions.get(arg0);
        if (null == defaultTargetCoords) {
          defaultTargetCoords = self.defaultTargetCoords;
        }
      }
      return defaultTargetCoords;
    }
  };
  items[11] = {
    key: "setTargetDimensions",
    value(arg0, width, height) {
      const self = this;
      const size = this.getTargetDimensions(arg0);
      if (!tmp) {
        const targetDimensions = self.targetDimensions;
        const obj = { width, height };
        const result = targetDimensions.set(arg0, obj);
        self.setDirty(true);
        self.deferredLayoutChange();
      }
    }
  };
  items[12] = {
    key: "resetTargetDimensions",
    value(arg0) {
      const self = this;
      const targetDimensions = this.targetDimensions;
      if (targetDimensions.has(arg0)) {
        const targetDimensions2 = self.targetDimensions;
        targetDimensions2.delete(arg0);
        self.setDirty(true);
        self.deferredLayoutChange();
      }
    }
  };
  items[13] = {
    key: "setTargetAspectRatio",
    value(arg0, arg1) {
      const self = this;
      if ("portrait" === arg1) {
        let size = { width: 1, height: 2 };
      } else if ("landscape" === arg1) {
        size = { width: 2, height: 1 };
      } else if ("square" === arg1) {
        size = { width: 1, height: 1 };
      }
      const size2 = self.getTargetDimensions(arg0);
      if (!tmp) {
        const targetDimensions = self.targetDimensions;
        const result = targetDimensions.set(arg0, size);
        self.setDirty(true);
        self.deferredLayoutChange();
      }
    }
  };
  items[14] = {
    key: "computeCardsLayout",
    value() {
      let controlBarSize;
      let gutter;
      let iter5;
      let iter8;
      let safeAreaBottom;
      let safeAreaLeft;
      let safeAreaRight;
      let safeAreaTop;
      let self = this;
      self = this;
      self = this;
      if (this.dirty) {
        const _Map = Map;
        const map = new Map();
        self.cardCoords = map;
        const _Map2 = Map;
        const map1 = new Map();
        self.chunkedCoords = map1;
        const props = self.props;
        const windowWidth = props.windowWidth;
        const windowHeight = props.windowHeight;
        ({ safeAreaLeft, safeAreaRight, safeAreaBottom, gutter } = props);
        let _Set = Set;
        ({ safeAreaTop, controlBarSize } = props);
        let set = new Set();
        const _Set2 = Set;
        const set1 = new Set();
        const _Set3 = Set;
        const set2 = new Set();
        const _Set4 = Set;
        const set3 = new Set(self.items);
        const _HermesInternal = HermesInternal;
        let _isNativeReflectConstruct = "" + self.items.length;
        let bound2 = 0;
        function _loop(value) {
          const participant = outer2_8.getParticipant(self.channelId, value.id);
          if (value.type === outer2_9.CTA) {
            const targetDimensions = self.getTargetDimensions(value.id);
          } else if (null != participant) {
            if (participant.type === outer2_16.USER) {
              let defaultTargetCoords = self.defaultTargetCoords;
            } else {
              defaultTargetCoords = self.getTargetDimensions(value.id);
            }
          }
          if (null != targetDimensions) {
            if (null != participant) {
              const obj = { type: "custom", item: value, forceSquare: participant.type === outer2_16.USER };
              const type = participant.type;
              if (outer2_16.ACTIVITY === type) {
                set.add(obj);
              } else if (outer2_16.STREAM === type) {
                set1.add(obj);
              } else if (outer2_16.USER === type) {
                set2.add(obj);
              }
              let str = "stream";
              if (participant.type !== outer2_16.STREAM) {
                let str2 = "activity";
                if (participant.type === outer2_16.USER) {
                  str2 = "camera";
                }
                str = str2;
              }
              _isNativeReflectConstruct = `${_isNativeReflectConstruct},${str}`;
              set3.delete(value);
            }
          }
          return 1;
        }
        const tmp27 = outer1_21(set3);
        let iter = tmp27();
        if (!iter.done) {
          while (!_loop(iter.value)) {
            let iter2 = tmp27();
            iter = iter2;
            if (iter2.done) {
              break;
            }
          }
        }
        let found = null;
        if (0 === set.size) {
          found = outer1_20.find((arg0) => {
            const match = arg0.match;
            return match.has(_isNativeReflectConstruct);
          });
        }
        const _Math = Math;
        let obj = { top: safeAreaTop, left: safeAreaLeft, right: safeAreaRight, bottom: safeAreaBottom };
        let bound = Math.max(120, windowHeight - outer1_1(outer1_2[13])(obj, outer1_14).height - outer1_14 - controlBarSize - safeAreaBottom);
        const _Math2 = Math;
        if (null == found) {
          if (set.size <= 0) {
            obj = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
            if (self.items.length < 7) {
              if (0 !== self.items.length) {
                obj = { cardCount: self.items.length, gutterSize: gutter, availableWidth: tmp35, availableHeight: bound };
                const tmp38 = outer1_1(outer1_2[14])(obj);
                const columns = tmp38.columns;
                bound2 = columns;
                let cardSize = tmp38.cardSize;
                let tmp39 = columns;
                let tmp40 = columns;
              }
            }
            const _Math3 = Math;
            let bound1 = Math.max((windowWidth - safeAreaLeft - safeAreaRight) / outer1_26(obj) | 0, 1);
            bound2 = bound1;
            cardSize = outer1_7.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - outer1_15 * (bound1 - 1)) / bound1);
            tmp39 = bound1;
            tmp40 = bound1;
            const tmp82 = outer1_26(obj);
          }
          let _global;
          if (null != found) {
            _global = found.global;
          }
          if (true === _global) {
            let closure_10 = found.layouts[0];
          }
          const _Math6 = Math;
          let num9 = 1;
          const rounded = Math.floor(self.items.length / tmp40);
          if (self.items.length % tmp40 == 0) {
            num9 = 0;
          }
          let sum = rounded + num9;
          const obj1 = {};
          let diff = cardSize;
          if (null == found) {
            diff = cardSize;
            if (1 === tmp40) {
              diff = cardSize;
              if (sum > 1) {
                diff = cardSize;
                if (0 === set.size) {
                  diff = windowWidth - safeAreaLeft - safeAreaRight;
                }
              }
            }
          }
          obj1.width = diff;
          let tmp51 = cardSize;
          if (null == found) {
            tmp51 = cardSize;
            if (1 === sum) {
              tmp51 = cardSize;
              if (tmp40 > 1) {
                tmp51 = cardSize;
                if (0 === set.size) {
                  tmp51 = bound;
                }
              }
            }
          }
          obj1.height = tmp51;
          if (!outer1_1(outer1_2[11])(obj1, self.defaultTargetCoords)) {
            self.defaultTargetCoords = obj1;
          }
          const obj2 = { cardWidth: self.defaultTargetCoords.width, cardHeight: self.defaultTargetCoords.height, gutter, totalItems: self.items.length, windowWidth };
          const _Array = Array;
          const array = new Array(tmp40);
          let items = [array.fill(0)];
          let c14 = -1;
          let c15 = -1;
          let closure_16 = -1;
          let c17 = 0;
          const items1 = [];
          function placeItem(id, type, width, height) {
            let columns;
            let grid;
            let height2;
            let size;
            let startCol;
            let startRow;
            let obj = { grid: items, lastFullyFilledRow: c14, width, height, columns: bound2 };
            ({ grid, height, columns } = obj);
            const bound = Math.min(obj.width, columns);
            if (1 === columns) {
              height = 1;
            }
            let sum = obj.lastFullyFilledRow + 1;
            let num = -1;
            let num2 = -1;
            while (true) {
              let tmp6 = outer2_23;
              let arr = outer2_23(sum, columns, grid);
              let tmp7 = sum;
              let num3 = 0;
              let tmp8 = num;
              let tmp9 = num2;
              if (0 < arr.length) {
                while (true) {
                  if (1 === arr[num3]) {
                    num3 = num3 + 1;
                    tmp8 = num;
                    tmp9 = num2;
                    if (num3 >= arr.length) {
                      break;
                    }
                  } else {
                    tmp8 = sum;
                    tmp9 = num3;
                    if (num3 + (bound - 1) < arr.length) {
                      break;
                    }
                  }
                  break;
                }
              }
              if (-1 !== tmp8) {
                if (-1 !== tmp9) {
                  let tmp12 = tmp8;
                  let tmp13 = tmp9;
                  let sum2 = tmp8;
                  let tmp15 = tmp8;
                  let tmp16 = tmp9;
                  let tmp17 = tmp8;
                  if (tmp8 <= tmp8 + (height - 1)) {
                    while (true) {
                      let tmp18 = outer2_23;
                      let tmp19 = outer2_23(sum2, columns, grid);
                      let tmp20 = sum2;
                      let sum1 = tmp13;
                      let num4 = tmp12;
                      let num5 = tmp13;
                      let tmp22 = tmp13;
                      if (tmp13 <= tmp13 + (bound - 1)) {
                        num4 = -1;
                        num5 = -1;
                        tmp22 = sum1;
                        while (0 === tmp19[sum1]) {
                          sum1 = sum1 + 1;
                          num4 = tmp12;
                          num5 = tmp13;
                          tmp22 = sum1;
                          if (sum1 > tmp13 + (bound - 1)) {
                            break;
                          }
                        }
                      }
                      tmp15 = num4;
                      tmp16 = num5;
                      tmp17 = sum2;
                      let tmp4 = tmp19;
                      let tmp5 = tmp22;
                      if (-1 === num5) {
                        break;
                      } else {
                        tmp16 = num5;
                        tmp17 = sum2;
                        tmp4 = tmp19;
                        tmp5 = tmp22;
                        tmp15 = num4;
                        if (-1 === num4) {
                          break;
                        } else {
                          sum2 = sum2 + 1;
                          tmp12 = num4;
                          tmp13 = num5;
                          tmp15 = num4;
                          tmp16 = num5;
                          tmp4 = tmp19;
                          tmp5 = tmp22;
                          tmp17 = sum2;
                          if (sum2 > num4 + (height - 1)) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  if (-1 !== tmp15) {
                    if (-1 !== tmp16) {
                      obj = { startRow: tmp15, startCol: tmp16, width: bound, height };
                      size = obj;
                      num = tmp15;
                      num2 = tmp16;
                      let tmp24 = tmp17;
                      let tmp10 = tmp4;
                      let tmp11 = tmp5;
                      tmp4 = tmp10;
                      tmp5 = tmp11;
                      let tmp3 = size;
                      if (null != size) {
                        break;
                      }
                    }
                  }
                  sum = sum + 1;
                  size = tmp3;
                  num = tmp15;
                  num2 = tmp16;
                  let tmp23 = tmp17;
                  tmp10 = tmp4;
                  tmp11 = tmp5;
                }
              }
              sum = sum + 1;
              size = tmp3;
              num = -1;
              num2 = -1;
              tmp10 = tmp4;
              tmp11 = tmp5;
            }
            let tmp29 = c14;
            ({ startRow, startCol, width, height: height2 } = size);
            let sum5 = startRow;
            if (startRow < startRow + height2) {
              do {
                let sum3 = startCol;
                if (startCol < startCol + width) {
                  do {
                    tmp45[sum5][sum3] = 1;
                    sum3 = sum3 + 1;
                    sum4 = startCol + width;
                  } while (sum3 < sum4);
                }
                sum5 = sum5 + 1;
              } while (sum5 < startRow + height2);
            }
            let sum6 = tmp29 + 1;
            while (null != items[sum6]) {
              if (-1 !== arr2.indexOf(0)) {
                break;
              } else {
                tmp29 = sum6;
                sum6 = sum6 + 1;
                continue;
              }
            }
            c14 = tmp29;
            closure_16 = Math.min(Math.max(closure_16, size.startCol + (size.width - 1)), bound2);
            obj = { id, type, x: size.startCol * (obj2.gutter + obj2.cardWidth), y: size.startRow * (obj2.gutter + obj2.cardHeight), width: obj2.cardWidth * size.width + (size.width - 1) * obj2.gutter, height: obj2.cardHeight * size.height + (size.height - 1) * obj2.gutter, zIndex: obj2.totalItems - c17 };
            const y = obj.y;
            const chunkSize = self.props.chunkSize;
            items = [y / chunkSize | 0, (y + obj.height) / chunkSize | 0];
            let first = items[0];
            if (first <= items[1]) {
              do {
                let tmp31 = self;
                let chunkedCoords = self.chunkedCoords;
                let value = chunkedCoords.get(first);
                let tmp32 = first;
                if (null == value) {
                  let _Set = Set;
                  let tmp33 = new.target;
                  let tmp34 = new.target;
                  let set = new Set();
                  let tmp36 = set;
                  let tmp37 = self;
                  let chunkedCoords2 = self.chunkedCoords;
                  let result = chunkedCoords2.set(first, set);
                  value = set;
                }
                let addResult = value.add(obj);
                first = first + 1;
              } while (first <= items[1]);
            }
            const cardCoords = self.cardCoords;
            const result1 = cardCoords.set(id, obj);
            bound1 = Math.max(bound1, size.startRow + size.height - 1);
            if (bound1 !== c14) {
              if (1 === size.height) {
                if (size.startRow === bound1) {
                  arr = items1.push(id);
                }
              }
            }
            items1.length = 0;
          }
          let closure_20 = 1 === self.items.length;
          const items2 = [set, set1, set2, set3];
          for (let num12 = 0; num12 < items2.length; num12 = num12 + 1) {
            let tmp58 = outer1_21;
            function _loop2(type) {
              let dimensions;
              let item;
              if ("custom" === type.type) {
                if (null != closure_10) {
                  let tmp13 = closure_10;
                } else if (null != found) {
                  tmp13 = found.layouts[closure_17];
                }
                if (null == tmp13) {
                  tmp13 = outer2_19;
                }
                let str2 = "square";
                if (!type.forceSquare) {
                  str2 = outer2_24(self.getTargetDimensions(type.item.id));
                }
                let obj = { item: type.item, dimensions: outer2_25(str2, windowWidth > windowHeight, tmp13, closure_20) };
              } else {
                obj = { item: type };
                const tmp6 = null != closure_10 ? closure_10 : outer2_19;
                obj.dimensions = outer2_25("square", windowWidth > windowHeight, tmp6, closure_20);
              }
              ({ item, dimensions } = obj);
              placeItem(item.id, item.type, dimensions.width, dimensions.height);
              closure_17 = closure_17 + 1;
            }
            let tmp59 = outer1_21(items2[num12]);
            let iter3 = tmp59();
            if (!iter3.done) {
              do {
                let _loop2Result = _loop2(iter3.value);
                let iter4 = tmp59();
                iter3 = iter4;
                done = iter4.done;
              } while (!done);
            }
          }
          if (c14 !== c15) {
            if (-1 !== c14) {
              let flag2 = 0 === tmp85[0];
              const tmp87 = outer1_21(items[c15]);
              const iter9 = tmp87();
              let iter6 = iter9;
              let flag3 = false;
              let num13 = 0;
              let tmp67 = flag2;
              let num14 = 0;
              if (!iter9.done) {
                do {
                  let value = iter6.value;
                  let sum1 = num13 + value;
                  let tmp64 = flag3;
                  let tmp65 = flag2;
                  if (!flag2) {
                    let tmp66 = 1 === value && flag3;
                    if (tmp66) {
                      flag2 = true;
                    }
                    if (0 === value) {
                      flag3 = true;
                    }
                    tmp64 = flag3;
                    tmp65 = flag2;
                  }
                  iter5 = tmp87();
                  flag2 = tmp65;
                  flag3 = tmp64;
                  iter6 = iter5;
                  num13 = sum1;
                  tmp67 = tmp65;
                  num14 = sum1;
                } while (!iter5.done);
              }
              if (!tmp67) {
                const diff1 = tmp40 - num14;
                const tmp72 = outer1_21(items1);
                let iter7 = tmp72();
                if (!iter7.done) {
                  do {
                    let cardCoords = self.cardCoords;
                    value = cardCoords.get(iter7.value);
                    if (null != value) {
                      value.x = value.x + roundToNearestPixelResult;
                    }
                    iter8 = tmp72();
                    iter7 = iter8;
                  } while (!iter8.done);
                }
                roundToNearestPixelResult = outer1_7.roundToNearestPixel((diff1 * self.defaultTargetCoords.width + diff1 * gutter) / 2);
              }
            }
          }
          const obj3 = {};
          if (0 === self.items.length) {
            let sum2 = self.defaultTargetCoords.width * tmp39 + (tmp39 - 1) * gutter;
          } else {
            closure_16 = closure_16 + 1;
            sum2 = self.defaultTargetCoords.width * closure_16 + (closure_16 - 1) * gutter;
          }
          obj3.width = sum2;
          let num16 = 0;
          if (0 !== self.items.length) {
            let diff2 = items.length - 1;
            let tmp79 = diff2;
            if (diff2 >= 0) {
              tmp79 = diff2;
              while (null != items[diff2]) {
                tmp79 = diff2;
                if (arr4.indexOf(1) >= 0) {
                  break;
                } else {
                  diff2 = diff2 - 1;
                  tmp79 = diff2;
                  if (diff2 < 0) {
                    break;
                  }
                }
              }
            }
            let sum3 = tmp79 + 1;
            num16 = sum3 * self.defaultTargetCoords.height + gutter * (sum3 - 1);
          }
          obj3.height = num16;
          self.contentDimensions = obj3;
          self.dirty = false;
          self.layoutKey = self.layoutKey + 1;
        }
        const obj4 = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
        const _Math4 = Math;
        const _Math5 = Math;
        bound2 = Math.max(Math.min((windowWidth - safeAreaLeft - safeAreaRight) / outer1_26(obj4) | 0, 4), 1);
        cardSize = outer1_7.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - gutter * (bound2 - 1)) / bound2);
        tmp39 = bound2;
        tmp40 = bound2;
      }
    }
  };
  items[15] = {
    key: "subscribeFromItem",
    value: function subscribeFromItem(updateSharedValues) {
      const self = this;
      let closure_1 = updateSharedValues;
      this.layoutCallbacks.add(updateSharedValues);
      return () => {
        self.layoutCallbacks.delete(closure_1);
      };
    }
  };
  items[16] = {
    key: "subscribeToManager",
    value: function subscribeToManager(arg0) {
      const self = this;
      let closure_1 = arg0;
      let managerSubscriptions = this.managerSubscriptions;
      managerSubscriptions.add(arg0);
      return () => {
        const managerSubscriptions = self.managerSubscriptions;
        managerSubscriptions.delete(closure_1);
      };
    }
  };
  items[17] = {
    key: "emitLayoutChanges",
    value: function emitLayoutChanges() {
      let self = this;
      self = this;
      if (tmp) {
        self.emitItemChanges = false;
        VoicePanelCardLayoutManager(outer1_2[15]).batchUpdates(() => {
          let done;
          let done2;
          const tmp = outer2_21(self.managerSubscriptions);
          let iter = tmp();
          if (!iter.done) {
            do {
              let valueResult = iter.value();
              let iter2 = tmp();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          const tmp3 = outer2_21(self.layoutCallbacks);
          let iter3 = tmp3();
          if (!iter3.done) {
            do {
              valueResult = iter3.value();
              let iter4 = tmp3();
              iter3 = iter4;
              done2 = iter4.done;
            } while (!done2);
          }
        });
        const obj = VoicePanelCardLayoutManager(outer1_2[15]);
      }
    }
  };
  items[18] = {
    key: "deferredLayoutChange",
    value: function deferredLayoutChange() {
      let self = this;
      self = this;
      if (tmp) {
        const _setTimeout = setTimeout;
        self.emitTimeout = setTimeout(() => {
          clearTimeout(self.emitTimeout);
          self.emitTimeout = -1;
          self.emitLayoutChanges();
        }, 1);
      }
    }
  };
  items[19] = {
    key: "checkDimensionsMismatch",
    value: function checkDimensionsMismatch(width, height) {
      const self = this;
      if (this.props.windowWidth !== width) {
        const obj = { staleWidth: self.props.windowWidth, staleHeight: self.props.windowHeight, wasDirty: self.dirty };
        let tmp2 = obj;
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  };
  return callback(VoicePanelCardLayoutManager, items);
})();
export const useCardLayoutCoordsSubscription = function useCardLayoutCoordsSubscription(id, layoutManager) {
  const _require = id;
  let closure_1 = layoutManager;
  let obj = _require(sharedValue[9]);
  obj = {};
  let cardCoords = layoutManager.getCardCoords(id);
  if (null == cardCoords) {
    cardCoords = obj;
  }
  const merged = Object.assign(cardCoords);
  sharedValue = obj.useSharedValue(obj);
  const items = [id, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    function updateSharedValues() {
      const cardCoords = outer1_1.getCardCoords(outer1_0);
      if (null != cardCoords) {
        callback(sharedValue[10])(outer1_2, cardCoords);
      }
    }
    updateSharedValues();
    return layoutManager.subscribeFromItem(updateSharedValues);
  }, items);
  return sharedValue;
};
export const useTargetDimensionsSubscription = function useTargetDimensionsSubscription(participantId, layoutManager) {
  const _require = participantId;
  let closure_1 = layoutManager;
  let obj = _require(sharedValue[9]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(participantId));
  sharedValue = obj.useSharedValue(obj);
  const items = [participantId, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    function updateSharedValues() {
      const targetDimensions = outer1_1.getTargetDimensions(outer1_0);
      callback(sharedValue[10])(outer1_2, targetDimensions);
    }
    updateSharedValues();
    return layoutManager.subscribeFromItem(updateSharedValues);
  }, items);
  return sharedValue;
};
export const useManagerSubscription = function useManagerSubscription(layoutManager) {
  let importDefault;
  let tmp2;
  let closure_0 = layoutManager;
  [tmp2, importDefault] = callback2(React.useState(layoutManager.getLayoutKey()), 2);
  const layoutEffect = React.useLayoutEffect(() => layoutManager.subscribeToManager(() => outer1_1(outer1_0.getLayoutKey())));
  return tmp2;
};
