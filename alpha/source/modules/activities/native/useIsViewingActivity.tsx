// Module ID: 11332
// Function ID: 11333
// Name: useIsViewingActivity
// Dependencies: [7024, 11323, 5486, 11320, 504, 2]
// Exports: useIsViewingActivity

// Module 11332 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11320 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11323 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(5486);
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
