// Module ID: 11033
// Function ID: 85932
// Name: useEmitAppealIngestionEvent
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useEmitAppealIngestionEvent

// Module 11033 (useEmitAppealIngestionEvent)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { SafetyHubAnalyticsActionSource as closure_5 } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ EMPTY_STRING_SNOWFLAKE_ID: closure_6, AnalyticEvents: closure_7 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => store.getAppealClassificationId());
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  let tmp2 = stateFromStores;
  if (null == stateFromStores) {
    tmp2 = closure_6;
  }
  const safetyHubClassification = arg1(dependencyMap[5]).useSafetyHubClassification(tmp2);
  const importDefault = safetyHubClassification;
  const obj2 = arg1(dependencyMap[5]);
  const safetyHubAccountStanding = arg1(dependencyMap[6]).useSafetyHubAccountStanding();
  const dependencyMap = safetyHubAccountStanding;
  const obj3 = arg1(dependencyMap[6]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => store.getIsDsaEligible());
  const React = stateFromStores1;
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return React.useCallback((action) => {
    let obj = safetyHubClassification(safetyHubAccountStanding[7]);
    obj = { action, account_standing: safetyHubAccountStanding.state };
    let tmp = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(stateFromStores)];
      tmp = items;
    }
    obj.classification_ids = tmp;
    obj.source = AppealIngestion.AppealIngestion;
    obj.is_dsa_eligible = stateFromStores1;
    obj.violation_type = safetyHubClassification.violationType;
    obj.track(constants.SAFETY_HUB_ACTION, obj);
  }, items2);
};
