// Module ID: 1891
// Function ID: 21113
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1891 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = "1" === process.env.KV_STORAGE_LOGGING;
const logger = new arg1(dependencyMap[2]).Logger("Runtime");
const tmp3 = () => {
  class Runtime {
    constructor() {
      tmp = closure_2(this, Runtime);
      return;
    }
  }
  const arg1 = Runtime;
  let obj = {
    key: "nextId",
    value() {
      const sum = this.counter + 1;
      this.counter = sum;
      return sum;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "executeAsync",
    value(arg0, arg1) {
      const Runtime = this;
      this.initialize();
      return new Promise((resolve, reject) => {
        const nextIdResult = self.nextId();
        reject(nextIdResult);
        const pending = self.pending;
        const result = pending.set(nextIdResult, { id: nextIdResult, tag: resolve, started: performance.now(), resolve, reject });
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
      const Runtime = arg0;
      this.completionCallbacks = this.completionCallbacks.filter((arg0) => arg0 !== arg0);
    }
  };
  items[5] = {
    key: "removeDatabaseStateCallback",
    value(arg0) {
      const Runtime = arg0;
      this.dbStateCallbacks = this.dbStateCallbacks.filter((arg0) => arg0 !== arg0);
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
      const tmp = callback2(this.dbStateCallbacks);
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
        const tmp5 = callback2(tmp.completionCallbacks);
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
      const self = this;
      const Runtime = this;
      if (!this.initialized) {
        const KV_RAW = Runtime(closure_1[3]).KV_RAW;
        const obj = {
          status(user, applicationId) {
              return self.onStatus(user);
            },
          response(arg0, arg1) {
              return self.onResponse(arg0, arg1);
            }
        };
        KV_RAW.setCallbacks(obj);
        if (closure_4) {
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
            closure_5.info("" + ok.tag + " (#" + ok.id + ") " + str + " in " + ccTotal2.toFixed(3) + "ms (" + joined + ").");
          });
          const result1 = self.addDatabaseStateCallback((arg0, arg1) => closure_5.info("" + arg0 + " (state: " + arg1 + ")"));
        }
        self.initialized = true;
      }
    }
  };
  return callback(Runtime, null, items);
}();
tmp3.counter = 0;
tmp3.pending = new Map();
tmp3.initialized = false;
tmp3.dbStateCallbacks = [];
tmp3.completionCallbacks = [];
const map = new Map();
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Runtime.tsx");

export const Runtime = tmp3;
