// Module ID: 9694
// Function ID: 9695
// Name: useIsViewingActivity
// Dependencies: [4804, 9681, 4645, 9678, 504, 2]
// Exports: useIsViewingActivity

// Module 9694 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9678 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9681 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4804 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4645).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4645);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
