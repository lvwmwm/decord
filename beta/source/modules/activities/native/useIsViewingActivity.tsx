// Module ID: 10659
// Function ID: 10660
// Name: useIsViewingActivity
// Dependencies: [6620, 10650, 5089, 10647, 504, 2]
// Exports: useIsViewingActivity

// Module 10659 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10647 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10650 */;
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
