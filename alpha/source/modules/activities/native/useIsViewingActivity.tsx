// Module ID: 9050
// Function ID: 9051
// Name: useIsViewingActivity
// Dependencies: [4882, 9037, 4722, 9034, 504, 2]
// Exports: useIsViewingActivity

// Module 9050 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9034 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9037 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4882 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4722).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4722);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
