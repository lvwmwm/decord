// Module ID: 12781
// Function ID: 12782
// Name: useEmitAppealIngestionEvent
// Dependencies: [19, 7907, 7883, 1087, 558, 576, 504, 12773, 12775, 1267, 2]

// Module 12781 (useEmitAppealIngestionEvent)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7883 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7907 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_5 = SafetyHubConstants.SafetyHubAnalyticsActionSource;
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmitAppealIngestionEvent() {
  let AppealIngestion;
  let safetyHubAccountStanding;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  const tmp = stateFromStores;
  const tmp2 = safetyHubAccountStanding;
  let obj = stateFromStores(safetyHubAccountStanding[5]);
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SafetyHubStore];
    const fn = function o() {
      return SafetyHubStore.getAppealClassificationId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp9 = stateFromStores;
  const useSafetyHubClassification = tmp(tmp2[7]).useSafetyHubClassification;
  tmp(tmp2[7]);
  if (stateFromStores == null) {
    tmp9 = closure_6;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp9);
  const tmpResult5 = tmp(tmp2[8]);
  safetyHubAccountStanding = tmpResult5.useSafetyHubAccountStanding();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    const fn2 = function p() {
      return SafetyHubStore.getIsDsaEligible();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp13 = fn2;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp13);
  if (cResult[4] === safetyHubAccountStanding.state) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === safetyHubClassification.violationType) {
        let tmp16;
        if (cResult[7] === stateFromStores1) {
          tmp16 = cResult[8];
        }
        return tmp16;
      }
    }
  }
  const fn3 = function b(action) {
    let tmp3;
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: tmp3, source: AppealIngestion.AppealIngestion, is_dsa_eligible: stateFromStores1, violation_type: safetyHubClassification.violationType };
    tmp3 = null;
    const track = AnalyticsUtilsDefault.track;
    const SAFETY_HUB_ACTION = metroImportDefault.SAFETY_HUB_ACTION;
    AnalyticsUtilsDefault;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp2)];
      tmp3 = items;
    }
    track(SAFETY_HUB_ACTION, obj);
  };
  cResult[4] = safetyHubAccountStanding.state;
  cResult[5] = stateFromStores;
  cResult[6] = safetyHubClassification.violationType;
  cResult[7] = stateFromStores1;
  cResult[8] = fn3;
  tmp16 = fn3;
}) : (function useEmitAppealIngestionEvent() {
  let AppealIngestion;
  let safetyHubAccountStanding;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = safetyHubAccountStanding;
  let obj = stateFromStores(safetyHubAccountStanding[6]);
  let items = [SafetyHubStore];
  let tmp3 = SafetyHubStore;
  stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  let tmp6 = stateFromStores;
  const useSafetyHubClassification = stateFromStores(safetyHubAccountStanding[7]).useSafetyHubClassification;
  stateFromStores(safetyHubAccountStanding[7]);
  if (stateFromStores == null) {
    tmp6 = closure_6;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp6);
  const tmpResult = tmp(tmp2[8]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  const items1 = [tmp3];
  const tmpResult2 = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult2.useStateFromStores(items1, () => SafetyHubStore.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    let tmp3;
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: tmp3, source: AppealIngestion.AppealIngestion, is_dsa_eligible: stateFromStores1, violation_type: safetyHubClassification.violationType };
    tmp3 = null;
    const track = AnalyticsUtilsDefault.track;
    const SAFETY_HUB_ACTION = metroImportDefault.SAFETY_HUB_ACTION;
    AnalyticsUtilsDefault;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp2)];
      tmp3 = items;
    }
    track(SAFETY_HUB_ACTION, obj);
  }, items2);
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = tmp3;
