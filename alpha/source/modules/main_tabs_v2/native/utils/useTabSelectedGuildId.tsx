// Module ID: 14923
// Function ID: 14924
// Name: useTabSelectedGuildId
// Dependencies: [4939, 5963, 558, 576, 573, 2]

// Module 14923 (useTabSelectedGuildId)
import react from "react" /* 576 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useStateFromStores = tmp(573);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTabSelectedGuildId() {
  let flattenedGuildIds;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore, SortedGuildStore];
    const fn = function s() {
      let guildId = SelectedGuildStore.getGuildId();
      const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
      const first = flattenedGuildIds.getFlattenedGuildIds()[0];
      if (guildId == null) {
        guildId = lastSelectedGuildId;
      }
      if (guildId == null) {
        guildId = first;
      }
      return guildId;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useTabSelectedGuildId() {
  let flattenedGuildIds;
  const items = [SelectedGuildStore, SortedGuildStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
    const first = flattenedGuildIds.getFlattenedGuildIds()[0];
    if (guildId == null) {
      guildId = lastSelectedGuildId;
    }
    if (guildId == null) {
      guildId = first;
    }
    return guildId;
  });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default tmp2;
