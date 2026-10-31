// Module ID: 13647
// Function ID: 13648
// Name: CheckpointEmojiStatsScreen
// Dependencies: [32, 19, 17, 5015, 13421, 6066, 21, 5014, 575, 1375, 504, 6437, 13440, 13441, 1113, 3060, 3092, 13648, 13426, 13622, 13650, 13624, 13636, 13637, 13638, 1409, 1342, 13662, 7300, 2]
// Exports: default

// Module 13647 (CheckpointEmojiStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, importDefault;

let CHECKPOINT_DARK_CYAN;
let c10;
let c9;
let metroImportAll;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let react = react_mod;
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroImportAll, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = { name: "\u{1F622}", animated: false };
let createStyles = createStyles_mod;
let obj = { container: obj2, emojiCubeContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, copy: { flexShrink: 1 }, title: obj3, titleText: { flexShrink: 1 }, titleSpacing: obj4, number: obj5, emojis: obj6, emojiChip: obj7, emoji: { width: 20, height: 20 }, customEmoji: { width: 20, height: 20 }, textEmoji: obj8, rankText: { fontSize: 14, lineHeight: 18 } };
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
  num = 20;
}
obj8 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 24;
}
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

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
  let obj14;
  let stringResult;
  let tmp2Result2;
  let useReducedMotion;
  const tmp = closure_12();
  _require = tmp;
  const tmp2 = _require;
  let obj = require("get initialized");
  let items = [AccessibilityStore];
  importDefault = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = require("get initialized");
  const items1 = [CheckpointStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
  });
  let obj3 = require("get initialized");
  const items2 = [CheckpointStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let emojis;
    if (globalStats != null) {
      emojis = globalStats.emojis;
    }
    return emojis;
  });
  let obj4 = require("get initialized");
  const items3 = [CheckpointStore];
  let stateFromStores2 = obj4.useStateFromStores(items3, () => {
    const obj = closure_0(first[11]);
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
  const getCheckpointTopPercent = tmp2(tmp3[11]).getCheckpointTopPercent;
  tmp2(emoji[11]);
  if (stateFromStores != null) {
    prop = stateFromStores.numEmojisSentPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  let tmp12 = !stateFromStores2 && !tmp11;
  if (!stateFromStores2 && null != stateFromStores1) {
    emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, _slicedToArray] = react.useState(tmp12 ? closure_11 : emojis[0]);
  const tmp16 = require("useCheckpointSound");
  react = tmp16(require("module_13441"));
  let intl = tmp2(tmp3[14]).intl;
  const string = intl.string;
  if (tmp12) {
    stringResult = string(tmp15(tmp3[15]).vnG9Sx);
  } else {
    stringResult = string(tmp15(tmp3[16]).ZTDCIv);
  }
  let formatToPlainStringResult;
  if (stateFromStores2) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(tmp3[14]).intl;
      let obj5 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp15(tmp3[16]).I1qKWG, obj5);
    }
  }
  if (tmp12) {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[17]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[18]).EmojiSlightlySmilingFaceIcon;
  }
  const obj6 = { style: tmp.container, children: items4 };
  const obj7 = { style: tmp.emojiCubeContainer, children: closure_9(require("EmojiCube"), { emoji }) };
  const tmp15Result = require("CheckpointScreen");
  items4 = [closure_9(View, obj7), ];
  const items5 = [tmp.title, ];
  let titleSpacing;
  const obj8 = { style: tmp.copy, children: items7 };
  if (tmp12) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj9 = { style: items5, children: items6 };
  items5[1] = titleSpacing;
  items6 = [, ];
  const obj10 = { size: "xs", color };
  items6[0] = closure_9(EmojiSlightlySmilingFaceIcon, obj10);
  const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp15Result3 = require("CheckpointText");
  items6[1] = closure_9(tmp15Result3, obj11);
  items7 = [closure_10(View, obj9), , , , ];
  let tmp18Result = tmp11;
  if (tmp18Result) {
    const obj12 = { value: stateFromStores1.numEmojisSent };
    tmp18Result = tmp18(tmp15(tmp3[22]), obj12);
  }
  items7[1] = tmp18Result;
  if (stateFromStores2) {
    const _HermesInternal = HermesInternal;
    let str = " ";
    let str2 = "";
    const obj13 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_9(require("CheckpointCountUpStatNumber"), obj14) };
    obj14 = { end: roundResult };
    stateFromStores2 = tmp18(tmp21, obj13);
  }
  items7[2] = stateFromStores2;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp15Result4 = require("CheckpointText");
  if (!stateFromStores2 && null != stateFromStores1) {
    const intl6 = tmp2(tmp3[14]).intl;
    const formatToPlainString = intl6.formatToPlainString;
    const obj16 = { numEmojis: tmp2Result2.formatCheckpointCompactNumber(stateFromStores1.numEmojisSent) };
    const prop1 = tmp15(tmp3[16])["660/Rr"];
    tmp2Result2 = tmp2(emoji[11]);
    formatToPlainStringResult1 = formatToPlainString(prop1, obj16);
  } else if (tmp12) {
    const intl5 = tmp2(tmp3[14]).intl;
    formatToPlainStringResult1 = intl5.string(tmp15(tmp3[15]).BHbwK1);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(tmp3[14]).intl;
    const obj17 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_9(closure_1(first[24]), obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp15(tmp3[16]).o7vDrk, obj17);
  } else {
    const intl3 = tmp2(tmp3[14]).intl;
    const obj18 = { numEmojis: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp15(tmp3[16]).NFptic, obj18);
  }
  items7[3] = closure_9(tmp15Result4, obj15);
  let tmp18Result2 = !tmp12;
  if (tmp18Result2) {
    const obj19 = {
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
            const getEmojiURL = closure_1(first[25]).getEmojiURL;
            closure_1(first[25]);
            if (!closure_1) {
              tmp6 = true === emojiName.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const tmp7 = closure_1(first[26])(first, emojiName);
          const obj2 = {
            size: "sm",
            style: closure_0.emojiChip,
            shadowColor: str,
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(closure_1(first[16])["S5+pRg"], obj3),
            accessibilityState: { selected: tmp7 },
            onPress() {
              closure_4();
              closure_3(emojiName);
            },
            children: items
          };
          str = "transparent";
          const tmp8 = closure_1_10;
          const tmp9 = closure_1(first[27]);
          if (!tmp7) {
            str = color;
          }
          intl = closure_0(first[14]).intl;
          const obj4 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: str2, src: emojiURL };
          str2 = "";
          obj3 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp12 = closure_1(first[28]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          items = [closure_1_9(tmp12, obj4), ];
          const obj5 = { variant: "experimental/mono-md/bold", style: closure_0.rankText, children: index + 1 };
          items[1] = closure_1_9(closure_1(first[21]), obj5);
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return tmp8(tmp9, obj2, name);
        })
    };
    tmp18Result2 = tmp18(tmp21, obj19);
  }
  items7[4] = tmp18Result2;
  const obj20 = { children: closure_10(View, obj6) };
  items4[1] = closure_10(View, obj8);
  return closure_9(tmp15Result, obj20);
};
