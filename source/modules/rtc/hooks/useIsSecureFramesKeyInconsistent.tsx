// Module ID: 8900
// Function ID: 70244
// Name: useIsSecureFramesKeyInconsistent
// Dependencies: [57, 31, 27, 4198, 1849, 8891]
// Exports: useAlertIfSecureFramesKeyInconsistent

// Module 8900 (useIsSecureFramesKeyInconsistent)
import _slicedToArray from "_slicedToArray";
import module_31 from "module_31";
import keys from "keys";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";

function useIsSecureFramesKeyInconsistent(userId) {
  const arg1 = userId.userId;
  const items = [module_31, keys];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [module_31, keys];
    return userId(closure_1[4]).getIsSecureFramesKeyInconsistent(userId, items);
  });
}
const result = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export { useIsSecureFramesKeyInconsistent };
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const userId = channelId.userId;
  const dependencyMap = userId;
  const nickname = channelId.nickname;
  const React = nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let module_31 = onAlertOpen;
  const tmp = useIsSecureFramesKeyInconsistent({ userId });
  let keys = tmp;
  const useIsSecureFramesKeyInconsistent = React.useRef(null);
  const items = [channelId, tmp, nickname, onAlertOpen, userId];
  const effect = React.useEffect(() => {
    if (tmp) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          callback();
          let obj = current(closure_1[4]);
          obj = { userId: closure_1, channelId: current, nickname: _slicedToArray };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj);
        }, 1000);
      }
      const channelId = ref.current;
      return () => {
        clearTimeout(current);
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
  }, items);
};
