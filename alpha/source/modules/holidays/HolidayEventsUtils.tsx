// Module ID: 17376
// Function ID: 17377
// Name: HolidayEventsUtils
// Dependencies: [17372, 2]

// Module 17376 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17372 */;
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
      if (null != tmp(17372).soundpack) {
        tmp6 = null;
        if (null != tmp(17372).soundpackLabel) {
          const obj2 = { soundpack: tmp(17372).soundpack, soundpackLabel: tmp(17372).soundpackLabel };
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
      appSpinnerSources = tmp2(17372).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(17372).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(17372);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(17372).soundpack) {
        soundpack = tmp(17372).soundpack;
      }
    }
    return soundpack;
  }
};
