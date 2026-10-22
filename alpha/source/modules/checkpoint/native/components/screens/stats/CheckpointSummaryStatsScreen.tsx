// Module ID: 12955
// Function ID: 12956
// Name: CheckpointSummaryStatsScreen
// Dependencies: [32, 19, 17, 4970, 12893, 6001, 21, 587, 4969, 1385, 558, 576, 504, 8610, 12913, 1417, 8059, 12956, 1128, 3088, 3056, 6868, 4915, 7212, 5655, 12911, 12919, 2]

// Module 12955 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4915 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import GuildIcon from "GuildIcon" /* 6868 */;
import EmojiDefault from "Emoji" /* 7212 */;
import CheckpointCardColors from "CheckpointCardColors" /* 8610 */;
import CheckpointTextDefault from "CheckpointText" /* 12911 */;
import CheckpointScreen from "CheckpointScreen" /* 12913 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12919 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 12956 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1385 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

let c9;
let metroImportAll;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let tmp;
const intl12 = tmp(1128);
const View = react_native.View;
const CHECKPOINT_CONTROL_SIZE = CheckpointConstants.CHECKPOINT_CONTROL_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const unpackModuleId = sum;
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, stats: obj2, row: obj3, stat: obj4, statNumber: { height: 24, justifyContent: "center" }, item: obj5, itemName: { flexShrink: 1 }, itemIcon: size, emoji: { width: 28, height: 28 }, textEmoji: obj6 };
obj2 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
let PlatformUtils = PlatformUtils_mod;
let num = 24;
if (PlatformUtils.isIOS()) {
  num = 28;
}
obj6 = { fontSize: num, lineHeight: num2, textAlign: "center" };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointSummaryStatsScreen() {
  let character;
  let diff;
  let game;
  let stats;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp20;
  let tmp32;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(108);
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return { character: CheckpointStore.character, stats: CheckpointStore.stats };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ character, stats } = stateFromStoresObject);
  if (stats != null) {
    const voice = stats.voice;
  }
  if (stats != null) {
    const messages = stats.messages;
  }
  if (stats != null) {
    const guilds = stats.guilds;
    if (guilds != null) {
      const first = guilds.guilds[0];
    }
  }
  let emojis;
  if (stats != null) {
    emojis = stats.emojis;
  }
  let games;
  if (stats != null) {
    games = stats.games;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = M;
    tmp13 = M;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult4 = get_initialized;
  const stateFromStores = tmpResult4.useStateFromStores(tmp12, tmp13);
  if (cResult[4] !== character) {
    const tmpResult5 = CheckpointCardColors;
    const cardColors = tmpResult5.getCardColors(character);
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[5] = cardColors;
    tmp16 = cardColors;
  } else {
    tmp16 = cResult[5];
  }
  const primaryBackgroundColor = tmp16.primaryBackgroundColor;
  const tmpResult6 = CheckpointScreen;
  const checkpointScreenContentHeight = tmpResult6.useCheckpointScreenContentHeight();
  [tmp20, require] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (null != tmp20) {
    diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp20;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    }
    cResult[6] = handleStatsLayout;
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
  }
  let first1;
  if (emojis != null) {
    first1 = emojis.emojis[0];
  }
  if (games != null) {
    const first2 = games.games[0];
    if (first2 != null) {
      game = first2.game;
    }
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[10] !== game) {
      let applicationIconURL;
      if (null != game) {
        const obj2 = { id: null, icon: game.iconHash, fallbackAvatar: false };
        const obj7 = AvatarUtilsDefault;
        class M {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        applicationIconURL = obj7.getApplicationIconURL(obj2);
      }
      class M {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[11] = applicationIconURL;
    }
    if (cResult[12] !== primaryBackgroundColor) {
      class M {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[12] = primaryBackgroundColor;
      cResult[13] = tmp38;
    }
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    const obj4 = { character, maxHeight: diff };
    cResult[14] = diff;
    cResult[15] = character;
    cResult[16] = closure_8(CheckpointRecapCardDefault, obj4);
    const tmp42 = closure_8(CheckpointRecapCardDefault, obj4);
  }
  let id;
  if (first1 != null) {
    id = first1.id;
  }
  let emojiURL;
  if (null != id) {
    const obj5 = { id: null, animated: tmp32, size: 48 };
    const tmp31 = AvatarUtilsDefault;
    class M {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    tmp32 = !stateFromStores;
    const getEmojiURL = tmp31.getEmojiURL;
    if (!stateFromStores) {
      tmp32 = true === first1.animated;
    }
    emojiURL = getEmojiURL(obj5);
  }
  cResult[7] = stateFromStores;
  cResult[8] = first1;
  cResult[9] = emojiURL;
}) : (function CheckpointSummaryStatsScreen() {
  let character;
  let emojiURL;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let name;
  let name2;
  let num;
  let num2;
  let num3;
  let num4;
  let num5;
  let obj24;
  let round;
  let round2;
  let round3;
  let round4;
  let round5;
  let stats;
  let stringResult;
  let tmp13;
  let tmp24;
  let tmp27Result;
  let tmp27Result3;
  let useReducedMotion;
  const tmp = closure_12();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ character: CheckpointStore.character, stats: CheckpointStore.stats }));
  ({ character, stats } = stateFromStoresObject);
  let voice;
  if (stats != null) {
    voice = stats.voice;
  }
  let messages;
  if (stats != null) {
    messages = stats.messages;
  }
  let first;
  if (stats != null) {
    const guilds = stats.guilds;
    if (guilds != null) {
      first = guilds.guilds[0];
    }
  }
  let emojis;
  if (stats != null) {
    emojis = stats.emojis;
  }
  let games;
  if (stats != null) {
    games = stats.games;
  }
  const items1 = [AccessibilityStore];
  const tmp2Result = get_initialized;
  const stateFromStores = tmp2Result.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp2Result3 = CheckpointCardColors;
  const primaryBackgroundColor = tmp2Result3.getCardColors(character).primaryBackgroundColor;
  const tmp2Result4 = CheckpointScreen;
  const checkpointScreenContentHeight = tmp2Result4.useCheckpointScreenContentHeight();
  [tmp13, require] = react.useState(null);
  let diff;
  _slicedToArray(react.useState(null), 2);
  if (null != tmp13) {
    diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp13;
  }
  let first1;
  if (emojis != null) {
    first1 = emojis.emojis[0];
  }
  let game;
  if (games != null) {
    const first2 = games.games[0];
    if (first2 != null) {
      game = first2.game;
    }
  }
  let id;
  if (first1 != null) {
    id = first1.id;
  }
  if (null != id) {
    const obj2 = { id: first1.id, animated: tmp24, size: 48 };
    tmp24 = !stateFromStores;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      tmp24 = true === first1.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    ({ id: obj7.id, iconHash: obj7.icon } = game);
    const obj6 = AvatarUtilsDefault;
    applicationIconURL = obj6.getApplicationIconURL(obj3);
  }
  let tmp27Result4 = closure_8(tmp2(8059).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const obj4 = { style: tmp.container, children: items2 };
  items2 = [, ];
  const tmp30 = CheckpointScreenDefault;
  items2[0] = closure_8(CheckpointRecapCardDefault, { character, maxHeight: diff });
  const obj5 = {
    style: tmp.stats,
    onLayout: function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    },
    children: items4
  };
  const obj8 = { style: tmp.row, children: items3 };
  const obj9 = { label: intl.string(_modDef3088.MSrV9z), value: round(num), color: primaryBackgroundColor };
  intl = tmp2(1128).intl;
  num = undefined;
  const _Math = Math;
  round = Math.round;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  items3 = [closure_8(closure_13, obj9), ];
  const obj10 = { label: intl2.string(_modDef3056.wWKySP), value: round2(num2), color: primaryBackgroundColor };
  intl2 = tmp2(1128).intl;
  num2 = undefined;
  const _Math2 = Math;
  round2 = Math.round;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  items3[1] = closure_8(closure_13, obj10);
  items4 = [closure_9(View, obj8), , , ];
  const obj11 = { style: tmp.row, children: items5 };
  const obj12 = { label: intl3.string(_modDef3088["f5S+pt"]), value: round3(num3), color: primaryBackgroundColor };
  intl3 = tmp2(1128).intl;
  num3 = undefined;
  const _Math3 = Math;
  round3 = Math.round;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  items5 = [closure_8(closure_13, obj12), ];
  const obj13 = { label: intl4.string(_modDef3056["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp27Result };
  intl4 = tmp2(1128).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl5 = tmp2(1128).intl;
    name = intl5.string(tmp29(3088).GultYJ);
  }
  tmp27Result = tmp27Result4;
  if (null != first) {
    const obj14 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp29Result = GuildIconDefault;
    tmp27Result = tmp27(tmp29Result, obj14);
  }
  items5[1] = closure_8(closure_14, obj13);
  items4[1] = closure_9(View, obj11);
  const obj15 = { style: tmp.row, children: items6 };
  const obj16 = { label: intl6.string(_modDef3088.xVSlv3), value: round4(num4), color: primaryBackgroundColor };
  intl6 = tmp2(1128).intl;
  num4 = undefined;
  const _Math4 = Math;
  round4 = Math.round;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  items6 = [closure_8(closure_13, obj16), ];
  const obj17 = { label: intl7.string(_modDef3056["3sARW7"]), name: stringResult, color: primaryBackgroundColor, icon: tmp27Result3 };
  intl7 = tmp2(1128).intl;
  if (null == first1) {
    const intl8 = tmp2(1128).intl;
    stringResult = intl8.string(tmp2(1128).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp29Result3 = UnicodeEmojisDefault;
    stringResult = tmp29Result3.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  tmp27Result3 = tmp27Result4;
  if (null != first1) {
    let str2 = "";
    const tmp29Result4 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj18 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj21.style, emoji: obj21.fastImageStyle, textEmoji: obj21.textEmojiStyle } = tmp);
    tmp27Result3 = tmp27(tmp29Result4, obj18);
  }
  items6[1] = closure_8(closure_14, obj17);
  items4[2] = closure_9(View, obj15);
  const obj19 = { style: tmp.row, children: items7 };
  const obj20 = { label: intl9.string(_modDef3088.y2Y1DD), value: round5(num5), color: primaryBackgroundColor };
  intl9 = tmp2(1128).intl;
  num5 = undefined;
  const _Math5 = Math;
  round5 = Math.round;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  items7 = [closure_8(closure_13, obj20), ];
  const obj22 = { label: intl10.string(_modDef3056.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp27Result4 };
  intl10 = tmp2(1128).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl11 = tmp2(1128).intl;
    name2 = intl11.string(tmp2(1128).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj23 = { source: obj24, style: tmp.itemIcon };
    obj24 = { uri: applicationIconURL };
    tmp27Result4 = tmp27(tmp29(5655), obj23);
  }
  const obj25 = { children: closure_9(View, obj4) };
  items7[1] = closure_8(closure_14, obj22);
  items4[3] = closure_9(View, obj19);
  items2[1] = closure_9(View, obj5);
  return closure_8(tmp30, obj25);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function NumberStat(arg0) {
  let color;
  let items;
  let label;
  let tmp5;
  let tmp6;
  let value;
  const obj = react2;
  const cResult = obj.c(18);
  ({ label, value, color } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== color) {
    const obj2 = { color };
    cResult[0] = color;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const stat = tmp4.stat;
  if (cResult[2] !== value) {
    const toLocaleStringResult = value.toLocaleString(intl12.intl.currentLocale);
    cResult[2] = value;
    cResult[3] = toLocaleStringResult;
    tmp6 = toLocaleStringResult;
  } else {
    tmp6 = cResult[3];
  }
  const combined = "" + label + ", " + tmp6;
  if (cResult[4] === label) {
    let tmp9;
    if (cResult[5] === tmp5) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === color) {
      let tmp11;
      if (cResult[8] === value) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.statNumber) {
        let tmp15;
        if (cResult[11] === tmp11) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.stat) {
          if (cResult[14] === combined) {
            if (cResult[15] === tmp9) {
              let tmp19;
              if (cResult[16] === tmp15) {
                tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
        }
        const obj3 = { style: stat, accessible: true, accessibilityLabel: combined, children: items };
        items = [tmp9, tmp15];
        const tmp22 = React4(View, obj3);
        cResult[13] = tmp4.stat;
        cResult[14] = combined;
        cResult[15] = tmp9;
        cResult[16] = tmp15;
        cResult[17] = tmp22;
        tmp19 = tmp22;
      }
      const obj4 = { style: tmp4.statNumber, children: tmp11 };
      const tmp18 = metroImportAll(View, obj4);
      cResult[10] = tmp4.statNumber;
      cResult[11] = tmp11;
      cResult[12] = tmp18;
      tmp15 = tmp18;
    }
    const obj5 = { value, color, size: 32 };
    const tmp14 = metroImportAll(CheckpointStatNumberDefault, obj5);
    cResult[7] = color;
    cResult[8] = value;
    cResult[9] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = metroImportAll(CheckpointTextDefault, { variant: "text-md/medium", style: tmp5, children: label });
  cResult[4] = label;
  cResult[5] = tmp5;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : (function NumberStat(arg0) {
  let color;
  let items1;
  let label;
  let value;
  ({ label, value, color } = arg0);
  const tmp = closure_12();
  const items = [color];
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + value.toLocaleString(intl12.intl.currentLocale), children: items1 };
  const memo = react.useMemo(() => ({ color }), items);
  items1 = [metroImportAll(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.statNumber, children: metroImportAll(CheckpointStatNumberDefault, { value, color, size: 32 }) };
  items1[1] = metroImportAll(View, obj2);
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemStat(arg0) {
  let color;
  let icon;
  let items;
  let items1;
  let label;
  let name;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(23);
  ({ label, name, icon, color } = arg0);
  const tmp3 = closure_12();
  if (cResult[0] !== color) {
    const obj2 = { color };
    cResult[0] = color;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const combined = "" + label + ", " + name;
  if (cResult[2] === label) {
    let tmp6;
    if (cResult[3] === tmp4) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === icon) {
      let tmp8;
      if (cResult[6] === tmp3.itemIcon) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp3.itemName) {
        let tmp12;
        if (cResult[9] === tmp4) {
          tmp12 = cResult[10];
        }
        if (cResult[11] === name) {
          let tmp13;
          if (cResult[12] === tmp12) {
            tmp13 = cResult[13];
          }
          if (cResult[14] === tmp3.item) {
            if (cResult[15] === tmp8) {
              let tmp17;
              if (cResult[16] === tmp13) {
                tmp17 = cResult[17];
              }
              if (cResult[18] === tmp3.stat) {
                if (cResult[19] === combined) {
                  if (cResult[20] === tmp6) {
                    let tmp21;
                    if (cResult[21] === tmp17) {
                      tmp21 = cResult[22];
                    }
                    return tmp21;
                  }
                }
              }
              const obj3 = { style: tmp3.stat, accessible: true, accessibilityLabel: combined, children: items };
              items = [tmp6, tmp17];
              const tmp24 = React4(View, obj3);
              cResult[18] = tmp3.stat;
              cResult[19] = combined;
              cResult[20] = tmp6;
              cResult[21] = tmp17;
              cResult[22] = tmp24;
              tmp21 = tmp24;
            }
          }
          const obj4 = { style: tmp3.item, children: items1 };
          items1 = [tmp8, tmp13];
          const tmp20 = React4(View, obj4);
          cResult[14] = tmp3.item;
          cResult[15] = tmp8;
          cResult[16] = tmp13;
          cResult[17] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { variant: "text-md/bold", style: tmp12, children: name };
        const tmp16 = metroImportAll(CheckpointTextDefault, obj5);
        cResult[11] = name;
        cResult[12] = tmp12;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      }
      const items2 = [tmp3.itemName, tmp4];
      cResult[8] = tmp3.itemName;
      cResult[9] = tmp4;
      cResult[10] = items2;
      tmp12 = items2;
    }
    const obj6 = { style: tmp3.itemIcon, children: icon };
    const tmp11 = metroImportAll(View, obj6);
    cResult[5] = icon;
    cResult[6] = tmp3.itemIcon;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = metroImportAll(CheckpointTextDefault, { variant: "text-md/medium", style: tmp4, children: label });
  cResult[2] = label;
  cResult[3] = tmp4;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function ItemStat(icon) {
  let color;
  let items1;
  let items2;
  let items3;
  let label;
  let name;
  ({ label, name, color } = icon);
  icon = icon.icon;
  const tmp = closure_12();
  const items = [color];
  const memo = react.useMemo(() => ({ color }), items);
  const obj = { style: tmp.stat, accessible: true, accessibilityLabel: "" + label + ", " + name, children: items1 };
  items1 = [metroImportAll(CheckpointTextDefault, { variant: "text-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: items2 };
  items2 = [, ];
  const obj3 = { style: tmp.itemIcon, children: icon };
  items2[0] = metroImportAll(View, obj3);
  const obj4 = { variant: "text-md/bold", style: items3, children: name };
  items3 = [tmp.itemName, memo];
  items2[1] = metroImportAll(CheckpointTextDefault, obj4);
  items1[1] = React4(View, obj2);
  return React4(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default tmp5;
