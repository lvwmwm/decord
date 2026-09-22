// Module ID: 9623
// Function ID: 9624
// Name: useIsViewingActivity
// Dependencies: [4652, 9605, 4494, 9596, 504, 2]
// Exports: useIsViewingActivity

// Module 9623 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9596 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9605 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4652 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4494).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4494);
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
