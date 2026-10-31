// Module ID: 17037
// Function ID: 17038
// Name: useOrbsArcadeEnrollmentPause
// Dependencies: [32, 19, 7625, 1089, 4836, 2]
// Exports: default

// Module 17037 (useOrbsArcadeEnrollmentPause)
import DateUtils from "DateUtils" /* 4836 */;
import useIntervalDefault from "useInterval" /* 7625 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const DurationsDefault = tmp3(1089);
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadeEnrollmentPause.tsx");

export default function useOrbsArcadeEnrollmentPause(endsAt, expiresAt) {
  let closure_129_0;
  let enrollmentClosesAt;
  let tmp2;
  let tmp8;
  let windowEndsAt;
  ({ windowEndsAt, enrollmentClosesAt } = endsAt);
  [tmp2, closure_129_0] = react.useState(Date.now);
  let MINUTE = null;
  _slicedToArray(react.useState(Date.now), 2);
  const tmp5 = useIntervalDefault;
  if (null != windowEndsAt) {
    MINUTE = DurationsDefault.Millis.MINUTE;
  }
  tmp5(() => closure_1_0(Date.now()), MINUTE);
  if (null == expiresAt) {
    tmp8 = null;
    if (null != windowEndsAt) {
      tmp8 = null;
      if (null != enrollmentClosesAt) {
        const _Date2 = Date;
        tmp8 = null;
        if (tmp2 >= Date.parse(enrollmentClosesAt)) {
          const _Date3 = Date;
          tmp8 = null;
          if (tmp2 < Date.parse(windowEndsAt)) {
            let diffAsUnitsResult;
            if (null == endsAt.endsAt) {
              const _Date6 = Date;
              const obj = DateUtils;
              diffAsUnitsResult = obj.diffAsUnits(tmp2, Date.parse(windowEndsAt));
            } else {
              const _Date4 = Date;
              const _Date5 = Date;
              const parsed = Date.parse(windowEndsAt);
              diffAsUnitsResult = null;
            }
            tmp8 = { timeUntilNextRound: diffAsUnitsResult };
            const obj2 = { timeUntilNextRound: diffAsUnitsResult };
          }
        }
      }
    }
  } else {
    tmp8 = null;
    if (null != expiresAt.expiresAt) {
      const _Date = Date;
      tmp8 = null;
    }
  }
  return tmp8;
};
