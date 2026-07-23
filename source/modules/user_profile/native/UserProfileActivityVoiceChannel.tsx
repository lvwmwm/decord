// Module ID: 11947
// Function ID: 92354
// Name: UserProfileActivityVoiceChannel
// Dependencies: [27, 3758, 482, 33, 4130, 477, 5464, 8266, 4528, 11948, 4320, 566, 4654, 4658, 1212, 5515, 4660, 3831, 5514, 4126, 8450, 4341, 4098, 11949, 1934, 8492, 11950, 1273, 2]
// Exports: default

// Module 11947 (UserProfileActivityVoiceChannel)
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "sum";

let closure_6;
let closure_7;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 } };
obj = { flex: 1, overflow: "hidden" };
let num = -1;
if (set.isAndroid()) {
  num = -2;
}
obj.marginTop = num;
obj.channelName = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  const tmp = callback2();
  const newestAnalyticsLocation = channel(onAction[6])().newestAnalyticsLocation;
  let obj = guild(onAction[7]);
  const context = obj.useUserProfileAnalyticsContext().context;
  let obj1 = guild(onAction[8]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const arr = channel(onAction[9])(channel);
  const tmp3 = channel(onAction[10])(channel);
  let obj2 = guild(onAction[11]);
  const items = [context];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = context.can(arr.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    let VoiceNormalIcon = tmp5(tmp6[12]).StageIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp6[13]).VoiceNormalIcon;
  }
  obj = { style: items1 };
  items1 = [tmp.container, guild.style];
  if (isScreenReaderEnabled) {
    obj = { accessible: true };
    const intl = guild(onAction[14]).intl;
    obj1 = { guildName: guild.name };
    obj.accessibilityLabel = intl.formatToPlainString(guild(onAction[14]).t.xm6W9D, obj1);
    obj2 = { size: guild(onAction[15]).GuildIconSizes.XXSMALL, guild };
    obj.children = tmp9(channel(onAction[15]), obj2);
    let tmp9Result = tmp9(newestAnalyticsLocation, obj);
    const tmp19 = channel(onAction[15]);
  } else {
    const obj3 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress() {
          onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
          let obj = channel(onAction[17]);
          obj = {
            key: "GUILD_NAME_TOAST",
            content: guild.name,
            icon() {
              const obj = { size: guild(onAction[15]).GuildIconSizes.XSMALL, guild: outer1_0 };
              return outer2_6(channel(onAction[15]), obj);
            }
          };
          obj.open(obj);
        }
    };
    const obj4 = { size: guild(onAction[15]).GuildIconSizes.XXSMALL, guild };
    obj3.children = tmp9(channel(onAction[15]), obj4);
    tmp9Result = tmp9(guild(onAction[16]).PressableOpacity, obj3);
    const tmp13 = channel(onAction[15]);
  }
  const items2 = [tmp9Result, callback(guild(onAction[18]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj5 = { style: tmp.channelButton, accessibilityRole: "button" };
    const obj6 = { channel };
    obj5.accessibilityLabel = channel(onAction[20])(obj6);
    const intl2 = guild(onAction[14]).intl;
    obj5.accessibilityHint = intl2.string(guild(onAction[14]).t["9C444m"]);
    obj5.onPress = function onPress() {
      onAction({ action: "OPEN_VOICE_CHANNEL" });
      guild(onAction[21]).openGuildVoiceModal(channel, newestAnalyticsLocation);
      const obj = guild(onAction[21]);
      channel(onAction[22]).hideActionSheet();
    };
    const items3 = [callback(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj7 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp3 };
    items3[1] = callback(guild(onAction[19]).Text, obj7);
    obj5.children = items3;
    let tmp20Result = tmp20(guild(onAction[16]).PressableOpacity, obj5);
  } else {
    const obj8 = { style: tmp.channelButton };
    const items4 = [callback(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj9 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp3 };
    items4[1] = callback(guild(onAction[19]).Text, obj9);
    obj8.children = items4;
    tmp20Result = tmp20(newestAnalyticsLocation, obj8);
  }
  items2[2] = tmp20Result;
  const obj10 = { accessibilityRole: "button" };
  const intl3 = guild(onAction[14]).intl;
  obj10.accessibilityLabel = intl3.formatToPlainString(guild(onAction[14]).t.e95u3C, { count: arr.length });
  obj10.onPress = function onPress() {
    onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
    let obj = channel(onAction[22]);
    obj = {
      users: arr,
      channel,
      onPressUser(arg0) {
        const obj = {};
        const merged = Object.assign(outer1_4);
        obj["userId"] = arg0;
        return channel(onAction[25])(obj);
      }
    };
    obj.openLazy(guild(onAction[24])(onAction[23], onAction.paths), "UserProfileActivityVoiceChannelUsers", obj, "stack");
  };
  const obj12 = { size: guild(onAction[27]).AvatarSizes.SIZE_16, totalCount: arr.length, names: arr.map((username) => username.username) };
  let substr = arr;
  if (arr.length > 3) {
    substr = arr.slice(0, 3);
  }
  obj12.children = substr.map((user) => {
    const obj = { size: guild(onAction[27]).AvatarSizes.SIZE_16, channel, guildId: guild.id, user };
    return outer1_6(guild(onAction[27]).Avatar, obj, user.id);
  });
  obj10.children = callback(guild(onAction[26]).AvatarPile, obj12);
  items2[3] = callback(guild(onAction[16]).PressableOpacity, obj10);
  obj.children = items2;
  return closure_7(newestAnalyticsLocation, obj);
};
