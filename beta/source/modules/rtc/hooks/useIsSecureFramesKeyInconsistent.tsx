// Module ID: 9175
// Function ID: 9176
// Name: useIsSecureFramesKeyInconsistent
// Dependencies: [19, 4859, 4875, 504, 9163, 2]
// Exports: useAlertIfSecureFramesKeyInconsistent, useIsSecureFramesKeyInconsistent

// Module 9175 (useIsSecureFramesKeyInconsistent)
import SecureFramesUtils from "SecureFramesUtils" /* 9163 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4875 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  const items = [RTCConnectionStore, StreamRTCConnectionStore];
  return userId(504).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    return SecureFramesUtils.getIsSecureFramesKeyInconsistent(channelId, items);
  });
};
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let stateFromStores;
  closure_129_0 = userId;
  let items = [onAlertOpen, stateFromStores];
  stateFromStores = channelId(userId[3]).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    return SecureFramesUtils.getIsSecureFramesKeyInconsistent(channelId, items);
  });
  nickname.useRef(null);
  const items1 = [channelId, stateFromStores, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (stateFromStores) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          onAlertOpen();
          const result = channelId(userId[4]).showSecureFramesKeyInconsistentAlert({ userId, channelId: current, nickname });
        }, 1000);
        let tmp3 = tmp;
      }
      const current = tmp3.current;
      return () => {
        clearTimeout(current);
      };
    }
    tmp3 = ref;
    clearTimeout(ref.current);
    ref.current = null;
  }, items1);
};
