// Module ID: 9228
// Function ID: 9229
// Name: ReadStateUtils
// Dependencies: [6897, 6830, 6831, 504, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 9228 (ReadStateUtils)
import ReadStateConstants from "ReadStateConstants" /* 6831 */;
import ReadStateStore from "ReadStateStore" /* 6897 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6830 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UnreadSetting = ReadStateConstants.UnreadSetting;
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export function getHasImportantUnread(channel) {
  const hasUnreadResult = ReadStateStore.hasUnread(channel.id) && UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  return hasUnreadResult;
}
export function useHasImportantUnread(arg0) {
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
}
