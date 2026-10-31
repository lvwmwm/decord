// Module ID: 13671
// Function ID: 13672
// Name: CheckpointSummaryStatsScreen
// Dependencies: [32, 19, 17, 5015, 13421, 6066, 21, 575, 5014, 1376, 504, 6091, 13622, 1409, 8143, 6957, 5624, 6437, 13672, 1113, 3092, 3060, 4960, 7300, 5717, 13624, 13627, 2]
// Exports: default

// Module 13671 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl12 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import _modDef3060 from "module_3060" /* 3060 */;
import _modDef3092 from "module_3092" /* 3092 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4960 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6091 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6437 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import EmojiDefault from "Emoji" /* 7300 */;
import CheckpointScreen from "CheckpointScreen" /* 13622 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13627 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 13672 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1376 */;
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
let obj7;
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
let obj = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, stats: obj2, row: obj3, stat: obj4, statNumber: { height: 24, justifyContent: "center" }, item: obj5, itemName: { flexShrink: 1 }, itemIcon: size, guildAcronym: obj6, emoji: { width: 28, height: 28 }, textEmoji: obj7 };
obj2 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let PlatformUtils = PlatformUtils_mod;
let num = 24;
if (PlatformUtils.isIOS()) {
  num = 28;
}
obj7 = { fontSize: num, lineHeight: num2, textAlign: "center" };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  let Text;
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
  let items8;
  let name;
  let name2;
  let num;
  let num2;
  let num3;
  let num4;
  let num5;
  let obj26;
  let obj6;
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
  let tmp2Result8;
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
  const tmp2Result5 = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result5.getCharacterCardColorPalette(character);
  const tmp2Result6 = CheckpointCardColors;
  const primaryBackgroundColor = tmp2Result6.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp2Result7 = CheckpointScreen;
  const checkpointScreenContentHeight = tmp2Result7.useCheckpointScreenContentHeight();
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
  let tmp28Result4 = closure_8(tmp2(8143).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  let icon;
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp32 = GuildIconDefault;
    tmp28Result = tmp28(tmp32, obj4);
  } else {
    tmp28Result = tmp28Result4;
    if (null != first) {
      const obj5 = { style: items2, children: closure_8(Text, obj6) };
      items2 = [, ];
      ({ itemIcon: arr9[0], guildAcronym: arr9[1] } = tmp);
      obj6 = { variant: "text-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp2Result8.getGuildAcronymCharacter(first.guild.name) };
      Text = tmp2(5624).Text;
      tmp2Result8 = CheckpointStatsUtils;
      tmp28Result = tmp28(View, obj5);
    }
  }
  const obj9 = { style: tmp.container, children: items3 };
  items3 = [, ];
  const tmp35 = CheckpointScreenDefault;
  items3[0] = closure_8(CheckpointRecapCardDefault, { isStepFocusTarget: true, character, maxHeight: diff });
  const obj10 = {
    style: tmp.stats,
    onLayout: function handleStatsLayout(nativeEvent) {
      require(nativeEvent.nativeEvent.layout.height);
    },
    children: items5
  };
  const obj11 = { style: tmp.row, children: items4 };
  const obj12 = { label: intl.string(_modDef3092.MSrV9z), value: round(num), color: primaryBackgroundColor };
  intl = tmp2(1113).intl;
  num = undefined;
  const _Math = Math;
  round = Math.round;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  items4 = [closure_8(NumberStat, obj12), ];
  const obj13 = { label: intl2.string(_modDef3092.hhh11L), value: round2(num2), color: primaryBackgroundColor };
  intl2 = tmp2(1113).intl;
  num2 = undefined;
  const _Math2 = Math;
  round2 = Math.round;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  items4[1] = closure_8(NumberStat, obj13);
  items5 = [closure_9(View, obj11), , , ];
  const obj14 = { style: tmp.row, children: items6 };
  const obj15 = { label: intl3.string(_modDef3092["f5S+pt"]), value: round3(num3), color: primaryBackgroundColor };
  intl3 = tmp2(1113).intl;
  num3 = undefined;
  const _Math3 = Math;
  round3 = Math.round;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  items6 = [closure_8(NumberStat, obj15), ];
  const obj16 = { label: intl4.string(_modDef3060["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp28Result };
  intl4 = tmp2(1113).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl5 = tmp2(1113).intl;
    name = intl5.string(tmp34(3092).GultYJ);
  }
  items6[1] = closure_8(ItemStat, obj16);
  items5[1] = closure_9(View, obj14);
  const obj17 = { style: tmp.row, children: items7 };
  const obj18 = { label: intl6.string(_modDef3092.xVSlv3), value: round4(num4), color: primaryBackgroundColor };
  intl6 = tmp2(1113).intl;
  num4 = undefined;
  const _Math4 = Math;
  round4 = Math.round;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  items7 = [closure_8(NumberStat, obj18), ];
  const obj19 = { label: intl7.string(_modDef3060["3sARW7"]), name: stringResult, color: primaryBackgroundColor, icon: tmp28Result3 };
  intl7 = tmp2(1113).intl;
  if (null == first1) {
    const intl8 = tmp2(1113).intl;
    stringResult = intl8.string(tmp2(1113).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp34Result = UnicodeEmojisDefault;
    stringResult = tmp34Result.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = ":" + first1.name + ":";
  }
  tmp28Result3 = tmp28Result4;
  if (null != first1) {
    let str2 = "";
    const tmp34Result2 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj20 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj22.style, emoji: obj22.fastImageStyle, textEmoji: obj22.textEmojiStyle } = tmp);
    tmp28Result3 = tmp28(tmp34Result2, obj20);
  }
  items7[1] = closure_8(ItemStat, obj19);
  items5[2] = closure_9(View, obj17);
  const obj21 = { style: tmp.row, children: items8 };
  const obj23 = { label: intl9.string(_modDef3092.y2Y1DD), value: round5(num5), color: primaryBackgroundColor };
  intl9 = tmp2(1113).intl;
  num5 = undefined;
  const _Math5 = Math;
  round5 = Math.round;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  items8 = [closure_8(NumberStat, obj23), ];
  const obj24 = { label: intl10.string(_modDef3060.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp28Result4 };
  intl10 = tmp2(1113).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl11 = tmp2(1113).intl;
    name2 = intl11.string(tmp2(1113).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj25 = { source: obj26, style: tmp.itemIcon };
    obj26 = { uri: applicationIconURL };
    tmp28Result4 = tmp28(tmp34(5717), obj25);
  }
  const obj27 = { children: closure_9(View, obj9) };
  items8[1] = closure_8(ItemStat, obj24);
  items5[3] = closure_9(View, obj21);
  items3[1] = closure_9(View, obj10);
  return closure_8(tmp35, obj27);
};
