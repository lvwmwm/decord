// Module ID: 16588
// Function ID: 16589
// Name: useIsQuestDockContentVisible
// Dependencies: [19, 16485, 6558, 16576, 504, 2]
// Exports: default

// Module 16588 (useIsQuestDockContentVisible)
import get_initialized from "get initialized" /* 504 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import reactDefault from "react" /* 16576 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16485 */;
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
