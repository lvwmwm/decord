// Module ID: 16211
// Function ID: 16212
// Name: HolidayEmojiAnimationType
// Dependencies: [16208, 2]

// Module 16211 (HolidayEmojiAnimationType)
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = importDefault(16208).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16208);
    const tmp = importDefault;
    return timestamp >= importDefault(16208).startTimeMs && timestamp <= importDefault(16208).endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    let obj = importDefault(16208);
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(16208).soundpack) {
        tmp6 = null;
        if (null != tmp(16208).soundpackLabel) {
          obj = { soundpack: null, soundpackLabel: null };
          obj[0] = tmp(16208).soundpack;
          obj[1] = tmp(16208).soundpackLabel;
          tmp6 = obj;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = importDefault(16208).useIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16208);
    const tmp = importDefault;
    return timestamp >= importDefault(16208).startTimeMs && timestamp <= importDefault(16208).endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(16208).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(16208).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(16208);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = importDefault(16208).getIsExperimentEligible();
    const timestamp = Date.now();
    const obj = importDefault(16208);
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(16208).soundpack) {
        soundpack = tmp(16208).soundpack;
      }
    }
    return soundpack;
  }
};
