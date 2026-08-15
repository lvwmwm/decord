// Module ID: 8690
// Function ID: 8691
// Name: useIsViewingActivity
// Dependencies: [4773, 8679, 4229, 8668, 589, 2]
// Exports: useIsViewingActivity

// Module 8690 (useIsViewingActivity)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = importDefault(8679)(channelId);
  const isModalOpen = channelId(4229).useIsModalOpen(importDefault(8668));
  const obj = channelId(4229);
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
