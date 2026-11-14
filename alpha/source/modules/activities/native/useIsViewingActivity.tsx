// Module ID: 12726
// Function ID: 12727
// Name: useIsViewingActivity
// Dependencies: [7016, 12716, 5492, 12713, 504, 2]
// Exports: useIsViewingActivity

// Module 12726 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 12713 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 12716 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5492);
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
