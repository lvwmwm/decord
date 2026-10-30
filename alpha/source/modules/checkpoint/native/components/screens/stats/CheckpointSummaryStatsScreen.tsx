// Module ID: 13636
// Function ID: 13637
// Name: CheckpointSummaryStatsScreen
// Dependencies: [32, 19, 17, 5010, 13386, 6061, 21, 575, 5009, 1377, 504, 6086, 13585, 1410, 8135, 13637, 1114, 3091, 3059, 6951, 4955, 7294, 5712, 13587, 13590, 2]
// Exports: default

// Module 13636 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl12 from "intl" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import _modDef3059 from "module_3059" /* 3059 */;
import _modDef3091 from "module_3091" /* 3091 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4955 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6086 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import EmojiDefault from "Emoji" /* 7294 */;
import CheckpointScreen from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13590 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 13637 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1377 */;
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
function NumberStat(arg0) {
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
}
function ItemStat(icon) {
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
}
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
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
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
  let tmp14;
  let tmp25;
  let tmp28Result;
  let tmp28Result3;
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
  const tmp2Result4 = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result4.getCharacterCardColorPalette(character);
  const tmp2Result5 = CheckpointCardColors;
  const primaryBackgroundColor = tmp2Result5.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp2Result6 = CheckpointScreen;
  const checkpointScreenContentHeight = tmp2Result6.useCheckpointScreenContentHeight();
  [tmp14, require] = react.useState(null);
  let diff;
  _slicedToArray(react.useState(null), 2);
  if (null != tmp14) {
    diff = checkpointScreenContentHeight - closure_11 - PX_16 - tmp14;
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
    const obj2 = { id: first1.id, animated: tmp25, size: 48 };
    tmp25 = !stateFromStores;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      tmp25 = true === first1.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    ({ id: obj8.id, iconHash: obj8.icon } = game);
    const obj7 = AvatarUtilsDefault;
    applicationIconURL = obj7.getApplicationIconURL(obj3);
  }
  let tmp28Result4 = closure_8(tmp2(8135).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const obj4 = { style: tmp.container, children: items2 };
  items2 = [, ];
  const tmp31 = CheckpointScreenDefault;
  items2[0] = closure_8(CheckpointRecapCardDefault, { isStepFocusTarget: true, character, maxHeight: diff });
  const obj5 = {
    style: tmp.stats,
    onLayout: function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    },
    children: items4
  };
  const obj6 = { style: tmp.row, children: items3 };
  const obj9 = { label: intl.string(_modDef3091.MSrV9z), value: round(num), color: primaryBackgroundColor };
  intl = tmp2(1114).intl;
  num = undefined;
  const _Math = Math;
  round = Math.round;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  items3 = [closure_8(NumberStat, obj9), ];
  const obj10 = { label: intl2.string(_modDef3091.hhh11L), value: round2(num2), color: primaryBackgroundColor };
  intl2 = tmp2(1114).intl;
  num2 = undefined;
  const _Math2 = Math;
  round2 = Math.round;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  items3[1] = closure_8(NumberStat, obj10);
  items4 = [closure_9(View, obj6), , , ];
  const obj11 = { style: tmp.row, children: items5 };
  const obj12 = { label: intl3.string(_modDef3091["f5S+pt"]), value: round3(num3), color: primaryBackgroundColor };
  intl3 = tmp2(1114).intl;
  num3 = undefined;
  const _Math3 = Math;
  round3 = Math.round;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  items5 = [closure_8(NumberStat, obj12), ];
  const obj13 = { label: intl4.string(_modDef3059["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp28Result };
  intl4 = tmp2(1114).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl5 = tmp2(1114).intl;
    name = intl5.string(tmp30(3091).GultYJ);
  }
  tmp28Result = tmp28Result4;
  if (null != first) {
    const obj14 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp30Result = GuildIconDefault;
    tmp28Result = tmp28(tmp30Result, obj14);
  }
  items5[1] = closure_8(ItemStat, obj13);
  items4[1] = closure_9(View, obj11);
  const obj15 = { style: tmp.row, children: items6 };
  const obj16 = { label: intl6.string(_modDef3091.xVSlv3), value: round4(num4), color: primaryBackgroundColor };
  intl6 = tmp2(1114).intl;
  num4 = undefined;
  const _Math4 = Math;
  round4 = Math.round;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  items6 = [closure_8(NumberStat, obj16), ];
  const obj17 = { label: intl7.string(_modDef3059["3sARW7"]), name: stringResult, color: primaryBackgroundColor, icon: tmp28Result3 };
  intl7 = tmp2(1114).intl;
  if (null == first1) {
    const intl8 = tmp2(1114).intl;
    stringResult = intl8.string(tmp2(1114).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp30Result3 = UnicodeEmojisDefault;
    stringResult = tmp30Result3.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  tmp28Result3 = tmp28Result4;
  if (null != first1) {
    let str2 = "";
    const tmp30Result4 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj18 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj22.style, emoji: obj22.fastImageStyle, textEmoji: obj22.textEmojiStyle } = tmp);
    tmp28Result3 = tmp28(tmp30Result4, obj18);
  }
  items6[1] = closure_8(ItemStat, obj17);
  items4[2] = closure_9(View, obj15);
  const obj19 = { style: tmp.row, children: items7 };
  const obj20 = { label: intl9.string(_modDef3091.y2Y1DD), value: round5(num5), color: primaryBackgroundColor };
  intl9 = tmp2(1114).intl;
  num5 = undefined;
  const _Math5 = Math;
  round5 = Math.round;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  items7 = [closure_8(NumberStat, obj20), ];
  const obj21 = { label: intl10.string(_modDef3059.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp28Result4 };
  intl10 = tmp2(1114).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl11 = tmp2(1114).intl;
    name2 = intl11.string(tmp2(1114).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj23 = { source: obj24, style: tmp.itemIcon };
    obj24 = { uri: applicationIconURL };
    tmp28Result4 = tmp28(tmp30(5712), obj23);
  }
  const obj25 = { children: closure_9(View, obj4) };
  items7[1] = closure_8(ItemStat, obj21);
  items4[3] = closure_9(View, obj19);
  items2[1] = closure_9(View, obj5);
  return closure_8(tmp31, obj25);
};
