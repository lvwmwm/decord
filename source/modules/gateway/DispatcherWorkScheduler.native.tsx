// Module ID: 12574
// Function ID: 97311
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 12573, 653, 686, 12575, 2]
// Exports: createDispatcherWorkScheduler

// Module 12574 (_isNativeReflectConstruct)
import ME from "ME";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import WorkIdleDeadline from "WorkIdleDeadline";
import { AppStates } from "ME";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: closure_7, NATIVE_WORK_BACKOFF_MS: closure_8, NATIVE_WORK_DEADLINE_MS: closure_9, WorkIdleDeadline: closure_10 } = WorkIdleDeadline);
let closure_12 = ((BasicWorkScheduler) => {
  class DispatcherWorkScheduler {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, [], outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj2 = DispatcherWorkScheduler(outer1_1[7]);
      subscription = obj2.subscribe("APP_STATE_UPDATE", (state) => {
        const result = tmp2Result._trackAppBackgrounded(state.state === outer2_11.BACKGROUND);
      });
      return tmp2Result;
    }
  }
  callback2(DispatcherWorkScheduler, BasicWorkScheduler);
  let obj = {
    key: "_queueIdleCallback",
    value() {
      let self = this;
      self = this;
      if (this._enableRequestIdleCallback) {
        if (!self._criticalWorkScheduled) {
          const _performance = performance;
          let closure_1 = performance.now();
          const _setTimeout = setTimeout;
          self._flushIdleHandler = setTimeout(() => {
            let _consecutiveFlushesBeforeQueueEmpty;
            let _processWorkCallback;
            ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
            _processWorkCallback(new outer2_10(Math.max(Math.max(0, outer2_9 - (performance.now() - closure_1)) + outer2_8 * _consecutiveFlushesBeforeQueueEmpty, outer2_7), false));
          }, 1);
        }
      }
      return self._processWorkCallback();
    }
  };
  const items = [obj, ];
  obj = {
    key: "_clearIdleCallback",
    value() {
      const self = this;
      if (null != this._flushIdleHandler) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._flushIdleHandler);
        self._flushIdleHandler = null;
      }
    }
  };
  items[1] = obj;
  return callback(DispatcherWorkScheduler, items);
})(require("BasicWorkScheduler").BasicWorkScheduler);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  return new closure_12();
};
