// Module ID: 11712
// Function ID: 11713
// Name: useIsViewingActivity
// Dependencies: [6843, 11702, 5198, 11699, 504, 2]
// Exports: useIsViewingActivity

// Module 11712 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11699 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11702 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5198);
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
