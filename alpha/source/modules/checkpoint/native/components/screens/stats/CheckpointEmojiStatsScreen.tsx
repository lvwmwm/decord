// Module ID: 12877
// Function ID: 12878
// Name: CheckpointEmojiStatsScreen
// Dependencies: [32, 19, 17, 4967, 12843, 5995, 21, 4966, 587, 1384, 558, 576, 504, 12850, 12851, 1128, 3056, 3088, 12878, 12880, 12882, 12861, 1417, 1357, 12894, 7206, 12863, 12870, 2]

// Module 12877 (CheckpointEmojiStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4967 */;
import CheckpointStore from "CheckpointStore" /* 12843 */;
import CheckpointConstants from "CheckpointConstants" /* 5995 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, importDefault, stats;

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
  let arr3;
  let closure_3;
  let closure_4;
  let emoji;
  let tmp10;
  let tmp23;
  let tmp5;
  let tmp6;
  let tmp9;
  let useReducedMotion;
  const tmp2 = emoji;
  let obj = require("react");
  const cResult = obj.c(32);
  const tmp4 = closure_12();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = AccessibilityStore;
    let items = [AccessibilityStore];
    const fn = function h() {
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
    class E {
      constructor() {
        stats = stats.stats;
        let emojis;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    cResult[2] = items1;
    cResult[3] = E;
    tmp10 = E;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  let num5;
  const _Math = Math;
  if (stateFromStores1 != null) {
    num5 = stateFromStores1.numEmojisSent;
  }
  if (num5 == null) {
    num5 = 0;
  }
  let emojis1;
  const roundResult = round(num5);
  const tmp14 = cResult[4];
  if (stateFromStores1 != null) {
    emojis1 = stateFromStores1.emojis;
  }
  if (tmp14 !== emojis1) {
    let emojis;
    let emojis2;
    if (stateFromStores1 != null) {
      emojis2 = stateFromStores1.emojis;
    }
    if (emojis2 == null) {
      emojis2 = [];
    }
    class E {
      constructor() {
        stats = stats.stats;
        let emojis;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    if (stateFromStores1 != null) {
      emojis = stateFromStores1.emojis;
    }
    cResult[4] = emojis;
    cResult[5] = emojis2;
    arr3 = emojis2;
  } else {
    arr3 = cResult[5];
  }
  [emoji, _slicedToArray] = react.useState(0 === roundResult || 0 === arr3.length ? closure_11 : arr3[0]);
  const tmp20 = stateFromStores(tmp2[13]);
  react = tmp20(stateFromStores(tmp2[14]));
  tmp20(stateFromStores(tmp2[14]));
  let intl = tmp(tmp2[15]).intl;
  const string = intl.string;
  if (0 === roundResult || 0 === arr3.length) {
    string(stateFromStores(tmp2[16]).vnG9Sx);
  } else {
    string(stateFromStores(tmp2[17]).ZTDCIv);
  }
  if (0 === roundResult || 0 === arr3.length) {
    let EmojiSlightlySmilingFaceIcon = tmp(tmp2[18]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp(tmp2[19]).EmojiSlightlySmilingFaceIcon;
  }
  if (cResult[6] !== emoji) {
    let obj2 = { emoji };
    class E {
      constructor() {
        stats = stats.stats;
        let emojis;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    cResult[6] = emoji;
    cResult[7] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[7];
  }
  if (cResult[8] === tmp4.emojiCubeContainer) {
    let titleSpacing;
    if (0 === roundResult || 0 === arr3.length) {
      titleSpacing = tmp4.titleSpacing;
    }
    class E {
      constructor() {
        stats = stats.stats;
        let emojis;
        if (stats != null) {
          emojis = stats.emojis;
        }
        return emojis;
      }
    }
    const items2 = [tmp4.title, titleSpacing];
    cResult[11] = tmp4.title;
    cResult[12] = titleSpacing;
    cResult[13] = items2;
  }
  let obj3 = { style: tmp4.emojiCubeContainer, children: tmp23 };
  cResult[8] = tmp4.emojiCubeContainer;
  cResult[9] = tmp23;
  cResult[10] = closure_9(View, obj3);
  closure_9(View, obj3);
}) : (function CheckpointEmojiStatsScreen() {
  let EmojiSlightlySmilingFaceIcon;
  let closure_1;
  let closure_3;
  let closure_4;
  let emoji;
  let items2;
  let items4;
  let items5;
  let obj10;
  let stringResult;
  let stringResult1;
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
    stats = stats.stats;
    let emojis;
    if (stats != null) {
      emojis = stats.emojis;
    }
    return emojis;
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
  let emojis;
  if (stateFromStores != null) {
    emojis = stateFromStores.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  let tmp6 = 0 === roundResult || 0 === emojis.length;
  [emoji, _slicedToArray] = react.useState(tmp6 ? closure_11 : emojis[0]);
  let tmp9 = importDefault;
  const tmp10 = require("useCheckpointSound");
  react = tmp10(require("module_12851"));
  let intl = tmp2(tmp3[15]).intl;
  const string = intl.string;
  if (tmp6) {
    stringResult = string(tmp9(tmp3[16]).vnG9Sx);
  } else {
    stringResult = string(tmp9(tmp3[17]).ZTDCIv);
  }
  if (tmp6) {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[18]).EmojiFrowningFaceIcon;
  } else {
    EmojiSlightlySmilingFaceIcon = tmp2(tmp3[19]).EmojiSlightlySmilingFaceIcon;
  }
  let obj3 = { style: tmp.container, children: items2 };
  let obj4 = { style: tmp.emojiCubeContainer, children: closure_9(tmp9(tmp3[20]), { emoji }) };
  const tmp9Result = tmp9(emoji[26]);
  items2 = [closure_9(View, obj4), ];
  let obj5 = { style: tmp.copy, children: items5 };
  const items3 = [tmp.title, ];
  let titleSpacing;
  if (tmp6) {
    titleSpacing = tmp.titleSpacing;
  }
  const obj6 = { style: items3, children: items4 };
  items3[1] = titleSpacing;
  items4 = [, ];
  const obj7 = { size: "xs", color };
  items4[0] = closure_9(EmojiSlightlySmilingFaceIcon, obj7);
  const obj8 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp9Result3 = tmp9(emoji[21]);
  items4[1] = closure_9(tmp9Result3, obj8);
  items5 = [closure_10(View, obj6), , , ];
  let tmp11Result2 = !tmp6;
  let tmp11Result = tmp11Result2;
  if (!tmp6) {
    const _HermesInternal = HermesInternal;
    let str = " ";
    let str2 = "";
    const obj9 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_9(tmp9(emoji[27]), obj10) };
    obj10 = { end: roundResult };
    tmp11Result = tmp11(tmp14, obj9);
  }
  items5[1] = tmp11Result;
  const tmp9Result4 = tmp9(emoji[21]);
  const intl2 = tmp2(tmp3[15]).intl;
  if (tmp6) {
    stringResult1 = intl2.string(tmp9(tmp3[16]).BHbwK1);
  } else {
    const obj11 = { numEmojis: roundResult };
    stringResult1 = intl2.format(tmp9(tmp3[17]).NFptic, obj11);
  }
  items5[2] = closure_9(tmp9Result4, { variant: "heading-lg/medium", children: stringResult1 });
  if (!tmp6) {
    const obj12 = {
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
            const getEmojiURL = closure_1(first[22]).getEmojiURL;
            closure_1(first[22]);
            if (!closure_1) {
              tmp6 = true === emojiName.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const tmp7 = closure_1(first[23])(first, emojiName);
          const obj2 = {
            size: "sm",
            style: closure_0.emojiChip,
            shadowColor: str,
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(closure_1(first[17])["S5+pRg"], obj3),
            accessibilityState: { selected: tmp7 },
            onPress() {
              closure_4();
              closure_3(emojiName);
            },
            children: items
          };
          str = "transparent";
          const tmp8 = closure_1_10;
          const tmp9 = closure_1(first[24]);
          if (!tmp7) {
            str = color;
          }
          intl = closure_0(first[15]).intl;
          const obj4 = { style: closure_0.emoji, fastImageStyle: closure_0.customEmoji, textEmojiStyle: closure_0.textEmoji, name: str2, src: emojiURL };
          str2 = "";
          obj3 = { emojiName: emojiName.name, rank: index + 1 };
          const tmp12 = closure_1(first[25]);
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
    tmp11Result2 = tmp11(tmp14, obj12);
  }
  items5[3] = tmp11Result2;
  const obj13 = { children: closure_10(View, obj3) };
  items2[1] = closure_10(View, obj5);
  return closure_9(tmp9Result, obj13);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default tmp5;
