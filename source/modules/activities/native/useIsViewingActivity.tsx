// Module ID: 10546
// Function ID: 10547
// Name: useIsViewingActivity
// Dependencies: [4268, 10531, 4106, 10528, 589, 2]
// Exports: useIsViewingActivity

// Module 10546 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10531)(channelId);
  const isModalOpen = channelId(4106).useIsModalOpen(importDefault(10528));
  const obj = channelId(4106);
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
