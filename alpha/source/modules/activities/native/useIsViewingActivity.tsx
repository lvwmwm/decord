// Module ID: 11909
// Function ID: 11910
// Name: useIsViewingActivity
// Dependencies: [6978, 11899, 5322, 11896, 504, 2]
// Exports: useIsViewingActivity

// Module 11909 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11896 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11899 */;
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
