// Module ID: 11875
// Function ID: 11876
// Name: useIsViewingActivity
// Dependencies: [6898, 11865, 5314, 11862, 504, 2]
// Exports: useIsViewingActivity

// Module 11875 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11862 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11865 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5314);
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
