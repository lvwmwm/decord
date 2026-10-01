// Module ID: 17214
// Function ID: 17215
// Name: TouchableUploadAvatar
// Dependencies: [19, 17, 21, 4836, 576, 13407, 5435, 1115, 5899, 1177, 12289, 2]
// Exports: default

// Module 17214 (TouchableUploadAvatar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 12289 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13407 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: obj2, uploadedAvatarStyle: { width: 200, height: 200, borderRadius: 100, position: "relative" }, avatarWrapper: size, uploadAvatarWrapper: size1, uploadAvatarIcon: obj3 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
createStyles = createStyles.createStyles;
size = { borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: nativeDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, tintColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
obj3 = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  let Icon;
  let PressableOpacity;
  let avatarSource;
  let intl;
  let items;
  let obj2;
  let obj3;
  let obj6;
  let showPendingAvatar;
  let tmp3;
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  onSelectAvatar = onSelectAvatar.onSelectAvatar;
  const tmp = closure_6();
  if (!showPendingAvatar) {
    tmp3 = AssetRegistryDefault2;
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    let defaultLogoStyle;
    if (null != avatarSource) {
      defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    const obj = { style: tmp.avatarContainer, children: React3(PressableOpacity, obj2) };
    obj2 = { onPress: onSelectAvatar, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t["70lEQe"]), children: hasOwnProperty(View, obj3) };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { style: tmp.avatarWrapper, children: items };
    const obj4 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    items = [React3(FastImageDefault, obj4), ];
    const obj5 = { style: tmp.uploadAvatarWrapper, children: React3(Icon, obj6) };
    obj6 = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault, style: tmp.uploadAvatarIcon };
    Icon = native.Icon;
    items[1] = React3(View, obj5);
    return React3(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};
