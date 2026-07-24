// Module ID: 16020
// Function ID: 123678
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10250, 1849, 6769, 1212, 2198, 1870, 10252, 686, 6828, 16015, 5078, 2]

// Module 16020 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getCurrentRestrictedHoursState() {
  return currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
}
function dispatchWarningIfNeeded(rule) {
  const combined = "" + rule.rule.ruleId + ":" + rule.startAtMs;
  if (combined !== combined) {
    const startAtMs = rule.startAtMs;
    const intl = require(1212) /* getSystemLocale */.intl;
    const _Date = Date;
    const date = new Date(startAtMs);
    const stringResult = intl.string(importDefault(2198)["0JlDg0"]);
    const items = [require(1870) /* _createForOfIteratorHelperLoose */.JS_DAY_TO_DAY_OF_WEEK[date.getDay(date)]];
    const obj2 = require(10252) /* _createForOfIteratorHelperLoose */;
    const formatDaysResult = require(10252) /* _createForOfIteratorHelperLoose */.formatDays(items);
    const _HermesInternal = HermesInternal;
    const obj3 = require(10252) /* _createForOfIteratorHelperLoose */;
    const trimmed = "" + formatDaysResult + " " + require(10252) /* _createForOfIteratorHelperLoose */.getScheduleRuleDateRange(rule.rule).trim();
    const str2 = "" + formatDaysResult + " " + require(10252) /* _createForOfIteratorHelperLoose */.getScheduleRuleDateRange(rule.rule);
    const obj = { type: "RESTRICTED_HOURS_WARNING", title: stringResult, subtitle: trimmed };
    importDefault(686).dispatch(obj);
    const obj4 = importDefault(686);
  }
}
function scheduleUpcomingWarning() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = null;
  }
  const date = new Date();
  let obj = require(6828) /* apexExperiment */;
  let tmp5 = null;
  if (obj.getIsFamilyCenterV3Enabled({ location: "RestrictedHoursManager" })) {
    tmp5 = null;
    if (obj.screenDowntimeReminder) {
      currentUser = currentUser.getCurrentUser();
      let restrictedSchedule;
      if (null != currentUser) {
        restrictedSchedule = currentUser.restrictedSchedule;
      }
      tmp5 = null;
      if (null != restrictedSchedule) {
        const nextStartInfo = restrictedSchedule.getNextStartInfo(date);
        let tmp11 = null;
        if (null != nextStartInfo) {
          obj = { minutesUntil: nextStartInfo.minutesUntil };
          const _Date = Date;
          const date1 = new Date(date);
          obj.startAtMs = date1.setSeconds(0, 0) + 60 * nextStartInfo.minutesUntil * 1000;
          obj.rule = nextStartInfo.rule;
          tmp11 = obj;
        }
        tmp5 = tmp11;
      }
    }
  }
  if (null != tmp5) {
    if (tmp5.minutesUntil <= 16) {
      dispatchWarningIfNeeded(tmp5);
      const _setTimeout2 = setTimeout;
      timeout = setTimeout(() => {
        let closure_13 = null;
        outer1_18();
      }, 60000);
    } else {
      const _Math = Math;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let closure_13 = null;
        outer1_18();
      }, Math.max(0, 60 * (tmp5.minutesUntil - 16) * 1000));
    }
  }
}
function checkAndUpdateModal() {
  const tmp = getCurrentRestrictedHoursState();
  if (tmp !== c11) {
    c11 = tmp;
    let obj = importDefault(686);
    obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: c11 };
    obj.dispatch(obj);
    const obj3 = require(16015) /* closeRestrictedHoursModal */;
    if (c11) {
      const result = obj3.openRestrictedHoursModal();
    } else {
      const result1 = obj3.closeRestrictedHoursModal();
    }
    scheduleUpcomingWarning();
  }
}
function handleLogout() {
  let c11 = false;
  let c14 = null;
  importDefault(686).dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: false });
  if (null != c13) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c13);
    c13 = null;
  }
}
function handleScheduleUpdate() {
  checkAndUpdateModal();
  scheduleUpcomingWarning();
}
function handleScreenDowntimeReminderChanged() {
  scheduleUpcomingWarning();
}
let c11 = false;
let c12 = null;
let c13 = null;
let c14 = null;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default tmp2;
export { getCurrentRestrictedHoursState };
