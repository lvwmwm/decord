// Module ID: 9563
// Function ID: 9564
// Name: useHasNewAdContent
// Dependencies: [32, 9564, 7776, 1104, 558, 576, 7782, 504, 6717, 7496, 4807, 2]

// Module 9563 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1104 */;
import AdCreativeType from "AdCreativeType" /* 6717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 9564 */;
import QuestStore from "QuestStore" /* 7776 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let quests;

const DAY = DurationsDefault.Millis.DAY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasNewAdContent() {
  let stateFromStoresArray;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = stateFromStoresArray;
  let tmp2 = dependencyMap;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function l() {
      quests = quests.quests;
      const arr = Array.from(quests.values());
      const found = arr.filter((item) => {
        const obj = stateFromStoresArray(closure_1_1[6]);
        return !obj.isQuestExpired(item);
      });
      return found.map((id) => id.id);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AdContentSeenStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStoresArray) {
    const fn2 = function _() {
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
    };
    const items3 = [stateFromStoresArray];
    cResult[4] = stateFromStoresArray;
    cResult[5] = fn2;
    cResult[6] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs: DAY };
    cResult[7] = obj2;
    tmp14 = obj2;
  } else {
    tmp14 = cResult[7];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = tmp(7496).useSelectedTimeRecurringDismissibleContent;
  tmp(7496);
  if (stateFromStores) {
    prop = tmp(4807).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const tmp18 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, tmp14, undefined, true), 2);
  if (cResult[8] === tmp18[1]) {
    let tmp21;
    if (cResult[9] === null != tmp18[0]) {
      tmp21 = cResult[10];
    }
    return tmp21;
  }
  const obj3 = { showBadge: null != tmp18[0], dismissBadge: tmp18[1] };
  cResult[8] = tmp18[1];
  cResult[9] = null != tmp18[0];
  cResult[10] = obj3;
  tmp21 = obj3;
}) : (function useHasNewAdContent() {
  let stateFromStoresArray;
  let tmp = stateFromStoresArray;
  let tmp2 = dependencyMap;
  let obj = stateFromStoresArray(504);
  const items = [QuestStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const arr = Array.from(quests.values());
    const found = arr.filter((item) => {
      const obj = stateFromStoresArray(closure_1_1[6]);
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
  const useSelectedTimeRecurringDismissibleContent = stateFromStoresArray(7496).useSelectedTimeRecurringDismissibleContent;
  stateFromStoresArray(7496);
  if (stateFromStores) {
    prop = tmp(4807).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const obj3 = { cooldownDurationMs: DAY };
  const tmp7 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj3, undefined, true), 2);
  return { showBadge: null != tmp7[0], dismissBadge: tmp7[1] };
});
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default tmp2;
