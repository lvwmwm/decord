// Module ID: 10140
// Function ID: 10141
// Name: ReadStateUtils
// Dependencies: [4803, 4969, 4970, 504, 2]
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 10140 (ReadStateUtils)
import ReadStateStore from "ReadStateStore" /* 4803 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4969 */;

const require = globalThis.__r;

const require = fn;
const UnreadSetting = fn(4970).UnreadSetting;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = ReadStateStore.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasUnreadResult = ReadStateStore.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};
