// Module ID: 17794
// Function ID: 17795
// Name: HolidayEventsUtils
// Dependencies: [17790, 558, 568, 2]

// Module 17794 (HolidayEventsUtils)
import c from "c" /* 568 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17790 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
  if (cResult[0] !== isExperimentEligible) {
    const _Date = Date;
    const timestamp = Date.now();
    const tmp8 = timestamp >= tmp3(17790).startTimeMs && timestamp <= tmp3(17790).endTimeMs && isExperimentEligible;
    cResult[0] = isExperimentEligible;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const isExperimentEligible = HolidayEventsConfigDefault.useIsExperimentEligible();
  const timestamp = Date.now();
  return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
});
let closure_3 = tmp2;
let obj = {
  isEligible() {
    const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
    const timestamp = Date.now();
    return timestamp >= HolidayEventsConfigDefault.startTimeMs && timestamp <= HolidayEventsConfigDefault.endTimeMs && isExperimentEligible;
  },
  useHolidaySoundpack: null,
  useIsEligible: null,
  getAppSpinnerSources: null,
  getLoadingTips: null,
  getHolidaySoundpack: null
};
let ReactCompilerGating = ReactCompilerGating_mod;
obj.useHolidaySoundpack = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp3 = closure_3();
  if (cResult[0] !== tmp3) {
    let tmp6 = null;
    if (tmp3) {
      tmp6 = null;
      if (null != HolidayEventsConfigDefault.soundpack) {
        tmp6 = null;
        if (null != tmp7(17790).soundpackLabel) {
          const obj2 = { soundpack: tmp7(17790).soundpack, soundpackLabel: tmp7(17790).soundpackLabel };
          tmp6 = obj2;
        }
      }
    }
    cResult[0] = tmp3;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  let tmp = null;
  if (closure_3()) {
    tmp = null;
    if (null != HolidayEventsConfigDefault.soundpack) {
      tmp = null;
      if (null != tmp2(17790).soundpackLabel) {
        const obj = { soundpack: tmp2(17790).soundpack, soundpackLabel: tmp2(17790).soundpackLabel };
        tmp = obj;
      }
    }
  }
  return tmp;
});
obj.useIsEligible = tmp2;
obj.getAppSpinnerSources = function getAppSpinnerSources() {
  const timestamp = Date.now();
  let appSpinnerSources = null;
  if (tmp4) {
    appSpinnerSources = tmp2(17790).appSpinnerSources;
  }
  return appSpinnerSources;
};
obj.getLoadingTips = function getLoadingTips() {
  const timestamp = Date.now();
  let tmp5 = null;
  if (tmp4) {
    const getLoadingTips = tmp2(17790).getLoadingTips;
    let loadingTips;
    if (getLoadingTips != null) {
      loadingTips = getLoadingTips();
    }
    tmp5 = loadingTips;
    const tmp2Result = tmp2(17790);
  }
  return tmp5;
};
obj.getHolidaySoundpack = function getHolidaySoundpack() {
  const isExperimentEligible = HolidayEventsConfigDefault.getIsExperimentEligible();
  const timestamp = Date.now();
  let soundpack = null;
  if (tmp5) {
    soundpack = null;
    if (null != tmp(17790).soundpack) {
      soundpack = tmp(17790).soundpack;
    }
  }
  return soundpack;
};
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsUtils.tsx");

export default obj;
