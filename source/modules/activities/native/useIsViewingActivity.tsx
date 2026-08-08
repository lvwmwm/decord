// Module ID: 10664
// Function ID: 10665
// Name: useIsViewingActivity
// Dependencies: [4316, 10654, 4158, 10651, 589, 2]
// Exports: useIsViewingActivity

// Module 10664 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10654)(channelId);
  const isModalOpen = channelId(4158).useIsModalOpen(importDefault(10651));
  const obj = channelId(4158);
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
