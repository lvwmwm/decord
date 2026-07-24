// Module ID: 8905
// Function ID: 70163
// Name: VideoDisabledSvgIcon
// Dependencies: [31, 27, 33, 4130, 689, 8906, 8907, 8909, 8911, 8913, 1327, 1273, 8063, 8915, 8916, 2]

// Module 8905 (VideoDisabledSvgIcon)
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function VideoDisabledSvgIcon(size) {
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = require(1273) /* Button */.IconSizes.MEDIUM;
  }
  let obj = Object.create(null);
  obj.size = 0;
  obj.style = 0;
  const merged = Object.assign(size, obj);
  const tmp5 = callback3();
  obj = require(1273) /* Button */;
  const iconStyle = obj.getIconStyle(MEDIUM);
  const flattenResult = StyleSheet.flatten(size.style);
  let tintColor;
  if (null != flattenResult) {
    tintColor = flattenResult.tintColor;
  }
  if (null == tintColor) {
    tintColor = tmp5.defaultTint.tintColor;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [iconStyle, flattenResult];
  obj["style"] = items;
  obj["viewBox"] = "0 0 24 24";
  const obj1 = { d: "M8.48485 19H13C15.2091 19 17 17.2091 17 15L19.563 17.0504C20.5451 17.8361 22 17.1368 22 15.8791V8.12094C22 7.35968 21.467 6.80301 20.8285 6.65636L8.48485 19Z", fill: tintColor };
  const items1 = [callback(require(8063) /* inlineStyles */.Path, obj1), , ];
  const obj2 = { d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z", fill: tintColor };
  items1[1] = callback(require(8063) /* inlineStyles */.Path, obj2);
  items1[2] = callback(require(8063) /* inlineStyles */.Path, { d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z", fill: tmp5.redTint.tintColor });
  obj["children"] = items1;
  return callback2(importDefault(8063), obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL };
obj.redTint = obj;
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.defaultTint = _createForOfIteratorHelperLoose;
obj.noTint = { tintColor: undefined };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let alwaysWhite;
  let state;
  let style;
  ({ style, state, alwaysWhite } = arg0);
  if (alwaysWhite === undefined) {
    alwaysWhite = false;
  }
  const tmp = callback3();
  if (require(8906) /* isStableVoiceStateEqual */.MuteDeafenIconState.DEAFENED_SERVER === state) {
    let obj = {};
    const items = [style, ];
    let redTint = null;
    if (!alwaysWhite) {
      redTint = tmp.redTint;
    }
    items[1] = redTint;
    obj.style = items;
    obj.size = "xs";
    return callback(require(8907) /* HeadphonesDenyIcon */.HeadphonesDenyIcon, obj);
  } else if (require(8906) /* isStableVoiceStateEqual */.MuteDeafenIconState.DEAFENED === state) {
    obj = {};
    const items1 = [style];
    obj.style = items1;
    obj.size = "xs";
    return callback(require(8909) /* HeadphonesSlashIcon */.HeadphonesSlashIcon, obj);
  } else if (require(8906) /* isStableVoiceStateEqual */.MuteDeafenIconState.MUTED_SERVER === state) {
    const obj1 = {};
    const items2 = [style, ];
    let redTint1 = null;
    if (!alwaysWhite) {
      redTint1 = tmp.redTint;
    }
    items2[1] = redTint1;
    obj1.style = items2;
    obj1.size = "xs";
    return callback(require(8911) /* MicrophoneDenyIcon */.MicrophoneDenyIcon, obj1);
  } else if (require(8906) /* isStableVoiceStateEqual */.MuteDeafenIconState.MUTED_LOCAL === state) {
    const obj2 = {};
    const items3 = [style];
    obj2.style = items3;
    obj2.size = "xs";
    return callback(require(8911) /* MicrophoneDenyIcon */.MicrophoneDenyIcon, obj2);
  } else if (require(8906) /* isStableVoiceStateEqual */.MuteDeafenIconState.MUTED === state) {
    const obj3 = {};
    const items4 = [style];
    obj3.style = items4;
    obj3.size = "xs";
    return callback(require(8913) /* MicrophoneSlashIcon */.MicrophoneSlashIcon, obj3);
  } else {
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    obj.assertNever(state);
  }
});
const memoResult1 = importAllResult.memo((state) => {
  state = state.state;
  let obj = Object.create(null);
  obj.state = 0;
  const merged = Object.assign(state, obj);
  if (require(8906) /* isStableVoiceStateEqual */.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj["source"] = importDefault(8915);
    const items = [merged.style, tmp3.noTint];
    obj["style"] = items;
    return callback(require(1273) /* Button */.Icon, obj);
  } else if (require(8906) /* isStableVoiceStateEqual */.VideoIconState.VIDEO_DISABLED_LOCAL === state) {
    const obj1 = {};
    const merged2 = Object.assign(merged);
    return callback(VideoDisabledSvgIcon, obj1);
  } else if (require(8906) /* isStableVoiceStateEqual */.VideoIconState.VIDEO_ACTIVE === state) {
    const obj2 = {};
    const merged3 = Object.assign(merged);
    obj2["source"] = importDefault(8916);
    return callback(require(1273) /* Button */.Icon, obj2);
  } else {
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    obj.assertNever(state);
  }
  tmp3 = callback3();
});
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = memoResult1;
