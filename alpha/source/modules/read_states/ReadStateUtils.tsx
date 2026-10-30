// Module ID: 9129
// Function ID: 9130
// Name: ReadStateUtils
// Dependencies: [6836, 6769, 6770, 504, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 9129 (ReadStateUtils)
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
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
