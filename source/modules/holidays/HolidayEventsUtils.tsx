// Module ID: 16137
// Function ID: 125030
// Name: isEligible
// Dependencies: [16134, 2]

// Module 16137 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(16134).getIsExperimentEligible();
  const obj = importDefault(16134);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(16134).useIsExperimentEligible();
  const obj = importDefault(16134);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(16134).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(16134).endTimeMs;
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
      if (null != importDefault(16134).soundpack) {
        tmp = null;
        if (null != importDefault(16134).soundpackLabel) {
          const obj = { soundpack: importDefault(16134).soundpack, soundpackLabel: importDefault(16134).soundpackLabel };
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
      appSpinnerSources = importDefault(16134).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(16134).getLoadingTips) {
        loadingTips = importDefault(16134).getLoadingTips();
        const obj = importDefault(16134);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(16134).soundpack) {
        soundpack = importDefault(16134).soundpack;
      }
    }
    return soundpack;
  }
};
