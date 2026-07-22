// Module ID: 10009
// Function ID: 77352
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useCardLayoutCoordsSubscription, useManagerSubscription, useTargetDimensionsSubscription

// Module 10009 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
        let obj = { "Null": "GeoTiffDirectory", "Null": "GeoTiffDoubleParams" };
      } else {
        obj = { width: 2 };
        let num5 = 0;
        if (arg3) {
          num5 = 1;
        }
        obj.height = 3 + num5;
      }
    } else {
      return { "Null": -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 };
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
        obj = { "Null": "GeoTiffDirectory", "Null": "GeoTiffDoubleParams" };
      }
    } else {
      return { "Null": "\u{1F4A0}", "Null": 6 };
    }
  } else if ("square" === arg0) {
    return fillAspectRatio.enlargeSquare ? { "Null": "GeoTiffDirectory", "Null": "GeoTiffDoubleParams" } : { "Null": "<string:2491613185>", "Null": "<string:2941583362>" };
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importAll(dependencyMap[3]);
const PixelRatio = arg1(dependencyMap[4]).PixelRatio;
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
const VoicePanelCardItemType = tmp2.VoicePanelCardItemType;
({ BASE_TARGET_CARD_SIZE: closure_10, VoicePanelCTACardDimensionKeys: closure_11, VoicePanelCTACardDimensions: closure_12, VOICE_PANEL_CHUNK_DIVISOR: closure_13 } = tmp2);
({ EDGE_GUTTER: closure_14, CALL_TILE_GUTTER: closure_15 } = arg1(dependencyMap[7]));
const ParticipantTypes = arg1(dependencyMap[8]).ParticipantTypes;
let obj = { 0: null, 9223372036854775807: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, type: VoicePanelCardItemType.PARTICIPANT };
const set = new Set();
let closure_19 = { text: true, ty: true };
obj = {};
const tmp3 = arg1(dependencyMap[7]);
obj.match = new Set([]);
const items = [{ text: "<string:1040334421>", ty: "<string:1040334338>" }];
obj.layouts = items;
obj.global = true;
const items1 = [obj, ];
obj = {};
const set1 = new Set([]);
obj.match = new Set([-229780751, 1065152063, 490364469, 1271345472, -532575945, 40976419, 822083584, 103079215]);
const items2 = [{ text: null, ty: null }, { text: true, ty: true }, { text: true, ty: true }];
obj.layouts = items2;
items1[1] = obj;
const set2 = new Set([-229780751, 1065152063, 490364469, 1271345472, -532575945, 40976419, 822083584, 103079215]);
const tmp7 = () => {
  class VoicePanelCardLayoutManager {
    constructor(arg0) {
      tmp = closure_3(this, VoicePanelCardLayoutManager);
      this.dirty = true;
      map = new Map();
      this.targetDimensions = map;
      map1 = new Map();
      this.cardCoords = map1;
      map2 = new Map();
      this.chunkedCoords = map2;
      this.contentDimensions = { "Null": "%FunctionPrototype%", "Null": "paddingStart" };
      set = new Set();
      this.layoutCallbacks = set;
      set1 = new Set();
      this.managerSubscriptions = set1;
      this.items = [];
      this.emitItemChanges = true;
      this.mounted = false;
      this.layoutKey = 0;
      this.emitTimeout = -1;
      this.props = {};
      this.defaultTargetCoords = { "Null": "%FunctionPrototype%", "Null": "paddingStart" };
      this.channelId = arg0;
      return;
    }
  }
  const arg1 = VoicePanelCardLayoutManager;
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
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
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
      const obj = { windowHeight, windowWidth: windowHeight.windowWidth, chunkSize: windowHeight / closure_13, safeAreaLeft: Math.max(windowHeight.safeAreaLeft, closure_14), safeAreaRight: Math.max(safeAreaRight, closure_14), safeAreaBottom: Math.max(safeAreaBottom, closure_14), safeAreaTop, gutter: closure_15, controlBarSize };
      ({ safeAreaRight, safeAreaTop, safeAreaBottom, controlBarSize } = windowHeight);
      if (!callback(closure_2[11])(obj, this.props)) {
        self.props = obj;
        self.setDirty(true);
      }
      self.setDirty(!function areArraysShallowEqual(arr, items) {
        return arr.length === items.length && !arr.some((arg0, arg1) => arg1[arg1] !== arg0);
      }(items, self.items));
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
        value = closure_18;
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
      } else if (set.has(arg0)) {
        defaultTargetCoords = closure_12[arg0];
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
        let size = { "Null": -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 };
      } else if ("landscape" === arg1) {
        size = { "Null": "\u{1F4A0}", "Null": 6 };
      } else if ("square" === arg1) {
        size = { "Null": "<string:2491613185>", "Null": "<string:2941583362>" };
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
      const VoicePanelCardLayoutManager = this;
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
        const _Set = Set;
        ({ safeAreaTop, controlBarSize } = props);
        const set = new Set();
        const _Set2 = Set;
        const set1 = new Set();
        const _Set3 = Set;
        const set2 = new Set();
        const _Set4 = Set;
        const set3 = new Set(self.items);
        const _HermesInternal = HermesInternal;
        let closure_8 = "" + self.items.length;
        let bound2 = 0;
        function _loop(value) {
          let participant = participant.getParticipant(self.channelId, value.id);
          if (value.type === bound2.CTA) {
            const targetDimensions = self.getTargetDimensions(value.id);
          } else if (null != participant) {
            if (participant.type === constants.USER) {
              let defaultTargetCoords = self.defaultTargetCoords;
            } else {
              defaultTargetCoords = self.getTargetDimensions(value.id);
            }
          }
          if (null != targetDimensions) {
            if (null != participant) {
              const obj = { type: "custom", item: value, forceSquare: participant.type === constants.USER };
              const type = participant.type;
              if (constants.ACTIVITY === type) {
                set.add(obj);
              } else if (constants.STREAM === type) {
                set1.add(obj);
              } else if (constants.USER === type) {
                set2.add(obj);
              }
              let str = "stream";
              if (participant.type !== constants.STREAM) {
                let str2 = "activity";
                if (participant.type === constants.USER) {
                  str2 = "camera";
                }
                str = str2;
              }
              participant = `${participant},${str}`;
              set3.delete(value);
            }
          }
          return 1;
        }
        const tmp27 = callback3(set3);
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
          found = closure_20.find((arg0) => {
            const match = arg0.match;
            return match.has(closure_8);
          });
        }
        const _Math = Math;
        let obj = { top: safeAreaTop, left: safeAreaLeft, right: safeAreaRight, bottom: safeAreaBottom };
        const bound = Math.max(120, windowHeight - self(windowWidth[13])(obj, closure_14).height - closure_14 - controlBarSize - safeAreaBottom);
        const _Math2 = Math;
        if (null == found) {
          if (set.size <= 0) {
            obj = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
            if (self.items.length < 7) {
              if (0 !== self.items.length) {
                obj = { cardCount: self.items.length, gutterSize: gutter, availableWidth: tmp35, availableHeight: bound };
                const tmp38 = self(windowWidth[14])(obj);
                const columns = tmp38.columns;
                bound2 = columns;
                let cardSize = tmp38.cardSize;
                let tmp39 = columns;
                let tmp40 = columns;
              }
            }
            const _Math3 = Math;
            const bound1 = Math.max((windowWidth - safeAreaLeft - safeAreaRight) / callback4(obj) | 0, 1);
            bound2 = bound1;
            cardSize = set3.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - closure_15 * (bound1 - 1)) / bound1);
            tmp39 = bound1;
            tmp40 = bound1;
            const tmp82 = callback4(obj);
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
          const sum = rounded + num9;
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
          if (!self(windowWidth[11])(obj1, self.defaultTargetCoords)) {
            self.defaultTargetCoords = obj1;
          }
          const obj2 = { cardWidth: self.defaultTargetCoords.width, cardHeight: self.defaultTargetCoords.height, gutter, totalItems: self.items.length, windowWidth };
          const _Array = Array;
          const array = new Array(tmp40);
          const items = [array.fill(0)];
          closure_14 = -1;
          closure_15 = -1;
          let closure_16 = -1;
          let closure_17 = 0;
          const items1 = [];
          function placeItem(id, type, width, height) {
            let columns;
            let grid;
            let height2;
            let size;
            let startCol;
            let startRow;
            let obj = { grid: items, lastFullyFilledRow: closure_14, width, height, columns: bound2 };
            ({ grid, height, columns } = obj);
            const bound = Math.min(obj.width, columns);
            if (1 === columns) {
              height = 1;
            }
            let sum = obj.lastFullyFilledRow + 1;
            let num = -1;
            let num2 = -1;
            while (true) {
              let tmp6 = callback;
              let arr = callback(sum, columns, grid);
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
                      let tmp18 = callback;
                      let tmp19 = callback(sum2, columns, grid);
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
            let tmp29 = closure_14;
            ({ startRow, startCol, width, height: height2 } = size);
            let sum5 = startRow;
            if (startRow < startRow + height2) {
              do {
                let sum3 = startCol;
                if (startCol < startCol + width) {
                  do {
                    tmp45[sum5][sum3] = 1;
                    sum3 = sum3 + 1;
                    let sum4 = startCol + width;
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
                // continue
              }
            }
            closure_14 = tmp29;
            closure_16 = Math.min(Math.max(closure_16, size.startCol + (size.width - 1)), bound2);
            obj = { id, type, x: size.startCol * (obj2.gutter + obj2.cardWidth), y: size.startRow * (obj2.gutter + obj2.cardHeight), width: obj2.cardWidth * size.width + (size.width - 1) * obj2.gutter, height: obj2.cardHeight * size.height + (size.height - 1) * obj2.gutter, zIndex: obj2.totalItems - closure_17 };
            const y = obj.y;
            const chunkSize = self.props.chunkSize;
            const items = [y / chunkSize | 0, (y + obj.height) / chunkSize | 0];
            let first = items[0];
            if (first <= items[1]) {
              do {
                let tmp31 = closure_0;
                let chunkedCoords = closure_0.chunkedCoords;
                let value = chunkedCoords.get(first);
                let tmp32 = first;
                if (null == value) {
                  let _Set = Set;
                  let tmp33 = new.target;
                  let tmp34 = new.target;
                  let set = new Set();
                  let tmp36 = set;
                  let tmp37 = closure_0;
                  let chunkedCoords2 = closure_0.chunkedCoords;
                  let result = chunkedCoords2.set(first, set);
                  value = set;
                }
                let addResult = value.add(obj);
                first = first + 1;
              } while (first <= items[1]);
            }
            const cardCoords = self.cardCoords;
            const result1 = cardCoords.set(id, obj);
            const bound1 = Math.max(closure_15, size.startRow + size.height - 1);
            closure_15 = bound1;
            if (bound1 !== closure_14) {
              if (1 === size.height) {
                if (size.startRow === closure_15) {
                  arr = items1.push(id);
                }
              }
            }
            items1.length = 0;
          }
          closure_20 = 1 === self.items.length;
          const items2 = [set, set1, set2, set3];
          for (let num12 = 0; num12 < items2.length; num12 = num12 + 1) {
            let tmp58 = callback3;
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
                  tmp13 = placeItem;
                }
                let str2 = "square";
                if (!type.forceSquare) {
                  str2 = callback2(self.getTargetDimensions(type.item.id));
                }
                let obj = { item: type.item, dimensions: callback3(str2, windowWidth > windowHeight, tmp13, closure_20) };
              } else {
                obj = { item: type };
                const tmp6 = null != closure_10 ? closure_10 : placeItem;
                obj.dimensions = callback3("square", windowWidth > windowHeight, tmp6, closure_20);
              }
              ({ item, dimensions } = obj);
              placeItem(item.id, item.type, dimensions.width, dimensions.height);
              closure_17 = closure_17 + 1;
            }
            let tmp59 = callback3(items2[num12]);
            let iter3 = tmp59();
            if (!iter3.done) {
              do {
                let _loop2Result = _loop2(iter3.value);
                let iter4 = tmp59();
                iter3 = iter4;
                let done = iter4.done;
              } while (!done);
            }
          }
          if (closure_14 !== closure_15) {
            if (-1 !== closure_14) {
              let flag2 = 0 === tmp85[0];
              const tmp87 = callback3(items[closure_15]);
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
                const tmp72 = callback3(items1);
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
                const roundToNearestPixelResult = set3.roundToNearestPixel((diff1 * self.defaultTargetCoords.width + diff1 * gutter) / 2);
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
            const sum3 = tmp79 + 1;
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
        bound2 = Math.max(Math.min((windowWidth - safeAreaLeft - safeAreaRight) / callback4(obj4) | 0, 4), 1);
        cardSize = set3.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - gutter * (bound2 - 1)) / bound2);
        tmp39 = bound2;
        tmp40 = bound2;
      }
    }
  };
  items[15] = {
    key: "subscribeFromItem",
    value: function subscribeFromItem(updateSharedValues) {
      const VoicePanelCardLayoutManager = this;
      this.layoutCallbacks.add(updateSharedValues);
      return () => {
        self.layoutCallbacks.delete(arg0);
      };
    }
  };
  items[16] = {
    key: "subscribeToManager",
    value: function subscribeToManager(arg0) {
      const VoicePanelCardLayoutManager = this;
      const managerSubscriptions = this.managerSubscriptions;
      managerSubscriptions.add(arg0);
      return () => {
        const managerSubscriptions = self.managerSubscriptions;
        managerSubscriptions.delete(arg0);
      };
    }
  };
  items[17] = {
    key: "emitLayoutChanges",
    value: function emitLayoutChanges() {
      const self = this;
      const VoicePanelCardLayoutManager = this;
      if (tmp) {
        self.emitItemChanges = false;
        VoicePanelCardLayoutManager(closure_2[15]).batchUpdates(() => {
          let done;
          let done2;
          const tmp = callback(self.managerSubscriptions);
          let iter = tmp();
          if (!iter.done) {
            do {
              let valueResult = iter.value();
              let iter2 = tmp();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          const tmp3 = callback(self.layoutCallbacks);
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
        const obj = VoicePanelCardLayoutManager(closure_2[15]);
      }
    }
  };
  items[18] = {
    key: "deferredLayoutChange",
    value: function deferredLayoutChange() {
      const self = this;
      const VoicePanelCardLayoutManager = this;
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
}();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx");

export default tmp7;
export const useCardLayoutCoordsSubscription = function useCardLayoutCoordsSubscription(id, layoutManager) {
  layoutManager = id;
  const importDefault = layoutManager;
  let obj = layoutManager(dependencyMap[9]);
  obj = {};
  let cardCoords = layoutManager.getCardCoords(id);
  if (null == cardCoords) {
    cardCoords = obj;
  }
  const merged = Object.assign(cardCoords);
  const sharedValue = obj.useSharedValue(obj);
  const dependencyMap = sharedValue;
  const items = [id, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    function updateSharedValues() {
      const cardCoords = cardCoords.getCardCoords(closure_0);
      if (null != cardCoords) {
        cardCoords(closure_2[10])(closure_2, cardCoords);
      }
    }
    updateSharedValues();
    return arg1.subscribeFromItem(updateSharedValues);
  }, items);
  return sharedValue;
};
export const useTargetDimensionsSubscription = function useTargetDimensionsSubscription(participantId, layoutManager) {
  layoutManager = participantId;
  const importDefault = layoutManager;
  let obj = layoutManager(dependencyMap[9]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(participantId));
  const sharedValue = obj.useSharedValue(obj);
  const dependencyMap = sharedValue;
  const items = [participantId, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    function updateSharedValues() {
      const targetDimensions = targetDimensions.getTargetDimensions(closure_0);
      targetDimensions(closure_2[10])(closure_2, targetDimensions);
    }
    updateSharedValues();
    return arg1.subscribeFromItem(updateSharedValues);
  }, items);
  return sharedValue;
};
export const useManagerSubscription = function useManagerSubscription(layoutManager) {
  let tmp2;
  const arg1 = layoutManager;
  [tmp2, closure_1] = callback2(React.useState(layoutManager.getLayoutKey()), 2);
  const layoutEffect = React.useLayoutEffect(() => arg0.subscribeToManager(() => callback(layoutKey.getLayoutKey())));
  return tmp2;
};
