// Module ID: 9968
// Function ID: 9969
// Name: ReadStateUtils
// Dependencies: [6527, 6460, 6461, 504, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 9968 (ReadStateUtils)
import ReadStateConstants from "ReadStateConstants" /* 6461 */;
import ReadStateStore from "ReadStateStore" /* 6527 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6460 */;
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
