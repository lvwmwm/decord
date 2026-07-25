// Module ID: 10462
// Function ID: 81190
// Name: useIsViewingActivity
// Dependencies: [4144, 10447, 3982, 10444, 566, 2]
// Exports: useIsViewingActivity

// Module 10462 (useIsViewingActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10447)(channelId);
  const isModalOpen = channelId(3982).useIsModalOpen(importDefault(10444));
  const obj = channelId(3982);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = channelId(566).useStateFromStores(items, () => outer1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
