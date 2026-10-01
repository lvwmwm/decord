// Module ID: 9175
// Function ID: 9176
// Name: useIsSecureFramesKeyInconsistent
// Dependencies: [19, 4859, 4875, 504, 9163, 2]
// Exports: useAlertIfSecureFramesKeyInconsistent, useIsSecureFramesKeyInconsistent

// Module 9175 (useIsSecureFramesKeyInconsistent)
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4875 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  const items = [RTCConnectionStore, StreamRTCConnectionStore];
  const obj = userId(504);
  return obj.useStateFromStores(items, () => {
    const items = [onAlertOpen, stateFromStores];
    const obj = channelId(userId[4]);
    return obj.getIsSecureFramesKeyInconsistent(userId, items);
  });
};
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let stateFromStores;
  let obj = channelId(userId[3]);
  let items = [onAlertOpen, stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    const items = [onAlertOpen, stateFromStores];
    const obj = channelId(userId[4]);
    return obj.getIsSecureFramesKeyInconsistent(userId, items);
  });
  const ref = nickname.useRef(null);
  const items1 = [channelId, stateFromStores, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      let tmp4;
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          onAlertOpen();
          const obj = channelId(userId[4]);
          const obj2 = { userId, channelId: current, nickname };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj2);
        }, 1000);
        tmp4 = tmp2;
      }
      const current = tmp4.current;
      return () => {
        clearTimeout(current);
      };
    }
    tmp4 = ref;
    clearTimeout(ref.current);
    ref.current = null;
  }, items1);
};
