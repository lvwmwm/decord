// Module ID: 16114
// Function ID: 124815
// Name: isEligible
// Dependencies: [16111, 2]

// Module 16114 (isEligible)
function isEligible() {
  const isExperimentEligible = importDefault(16111).getIsExperimentEligible();
  const obj = importDefault(16111);
  return isHolidayHappening() && isExperimentEligible;
}
function useIsEligible() {
  const isExperimentEligible = importDefault(16111).useIsExperimentEligible();
  const obj = importDefault(16111);
  return isHolidayHappening() && isExperimentEligible;
}
function isHolidayHappening() {
  const timestamp = Date.now();
  let tmp2 = timestamp >= importDefault(16111).startTimeMs;
  if (tmp2) {
    tmp2 = timestamp <= importDefault(16111).endTimeMs;
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
      if (null != importDefault(16111).soundpack) {
        tmp = null;
        if (null != importDefault(16111).soundpackLabel) {
          const obj = { soundpack: importDefault(16111).soundpack, soundpackLabel: importDefault(16111).soundpackLabel };
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
      appSpinnerSources = importDefault(16111).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    let tmp = null;
    if (isHolidayHappening()) {
      let loadingTips;
      if (null != importDefault(16111).getLoadingTips) {
        loadingTips = importDefault(16111).getLoadingTips();
        const obj = importDefault(16111);
      }
      tmp = loadingTips;
    }
    return tmp;
  },
  getHolidaySoundpack() {
    let soundpack = null;
    if (isEligible()) {
      soundpack = null;
      if (null != importDefault(16111).soundpack) {
        soundpack = importDefault(16111).soundpack;
      }
    }
    return soundpack;
  }
};
