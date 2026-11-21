// Module ID: 12763
// Function ID: 12764
// Name: CheckpointEmojiStatsScreen
// Dependencies: [32, 19, 17, 4914, 12492, 5969, 21, 4913, 575, 1378, 12729, 12731, 12764, 1412, 12734, 1112, 3440, 7496, 12510, 1494, 12509, 504, 6339, 3408, 12765, 12520, 12767, 12749, 12751, 12750, 12752, 1343, 2]
// Exports: default

// Module 12763 (CheckpointEmojiStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import _modDef1343 from "module_1343" /* 1343 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import _modDef3440 from "module_3440" /* 3440 */;
import EmojiDefault from "Emoji" /* 7496 */;
import CheckpointTextDefault from "CheckpointText" /* 12510 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 12729 */;
import useCheckpointPressSoundDefault from "useCheckpointPressSound" /* 12731 */;
import CheckpointPressableDefault from "CheckpointPressable" /* 12734 */;
import _modDef12764 from "module_12764" /* 12764 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import CheckpointStore from "CheckpointStore" /* 12492 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let CHECKPOINT_DARK_CYAN;
let c10;
let c9;
let metroImportAll;
let num2;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function EmojiChip(emoji) {
  let closure_129_1;
  let intl;
  let isActive;
  let isReducedMotion;
  let items;
  let obj4;
  let onPressIn;
  let onPressWithSound;
  let rank;
  let str;
  let str2;
  let tmp8;
  emoji = emoji.emoji;
  ({ rank, isActive, isReducedMotion, onSelect: closure_129_1 } = emoji);
  const tmp = closure_12();
  const obj = {
    source: _modDef12764,
    onPress() {
      return closure_1_1(emoji);
    }
  };
  const tmp4 = useCheckpointPressSoundDefault;
  let emojiURL;
  ({ onPressIn, onPressWithSound } = tmp4(obj));
  tmp4(obj);
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, animated: tmp8, size: 48 };
    tmp8 = !isReducedMotion;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!isReducedMotion) {
      tmp8 = true === emoji.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  const obj3 = { size: "sm", style: tmp.emojiChip, shadowColor: str, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3440["S5+pRg"], obj4), accessibilityState: { selected: isActive }, onPressIn, onPress: onPressWithSound, children: items };
  str = "transparent";
  const tmp2Result3 = CheckpointPressableDefault;
  const tmp9 = authStore;
  if (!isActive) {
    str = metroImportAll;
  }
  intl = intl7.intl;
  const obj5 = { style: tmp.emoji, fastImageStyle: tmp.customEmoji, textEmojiStyle: tmp.textEmoji, name: str2, src: emojiURL };
  str2 = "";
  obj4 = { emojiName: emoji.name, rank };
  const tmp2Result4 = EmojiDefault;
  if (null == emoji.id) {
    str2 = emoji.name;
  }
  items = [React4(tmp2Result4, obj5), ];
  const obj6 = { variant: "mono-md/bold", style: tmp.rankText, children: rank };
  items[1] = React4(CheckpointTextDefault, obj6);
  return tmp9(tmp2Result3, obj3);
}
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroImportAll, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = { name: "\u{1F622}", animated: false };
let createStyles = createStyles_mod;
let obj = { container: obj2, emojiCubeContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, copy: { flexShrink: 1 }, title: obj3, titleText: { flexShrink: 1 }, titleSpacing: obj4, number: obj5, emojis: obj6, emojiChip: obj7, emoji: { width: 20, height: 20 }, customEmoji: { width: 20, height: 20 }, textEmoji: obj8, rankText: { fontSize: 14, lineHeight: 18 }, wideContainer: obj9, wideCubeContainer: obj10, wideCopy: obj11 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "100%", marginTop: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8, borderWidth: 1, borderColor: CHECKPOINT_DARK_CYAN, backgroundColor: nativeDefault.colors.BLACK };
let PlatformUtils = PlatformUtils_mod;
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 14;
}
obj8 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 20;
}
obj9 = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj10 = { width: "50%", alignSelf: "stretch", alignItems: "center", justifyContent: "center", paddingRight: nativeDefault.space.PX_32 };
obj11 = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default function CheckpointEmojiStatsScreen() {
  let EmojiSlightlySmilingFaceIcon;
  let emoji;
  let emojis;
  let formatToPlainStringResult1;
  let isReducedMotion;
  let items4;
  let items6;
  let items7;
  let obj10;
  let obj17;
  let obj8;
  let onSelect;
  let stringResult;
  let tmp25;
  let tmp2Result4;
  let tmp5Result3;
  let tmp5Result4;
  let useReducedMotion;
  let tmp = closure_12();
  let tmp2 = emoji;
  const tmp4 = emoji(12729)();
  const width = emoji(1494)({ ignoreKeyboard: true }).width;
  let obj = require("CheckpointScreen");
  const checkpointScreenContentHeight = obj.useCheckpointScreenContentHeight(true);
  const result = Math.min(Math.min(width, require("useIsCheckpointWide").CHECKPOINT_WIDE_MAX_WIDTH) / 2, checkpointScreenContentHeight) / 392;
  const items = [AccessibilityStore];
  const obj2 = require("get initialized");
  _require = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [CheckpointStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  const items2 = [CheckpointStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  const items3 = [CheckpointStore];
  const obj5 = require("get initialized");
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
    const obj = isReducedMotion(onSelect[22]);
    return obj.hasCheckpointEmojis(CheckpointStore.stats);
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.numEmojisSent;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent;
  require("CheckpointStatsUtils");
  if (stateFromStores != null) {
    prop = stateFromStores.numEmojisSentPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  if (!stateFromStores2 && null != stateFromStores1) {
    emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, dependencyMap] = react.useState(!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1) ? closure_11 : emojis[0]);
  const intl = tmp5(1112).intl;
  const string = intl.string;
  if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    stringResult = string(tmp2(3408).vnG9Sx);
  } else {
    stringResult = string(tmp2(3440).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(1112).intl;
      const obj6 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(3440).I1qKWG, obj6);
    }
  }
  if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    EmojiSlightlySmilingFaceIcon = tmp5(12765).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp5(12520).EmojiSlightlySmilingFaceIcon;
  }
  const obj7 = { centered: tmp4, children: closure_10(View, obj8) };
  obj8 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: items4 };
  const obj9 = { style: tmp4 ? tmp.wideCubeContainer : tmp.emojiCubeContainer, children: closure_9(tmp2Result4, obj10) };
  obj10 = { emoji, scale: tmp25 };
  tmp25 = undefined;
  const tmp2Result = tmp2(12509);
  tmp2Result4 = tmp2(12767);
  if (tmp4) {
    tmp25 = result;
  }
  items4 = [closure_9(View, obj9), ];
  const items5 = [tmp.title, ];
  let titleSpacing;
  const obj11 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: items7 };
  if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj12 = { style: items5, children: items6 };
  items5[1] = titleSpacing;
  items6 = [, ];
  const obj13 = { size: "xs", color };
  items6[0] = closure_9(EmojiSlightlySmilingFaceIcon, obj13);
  const obj14 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result5 = tmp2(12510);
  items6[1] = closure_9(tmp2Result5, obj14);
  items7 = [closure_10(View, obj12), , , , ];
  let tmp20Result = tmp15;
  if (tmp20Result) {
    const obj15 = { value: stateFromStores1.numEmojisSent };
    tmp20Result = tmp20(tmp2(12749), obj15);
  }
  items7[1] = tmp20Result;
  if (stateFromStores2) {
    const obj16 = { accessible: true, accessibilityLabel: tmp5Result3.formatCheckpointStatAccessibilityLabel("emoji", roundResult), style: tmp.number, children: closure_9(tmp2(12750), obj17) };
    obj17 = { end: roundResult };
    tmp5Result3 = require("CheckpointNumberUtils");
    stateFromStores2 = tmp20(tmp23, obj16);
  }
  items7[2] = stateFromStores2;
  const obj18 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp2Result6 = tmp2(12510);
  if (!stateFromStores2 && null != stateFromStores1) {
    const intl6 = tmp5(1112).intl;
    const formatToPlainString = intl6.formatToPlainString;
    const obj19 = { numEmojis: tmp5Result4.formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    const prop1 = tmp2(3440)["660/Rr"];
    tmp5Result4 = require("CheckpointStatsUtils");
    formatToPlainStringResult1 = formatToPlainString(prop1, obj19);
  } else if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    const intl5 = tmp5(1112).intl;
    formatToPlainStringResult1 = intl5.string(tmp2(3408).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(1112).intl;
    const obj20 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_9(first(onSelect[30]), obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp2(3440).o7vDrk, obj20);
  } else {
    const intl3 = tmp5(1112).intl;
    const obj21 = { numEmojis: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp2(3440).NFptic, obj21);
  }
  items7[3] = closure_9(tmp2Result6, obj18);
  let tmp20Result2 = !tmp16;
  if (tmp20Result2) {
    const obj22 = {
      style: tmp.emojis,
      children: emojis.map((emoji, index) => {
          let name = emoji.id;
          const obj = { emoji, rank: index + 1, isActive: _modDef1343(first, emoji), isReducedMotion, onSelect };
          const tmp = React4;
          const tmp2 = EmojiChip;
          if (name == null) {
            name = emoji.name;
          }
          return tmp(tmp2, obj, name);
        })
    };
    tmp20Result2 = tmp20(tmp23, obj22);
  }
  items7[4] = tmp20Result2;
  items4[1] = closure_10(View, obj11);
  return closure_9(tmp2Result, obj7);
};
