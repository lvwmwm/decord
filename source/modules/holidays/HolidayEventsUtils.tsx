// Module ID: 16125
// Function ID: 124983
// Name: isEligible
// Dependencies: [16122, 2]

// Module 16125 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(16122).getIsExperimentEligible();
  const obj = importDefault(16122);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(16122).useIsExperimentEligible();
  const obj = importDefault(16122);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(16122).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(16122).endTimeMs;
  }
  return tmp2;
}
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible,
  useHolidaySoundpack() {
    let tmp = null;
    if (useIsEligible()) {
      tmp = null;
      if (null != importDefault(16122).soundpack) {
        tmp = null;
        if (null != importDefault(16122).soundpackLabel) {
          const obj = { soundpack: importDefault(16122).soundpack, soundpackLabel: importDefault(16122).soundpackLabel };
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
      appSpinnerSources = importDefault(16122).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(16122).getLoadingTips) {
        loadingTips = importDefault(16122).getLoadingTips();
        const obj = importDefault(16122);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(16122).soundpack) {
        soundpack = importDefault(16122).soundpack;
      }
    }
    return soundpack;
  }
};
