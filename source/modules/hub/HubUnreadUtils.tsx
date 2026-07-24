// Module ID: 15084
// Function ID: 114863
// Name: useHubUnreadCount
// Dependencies: [10074, 4142, 566, 21, 10066, 2]
// Exports: useHubUnreadCount

// Module 15084 (useHubUnreadCount)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    if (null == lib) {
      return 0;
    } else {
      const ackMessageIdResult = outer1_4.ackMessageId(lib.id);
      lib = ackMessageIdResult;
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let directoryEntries = outer1_3.getDirectoryEntries(lib.id);
        if (null == directoryEntries) {
          directoryEntries = {};
        }
        const values = Object.values(directoryEntries);
        const _Math = Math;
        const found = values.filter((createdAt) => {
          const time = new Date(createdAt.createdAt).getTime();
          const date = new Date(createdAt.createdAt);
          return time > outer2_1(outer2_2[3]).extractTimestamp(closure_0);
        });
        return Math.min(lib(outer1_2[4]).MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
};
