// Module ID: 6700
// Function ID: 51909
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1194, 4202, 21, 6701, 675, 6702, 2]
// Exports: trackClickstream

// Module 6700 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

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
function isClickstreamEnabled(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const extractTimestampResult = importDefault(21).extractTimestamp(id.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    const obj = importDefault(21);
    let closure_8 = require(6701) /* clickstreamExperimentEnabled */.clickstreamExperimentEnabled();
    const obj2 = require(6701) /* clickstreamExperimentEnabled */;
  }
  return closure_8;
}
function drainClickstream(flag) {
  let done;
  if (flag === undefined) {
    flag = true;
  }
  if (isClickstreamEnabled(flag)) {
    const tmp5 = _createForOfIteratorHelperLoose(map);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = callback;
        let tmp7 = callback(iter.value, 2);
        let first = tmp7[0];
        let tmp9 = importDefault;
        let tmp10 = dependencyMap;
        let obj = importDefault(675);
        let tmp11 = require;
        let obj2 = require(6702) /* getClickstreamDrainEvent */;
        let trackResult = obj.track(first, obj2.getClickstreamDrainEvent(first, tmp7[1]));
        let iter2 = tmp5();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    map.clear();
  } else {
    map.clear();
  }
}
const map = new Map();
let c7 = -1;
let c8 = false;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(GUILD_VIEWED_CLICKSTREAM, arg1) {
  if (isClickstreamEnabled()) {
    if (!map.has(GUILD_VIEWED_CLICKSTREAM)) {
      const result = map.set(GUILD_VIEWED_CLICKSTREAM, []);
    }
    const value = map.get(GUILD_VIEWED_CLICKSTREAM);
    if (null != value) {
      const obj = {};
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      obj.rtc_state = state.getState();
      const merged = Object.assign(arg1);
      value.push(obj);
    }
  }
};
export { drainClickstream };
