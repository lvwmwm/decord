// Module ID: 8851
// Function ID: 8852
// Name: useIsViewingActivity
// Dependencies: [4852, 8838, 4692, 8835, 504, 2]
// Exports: useIsViewingActivity

// Module 8851 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 8835 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 8838 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(4692);
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
};
