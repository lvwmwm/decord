// Module ID: 1234
// Function ID: 1235
// Name: telemetry_ring/TelemetryRingLifecycle
// Dependencies: [1235, 1372, 1980, 1074, 1983, 1984, 1358, 573, 1988, 2]

// Module 1234 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1358 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1984 */;
import TelemetryRingNativeDefault from "TelemetryRingNative" /* 1988 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import UserStore from "UserStore" /* 1372 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

let importDefault;

const AppStates = Constants.AppStates;
class TelemetryRingLifecycleImpl extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._experimentUnsubscribe = null;
    applyArgumentsResult._handleEligibilityChange = function _handleEligibilityChange() {
      const result = importDefault._updateZoomedInExport();
    };
    applyArgumentsResult._handleLogout = function _handleLogout() {
      const obj = TelemetryRingNativeDefault;
      obj.clear();
      const obj2 = ZoomedInTelemetryDefault;
      obj2.reset();
    };
    return applyArgumentsResult;
  }
  _updateZoomedInExport() {
    const state = AppStateStore.getState();
    let shouldRunResult = state === AppStates.ACTIVE;
    const tmp2 = AppStates;
    if (shouldRunResult) {
      const obj = ZoomedInTelemetryDefault;
      shouldRunResult = obj.shouldRun();
    }
    const obj2 = ProcessUtilsDefault;
    const result = obj2.setShouldCollectHermesInstrumentedStats(shouldRunResult);
    if (state === tmp2.ACTIVE) {
      const tmp6Result = ZoomedInTelemetryDefault;
      tmp6Result.start();
    } else {
      const tmp6Result2 = ZoomedInTelemetryDefault;
      tmp6Result2.stop();
    }
  }
  _initialize() {
    const self = this;
    if (!this._initialized) {
      self._initialized = true;
      const obj = self(573);
      const subscription = obj.subscribe("LOGOUT", self._handleLogout);
      AppStateStore.addChangeListener(self._handleEligibilityChange);
      UserStore.addChangeListener(self._handleEligibilityChange);
      ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
      self._experimentUnsubscribe = () => {
        ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
      };
      const obj2 = self(1984);
      obj2.initialize();
      const result = self._updateZoomedInExport();
    }
  }
  _terminate() {
    const self = this;
    const obj = DispatcherDefault;
    obj.unsubscribe("LOGOUT", this._handleLogout);
    AppStateStore.removeChangeListener(this._handleEligibilityChange);
    UserStore.removeChangeListener(this._handleEligibilityChange);
    if (null != this._experimentUnsubscribe) {
      const result = self._experimentUnsubscribe();
      self._experimentUnsubscribe = null;
    }
    const tmpResult = ZoomedInTelemetryDefault;
    tmpResult.stop();
    const tmpResult2 = ProcessUtilsDefault;
    const result1 = tmpResult2.setShouldCollectHermesInstrumentedStats(false);
    self._initialized = false;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = size.fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
