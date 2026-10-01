// Module ID: 7697
// Function ID: 7698
// Name: useProfileTileGradient
// Dependencies: [32, 19, 7631, 7698, 7632, 7699, 2]
// Exports: default

// Module 7697 (useProfileTileGradient)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default function useProfileTileGradient(userId) {
  let tmp5;
  let tmp6;
  userId = userId.userId;
  const guildId = userId.guildId;
  let isVideoBackgroundProfileFetchEnabled;
  let tmp = isVideoBackgroundProfileFetchEnabled;
  const _location = userId.location;
  let tmp2 = guildId(isVideoBackgroundProfileFetchEnabled[2])(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = _slicedToArray(themeColors, 2);
  _slicedToArray(themeColors, 2);
  let obj = userId(tmp[3]);
  isVideoBackgroundProfileFetchEnabled = obj.useIsVideoBackgroundProfileFetchEnabled(_location);
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  const effect = react.useEffect(() => {
    let tmp2 = null != userId;
    const tmp = userId;
    if (tmp2) {
      tmp2 = isVideoBackgroundProfileFetchEnabled;
    }
    if (tmp2) {
      const obj = { guildId, dispatchWait: true };
      maybeFetchUserProfileDefault(tmp, undefined, obj);
    }
  }, items);
  const useVideoTileGradientColors = userId(tmp[5]).useVideoTileGradientColors;
  userId(tmp[5]);
  return useVideoTileGradientColors(tmp5, tmp6);
};
