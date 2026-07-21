// Module ID: 15848
// Function ID: 121140
// Name: _isNativeReflectConstruct
// Dependencies: [131079, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15848 (_isNativeReflectConstruct)
import tmp2 from "result";
import result from "result";

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
  if (combined !== closure_14) {
    const startAtMs = rule.startAtMs;
    const intl = arg1(dependencyMap[8]).intl;
    const _Date = Date;
    const date = new Date(startAtMs);
    const stringResult = intl.string(importDefault(dependencyMap[9]).0JlDg0);
    const items = [arg1(dependencyMap[10]).JS_DAY_TO_DAY_OF_WEEK[date.getDay(date)]];
    const obj2 = arg1(dependencyMap[11]);
    const formatDaysResult = arg1(dependencyMap[11]).formatDays(items);
    const _HermesInternal = HermesInternal;
    const obj3 = arg1(dependencyMap[11]);
    const trimmed = "" + formatDaysResult + " " + arg1(dependencyMap[11]).getScheduleRuleDateRange(rule.rule).trim();
    const str2 = "" + formatDaysResult + " " + arg1(dependencyMap[11]).getScheduleRuleDateRange(rule.rule);
    const obj = { type: "RESTRICTED_HOURS_WARNING", title: stringResult, subtitle: trimmed };
    importDefault(dependencyMap[12]).dispatch(obj);
    closure_14 = combined;
    const obj4 = importDefault(dependencyMap[12]);
  }
}
function scheduleUpcomingWarning() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    let timeout = null;
  }
  const date = new Date();
  let obj = arg1(dependencyMap[13]);
  let tmp5 = null;
  if (obj.getIsFamilyCenterV3Enabled({ location: "RestrictedHoursManager" })) {
    tmp5 = null;
    if (obj.screenDowntimeReminder) {
      const currentUser = currentUser.getCurrentUser();
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
        callback();
      }, 60000);
    } else {
      const _Math = Math;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let closure_13 = null;
        callback();
      }, Math.max(0, 60 * (tmp5.minutesUntil - 16) * 1000));
    }
  }
}
function checkAndUpdateModal() {
  const tmp = getCurrentRestrictedHoursState();
  if (tmp !== closure_11) {
    closure_11 = tmp;
    let obj = importDefault(dependencyMap[12]);
    obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: closure_11 };
    obj.dispatch(obj);
    const obj3 = arg1(dependencyMap[14]);
    if (closure_11) {
      const result = obj3.openRestrictedHoursModal();
    } else {
      const result1 = obj3.closeRestrictedHoursModal();
    }
    scheduleUpcomingWarning();
  }
}
function handleLogout() {
  let closure_11 = false;
  let closure_14 = null;
  importDefault(dependencyMap[12]).dispatch({});
  if (null != closure_13) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_13);
    closure_13 = null;
  }
}
function handleScheduleUpdate() {
  checkAndUpdateModal();
  scheduleUpcomingWarning();
}
function handleScreenDowntimeReminderChanged() {
  scheduleUpcomingWarning();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = false;
let closure_12 = null;
let closure_13 = null;
let closure_14 = null;
tmp2 = new tmp2();
result = result.fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default tmp2;
export { getCurrentRestrictedHoursState };
