// Module ID: 14849
// Function ID: 113281
// Name: VoiceUsers
// Dependencies: [31, 27, 1907, 3767, 4325, 4203, 653, 33, 4130, 689, 11950, 1273, 4126, 1212, 10789, 5085, 4554, 14848, 566, 22, 14850, 2]
// Exports: GuildVoiceState, useVoiceUsers

// Module 14849 (VoiceUsers)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
const require = arg1;
function VoiceUsers(arg0) {
  let require;
  let voiceUsers;
  ({ voiceUsers, guildId: require } = arg0);
  let substr = voiceUsers;
  if (voiceUsers.length > 3) {
    substr = voiceUsers.slice(0, 3);
  }
  let tmp = null;
  if (0 !== voiceUsers.length) {
    let obj = { style: { flexDirection: "row", alignItems: "center", gap: 4 } };
    obj = {
      size: require(1273) /* Button */.AvatarSizes.XSMALL,
      names: substr.map((username) => username.username),
      totalCount: substr.length,
      children: substr.map((user) => {
          const obj = { size: outer1_0(outer1_2[11]).AvatarSizes.XSMALL, user, guildId: closure_0, animate: false };
          return outer1_11(outer1_0(outer1_2[11]).Avatar, obj, user.id);
        })
    };
    obj.children = callback(require(11950) /* AvatarPile */.AvatarPile, obj);
    tmp = callback(View, obj);
  }
  return tmp;
}
function LiveTag() {
  const tmp = callback3();
  let obj = { style: tmp.tag };
  obj = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.dI3q4h).toUpperCase();
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
}
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_MEDIUM);
_createForOfIteratorHelperLoose.streamPreviewShadow = _createForOfIteratorHelperLoose;
let obj1 = { width: 72, height: 44, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.streamPreview = obj1;
_createForOfIteratorHelperLoose.streamPreviewDarkGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 };
_createForOfIteratorHelperLoose.streamPreviewGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 };
let obj2 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.streamPreviewBorder = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = {};
let obj4 = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
obj3.tag = obj4;
_createForOfIteratorHelperLoose = { textAlign: "center", color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, includeFontPadding: false };
obj3.tagText = _createForOfIteratorHelperLoose;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj3);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  let guildId;
  let streamingChannelId;
  let streamingUser;
  let voiceUsers;
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let tmp4;
  if (null != streamingChannelId) {
    tmp4 = streamingChannelId;
  }
  let id;
  if (null != streamingUser) {
    id = streamingUser.id;
  }
  const previewUrl = importDefault(10789)(guildId, tmp4, id).previewUrl;
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
      const items1 = [callback(importDefault(5085), obj3), , , , ];
      const obj5 = { colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"], start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.streamPreviewDarkGradient, pointerEvents: "none" };
      items1[1] = callback(importDefault(4554), obj5);
      const obj6 = { colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"], start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.streamPreviewGradient, pointerEvents: "none" };
      items1[2] = callback(importDefault(4554), obj6);
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
  const _require = guild;
  const id = guild.id;
  let obj = _require(isHomeDrawerChannelInChannelList[17]);
  isHomeDrawerChannelInChannelList = obj.useIsHomeDrawerChannelInChannelList();
  let items = [stateFromStoresArray1, closure_8];
  const items1 = [id, isHomeDrawerChannelInChannelList];
  const stateFromStoresArray = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStoresArray(items, () => {
    const found = stateFromStoresArray1.getChannels(id)[outer1_6].filter((channel) => {
      channel = channel.channel;
      let tmp = channel.type === outer2_10.GUILD_VOICE;
      if (tmp) {
        tmp = !outer2_8.isGuildOrCategoryOrChannelMuted(outer1_1, channel.id);
      }
      if (tmp) {
        tmp = outer1_2(channel);
      }
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const obj2 = _require(isHomeDrawerChannelInChannelList[18]);
  const items2 = [closure_9];
  const items3 = [id];
  const stateFromStores = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStores(items2, () => outer1_9.getVoiceStates(id), items3);
  const obj3 = _require(isHomeDrawerChannelInChannelList[18]);
  const items4 = [closure_7];
  stateFromStoresArray1 = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStoresArray(items4, () => outer1_7.getBlockedOrIgnoredIDs());
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStoresArray1];
  const items6 = [stateFromStores, guild.afkChannelId, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => id(isHomeDrawerChannelInChannelList[19]).flatMap(stateFromStoresArray, (arg0) => {
    if (arg0 === outer1_0.afkChannelId) {
      return [];
    } else {
      let items = outer1_4[arg0];
      if (null == items) {
        items = [];
      }
      const mapped = items.map((user) => user.user);
      return callback(isHomeDrawerChannelInChannelList[20]).filterOutBlockedOrIgnoredUsers(mapped, outer1_5);
    }
  }), items5);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let c0 = null;
    let c1 = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((arg0) => {
      if (arg0 !== _null.afkChannelId) {
        if (outer1_3.includes(arg0)) {
          let items = outer1_4[arg0];
          if (null == items) {
            items = [];
          }
          const found = items.find((voiceState) => voiceState.voiceState.selfStream);
          let tmp5 = null != found;
          if (tmp5) {
            tmp5 = null == user;
          }
          if (tmp5) {
            user = found.user;
            let closure_1 = arg0;
          }
        }
      }
    });
    return { streamingUser: c0, streamingChannelId: c1 };
  }, items6);
  obj = { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
  return obj;
};
