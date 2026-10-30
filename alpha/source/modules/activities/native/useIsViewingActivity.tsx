// Module ID: 11674
// Function ID: 11675
// Name: useIsViewingActivity
// Dependencies: [6837, 11664, 5193, 11661, 504, 2]
// Exports: useIsViewingActivity

// Module 11674 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11661 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11664 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5193);
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
