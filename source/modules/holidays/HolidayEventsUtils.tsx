// Module ID: 16176
// Function ID: 125186
// Name: isEligible
// Dependencies: [16173, 2]

// Module 16176 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(16173).getIsExperimentEligible();
  const obj = importDefault(16173);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(16173).useIsExperimentEligible();
  const obj = importDefault(16173);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(16173).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(16173).endTimeMs;
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
      if (null != importDefault(16173).soundpack) {
        tmp = null;
        if (null != importDefault(16173).soundpackLabel) {
          const obj = { soundpack: importDefault(16173).soundpack, soundpackLabel: importDefault(16173).soundpackLabel };
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
      appSpinnerSources = importDefault(16173).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(16173).getLoadingTips) {
        loadingTips = importDefault(16173).getLoadingTips();
        const obj = importDefault(16173);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(16173).soundpack) {
        soundpack = importDefault(16173).soundpack;
      }
    }
    return soundpack;
  }
};
