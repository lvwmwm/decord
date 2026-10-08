// Module ID: 8689
// Function ID: 8690
// Name: ReadStateUtils
// Dependencies: [6040, 5971, 5972, 558, 576, 504, 2]
// Exports: getHasImportantUnread

// Module 8689 (ReadStateUtils)
import ReadStateConstants from "ReadStateConstants" /* 5972 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UnreadSetting = ReadStateConstants.UnreadSetting;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasImportantUnread(arg0) {
  let first;
  let id;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let hasUnreadResult = ReadStateStore.hasUnread(id.id);
      const tmp = id;
      if (hasUnreadResult) {
        hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(tmp) === UnreadSetting.ALL_MESSAGES;
      }
      return hasUnreadResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (function useHasImportantUnread(arg0) {
  let id;
  _require = arg0;
  const items = [ReadStateStore, UserGuildSettingsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let hasUnreadResult = ReadStateStore.hasUnread(id.id);
    const tmp = id;
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(tmp) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
});
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  const hasUnreadResult = ReadStateStore.hasUnread(channel.id) && UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  return hasUnreadResult;
};
export const useHasImportantUnread = tmp2;
