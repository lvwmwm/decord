// Module ID: 15629
// Function ID: 119354
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useSetHasActiveVideoOutputSink

// Module 15629 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importAll(dependencyMap[3]);
const tmp2 = () => {
  class VoicePanelStreamOutputSinkStack {
    constructor(arg0) {
      flag = arg1;
      self = this;
      VoicePanelStreamOutputSinkStack = this;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = closure_1(self, VoicePanelStreamOutputSinkStack);
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
  let closure_0 = VoicePanelStreamOutputSinkStack;
  let obj = {
    key: "cleanUp",
    value() {
      clearInterval(this.timer);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "logSinks",
    value() {
      let done;
      const items = [];
      const tmp = callback2(this.activeSinks);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_0;
          let tmp3 = closure_0(iter.value, 2);
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
      const tmp = callback2(this.activeSinks);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_0;
          let tmp3 = closure_0(iter.value, 2);
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
      const VoicePanelStreamOutputSinkStack = arg0;
      const mediaEngine = this.mediaEngine;
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(setHasActiveVideoOutputSink, arg1, arg2));
    }
  };
  items[5] = {
    key: "sourceId",
    value(arg0) {
      return "VoicePanelStreamOutputSinkStack-" + arg0;
    }
  };
  return callback(VoicePanelStreamOutputSinkStack, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx");

export default tmp2;
export const useSetHasActiveVideoOutputSink = function useSetHasActiveVideoOutputSink(arg0) {
  let closure_0 = arg0;
  const id = React.useId();
  let closure_1 = id;
  const items = [id, arg0];
  const callback = React.useCallback((arg0, arg1) => {
    const result = arg0.setHasActiveVideoOutputSink(id, arg0, arg1);
  }, items);
  const items1 = [id, callback, arg0];
  const effect = React.useEffect(() => () => closure_0.clearLock(closure_1), items1);
  return callback;
};
