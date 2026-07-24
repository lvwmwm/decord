// Module ID: 10497
// Function ID: 81192
// Name: useQuestImpressionRef
// Dependencies: [31, 6941, 6969, 566, 6968, 8328, 10498, 2]
// Exports: useAdContentImpressionTrackerProps, useGetQuestImpressionId, useQuestImpressionId, useQuestStatusChanged

// Module 10497 (useQuestImpressionRef)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let require = arg1;
function useQuestImpressionRef() {
  return React.useContext(require(10498) /* getQuestPlacementCombinationKey */.QuestImpressionContext);
}
function useQuestImpression() {
  let current;
  const tmp2 = useQuestImpressionRef();
  if (null != tmp2) {
    current = tmp2.current;
  }
  return current;
}
const result = require("AdCreativeType").fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = function useAdContentImpressionTrackerProps(questOrQuests) {
  const _require = questOrQuests;
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  const tmp3 = (function useAdContentIds(questOrQuests, adContentId) {
    let closure_0 = questOrQuests;
    let closure_1 = adContentId;
    let items = [questOrQuests, adContentId];
    return outer1_3.useMemo(() => {
      if (null != closure_1) {
        const items = [closure_1];
        let items1 = items;
      } else if (null != closure_0) {
        const _Array = Array;
        if (Array.isArray(closure_0)) {
          let mapped = arr2.map((id) => id.id);
        } else {
          mapped = [arr2.id];
        }
      } else {
        items1 = [];
      }
      return items1;
    }, items);
  })(questOrQuests, adContentId);
  const importDefault = tmp3;
  if ("questOrQuests" in questOrQuests) {
    adCreativeType = _require(adCreativeType[2]).AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  let items = [tmp3, questOrQuests.questContent, adCreativeType];
  return React.useMemo(() => {
    let obj = { adContentIds: closure_1, questContent: questOrQuests.questContent };
    const items = [...obj.adContentIds];
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + obj.questContent;
    const QUEST = questOrQuests(adCreativeType[2]).AdCreativeType.QUEST;
    obj = { adContentIds: closure_1, adCreativeType, key: combined };
    return obj;
  }, items);
};
export const useQuestStatusChanged = function useQuestStatusChanged(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const items = [_isNativeReflectConstruct];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = adContentIds(stateFromStores[3]).useStateFromStores(items, () => {
    let quest = null;
    if (adCreativeType === adContentIds(stateFromStores[2]).AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = outer1_4.getQuest(adContentIds[0]);
      }
    }
    return quest;
  }, items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      questStatus = adContentIds(stateFromStores[4]).getQuestStatus(stateFromStores);
      const obj = adContentIds(stateFromStores[4]);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[5])(memo);
};
export { useQuestImpressionRef };
export { useQuestImpression };
export const useQuestImpressionId = function useQuestImpressionId() {
  let id;
  const obj = useQuestImpression();
  if (null != obj) {
    id = obj.getId();
  }
  return id;
};
export const useGetQuestImpressionId = function useGetQuestImpressionId() {
  const tmp = useQuestImpressionRef();
  const require = tmp;
  const items = [tmp];
  return React.useCallback(() => {
    let id;
    if (null != tmp) {
      const current = tmp.current;
      if (null != current) {
        id = current.getId();
      }
    }
    return id;
  }, items);
};
