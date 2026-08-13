// Module ID: 16533
// Function ID: 16534
// Name: HolidayEmojiAnimationType
// Dependencies: [16530, 2]

// Module 16533 (HolidayEmojiAnimationType)
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = importDefault(16530).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16530);
    const tmp = importDefault;
    return timestamp >= importDefault(16530).startTimeMs && timestamp <= importDefault(16530).endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = importDefault(16530);
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16530).soundpack) {
        tmp6 = null;
        if (null != tmp(16530).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16530).soundpack;
          obj[1] = tmp(16530).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = importDefault(16530).useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16530);
    const tmp = importDefault;
    return timestamp >= importDefault(16530).startTimeMs && timestamp <= importDefault(16530).endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16530).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16530).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16530);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = importDefault(16530).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16530);
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16530).soundpack) {
        soundpack = tmp(16530).soundpack;
      }
    }
    return soundpack;
  }
};
