// Module ID: 10546
// Function ID: 82387
// Name: useIsViewingActivity
// Dependencies: [4143, 10531, 3981, 10528, 566, 2]
// Exports: useIsViewingActivity

// Module 10546 (useIsViewingActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10531)(channelId);
  const isModalOpen = channelId(3981).useIsModalOpen(importDefault(10528));
  const obj = channelId(3981);
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
