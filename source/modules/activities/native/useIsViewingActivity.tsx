// Module ID: 10501
// Function ID: 81316
// Name: useIsViewingActivity
// Dependencies: [4178, 10486, 4016, 10483, 566, 2]
// Exports: useIsViewingActivity

// Module 10501 (useIsViewingActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10486)(channelId);
  const isModalOpen = channelId(4016).useIsModalOpen(importDefault(10483));
  const obj = channelId(4016);
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
