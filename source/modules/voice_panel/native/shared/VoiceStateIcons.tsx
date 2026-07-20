// Module ID: 8854
// Function ID: 69871
// Name: VideoDisabledSvgIcon
// Dependencies: []

// Module 8854 (VideoDisabledSvgIcon)
function VideoDisabledSvgIcon(size) {
  let MEDIUM = size.size;
  if (MEDIUM === undefined) {
    MEDIUM = arg1(dependencyMap[11]).IconSizes.MEDIUM;
  }
  let obj = Object.create(null);
  obj.size = 0;
  obj.style = 0;
  const merged = Object.assign(size, obj);
  const tmp5 = callback3();
  obj = arg1(dependencyMap[11]);
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
  const items1 = [callback(arg1(dependencyMap[12]).Path, obj1), , ];
  const obj2 = { d: "M14.9873 5.52783C14.4019 5.192 13.7233 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 15.9811 2.35325 16.8798 2.93949 17.5757L14.9873 5.52783Z", fill: tintColor };
  items1[1] = callback(arg1(dependencyMap[12]).Path, obj2);
  items1[2] = callback(arg1(dependencyMap[12]).Path, { d: "M21.2785 2.70712C20.888 2.31659 20.2549 2.31659 19.8643 2.70711L2.70711 19.8643C2.31658 20.2549 2.31658 20.888 2.70711 21.2785L2.72146 21.2929C3.11199 21.6834 3.74515 21.6834 4.13567 21.2929L21.2929 4.13568C21.6834 3.74515 21.6834 3.11199 21.2929 2.72147L21.2785 2.70712Z", fill: tmp5.redTint.tintColor });
  obj["children"] = items1;
  return callback2(importDefault(dependencyMap[12]), obj);
}
const importAllResult = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { tintColor: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_CRITICAL };
obj.redTint = obj;
obj1 = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.defaultTint = obj1;
obj.noTint = { tintColor: undefined };
let closure_6 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo((arg0) => {
  let alwaysWhite;
  let state;
  let style;
  ({ style, state, alwaysWhite } = arg0);
  if (alwaysWhite === undefined) {
    alwaysWhite = false;
  }
  const tmp = callback3();
  if (arg1(dependencyMap[5]).MuteDeafenIconState.DEAFENED_SERVER === state) {
    let obj = {};
    const items = [style, ];
    let redTint = null;
    if (!alwaysWhite) {
      redTint = tmp.redTint;
    }
    items[1] = redTint;
    obj.style = items;
    obj.size = "xs";
    return callback(arg1(dependencyMap[6]).HeadphonesDenyIcon, obj);
  } else if (arg1(dependencyMap[5]).MuteDeafenIconState.DEAFENED === state) {
    obj = {};
    const items1 = [style];
    obj.style = items1;
    obj.size = "xs";
    return callback(arg1(dependencyMap[7]).HeadphonesSlashIcon, obj);
  } else if (arg1(dependencyMap[5]).MuteDeafenIconState.MUTED_SERVER === state) {
    const obj1 = {};
    const items2 = [style, ];
    let redTint1 = null;
    if (!alwaysWhite) {
      redTint1 = tmp.redTint;
    }
    items2[1] = redTint1;
    obj1.style = items2;
    obj1.size = "xs";
    return callback(arg1(dependencyMap[8]).MicrophoneDenyIcon, obj1);
  } else if (arg1(dependencyMap[5]).MuteDeafenIconState.MUTED_LOCAL === state) {
    const obj2 = {};
    const items3 = [style];
    obj2.style = items3;
    obj2.size = "xs";
    return callback(arg1(dependencyMap[8]).MicrophoneDenyIcon, obj2);
  } else if (arg1(dependencyMap[5]).MuteDeafenIconState.MUTED === state) {
    const obj3 = {};
    const items4 = [style];
    obj3.style = items4;
    obj3.size = "xs";
    return callback(arg1(dependencyMap[9]).MicrophoneSlashIcon, obj3);
  } else {
    obj = arg1(dependencyMap[10]);
    obj.assertNever(state);
  }
});
const memoResult1 = importAllResult.memo((state) => {
  state = state.state;
  let obj = Object.create(null);
  obj.state = 0;
  const merged = Object.assign(state, obj);
  if (arg1(dependencyMap[5]).VideoIconState.VIDEO_DISABLED_LOCAL_AUTO === state) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj["source"] = importDefault(dependencyMap[13]);
    const items = [merged.style, tmp3.noTint];
    obj["style"] = items;
    return callback(arg1(dependencyMap[11]).Icon, obj);
  } else if (arg1(dependencyMap[5]).VideoIconState.VIDEO_DISABLED_LOCAL === state) {
    const obj1 = {};
    const merged2 = Object.assign(merged);
    return callback(VideoDisabledSvgIcon, obj1);
  } else if (arg1(dependencyMap[5]).VideoIconState.VIDEO_ACTIVE === state) {
    const obj2 = {};
    const merged3 = Object.assign(merged);
    obj2["source"] = importDefault(dependencyMap[14]);
    return callback(arg1(dependencyMap[11]).Icon, obj2);
  } else {
    obj = arg1(dependencyMap[10]);
    obj.assertNever(state);
  }
  const tmp3 = callback3();
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_panel/native/shared/VoiceStateIcons.tsx");

export const MuteDeafenIcon = memoResult;
export const VideoIcon = memoResult1;
