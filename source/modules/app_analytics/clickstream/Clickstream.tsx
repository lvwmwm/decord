// Module ID: 6695
// Function ID: 51855
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: trackClickstream

// Module 6695 (_createForOfIteratorHelperLoose)
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
function isClickstreamEnabled(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const extractTimestampResult = importDefault(dependencyMap[3]).extractTimestamp(id.getId());
    if (extractTimestampResult !== closure_7) {
      drainClickstream(false);
      closure_7 = extractTimestampResult;
    }
    const obj = importDefault(dependencyMap[3]);
    let closure_8 = arg1(dependencyMap[4]).clickstreamExperimentEnabled();
    const obj2 = arg1(dependencyMap[4]);
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
        let tmp6 = closure_3;
        let tmp7 = closure_3(iter.value, 2);
        let first = tmp7[0];
        let tmp9 = closure_1;
        let tmp10 = closure_2;
        let obj = closure_1(closure_2[5]);
        let tmp11 = closure_0;
        let obj2 = closure_0(closure_2[6]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const map = new Map();
let closure_7 = -1;
let closure_8 = false;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

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
