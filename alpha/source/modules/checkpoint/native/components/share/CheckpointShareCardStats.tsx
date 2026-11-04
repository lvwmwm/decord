// Module ID: 13670
// Function ID: 13671
// Name: CheckpointShareCardStats
// Dependencies: [19, 17, 21, 5141, 575, 8283, 5851, 13669, 5761, 9599, 2021, 1411, 12169, 8784, 9908, 9877, 2]
// Exports: default

// Module 13670 (CheckpointShareCardStats)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import react_nativeDefault from "react-native" /* 2021 */;
import FastImageDefault from "FastImage" /* 5851 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8283 */;
import ChatIcon from "ChatIcon" /* 8784 */;
import ReactionIcon from "ReactionIcon" /* 9599 */;
import GameControllerIcon from "GameControllerIcon" /* 9877 */;
import ServerIcon from "ServerIcon" /* 9908 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12169 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const Text_Text = tmp2(5761);
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
  let iconSize;
  let items;
  let items1;
  let items2;
  let layout;
  let obj10;
  let obj12;
  let obj16;
  let obj18;
  let obj20;
  let obj25;
  let obj7;
  let reactionsIcon;
  let rowStyle;
  let stats;
  let style;
  let tmp14;
  let tmp15;
  let tmp15Result;
  let tmp4Result4;
  let topEmoji;
  let topGame;
  let topGuild;
  ({ stats, layout } = arg0);
  ({ style, rowStyle } = arg0);
  const tmp = closure_7();
  ({ iconSize, reactionsIcon } = layout);
  if (undefined === reactionsIcon) {
    reactionsIcon = ReactionIcon.ReactionIcon;
  }
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
    const tmp4Result = AvatarUtilsDefault;
    guildIconURL = tmp4Result.getGuildIconURL(obj);
  }
  let applicationImageId;
  if (topGame != null) {
    applicationImageId = topGame.applicationImageId;
  }
  let applicationIconURL;
  if (null != applicationImageId) {
    const obj3 = { id: null, icon: null, size: rounded };
    ({ applicationId: obj4.id, applicationImageId: obj4.icon } = topGame);
    const tmp4Result3 = AvatarUtilsDefault;
    applicationIconURL = tmp4Result3.getApplicationIconURL(obj3);
  }
  if (null != guildIconURL) {
    const obj5 = { uri: guildIconURL, size: iconSize };
    tmp14 = hasOwnProperty(StatImage, obj5);
    tmp15 = hasOwnProperty;
  } else {
    const obj6 = { style: items, children: hasOwnProperty(Text_Text.Text, obj7) };
    items = [, , ];
    ({ statImage: arr[0], guildAcronym: arr[1] } = tmp);
    size = { width: iconSize, height: iconSize };
    items[2] = size;
    obj7 = { variant: "footnote/normal", color: "text-overlay-dark", allowFontScaling: false, children: topGuildAcronymCharacter };
    tmp14 = hasOwnProperty(View, obj6);
    tmp15 = hasOwnProperty;
  }
  if (null == topEmoji) {
    const obj8 = { Icon: UnknownGameIcon.UnknownGameIcon, size: iconSize };
    tmp15Result = tmp15(StatIcon, obj8);
  } else if (null != topEmoji.emojiId) {
    const obj9 = { uri: tmp4Result4.getEmojiURL(obj10), size: iconSize };
    obj10 = { id: topEmoji.emojiId, animated: false, size: rounded };
    tmp4Result4 = AvatarUtilsDefault;
    tmp15Result = tmp15(StatImage, obj9);
  } else {
    const obj11 = { style: items1, children: tmp15(Text_Text.Text, obj12) };
    items1 = [tmp.statImage, ];
    const size1 = { width: iconSize, height: iconSize };
    items1[1] = size1;
    obj12 = { variant: "body-xs/semibold", style: tmp.unicodeEmoji, allowFontScaling: false, children: topEmoji.emojiName };
    tmp15Result = tmp15(View, obj11);
  }
  const obj13 = { layout, rowStyle };
  const obj14 = { style, children: items2 };
  const obj15 = { icon: tmp15(StatIcon, obj16), stat: stats.voice };
  obj16 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
  const merged = Object.assign(obj13);
  items2 = [tmp15(StatRow, obj15), , , , , , , ];
  const obj17 = { icon: tmp15(StatIcon, obj18), stat: stats.messages };
  obj18 = { Icon: ChatIcon.ChatIcon, size: iconSize };
  const merged1 = Object.assign(obj13);
  items2[1] = tmp15(StatRow, obj17);
  const obj19 = { icon: tmp15(StatIcon, obj20), stat: stats.topGuildDaysInteracted };
  obj20 = { Icon: ServerIcon.ServerIcon, size: iconSize };
  const merged2 = Object.assign(obj13);
  items2[2] = tmp15(StatRow, obj19);
  const obj21 = { icon: tmp14, stat: stats.topGuildName };
  const merged3 = Object.assign(obj13);
  items2[3] = tmp15(StatRow, obj21);
  const obj22 = { icon: tmp15(StatIcon, { Icon: reactionsIcon, size: iconSize }), stat: stats.reactions };
  const merged4 = Object.assign(obj13);
  items2[4] = tmp15(StatRow, obj22);
  const obj23 = { icon: tmp15Result, stat: stats.topEmojiName };
  const merged5 = Object.assign(obj13);
  items2[5] = tmp15(StatRow, obj23);
  const obj24 = { icon: tmp15(StatIcon, obj25), stat: stats.daysPlayed };
  obj25 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
  const merged6 = Object.assign(obj13);
  items2[6] = tmp15(StatRow, obj24);
  const obj26 = { icon: tmp15(StatImage, { uri: applicationIconURL, size: iconSize }), stat: stats.topGameName };
  const merged7 = Object.assign(obj13);
  items2[7] = tmp15(StatRow, obj26);
  return metroRequire(View, obj14);
};
