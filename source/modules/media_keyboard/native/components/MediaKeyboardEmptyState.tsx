// Module ID: 9710
// Function ID: 75542
// Name: MediaKeyboardEmptyState
// Dependencies: [31, 27, 4344, 33, 4130, 689, 4126, 4543, 5791, 1212, 9711, 9705, 9712, 2]
// Exports: getMediaEmptyStateComponentOrNull

// Module 9710 (MediaKeyboardEmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NativePermissionStatus } from "NativePermissionStatus";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = c8();
    obj = { style: tmp.container };
    items = [, , ];
    items[0] = jsx(Image, { source: imageSource });
    obj = { variant: "text-sm/semibold", color: "text-muted" };
    obj.style = tmp.label;
    obj.children = label;
    items[1] = jsx(require("Text").Text, obj);
    items[2] = jsx(require("Button").Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj.children = items;
    return jsxs(View, obj);
  }
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_32, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { textAlign: "center", marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { textAlign: "center", marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("NativePermissionStatus").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  let photoPermissionStatus;
  let showCameraButton;
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          let obj = { actionIcon: callback(require(5791) /* SettingsIcon */.SettingsIcon, { color: "white", size: "sm" }) };
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj.actionLabel = intl3.string(require(1212) /* getSystemLocale */.t.JuXTi6);
          obj.actionPress = tmp2;
          obj.imageSource = importDefault(9711);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          obj.label = intl4.string(require(1212) /* getSystemLocale */.t["5g7NcN"]);
          return callback(MediaKeyboardEmptyState, obj);
        } else if (showCameraButton) {
          obj = { actionIcon: callback(require(9705) /* CameraIcon */.CameraIcon, { color: "white", size: "sm" }) };
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.actionLabel = intl.string(require(1212) /* getSystemLocale */.t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = importDefault(9712);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj.label = intl2.string(require(1212) /* getSystemLocale */.t.YOvRBZ);
          return callback(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  obj = { actionIcon: callback(require(5791) /* SettingsIcon */.SettingsIcon, { color: "white", size: "sm" }) };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.actionLabel = intl5.string(require(1212) /* getSystemLocale */.t["457oeG"]);
  obj.actionPress = photosEmpty.onPressPrivacySettings;
  obj.imageSource = importDefault(9711);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl6.string(require(1212) /* getSystemLocale */.t["8p9jGu"]);
  return callback(MediaKeyboardEmptyState, obj);
};
