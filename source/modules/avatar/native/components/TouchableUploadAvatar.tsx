// Module ID: 15997
// Function ID: 122727
// Name: TouchableUploadAvatar
// Dependencies: []
// Exports: default

// Module 15997 (TouchableUploadAvatar)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { avatarContainer: {} };
obj = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
obj.defaultLogoStyle = obj;
obj.uploadedAvatarStyle = { flex: true, backgroundColor: true, marginVertical: true, padding: true };
const obj1 = { 9223372036854775807: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, -9223372036854775808: null, 0: null, 0: null, 0: null, 9223372036854775807: null, 0: null, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.avatarWrapper = obj1;
const tmp3 = arg1(dependencyMap[2]);
obj.uploadAvatarWrapper = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[4]).radii.round, tintColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[4]).radii.round, tintColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.uploadAvatarIcon = { tintColor: importDefault(dependencyMap[4]).colors.WHITE, alignSelf: "center" };
let closure_6 = obj.createStyles(obj);
const obj3 = { tintColor: importDefault(dependencyMap[4]).colors.WHITE, alignSelf: "center" };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  let avatarSource;
  let showPendingAvatar;
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = callback3();
  if (!showPendingAvatar) {
    let tmp3 = importDefault(dependencyMap[5]);
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    if (null != avatarSource) {
      let defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    let obj = { style: tmp.avatarContainer };
    obj = { onPress: onSelectAvatar.onSelectAvatar, accessibilityRole: "button" };
    const intl = arg1(dependencyMap[7]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.70lEQe);
    obj = { style: tmp.avatarWrapper };
    const obj1 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    const items = [callback(importDefault(dependencyMap[8]), obj1), ];
    const obj2 = { style: tmp.uploadAvatarWrapper };
    const obj3 = { size: arg1(dependencyMap[9]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[10]), style: tmp.uploadAvatarIcon };
    obj2.children = callback(arg1(dependencyMap[9]).Icon, obj3);
    items[1] = callback(View, obj2);
    obj.children = items;
    obj.children = callback2(View, obj);
    obj.children = callback(arg1(dependencyMap[6]).PressableOpacity, obj);
    return callback(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};
