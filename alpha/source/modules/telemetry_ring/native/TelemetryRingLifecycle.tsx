// Module ID: 1257
// Function ID: 1258
// Name: telemetry_ring/TelemetryRingLifecycle
// Dependencies: [1258, 1389, 1998, 1085, 2001, 2002, 1375, 584, 2006, 2]

// Module 1257 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1375 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2002 */;
import TelemetryRingNativeDefault from "TelemetryRingNative" /* 2006 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import UserStore from "UserStore" /* 1389 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;
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
      const obj = self(584);
      const subscription = obj.subscribe("LOGOUT", self._handleLogout);
      AppStateStore.addChangeListener(self._handleEligibilityChange);
      UserStore.addChangeListener(self._handleEligibilityChange);
      ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
      self._experimentUnsubscribe = () => {
        ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
      };
      const obj2 = self(2002);
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
