// Module ID: 1238
// Function ID: 1239
// Name: telemetry_ring/TelemetryRingLifecycle
// Dependencies: [1239, 1376, 1983, 1078, 1986, 1987, 1362, 577, 1991, 2]

// Module 1238 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 577 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1362 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1987 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;
import UserStore from "UserStore" /* 1376 */;
import AppStateStore from "AppStateStore" /* 1983 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

const AppStates = fn(1078).AppStates;
class TelemetryRingLifecycleImpl extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult._handleEligibilityChange = function _handleEligibilityChange() {
      const result = applyArgumentsResult._updateZoomedInExport();
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      applyArgumentsResult(1991).clear();
      const obj = applyArgumentsResult(1991);
      applyArgumentsResult(1987).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  state = AppStateStore.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = ZoomedInTelemetryDefault.shouldRun();
  }
  const result = ProcessUtilsDefault.setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    tmp6(1987).start();
    const tmp6Result = tmp6(1987);
  } else {
    tmp6(1987).stop();
    const tmp6Result2 = tmp6(1987);
  }
};
prototype["_initialize"] = function _initialize() {
  const self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(577).subscribe("LOGOUT", self._handleLogout);
    AppStateStore.addChangeListener(self._handleEligibilityChange);
    UserStore.addChangeListener(self._handleEligibilityChange);
    ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(577);
    self(1987).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(1987);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  DispatcherDefault.unsubscribe("LOGOUT", this._handleLogout);
  AppStateStore.removeChangeListener(this._handleEligibilityChange);
  UserStore.removeChangeListener(this._handleEligibilityChange);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
  ZoomedInTelemetryDefault.stop();
  const tmpResult = ZoomedInTelemetryDefault;
  const result1 = ProcessUtilsDefault.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
const size = fn(2);
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
