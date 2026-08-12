// Module ID: 10723
// Function ID: 10724
// Name: useIsViewingActivity
// Dependencies: [4357, 10713, 4199, 10710, 589, 2]
// Exports: useIsViewingActivity

// Module 10723 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10713)(channelId);
  const isModalOpen = channelId(4199).useIsModalOpen(importDefault(10710));
  const obj = channelId(4199);
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
