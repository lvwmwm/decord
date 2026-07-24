// Module ID: 8947
// Function ID: 70524
// Name: useIsSecureFramesKeyInconsistent
// Dependencies: [31, 4202, 4216, 566, 8936, 2]
// Exports: useAlertIfSecureFramesKeyInconsistent

// Module 8947 (useIsSecureFramesKeyInconsistent)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  let items = [_isNativeReflectConstruct, closure_4];
  return userId(566).useStateFromStores(items, () => {
    const items = [outer1_3, outer1_4];
    return userId(outer1_1[4]).getIsSecureFramesKeyInconsistent(userId, items);
  });
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export { useIsSecureFramesKeyInconsistent };
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  const tmp = useIsSecureFramesKeyInconsistent({ userId });
  let closure_4 = tmp;
  useIsSecureFramesKeyInconsistent = nickname.useRef(null);
  const items = [channelId, tmp, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (closure_4) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          outer1_3();
          let obj = channelId(userId[4]);
          obj = { userId: outer1_1, channelId: current, nickname: outer1_2 };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj);
        }, 1000);
      }
      const current = ref.current;
      return () => {
        clearTimeout(current);
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
  }, items);
};
