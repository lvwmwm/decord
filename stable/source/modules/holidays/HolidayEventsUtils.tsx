// Module ID: 17795
// Function ID: 17796
// Name: HolidayEventsUtils
// Dependencies: [17791, 2]

// Module 17795 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17791 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default {
  isEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack() {
    const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != tmp(17791).soundpack) {
        tmp6 = null;
        if (null != tmp(17791).soundpackLabel) {
          const obj2 = { soundpack: tmp(17791).soundpack, soundpackLabel: tmp(17791).soundpackLabel };
          tmp6 = obj2;
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    if (tmp4) {
      appSpinnerSources = tmp2(17791).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(17791).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(17791);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(17791).soundpack) {
        soundpack = tmp(17791).soundpack;
      }
    }
    return soundpack;
  }
};
