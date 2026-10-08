// Module ID: 14747
// Function ID: 14748
// Name: TryItOutEditableTileBannerImageButton
// Dependencies: [19, 17, 5079, 8260, 7309, 21, 1103, 587, 558, 576, 504, 2040, 8286, 14748, 14749, 1126, 14746, 6164, 1414, 2]

// Module 14747 (TryItOutEditableTileBannerImageButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import UserSettings from "UserSettings" /* 2040 */;
import FastImageDefault from "FastImage" /* 6164 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8286 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14746 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 14749 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8260 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import ColorUtils from "utils/ColorUtils" /* 1103 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_9 = ColorUtils.hex2int(nativeDefault.unsafe_rawColors.PRIMARY_800);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileBannerImageButtonBase(userId) {
  let bannerChange;
  let currentProfileBanner;
  let onPress;
  let previewBanner;
  let tmp15;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(12);
  ({ bannerChange, currentProfileBanner, onPress } = userId);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
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
  const GifAutoPlay = tmp(2040).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp10 = useDisplayProfileDefault(userId);
  if (tmp10 != null) {
    let tmp12 = !stateFromStores;
    const getPreviewBanner = tmp10.getPreviewBanner;
    if (!stateFromStores) {
      tmp12 = setting;
    }
    previewBanner = getPreviewBanner(bannerChange, tmp12, 600);
  }
  let primaryColor;
  if (tmp10 != null) {
    primaryColor = tmp10.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = closure_9;
  }
  const hex = tmp9(14748)(primaryColor).hex;
  const tmp9Result = UserProfileEditableTileBaseDefault;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.yiRnNO);
    cResult[2] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === bannerChange) {
    let tmp17;
    let tmp22;
    let tmp23;
    if (cResult[4] === currentProfileBanner) {
      tmp17 = cResult[5];
    }
    if (null != previewBanner) {
      FastImageDefault;
      tmp22 = <tmp9Result2 source={AvatarUtils.makeSource(previewBanner)} style={_false.absoluteFill} resizeMode="cover" />;
      tmp23 = jsx;
      const tmpResult3 = AvatarUtils;
    } else {
      const items1 = [_false.absoluteFill, ];
      const obj4 = { backgroundColor: hex };
      items1[1] = obj4;
      tmp22 = <React3 style={items1} />;
      tmp23 = jsx;
    }
    if (cResult[6] === tmp9Result) {
      if (cResult[7] === onPress) {
        if (cResult[8] === tmp15) {
          if (cResult[9] === tmp17) {
            let tmp27;
            if (cResult[10] === tmp22) {
              tmp27 = cResult[11];
            }
            return tmp27;
          }
        }
      }
    }
    const obj5 = { onPress, accessibilityLabel: tmp15, accessibilityValue: tmp17, children: tmp22 };
    const tmp23Result = tmp23(tmp9Result, obj5);
    cResult[6] = tmp9Result;
    cResult[7] = onPress;
    cResult[8] = tmp15;
    cResult[9] = tmp17;
    cResult[10] = tmp22;
    cResult[11] = tmp23Result;
    tmp27 = tmp23Result;
  }
  const tmpResult4 = UserProfileEditingAccessibilityUtils;
  const bannerAccessibleValue = tmpResult4.getBannerAccessibleValue(bannerChange, currentProfileBanner);
  cResult[3] = bannerChange;
  cResult[4] = currentProfileBanner;
  cResult[5] = bannerAccessibleValue;
  tmp17 = bannerAccessibleValue;
}) : (function EditableTileBannerImageButtonBase(bannerChange) {
  let currentProfileBanner;
  let items1;
  let onPress;
  let tmp10Result;
  let tmpResult2;
  let useReducedMotion;
  let userId;
  bannerChange = bannerChange.bannerChange;
  ({ userId, currentProfileBanner, onPress } = bannerChange);
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp6 = useDisplayProfileDefault(userId);
  let previewBanner;
  if (tmp6 != null) {
    let tmp8 = !stateFromStores;
    const getPreviewBanner = tmp6.getPreviewBanner;
    if (!stateFromStores) {
      tmp8 = setting;
    }
    previewBanner = getPreviewBanner(bannerChange, tmp8, 600);
  }
  let primaryColor;
  if (tmp6 != null) {
    primaryColor = tmp6.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = closure_9;
  }
  const hex = tmp5(14748)(primaryColor).hex;
  UserProfileEditableTileBaseDefault;
  const intl = tmp(1126).intl;
  const tmpResult = UserProfileEditingAccessibilityUtils;
  if (null != previewBanner) {
    const obj3 = { source: tmpResult2.makeSource(previewBanner), style: _false.absoluteFill, resizeMode: "cover" };
    const tmp5Result2 = FastImageDefault;
    tmpResult2 = AvatarUtils;
    tmp10Result = tmp10(tmp5Result2, obj3);
  } else {
    const obj4 = { style: items1 };
    items1 = [_false.absoluteFill, ];
    const obj5 = { backgroundColor: hex };
    items1[1] = obj5;
    tmp10Result = tmp10(React3, obj4);
  }
  return <tmp5Result onPress={onPress} accessibilityLabel={intl.string(intl2.t.yiRnNO)} accessibilityValue={tmpResult.getBannerAccessibleValue(bannerChange, currentProfileBanner)}>{tmp10Result}</tmp5Result>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TryItOutEditableTileBannerImageButton(user) {
  let currentProfileBanner;
  let first;
  let tmp7;
  let tmp8;
  let tryItOutBanner;
  let obj = user(576);
  const cResult = obj.c(9);
  const tmp = user;
  user = user.user;
  const onPress = user.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore, UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      let banner;
      const obj = { tryItOutBanner: UserProfileSettingsStore.getTryItOutChanges().tryItOutBanner, currentProfileBanner: banner };
      const userProfile = UserProfileStore.getUserProfile(user.id);
      banner = undefined;
      if (userProfile != null) {
        banner = userProfile.banner;
      }
      return obj;
    };
    const items1 = [user.id];
    cResult[1] = user.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
  ({ tryItOutBanner, currentProfileBanner } = stateFromStoresObject);
  if (cResult[4] === currentProfileBanner) {
    if (cResult[5] === onPress) {
      if (cResult[6] === tryItOutBanner) {
        let tmp10;
        if (cResult[7] === user.id) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = <closure_10 userId={user.id} bannerChange={tryItOutBanner} currentProfileBanner={currentProfileBanner} onPress={onPress} />;
  cResult[4] = currentProfileBanner;
  cResult[5] = onPress;
  cResult[6] = tryItOutBanner;
  cResult[7] = user.id;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : (function TryItOutEditableTileBannerImageButton(user) {
  user = user.user;
  const onPress = user.onPress;
  let obj = user(504);
  const items = [UserProfileSettingsStore, UserProfileStore];
  const items1 = [user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let banner;
    const obj = { tryItOutBanner: UserProfileSettingsStore.getTryItOutChanges().tryItOutBanner, currentProfileBanner: banner };
    const userProfile = UserProfileStore.getUserProfile(user.id);
    banner = undefined;
    if (userProfile != null) {
      banner = userProfile.banner;
    }
    return obj;
  }, items1);
  return <closure_10 userId={user.id} bannerChange={stateFromStoresObject.tryItOutBanner} currentProfileBanner={stateFromStoresObject.currentProfileBanner} onPress={onPress} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/TryItOutEditableTileBannerImageButton.tsx");

export default tmp4;
