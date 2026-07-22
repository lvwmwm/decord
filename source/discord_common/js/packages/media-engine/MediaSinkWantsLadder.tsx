// Module ID: 4274
// Function ID: 37410
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4274 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
({ defaultVideoQualityOptions: closure_2, VIDEO_QUALITY_FRAMERATE: closure_3, VIDEO_QUALITY_FRAMERATE_MUTED_2: closure_4, VIDEO_QUALITY_FRAMERATE_MUTED: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  class MediaSinkWantsLadder {
    constructor() {
      tmp = arg0;
      self = this;
      if (arg0 === undefined) {
        tmp = closure_2;
      }
      tmp2 = MediaSinkWantsLadder(self, MediaSinkWantsLadder);
      ({ width, height } = tmp.videoBudget);
      if (width > 0) {
        if (height > 0) {
          self.pixelBudget = width * height;
          tmp3 = MediaSinkWantsLadder;
          self.ladder = MediaSinkWantsLadder.calculateLadder(self.pixelBudget);
          self.orderedLadder = MediaSinkWantsLadder.calculateOrderedLadder(self.ladder);
          return;
        }
      }
      error = new Error("Invalid argument");
      throw error;
    }
  }
  let closure_0 = MediaSinkWantsLadder;
  let obj = {
    key: "getMaxSinkValue",
    value(arg0) {
      let pixelCount;
      let wantValue;
      let num = arg1;
      const self = this;
      if (arg1 === undefined) {
        num = 0;
      }
      if (arg0 < 0) {
        const _Error = Error;
        const error = new Error("getMaxSinkValue: Requested " + arg0);
        throw error;
      } else {
        const wantValue2 = self.orderedLadder[0].wantValue;
        const tmp9 = callback(self.orderedLadder);
        const iter3 = tmp9();
        let iter2 = iter3;
        let tmp2 = wantValue2;
        let tmp = wantValue2;
        if (!iter3.done) {
          while (true) {
            ({ pixelCount, wantValue } = iter2.value);
            if (num <= 0) {
              tmp = tmp2;
              if (pixelCount * arg0 > self.pixelBudget) {
                break;
              } else {
                let iter = tmp9();
                iter2 = iter;
                tmp2 = wantValue;
                tmp = wantValue;
                if (iter.done) {
                  break;
                }
              }
            } else {
              tmp = wantValue;
              if (num < pixelCount) {
                break;
              }
            }
            break;
          }
        }
        return tmp;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getResolution",
    value(arg0) {
      const tmp = callback(this.orderedLadder);
      const iter = tmp();
      let iter2 = iter;
      let tmp2 = null;
      let first = null;
      if (!iter.done) {
        const value = iter2.value;
        first = tmp2;
        while (arg0 >= value.wantValue) {
          let iter3 = tmp();
          iter2 = iter3;
          tmp2 = value;
          first = value;
          if (iter3.done) {
            break;
          }
        }
      }
      const obj = {};
      if (null == first) {
        first = this.orderedLadder[0];
      }
      ({ width: obj.width, height: obj.height, budgetPortion: obj.budgetPortion, mutedFramerate: obj.mutedFramerate, framerate: obj.framerate } = first);
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "calculateLadder",
    value(arg0) {
      let budgetPortion;
      let height;
      let width;
      const set = new Set([]);
      const items = [];
      let num = 1;
      let num2 = 1;
      do {
        let result = 16 * num2 / 9;
        if (set.has(result % 16)) {
          if (set.has(num2 % 16)) {
            let result1 = result * num2;
            let obj = { pixelCount: result1, width: result, height: num2, budgetPortion: result1 / arg0, wantValue: 0 };
            let arr = items.push(obj);
          }
        }
        num2 = num2 + 1;
      } while (num2 < 4096);
      obj = {};
      let num3 = 100;
      let num4 = 0;
      do {
        let tmp4 = closure_6;
        let tmp5 = closure_6(items);
        let iter = tmp5();
        let iter2 = iter;
        width = 0;
        height = 0;
        budgetPortion = 0;
        let num5 = 0;
        let num6 = 0;
        let num7 = 0;
        if (!iter.done) {
          let value = iter2.value;
          num5 = width;
          num6 = height;
          num7 = budgetPortion;
          let tmp6 = value;
          while (value.pixelCount * num <= arg0) {
            ({ width, height, budgetPortion } = value);
            let iter3 = tmp5();
            iter2 = iter3;
            num5 = width;
            num6 = height;
            num7 = budgetPortion;
            let tmp7 = value;
            if (iter3.done) {
              break;
            }
          }
        }
        let diff = num3;
        if (num4 !== num5) {
          let tmp9 = closure_0;
          let obj1 = { width: num5, height: num6, budgetPortion: num7, mutedFramerate: closure_0.getMutedFramerate(num3) };
          let tmp10 = closure_3;
          obj1.framerate = closure_3;
          obj[num3] = obj1;
          diff = num3 - 10;
          num4 = num5;
        }
        num = num + 1;
        num3 = diff;
      } while (num <= 25);
      return obj;
    }
  };
  const items1 = [
    obj,
    {
      key: "getMutedFramerate",
      value(arg0) {
        return arg0 <= 20 ? closure_4 : closure_5;
      }
    },
    {
      key: "calculateOrderedLadder",
      value(arg0) {
        let iter2;
        const items = [];
        const keys = Object.keys(arg0);
        const mapped = keys.map((arg0) => Number(arg0));
        const tmp = callback(mapped.sort((arg0, arg1) => arg0 - arg1));
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (0 !== value) {
              let size = arg0[value];
              let obj = { pixelCount: size.width * size.height, wantValue: value };
              let tmp2 = obj;
              let tmp3 = size;
              let merged = Object.assign(size);
              let arr = items.push(obj);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        return items;
      }
    }
  ];
  return callback(MediaSinkWantsLadder, items, items1);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx");

export const MediaSinkWantsLadder = tmp3;
