// Module ID: 12728
// Function ID: 12729
// Name: useIsViewingActivity
// Dependencies: [7016, 12718, 5482, 12715, 504, 2]
// Exports: useIsViewingActivity

// Module 12728 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 12715 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 12718 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5482);
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
