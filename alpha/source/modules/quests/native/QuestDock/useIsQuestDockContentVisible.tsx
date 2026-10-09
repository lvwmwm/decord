// Module ID: 15400
// Function ID: 15401
// Name: useIsQuestDockContentVisible
// Dependencies: [19, 15283, 5979, 558, 576, 15374, 504, 2]

// Module 15400 (useIsQuestDockContentVisible)
import react2 from "react" /* 576 */;
import QuestConstants from "QuestConstants" /* 5979 */;
import reactDefault from "react" /* 15374 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 15283 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const QuestDockMode = QuestConstants.QuestDockMode;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsQuestDockContentVisible() {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  let isVisibleToUser = react.useContext(reactDefault).isVisibleToUser;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestDockStore];
    const fn = function u() {
      return QuestDockStore.prevRestingQuestDockMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.CLOSED;
  }
  if (isVisibleToUser) {
    isVisibleToUser = stateFromStores !== QuestDockMode.SOFT_DISMISSED;
  }
  return isVisibleToUser;
}) : (function useIsQuestDockContentVisible() {
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
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockContentVisible.tsx");

export default tmp2;
