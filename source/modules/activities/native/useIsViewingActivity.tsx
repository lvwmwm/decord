// Module ID: 10598
// Function ID: 10599
// Name: useIsViewingActivity
// Dependencies: [4315, 10588, 4152, 10585, 589, 2]
// Exports: useIsViewingActivity

// Module 10598 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10588)(channelId);
  const isModalOpen = channelId(4152).useIsModalOpen(importDefault(10585));
  const obj = channelId(4152);
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
