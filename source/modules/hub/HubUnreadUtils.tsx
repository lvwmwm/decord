// Module ID: 14910
// Function ID: 112297
// Name: useHubUnreadCount
// Dependencies: [31, 27, 14918, 1838, 33, 689]
// Exports: useHubUnreadCount

// Module 14910 (useHubUnreadCount)
import module_31 from "module_31";
import keys from "keys";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  const arg1 = arg0;
  const items = [module_31, keys];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (null == arg0) {
      return 0;
    } else {
      const ackMessageIdResult = keys.ackMessageId(arg0.id);
      const arg0 = ackMessageIdResult;
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let directoryEntries = directoryEntries.getDirectoryEntries(arg0.id);
        if (null == directoryEntries) {
          directoryEntries = {};
        }
        const values = Object.values(directoryEntries);
        const _Math = Math;
        const found = values.filter((createdAt) => {
          const time = new Date(createdAt.createdAt).getTime();
          const date = new Date(createdAt.createdAt);
          return time > callback(closure_2[3]).extractTimestamp(ackMessageIdResult);
        });
        return Math.min(arg0(closure_2[4]).MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
};
