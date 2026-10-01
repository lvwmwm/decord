// Module ID: 10121
// Function ID: 10122
// Name: MediaKeyboardEmptyState
// Dependencies: [19, 17, 5045, 21, 4836, 576, 4832, 5281, 6798, 1115, 10122, 10116, 10123, 2]
// Exports: getMediaEmptyStateComponentOrNull

// Module 10121 (MediaKeyboardEmptyState)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import SettingsIcon from "SettingsIcon" /* 6798 */;
import CameraIcon from "CameraIcon" /* 10116 */;
import AssetRegistryDefault from "AssetRegistry" /* 10122 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10123 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
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
    const tmp = closure_8();
    const obj = { style: tmp.container, children: items };
    items = [metroRequire(_false, { source: imageSource }), , ];
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = metroRequire(Text_Text.Text, obj2);
    items[2] = metroRequire(components_Button_Button.Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    return metroImportDefault(React3, obj);
  }
}
({ Image: c3, View: closure_4 } = react_native);
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
const metroImportAll = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
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
          const obj2 = { actionIcon: metroRequire(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl3.string(intl7.t.JuXTi6), actionPress: tmp2, imageSource: AssetRegistryDefault, label: intl4.string(intl7.t["5g7NcN"]) };
          intl3 = intl7.intl;
          intl4 = intl7.intl;
          return metroRequire(MediaKeyboardEmptyState, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: metroRequire(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: intl.string(intl7.t.tpoWUd), actionPress: tmp, imageSource: AssetRegistryDefault2, label: intl2.string(intl7.t.YOvRBZ) };
          intl = intl7.intl;
          intl2 = intl7.intl;
          return metroRequire(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: metroRequire(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl5.string(intl7.t["457oeG"]), actionPress: onPressPrivacySettings, imageSource: AssetRegistryDefault, label: intl6.string(intl7.t["8p9jGu"]) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  return metroRequire(MediaKeyboardEmptyState, obj3);
};
