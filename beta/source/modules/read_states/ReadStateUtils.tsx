// Module ID: 10070
// Function ID: 10071
// Name: ReadStateUtils
// Dependencies: [6619, 6552, 6553, 504, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 10070 (ReadStateUtils)
import ReadStateConstants from "ReadStateConstants" /* 6553 */;
import ReadStateStore from "ReadStateStore" /* 6619 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
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
