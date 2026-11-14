// Module ID: 14531
// Function ID: 14532
// Name: CheckpointSummaryStatsScreen
// Dependencies: [19, 17, 5307, 14253, 6377, 21, 575, 5306, 1360, 504, 14270, 6401, 14485, 7994, 14532, 14271, 1113, 3317, 1414, 8375, 3285, 7720, 5929, 6747, 11328, 14512, 5252, 7894, 6020, 14506, 14479, 2]
// Exports: default

// Module 14531 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import _modDef3285 from "module_3285" /* 3285 */;
import _modDef3317 from "module_3317" /* 3317 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5252 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6401 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import GuildIcon from "GuildIcon" /* 7720 */;
import EmojiDefault from "Emoji" /* 7894 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import FlagIcon from "FlagIcon" /* 11328 */;
import CheckpointScreen from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14479 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 14512 */;
import CheckpointRecapCardDefault from "CheckpointRecapCard" /* 14532 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import PlatformUtils from "utils/PlatformUtils" /* 1360 */;
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
let tmp2;
const intl14 = tmp2(1113);
function GlobalSummaryStats() {
  let character;
  let intl;
  let items2;
  let items3;
  let obj6;
  let onLayout;
  let ref;
  let tmp6Result;
  const tmp = closure_13();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => character.character);
  const getCardColors = CheckpointCardColors.getCardColors;
  CheckpointCardColors;
  const obj2 = CheckpointCardColors;
  const primaryBackgroundColor = getCardColors(obj2.getCharacterCardColorPalette(stateFromStores)).primaryBackgroundColor;
  const tmp7 = useIsCheckpointWideDefault();
  const obj3 = CheckpointScreen;
  const checkpointScreenContentHeight = obj3.useCheckpointScreenContentHeight();
  const tmp9 = useMeasuredLayoutDefault();
  const height = tmp9.height;
  const diff = checkpointScreenContentHeight - sum;
  let tmp11 = diff;
  ({ ref, onLayout } = tmp9);
  if (!tmp7) {
    let diff1;
    if (null != height) {
      diff1 = diff - PX_32 - height;
    }
    tmp11 = diff1;
  }
  const items1 = [, , ];
  ({ container: arr2[0], noDataContainer: arr2[1] } = tmp);
  let noDataWideContainer = tmp7;
  const tmp15 = React4;
  if (tmp7) {
    noDataWideContainer = tmp.noDataWideContainer;
  }
  const obj4 = { style: items1, children: items2 };
  items1[2] = noDataWideContainer;
  items2 = [metroImportAll(CheckpointRecapCardDefault, { isStepFocusTarget: true, character: stateFromStores, maxHeight: tmp11, maxScale: 1.3432835820895523 }), ];
  let noDataDescriptionText = !tmp7;
  const obj5 = { ref, onLayout, style: tmp.noDataDescription, children: metroImportAll(tmp6Result, obj6) };
  tmp6Result = CheckpointTextDefault;
  if (!tmp7) {
    noDataDescriptionText = tmp.noDataDescriptionText;
  }
  obj6 = { variant: "body-md/medium", style: items3, children: intl.string(_modDef3317["GL+yOs"]) };
  items3 = [noDataDescriptionText, { color: primaryBackgroundColor }];
  intl = intl14.intl;
  items2[1] = metroImportAll(View, obj5);
  return tmp15(View, obj4);
}
function UserSummaryStats(stats) {
  let Text;
  let character;
  let diff;
  let emojiURL;
  let emojis;
  let games;
  let guilds;
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
  let messages;
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
  let stringResult2;
  let tmp20;
  let tmp22Result;
  let tmp22Result4;
  let tmp22Result5;
  let tmp2Result8;
  let useReducedMotion;
  let voice;
  stats = stats.stats;
  const tmp = closure_13();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => character.character);
  ({ voice, messages, guilds } = stats);
  let first;
  if (guilds != null) {
    first = guilds.guilds[0];
  }
  ({ emojis, games } = stats);
  const items1 = [AccessibilityStore];
  const tmp2Result = get_initialized;
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp2Result5 = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result5.getCharacterCardColorPalette(stateFromStores);
  const tmp2Result6 = CheckpointCardColors;
  const primaryBackgroundColor = tmp2Result6.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp2Result7 = CheckpointScreen;
  const checkpointScreenContentHeight = tmp2Result7.useCheckpointScreenContentHeight();
  const tmp10 = useMeasuredLayoutDefault();
  const height = tmp10.height;
  ({ ref, onLayout } = tmp10);
  if (null != height) {
    diff = checkpointScreenContentHeight - sum - PX_16 - height;
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
    const obj2 = { id: first1.id, animated: tmp20, size: 48 };
    tmp20 = !stateFromStores1;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores1) {
      tmp20 = true === first1.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    ({ id: obj8.id, iconHash: obj8.icon } = game);
    const tmp9Result5 = AvatarUtilsDefault;
    applicationIconURL = tmp9Result5.getApplicationIconURL(obj3);
  }
  let tmp22Result6 = metroImportAll(tmp2(8375).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = tmp2(1113).intl;
  const stringResult = intl.string(_modDef3317.s4qVni);
  const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
  const intl2 = tmp2(1113).intl;
  let icon;
  const stringResult1 = intl2.string(_modDef3285.y4M1na);
  const toLocaleUpperCaseResult1 = stringResult1.toLocaleUpperCase();
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp9Result6 = GuildIconDefault;
    tmp22Result = tmp22(tmp9Result6, obj4);
  } else {
    tmp22Result = tmp22Result6;
    if (null != first) {
      const obj5 = { style: items2, children: metroImportAll(Text, obj6) };
      items2 = [, ];
      ({ itemIcon: arr9[0], guildAcronym: arr9[1] } = tmp);
      obj6 = { variant: "body-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp2Result8.getGuildAcronymCharacter(first.guild.name) };
      Text = tmp2(5929).Text;
      tmp2Result8 = CheckpointStatsUtils;
      tmp22Result = tmp22(View, obj5);
    }
  }
  const obj7 = { style: tmp.container, children: items5 };
  if (null != stateFromStores) {
    const obj9 = { isStepFocusTarget: true, character: stateFromStores, maxHeight: diff };
    tmp22Result4 = tmp22(tmp9(14532), obj9);
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
    tmp22Result4 = tmp29(tmp30, obj10);
  }
  items5 = [tmp22Result4, ];
  const obj15 = { style: tmp.stats, ref, onLayout, children: items7 };
  const obj16 = { style: tmp.row, children: items6 };
  const obj17 = { label: intl3.string(_modDef3317.MSrV9z), statType: "voice", value: round(num), color: primaryBackgroundColor };
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
  const obj18 = { label: intl4.string(_modDef3317.hhh11L), statType: "messages", value: round2(num2), color: primaryBackgroundColor };
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
  const obj20 = { label: intl5.string(_modDef3317["f5S+pt"]), statType: "topServerDays", value: round3(num3), color: primaryBackgroundColor };
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
  const obj21 = { label: intl6.string(_modDef3285["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp22Result };
  intl6 = tmp2(1113).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl7 = tmp2(1113).intl;
    name = intl7.string(tmp9(3317).GultYJ);
  }
  items8[1] = metroImportAll(ItemStat, obj21);
  items7[1] = React4(View, obj19);
  const obj22 = { style: tmp.row, children: items9 };
  const obj23 = { label: intl8.string(_modDef3317.xVSlv3), statType: "emoji", value: round4(num4), color: primaryBackgroundColor };
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
  const obj24 = { label: intl9.string(_modDef3285["3sARW7"]), name: stringResult2, color: primaryBackgroundColor, icon: tmp22Result5 };
  intl9 = tmp2(1113).intl;
  if (null == first1) {
    const intl10 = tmp2(1113).intl;
    stringResult2 = intl10.string(tmp2(1113).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp9Result7 = UnicodeEmojisDefault;
    stringResult2 = tmp9Result7.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  tmp22Result5 = tmp22Result6;
  if (null != first1) {
    let str2 = "";
    const tmp9Result8 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj26 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj25.style, emoji: obj25.fastImageStyle, textEmoji: obj25.textEmojiStyle } = tmp);
    tmp22Result5 = tmp22(tmp9Result8, obj26);
  }
  items9[1] = metroImportAll(ItemStat, obj24);
  items7[2] = React4(View, obj22);
  const obj27 = { style: tmp.row, children: items10 };
  const obj28 = { label: intl11.string(_modDef3317.y2Y1DD), statType: "gameDays", value: round5(num5), color: primaryBackgroundColor };
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
  items10 = [metroImportAll(NumberStat, obj28), ];
  const obj29 = { label: intl12.string(_modDef3285.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp22Result6 };
  intl12 = tmp2(1113).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl13 = tmp2(1113).intl;
    name2 = intl13.string(tmp2(1113).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj30 = { source: obj31, style: tmp.itemIcon };
    obj31 = { uri: applicationIconURL };
    tmp22Result6 = tmp22(tmp9(6020), obj30);
  }
  items10[1] = metroImportAll(ItemStat, obj29);
  items7[3] = React4(View, obj27);
  items5[1] = React4(View, obj15);
  return React4(View, obj7);
}
function NumberStat(arg0) {
  let items1;
  let label;
  let obj3;
  let statType;
  let value;
  ({ value, color } = arg0);
  ({ label, statType } = arg0);
  const tmp = closure_13();
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
  const tmp = closure_13();
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
const PX_32 = nativeDefault.space.PX_32;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", gap: PX_16, paddingBottom: sum }, noDataContainer: { justifyContent: "center", gap: PX_32 }, noDataWideContainer: { flexDirection: "row", maxWidth: "100%" }, heading: obj2, headingLabel: obj3, stats: obj4, noDataDescription: { width: 240 }, noDataDescriptionText: { textAlign: "center" }, row: obj5, stat: obj6, statNumber: { height: 24, justifyContent: "center" }, item: obj7, itemName: { flexShrink: 1 }, itemIcon: size, guildAcronym: obj8, emoji: { width: 28, height: 28 }, textEmoji: { fontSize: 24, lineHeight: num, textAlign: "center" } };
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
let closure_13 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  let children;
  let stats;
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => stats.stats);
  const tmp3 = CheckpointScreenDefault;
  if (null === stateFromStores) {
    children = tmp2(GlobalSummaryStats, {});
  } else {
    const obj2 = { stats: stateFromStores };
    children = tmp2(UserSummaryStats, obj2);
  }
  return metroImportAll(tmp3, { children });
};
