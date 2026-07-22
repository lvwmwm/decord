// Module ID: 10458
// Function ID: 80950
// Name: useQuestImpressionRef
// Dependencies: []
// Exports: useAdContentImpressionTrackerProps, useGetQuestImpressionId, useQuestImpressionId, useQuestStatusChanged

// Module 10458 (useQuestImpressionRef)
function useQuestImpressionRef() {
  return React.useContext(arg1(dependencyMap[6]).QuestImpressionContext);
}
function useQuestImpression() {
  let current;
  const tmp2 = useQuestImpressionRef();
  if (null != tmp2) {
    current = tmp2.current;
  }
  return current;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = function useAdContentImpressionTrackerProps(questOrQuests) {
  const arg1 = questOrQuests;
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  const tmp3 = function useAdContentIds(questOrQuests, adContentId) {
    const items = [questOrQuests, adContentId];
    return React.useMemo(() => {
      if (null != arg1) {
        const items = [arg1];
        let items1 = items;
      } else if (null != arg0) {
        const _Array = Array;
        if (Array.isArray(arg0)) {
          let mapped = arr2.map((id) => id.id);
        } else {
          mapped = [arr2.id];
        }
      } else {
        items1 = [];
      }
      return items1;
    }, items);
  }(questOrQuests, adContentId);
  const importDefault = tmp3;
  if ("questOrQuests" in questOrQuests) {
    let adCreativeType = arg1(dependencyMap[2]).AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  const dependencyMap = adCreativeType;
  const items = [tmp3, questOrQuests.questContent, adCreativeType];
  return React.useMemo(() => {
    let obj = { adContentIds: tmp3, questContent: arg0.questContent };
    const items = [...obj.adContentIds];
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + obj.questContent;
    const QUEST = arg0(adCreativeType[2]).AdCreativeType.QUEST;
    obj = { adContentIds: tmp3, adCreativeType, key: combined };
    return obj;
  }, items);
};
export const useQuestStatusChanged = function useQuestStatusChanged(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const arg1 = adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const importDefault = adCreativeType;
  const items = [closure_4];
  const items1 = [adContentIds, adCreativeType];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let quest = null;
    if (adCreativeType === adContentIds(stateFromStores[2]).AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = quest.getQuest(adContentIds[0]);
      }
    }
    return quest;
  }, items1);
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      questStatus = adContentIds(stateFromStores[4]).getQuestStatus(stateFromStores);
      const obj = adContentIds(stateFromStores[4]);
    }
    return questStatus;
  }, items2);
  return memo !== importDefault(dependencyMap[5])(memo);
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
  const arg1 = tmp;
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
