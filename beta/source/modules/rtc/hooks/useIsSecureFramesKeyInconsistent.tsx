// Module ID: 10014
// Function ID: 10015
// Name: useIsSecureFramesKeyInconsistent
// Dependencies: [19, 4811, 4827, 504, 10002, 2]
// Exports: useAlertIfSecureFramesKeyInconsistent, useIsSecureFramesKeyInconsistent

// Module 10014 (useIsSecureFramesKeyInconsistent)
import SecureFramesUtils from "SecureFramesUtils" /* 10002 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4811 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4827 */;

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
