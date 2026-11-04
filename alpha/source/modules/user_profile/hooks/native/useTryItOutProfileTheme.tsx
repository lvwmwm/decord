// Module ID: 16788
// Function ID: 16789
// Name: useTryItOutProfileTheme
// Dependencies: [8872, 8898, 504, 8941, 8881, 8856, 575, 2]
// Exports: default

// Module 16788 (useTryItOutProfileTheme)
import get_initialized from "get initialized" /* 504 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8881 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8898 */;
import useProfileThemeDefault from "useProfileTheme" /* 8941 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const nativeDefault = tmp(575);
const useAvatarColor = tmp4(8856);
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
