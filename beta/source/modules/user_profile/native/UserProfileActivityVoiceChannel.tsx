// Module ID: 12600
// Function ID: 12601
// Name: UserProfileActivityVoiceChannel
// Dependencies: [17, 4472, 1097, 21, 4837, 1370, 6584, 7639, 5267, 12601, 4990, 504, 5412, 5416, 1127, 5893, 5436, 4531, 6631, 4833, 9038, 5044, 4801, 12602, 1987, 7628, 12603, 1189, 2]
// Exports: default

// Module 12600 (UserProfileActivityVoiceChannel)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1097 */;
import native from "native" /* 1189 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5044 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let num;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }, channelName: { flex: 1, overflow: "hidden", marginTop: num } };
createStyles = createStyles.createStyles;
num = -1;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
let closure_8 = createStyles(obj);
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
  let tmp = closure_8();
  const newestAnalyticsLocation = channel(onAction[6])().newestAnalyticsLocation;
  let obj = guild(onAction[7]);
  const context = obj.useUserProfileAnalyticsContext().context;
  let obj2 = guild(onAction[8]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const users = channel(onAction[9])(channel);
  const tmp6 = channel(onAction[10])(channel);
  const items = [context];
  const obj3 = guild(onAction[11]);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    VoiceNormalIcon = tmp4(tmp3[12]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[13]).VoiceNormalIcon;
  }
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  if (isScreenReaderEnabled) {
    const obj5 = { accessible: true, accessibilityLabel: intl.formatToPlainString(guild(onAction[14]).t.xm6W9D, obj6), children: closure_6(tmp2Result, obj7) };
    intl = tmp4(tmp3[14]).intl;
    obj6 = { guildName: guild.name };
    obj7 = { size: guild(onAction[15]).GuildIconSizes.XXSMALL, guild };
    tmp2Result = channel(onAction[15]);
    tmp10Result = tmp10(tmp9, obj5);
    tmp13 = tmp10;
  } else {
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress() {
          let tmp = onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
          let obj = ToastActionCreatorsDefault;
          const obj2 = {
            key: "GUILD_NAME_TOAST",
            content: guild.name,
            icon() {
              const obj = { size: guild(onAction[15]).GuildIconSizes.XSMALL, guild };
              const tmp = channel(onAction[15]);
              return closure_2_6(tmp, obj);
            }
          };
          obj.open(obj2);
        },
      children: closure_6(tmp2Result2, obj9)
    };
    const PressableOpacity = tmp4(tmp3[16]).PressableOpacity;
    obj9 = { size: guild(onAction[15]).GuildIconSizes.XXSMALL, guild };
    tmp2Result2 = channel(onAction[15]);
    tmp10Result = tmp10(PressableOpacity, obj8);
    tmp13 = tmp10;
  }
  items2 = [tmp10Result, tmp13(tmp4(tmp3[18]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj10 = {
      style: tmp.channelButton,
      accessibilityRole: "button",
      accessibilityLabel: channel(onAction[20])(obj11),
      accessibilityHint: intl2.string(guild(onAction[14]).t["9C444m"]),
      onPress() {
          onAction({ action: "OPEN_VOICE_CHANNEL" });
          const obj = PrivateChannelCallUtils;
          obj.openGuildVoiceModal(channel, newestAnalyticsLocation);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideAllActionSheets();
        },
      children: items3
    };
    const PressableOpacity2 = tmp4(tmp3[16]).PressableOpacity;
    obj11 = { channel };
    intl2 = tmp4(tmp3[14]).intl;
    items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj12 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items3[1] = tmp13(guild(onAction[19]).Text, obj12);
    tmp8Result = tmp8(PressableOpacity2, obj10);
  } else {
    const obj13 = { style: tmp.channelButton, children: items4 };
    items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj14 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items4[1] = tmp13(guild(onAction[19]).Text, obj14);
    tmp8Result = tmp8(tmp9, obj13);
  }
  items2[2] = tmp8Result;
  const obj15 = {
    accessibilityRole: "button",
    accessibilityLabel: intl3.formatToPlainString(guild(onAction[14]).t.e95u3C, obj16),
    onPress() {
      let tmp = onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        users,
        channel,
        onPressUser(userId) {
          const obj = { userId };
          const tmp = channel(onAction[25]);
          const merged = Object.assign(context);
          return tmp(obj);
        }
      };
      obj.openLazy(asyncRequire(12602, dependencyMap.paths), "UserProfileActivityVoiceChannelUsers", obj2, "stack");
    },
    children: tmp13(AvatarPile, obj17)
  };
  const PressableOpacity3 = tmp4(tmp3[16]).PressableOpacity;
  intl3 = tmp4(tmp3[14]).intl;
  obj16 = { count: users.length };
  obj17 = {
    size: guild(onAction[27]).AvatarSizes.SIZE_16,
    totalCount: users.length,
    names: users.map((username) => username.username),
    children: substr.map((user) => {
      const obj = { size: native.AvatarSizes.SIZE_16, channel, guildId: guild.id, user };
      const Avatar = native.Avatar;
      return metroRequire(Avatar, obj, user.id);
    })
  };
  AvatarPile = tmp4(tmp3[26]).AvatarPile;
  substr = users;
  if (users.length > 3) {
    substr = users.slice(0, 3);
  }
  items2[3] = tmp13(PressableOpacity3, obj15);
  return closure_7(newestAnalyticsLocation, obj4);
};
