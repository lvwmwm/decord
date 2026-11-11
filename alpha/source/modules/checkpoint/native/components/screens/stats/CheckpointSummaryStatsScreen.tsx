// Module ID: 14414
// Function ID: 14415
// Name: CheckpointSummaryStatsScreen
// Dependencies: [19, 17, 5244, 14150, 6314, 21, 575, 5243, 1357, 504, 6338, 14163, 7929, 1411, 8309, 1113, 3269, 3237, 7654, 5866, 6684, 14415, 11267, 14164, 14393, 5189, 7828, 5957, 14387, 14377, 2]
// Exports: default

// Module 14414 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef3237 from "module_3237" /* 3237 */;
import _modDef3269 from "module_3269" /* 3269 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5189 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6338 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import EmojiDefault from "Emoji" /* 7828 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import FlagIcon from "FlagIcon" /* 11267 */;
import CheckpointScreen from "CheckpointScreen" /* 14163 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14377 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14387 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 14393 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;

let CHECKPOINT_CONTROL_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
function NumberStat(arg0) {
  let items1;
  let label;
  let obj3;
  let statType;
  let value;
  ({ value, color } = arg0);
  ({ label, statType } = arg0);
  const tmp = closure_12();
  const items = [color];
  const memo = react.useMemo(() => ({ color }), items);
  const obj = CheckpointNumberUtils;
  const obj2 = { style: tmp.stat, accessible: true, accessibilityLabel: obj3.formatCheckpointStatAccessibilityLabel(statType, value), children: items1 };
  const result = obj.formatCheckpointStatNumber(value);
  obj3 = CheckpointNumberUtils;
  items1 = [metroImportAll(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj4 = { style: tmp.statNumber, children: metroImportAll(CheckpointStatNumberDefault, { value: result, color, size: 32 }) };
  items1[1] = metroImportAll(View, obj4);
  return React4(View, obj2);
}
function ItemStat(icon) {
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
  items1 = [metroImportAll(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: items2 };
  items2 = [, ];
  const obj3 = { style: tmp.itemIcon, children: icon };
  items2[0] = metroImportAll(View, obj3);
  const obj4 = { variant: "body-md/semibold", style: items3, children: name };
  items3 = [tmp.itemName, memo];
  items2[1] = metroImportAll(CheckpointTextDefault, obj4);
  items1[1] = React4(View, obj2);
  return React4(View, obj);
}
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const unpackModuleId = sum;
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, heading: obj2, headingLabel: obj3, stats: obj4, row: obj5, stat: obj6, statNumber: { height: 24, justifyContent: "center" }, item: obj7, itemName: { flexShrink: 1 }, itemIcon: size, guildAcronym: obj8, emoji: { width: 28, height: 28 }, textEmoji: { fontSize: 24, lineHeight: num, textAlign: "center" } };
obj2 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj6 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 30;
}
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  let Text;
  let character;
  let diff;
  let emojiURL;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items10;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let name;
  let name2;
  let num;
  let num2;
  let num3;
  let num4;
  let num5;
  let obj31;
  let obj6;
  let onLayout;
  let ref;
  let round;
  let round2;
  let round3;
  let round4;
  let round5;
  let stats;
  let stringResult2;
  let tmp24;
  let tmp26Result;
  let tmp26Result4;
  let tmp26Result5;
  let tmp2Result8;
  let useReducedMotion;
  const tmp = closure_12();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ character: CheckpointStore.character, stats: CheckpointStore.stats, isCharacterCreatorEnabled: CheckpointStore.isCharacterCreatorEnabled }));
  ({ character, stats } = stateFromStoresObject);
  let voice;
  const isCharacterCreatorEnabled = stateFromStoresObject.isCharacterCreatorEnabled;
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
  const tmp14 = useMeasuredLayoutDefault();
  const height = tmp14.height;
  ({ ref, onLayout } = tmp14);
  if (null != height) {
    diff = checkpointScreenContentHeight - unpackModuleId - PX_16 - height;
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
    ({ id: obj8.id, iconHash: obj8.icon } = game);
    const tmp13Result6 = AvatarUtilsDefault;
    applicationIconURL = tmp13Result6.getApplicationIconURL(obj3);
  }
  let tmp26Result6 = metroImportAll(tmp2(8309).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = tmp2(1113).intl;
  const stringResult = intl.string(_modDef3269.s4qVni);
  const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
  const intl2 = tmp2(1113).intl;
  let icon;
  const stringResult1 = intl2.string(_modDef3237.y4M1na);
  const toLocaleUpperCaseResult1 = stringResult1.toLocaleUpperCase();
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp13Result7 = GuildIconDefault;
    tmp26Result = tmp26(tmp13Result7, obj4);
  } else {
    tmp26Result = tmp26Result6;
    if (null != first) {
      const obj5 = { style: items2, children: metroImportAll(Text, obj6) };
      items2 = [, ];
      ({ itemIcon: arr11[0], guildAcronym: arr11[1] } = tmp);
      obj6 = { variant: "body-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp2Result8.getGuildAcronymCharacter(first.guild.name) };
      Text = tmp2(5866).Text;
      tmp2Result8 = CheckpointStatsUtils;
      tmp26Result = tmp26(View, obj5);
    }
  }
  const obj7 = { style: tmp.container, children: items5 };
  const tmp13Result8 = CheckpointScreenDefault;
  if (isCharacterCreatorEnabled) {
    const obj9 = { isStepFocusTarget: true, character, maxHeight: diff };
    tmp26Result4 = tmp26(tmp13(14415), obj9);
  } else {
    const obj10 = { style: tmp.heading, children: items4 };
    const obj11 = { style: tmp.headingLabel, children: items3 };
    const obj12 = { size: "xs", color: metroImportDefault };
    items3 = [metroImportAll(FlagIcon.FlagIcon, obj12), ];
    const obj13 = { isStepHeading: true, variant: "heading-sm/semibold", children: toLocaleUpperCaseResult };
    items3[1] = metroImportAll(CheckpointTextDefault, obj13);
    items4 = [React4(View, obj11), ];
    const obj14 = { children: toLocaleUpperCaseResult1 };
    items4[1] = metroImportAll(CheckpointDisplayTextDefault, obj14);
    tmp26Result4 = tmp34(tmp35, obj10);
  }
  items5 = [tmp26Result4, ];
  const obj15 = { style: tmp.stats, ref, onLayout, children: items7 };
  const obj16 = { style: tmp.row, children: items6 };
  const obj17 = { label: intl3.string(_modDef3269.MSrV9z), statType: "voice", value: round(num), color: primaryBackgroundColor };
  intl3 = tmp2(1113).intl;
  num = undefined;
  const _Math = Math;
  round = Math.round;
  if (voice != null) {
    num = voice.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  items6 = [metroImportAll(NumberStat, obj17), ];
  const obj18 = { label: intl4.string(_modDef3269.hhh11L), statType: "messages", value: round2(num2), color: primaryBackgroundColor };
  intl4 = tmp2(1113).intl;
  num2 = undefined;
  const _Math2 = Math;
  round2 = Math.round;
  if (messages != null) {
    num2 = messages.numMessagesSent;
  }
  if (num2 == null) {
    num2 = 0;
  }
  items6[1] = metroImportAll(NumberStat, obj18);
  items7 = [React4(View, obj16), , , ];
  const obj19 = { style: tmp.row, children: items8 };
  const obj20 = { label: intl5.string(_modDef3269["f5S+pt"]), statType: "topServerDays", value: round3(num3), color: primaryBackgroundColor };
  intl5 = tmp2(1113).intl;
  num3 = undefined;
  const _Math3 = Math;
  round3 = Math.round;
  if (first != null) {
    num3 = first.numDaysInteracted;
  }
  if (num3 == null) {
    num3 = 0;
  }
  items8 = [metroImportAll(NumberStat, obj20), ];
  const obj21 = { label: intl6.string(_modDef3237["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp26Result };
  intl6 = tmp2(1113).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl7 = tmp2(1113).intl;
    name = intl7.string(tmp13(3269).GultYJ);
  }
  items8[1] = metroImportAll(ItemStat, obj21);
  items7[1] = React4(View, obj19);
  const obj22 = { style: tmp.row, children: items9 };
  const obj23 = { label: intl8.string(_modDef3269.xVSlv3), statType: "emoji", value: round4(num4), color: primaryBackgroundColor };
  intl8 = tmp2(1113).intl;
  num4 = undefined;
  const _Math4 = Math;
  round4 = Math.round;
  if (emojis != null) {
    num4 = emojis.numEmojisSent;
  }
  if (num4 == null) {
    num4 = 0;
  }
  items9 = [metroImportAll(NumberStat, obj23), ];
  const obj24 = { label: intl9.string(_modDef3237["3sARW7"]), name: stringResult2, color: primaryBackgroundColor, icon: tmp26Result5 };
  intl9 = tmp2(1113).intl;
  if (null == first1) {
    const intl10 = tmp2(1113).intl;
    stringResult2 = intl10.string(tmp2(1113).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp13Result9 = UnicodeEmojisDefault;
    stringResult2 = tmp13Result9.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  tmp26Result5 = tmp26Result6;
  if (null != first1) {
    let str2 = "";
    const tmp13Result10 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj25 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj30.style, emoji: obj30.fastImageStyle, textEmoji: obj30.textEmojiStyle } = tmp);
    tmp26Result5 = tmp26(tmp13Result10, obj25);
  }
  items9[1] = metroImportAll(ItemStat, obj24);
  items7[2] = React4(View, obj22);
  const obj26 = { style: tmp.row, children: items10 };
  const obj27 = { label: intl11.string(_modDef3269.y2Y1DD), statType: "gameDays", value: round5(num5), color: primaryBackgroundColor };
  intl11 = tmp2(1113).intl;
  num5 = undefined;
  const _Math5 = Math;
  round5 = Math.round;
  if (games != null) {
    num5 = games.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  items10 = [metroImportAll(NumberStat, obj27), ];
  const obj28 = { label: intl12.string(_modDef3237.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp26Result6 };
  intl12 = tmp2(1113).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl13 = tmp2(1113).intl;
    name2 = intl13.string(tmp2(1113).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj29 = { source: obj31, style: tmp.itemIcon };
    obj31 = { uri: applicationIconURL };
    tmp26Result6 = tmp26(tmp13(5957), obj29);
  }
  const obj32 = { children: React4(View, obj7) };
  items10[1] = metroImportAll(ItemStat, obj28);
  items7[3] = React4(View, obj26);
  items5[1] = React4(View, obj15);
  return metroImportAll(tmp13Result8, obj32);
};
