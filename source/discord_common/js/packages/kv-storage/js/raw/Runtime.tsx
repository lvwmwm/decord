// Module ID: 1891
// Function ID: 21120
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 4, 1884, 2]

// Module 1891 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

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
let closure_4 = "1" === process.env.KV_STORAGE_LOGGING;
const logger = new require("set").Logger("Runtime");
let tmp3 = (() => {
  class Runtime {
    constructor() {
      tmp = outer1_2(this, Runtime);
      return;
    }
  }
  let obj = {
    key: "nextId",
    value() {
      const sum = this.counter + 1;
      this.counter = sum;
      return sum;
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "executeAsync",
    value(arg0, arg1) {
      const self = this;
      let closure_1 = arg0;
      let _classCallCheck = arg1;
      this.initialize();
      return new Promise((resolve, reject) => {
        const nextIdResult = self.nextId();
        callback(nextIdResult);
        const pending = self.pending;
        const result = pending.set(nextIdResult, { id: nextIdResult, tag: closure_1, started: performance.now(), resolve, reject });
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "addCompletionCallback",
    value(arg0) {
      this.completionCallbacks.push(arg0);
      return arg0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addDatabaseStateCallback",
    value(arg0) {
      this.dbStateCallbacks.push(arg0);
      return arg0;
    }
  };
  items[4] = {
    key: "removeCompletionCallback",
    value(arg0) {
      let closure_0 = arg0;
      this.completionCallbacks = this.completionCallbacks.filter((arg0) => arg0 !== closure_0);
    }
  };
  items[5] = {
    key: "removeDatabaseStateCallback",
    value(arg0) {
      let closure_0 = arg0;
      this.dbStateCallbacks = this.dbStateCallbacks.filter((arg0) => arg0 !== closure_0);
    }
  };
  items[6] = {
    key: "onResponse",
    value(id) {
      const self = this;
      const pending = this.pending;
      const value = pending.get(id.id);
      if (null != value) {
        const pending2 = self.pending;
        pending2.delete(id.id);
        let num = 0;
        if (null != arg1) {
          num = arg1;
        }
        id.timings.materializationTimeNanoseconds = num;
        self.completeOperation(value, id, nowResult);
        const operation = self.resolveOperation(value, id);
      }
    }
  };
  items[7] = {
    key: "onStatus",
    value(handle) {
      let done;
      const tmp = outer1_6(this.dbStateCallbacks);
      let iter = tmp();
      if (!iter.done) {
        do {
          let valueResult = iter.value(handle.handle, handle.state);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[8] = {
    key: "resolveOperation",
    value(resolve, ok) {
      if (ok.ok) {
        resolve.resolve(ok.data);
      } else {
        if ("string" === typeof ok.data) {
          const _Error = Error;
          let data = new Error(ok.data);
        } else {
          data = ok.data;
        }
        resolve.reject(data);
      }
    }
  };
  items[9] = {
    key: "completeOperation",
    value(started, timings) {
      let done;
      if (this.completionCallbacks.length > 0) {
        let obj = {};
        ({ id: obj.id, tag: obj.tag } = started);
        ({ ok: obj.ok, data: obj.value } = timings);
        obj = { queue: timings.timings.queueTimeNanoseconds / 1000000, execution: timings.timings.executionTimeNanoseconds / 1000000, materialization: timings.timings.materializationTimeNanoseconds / 1000000, ccTotal: timings.timings.totalTimeNanoseconds / 1000000, jsTotal: arg2 - started.started };
        obj.timings = obj;
        const tmp5 = outer1_6(tmp.completionCallbacks);
        let iter2 = tmp5();
        if (!iter2.done) {
          do {
            let valueResult = iter2.value(obj);
            let iter = tmp5();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
      }
    }
  };
  items[10] = {
    key: "initialize",
    value() {
      let self = this;
      self = this;
      if (!this.initialized) {
        const KV_RAW = Runtime(outer1_1[3]).KV_RAW;
        const obj = {
          status(current, outer1_15) {
              return self.onStatus(current);
            },
          response(arg0, arg1) {
              return self.onResponse(arg0, arg1);
            }
        };
        KV_RAW.setCallbacks(obj);
        if (outer1_4) {
          const result = self.addCompletionCallback((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "completed";
            }
            const execution = ok.timings.execution;
            const items = ["" + execution.toFixed(3) + "ms execution", , , ];
            const materialization = ok.timings.materialization;
            items[1] = "" + materialization.toFixed(3) + "ms js materialization";
            const ccTotal = ok.timings.ccTotal;
            items[2] = "" + ccTotal.toFixed(3) + "ms cc completion";
            const jsTotal = ok.timings.jsTotal;
            items[3] = "" + jsTotal.toFixed(3) + "ms js reception";
            const ccTotal2 = ok.timings.ccTotal;
            const joined = items.join(", ");
            outer2_5.info("" + ok.tag + " (#" + ok.id + ") " + str + " in " + ccTotal2.toFixed(3) + "ms (" + joined + ").");
          });
          const result1 = self.addDatabaseStateCallback((arg0, arg1) => outer2_5.info("" + arg0 + " (state: " + arg1 + ")"));
        }
        self.initialized = true;
      }
    }
  };
  return callback(Runtime, null, items);
})();
tmp3.counter = 0;
tmp3.pending = new Map();
tmp3.initialized = false;
tmp3.dbStateCallbacks = [];
tmp3.completionCallbacks = [];
const map = new Map();
let result = require("log").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx");

export const Runtime = tmp3;
