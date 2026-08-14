// Module ID: 16546
// Function ID: 16547
// Name: HolidayEmojiAnimationType
// Dependencies: [16543, 2]

// Module 16546 (HolidayEmojiAnimationType)
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = importDefault(16543).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16543);
    const tmp = importDefault;
    return timestamp >= importDefault(16543).startTimeMs && timestamp <= importDefault(16543).endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = importDefault(16543);
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16543).soundpack) {
        tmp6 = null;
        if (null != tmp(16543).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16543).soundpack;
          obj[1] = tmp(16543).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = importDefault(16543).useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16543);
    const tmp = importDefault;
    return timestamp >= importDefault(16543).startTimeMs && timestamp <= importDefault(16543).endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16543).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16543).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16543);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = importDefault(16543).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16543);
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16543).soundpack) {
        soundpack = tmp(16543).soundpack;
      }
    }
    return soundpack;
  }
};
