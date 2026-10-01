// Module ID: 9132
// Function ID: 9133
// Name: VoiceStateIcons
// Dependencies: [19, 17, 21, 4836, 576, 9133, 9134, 9136, 9138, 9140, 1370, 1177, 7909, 9142, 9143, 2]

// Module 9132 (VoiceStateIcons)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9133 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9136 */;
import MicrophoneDenyIcon2 from "MicrophoneDenyIcon" /* 9138 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9140 */;
import AssetRegistryDefault from "AssetRegistry" /* 9142 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9143 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function VideoDisabledSvgIcon(size) {
  let items;
  let items1;
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = native.IconSizes.MEDIUM;
  }
  const style = size.style;
  const merged = Object.assign(size, Object.assign({ size: 0, style: 0 }));
  const tmp4 = closure_6();
  const obj = native;
  const iconStyle = obj.getIconStyle(MEDIUM);
  const flattenResult = StyleSheet.flatten(style);
  let tintColor;
  if (flattenResult != null) {
    tintColor = flattenResult.tintColor;
  }
  if (tintColor == null) {
    tintColor = tmp4.defaultTint.tintColor;
  }
  const obj2 = { style: items, viewBox: "0 0 24 24", children: items1 };
  const tmp10 = inlineStylesDefault;
  const merged1 = Object.assign(merged);
  items = [iconStyle, flattenResult];
  items1 = [React3(inlineStyles.Path, { d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z", fill: tintColor }), React3(inlineStyles.Path, { d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z", fill: tintColor }), ];
  const obj3 = { d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z", fill: tmp4.redTint.tintColor };
  items1[2] = React3(inlineStyles.Path, obj3);
  return hasOwnProperty(tmp10, obj2);
}
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { redTint: obj2, defaultTint: obj3, noTint: { tintColor: "Path" } };
obj2 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let alwaysWhite;
  let items1;
  let items3;
  let items4;
  let state;
  let style;
  ({ style, state, alwaysWhite } = arg0);
  if (alwaysWhite === undefined) {
    alwaysWhite = false;
  }
  const tmp = closure_6();
  if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER === state) {
    const items = [style, ];
    let redTint = null;
    const HeadphonesDenyIcon = tmp2(9134).HeadphonesDenyIcon;
    const tmp10 = React3;
    if (!alwaysWhite) {
      redTint = tmp.redTint;
    }
    const obj = { style: items, size: "xs" };
    items[1] = redTint;
    return tmp10(HeadphonesDenyIcon, obj);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED === state) {
    const obj2 = { style: items1, size: "xs" };
    items1 = [style];
    return React3(HeadphonesSlashIcon.HeadphonesSlashIcon, obj2);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_SERVER === state) {
    const items2 = [style, ];
    let redTint1 = null;
    const MicrophoneDenyIcon = tmp2(9138).MicrophoneDenyIcon;
    const tmp7 = React3;
    if (!alwaysWhite) {
      redTint1 = tmp.redTint;
    }
    const obj3 = { style: items2, size: "xs" };
    items2[1] = redTint1;
    return tmp7(MicrophoneDenyIcon, obj3);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED_LOCAL === state) {
    const obj4 = { style: items3, size: "xs" };
    items3 = [style];
    return React3(MicrophoneDenyIcon2.MicrophoneDenyIcon, obj4);
  } else if (VoiceStateIconUtils.MuteDeafenIconState.MUTED === state) {
    const obj5 = { style: items4, size: "xs" };
    items4 = [style];
    return React3(MicrophoneSlashIcon.MicrophoneSlashIcon, obj5);
  } else {
    const tmp2Result = GlobalUtils;
    tmp2Result.assertNever(state);
  }
});
const memoResult1 = react.memo((state) => {
  let items;
  state = state.state;
  const merged = Object.assign(state, Object.assign({ state: 0 }));
  const tmp2 = closure_6();
  if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
    const obj = { source: AssetRegistryDefault, style: items };
    const Icon2 = tmp3(1177).Icon;
    const merged1 = Object.assign(merged);
    items = [merged.style, tmp2.noTint];
    return React3(Icon2, obj);
  } else if (VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
    const obj2 = {};
    const merged2 = Object.assign(merged);
    return React3(VideoDisabledSvgIcon, obj2);
  } else if (VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE === state) {
    const obj3 = { source: AssetRegistryDefault2 };
    const Icon = tmp3(1177).Icon;
    const merged3 = Object.assign(merged);
    return React3(Icon, obj3);
  } else {
    const tmp3Result = GlobalUtils;
    tmp3Result.assertNever(state);
  }
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = memoResult1;
