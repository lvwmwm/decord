// Module ID: 15006
// Function ID: 15007
// Name: useIsQuestDockContentVisible
// Dependencies: [19, 14890, 5623, 558, 576, 14980, 504, 2]

// Module 15006 (useIsQuestDockContentVisible)
import react2 from "react" /* 576 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import reactDefault from "react" /* 14980 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const QuestDockMode = QuestConstants.QuestDockMode;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
