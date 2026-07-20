// Module ID: 628
// Function ID: 7224
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 628 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let global = Symbol_iterator;
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
      global = tmp;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const logger = new arg1(dependencyMap[5]).Logger("Flux");
let closure_9 = 0;
const tmp4 = () => {
  class ActionLog {
    constructor(arg0) {
      tmp = closure_3(this, ActionLog);
      this.startTime = 0;
      this.totalTime = 0;
      this.traces = [];
      tmp2 = +closure_9;
      closure_9 = tmp2 + 1;
      this.id = tmp2;
      this.action = arg0;
      date = new Date();
      this.createdAt = date;
      return;
    }
  }
  const global = ActionLog;
  let obj = {
    key: "name",
    get() {
      return this.action.type;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toJSON",
    value() {
      const self = this;
      if (null == this.createdAt) {
        const _Error = Error;
        const error = new Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
        throw error;
      } else {
        const obj = { actionType: self.action.type };
        ({ createdAt: obj.created_at, totalTime: obj.totalTime, traces: obj.traces } = self);
        return obj;
      }
    }
  };
  items[1] = obj;
  return callback(ActionLog, items);
}();
const tmp3 = (EventEmitter) => {
  class ActionLogger {
    constructor() {
      obj = EventEmitter;
      self = this;
      if (EventEmitter === undefined) {
        obj = {};
      }
      flag = obj.persist;
      if (flag === undefined) {
        flag = false;
      }
      tmp = closure_3(self, ActionLogger);
      obj2 = closure_6(ActionLogger);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, [], closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.logs = [];
      tmp2Result.persist = flag;
      return tmp2Result;
    }
  }
  const global = ActionLogger;
  callback2(ActionLogger, EventEmitter);
  let obj = {
    key: "log",
    value(arg0, arg1) {
      const self = this;
      const ActionLogger = this;
      const tmp2 = new closure_10(arg0);
      const _performance = arg0(tmp2[6]).performance;
      tmp2.startTime = _performance.now();
      arg1((name) => {
        const obj = { name, time: -1 };
        const _performance = name(tmp2[6]).performance;
        const nowResult = _performance.now();
        const tmp = name;
        const _performance2 = name(tmp2[6]).performance;
        obj.time = _performance2.now() - nowResult;
        if (self.persist) {
          const traces = tmp2.traces;
          traces.push(tmp2);
        }
        self.emit("trace", name.type, tmp, obj.time);
        return arg1();
      });
      const _performance2 = arg0(tmp2[6]).performance;
      tmp2.totalTime = _performance2.now() - tmp2.startTime;
      const persist = this.persist;
      let tmp6 = persist;
      if (persist) {
        tmp6 = tmp4.totalTime > 0;
      }
      if (tmp6) {
        const logs = self.logs;
        logs.push(tmp4);
      }
      if (self.logs.length > 1000) {
        const logs1 = self.logs;
        logs1.shift();
      }
      self.emit("log", arg0);
      return tmp2;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getSlowestActions",
    value(arg0) {
      let iter6;
      let num = arg1;
      const ActionLogger = arg0;
      if (arg1 === undefined) {
        num = 20;
      }
      let closure_1;
      let closure_2;
      const items = [];
      const tmp = callback3(this.logs);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (null == arg0) {
            let tmp2 = closure_11;
            let tmp3 = closure_11(value.traces);
            let iter3 = tmp3();
            let iter4 = iter3;
            let tmp4 = iter3;
            let tmp5 = tmp3;
            if (!iter3.done) {
              do {
                value = iter4.value;
                let items1 = [value.name, value.name, value.time];
                let arr = items.push(items1);
                let iter5 = tmp3();
                iter4 = iter5;
                let tmp7 = iter5;
                let tmp8 = tmp3;
                let done = iter5.done;
              } while (!done);
            }
          }
          iter6 = tmp();
          iter2 = iter6;
        } while (!iter6.done);
      }
      const sorted = items.sort((arg0, arg1) => arg1[2] - arg0[2]);
      if (items.length > num) {
        items.length = num;
      }
      closure_1 = 0;
      closure_2 = 0;
      const mapped = items.map((arg0) => {
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        const combined = "" + tmp;
        let sum = combined;
        if (null == arg0) {
          const _HermesInternal = HermesInternal;
          sum = combined + "<" + tmp2 + ">";
        }
        closure_1 = Math.max(sum.length, closure_1);
        const items = [sum, tmp3];
        return items;
      });
      const mapped1 = mapped.map((arg0) => {
        let obj;
        let tmp;
        [obj, tmp] = arg0;
        closure_2 = closure_2 + tmp;
        return "" + obj.padEnd(closure_1 + 1, " ") + " - " + tmp + "ms";
      });
      const joined = mapped1.join("\n");
      let tmp11 = 0 === items.length;
      if (!tmp11) {
        tmp11 = items[0][2] < 10;
      }
      if (!tmp11) {
        tmp11 = closure_2 < 20;
      }
      if (!tmp11) {
        let _HermesInternal;
        if (null != ActionLogger) {
          _HermesInternal = ActionLogger.HermesInternal;
        }
        closure_8.log("Using Hermes:", undefined !== _HermesInternal);
        let str3 = "";
        if (null != arg0) {
          _HermesInternal = HermesInternal;
          str3 = "\n\n=== " + arg0 + " ===";
        }
        const _HermesInternal2 = HermesInternal;
        closure_8.log("" + str3 + "\n" + joined + "\n");
        const _HermesInternal3 = HermesInternal;
        closure_8.log("Total Time: " + closure_2 + "ms");
      }
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastActionMetrics",
    value(arg0) {
      let iter4;
      let num = arg1;
      if (arg1 === undefined) {
        num = 20;
      }
      let _HermesInternal;
      let closure_1;
      const obj = {};
      const tmp = callback3(this.logs);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = closure_11;
          let tmp3 = closure_11(value.traces);
          let iter2 = tmp3();
          if (!iter2.done) {
            do {
              value = iter2.value;
              let items = [value.name, value.name, value.time];
              obj[value.name] = items;
              let iter3 = tmp3();
              iter2 = iter3;
              let done = iter3.done;
            } while (!done);
          }
          iter4 = tmp();
          iter = iter4;
        } while (!iter4.done);
      }
      const values = Object.values(obj);
      const sorted = values.sort((arg0, arg1) => arg1[2] - arg0[2]);
      if (values.length > num) {
        values.length = num;
      }
      _HermesInternal = 0;
      closure_1 = 0;
      const mapped = values.map((arg0) => {
        let arr;
        let tmp;
        [arr, , tmp] = arg0;
        closure_0 = Math.max(arr.length, closure_0);
        const items = [arr, tmp];
        return items;
      });
      const mapped1 = mapped.map((arg0) => {
        let obj;
        let tmp;
        [obj, tmp] = arg0;
        closure_1 = closure_1 + tmp;
        return "" + obj.padEnd(closure_0 + 1, " ") + " - " + tmp + "ms";
      });
      let tmp6 = 0 === values.length;
      const joined = mapped1.join("\n");
      if (!tmp6) {
        tmp6 = closure_1 < 8;
      }
      if (!tmp6) {
        _HermesInternal = undefined;
        if (null != _HermesInternal) {
          _HermesInternal = _HermesInternal.HermesInternal;
        }
        _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        const combined = "\nUsing Hermes: " + undefined !== _HermesInternal;
        const _HermesInternal3 = HermesInternal;
        const combined1 = "\n\n=== " + arg0 + " ===\n" + joined;
        closure_8.log(combined, combined1, "\nTotal Time: " + closure_1 + "ms\n\n");
      }
      return values;
    }
  };
  items[2] = obj;
  return callback(ActionLogger, items);
}(arg1(dependencyMap[7]).EventEmitter);
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/flux/LoggingUtils.tsx");

export const ActionLogger = tmp3;
export const ActionLog = tmp4;
