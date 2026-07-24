// Module ID: 16173
// Function ID: 125310
// Name: TouchableUploadAvatar
// Dependencies: [31, 27, 33, 4130, 689, 12921, 4660, 1212, 5085, 1273, 11831, 2]
// Exports: default

// Module 16173 (TouchableUploadAvatar)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { avatarContainer: { display: "flex", paddingTop: 24 } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
_createForOfIteratorHelperLoose.defaultLogoStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.uploadedAvatarStyle = { width: 200, height: 200, borderRadius: 100, position: "relative" };
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
_createForOfIteratorHelperLoose.avatarWrapper = obj1;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, tintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
_createForOfIteratorHelperLoose.uploadAvatarWrapper = obj2;
_createForOfIteratorHelperLoose.uploadAvatarIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, alignSelf: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  let avatarSource;
  let showPendingAvatar;
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  if (!showPendingAvatar) {
    let tmp3 = importDefault(12921);
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    if (null != avatarSource) {
      let defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    let obj = { style: tmp.avatarContainer };
    obj = { onPress: onSelectAvatar.onSelectAvatar, accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["70lEQe"]);
    obj = { style: tmp.avatarWrapper };
    const obj1 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    const items = [callback(importDefault(5085), obj1), ];
    const obj2 = { style: tmp.uploadAvatarWrapper };
    const obj3 = { size: require(1273) /* Button */.Icon.Sizes.MEDIUM, source: importDefault(11831), style: tmp.uploadAvatarIcon };
    obj2.children = callback(require(1273) /* Button */.Icon, obj3);
    items[1] = callback(View, obj2);
    obj.children = items;
    obj.children = callback2(View, obj);
    obj.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
    return callback(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};
