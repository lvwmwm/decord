// Module ID: 10654
// Function ID: 10655
// Name: useIsViewingActivity
// Dependencies: [6620, 10645, 5089, 10642, 504, 2]
// Exports: useIsViewingActivity

// Module 10654 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10642 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10645 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5089);
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
