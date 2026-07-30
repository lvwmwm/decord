// Module ID: 10521
// Function ID: 10522
// Name: useIsViewingActivity
// Dependencies: [4202, 10506, 4040, 10503, 589, 2]
// Exports: useIsViewingActivity

// Module 10521 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10506)(channelId);
  const isModalOpen = channelId(4040).useIsModalOpen(importDefault(10503));
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
