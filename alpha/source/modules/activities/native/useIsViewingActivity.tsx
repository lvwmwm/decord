// Module ID: 12636
// Function ID: 12637
// Name: useIsViewingActivity
// Dependencies: [6953, 12626, 5429, 12623, 504, 2]
// Exports: useIsViewingActivity

// Module 12636 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 12623 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 12626 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5429);
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
