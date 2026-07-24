// Module ID: 15189
// Function ID: 115687
// Name: set
// Dependencies: [31, 6882, 5468, 2]
// Exports: useGetOrFetchNotificationCenterItemsApplications

// Module 15189 (set)
import result from "result";
import set from "useGetOrFetchApplications";

let items = [require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, require("NotificationCenterScenes").NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  const importDefault = stateFromStores1;
  let items = [stateFromStores1];
  const memo = React.useMemo(() => {
    const set = new Set();
    const items = [];
    const item = set.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (outer2_3.has(applicationId.type)) {
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
  return importDefault(5468)(memo);
};
