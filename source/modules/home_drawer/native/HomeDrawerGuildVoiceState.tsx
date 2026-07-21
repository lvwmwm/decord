// Module ID: 14722
// Function ID: 111036
// Name: VoiceUsers
// Dependencies: []
// Exports: GuildVoiceState, useVoiceUsers

// Module 14722 (VoiceUsers)
function VoiceUsers(arg0) {
  let voiceUsers;
  ({ voiceUsers, guildId: closure_0 } = arg0);
  let substr = voiceUsers;
  if (voiceUsers.length > 3) {
    substr = voiceUsers.slice(0, 3);
  }
  let tmp = null;
  if (0 !== voiceUsers.length) {
    let obj = { style: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null } };
    obj = {
      size: arg1(dependencyMap[11]).AvatarSizes.XSMALL,
      names: substr.map((username) => username.username),
      totalCount: substr.length,
      children: substr.map((user) => {
          const obj = { size: callback(closure_2[11]).AvatarSizes.XSMALL, user, guildId: callback, animate: false };
          return callback2(callback(closure_2[11]).Avatar, obj, user.id);
        })
    };
    obj.children = callback(arg1(dependencyMap[10]).AvatarPile, obj);
    tmp = callback(View, obj);
  }
  return tmp;
}
function LiveTag() {
  const tmp = callback4();
  let obj = { style: tmp.tag };
  obj = { style: tmp.tagText };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.dI3q4h).toUpperCase();
  obj.children = callback(arg1(dependencyMap[12]).Text, obj);
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[2]).GUILD_VOCAL_CHANNELS_KEY;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const ChannelTypes = arg1(dependencyMap[6]).ChannelTypes;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { voiceContainer: { width: "<string:2417182093>", height: "<string:1364343393>", justifyContent: "<string:1950715377>", alignItems: "flexDirection" } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
const merged = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_MEDIUM);
obj.streamPreviewShadow = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.streamPreview = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.streamPreviewDarkGradient = { 9223372036854775807: true, 9223372036854775807: "/assets/modules/guilds_bar/native/images", 0: 59, -9223372036854775808: 55, 0: null, 9223372036854775807: "31b62f25cfc0f3a2d3cb5b6aaaef4788" };
obj.streamPreviewGradient = { 9223372036854775807: null, 9223372036854775807: null, 0: null, -9223372036854775808: null, 0: null, 9223372036854775807: null };
const obj2 = { "Bool(false)": true, "Bool(false)": "/assets/modules/stage_channels/native/images", "Bool(false)": 25, "Bool(false)": 24, "Bool(false)": null, "Bool(false)": "b252f7dc065300671ba9347414eb0bad", borderColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.streamPreviewBorder = obj2;
let closure_13 = obj.createStyles(obj);
let obj5 = arg1(dependencyMap[8]);
const obj3 = {};
const obj1 = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj3.tag = { borderBottomRightRadius: importDefault(dependencyMap[9]).radii.xs, backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.RED_400 };
obj5 = { 1377929130: 290293.32910158904, -1532433124: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026316991841648, 911313505: 350907439676964900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
obj3.tagText = obj5;
let closure_14 = obj5.createStyles(obj3);
const obj4 = { borderBottomRightRadius: importDefault(dependencyMap[9]).radii.xs, backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  let guildId;
  let streamingChannelId;
  let streamingUser;
  let voiceUsers;
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = callback3();
  let tmp4;
  if (null != streamingChannelId) {
    tmp4 = streamingChannelId;
  }
  let id;
  if (null != streamingUser) {
    id = streamingUser.id;
  }
  const previewUrl = importDefault(dependencyMap[14])(guildId, tmp4, id).previewUrl;
  if (!tmp2) {
    return null;
  } else {
    let obj = {};
    const items = [tmp.voiceContainer, ];
    obj = {};
    let num = 32;
    if (null != streamingUser) {
      num = 48;
    }
    obj.height = num;
    items[1] = obj;
    obj.style = items;
    if (null == previewUrl) {
      obj = { voiceUsers, guildId };
      let tmp10 = callback(VoiceUsers, obj);
    } else {
      const obj1 = { style: tmp.streamPreviewShadow };
      const obj2 = { style: tmp.streamPreview };
      const obj3 = { style: tmp.streamPreview };
      const obj4 = { uri: previewUrl };
      obj3.source = obj4;
      const items1 = [callback(importDefault(dependencyMap[15]), obj3), , , , ];
      const obj5 = { colors: [], start: { max: -536870861, guildId: -299892737 }, end: {}, style: tmp.streamPreviewDarkGradient, pointerEvents: "none" };
      items1[1] = callback(importDefault(dependencyMap[16]), obj5);
      const obj6 = { colors: ["ended", "getAgeVerificationMethods"], start: { max: -536870861, guildId: -299892737 }, end: {}, style: tmp.streamPreviewGradient, pointerEvents: "none" };
      items1[2] = callback(importDefault(dependencyMap[16]), obj6);
      const obj7 = { style: tmp.streamPreviewBorder, pointerEvents: "none" };
      items1[3] = callback(View, obj7);
      items1[4] = callback(LiveTag, {});
      obj2.children = items1;
      obj1.children = callback2(View, obj2);
      tmp10 = callback(View, obj1);
    }
    obj.children = tmp10;
    callback(View, obj);
    const tmp6 = callback;
    const tmp7 = View;
  }
};
export const useVoiceUsers = function useVoiceUsers(guild) {
  const arg1 = guild;
  const id = guild.id;
  const importDefault = id;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_5, closure_8];
  const items1 = [id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const found = channels.getChannels(id)[closure_6].filter((channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_VOICE;
      if (tmp) {
        tmp = !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(closure_1, channel.id);
      }
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const dependencyMap = stateFromStoresArray;
  const items2 = [closure_9];
  const items3 = [id];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items2, () => voiceStates.getVoiceStates(id), items3);
  const React = stateFromStores;
  const obj2 = arg1(dependencyMap[17]);
  const items4 = [closure_7];
  const stateFromStoresArray1 = arg1(dependencyMap[17]).useStateFromStoresArray(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
  const View = stateFromStoresArray1;
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStoresArray1];
  const items6 = [stateFromStores, guild.afkChannelId, stateFromStoresArray];
  const memo = React.useMemo(() => id(stateFromStoresArray[18]).flatMap(stateFromStoresArray, (arg0) => {
    if (arg0 === lib.afkChannelId) {
      return [];
    } else {
      let items = closure_3[arg0];
      if (null == items) {
        items = [];
      }
      const mapped = items.map((user) => user.user);
      return lib(closure_2[19]).filterOutBlockedOrIgnoredUsers(mapped, closure_4);
    }
  }), items5);
  const memo1 = React.useMemo(() => {
    let closure_0 = null;
    let closure_1 = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((arg0) => {
      if (arg0 !== afkChannelId.afkChannelId) {
        if (closure_2.includes(arg0)) {
          let items = closure_3[arg0];
          if (null == items) {
            items = [];
          }
          const found = items.find((voiceState) => voiceState.voiceState.selfStream);
          let tmp5 = null != found;
          if (tmp5) {
            tmp5 = null == afkChannelId;
          }
          if (tmp5) {
            const afkChannelId = found.user;
            let closure_1 = arg0;
          }
        }
      }
    });
    return { streamingUser: closure_0, streamingChannelId: closure_1 };
  }, items6);
  obj = { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
  return obj;
};
