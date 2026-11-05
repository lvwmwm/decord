// Module ID: 11918
// Function ID: 11919
// Name: useIsViewingActivity
// Dependencies: [6981, 11908, 5324, 11905, 504, 2]
// Exports: useIsViewingActivity

// Module 11918 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11905 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11908 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6981 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5324);
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
