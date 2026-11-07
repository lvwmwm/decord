// Module ID: 18591
// Function ID: 18592
// Name: HubUnreadUtils
// Dependencies: [14093, 6897, 504, 11, 14085, 2]
// Exports: useHubUnreadCount

// Module 18591 (HubUnreadUtils)
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 14085 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 14093 */;
import ReadStateStore from "ReadStateStore" /* 6897 */;
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
