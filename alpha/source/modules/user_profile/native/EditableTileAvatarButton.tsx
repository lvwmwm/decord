// Module ID: 16547
// Function ID: 16548
// Name: EditableTileAvatarButton
// Dependencies: [19, 5015, 8731, 21, 504, 4839, 8740, 1187, 1409, 16546, 1113, 16536, 16542, 2]
// Exports: TryItOutEditableTileAvatarButton

// Module 16547 (EditableTileAvatarButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import UserSettings from "UserSettings" /* 4839 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8740 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 16536 */;
import SpinAnimationDefault from "SpinAnimation" /* 16542 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 16546 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;
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
    const AVATAR_SIZE_MAP = tmp(1187).AVATAR_SIZE_MAP;
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
    const intl = tmp(1113).intl;
    const tmpResult5 = UserProfileEditingAccessibilityUtils;
    SpinAnimationDefault;
    if (tmp4) {
      tmp4 = enableSpinAnimation;
    }
    ({ source: tmpResult6.makeSource(defaultAvatarURL), size: native.AvatarSizes.XLARGE_72 });
    const Avatar = tmp(1187).Avatar;
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
