// Module ID: 11908
// Function ID: 11909
// Name: useIsViewingActivity
// Dependencies: [6978, 11898, 5322, 11895, 504, 2]
// Exports: useIsViewingActivity

// Module 11908 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11895 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11898 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5322);
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
