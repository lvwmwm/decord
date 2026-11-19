// Module ID: 10592
// Function ID: 10593
// Name: useIsViewingActivity
// Dependencies: [6499, 10583, 4968, 10580, 504, 2]
// Exports: useIsViewingActivity

// Module 10592 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10580 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10583 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6499 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(4968);
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
