// Module ID: 10535
// Function ID: 82324
// Name: useIsViewingActivity
// Dependencies: []
// Exports: useIsViewingActivity

// Module 10535 (useIsViewingActivity)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let tmp = importDefault(dependencyMap[1])(channelId);
  const isModalOpen = arg1(dependencyMap[2]).useIsModalOpen(importDefault(dependencyMap[3]));
  const obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => chatOpen.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
