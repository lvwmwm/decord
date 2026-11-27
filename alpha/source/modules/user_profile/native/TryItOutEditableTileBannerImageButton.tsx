// Module ID: 16171
// Function ID: 16172
// Name: TryItOutEditableTileBannerImageButton
// Dependencies: [19, 17, 5044, 6376, 6163, 21, 1089, 575, 504, 4868, 6162, 16172, 16173, 1112, 16165, 5730, 1413, 2]
// Exports: default

// Module 16171 (TryItOutEditableTileBannerImageButton)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import AvatarUtils from "AvatarUtils" /* 1413 */;
import UserSettings from "UserSettings" /* 4868 */;
import FastImageDefault from "FastImage" /* 5730 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 6162 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 16165 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 16173 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
import ColorUtils from "utils/ColorUtils" /* 1089 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function EditableTileBannerImageButtonBase(bannerChange) {
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
  const hex = tmp5(16172)(primaryColor).hex;
  UserProfileEditableTileBaseDefault;
  const intl = tmp(1112).intl;
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
}
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_9 = ColorUtils.hex2int(nativeDefault.unsafe_rawColors.PRIMARY_800);
const result = size.fileFinishedImporting("modules/user_profile/native/TryItOutEditableTileBannerImageButton.tsx");

export default function TryItOutEditableTileBannerImageButton(user) {
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
  return <EditableTileBannerImageButtonBase userId={user.id} bannerChange={stateFromStoresObject.tryItOutBanner} currentProfileBanner={stateFromStoresObject.currentProfileBanner} onPress={onPress} />;
};
