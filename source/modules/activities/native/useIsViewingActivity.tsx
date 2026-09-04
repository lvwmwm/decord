// Module ID: 9422
// Function ID: 9423
// Name: useIsViewingActivity
// Dependencies: [4497, 9404, 4335, 9395, 586, 2]
// Exports: useIsViewingActivity

// Module 9422 (useIsViewingActivity)
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 9395 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9404 */;
import closure_3 from "getParticipants" /* 4497 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4335).useIsModalOpen(ChannelCallCameraPreviewDefault);
  const obj = channelId(4335);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = channelId(586).useStateFromStores(items, () => closure_1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
