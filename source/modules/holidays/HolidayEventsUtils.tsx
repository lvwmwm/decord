// Module ID: 16067
// Function ID: 124491
// Name: isEligible
// Dependencies: [16064, 2]

// Module 16067 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(16064).getIsExperimentEligible();
  const obj = importDefault(16064);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(16064).useIsExperimentEligible();
  const obj = importDefault(16064);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(16064).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(16064).endTimeMs;
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
      if (null != importDefault(16064).soundpack) {
        tmp = null;
        if (null != importDefault(16064).soundpackLabel) {
          const obj = { soundpack: importDefault(16064).soundpack, soundpackLabel: importDefault(16064).soundpackLabel };
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
      appSpinnerSources = importDefault(16064).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(16064).getLoadingTips) {
        loadingTips = importDefault(16064).getLoadingTips();
        const obj = importDefault(16064);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(16064).soundpack) {
        soundpack = importDefault(16064).soundpack;
      }
    }
    return soundpack;
  }
};
