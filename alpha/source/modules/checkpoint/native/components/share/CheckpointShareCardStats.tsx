// Module ID: 13392
// Function ID: 13393
// Name: CheckpointShareCardStats
// Dependencies: [19, 17, 21, 5009, 575, 8135, 5712, 13391, 5619, 1893, 1410, 11933, 8635, 9738, 9430, 9707, 2]
// Exports: default

// Module 13392 (CheckpointShareCardStats)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import react_nativeDefault from "react-native" /* 1893 */;
import FastImageDefault from "FastImage" /* 5712 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8135 */;
import ChatIcon from "ChatIcon" /* 8635 */;
import ReactionIcon from "ReactionIcon" /* 9430 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import ServerIcon from "ServerIcon" /* 9738 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11933 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const Text_Text = tmp2(5619);
function StatIcon(size) {
  size = size.size;
  const obj = { size: "custom", color: nativeDefault.colors.BLACK, style: { width: size, height: size } };
  return hasOwnProperty(size.Icon, obj);
}
function StatImage(arg0) {
  let items;
  let obj3;
  let tmp5;
  let uri;
  ({ uri, size } = arg0);
  if (null == uri) {
    const obj2 = { Icon: UnknownGameIcon.UnknownGameIcon, size };
    tmp5 = hasOwnProperty(StatIcon, obj2);
  } else {
    const obj = { source: obj3, style: items };
    items = [tmp.statImage, ];
    const size1 = { width: size, height: size };
    obj3 = { uri };
    items[1] = size1;
    tmp5 = hasOwnProperty(FastImageDefault, obj);
  }
  return tmp5;
}
function StatRow(stat) {
  let icon;
  let items;
  let items1;
  let layout;
  let rowStyle;
  stat = stat.stat;
  ({ icon, layout, rowStyle } = stat);
  const tmp = closure_7();
  let tmp5 = null;
  if (null != stat) {
    const obj = { style: items, children: items1 };
    items = [tmp.statRow, rowStyle, ];
    const obj2 = { backgroundColor: tmp4 };
    items[2] = obj2;
    items1 = [icon, ];
    const obj3 = { variant: layout.textVariant, style: tmp.statText, lineClamp: 1, allowFontScaling: false, children: stat.text };
    items1[1] = hasOwnProperty(Text_Text.Text, obj3);
    tmp5 = metroRequire(View, obj);
  }
  return tmp5;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { statRow: obj2, statText: obj3, statImage: obj4, guildAcronym: obj5, unicodeEmoji: { fontSize: 9, lineHeight: 11 } };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, color: nativeDefault.colors.BLACK };
obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
let closure_7 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardStats.tsx");

export default function CheckpointShareCardStats(arg0) {
  let items;
  let items1;
  let items2;
  let layout;
  let obj10;
  let obj12;
  let obj16;
  let obj18;
  let obj20;
  let obj23;
  let obj26;
  let obj7;
  let rowStyle;
  let stats;
  let style;
  let tmp11;
  let tmp12;
  let tmp12Result;
  let tmp2Result4;
  let topEmoji;
  let topGame;
  let topGuild;
  ({ stats, layout } = arg0);
  ({ style, rowStyle } = arg0);
  const tmp = closure_7();
  const iconSize = layout.iconSize;
  const rounded = Math.round(iconSize * react_nativeDefault());
  ({ topGuild, topEmoji, topGame } = stats);
  let guildIcon;
  const topGuildAcronymCharacter = stats.topGuildAcronymCharacter;
  if (topGuild != null) {
    guildIcon = topGuild.guildIcon;
  }
  let guildIconURL;
  if (null != guildIcon) {
    const obj = { id: null, icon: null, size: rounded };
    ({ guildId: obj2.id, guildIcon: obj2.icon } = topGuild);
    const tmp2Result = AvatarUtilsDefault;
    guildIconURL = tmp2Result.getGuildIconURL(obj);
  }
  let applicationImageId;
  if (topGame != null) {
    applicationImageId = topGame.applicationImageId;
  }
  let applicationIconURL;
  if (null != applicationImageId) {
    const obj3 = { id: null, icon: null, size: rounded };
    ({ applicationId: obj4.id, applicationImageId: obj4.icon } = topGame);
    const tmp2Result3 = AvatarUtilsDefault;
    applicationIconURL = tmp2Result3.getApplicationIconURL(obj3);
  }
  if (null != guildIconURL) {
    const obj5 = { uri: guildIconURL, size: iconSize };
    tmp11 = hasOwnProperty(StatImage, obj5);
    tmp12 = hasOwnProperty;
  } else {
    const obj6 = { style: items, children: hasOwnProperty(Text_Text.Text, obj7) };
    items = [, , ];
    ({ statImage: arr3[0], guildAcronym: arr3[1] } = tmp);
    size = { width: iconSize, height: iconSize };
    items[2] = size;
    obj7 = { variant: "text-xxs/normal", color: "text-overlay-dark", allowFontScaling: false, children: topGuildAcronymCharacter };
    tmp11 = hasOwnProperty(View, obj6);
    tmp12 = hasOwnProperty;
  }
  if (null == topEmoji) {
    const obj8 = { Icon: UnknownGameIcon.UnknownGameIcon, size: iconSize };
    tmp12Result = tmp12(StatIcon, obj8);
  } else if (null != topEmoji.emojiId) {
    const obj9 = { uri: tmp2Result4.getEmojiURL(obj10), size: iconSize };
    obj10 = { id: topEmoji.emojiId, animated: false, size: rounded };
    tmp2Result4 = AvatarUtilsDefault;
    tmp12Result = tmp12(StatImage, obj9);
  } else {
    const obj11 = { style: items1, children: tmp12(Text_Text.Text, obj12) };
    items1 = [tmp.statImage, ];
    const size1 = { width: iconSize, height: iconSize };
    items1[1] = size1;
    obj12 = { variant: "text-xs/semibold", style: tmp.unicodeEmoji, allowFontScaling: false, children: topEmoji.emojiName };
    tmp12Result = tmp12(View, obj11);
  }
  const obj13 = { layout, rowStyle };
  const obj14 = { style, children: items2 };
  const obj15 = { icon: tmp12(StatIcon, obj16), stat: stats.voice };
  obj16 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
  const merged = Object.assign(obj13);
  items2 = [tmp12(StatRow, obj15), , , , , , , ];
  const obj17 = { icon: tmp12(StatIcon, obj18), stat: stats.messages };
  obj18 = { Icon: ChatIcon.ChatIcon, size: iconSize };
  const merged1 = Object.assign(obj13);
  items2[1] = tmp12(StatRow, obj17);
  const obj19 = { icon: tmp12(StatIcon, obj20), stat: stats.topGuildDaysInteracted };
  obj20 = { Icon: ServerIcon.ServerIcon, size: iconSize };
  const merged2 = Object.assign(obj13);
  items2[2] = tmp12(StatRow, obj19);
  const obj21 = { icon: tmp11, stat: stats.topGuildName };
  const merged3 = Object.assign(obj13);
  items2[3] = tmp12(StatRow, obj21);
  const obj22 = { icon: tmp12(StatIcon, obj23), stat: stats.reactions };
  obj23 = { Icon: ReactionIcon.ReactionIcon, size: iconSize };
  const merged4 = Object.assign(obj13);
  items2[4] = tmp12(StatRow, obj22);
  const obj24 = { icon: tmp12Result, stat: stats.topEmojiName };
  const merged5 = Object.assign(obj13);
  items2[5] = tmp12(StatRow, obj24);
  const obj25 = { icon: tmp12(StatIcon, obj26), stat: stats.daysPlayed };
  obj26 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
  const merged6 = Object.assign(obj13);
  items2[6] = tmp12(StatRow, obj25);
  const obj27 = { icon: tmp12(StatImage, { uri: applicationIconURL, size: iconSize }), stat: stats.topGameName };
  const merged7 = Object.assign(obj13);
  items2[7] = tmp12(StatRow, obj27);
  return metroRequire(View, obj14);
};
