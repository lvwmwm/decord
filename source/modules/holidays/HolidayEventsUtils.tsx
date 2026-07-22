// Module ID: 15950
// Function ID: 122318
// Name: isEligible
// Dependencies: []

// Module 15950 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(dependencyMap[0]).getIsExperimentEligible();
  const obj = importDefault(dependencyMap[0]);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(dependencyMap[0]).useIsExperimentEligible();
  const obj = importDefault(dependencyMap[0]);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(dependencyMap[0]).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(dependencyMap[0]).endTimeMs;
  }
  return tmp2;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible,
  useHolidaySoundpack() {
    let tmp = null;
    if (useIsEligible()) {
      tmp = null;
      if (null != importDefault(dependencyMap[0]).soundpack) {
        tmp = null;
        if (null != importDefault(dependencyMap[0]).soundpackLabel) {
          const obj = { soundpack: importDefault(dependencyMap[0]).soundpack, soundpackLabel: importDefault(dependencyMap[0]).soundpackLabel };
          tmp = obj;
        }
      }
    }
    return tmp;
  },
  useIsEligible,
  getAppSpinnerSources() {
    let appSpinnerSources = null;
    if (isHolidayHappening()) {
      appSpinnerSources = importDefault(dependencyMap[0]).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(dependencyMap[0]).getLoadingTips) {
        loadingTips = importDefault(dependencyMap[0]).getLoadingTips();
        const obj = importDefault(dependencyMap[0]);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(dependencyMap[0]).soundpack) {
        soundpack = importDefault(dependencyMap[0]).soundpack;
      }
    }
    return soundpack;
  }
};
