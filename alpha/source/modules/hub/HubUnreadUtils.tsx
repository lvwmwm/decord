// Module ID: 18216
// Function ID: 18217
// Name: HubUnreadUtils
// Dependencies: [13810, 6836, 504, 11, 13802, 2]
// Exports: useHubUnreadCount

// Module 18216 (HubUnreadUtils)
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 13802 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 13810 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export function useHubUnreadCount(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildDirectoryStore, ReadStateStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return 0;
    } else {
      const ackMessageIdResult = ReadStateStore.ackMessageId(tmp.id);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        const _Object = Object;
        let directoryEntries = GuildDirectoryStore.getDirectoryEntries(tmp.id);
        if (directoryEntries == null) {
          directoryEntries = {};
        }
        const values2 = values(directoryEntries);
        const _Math = Math;
        const found = values2.filter((createdAt) => {
          const date = new Date(createdAt.createdAt);
          const time = date.getTime();
          const obj2 = closure_2_1(closure_2_2[3]);
          return time > obj2.extractTimestamp(ackMessageIdResult);
        });
        return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
}
