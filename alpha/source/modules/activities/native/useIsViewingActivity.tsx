// Module ID: 10534
// Function ID: 10535
// Name: useIsViewingActivity
// Dependencies: [6501, 10525, 4970, 10522, 504, 2]
// Exports: useIsViewingActivity

// Module 10534 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10522 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10525 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(4970);
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
