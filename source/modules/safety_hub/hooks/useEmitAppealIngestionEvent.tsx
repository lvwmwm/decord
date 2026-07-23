// Module ID: 11043
// Function ID: 85982
// Name: useEmitAppealIngestionEvent
// Dependencies: [31, 11026, 7544, 653, 566, 11031, 11033, 675, 2]
// Exports: useEmitAppealIngestionEvent

// Module 11043 (useEmitAppealIngestionEvent)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SafetyHubAnalyticsActionSource as closure_5 } from "SafetyHubLinks";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_6, AnalyticEvents: closure_7 } = ME);
const result = require("SafetyHubLinks").fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  let items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items, () => outer1_4.getAppealClassificationId());
  let obj = stateFromStores(safetyHubAccountStanding[4]);
  let tmp2 = stateFromStores;
  if (null == stateFromStores) {
    tmp2 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification(tmp2);
  const obj2 = stateFromStores(safetyHubAccountStanding[5]);
  safetyHubAccountStanding = stateFromStores(safetyHubAccountStanding[6]).useSafetyHubAccountStanding();
  const obj3 = stateFromStores(safetyHubAccountStanding[6]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items1, () => outer1_4.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    let obj = safetyHubClassification(safetyHubAccountStanding[7]);
    obj = { action, account_standing: safetyHubAccountStanding.state };
    let tmp = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(stateFromStores)];
      tmp = items;
    }
    obj.classification_ids = tmp;
    obj.source = outer1_5.AppealIngestion;
    obj.is_dsa_eligible = stateFromStores1;
    obj.violation_type = safetyHubClassification.violationType;
    obj.track(outer1_7.SAFETY_HUB_ACTION, obj);
  }, items2);
};
