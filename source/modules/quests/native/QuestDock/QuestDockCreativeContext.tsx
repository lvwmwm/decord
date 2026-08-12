// Module ID: 14424
// Function ID: 14425
// Name: getDeliveredQuest
// Dependencies: [19, 21, 7228, 2]
// Exports: QuestDockQuestProvider, getDeliveredQuest, useQuestCreative

// Module 14424 (getDeliveredQuest)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(null);
const result = require("AdCreativeType").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getDeliveredQuest = function getDeliveredQuest(type) {
  let quest = null;
  if (type.type === require(7228) /* AdCreativeType */.AdCreativeType.QUEST) {
    quest = type.quest;
  }
  return quest;
};
export const QuestDockQuestProvider = function QuestDockQuestProvider(quest) {
  return <redux.Provider value={arg0.quest}>{arg0.children}</redux.Provider>;
};
export const useQuestCreative = function useQuestCreative() {
  const context = importAllResult.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useQuestCreative requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
};
