// Module ID: 9987
// Function ID: 9988
// Name: useIsViewingActivity
// Dependencies: [6902, 9975, 5188, 9972, 504, 2]
// Exports: useIsViewingActivity

// Module 9987 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9972 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9975 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5188);
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
