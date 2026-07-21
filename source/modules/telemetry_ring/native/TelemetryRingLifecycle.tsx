// Module ID: 1187
// Function ID: 13533
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1187 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const AppStates = arg1(dependencyMap[8]).AppStates;
let tmp2 = (arg0) => {
  class TelemetryRingLifecycleImpl {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, TelemetryRingLifecycleImpl);
      items1 = [...items];
      obj = closure_5(TelemetryRingLifecycleImpl);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      TelemetryRingLifecycleImpl = tmp2Result;
      tmp2Result._initialized = false;
      tmp2Result._experimentUnsubscribe = null;
      tmp2Result._handleEligibilityChange = () => {
        const result = tmp2Result._updateZoomedInExport();
      };
      tmp2Result._handleLogout = () => {
        tmp2Result(closure_1[9]).clear();
        const obj = tmp2Result(closure_1[9]);
        tmp2Result(closure_1[10]).reset();
      };
      return tmp2Result;
    }
  }
  const importDefault = TelemetryRingLifecycleImpl;
  callback2(TelemetryRingLifecycleImpl, arg0);
  let obj = {
    key: "_updateZoomedInExport",
    value() {
      const state = closure_9.getState();
      let shouldRunResult = state === constants.ACTIVE;
      if (shouldRunResult) {
        shouldRunResult = TelemetryRingLifecycleImpl(closure_1[10]).shouldRun();
        const obj = TelemetryRingLifecycleImpl(closure_1[10]);
      }
      const result = TelemetryRingLifecycleImpl(closure_1[11]).setShouldCollectHermesInstrumentedStats(shouldRunResult);
      if (state === constants.ACTIVE) {
        TelemetryRingLifecycleImpl(closure_1[10]).start();
        const obj4 = TelemetryRingLifecycleImpl(closure_1[10]);
      } else {
        TelemetryRingLifecycleImpl(closure_1[10]).stop();
        const obj3 = TelemetryRingLifecycleImpl(closure_1[10]);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_initialize",
    value() {
      const self = this;
      const TelemetryRingLifecycleImpl = this;
      if (!this._initialized) {
        self._initialized = true;
        const subscription = TelemetryRingLifecycleImpl(closure_1[12]).subscribe("LOGOUT", self._handleLogout);
        closure_9.addChangeListener(self._handleEligibilityChange);
        closure_8.addChangeListener(self._handleEligibilityChange);
        closure_7.addChangeListener(self._handleEligibilityChange);
        self._experimentUnsubscribe = () => {
          closure_7.removeChangeListener(self._handleEligibilityChange);
        };
        const obj = TelemetryRingLifecycleImpl(closure_1[12]);
        TelemetryRingLifecycleImpl(closure_1[10]).initialize();
        const result = self._updateZoomedInExport();
        const obj2 = TelemetryRingLifecycleImpl(closure_1[10]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      TelemetryRingLifecycleImpl(closure_1[12]).unsubscribe("LOGOUT", this._handleLogout);
      closure_9.removeChangeListener(this._handleEligibilityChange);
      closure_8.removeChangeListener(this._handleEligibilityChange);
      if (null != this._experimentUnsubscribe) {
        const result = self._experimentUnsubscribe();
        self._experimentUnsubscribe = null;
      }
      const obj = TelemetryRingLifecycleImpl(closure_1[12]);
      TelemetryRingLifecycleImpl(closure_1[10]).stop();
      const obj2 = TelemetryRingLifecycleImpl(closure_1[10]);
      const result1 = TelemetryRingLifecycleImpl(closure_1[11]).setShouldCollectHermesInstrumentedStats(false);
      self._initialized = false;
    }
  };
  items[2] = obj;
  return callback(TelemetryRingLifecycleImpl, items);
}(importDefault(dependencyMap[13]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default tmp2;
