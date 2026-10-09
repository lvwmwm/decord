// Module ID: 13097
// Function ID: 13098
// Name: UserProfileActivityVoiceChannel
// Dependencies: [17, 2082, 4709, 1096, 21, 5091, 1382, 6848, 8298, 5361, 13098, 5418, 504, 8208, 8212, 1126, 6165, 6191, 4768, 6899, 5087, 8634, 7481, 5055, 13099, 2000, 8287, 13100, 1200, 2]
// Exports: default

// Module 13097 (UserProfileActivityVoiceChannel)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1200 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let num;
const View = react_native.View;
const getGuildIconURL = GuildRecord.getGuildIconURL;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }, channelName: { flex: 1, overflow: "hidden", marginTop: num } };
createStyles = createStyles.createStyles;
num = -1;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  let AvatarPile;
  let VoiceNormalIcon;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj16;
  let obj17;
  let obj6;
  let obj7;
  let obj9;
  let substr;
  let tmp10Result;
  let tmp13;
  let tmp2Result;
  let tmp2Result2;
  let tmp8Result;
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  const style = guild.style;
  let tmp = closure_9();
  const newestAnalyticsLocation = channel(onAction[7])().newestAnalyticsLocation;
  let obj = guild(onAction[8]);
  const context = obj.useUserProfileAnalyticsContext().context;
  let obj2 = guild(onAction[9]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const users = channel(onAction[10])(channel);
  const tmp6 = channel(onAction[11])(channel);
  const obj3 = guild(onAction[12]);
  const items = [users];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    VoiceNormalIcon = tmp4(tmp3[13]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[14]).VoiceNormalIcon;
  }
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  if (isScreenReaderEnabled) {
    const obj5 = { accessible: true, accessibilityLabel: intl.formatToPlainString(guild(onAction[15]).t.xm6W9D, obj6), children: closure_7(tmp2Result, obj7) };
    intl = tmp4(tmp3[15]).intl;
    obj6 = { guildName: guild.name };
    obj7 = { size: guild(onAction[16]).GuildIconSizes.XXSMALL, guild };
    tmp2Result = channel(onAction[16]);
    tmp10Result = tmp10(tmp9, obj5);
    tmp13 = tmp10;
  } else {
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress: function handlePress() {
          onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
          const obj2 = { text: guild.name, icon: { type: "guild", src: getGuildIconURL(guild, 48), name: guild.name } };
          const obj = ToastActionCreatorsDefault;
          ({ type: "guild", src: getGuildIconURL(guild, 48), name: guild.name });
          obj.openMana("GUILD_NAME_TOAST", obj2);
        },
      children: closure_7(tmp2Result2, obj9)
    };
    const PressableOpacity = tmp4(tmp3[17]).PressableOpacity;
    obj9 = { size: guild(onAction[16]).GuildIconSizes.XXSMALL, guild };
    tmp2Result2 = channel(onAction[16]);
    tmp10Result = tmp10(PressableOpacity, obj8);
    tmp13 = tmp10;
  }
  items2 = [tmp10Result, tmp13(tmp4(tmp3[19]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj10 = {
      style: tmp.channelButton,
      accessibilityRole: "button",
      accessibilityLabel: channel(onAction[21])(obj11),
      accessibilityHint: intl2.string(guild(onAction[15]).t["9C444m"]),
      onPress: function handlePress_0() {
          onAction({ action: "OPEN_VOICE_CHANNEL" });
          const obj = PrivateChannelCallUtils;
          obj.openGuildVoiceModal(channel, newestAnalyticsLocation);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideAllActionSheets();
        },
      children: items3
    };
    const PressableOpacity2 = tmp4(tmp3[17]).PressableOpacity;
    obj11 = { channel };
    intl2 = tmp4(tmp3[15]).intl;
    items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj12 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items3[1] = tmp13(guild(onAction[20]).Text, obj12);
    tmp8Result = tmp8(PressableOpacity2, obj10);
  } else {
    const obj13 = { style: tmp.channelButton, children: items4 };
    items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj14 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items4[1] = tmp13(guild(onAction[20]).Text, obj14);
    tmp8Result = tmp8(tmp9, obj13);
  }
  items2[2] = tmp8Result;
  const obj15 = {
    accessibilityRole: "button",
    accessibilityLabel: intl3.formatToPlainString(guild(onAction[15]).t.e95u3C, obj16),
    onPress: function handlePressAvatars() {
      let tmp = onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        users,
        channel,
        onPressUser(userId) {
          const obj = { userId };
          const tmp = channel(onAction[26]);
          const merged = Object.assign(context);
          return tmp(obj);
        }
      };
      obj.openLazy(asyncRequire(13099, dependencyMap.paths), "UserProfileActivityVoiceChannelUsers", obj2, "stack");
    },
    children: tmp13(AvatarPile, obj17)
  };
  const PressableOpacity3 = tmp4(tmp3[17]).PressableOpacity;
  intl3 = tmp4(tmp3[15]).intl;
  obj16 = { count: users.length };
  obj17 = {
    size: guild(onAction[28]).AvatarSizes.SIZE_16,
    totalCount: users.length,
    names: users.map((username) => username.username),
    children: substr.map((user) => {
      const obj = { size: native.AvatarSizes.SIZE_16, channel, guildId: guild.id, user };
      const Avatar = native.Avatar;
      return metroImportDefault(Avatar, obj, user.id);
    })
  };
  AvatarPile = tmp4(tmp3[27]).AvatarPile;
  substr = users;
  if (users.length > 3) {
    substr = users.slice(0, 3);
  }
  items2[3] = tmp13(PressableOpacity3, obj15);
  return closure_8(newestAnalyticsLocation, obj4);
};
