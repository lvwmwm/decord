// Module ID: 16052
// Function ID: 16053
// Name: useGetOrFetchNotificationCenterItemApplications
// Dependencies: [19, 7054, 6589, 2]
// Exports: useGetOrFetchNotificationCenterItemsApplications

// Module 16052 (useGetOrFetchNotificationCenterItemApplications)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7054 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let applicationId, importDefault;

let items = [NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const result = size.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  importDefault = stateFromStores1;
  let items = [stateFromStores1];
  const memo = react.useMemo(() => {
    set = new Set();
    const items = [];
    const item = stateFromStores1.forEach((applicationId) => {
      applicationId = applicationId.applicationId;
      if (set.has(applicationId.type)) {
        const hasItem = null == applicationId || set.has(applicationId);
        if (!hasItem) {
          set.add(applicationId);
          items.push(applicationId);
        }
      }
    });
    return items;
  }, items);
  return useGetOrFetchApplicationsDefault(memo);
};
