// Module ID: 17152
// Function ID: 17153
// Name: HolidayEventsUtils
// Dependencies: [17148, 2]

// Module 17152 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17148 */;
import size from "module_2" /* 2 */;

let obj = {
  isEligible() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.getIsExperimentEligible();
    const timestamp = Date.now();
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    return tmp5;
  },
  useHolidaySoundpack() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    let tmp6 = null;
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    if (tmp5) {
      tmp6 = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        tmp6 = null;
        if (null != HolidayEventsConfigDefault.soundpackLabel) {
          tmp6 = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
          const obj2 = { soundpack: HolidayEventsConfigDefault.soundpack, soundpackLabel: HolidayEventsConfigDefault.soundpackLabel };
        }
      }
    }
    return tmp6;
  },
  useIsEligible() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.useIsExperimentEligible();
    const timestamp = Date.now();
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    return tmp5;
  },
  getAppSpinnerSources() {
    const timestamp = Date.now();
    let appSpinnerSources = null;
    const tmp4 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs;
    if (tmp4) {
      appSpinnerSources = tmp2(17148).appSpinnerSources;
    }
    return appSpinnerSources;
  },
  getLoadingTips() {
    const timestamp = Date.now();
    let tmp5 = null;
    const tmp4 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs;
    if (tmp4) {
      const getLoadingTips = HolidayEventsConfigDefault.getLoadingTips;
      let loadingTips;
      HolidayEventsConfigDefault;
      if (getLoadingTips != null) {
        loadingTips = getLoadingTips();
      }
      tmp5 = loadingTips;
    }
    return tmp5;
  },
  getHolidaySoundpack() {
    const obj = HolidayEventsConfigDefault;
    const isExperimentEligible = obj.getIsExperimentEligible();
    const timestamp = Date.now();
    let soundpack = null;
    const tmp5 = timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
    if (tmp5) {
      soundpack = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        soundpack = tmp(17148).soundpack;
      }
    }
    return soundpack;
  }
};
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default obj;
