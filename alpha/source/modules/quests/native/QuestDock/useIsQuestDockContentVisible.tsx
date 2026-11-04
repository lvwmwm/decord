// Module ID: 17426
// Function ID: 17427
// Name: useIsQuestDockContentVisible
// Dependencies: [19, 17317, 6916, 17401, 504, 2]
// Exports: default

// Module 17426 (useIsQuestDockContentVisible)
import get_initialized from "get initialized" /* 504 */;
import QuestConstants from "QuestConstants" /* 6916 */;
import reactDefault from "react" /* 17401 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17317 */;
import size from "module_2" /* 2 */;

const QuestDockMode = QuestConstants.QuestDockMode;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default function useIsQuestDockContentVisible() {
  let isVisibleToUser = react.useContext(reactDefault).isVisibleToUser;
  const items = [QuestDockStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
  }
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
  }
  return isVisibleToUser;
};
