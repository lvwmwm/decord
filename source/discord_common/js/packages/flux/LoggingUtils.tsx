// Module ID: 628
// Function ID: 7224
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 4, 629, 631, 2]

// Module 628 (_createForOfIteratorHelperLoose)
import module_629 from "module_629";
import EventEmitter from "EventEmitter";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const logger = new require("_inherits").Logger("Flux");
let c9 = 0;
let tmp4 = (() => {
  class ActionLog {
    constructor(arg0) {
      tmp = outer1_3(this, ActionLog);
      this.startTime = 0;
      this.totalTime = 0;
      this.traces = [];
      tmp2 = +outer1_9;
      outer1_9 = tmp2 + 1;
      this.id = tmp2;
      this.action = arg0;
      date = new Date();
      this.createdAt = date;
      return;
    }
  }
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
})();
let closure_10 = tmp4;
let tmp3 = ((EventEmitter) => {
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
      tmp = outer1_3(self, ActionLogger);
      obj2 = outer1_6(ActionLogger);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj2, [], outer1_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.logs = [];
      tmp2Result.persist = flag;
      return tmp2Result;
    }
  }
  callback2(ActionLogger, EventEmitter);
  let obj = {
    key: "log",
    value(arg0, arg1) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      const tmp2 = new outer1_10(arg0);
      let closure_2 = tmp2;
      let _performance = outer1_1(outer1_2[6]).performance;
      tmp2.startTime = _performance.now();
      arg1((name) => {
        const obj = { name, time: -1 };
        const _performance = outer2_1(outer2_2[6]).performance;
        const nowResult = _performance.now();
        const tmp = name;
        const _performance2 = outer2_1(outer2_2[6]).performance;
        obj.time = _performance2.now() - nowResult;
        if (self.persist) {
          const traces = tmp2.traces;
          traces.push(tmp2);
        }
        self.emit("trace", type.type, tmp, obj.time);
        return arg1();
      });
      let _performance2 = outer1_1(outer1_2[6]).performance;
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
  let items = [obj, , ];
  obj = {
    key: "getSlowestActions",
    value(arg0) {
      let iter6;
      let num = arg1;
      let closure_0 = arg0;
      if (arg1 === undefined) {
        num = 20;
      }
      let c1;
      let c2;
      let items = [];
      const tmp = outer1_11(this.logs);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (null == arg0) {
            let tmp2 = outer1_11;
            let tmp3 = outer1_11(value.traces);
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
                done = iter5.done;
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
      c1 = 0;
      c2 = 0;
      const mapped = items.map((arg0) => {
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        const combined = "" + tmp;
        let sum = combined;
        if (null == closure_0) {
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
        return "" + obj.padEnd(c1 + 1, " ") + " - " + tmp + "ms";
      });
      const joined = mapped1.join("\n");
      let tmp11 = 0 === items.length;
      if (!tmp11) {
        tmp11 = items[0][2] < 10;
      }
      if (!tmp11) {
        tmp11 = c2 < 20;
      }
      if (!tmp11) {
        let _HermesInternal;
        if (null != ActionLogger) {
          _HermesInternal = ActionLogger.HermesInternal;
        }
        outer1_8.log("Using Hermes:", undefined !== _HermesInternal);
        let str3 = "";
        if (null != arg0) {
          _HermesInternal = HermesInternal;
          str3 = "\n\n=== " + arg0 + " ===";
        }
        const _HermesInternal2 = HermesInternal;
        outer1_8.log("" + str3 + "\n" + joined + "\n");
        const _HermesInternal3 = HermesInternal;
        outer1_8.log("Total Time: " + c2 + "ms");
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
      let c0;
      let c1;
      const obj = {};
      const tmp = outer1_11(this.logs);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = outer1_11;
          let tmp3 = outer1_11(value.traces);
          let iter2 = tmp3();
          if (!iter2.done) {
            do {
              value = iter2.value;
              let items = [value.name, value.name, value.time];
              obj[value.name] = items;
              let iter3 = tmp3();
              iter2 = iter3;
              done = iter3.done;
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
      c0 = 0;
      c1 = 0;
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
        return "" + obj.padEnd(c0 + 1, " ") + " - " + tmp + "ms";
      });
      let tmp6 = 0 === values.length;
      const joined = mapped1.join("\n");
      if (!tmp6) {
        tmp6 = c1 < 8;
      }
      if (!tmp6) {
        let _HermesInternal;
        if (null != ActionLogger) {
          _HermesInternal = ActionLogger.HermesInternal;
        }
        _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        const combined = "\nUsing Hermes: " + undefined !== _HermesInternal;
        const _HermesInternal3 = HermesInternal;
        const combined1 = "\n\n=== " + arg0 + " ===\n" + joined;
        outer1_8.log(combined, combined1, "\nTotal Time: " + c1 + "ms\n\n");
      }
      return values;
    }
  };
  items[2] = obj;
  return callback(ActionLogger, items);
})(require("EventEmitter").EventEmitter);
let result = require("_possibleConstructorReturn").fileFinishedImporting("../discord_common/js/packages/flux/LoggingUtils.tsx");

export const ActionLogger = tmp3;
export const ActionLog = tmp4;
