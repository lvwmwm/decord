// Module ID: 13271
// Function ID: 13272
// Name: useEmitAppealIngestionEvent
// Dependencies: [19, 7986, 7962, 1072, 504, 13263, 13265, 1253, 2]
// Exports: useEmitAppealIngestionEvent

// Module 13271 (useEmitAppealIngestionEvent)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7962 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_5 = SafetyHubConstants.SafetyHubAnalyticsActionSource;
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export function useEmitAppealIngestionEvent() {
  let AppealIngestion;
  let safetyHubAccountStanding;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = safetyHubAccountStanding;
  let obj = stateFromStores(safetyHubAccountStanding[4]);
  let items = [SafetyHubStore];
  let tmp3 = SafetyHubStore;
  stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  let tmp6 = stateFromStores;
  const useSafetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification;
  stateFromStores(safetyHubAccountStanding[5]);
  if (stateFromStores == null) {
    tmp6 = closure_6;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp6);
  const tmpResult = tmp(tmp2[6]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  const items1 = [tmp3];
  const tmpResult2 = tmp(tmp2[4]);
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
}
