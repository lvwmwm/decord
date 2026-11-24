// Module ID: 9888
// Function ID: 9889
// Name: useIsViewingActivity
// Dependencies: [6807, 9876, 5093, 9873, 504, 2]
// Exports: useIsViewingActivity

// Module 9888 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9873 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9876 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5093);
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
