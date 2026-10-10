// Module ID: 10047
// Function ID: 10048
// Name: MediaKeyboardEmptyState
// Dependencies: [19, 17, 7482, 21, 5092, 587, 558, 576, 6156, 5088, 5379, 7091, 1126, 10048, 10042, 10049, 2]
// Exports: getMediaEmptyStateComponentOrNull

// Module 10047 (MediaKeyboardEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import SettingsIcon from "SettingsIcon" /* 7091 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7482 */;
import CameraIcon from "CameraIcon" /* 10042 */;
import AssetRegistryDefault from "AssetRegistry" /* 10048 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10049 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardEmptyState(arg0) {
  let actionIcon;
  let actionLabel;
  let actionPress;
  let imageSource;
  let items;
  let label;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = hasOwnProperty(FastImageDefault, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === label) {
    let tmp9;
    if (cResult[3] === tmp4.label) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === actionIcon) {
      if (cResult[6] === actionLabel) {
        let tmp11;
        if (cResult[7] === actionPress) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp9) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
        const obj3 = { style: tmp4.container, children: items };
        items = [tmp5, tmp9, tmp11];
        const tmp17 = metroRequire(View, obj3);
        cResult[9] = tmp4.container;
        cResult[10] = tmp5;
        cResult[11] = tmp9;
        cResult[12] = tmp11;
        cResult[13] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj4 = { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress };
    const tmp13 = hasOwnProperty(components_Button_Button.Button, obj4);
    cResult[5] = actionIcon;
    cResult[6] = actionLabel;
    cResult[7] = actionPress;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: tmp4.label, children: label };
  const tmp10 = hasOwnProperty(Text_Text.Text, obj5);
  cResult[2] = label;
  cResult[3] = tmp4.label;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function MediaKeyboardEmptyState(arg0) {
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
});
let closure_8 = tmp5;
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default tmp5;
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
          const obj2 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl3.string(intl7.t.JuXTi6), actionPress: tmp2, imageSource: AssetRegistryDefault, label: intl4.string(intl7.t["5g7NcN"]) };
          intl3 = intl7.intl;
          intl4 = intl7.intl;
          return hasOwnProperty(closure_8, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: hasOwnProperty(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: intl.string(intl7.t.tpoWUd), actionPress: tmp, imageSource: AssetRegistryDefault2, label: intl2.string(intl7.t.YOvRBZ) };
          intl = intl7.intl;
          intl2 = intl7.intl;
          return hasOwnProperty(closure_8, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl5.string(intl7.t["457oeG"]), actionPress: onPressPrivacySettings, imageSource: AssetRegistryDefault, label: intl6.string(intl7.t["8p9jGu"]) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  return hasOwnProperty(closure_8, obj3);
};
