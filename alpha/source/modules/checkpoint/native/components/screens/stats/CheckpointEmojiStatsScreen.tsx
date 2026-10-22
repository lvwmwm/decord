// Module ID: 12932
// Function ID: 12933
// Name: CheckpointEmojiStatsScreen
// Dependencies: [32, 19, 17, 4970, 12893, 6001, 21, 4969, 587, 1384, 558, 576, 504, 12896, 12900, 12901, 1128, 3056, 3088, 12933, 12930, 12935, 12918, 12911, 1417, 1357, 12947, 7212, 12913, 12920, 2]

// Module 12932 (CheckpointEmojiStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointEmojiStatsScreen() {
  let emoji;
  let emojis1;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9;
  let useReducedMotion;
  const tmp2 = emoji;
  let obj = require("react");
  const cResult = obj.c(41);
  const tmp4 = closure_12();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = AccessibilityStore;
    let items = [AccessibilityStore];
    const fn = function j() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = fn;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function x() {
      const stats = CheckpointStore.stats;
      let emojis;
      if (stats != null) {
        emojis = stats.emojis;
      }
      return emojis;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CheckpointStore];
    const fn3 = function _() {
      const globalStats = CheckpointStore.globalStats;
      let emojis;
      if (globalStats != null) {
        emojis = globalStats.emojis;
      }
      return emojis;
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp14 = fn3;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [CheckpointStore];
    class F {
      constructor() {
        const obj = closure_0(first[13]);
        return obj.hasCheckpointEmojis(CheckpointStore.stats);
      }
    }
    cResult[6] = items3;
    cResult[7] = F;
    tmp18 = F;
    tmp17 = items3;
  } else {
    tmp17 = cResult[6];
    tmp18 = cResult[7];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp17, tmp18);
  let num9;
  const _Math = Math;
  if (stateFromStores1 != null) {
    num9 = stateFromStores1.numEmojisSent;
  }
  if (num9 == null) {
    num9 = 0;
  }
  round(num9);
  let emojis;
  const tmp24 = cResult[8];
  if (stateFromStores1 != null) {
    emojis = stateFromStores1.emojis;
  }
  if (tmp24 === emojis) {
    if (cResult[9] === stateFromStores2) {
      let tmp35;
      class F {
        constructor() {
          const obj = closure_0(first[13]);
          return obj.hasCheckpointEmojis(CheckpointStore.stats);
        }
      }
      emoji = tmp29[0];
      let closure_3 = tmp29[1];
      const tmp32 = stateFromStores(tmp2[14]);
      let closure_4 = tmp32(stateFromStores(tmp2[15]));
      tmp32(stateFromStores(tmp2[15]));
      let intl = tmp(tmp2[16]).intl;
      const string = intl.string;
      if (!stateFromStores3 && !(!stateFromStores3 && null != stateFromStores2)) {
        string(stateFromStores(tmp2[17]).vnG9Sx);
      } else {
        string(stateFromStores(tmp2[18]).ZTDCIv);
      }
      if (!stateFromStores3 && !(!stateFromStores3 && null != stateFromStores2)) {
        let EmojiSlightlySmilingFaceIcon = tmp(tmp2[19]).EmojiFrowningFaceIcon;
      } else {
        EmojiSlightlySmilingFaceIcon = tmp(tmp2[20]).EmojiSlightlySmilingFaceIcon;
      }
      if (cResult[12] !== emoji) {
        let obj2 = { emoji };
        class F {
          constructor() {
            const obj = closure_0(first[13]);
            return obj.hasCheckpointEmojis(CheckpointStore.stats);
          }
        }
        cResult[12] = emoji;
        cResult[13] = tmp37;
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[13];
      }
      if (cResult[14] === tmp4.emojiCubeContainer) {
        let titleSpacing;
        if (!stateFromStores3 && !(!stateFromStores3 && null != stateFromStores2)) {
          titleSpacing = tmp4.titleSpacing;
        }
        class F {
          constructor() {
            const obj = closure_0(first[13]);
            return obj.hasCheckpointEmojis(CheckpointStore.stats);
          }
        }
        const items4 = [tmp4.title, titleSpacing];
        cResult[17] = tmp4.title;
        cResult[18] = titleSpacing;
        cResult[19] = items4;
      }
      let obj3 = { style: tmp4.emojiCubeContainer, children: tmp35 };
      cResult[14] = tmp4.emojiCubeContainer;
      cResult[15] = tmp35;
      cResult[16] = closure_9(View, obj3);
      const tmp41 = closure_9(View, obj3);
    }
  }
  if (!stateFromStores3 && null != stateFromStores2) {
    emojis1 = stateFromStores2.emojis;
  } else if (stateFromStores1 != null) {
    emojis1 = stateFromStores1.emojis;
  }
  if (emojis1 == null) {
    emojis1 = [];
  }
  let emojis2;
  if (stateFromStores1 != null) {
    emojis2 = stateFromStores1.emojis;
  }
  cResult[8] = emojis2;
  cResult[9] = stateFromStores2;
  cResult[10] = !stateFromStores3 && null != stateFromStores2;
  cResult[11] = emojis1;
}) : (function CheckpointEmojiStatsScreen() {
  let EmojiSlightlySmilingFaceIcon;
  let closure_1;
  let closure_3;
  let closure_4;
  let emoji;
  let emojis;
  let formatToPlainStringResult;
  let items4;
  let items6;
  let items7;
  let numberFormat;
  let obj13;
  let stringResult;
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
    const obj = closure_0(first[13]);
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
  let tmp8 = !stateFromStores2 && null != stateFromStores1;
  let tmp9 = !stateFromStores2 && !tmp8;
  if (tmp8) {
    emojis = stateFromStores1.emojis;
  } else if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  [emoji, _slicedToArray] = react.useState(tmp9 ? closure_11 : emojis[0]);
  let tmp12 = importDefault;
  const tmp13 = require("useCheckpointSound");
  react = tmp13(require("module_12901"));
  let intl = tmp2(tmp3[16]).intl;
  const string = intl.string;
  if (tmp9) {
    stringResult = string(tmp12(tmp3[17]).vnG9Sx);
  } else {
    stringResult = string(tmp12(tmp3[18]).ZTDCIv);
  }
  if (tmp9) {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[19]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[20]).EmojiSlightlySmilingFaceIcon;
  }
  let obj5 = { style: tmp.container, children: items4 };
  const obj6 = { style: tmp.emojiCubeContainer, children: closure_9(tmp12(emoji[21]), { emoji }) };
  const tmp12Result = tmp12(emoji[28]);
  items4 = [closure_9(View, obj6), ];
  const items5 = [tmp.title, ];
  let titleSpacing;
  const obj7 = { style: tmp.copy, children: items7 };
  if (tmp9) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj8 = { style: items5, children: items6 };
  items5[1] = titleSpacing;
  items6 = [, ];
  const obj9 = { size: "xs", color };
  items6[0] = closure_9(EmojiSlightlySmilingFaceIcon, obj9);
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp12Result3 = tmp12(emoji[23]);
  items6[1] = closure_9(tmp12Result3, obj10);
  items7 = [closure_10(View, obj8), , , , ];
  let tmp14Result = tmp8;
  if (tmp14Result) {
    const obj11 = { value: stateFromStores1.numEmojisSent };
    tmp14Result = tmp14(tmp12(tmp3[22]), obj11);
  }
  items7[1] = tmp14Result;
  if (stateFromStores2) {
    const _HermesInternal = HermesInternal;
    let str = " ";
    let str2 = "";
    const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_9(tmp12(emoji[29]), obj13) };
    obj13 = { end: roundResult };
    stateFromStores2 = tmp14(tmp17, obj12);
  }
  items7[2] = stateFromStores2;
  const tmp12Result4 = tmp12(emoji[23]);
  const intl2 = tmp2(tmp3[16]).intl;
  if (tmp8) {
    const formatToPlainString = intl2.formatToPlainString;
    const _Intl = Intl;
    const obj14 = { numEmojis: numberFormat.format(stateFromStores1.numEmojisSent) };
    const prop = tmp12(tmp3[18])["660/Rr"];
    const self = this;
    const self2 = this;
    numberFormat = new Intl.NumberFormat(tmp2(tmp3[16]).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
    formatToPlainStringResult = formatToPlainString(prop, obj14);
  } else if (tmp9) {
    formatToPlainStringResult = intl2.string(tmp12(tmp3[17]).BHbwK1);
  } else {
    const obj15 = { numEmojis: roundResult };
    formatToPlainStringResult = intl2.format(tmp12(tmp3[18]).NFptic, obj15);
  }
  items7[3] = closure_9(tmp12Result4, { variant: "heading-lg/medium", children: formatToPlainStringResult });
  let tmp14Result2 = !tmp9;
  if (tmp14Result2) {
    const obj16 = {
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
            const getEmojiURL = closure_1(first[24]).getEmojiURL;
            closure_1(first[24]);
            if (!closure_1) {
              tmp6 = true === emojiName.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const tmp7 = closure_1(first[25])(first, emojiName);
          const obj2 = {
            size: "sm",
            style: closure_0.emojiChip,
            shadowColor: str,
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(closure_1(first[18])["S5+pRg"], obj3),
            accessibilityState: { selected: tmp7 },
            onPress() {
              closure_4();
              closure_3(emojiName);
            },
            children: items
          };
          str = "transparent";
          const tmp8 = closure_1_10;
          const tmp9 = closure_1(first[26]);
          if (!tmp7) {
            str = color;
          }
          intl = closure_0(first[16]).intl;
          const obj4 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: str2, src: emojiURL };
          str2 = "";
          obj3 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp12 = closure_1(first[27]);
          if (null == emojiName.id) {
            str2 = emojiName.name;
          }
          items = [closure_1_9(tmp12, obj4), ];
          const obj5 = { variant: "experimental/mono-md/bold", style: closure_0.rankText, children: index + 1 };
          items[1] = closure_1_9(closure_1(first[23]), obj5);
          let name = emojiName.id;
          if (name == null) {
            name = emojiName.name;
          }
          return tmp8(tmp9, obj2, name);
        })
    };
    tmp14Result2 = tmp14(tmp17, obj16);
  }
  items7[4] = tmp14Result2;
  const obj17 = { children: closure_10(View, obj5) };
  items4[1] = closure_10(View, obj7);
  return closure_9(tmp12Result, obj17);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default tmp5;
