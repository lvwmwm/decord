// Module ID: 14517
// Function ID: 14518
// Name: CheckpointEmojiStatsScreen
// Dependencies: [32, 19, 17, 5307, 14253, 6377, 21, 5306, 575, 1380, 14485, 1496, 14270, 504, 6747, 14488, 14518, 1113, 3285, 3317, 14519, 14281, 14521, 14271, 14504, 14506, 14505, 14507, 1414, 1345, 14491, 7894, 2]
// Exports: default

// Module 14517 (CheckpointEmojiStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, importDefault;

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
let react = react_mod;
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
  let closure_1;
  let closure_3;
  let closure_4;
  let emoji;
  let emojis;
  let formatToPlainStringResult1;
  let items4;
  let items6;
  let items7;
  let obj10;
  let obj17;
  let obj8;
  let stringResult;
  let tmp26;
  let tmp2Result6;
  let tmp5Result3;
  let tmp5Result4;
  let useReducedMotion;
  const tmp = closure_12();
  _require = tmp;
  const tmp2 = importDefault;
  const tmp4 = require("useIsCheckpointWide")();
  const width = require("useWindowDimensions")({ ignoreKeyboard: true }).width;
  let obj = require("CheckpointScreen");
  const checkpointScreenContentHeight = obj.useCheckpointScreenContentHeight(true);
  const result = Math.min(Math.min(width, require("useIsCheckpointWide").CHECKPOINT_WIDE_MAX_WIDTH) / 2, checkpointScreenContentHeight) / 392;
  let obj2 = require("get initialized");
  let items = [AccessibilityStore];
  importDefault = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = require("get initialized");
  const items1 = [CheckpointStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  let obj4 = require("get initialized");
  const items2 = [CheckpointStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  let obj5 = require("get initialized");
  const items3 = [CheckpointStore];
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
    const obj = closure_0(first[14]);
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
  const getCheckpointTopPercent = tmp5(tmp3[14]).getCheckpointTopPercent;
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
  [emoji, _slicedToArray] = react.useState(!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1) ? closure_11 : emojis[0]);
  const tmp2Result = tmp2(emoji[15]);
  react = tmp2Result(tmp2(tmp3[16]));
  let intl = tmp5(tmp3[17]).intl;
  const string = intl.string;
  if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    stringResult = string(tmp2(tmp3[18]).vnG9Sx);
  } else {
    stringResult = string(tmp2(tmp3[19]).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp5(tmp3[17]).intl;
      const obj6 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[19]).I1qKWG, obj6);
    }
  }
  if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    EmojiSlightlySmilingFaceIcon = tmp5(tmp3[20]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp5(tmp3[21]).EmojiSlightlySmilingFaceIcon;
  }
  const obj7 = { centered: tmp4, children: closure_10(View, obj8) };
  obj8 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: items4 };
  const obj9 = { style: tmp4 ? tmp.wideCubeContainer : tmp.emojiCubeContainer, children: closure_9(tmp2Result6, obj10) };
  obj10 = { emoji, scale: tmp26 };
  tmp26 = undefined;
  const tmp2Result5 = tmp2(emoji[12]);
  tmp2Result6 = tmp2(emoji[22]);
  if (tmp4) {
    tmp26 = result;
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
  const tmp2Result7 = tmp2(emoji[23]);
  items6[1] = closure_9(tmp2Result7, obj14);
  items7 = [closure_10(View, obj12), , , , ];
  let tmp21Result = tmp15;
  if (tmp21Result) {
    const obj15 = { value: stateFromStores1.numEmojisSent };
    tmp21Result = tmp21(tmp2(tmp3[24]), obj15);
  }
  items7[1] = tmp21Result;
  if (stateFromStores2) {
    let str = "emoji";
    const obj16 = { accessible: true, accessibilityLabel: tmp5Result3.formatCheckpointStatAccessibilityLabel("emoji", roundResult), style: tmp.number, children: closure_9(tmp2(emoji[26]), obj17) };
    obj17 = { end: roundResult };
    tmp5Result3 = require("CheckpointNumberUtils");
    stateFromStores2 = tmp21(tmp24, obj16);
  }
  items7[2] = stateFromStores2;
  const obj18 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp2Result8 = tmp2(emoji[23]);
  if (!stateFromStores2 && null != stateFromStores1) {
    const intl6 = tmp5(tmp3[17]).intl;
    const formatToPlainString = intl6.formatToPlainString;
    const obj19 = { numEmojis: tmp5Result4.formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    const prop1 = tmp2(tmp3[19])["660/Rr"];
    tmp5Result4 = require("CheckpointStatsUtils");
    formatToPlainStringResult1 = formatToPlainString(prop1, obj19);
  } else if (!stateFromStores2 && !(!stateFromStores2 && null != stateFromStores1)) {
    const intl5 = tmp5(tmp3[17]).intl;
    formatToPlainStringResult1 = intl5.string(tmp2(tmp3[18]).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp5(tmp3[17]).intl;
    const obj20 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_9(closure_1(first[27]), obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp2(tmp3[19]).o7vDrk, obj20);
  } else {
    const intl3 = tmp5(tmp3[17]).intl;
    const obj21 = { numEmojis: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp2(tmp3[19]).NFptic, obj21);
  }
  items7[3] = closure_9(tmp2Result8, obj18);
  let tmp21Result2 = !tmp16;
  if (tmp21Result2) {
    const obj22 = {
      style: tmp.emojis,
      children: emojis.map((emojiName, index) => {
          let intl;
          let items;
          let obj3;
          let str;
          let str2;
          let tmp6;
          closure_0 = emojiName;
          let emojiURL;
          if (null != emojiName.id) {
            const obj = { id: emojiName.id, animated: tmp6, size: 48 };
            tmp6 = !closure_1;
            const getEmojiURL = closure_1(first[28]).getEmojiURL;
            closure_1(first[28]);
            if (!closure_1) {
              tmp6 = true === emojiName.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const tmp7 = closure_1(first[29])(first, emojiName);
          const obj2 = {
            size: "sm",
            style: closure_0.emojiChip,
            shadowColor: str,
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(closure_1(first[19])["S5+pRg"], obj3),
            accessibilityState: { selected: tmp7 },
            onPress() {
              closure_4();
              closure_3(emojiName);
            },
            children: items
          };
          str = "transparent";
          const tmp8 = closure_1_10;
          const tmp9 = closure_1(first[30]);
          if (!tmp7) {
            str = color;
          }
          intl = closure_0(first[17]).intl;
          const obj4 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: str2, src: emojiURL };
          str2 = "";
          obj3 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp12 = closure_1(first[31]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          items = [closure_1_9(tmp12, obj4), ];
          const obj5 = { variant: "mono-md/bold", style: closure_0.rankText, children: index + 1 };
          items[1] = closure_1_9(closure_1(first[23]), obj5);
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return tmp8(tmp9, obj2, name);
        })
    };
    tmp21Result2 = tmp21(tmp24, obj22);
  }
  items7[4] = tmp21Result2;
  items4[1] = closure_10(View, obj11);
  return closure_9(tmp2Result5, obj7);
};
