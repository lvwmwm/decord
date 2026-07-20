// Module ID: 12446
// Function ID: 95082
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: createDispatcherWorkScheduler

// Module 12446 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: closure_7, NATIVE_WORK_BACKOFF_MS: closure_8, NATIVE_WORK_DEADLINE_MS: closure_9, WorkIdleDeadline: closure_10 } = arg1(dependencyMap[5]));
const AppStates = arg1(dependencyMap[6]).AppStates;
let closure_12 = (BasicWorkScheduler) => {
  class DispatcherWorkScheduler {
    constructor() {
      self = this;
      tmp = closure_2(this, DispatcherWorkScheduler);
      obj = closure_5(DispatcherWorkScheduler);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      DispatcherWorkScheduler = tmp2Result;
      obj2 = DispatcherWorkScheduler(closure_1[7]);
      subscription = obj2.subscribe("APP_STATE_UPDATE", (state) => {
        const result = tmp2Result._trackAppBackgrounded(state.state === constants.BACKGROUND);
      });
      return tmp2Result;
    }
  }
  const importDefault = DispatcherWorkScheduler;
  callback2(DispatcherWorkScheduler, BasicWorkScheduler);
  let obj = {
    key: "_queueIdleCallback",
    value() {
      const self = this;
      const DispatcherWorkScheduler = this;
      if (this._enableRequestIdleCallback) {
        if (!self._criticalWorkScheduled) {
          const _performance = performance;
          let closure_1 = performance.now();
          const _setTimeout = setTimeout;
          self._flushIdleHandler = setTimeout(() => {
            let _consecutiveFlushesBeforeQueueEmpty;
            let _processWorkCallback;
            ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
            _processWorkCallback(new closure_10(Math.max(Math.max(0, closure_9 - (performance.now() - closure_1)) + closure_8 * _consecutiveFlushesBeforeQueueEmpty, closure_7), false));
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
}(arg1(dependencyMap[8]).BasicWorkScheduler);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  return new closure_12();
};
