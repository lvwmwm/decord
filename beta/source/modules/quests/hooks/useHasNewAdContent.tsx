// Module ID: 17262
// Function ID: 17263
// Name: useHasNewAdContent
// Dependencies: [32, 15350, 7971, 5693, 1091, 11773, 504, 7967, 5700, 7662, 2027, 2]
// Exports: default

// Module 17262 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1091 */;
import AdCreativeType from "AdCreativeType" /* 5700 */;
import _slicedToArray from "module_32" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 15350 */;
import QuestStore from "QuestStore" /* 7971 */;

require = fn;
const QuestsExperimentLocations = fn(5693).QuestsExperimentLocations;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig({ location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER }).enabled;
  const items = [QuestStore];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = QuestStore.quests;
      const found = Array.from(quests.values()).filter((item) => !enabled(stateFromStoresArray[7]).isQuestExpired(item));
      let mapped = found.map((id) => id.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  const obj2 = enabled(stateFromStoresArray[6]);
  let tmp = enabled;
  let tmp2 = stateFromStoresArray;
  const items2 = [AdContentSeenStore];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[6]).useStateFromStores(items2, () => {
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
  const obj3 = enabled(stateFromStoresArray[6]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[10]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const tmp6 = _slicedToArray(enabled(stateFromStoresArray[9]).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: DAY }, undefined, true), 2);
  return { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
};
