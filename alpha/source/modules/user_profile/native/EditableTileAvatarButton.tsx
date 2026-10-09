// Module ID: 14857
// Function ID: 14858
// Name: EditableTileAvatarButton
// Dependencies: [19, 5080, 8268, 21, 558, 576, 504, 2041, 8277, 1200, 1415, 14856, 1126, 14853, 14787, 2]

// Module 14857 (EditableTileAvatarButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8277 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14853 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 14856 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp21;
const SpinAnimationDefault = tmp21(14787);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileAvatarButtonBase(arg0) {
  let avatarChange;
  let defaultAvatarURL;
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
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let user;
  const obj = react2;
  const cResult = obj.c(31);
  ({ user, avatarChange, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const GifAutoPlay = tmp(2041).GifAutoPlay;
  let tmp9 = null == avatarChange;
  const setting = GifAutoPlay.useSetting();
  if (tmp9) {
    tmp9 = !stateFromStores;
  }
  if (tmp9) {
    tmp9 = setting;
  }
  if (cResult[2] === avatarChange) {
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === user) {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
          tmp12 = cResult[8];
          tmp13 = cResult[9];
          tmp14 = cResult[10];
          tmp15 = cResult[11];
          tmp16 = cResult[12];
          tmp17 = cResult[13];
        }
        if (cResult[18] === tmp10) {
          let tmp29;
          if (cResult[19] === tmp13) {
            tmp29 = cResult[20];
          }
          if (cResult[21] === tmp11) {
            if (cResult[22] === tmp14) {
              let tmp32;
              if (cResult[23] === tmp29) {
                tmp32 = cResult[24];
              }
              if (cResult[25] === tmp12) {
                if (cResult[26] === tmp15) {
                  if (cResult[27] === tmp16) {
                    if (cResult[28] === tmp17) {
                      let tmp35;
                      if (cResult[29] === tmp32) {
                        tmp35 = cResult[30];
                      }
                      return tmp35;
                    }
                  }
                }
              }
              const tmp37 = <tmp12 accessibilityLabel={tmp15} accessibilityValue={tmp16} onPress={tmp17}>{tmp32}</tmp12>;
              cResult[25] = tmp12;
              cResult[26] = tmp15;
              cResult[27] = tmp16;
              cResult[28] = tmp17;
              cResult[29] = tmp32;
              cResult[30] = tmp37;
              tmp35 = tmp37;
            }
          }
          const tmp34 = <tmp11 shouldAnimate={tmp14}>{tmp29}</tmp11>;
          cResult[21] = tmp11;
          cResult[22] = tmp14;
          cResult[23] = tmp29;
          cResult[24] = tmp34;
          tmp32 = tmp34;
        }
        const tmp31 = <tmp10 source={tmp13} size={native.AvatarSizes.XLARGE_72} />;
        cResult[18] = tmp10;
        cResult[19] = tmp13;
        cResult[20] = tmp31;
        tmp29 = tmp31;
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
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.lqaIxI);
    cResult[14] = stringResult;
    tmp23 = stringResult;
  } else {
    tmp23 = cResult[14];
  }
  if (cResult[15] === avatarChange) {
    let tmp25;
    if (cResult[16] === user.avatar) {
      tmp25 = cResult[17];
    }
    const tmp21Result = SpinAnimationDefault;
    const Avatar = tmp(1200).Avatar;
    const tmpResult7 = AvatarUtils;
    const source = tmpResult7.makeSource(defaultAvatarURL);
    cResult[2] = avatarChange;
    cResult[3] = onPress;
    cResult[4] = tmp9;
    cResult[5] = user;
    cResult[6] = Avatar;
    cResult[7] = tmp21Result;
    cResult[8] = tmp22;
    cResult[9] = source;
    cResult[10] = tmp9;
    cResult[11] = tmp23;
    cResult[12] = tmp25;
    cResult[13] = onPress;
    tmp16 = tmp25;
    tmp17 = onPress;
    tmp15 = tmp23;
    tmp14 = tmp9;
    tmp13 = source;
    tmp12 = tmp22;
    tmp11 = tmp21Result;
    tmp10 = Avatar;
  }
  const tmpResult8 = UserProfileEditingAccessibilityUtils;
  const avatarAccessibleValue = tmpResult8.getAvatarAccessibleValue(avatarChange, user.avatar);
  cResult[15] = avatarChange;
  cResult[16] = user.avatar;
  cResult[17] = avatarAccessibleValue;
  tmp25 = avatarAccessibleValue;
}) : (function EditableTileAvatarButtonBase(onPress) {
  let avatarChange;
  let defaultAvatarURL;
  let tmpResult6;
  let useReducedMotion;
  let user;
  ({ user, avatarChange } = onPress);
  onPress = onPress.onPress;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  let tmp5 = null == avatarChange;
  const setting = GifAutoPlay.useSetting();
  if (tmp5) {
    tmp5 = !stateFromStores;
  }
  if (tmp5) {
    tmp5 = setting;
  }
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
      defaultAvatarURL = tmp7;
    }
  }
  UserProfileEditableTileBaseDefault;
  const intl = tmp(1126).intl;
  const tmpResult5 = UserProfileEditingAccessibilityUtils;
  ({ source: tmpResult6.makeSource(defaultAvatarURL), size: native.AvatarSizes.XLARGE_72 });
  SpinAnimationDefault;
  const Avatar = tmp(1200).Avatar;
  tmpResult6 = AvatarUtils;
  return <tmp9 accessibilityLabel={intl.string(intl2.t.lqaIxI)} accessibilityValue={tmpResult5.getAvatarAccessibleValue(avatarChange, user.avatar)} onPress={onPress}>{null}</tmp9>;
});
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TryItOutEditableTileAvatarButton(arg0) {
  let onPress;
  let tmp4;
  let tmp5;
  let tryItOutChanges;
  let user;
  const obj = react2;
  const cResult = obj.c(6);
  ({ user, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function o() {
      return tryItOutChanges.getTryItOutChanges().tryItOutAvatar;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === onPress) {
      let tmp8;
      if (cResult[4] === user) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const tmp9 = <closure_6 user={user} avatarChange={stateFromStores} onPress={onPress} />;
  cResult[2] = stateFromStores;
  cResult[3] = onPress;
  cResult[4] = user;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function TryItOutEditableTileAvatarButton(arg0) {
  let onPress;
  let tryItOutChanges;
  let user;
  ({ user, onPress } = arg0);
  const items = [UserProfileSettingsStore];
  const obj = get_initialized;
  return <closure_6 user={user} avatarChange={obj.useStateFromStores(items, () => tryItOutChanges.getTryItOutChanges().tryItOutAvatar)} onPress={onPress} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default tmp3;
export const TryItOutEditableTileAvatarButton = tmp4;
