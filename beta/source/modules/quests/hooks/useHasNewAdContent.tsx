// Module ID: 16605
// Function ID: 16606
// Name: useHasNewAdContent
// Dependencies: [32, 14609, 7116, 5756, 1091, 10709, 504, 7112, 5763, 6806, 2029, 2]
// Exports: default

// Module 16605 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1091 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14609 */;
import QuestStore from "QuestStore" /* 7116 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  let enabled;
  let stateFromStoresArray;
  let tmp = enabled;
  let tmp2 = stateFromStoresArray;
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [QuestStore];
  const items1 = [enabled];
  const obj2 = enabled(stateFromStoresArray[6]);
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let mapped;
    const tmp = enabled;
    if (tmp) {
      const _Array = Array;
      const quests = QuestStore.quests;
      const arr = Array.from(quests.values());
      const found = arr.filter((item) => {
        const obj = enabled(stateFromStoresArray[7]);
        return !obj.isQuestExpired(item);
      });
      mapped = found.map((id) => id.id);
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const items2 = [AdContentSeenStore];
  const items3 = [stateFromStoresArray];
  const obj3 = enabled(stateFromStoresArray[6]);
  const stateFromStores = obj3.useStateFromStores(items2, () => {
    for (const item10005 of stateFromStoresArray) {
      if (AdContentSeenStore.hasSeen(AdCreativeType.AdCreativeType.QUEST, item10005)) {
        continue;
      } else {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }, items3);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = enabled(stateFromStoresArray[9]).useSelectedTimeRecurringDismissibleContent;
  enabled(stateFromStoresArray[9]);
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[10]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const obj4 = { cooldownDurationMs: DAY };
  const tmp7 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj4, undefined, true), 2);
  return { showBadge: null != tmp7[0], dismissBadge: tmp7[1] };
};
