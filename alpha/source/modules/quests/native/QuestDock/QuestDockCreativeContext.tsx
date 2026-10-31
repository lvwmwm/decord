// Module ID: 17087
// Function ID: 17088
// Name: QuestDockCreativeContext
// Dependencies: [19, 21, 6788, 2]
// Exports: QuestDockBountyProvider, QuestDockPlayableProvider, QuestDockQuestProvider, useBountyCreative, usePlayableCreative, useQuestCreative, useQuestDockBounty, useQuestDockCreative, useQuestDockPlayable, useQuestDockQuest

// Module 17087 (QuestDockCreativeContext)
import Fragment from "Fragment" /* 21 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export function QuestDockQuestProvider(children) {
  const quest = children.quest;
  const items = [quest];
  return <redux.Provider value={react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    return obj;
  }, items)}>{arg0.children}</redux.Provider>;
}
export function QuestDockBountyProvider(bounty) {
  bounty = bounty.bounty;
  const items = [bounty];
  return <redux.Provider value={react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty };
    return obj;
  }, items)}>{arg0.children}</redux.Provider>;
}
export function QuestDockPlayableProvider(children) {
  const playable = children.playable;
  const items = [playable];
  return <redux.Provider value={react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable };
    return obj;
  }, items)}>{arg0.children}</redux.Provider>;
}
export function useQuestDockQuest() {
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
}
export function useQuestCreative(quest) {
  let closure_0 = quest;
  const items = [quest];
  return react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    return obj;
  }, items);
}
export function useQuestDockBounty() {
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
}
export function useBountyCreative(questDockBounty) {
  let closure_0 = questDockBounty;
  const items = [questDockBounty];
  return react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty };
    return obj;
  }, items);
}
export function useQuestDockPlayable() {
  const context = react.useContext(redux);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.PLAYABLE) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useQuestDockPlayable requires a QuestDockPlayableProvider ancestor");
    throw error;
  } else {
    return context.playable;
  }
}
export function usePlayableCreative(questDockPlayable) {
  let closure_0 = questDockPlayable;
  const items = [questDockPlayable];
  return react.useMemo(() => {
    const obj = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable };
    return obj;
  }, items);
}
export function useQuestDockCreative() {
  const context = react.useContext(redux);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useQuestDockCreative requires a QuestDockBountyProvider, QuestDockPlayableProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
}
