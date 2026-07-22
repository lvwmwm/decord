// Module ID: 15856
// Function ID: 121183
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15856 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";

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
  importDefault(dependencyMap[12]).dispatch({ "Null": 38, "Null": 63 });
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
let closure_11 = false;
let closure_12 = null;
let closure_13 = null;
let closure_14 = null;
let tmp2 = (arg0) => {
  class RestrictedHoursManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = __exportStarResult1(this, RestrictedHoursManager);
      items1 = [...items];
      obj = closure_6(RestrictedHoursManager);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      result = map.set(closure_9, closure_21);
      tmp2Result.stores = result.set(closure_10, closure_21);
      obj = { POST_CONNECTION_OPEN: closure_21, CURRENT_USER_UPDATE: closure_21, NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: closure_22, LOGOUT: closure_20 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = RestrictedHoursManager;
  callback2(RestrictedHoursManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      let closure_11 = callback5();
      let obj = callback(closure_2[12]);
      obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: closure_11 };
      obj.dispatch(obj);
      if (closure_11) {
        const result = RestrictedHoursManager(closure_2[14]).openRestrictedHoursModal();
        const obj3 = RestrictedHoursManager(closure_2[14]);
      }
      const interval = setInterval(closure_19, 60000);
      callback6();
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      if (null != closure_12) {
        const _clearInterval = clearInterval;
        clearInterval(closure_12);
        closure_12 = null;
      }
      if (null != closure_13) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_13);
        closure_13 = null;
      }
      let closure_14 = null;
      const result = RestrictedHoursManager(closure_2[14]).closeRestrictedHoursModal();
      let closure_11 = false;
    }
  };
  items[1] = obj;
  return callback(RestrictedHoursManager, items);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default tmp2;
export { getCurrentRestrictedHoursState };
