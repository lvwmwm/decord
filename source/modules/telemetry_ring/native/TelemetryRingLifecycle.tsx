// Module ID: 1208
// Function ID: 1209
// Name: _updateZoomedInExport
// Dependencies: [1209, 1921, 7347, 673, 4669, 14108, 7607, 706, 14112, 2]

// Module 1208 (_updateZoomedInExport)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 4669 */;
import getHermesInstrumentedStatsSummaryDefault from "getHermesInstrumentedStatsSummary" /* 7607 */;
import shouldRunDefault from "shouldRun" /* 14108 */;
import closure_2 from "initialize" /* 1209 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import closure_4 from "getState" /* 7347 */;
import { AppStates } from "ME" /* 673 */;

initializeDefault;
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
      applyArgumentsResult(14112).clear();
      const obj = applyArgumentsResult(14112);
      applyArgumentsResult(14108).reset();
    };
    return applyArgumentsResult;
  }
}
const prototype = TelemetryRingLifecycleImpl.prototype;
prototype["_updateZoomedInExport"] = function _updateZoomedInExport() {
  const state = closure_4.getState();
  let shouldRunResult = state === AppStates.ACTIVE;
  if (shouldRunResult) {
    shouldRunResult = shouldRunDefault.shouldRun();
    const obj = shouldRunDefault;
  }
  const result = getHermesInstrumentedStatsSummaryDefault.setShouldCollectHermesInstrumentedStats(shouldRunResult);
  if (state === AppStates.ACTIVE) {
    let tmp6Result = tmp6(14108);
    tmp6Result.start();
  } else {
    tmp6Result = tmp6(14108);
    tmp6Result.stop();
  }
};
prototype["_initialize"] = function _initialize() {
  let self = this;
  self = this;
  if (!this._initialized) {
    self._initialized = true;
    const subscription = self(706).subscribe("LOGOUT", self._handleLogout);
    closure_4.addChangeListener(self._handleEligibilityChange);
    closure_3.addChangeListener(self._handleEligibilityChange);
    closure_2.addChangeListener(self._handleEligibilityChange);
    self._experimentUnsubscribe = () => {
      closure_1_2.removeChangeListener(self._handleEligibilityChange);
    };
    const obj = self(706);
    self(14108).initialize();
    const result = self._updateZoomedInExport();
    const obj2 = self(14108);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  dispatcherDefault.unsubscribe("LOGOUT", this._handleLogout);
  closure_4.removeChangeListener(this._handleEligibilityChange);
  closure_3.removeChangeListener(this._handleEligibilityChange);
  if (null != this._experimentUnsubscribe) {
    const result = self._experimentUnsubscribe();
    self._experimentUnsubscribe = null;
  }
  let tmpResult = tmp(14108);
  tmpResult.stop();
  tmpResult = tmp(7607);
  const result1 = tmpResult.setShouldCollectHermesInstrumentedStats(false);
  self._initialized = false;
};
const telemetryRingLifecycleImpl = new TelemetryRingLifecycleImpl();
let result = require("set").fileFinishedImporting("modules/telemetry_ring/native/TelemetryRingLifecycle.tsx");

export default telemetryRingLifecycleImpl;
