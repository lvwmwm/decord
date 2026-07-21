// Module ID: 12506
// Function ID: 95831
// Name: getFirstInstallTimeMillis
// Dependencies: []
// Exports: getFirstInstallTimeElapsed

// Module 12506 (getFirstInstallTimeMillis)
function getFirstInstallTimeMillis(arg0) {
  const firstInstallTimeMillis = importDefault(dependencyMap[2]).getFirstInstallTimeMillis();
  let str = "InstallTimeLaunch";
  if ("authed" === arg0.from) {
    str = "InstallTimeAuthed";
  }
  const Storage = arg1(dependencyMap[1]).Storage;
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
      const Storage3 = arg1(dependencyMap[1]).Storage;
      const result = Storage3.set(str, timestamp);
      num2 = timestamp;
    }
  } else {
    num2 = firstInstallTimeMillis;
    if (firstInstallTimeMillis <= 0) {
      const _Date = Date;
      num2 = Date.now();
    }
    const Storage2 = arg1(dependencyMap[1]).Storage;
    const result1 = Storage2.set(str, num2);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/install/native/InstallTime.tsx");

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
      obj = arg1(dependencyMap[3]);
      result = obj.convertMinutesToGivenTimeUnit(diff / arg1(dependencyMap[3]).MS_PER_MINUTE, unit);
    }
    return result;
  }
};
