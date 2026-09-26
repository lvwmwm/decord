// Module ID: 16758
// Function ID: 16759
// Name: useGetOrFetchNotificationCenterItemApplications
// Dependencies: [19, 7908, 7445, 2]
// Exports: useGetOrFetchNotificationCenterItemsApplications

// Module 16758 (useGetOrFetchNotificationCenterItemApplications)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7445 */;
import noop from "module_19" /* 19 */;

let items = [fn(7908).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, fn(7908).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, fn(7908).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, fn(7908).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED];
let set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useGetOrFetchNotificationCenterItemApplications.tsx");

export const useGetOrFetchNotificationCenterItemsApplications = function useGetOrFetchNotificationCenterItemsApplications(stateFromStores1) {
  importDefault = stateFromStores1;
  let items = [stateFromStores1];
  const memo = noop.useMemo(() => {
    set = new Set();
    const items = [];
    const item = stateFromStores1.forEach((applicationId) => {
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
  return useGetOrFetchApplicationsDefault(memo);
};
