// Module ID: 10525
// Function ID: 10526
// Name: useIsViewingActivity
// Dependencies: [4202, 10510, 4040, 10507, 589, 2]
// Exports: useIsViewingActivity

// Module 10525 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10510)(channelId);
  const isModalOpen = channelId(4040).useIsModalOpen(importDefault(10507));
  const obj = channelId(4040);
  const items = [getParticipants];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => outer1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
