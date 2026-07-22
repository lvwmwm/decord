// Module ID: 11935
// Function ID: 92301
// Name: UserProfileActivityVoiceChannel
// Dependencies: []
// Exports: default

// Module 11935 (UserProfileActivityVoiceChannel)
const View = require(dependencyMap[0]).View;
let closure_4 = importDefault(dependencyMap[1]);
const Permissions = require(dependencyMap[2]).Permissions;
const _module = require(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = _module);
const _module1 = require(dependencyMap[4]);
let obj = { container: {}, channelButton: {} };
obj = {};
const _module2 = require(dependencyMap[5]);
let num = -1;
if (_module2.isAndroid()) {
  num = -2;
}
obj.marginTop = num;
obj.channelName = obj;
let closure_8 = _module1.createStyles(obj);
const _module3 = require(dependencyMap[28]);
const result = _module3.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  guild = guild.guild;
  const require = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const dependencyMap = guild.onAction;
  const tmp = callback2();
  const View = importDefault(dependencyMap[6])().newestAnalyticsLocation;
  let obj = require(dependencyMap[7]);
  const context = obj.useUserProfileAnalyticsContext().context;
  let obj1 = require(dependencyMap[8]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const arr = importDefault(dependencyMap[9])(channel);
  const Permissions = arr;
  const tmp3 = importDefault(dependencyMap[10])(channel);
  let obj2 = require(dependencyMap[11]);
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
  const items1 = [tmp.container, guild.style];
  if (isScreenReaderEnabled) {
    obj = { accessible: true };
    const intl = require(dependencyMap[14]).intl;
    obj1 = { guildName: guild.name };
    obj.accessibilityLabel = intl.formatToPlainString(require(dependencyMap[14]).t.xm6W9D, obj1);
    obj2 = { size: require(dependencyMap[15]).GuildIconSizes.XXSMALL, guild };
    obj.children = tmp9(importDefault(dependencyMap[15]), obj2);
    let tmp9Result = tmp9(View, obj);
    const tmp19 = importDefault(dependencyMap[15]);
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
              const obj = { size: callback(closure_2[15]).GuildIconSizes.XSMALL, guild: callback };
              return callback3(callback2(closure_2[15]), obj);
            }
          };
          obj.open(obj);
        }
    };
    const obj4 = { size: require(dependencyMap[15]).GuildIconSizes.XXSMALL, guild };
    obj3.children = tmp9(importDefault(dependencyMap[15]), obj4);
    tmp9Result = tmp9(require(dependencyMap[16]).PressableOpacity, obj3);
    const tmp13 = importDefault(dependencyMap[15]);
  }
  const items2 = [tmp9Result, callback(require(dependencyMap[18]).ChevronSmallRightIcon, {}), , ];
  if (stateFromStores) {
    const obj5 = { style: tmp.channelButton, accessibilityRole: "button" };
    const obj6 = { channel };
    obj5.accessibilityLabel = importDefault(dependencyMap[20])(obj6);
    const intl2 = require(dependencyMap[14]).intl;
    obj5.accessibilityHint = intl2.string(require(dependencyMap[14]).t.9C444m);
    obj5.onPress = function onPress() {
      onAction({ action: "OPEN_VOICE_CHANNEL" });
      guild(onAction[21]).openGuildVoiceModal(channel, newestAnalyticsLocation);
      const obj = guild(onAction[21]);
      channel(onAction[22]).hideActionSheet();
    };
    const items3 = [callback(VoiceNormalIcon, {}), ];
    const obj7 = { style: tmp.channelName, children: tmp3 };
    items3[1] = callback(require(dependencyMap[19]).Text, obj7);
    obj5.children = items3;
    let tmp20Result = tmp20(require(dependencyMap[16]).PressableOpacity, obj5);
  } else {
    const obj8 = { style: tmp.channelButton };
    const items4 = [callback(VoiceNormalIcon, {}), ];
    const obj9 = { style: tmp.channelName, children: tmp3 };
    items4[1] = callback(require(dependencyMap[19]).Text, obj9);
    obj8.children = items4;
    tmp20Result = tmp20(View, obj8);
  }
  items2[2] = tmp20Result;
  const obj10 = { accessibilityRole: "button" };
  const intl3 = require(dependencyMap[14]).intl;
  obj10.accessibilityLabel = intl3.formatToPlainString(require(dependencyMap[14]).t.e95u3C, { count: arr.length });
  obj10.onPress = function onPress() {
    onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
    let obj = channel(onAction[22]);
    obj = {
      users: arr,
      channel,
      onPressUser(arg0) {
        const obj = {};
        const merged = Object.assign(closure_4);
        obj["userId"] = arg0;
        return callback(closure_2[25])(obj);
      }
    };
    obj.openLazy(guild(onAction[24])(onAction[23], onAction.paths), "UserProfileActivityVoiceChannelUsers", obj, "stack");
  };
  const obj12 = { size: require(dependencyMap[27]).AvatarSizes.SIZE_16, totalCount: arr.length, names: arr.map((username) => username.username) };
  let substr = arr;
  if (arr.length > 3) {
    substr = arr.slice(0, 3);
  }
  obj12.children = substr.map((user) => {
    const obj = { size: guild(onAction[27]).AvatarSizes.SIZE_16, channel, guildId: guild.id, user };
    return callback(guild(onAction[27]).Avatar, obj, user.id);
  });
  obj10.children = callback(require(dependencyMap[26]).AvatarPile, obj12);
  items2[3] = callback(require(dependencyMap[16]).PressableOpacity, obj10);
  obj.children = items2;
  return closure_7(View, obj);
};
