// Module ID: 10029
// Function ID: 10030
// Name: useIsViewingActivity
// Dependencies: [6933, 10017, 5219, 10014, 504, 2]
// Exports: useIsViewingActivity

// Module 10029 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10014 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10017 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5219);
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
