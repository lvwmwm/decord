// Module ID: 11906
// Function ID: 11907
// Name: useIsViewingActivity
// Dependencies: [6931, 11896, 5346, 11893, 504, 2]
// Exports: useIsViewingActivity

// Module 11906 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11893 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11896 */;
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
