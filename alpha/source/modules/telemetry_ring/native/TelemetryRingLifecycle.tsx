// Module ID: 1246
// Function ID: 1247
// Name: telemetry_ring/TelemetryRingLifecycle
// Dependencies: [1247, 1384, 1994, 1072, 1997, 1998, 1370, 572, 2002, 2]

// Module 1246 (telemetry_ring/TelemetryRingLifecycle)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1370 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1998 */;
import TelemetryRingNativeDefault from "TelemetryRingNative" /* 2002 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import UserStore from "UserStore" /* 1384 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import LifecycleManager from "LifecycleManager" /* 1997 */;
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
      const obj = self(572);
      const subscription = obj.subscribe("LOGOUT", self._handleLogout);
      AppStateStore.addChangeListener(self._handleEligibilityChange);
      UserStore.addChangeListener(self._handleEligibilityChange);
      ApexExperimentStore.addChangeListener(self._handleEligibilityChange);
      self._experimentUnsubscribe = () => {
        ApexExperimentStore.removeChangeListener(self._handleEligibilityChange);
      };
      const obj2 = self(1998);
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
