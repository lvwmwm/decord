// Module ID: 12625
// Function ID: 98015
// Name: getFirstInstallTimeMillis
// Dependencies: [1194, 587, 12626, 4206, 2]
// Exports: getFirstInstallTimeElapsed

// Module 12625 (getFirstInstallTimeMillis)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getFirstInstallTimeMillis(arg0) {
  const firstInstallTimeMillis = importDefault(12626).getFirstInstallTimeMillis();
  let str = "InstallTimeLaunch";
  if ("authed" === arg0.from) {
    str = "InstallTimeAuthed";
  }
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get(str);
  if (null != value) {
    if (value > 0) {
      let bound = value;
      if (firstInstallTimeMillis > 0) {
        const _Math = Math;
        bound = Math.max(value, firstInstallTimeMillis);
      }
      let num2 = bound;
    }
    return num2;
  }
  if ("authed" === arg0.from) {
    num2 = 0;
    if (authenticated.isAuthenticated()) {
      const _Date2 = Date;
      const timestamp = Date.now();
      const Storage3 = require(587) /* Storage */.Storage;
      const result = Storage3.set(str, timestamp);
      num2 = timestamp;
    }
  } else {
    num2 = firstInstallTimeMillis;
    if (firstInstallTimeMillis <= 0) {
      const _Date = Date;
      num2 = Date.now();
    }
    const Storage2 = require(587) /* Storage */.Storage;
    const result1 = Storage2.set(str, num2);
  }
}
let result = require("enforcing").fileFinishedImporting("modules/install/native/InstallTime.tsx");

export { getFirstInstallTimeMillis };
export const getFirstInstallTimeElapsed = function getFirstInstallTimeElapsed(unit) {
  unit = unit.unit;
  let obj = Object.create(null);
  obj.unit = 0;
  const tmp2 = getFirstInstallTimeMillis(Object.assign(unit, obj));
  if (0 === tmp2) {
    return 0;
  } else {
    const _Date = Date;
    const diff = Date.now() - tmp2;
    let result = diff;
    if (null != unit) {
      obj = require(4206) /* sleep */;
      result = obj.convertMinutesToGivenTimeUnit(diff / require(4206) /* sleep */.MS_PER_MINUTE, unit);
    }
    return result;
  }
};
