// Module ID: 4278
// Function ID: 37443
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 4191, 2]

// Module 4278 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import DesktopSources from "DesktopSources";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
function _createForOfIteratorHelperLoose(iterable) {
  let _classCallCheck = iterable;
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
      _classCallCheck = tmp;
    }
    let c1 = 0;
    return () => {
      if (_defineProperties >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _defineProperties = tmp3 + 1;
        obj.value = length[+_defineProperties];
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
({ defaultVideoQualityOptions: closure_2, VIDEO_QUALITY_FRAMERATE: closure_3, VIDEO_QUALITY_FRAMERATE_MUTED_2: closure_4, VIDEO_QUALITY_FRAMERATE_MUTED: closure_5 } = DesktopSources);
let tmp3 = (() => {
  class MediaSinkWantsLadder {
    constructor() {
      tmp = arg0;
      self = this;
      if (arg0 === undefined) {
        tmp = outer1_2;
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
        const tmp9 = outer1_6(self.orderedLadder);
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
  let items = [obj, ];
  obj = {
    key: "getResolution",
    value(arg0) {
      const tmp = outer1_6(this.orderedLadder);
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
      const set = new Set([0, 4, 8, 10]);
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
        let tmp4 = outer1_6;
        let tmp5 = outer1_6(items);
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
          let tmp9 = MediaSinkWantsLadder;
          let obj1 = { width: num5, height: num6, budgetPortion: num7, mutedFramerate: MediaSinkWantsLadder.getMutedFramerate(num3) };
          let tmp10 = outer1_3;
          obj1.framerate = outer1_3;
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
        return arg0 <= 20 ? outer1_4 : outer1_5;
      }
    },
    {
      key: "calculateOrderedLadder",
      value(arg0) {
        let iter2;
        const items = [];
        const keys = Object.keys(arg0);
        const mapped = keys.map((arg0) => Number(arg0));
        const tmp = outer1_6(mapped.sort((arg0, arg1) => arg0 - arg1));
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
})();
let result = require("DesktopSources").fileFinishedImporting("../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx");

export const MediaSinkWantsLadder = tmp3;
