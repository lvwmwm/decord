// Module ID: 17046
// Function ID: 17047
// Name: useTryItOutProfileTheme
// Dependencies: [8476, 8416, 504, 8524, 9335, 8472, 575, 2]
// Exports: default

// Module 17046 (useTryItOutProfileTheme)
import get_initialized from "get initialized" /* 504 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8416 */;
import useProfileThemeDefault from "useProfileTheme" /* 8524 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 9335 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8476 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const nativeDefault = tmp(575);
const useAvatarColor = tmp4(8472);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTryItOutProfileTheme.tsx");

export default function useTryItOutProfileTheme(id) {
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
};
