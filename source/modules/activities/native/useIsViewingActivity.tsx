// Module ID: 10655
// Function ID: 10656
// Name: useIsViewingActivity
// Dependencies: [4358, 10645, 4197, 10642, 589, 2]
// Exports: useIsViewingActivity

// Module 10655 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10645)(channelId);
  const isModalOpen = channelId(4197).useIsModalOpen(importDefault(10642));
  const obj = channelId(4197);
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
