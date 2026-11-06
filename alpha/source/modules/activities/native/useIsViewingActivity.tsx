// Module ID: 11884
// Function ID: 11885
// Name: useIsViewingActivity
// Dependencies: [6923, 11874, 5344, 11871, 504, 2]
// Exports: useIsViewingActivity

// Module 11884 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11871 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11874 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5344);
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
