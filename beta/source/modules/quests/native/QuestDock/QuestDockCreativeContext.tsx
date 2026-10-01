// Module ID: 14631
// Function ID: 14632
// Name: QuestDockCreativeContext
// Dependencies: [19, 21, 5763, 2]
// Exports: QuestDockBountyProvider, QuestDockQuestProvider, getCreativeAnalyticsParams, getDeliveredAdCreativeId, getDeliveredQuest, useBountyCreative, useQuestCreative, useQuestDockBounty, useQuestDockCreative, useQuestDockQuest

// Module 14631 (QuestDockCreativeContext)
import Fragment from "Fragment" /* 21 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getCreativeAnalyticsParams = function getCreativeAnalyticsParams(creative) {
  const type = creative.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    const obj2 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: creative.quest.id };
    return obj2;
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: creative.bounty.id };
    return obj;
  }
};
export const getDeliveredQuest = function getDeliveredQuest(type) {
  let quest = null;
  if (type.type === AdCreativeType.AdCreativeType.QUEST) {
    quest = type.quest;
  }
  return quest;
};
export const getDeliveredAdCreativeId = function getDeliveredAdCreativeId(type) {
  type = type.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    return type.quest.id;
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    return type.bounty.id;
  } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
    return null;
  }
};
export const QuestDockQuestProvider = function QuestDockQuestProvider(children) {
  const quest = children.quest;
  const items = [quest];
  return <redux.Provider value={react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    return obj;
  }, items)}>{arg0.children}</redux.Provider>;
};
export const QuestDockBountyProvider = function QuestDockBountyProvider(bounty) {
  bounty = bounty.bounty;
  const items = [bounty];
  return <redux.Provider value={react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty };
    return obj;
  }, items)}>{arg0.children}</redux.Provider>;
};
export const useQuestDockQuest = function useQuestDockQuest() {
  const context = react.useContext(redux);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.QUEST) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useQuestDockQuest requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context.quest;
  }
};
export const useQuestCreative = function useQuestCreative(quest) {
  let closure_0 = quest;
  const items = [quest];
  return react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    return obj;
  }, items);
};
export const useQuestDockBounty = function useQuestDockBounty() {
  const context = react.useContext(redux);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.BOUNTY) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useQuestDockBounty requires a QuestDockBountyProvider ancestor");
    throw error;
  } else {
    return context.bounty;
  }
};
export const useBountyCreative = function useBountyCreative(questDockBounty) {
  let closure_0 = questDockBounty;
  const items = [questDockBounty];
  return react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty };
    return obj;
  }, items);
};
export const useQuestDockCreative = function useQuestDockCreative() {
  const context = react.useContext(redux);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useQuestDockCreative requires a QuestDockBountyProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
};
