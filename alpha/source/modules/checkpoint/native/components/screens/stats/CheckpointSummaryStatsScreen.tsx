// Module ID: 12779
// Function ID: 12780
// Name: CheckpointSummaryStatsScreen
// Dependencies: [19, 17, 4914, 12128, 5969, 21, 575, 4913, 1358, 12727, 504, 12509, 5993, 7597, 12780, 12510, 1112, 3440, 1494, 1412, 7977, 3408, 7322, 5504, 6339, 10269, 12755, 4859, 7496, 5600, 12749, 12721, 2]
// Exports: default

// Module 12779 (CheckpointSummaryStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import _modDef3408 from "module_3408" /* 3408 */;
import _modDef3440 from "module_3440" /* 3440 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4859 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5993 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6339 */;
import GuildIcon from "GuildIcon" /* 7322 */;
import EmojiDefault from "Emoji" /* 7496 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7597 */;
import FlagIcon from "FlagIcon" /* 10269 */;
import CheckpointScreen from "CheckpointScreen" /* 12509 */;
import CheckpointTextDefault from "CheckpointText" /* 12510 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12721 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 12727 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 12749 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12755 */;
import CheckpointRecapCard from "CheckpointRecapCard" /* 12780 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import CheckpointStore from "CheckpointStore" /* 12128 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const CheckpointScreenDefault = CheckpointScreen;
const CheckpointRecapCardDefault = CheckpointRecapCard;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c9;
let metroImportAll;
let metroImportDefault;
let num;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let tmp2;
const intl14 = tmp2(1112);
function GlobalSummaryStats() {
  let character;
  let intl;
  let items2;
  let items3;
  let obj6;
  let onLayout;
  let ref;
  let tmp6Result;
  const tmp = closure_15();
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
  const diff = checkpointScreenContentHeight - map1;
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
  obj6 = { variant: "body-md/medium", style: items3, children: intl.string(_modDef3440["GL+yOs"]) };
  items3 = [noDataDescriptionText, { color: primaryBackgroundColor }];
  intl = intl14.intl;
  items2[1] = metroImportAll(View, obj5);
  return tmp15(View, obj4);
}
function UserSummaryStats(stats) {
  let Text;
  let character;
  let emojiURL;
  let emojis;
  let games;
  let guilds;
  let height;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items13;
  let items2;
  let items5;
  let items6;
  let items7;
  let items9;
  let messages;
  let name;
  let name2;
  let num10;
  let num6;
  let num7;
  let num8;
  let num9;
  let obj11;
  let obj34;
  let obj6;
  let onLayout;
  let ref;
  let result;
  let round;
  let round2;
  let round3;
  let round4;
  let round5;
  let stringResult2;
  let tmp26;
  let tmp28Result;
  let tmp28Result4;
  let tmp28Result5;
  let tmp5Result8;
  let useReducedMotion;
  let voice;
  let wideContainer;
  stats = stats.stats;
  const tmp = closure_15();
  const tmp4 = useIsCheckpointWideDefault();
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
  const tmp5Result = get_initialized;
  const stateFromStores1 = tmp5Result.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp5Result5 = CheckpointCardColors;
  const characterCardColorPalette = tmp5Result5.getCharacterCardColorPalette(stateFromStores);
  const tmp5Result6 = CheckpointCardColors;
  const primaryBackgroundColor = tmp5Result6.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const tmp5Result7 = CheckpointScreen;
  const checkpointScreenContentHeight = tmp5Result7.useCheckpointScreenContentHeight(tmp4);
  ({ height, ref, onLayout } = useMeasuredLayoutDefault());
  useMeasuredLayoutDefault();
  size = tmp2(1494)({ ignoreKeyboard: true });
  let num = 1;
  if (Math.min(size.width, size.height) >= 600) {
    num = 1.4;
  }
  let diff;
  if (null != height) {
    diff = checkpointScreenContentHeight - map1 - PX_24 - height;
  }
  let minResult = diff;
  if (tmp4) {
    let num2 = 240;
    const _Math = Math;
    if (1 < num) {
      num2 = tmp5(12780).CARD_HEIGHT * num;
    }
    minResult = min(num2, checkpointScreenContentHeight);
  }
  if (null != diff) {
    const _Math2 = Math;
    const _Math3 = Math;
    map1 = PX_24 + Math.min(Math.max(diff - tmp5(12780).CARD_HEIGHT * num, 0), PX_48 - PX_24);
  } else {
    map1 = PX_24;
  }
  let wideStatsExpanded = tmp4 && null != height && height <= checkpointScreenContentHeight - 2 * closure_14;
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
    const obj2 = { id: first1.id, animated: tmp26, size: 48 };
    tmp26 = !stateFromStores1;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores1) {
      tmp26 = true === first1.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  let applicationIconURL;
  if (null != game) {
    const obj3 = { id: null, icon: null, fallbackAvatar: false };
    ({ id: obj8.id, iconHash: obj8.icon } = game);
    const tmp2Result6 = AvatarUtilsDefault;
    applicationIconURL = tmp2Result6.getApplicationIconURL(obj3);
  }
  let tmp28Result6 = metroImportAll(tmp5(7977).UnknownGameIcon, { size: "md", color: primaryBackgroundColor });
  const intl = tmp5(1112).intl;
  const stringResult = intl.string(_modDef3440.s4qVni);
  const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
  const intl2 = tmp5(1112).intl;
  let icon;
  const stringResult1 = intl2.string(_modDef3408.y4M1na);
  const toLocaleUpperCaseResult1 = stringResult1.toLocaleUpperCase();
  if (first != null) {
    icon = first.guild.icon;
  }
  if (null != icon) {
    const obj4 = { guild: first.guild, size: GuildIcon.GuildIconSizes.SMALL, style: tmp.itemIcon };
    const tmp2Result7 = GuildIconDefault;
    tmp28Result = tmp28(tmp2Result7, obj4);
  } else {
    tmp28Result = tmp28Result6;
    if (null != first) {
      const obj5 = { style: items2, children: metroImportAll(Text, obj6) };
      items2 = [, ];
      ({ itemIcon: arr14[0], guildAcronym: arr14[1] } = tmp);
      obj6 = { variant: "body-md/semibold", color: "text-overlay-light", allowFontScaling: false, children: tmp5Result8.getGuildAcronymCharacter(first.guild.name) };
      Text = tmp5(5504).Text;
      tmp5Result8 = CheckpointStatsUtils;
      tmp28Result = tmp28(View, obj5);
    }
  }
  const items3 = [tmp.row, tmp4 && tmp.wideRow];
  let wideLeftStat;
  if (wideStatsExpanded) {
    wideLeftStat = tmp.wideLeftStat;
  }
  let wideRightStat;
  if (wideStatsExpanded) {
    wideRightStat = tmp.wideRightStat;
  }
  if (tmp4) {
    wideContainer = tmp.wideContainer;
  } else {
    wideContainer = [tmp.container, ];
    const obj7 = { gap: map1 };
    wideContainer[1] = obj7;
  }
  const obj9 = { style: wideContainer, children: items7 };
  if (null != stateFromStores) {
    let prop;
    if (tmp4) {
      if (!wideStatsExpanded) {
        prop = tmp.wideCardClearControls;
      }
    }
    const obj10 = { style: prop, children: metroImportAll(CheckpointRecapCardDefault, obj11) };
    obj11 = { isStepFocusTarget: true, character: stateFromStores, maxHeight: minResult, maxScale: num };
    tmp28Result4 = tmp28(tmp38, obj10);
  } else {
    const items4 = [tmp.heading, tmp4 && tmp.wideHeading, ];
    let tmp39 = tmp4;
    if (tmp39) {
      let CARD_HEIGHT = minResult;
      const CARD_WIDTH = tmp5(12780).CARD_WIDTH;
      if (minResult == null) {
        CARD_HEIGHT = tmp5(12780).CARD_HEIGHT;
      }
      const obj12 = { width: result / CheckpointRecapCard.CARD_HEIGHT };
      result = CARD_WIDTH * CARD_HEIGHT;
      tmp39 = obj12;
    }
    const obj13 = { style: items4, children: items6 };
    items4[2] = tmp39;
    const obj14 = { style: tmp.headingLabel, children: items5 };
    const obj15 = { size: "xs", color: metroImportDefault };
    items5 = [metroImportAll(FlagIcon.FlagIcon, obj15), ];
    const obj16 = { isStepHeading: true, variant: "heading-sm/semibold", children: toLocaleUpperCaseResult };
    items5[1] = metroImportAll(CheckpointTextDefault, obj16);
    items6 = [React4(View, obj14), ];
    let num5;
    const tmp2Result8 = CheckpointDisplayTextDefault;
    if (tmp4) {
      num5 = 1;
    }
    const obj17 = { lineClamp: num5, adjustsFontSizeToFit: tmp4, children: toLocaleUpperCaseResult1 };
    items6[1] = metroImportAll(tmp2Result8, obj17);
    tmp28Result4 = tmp37(tmp38, obj13);
  }
  items7 = [tmp28Result4, ];
  const items8 = [tmp.stats, tmp4 && tmp.wideStats, ];
  if (wideStatsExpanded) {
    wideStatsExpanded = tmp.wideStatsExpanded;
  }
  const obj18 = { style: items8, ref, onLayout, children: items10 };
  items8[2] = wideStatsExpanded;
  const obj19 = { style: items3, children: items9 };
  const obj20 = { style: wideLeftStat, label: intl3.string(_modDef3440.MSrV9z), statType: "voice", value: round(num6), color: primaryBackgroundColor };
  intl3 = tmp5(1112).intl;
  num6 = undefined;
  const _Math4 = Math;
  round = Math.round;
  if (voice != null) {
    num6 = voice.totalVoiceMinutes;
  }
  if (num6 == null) {
    num6 = 0;
  }
  items9 = [metroImportAll(NumberStat, obj20), ];
  const obj21 = { style: wideRightStat, label: intl4.string(_modDef3440.hhh11L), statType: "messages", value: round2(num7), color: primaryBackgroundColor };
  intl4 = tmp5(1112).intl;
  num7 = undefined;
  const _Math5 = Math;
  round2 = Math.round;
  if (messages != null) {
    num7 = messages.numMessagesSent;
  }
  if (num7 == null) {
    num7 = 0;
  }
  items9[1] = metroImportAll(NumberStat, obj21);
  items10 = [React4(View, obj19), , , ];
  const obj22 = { style: items3, children: items11 };
  const obj23 = { style: wideLeftStat, label: intl5.string(_modDef3440["f5S+pt"]), statType: "topServerDays", value: round3(num8), color: primaryBackgroundColor };
  intl5 = tmp5(1112).intl;
  num8 = undefined;
  const _Math6 = Math;
  round3 = Math.round;
  if (first != null) {
    num8 = first.numDaysInteracted;
  }
  if (num8 == null) {
    num8 = 0;
  }
  items11 = [metroImportAll(NumberStat, obj23), ];
  const obj24 = { style: wideRightStat, singleLine: tmp4, label: intl6.string(_modDef3408["8XPMJj"]), name, color: primaryBackgroundColor, icon: tmp28Result };
  intl6 = tmp5(1112).intl;
  if (null != first) {
    name = first.guild.name;
  } else {
    const intl7 = tmp5(1112).intl;
    name = intl7.string(tmp2(3440).GultYJ);
  }
  items11[1] = metroImportAll(ItemStat, obj24);
  items10[1] = React4(View, obj22);
  const obj25 = { style: items3, children: items12 };
  const obj26 = { style: wideLeftStat, label: intl8.string(_modDef3440.xVSlv3), statType: "emoji", value: round4(num9), color: primaryBackgroundColor };
  intl8 = tmp5(1112).intl;
  num9 = undefined;
  const _Math7 = Math;
  round4 = Math.round;
  if (emojis != null) {
    num9 = emojis.numEmojisSent;
  }
  if (num9 == null) {
    num9 = 0;
  }
  items12 = [metroImportAll(NumberStat, obj26), ];
  const obj27 = { style: wideRightStat, singleLine: tmp4, label: intl9.string(_modDef3408["3sARW7"]), name: stringResult2, color: primaryBackgroundColor, icon: tmp28Result5 };
  intl9 = tmp5(1112).intl;
  if (null == first1) {
    const intl10 = tmp5(1112).intl;
    stringResult2 = intl10.string(tmp5(1112).t.PoWNfe);
  } else if (null == first1.id) {
    const tmp2Result9 = UnicodeEmojisDefault;
    stringResult2 = tmp2Result9.convertSurrogateToName(first1.name);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult2 = ":" + first1.name + ":";
  }
  tmp28Result5 = tmp28Result6;
  if (null != first1) {
    let str2 = "";
    const tmp2Result10 = EmojiDefault;
    if (null == first1.id) {
      str2 = first1.name;
    }
    const obj28 = { name: str2, src: emojiURL, style: null, fastImageStyle: null, textEmojiStyle: null };
    ({ emoji: obj33.style, emoji: obj33.fastImageStyle, textEmoji: obj33.textEmojiStyle } = tmp);
    tmp28Result5 = tmp28(tmp2Result10, obj28);
  }
  items12[1] = metroImportAll(ItemStat, obj27);
  items10[2] = React4(View, obj25);
  const obj29 = { style: items3, children: items13 };
  const obj30 = { style: wideLeftStat, label: intl11.string(_modDef3440.y2Y1DD), statType: "gameDays", value: round5(num10), color: primaryBackgroundColor };
  intl11 = tmp5(1112).intl;
  num10 = undefined;
  const _Math8 = Math;
  round5 = Math.round;
  if (games != null) {
    num10 = games.totalDaysPlayed;
  }
  if (num10 == null) {
    num10 = 0;
  }
  items13 = [metroImportAll(NumberStat, obj30), ];
  const obj31 = { style: wideRightStat, singleLine: tmp4, label: intl12.string(_modDef3408.RbT4Zq), name: name2, color: primaryBackgroundColor, icon: tmp28Result6 };
  intl12 = tmp5(1112).intl;
  if (null != game) {
    name2 = game.name;
  } else {
    const intl13 = tmp5(1112).intl;
    name2 = intl13.string(tmp5(1112).t.PoWNfe);
  }
  if (null != applicationIconURL) {
    const obj32 = { source: obj34, style: tmp.itemIcon };
    obj34 = { uri: applicationIconURL };
    tmp28Result6 = tmp28(tmp2(5600), obj32);
  }
  items13[1] = metroImportAll(ItemStat, obj31);
  items10[3] = React4(View, obj29);
  items7[1] = React4(View, obj18);
  return React4(View, obj9);
}
function NumberStat(arg0) {
  let items1;
  let items2;
  let label;
  let obj3;
  let statType;
  let style;
  let value;
  ({ value, color } = arg0);
  ({ label, statType, style } = arg0);
  const tmp = closure_15();
  const items = [color];
  const memo = react.useMemo(() => ({ color }), items);
  const obj = CheckpointNumberUtils;
  const obj2 = { style: items1, accessible: true, accessibilityLabel: obj3.formatCheckpointStatAccessibilityLabel(statType, value), children: items2 };
  items1 = [tmp.stat, style];
  const result = obj.formatCheckpointStatNumber(value);
  obj3 = CheckpointNumberUtils;
  items2 = [metroImportAll(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj4 = { style: tmp.statNumber, children: metroImportAll(CheckpointStatNumberDefault, { value: result, color, size: 32 }) };
  items2[1] = metroImportAll(View, obj4);
  return React4(View, obj2);
}
function ItemStat(arg0) {
  let icon;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let name;
  let num;
  let singleLine;
  let style;
  ({ label, name, color } = arg0);
  ({ icon, singleLine, style } = arg0);
  const tmp = closure_15();
  const items = [color];
  const memo = react.useMemo(() => ({ color }), items);
  const obj = { style: items1, accessible: true, accessibilityLabel: "" + label + ", " + name, children: items2 };
  items1 = [tmp.stat, style];
  items2 = [metroImportAll(CheckpointTextDefault, { variant: "body-md/medium", style: memo, children: label }), ];
  const obj2 = { style: tmp.item, children: items3 };
  items3 = [, ];
  const obj3 = { style: tmp.itemIcon, children: icon };
  items3[0] = metroImportAll(View, obj3);
  const obj4 = { variant: "body-md/semibold", style: items4, lineClamp: num, children: name };
  items4 = [tmp.itemName, memo];
  num = undefined;
  const tmp5 = metroImportAll;
  const tmp6 = CheckpointTextDefault;
  if (singleLine) {
    num = 1;
  }
  items3[1] = tmp5(tmp6, obj4);
  items2[1] = React4(View, obj2);
  return React4(View, obj);
}
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_24 = nativeDefault.space.PX_24;
const PX_48 = nativeDefault.space.PX_48;
const PX_32 = nativeDefault.space.PX_32;
const sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
let map1 = sum;
const PX_242 = nativeDefault.space.PX_24;
let closure_14 = CHECKPOINT_NAV_HEIGHT + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", maxWidth: 400, alignSelf: "center", flexGrow: 1, alignItems: "center", justifyContent: "center", gap: PX_24, paddingBottom: sum }, noDataContainer: { justifyContent: "center", gap: PX_32 }, noDataWideContainer: { flexDirection: "row", maxWidth: "100%" }, heading: obj2, headingLabel: obj3, wideContainer: obj4, wideCardClearControls: obj5, wideHeading: { alignSelf: "center" }, wideStats: obj6, wideStatsExpanded: obj7, wideRow: { columnGap: PX_242 }, wideLeftStat: { flex: 140 }, wideRightStat: { flex: 240 }, stats: obj8, noDataDescription: { width: 240 }, noDataDescriptionText: { textAlign: "center" }, row: obj9, stat: obj10, statNumber: { height: 24, justifyContent: "center" }, item: obj11, itemName: { flexShrink: 1 }, itemIcon: size, guildAcronym: obj12, emoji: { width: 28, height: 28 }, textEmoji: { fontSize: 24, lineHeight: num, textAlign: "center" } };
obj2 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { flexGrow: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", columnGap: nativeDefault.space.PX_40, paddingRight: 116 };
obj5 = { paddingBottom: nativeDefault.space.PX_48 };
obj6 = { alignSelf: "center", width: 280 + PX_242, gap: nativeDefault.space.PX_16 };
obj7 = { width: 140 + PX_242 + 240 };
obj8 = { alignSelf: "stretch", gap: nativeDefault.space.PX_24 };
obj9 = { flexDirection: "row", columnGap: nativeDefault.space.PX_16 };
obj10 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.none };
obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 30;
}
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  let stats;
  let tmp3Result;
  const tmp = useIsCheckpointWideDefault();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => stats.stats);
  let tmp5 = tmp;
  const tmp4 = CheckpointScreenDefault;
  if (tmp) {
    tmp5 = null !== stateFromStores;
  }
  const obj2 = { centered: tmp5, children: tmp3Result };
  if (null === stateFromStores) {
    tmp3Result = tmp3(GlobalSummaryStats, {});
  } else {
    const obj3 = { stats: stateFromStores };
    tmp3Result = tmp3(UserSummaryStats, obj3);
  }
  return metroImportAll(tmp4, obj2);
};
