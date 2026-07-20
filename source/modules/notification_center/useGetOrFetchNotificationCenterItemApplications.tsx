// Module ID: 15009
// Function ID: 113095
// Name: set
// Dependencies: [0, 0, 0, 0]
// Exports: useGetOrFetchNotificationCenterItemsApplications

// Module 15009 (set)
import closure_2 from "result";
import result from "result";

const items = [require("result").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, require("result").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, require("result").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, require("result").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
const set = new Set(items);
result = result.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  const importDefault = stateFromStores1;
  const items = [stateFromStores1];
  const memo = React.useMemo(() => {
    const arg0 = new Set();
    const items = [];
    const item = arg0.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (set.has(applicationId.type)) {
        let hasItem = null == applicationId;
        if (!hasItem) {
          hasItem = set.has(applicationId);
        }
        if (!hasItem) {
          set.add(applicationId);
          items.push(applicationId);
        }
      }
    });
    return items;
  }, items);
  return importDefault(dependencyMap[2])(memo);
};
