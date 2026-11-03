// Module ID: 11849
// Function ID: 11850
// Name: useIsViewingActivity
// Dependencies: [6963, 11839, 5321, 11836, 504, 2]
// Exports: useIsViewingActivity

// Module 11849 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11836 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11839 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5321);
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
