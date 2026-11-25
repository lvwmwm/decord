// Module ID: 9882
// Function ID: 9883
// Name: AdDeliveryActionCreators
// Dependencies: [572, 2]
// Exports: clearQuestAdDecision

// Module 9882 (AdDeliveryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/AdDeliveryActionCreators.tsx");

export function clearQuestAdDecision(placement, arg1, refetchOnFocus) {
  const obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, responseTtlSeconds: arg1 / 1000, fetchedAt: Date.now(), refetchOnFocus };
  obj.dispatch(obj2);
}
