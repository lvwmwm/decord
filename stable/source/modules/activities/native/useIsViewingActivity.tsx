// Module ID: 11907
// Function ID: 11908
// Name: useIsViewingActivity
// Dependencies: [6931, 11897, 5346, 11894, 504, 2]
// Exports: useIsViewingActivity

// Module 11907 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11894 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11897 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5346);
  const isModalOpen = obj.useIsModalOpen(ChannelCallModalDefault);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
}
