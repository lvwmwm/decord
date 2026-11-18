// Module ID: 10614
// Function ID: 10615
// Name: useIsViewingActivity
// Dependencies: [6528, 10605, 4999, 10602, 504, 2]
// Exports: useIsViewingActivity

// Module 10614 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10602 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10605 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6528 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(4999);
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
