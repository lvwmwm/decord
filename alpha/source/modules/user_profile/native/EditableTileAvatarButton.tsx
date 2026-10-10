// Module ID: 14916
// Function ID: 14917
// Name: EditableTileAvatarButton
// Dependencies: [19, 5081, 8284, 21, 558, 576, 504, 2041, 8293, 1200, 1415, 14915, 1126, 14912, 14843, 2]

// Module 14916 (EditableTileAvatarButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8293 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14912 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 14915 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp21;
const SpinAnimationDefault = tmp21(14843);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileAvatarButtonBase(arg0) {
  let avatarChange;
  let defaultAvatarURL;
  let enableSpinAnimation;
  let onPress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp23;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let user;
  const obj = react2;
  const cResult = obj.c(32);
  ({ user, avatarChange, onPress, enableSpinAnimation } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const GifAutoPlay = tmp(2041).GifAutoPlay;
  const tmp9 = !stateFromStores && GifAutoPlay.useSetting();
  if (cResult[2] === avatarChange) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === (undefined !== enableSpinAnimation && enableSpinAnimation)) {
        if (cResult[5] === onPress) {
          if (cResult[6] === user) {
            tmp10 = cResult[7];
            tmp11 = cResult[8];
            tmp12 = cResult[9];
            tmp13 = cResult[10];
            tmp14 = cResult[11];
            tmp15 = cResult[12];
            tmp16 = cResult[13];
            tmp17 = cResult[14];
          }
          if (cResult[19] === tmp10) {
            let tmp30;
            if (cResult[20] === tmp13) {
              tmp30 = cResult[21];
            }
            if (cResult[22] === tmp11) {
              if (cResult[23] === tmp14) {
                let tmp33;
                if (cResult[24] === tmp30) {
                  tmp33 = cResult[25];
                }
                if (cResult[26] === tmp12) {
                  if (cResult[27] === tmp33) {
                    if (cResult[28] === tmp15) {
                      if (cResult[29] === tmp16) {
                        let tmp36;
                        if (cResult[30] === tmp17) {
                          tmp36 = cResult[31];
                        }
                        return tmp36;
                      }
                    }
                  }
                }
                const tmp38 = <tmp12 accessibilityLabel={tmp15} accessibilityValue={tmp16} onPress={tmp17}>{tmp33}</tmp12>;
                cResult[26] = tmp12;
                cResult[27] = tmp33;
                cResult[28] = tmp15;
                cResult[29] = tmp16;
                cResult[30] = tmp17;
                cResult[31] = tmp38;
                tmp36 = tmp38;
              }
            }
            const tmp35 = <tmp11 shouldAnimate={tmp14}>{tmp30}</tmp11>;
            cResult[22] = tmp11;
            cResult[23] = tmp14;
            cResult[24] = tmp30;
            cResult[25] = tmp35;
            tmp33 = tmp35;
          }
          const tmp32 = <tmp10 source={tmp13} size={native.AvatarSizes.XLARGE_72} />;
          cResult[19] = tmp10;
          cResult[20] = tmp13;
          cResult[21] = tmp32;
          tmp30 = tmp32;
        }
      }
    }
  }
  const obj5 = { userId: user.id, image: avatarChange };
  const tmpResult5 = RecentAvatarUtils;
  const pendingAvatarSrc = tmpResult5.getPendingAvatarSrc(obj5);
  const AVATAR_SIZE_MAP = tmp(1200).AVATAR_SIZE_MAP;
  if (null === avatarChange) {
    const tmpResult6 = AvatarUtils;
    defaultAvatarURL = tmpResult6.getDefaultAvatarURL(user.id, user.discriminator);
  } else {
    defaultAvatarURL = pendingAvatarSrc;
    if (pendingAvatarSrc == null) {
      defaultAvatarURL = tmp19;
    }
  }
  const tmp22 = UserProfileEditableTileBaseDefault;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.lqaIxI);
    cResult[15] = stringResult;
    tmp23 = stringResult;
  } else {
    tmp23 = cResult[15];
  }
  if (cResult[16] === avatarChange) {
    let tmp25;
    if (cResult[17] === user.avatar) {
      tmp25 = cResult[18];
    }
    const tmp21Result = SpinAnimationDefault;
    const Avatar = tmp(1200).Avatar;
    const tmpResult7 = AvatarUtils;
    const source = tmpResult7.makeSource(defaultAvatarURL);
    cResult[2] = avatarChange;
    cResult[3] = tmp9;
    cResult[4] = undefined !== enableSpinAnimation && enableSpinAnimation;
    cResult[5] = onPress;
    cResult[6] = user;
    cResult[7] = Avatar;
    cResult[8] = tmp21Result;
    cResult[9] = tmp22;
    cResult[10] = source;
    cResult[11] = tmp9 && (undefined !== enableSpinAnimation && enableSpinAnimation);
    cResult[12] = tmp23;
    cResult[13] = tmp25;
    cResult[14] = onPress;
    tmp14 = tmp28;
    tmp17 = onPress;
    tmp16 = tmp25;
    tmp15 = tmp23;
    tmp13 = source;
    tmp12 = tmp22;
    tmp11 = tmp21Result;
    tmp10 = Avatar;
  }
  const tmpResult8 = UserProfileEditingAccessibilityUtils;
  const avatarAccessibleValue = tmpResult8.getAvatarAccessibleValue(avatarChange, user.avatar);
  cResult[16] = avatarChange;
  cResult[17] = user.avatar;
  cResult[18] = avatarAccessibleValue;
  tmp25 = avatarAccessibleValue;
}) : (function EditableTileAvatarButtonBase(onPress) {
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
  const AVATAR_SIZE_MAP = tmp(1200).AVATAR_SIZE_MAP;
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
  const intl = tmp(1126).intl;
  const tmpResult5 = UserProfileEditingAccessibilityUtils;
  SpinAnimationDefault;
  if (tmp4) {
    tmp4 = enableSpinAnimation;
  }
  ({ source: tmpResult6.makeSource(defaultAvatarURL), size: native.AvatarSizes.XLARGE_72 });
  const Avatar = tmp(1200).Avatar;
  tmpResult6 = AvatarUtils;
  return <tmp9 accessibilityLabel={intl.string(intl2.t.lqaIxI)} accessibilityValue={tmpResult5.getAvatarAccessibleValue(avatarChange, user.avatar)} onPress={onPress}>{null}</tmp9>;
});
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TryItOutEditableTileAvatarButton(arg0) {
  let avatarChange;
  let enableSpinAnimation;
  let onPress;
  let tmp4;
  let tmp5;
  let user;
  const obj = react2;
  const cResult = obj.c(7);
  ({ user, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function u() {
      const tryItOutAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
      let pendingAvatar = tryItOutAvatar;
      if (tryItOutAvatar == null) {
        pendingAvatar = UserProfileSettingsStore.getPendingChanges().pendingAvatar;
      }
      return { avatarChange: pendingAvatar, enableSpinAnimation: null == tryItOutAvatar };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ avatarChange, enableSpinAnimation } = stateFromStoresObject);
  if (cResult[2] === avatarChange) {
    if (cResult[3] === enableSpinAnimation) {
      if (cResult[4] === onPress) {
        let tmp8;
        if (cResult[5] === user) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const tmp9 = <closure_6 user={user} avatarChange={avatarChange} onPress={onPress} enableSpinAnimation={enableSpinAnimation} />;
  cResult[2] = avatarChange;
  cResult[3] = enableSpinAnimation;
  cResult[4] = onPress;
  cResult[5] = user;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function TryItOutEditableTileAvatarButton(arg0) {
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
  return <closure_6 user={user} avatarChange={stateFromStoresObject.avatarChange} onPress={onPress} enableSpinAnimation={stateFromStoresObject.enableSpinAnimation} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default tmp3;
export const TryItOutEditableTileAvatarButton = tmp4;
