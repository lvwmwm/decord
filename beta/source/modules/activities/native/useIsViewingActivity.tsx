// Module ID: 10838
// Function ID: 10839
// Name: useIsViewingActivity
// Dependencies: [6036, 558, 576, 10828, 4976, 10825, 504, 2]

// Module 10838 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10825 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10828 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsViewingActivity(channelId) {
  let first;
  let tmp8;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(4);
  const tmp = channelId;
  channelId = channelId.channelId;
  let tmp4 = useIsActivityFocusedDefault(channelId);
  const obj2 = channelId(4976);
  const isModalOpen = obj2.useIsModalOpen(ChannelCallModalDefault);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelRTCStore.getChatOpen(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (tmp4) {
    tmp4 = isModalOpen;
  }
  if (tmp4) {
    tmp4 = !stateFromStores;
  }
  return tmp4;
}) : (function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const obj = channelId(4976);
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
});
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = tmp2;
