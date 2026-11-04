// Module ID: 10555
// Function ID: 10556
// Name: MediaKeyboardEmptyState
// Dependencies: [19, 17, 7940, 21, 5014, 575, 5717, 5624, 5634, 7561, 1113, 10556, 10550, 10557, 2]
// Exports: getMediaEmptyStateComponentOrNull

// Module 10555 (MediaKeyboardEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import SettingsIcon from "SettingsIcon" /* 7561 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7940 */;
import CameraIcon from "CameraIcon" /* 10550 */;
import AssetRegistryDefault from "AssetRegistry" /* 10556 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10557 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    let actionIcon;
    let actionLabel;
    let actionPress;
    let imageSource;
    let items;
    let label;
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
    const tmp = closure_7();
    const obj = { style: tmp.container, children: items };
    items = [hasOwnProperty(FastImageDefault, { source: imageSource }), , ];
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = hasOwnProperty(Text_Text.Text, obj2);
    items[2] = hasOwnProperty(components_Button_Button.Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    return metroRequire(View, obj);
  }
}
const View = react_native.View;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
const metroImportDefault = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export function getMediaEmptyStateComponentOrNull(photosEmpty) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let photoPermissionStatus;
  let showCameraButton;
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  photosEmpty = photosEmpty.photosEmpty;
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  const onPressPrivacySettings = photosEmpty.onPressPrivacySettings;
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          const obj2 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl3.string(intl7.t.JuXTi6), actionPress: tmp2, imageSource: AssetRegistryDefault, label: intl4.string(intl7.t["5g7NcN"]) };
          intl3 = intl7.intl;
          intl4 = intl7.intl;
          return hasOwnProperty(MediaKeyboardEmptyState, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: hasOwnProperty(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: intl.string(intl7.t.tpoWUd), actionPress: tmp, imageSource: AssetRegistryDefault2, label: intl2.string(intl7.t.YOvRBZ) };
          intl = intl7.intl;
          intl2 = intl7.intl;
          return hasOwnProperty(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl5.string(intl7.t["457oeG"]), actionPress: onPressPrivacySettings, imageSource: AssetRegistryDefault, label: intl6.string(intl7.t["8p9jGu"]) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  return hasOwnProperty(MediaKeyboardEmptyState, obj3);
}
