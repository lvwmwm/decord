// Module ID: 15023
// Function ID: 113198
// Name: useNotificationCenterItemAcked
// Dependencies: []
// Exports: useNotificationCenterItemAcked

// Module 15023 (useNotificationCenterItemAcked)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  ackedBeforeId = item;
  const items = [closure_2];
  let stateFromStores = ackedBeforeId(dependencyMap[1]).useStateFromStores(items, () => localItemAcked.isLocalItemAcked(arg0));
  let tmp2 = !item.forceUnacked;
  if (tmp2) {
    if (!stateFromStores) {
      stateFromStores = ackedBeforeId(dependencyMap[2]).isRemoteAcked(item, ackedBeforeId);
      const obj2 = ackedBeforeId(dependencyMap[2]);
    }
    tmp2 = stateFromStores;
  }
  return tmp2;
};
