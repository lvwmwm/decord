// Module ID: 15811
// Function ID: 121955
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 31, 2]
// Exports: useSetHasActiveVideoOutputSink

// Module 15811 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import result from "result";

function _createForOfIteratorHelperLoose(iterable) {
  let _slicedToArray = iterable;
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
      _slicedToArray = tmp;
    }
    let c1 = 0;
    return () => {
      if (_classCallCheck >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _classCallCheck = tmp3 + 1;
        obj.value = length[+_classCallCheck];
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
let tmp2 = (() => {
  class VoicePanelStreamOutputSinkStack {
    constructor(arg0) {
      flag = arg1;
      self = this;
      self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = outer1_1(self, self);
      self.mediaEngine = arg0;
      map = new Map();
      self.activeSinks = map;
      self.timer = -1;
      if (flag) {
        _setInterval = setInterval;
        num = 2000;
        self.timer = setInterval(() => self.logSinks(), 2000);
      }
      return;
    }
  }
  let obj = {
    key: "cleanUp",
    value() {
      clearInterval(this.timer);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "logSinks",
    value() {
      let done;
      const items = [];
      const tmp = outer1_4(this.activeSinks);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = VoicePanelStreamOutputSinkStack;
          let tmp3 = VoicePanelStreamOutputSinkStack(iter.value, 2);
          let first = tmp3[0];
          let _Array = Array;
          let arr = Array.from(tmp3[1]);
          let _HermesInternal = HermesInternal;
          let str = "[Stream:";
          let tmp5 = first;
          let str2 = ", Locks:[";
          let str3 = "]]";
          arr = items.push("[Stream:" + first + ", Locks:[" + arr.join(",") + "]]");
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "setHasActiveVideoOutputSink",
    value(arg0, isActive) {
      const self = this;
      const activeSinks = this.activeSinks;
      let set = activeSinks.get(isActive);
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      const hasItem = set.has(arg0);
      if (arg2) {
        if (!hasItem) {
          set.add(arg0);
          if (1 === set.size) {
            self.setActive(isActive, true, self.sourceId(arg0));
            const activeSinks3 = self.activeSinks;
            const result = activeSinks3.set(isActive, set);
          }
        }
      } else if (hasItem) {
        set.delete(arg0);
        if (0 === set.size) {
          self.setActive(isActive, false, self.sourceId(arg0));
          const activeSinks2 = self.activeSinks;
          activeSinks2.delete(isActive);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearLock",
    value(arg0) {
      let iter2;
      let obj;
      let tmp4;
      const self = this;
      const tmp = outer1_4(this.activeSinks);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = VoicePanelStreamOutputSinkStack;
          let tmp3 = VoicePanelStreamOutputSinkStack(iter.value, 2);
          [tmp4, obj] = tmp3;
          if (obj.has(arg0)) {
            let deleteResult = obj.delete(arg0);
            if (0 === obj.size) {
              let setActiveResult = self.setActive(tmp4, false, self.sourceId(arg0));
              let activeSinks = self.activeSinks;
              let deleteResult1 = activeSinks.delete(tmp4);
            }
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[4] = {
    key: "setActive",
    value(arg0, arg1, arg2) {
      let _slicedToArray = arg0;
      let _classCallCheck = arg1;
      let _defineProperties = arg2;
      const mediaEngine = this.mediaEngine;
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(_slicedToArray, _classCallCheck, _defineProperties));
    }
  };
  items[5] = {
    key: "sourceId",
    value(arg0) {
      return "VoicePanelStreamOutputSinkStack-" + arg0;
    }
  };
  return callback(VoicePanelStreamOutputSinkStack, items);
})();
let result = require("_defineProperties").fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");

export default tmp2;
export const useSetHasActiveVideoOutputSink = function useSetHasActiveVideoOutputSink(arg0) {
  let _slicedToArray = arg0;
  const id = React.useId();
  const items = [id, arg0];
  const callback = React.useCallback((arg0, arg1) => {
    const result = hasActiveVideoOutputSink.setHasActiveVideoOutputSink(id, arg0, arg1);
  }, items);
  const items1 = [id, callback, arg0];
  const effect = React.useEffect(() => () => outer1_0.clearLock(outer1_1), items1);
  return callback;
};
