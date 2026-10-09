// Module ID: 14849
// Function ID: 14850
// Name: useTryItOutProfileTheme
// Dependencies: [8268, 558, 576, 8294, 504, 8337, 8277, 8252, 587, 2]

// Module 14849 (useTryItOutProfileTheme)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useAvatarColor from "useAvatarColor" /* 8252 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8277 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8294 */;
import useProfileThemeDefault from "useProfileTheme" /* 8337 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeDefault = tmp(587);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTryItOutProfileTheme(id) {
  let primaryColor;
  let secondaryColor;
  let tmp6;
  let tmp7;
  let tryItOutAvatar;
  let tryItOutChanges;
  let tryItOutThemeColors;
  const obj = react;
  const cResult = obj.c(13);
  const tmp5 = useDisplayProfileDefault(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function l() {
      return tryItOutChanges.getTryItOutChanges();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp7);
  ({ tryItOutThemeColors, tryItOutAvatar } = stateFromStoresObject);
  if (cResult[2] === id) {
    if (cResult[3] === tmp5) {
      let tmp10;
      if (cResult[4] === tryItOutThemeColors) {
        tmp10 = cResult[5];
      }
      ({ primaryColor, secondaryColor } = useProfileThemeDefault(tmp10));
      useProfileThemeDefault(tmp10);
      if (cResult[6] === id) {
        let tmp12;
        if (cResult[7] === tryItOutAvatar) {
          tmp12 = cResult[8];
        }
        const tmpResult3 = useAvatarColor;
        const avatarColors = tmpResult3.useAvatarColors(tmp12, tmp4(587).unsafe_rawColors.PRIMARY_530, false);
        if (cResult[9] === avatarColors) {
          if (cResult[10] === primaryColor) {
            let tmp16;
            if (cResult[11] === secondaryColor) {
              tmp16 = cResult[12];
            }
            return tmp16;
          }
        }
        const obj2 = { primaryColor, secondaryColor, avatarColors };
        cResult[9] = avatarColors;
        cResult[10] = primaryColor;
        cResult[11] = secondaryColor;
        cResult[12] = obj2;
        tmp16 = obj2;
      }
      const obj3 = { userId: id.id, image: tryItOutAvatar };
      const tmpResult4 = RecentAvatarUtils;
      let pendingAvatarSrc = tmpResult4.getPendingAvatarSrc(obj3);
      if (pendingAvatarSrc == null) {
        pendingAvatarSrc = id.getAvatarURL(undefined, 80);
      }
      cResult[6] = id;
      cResult[7] = tryItOutAvatar;
      cResult[8] = pendingAvatarSrc;
      tmp12 = pendingAvatarSrc;
    }
  }
  const obj4 = { user: id, displayProfile: tmp5, pendingThemeColors: tryItOutThemeColors, isPreview: true };
  cResult[2] = id;
  cResult[3] = tmp5;
  cResult[4] = tryItOutThemeColors;
  cResult[5] = obj4;
  tmp10 = obj4;
}) : (function useTryItOutProfileTheme(id) {
  let primaryColor;
  let secondaryColor;
  let tmp4Result;
  let tryItOutAvatar;
  let tryItOutChanges;
  let tryItOutThemeColors;
  const items = [UserProfileSettingsStore];
  const tmp3 = useDisplayProfileDefault(id.id);
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => tryItOutChanges.getTryItOutChanges());
  ({ tryItOutThemeColors, tryItOutAvatar } = stateFromStoresObject);
  const obj2 = { user: id, displayProfile: tmp3, pendingThemeColors: tryItOutThemeColors, isPreview: true };
  ({ primaryColor, secondaryColor } = useProfileThemeDefault(obj2));
  useProfileThemeDefault(obj2);
  const obj3 = RecentAvatarUtils;
  const obj4 = { userId: id.id, image: tryItOutAvatar };
  let pendingAvatarSrc = obj3.getPendingAvatarSrc(obj4);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = id.getAvatarURL(undefined, 80);
  }
  const obj5 = { primaryColor, secondaryColor, avatarColors: tmp4Result.useAvatarColors(pendingAvatarSrc, nativeDefault.unsafe_rawColors.PRIMARY_530, false) };
  tmp4Result = useAvatarColor;
  return obj5;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTryItOutProfileTheme.tsx");

export default tmp2;
