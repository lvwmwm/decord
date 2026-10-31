// Module ID: 19483
// Function ID: 19484
// Name: HolidayEventsUtils
// Dependencies: [19479, 2]

// Module 19483 (HolidayEventsUtils)
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 19479 */;
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
      appSpinnerSources = tmp2(19479).appSpinnerSources;
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
        soundpack = tmp(19479).soundpack;
      }
    }
    return soundpack;
  }
};
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default obj;
