// Module ID: 16463
// Function ID: 16464
// Name: HolidayEmojiAnimationType
// Dependencies: [16460, 2]

// Module 16463 (HolidayEmojiAnimationType)
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = importDefault(16460).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16460);
    const tmp = importDefault;
    return timestamp >= importDefault(16460).startTimeMs && timestamp <= importDefault(16460).endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = importDefault(16460);
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16460).soundpack) {
        tmp6 = null;
        if (null != tmp(16460).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16460).soundpack;
          obj[1] = tmp(16460).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = importDefault(16460).useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16460);
    const tmp = importDefault;
    return timestamp >= importDefault(16460).startTimeMs && timestamp <= importDefault(16460).endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16460).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16460).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16460);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = importDefault(16460).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16460);
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16460).soundpack) {
        soundpack = tmp(16460).soundpack;
      }
    }
    return soundpack;
  }
};
