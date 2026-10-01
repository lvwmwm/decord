// Module ID: 10711
// Function ID: 10712
// Name: ContentImpressionTrackerHooks
// Dependencies: [19, 7116, 5763, 504, 7141, 7720, 10712, 2]
// Exports: useAdContentImpressionTrackerProps, useGetQuestImpressionId, useQuestImpression, useQuestImpressionId, useQuestImpressionRef, useQuestStatusChanged

// Module 10711 (ContentImpressionTrackerHooks)
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import ContentImpressionTracker from "ContentImpressionTracker" /* 10712 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7116 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = function useAdContentImpressionTrackerProps(questOrQuests) {
  let adCreativeType;
  _require = questOrQuests;
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  let items = [questOrQuests, adContentId];
  const memo = react.useMemo(() => {
    let items1;
    if (null != adContentId) {
      const items = [tmp];
      items1 = items;
    } else if (null != questOrQuests) {
      let mapped;
      const _Array = Array;
      if (Array.isArray(questOrQuests)) {
        mapped = arr.map((id) => id.id);
      } else {
        mapped = [questOrQuests.id];
      }
      items1 = mapped;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj = react;
  if ("questOrQuests" in questOrQuests) {
    adCreativeType = require("AdCreativeType").AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  let items1 = [memo, questOrQuests.questContent, adCreativeType];
  return obj.useMemo(() => {
    const items = [...memo];
    const questContent = questOrQuests.questContent;
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + questContent;
    const QUEST = AdCreativeType.AdCreativeType.QUEST;
    return { adContentIds: memo, adCreativeType, key: combined };
  }, items1);
};
export const useQuestStatusChanged = function useQuestStatusChanged(adContentIds) {
  let stateFromStores;
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  let obj = adContentIds(stateFromStores[3]);
  const items = [QuestStore];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = obj.useStateFromStores(items, () => {
    let quest = null;
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = QuestStore.getQuest(tmp2[0]);
      }
    }
    return quest;
  }, items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      const obj = AnalyticsTypes;
      questStatus = obj.getQuestStatus(tmp);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[5])(memo);
};
export const useQuestImpressionRef = function useQuestImpressionRef() {
  return react.useContext(ContentImpressionTracker.QuestImpressionContext);
};
export const useQuestImpression = function useQuestImpression() {
  const context = react.useContext(ContentImpressionTracker.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  return current;
};
export const useQuestImpressionId = function useQuestImpressionId() {
  const context = react.useContext(ContentImpressionTracker.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  let id;
  if (current != null) {
    id = current.getId();
  }
  return id;
};
export const useGetQuestImpressionId = function useGetQuestImpressionId() {
  const context = react.useContext(ContentImpressionTracker.QuestImpressionContext);
  const items = [context];
  return react.useCallback(() => {
    let id;
    if (context != null) {
      const current = context.current;
      if (current != null) {
        id = current.getId();
      }
    }
    return id;
  }, items);
};
