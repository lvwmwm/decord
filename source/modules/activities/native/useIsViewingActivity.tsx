// Module ID: 10639
// Function ID: 10640
// Name: useIsViewingActivity
// Dependencies: [4358, 10629, 4197, 10626, 589, 2]
// Exports: useIsViewingActivity

// Module 10639 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(10629)(channelId);
  const isModalOpen = channelId(4197).useIsModalOpen(importDefault(10626));
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
