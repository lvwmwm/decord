// Module ID: 16505
// Function ID: 16506
// Name: EditableTileAvatarButton
// Dependencies: [19, 5010, 8723, 21, 504, 4834, 8732, 1188, 1410, 16504, 1114, 16494, 16500, 2]
// Exports: TryItOutEditableTileAvatarButton

// Module 16505 (EditableTileAvatarButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8732 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 16494 */;
import SpinAnimationDefault from "SpinAnimation" /* 16500 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 16504 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import size from "module_2" /* 2 */;

class EditableTileAvatarButtonBase {
  constructor(onPress) {
    let avatarChange;
    let defaultAvatarURL;
    let enableSpinAnimation;
    let tmpResult6;
    let useReducedMotion;
    let user;
    ({ user, avatarChange, enableSpinAnimation } = onPress);
    onPress = onPress.onPress;
    if (enableSpinAnimation === undefined) {
      enableSpinAnimation = false;
    }
    const items = [AccessibilityStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const GifAutoPlay = UserSettings.GifAutoPlay;
    let tmp4 = !stateFromStores && GifAutoPlay.useSetting();
    const obj2 = { userId: user.id, image: avatarChange };
    const tmpResult = RecentAvatarUtils;
    const pendingAvatarSrc = tmpResult.getPendingAvatarSrc(obj2);
    const AVATAR_SIZE_MAP = tmp(1188).AVATAR_SIZE_MAP;
    if (null === avatarChange) {
      const tmpResult4 = AvatarUtils;
      defaultAvatarURL = tmpResult4.getDefaultAvatarURL(user.id, user.discriminator);
    } else {
      defaultAvatarURL = pendingAvatarSrc;
      if (pendingAvatarSrc == null) {
        defaultAvatarURL = tmp6;
      }
    }
    UserProfileEditableTileBaseDefault;
    const intl = tmp(1114).intl;
    const tmpResult5 = UserProfileEditingAccessibilityUtils;
    SpinAnimationDefault;
    if (tmp4) {
      tmp4 = enableSpinAnimation;
    }
    ({ source: tmpResult6.makeSource(defaultAvatarURL), size: native.AvatarSizes.XLARGE_72 });
    const Avatar = tmp(1188).Avatar;
    tmpResult6 = AvatarUtils;
    return <tmp9 accessibilityLabel={intl.string(intl2.t.lqaIxI)} accessibilityValue={tmpResult5.getAvatarAccessibleValue(avatarChange, user.avatar)} onPress={onPress}>{null}</tmp9>;
  }
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default EditableTileAvatarButtonBase;
export function TryItOutEditableTileAvatarButton(arg0) {
  let onPress;
  let user;
  ({ user, onPress } = arg0);
  const items = [UserProfileSettingsStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tryItOutAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
    let pendingAvatar = tryItOutAvatar;
    if (tryItOutAvatar == null) {
      pendingAvatar = UserProfileSettingsStore.getPendingChanges().pendingAvatar;
    }
    return { avatarChange: pendingAvatar, enableSpinAnimation: null == tryItOutAvatar };
  });
  return <EditableTileAvatarButtonBase user={user} avatarChange={stateFromStoresObject.avatarChange} onPress={onPress} enableSpinAnimation={stateFromStoresObject.enableSpinAnimation} />;
}
