// Module ID: 14210
// Function ID: 14211
// Name: useHasNewAdContent
// Dependencies: [32, 14211, 8323, 1088, 504, 8330, 6847, 9519, 4845, 2]
// Exports: default

// Module 14210 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1088 */;
import AdCreativeType from "AdCreativeType" /* 6847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14211 */;
import QuestStore from "QuestStore" /* 8323 */;
import size from "module_2" /* 2 */;

let quests;

const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  let stateFromStoresArray;
  let tmp = stateFromStoresArray;
  let tmp2 = dependencyMap;
  let obj = stateFromStoresArray(504);
  const items = [QuestStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const arr = Array.from(quests.values());
    const found = arr.filter((item) => {
      const obj = stateFromStoresArray(closure_1_1[5]);
      return !obj.isQuestExpired(item);
    });
    return found.map((id) => id.id);
  }, []);
  const items1 = [AdContentSeenStore];
  const items2 = [stateFromStoresArray];
  const obj2 = stateFromStoresArray(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => {
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
  }, items2);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = stateFromStoresArray(9519).useSelectedTimeRecurringDismissibleContent;
  stateFromStoresArray(9519);
  if (stateFromStores) {
    prop = tmp(4845).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const obj3 = { cooldownDurationMs: DAY };
  const tmp7 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj3, undefined, true), 2);
  return { showBadge: null != tmp7[0], dismissBadge: tmp7[1] };
};
