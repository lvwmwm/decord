// Module ID: 17790
// Function ID: 17791
// Name: HolidayEventsUtils
// Dependencies: [17786, 2]

// Module 17790 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17786 */;
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
      if (null != tmp(17786).soundpack) {
        tmp6 = null;
        if (null != tmp(17786).soundpackLabel) {
          const obj2 = { soundpack: tmp(17786).soundpack, soundpackLabel: tmp(17786).soundpackLabel };
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
      appSpinnerSources = tmp2(17786).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    if (tmp4) {
      const getLoadingTips = tmp2(17786).getLoadingTips;
      let loadingTips;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
      const tmp2Result = tmp2(17786);
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    if (tmp5) {
      soundpack = null;
      if (null != tmp(17786).soundpack) {
        soundpack = tmp(17786).soundpack;
      }
    }
    return soundpack;
  }
};
