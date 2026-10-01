// Module ID: 15956
// Function ID: 15957
// Name: HomeDrawerGuildVoiceState
// Dependencies: [19, 17, 4467, 4479, 5017, 4860, 1074, 21, 4836, 576, 12601, 1177, 4832, 1115, 9522, 5899, 5293, 15955, 504, 12, 13254, 2]
// Exports: GuildVoiceState, useVoiceUsers

// Module 15956 (HomeDrawerGuildVoiceState)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4467 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 9522 */;
import AvatarPile2 from "AvatarPile" /* 12601 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c1, channel;

let closure_12;
let obj2;
let obj4;
let rect;
let rect1;
let size;
let unpackModuleId;
function VoiceUsers(arg0) {
  let AvatarPile;
  let guildId;
  let obj2;
  let require;
  let voiceUsers;
  ({ voiceUsers, guildId: require } = arg0);
  let substr = voiceUsers;
  if (voiceUsers.length > 3) {
    substr = voiceUsers.slice(0, 3);
  }
  let tmp = null;
  if (0 !== voiceUsers.length) {
    let obj = { style: { flexDirection: "row", alignItems: "center", gap: 4 }, children: closure_11(AvatarPile, obj2) };
    obj2 = {
      size: native.AvatarSizes.XSMALL,
      names: substr.map((username) => username.username),
      totalCount: substr.length,
      children: substr.map((user) => {
          const obj = { size: native.AvatarSizes.XSMALL, user, guildId: require, animate: false };
          const Avatar = native.Avatar;
          return unpackModuleId(Avatar, obj, user.id);
        })
    };
    AvatarPile = AvatarPile2.AvatarPile;
    tmp = closure_11(View, obj);
  }
  return tmp;
}
function LiveTag() {
  let Text;
  let obj2;
  let str;
  const tmp = closure_15();
  const obj = { style: tmp.tag, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: unpackModuleId(Text, obj2) };
  obj2 = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: str.toUpperCase() };
  Text = Text_Text.Text;
  const intl = intl2.intl;
  str = intl.string(intl2.t.dI3q4h);
  return unpackModuleId(View, obj);
}
const View = react_native.View;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const ChannelTypes = Constants.ChannelTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" }, streamPreviewShadow: obj2, streamPreview: size, streamPreviewDarkGradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 }, streamPreviewGradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 }, streamPreviewBorder: rect };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
size = { width: 72, height: 44, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { tag: rect1, tagText: obj4 };
rect1 = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: nativeDefault.radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
const createStyles2 = createStyles.createStyles;
obj4 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
let closure_15 = createStyles2(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  let guildId;
  let items1;
  let obj5;
  let obj7;
  let streamingChannelId;
  let streamingUser;
  let tmp8Result;
  let voiceUsers;
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = closure_13();
  const tmp2 = voiceUsers.length > 0;
  let id;
  const tmp5 = useFetchStreamPreviewDefault;
  if (streamingUser != null) {
    id = streamingUser.id;
  }
  const previewUrl = tmp5(guildId, streamingChannelId, id).previewUrl;
  let tmp8Result2 = null;
  if (tmp2) {
    const items = [tmp.voiceContainer, ];
    let num = 32;
    if (null != streamingUser) {
      num = 48;
    }
    const obj = { style: items, children: tmp8Result };
    const obj2 = { height: num };
    items[1] = obj2;
    if (null == previewUrl) {
      const obj3 = { voiceUsers, guildId };
      tmp8Result = tmp8(VoiceUsers, obj3);
    } else {
      const obj4 = { style: tmp.streamPreviewShadow, children: closure_12(View, obj5) };
      const obj6 = { style: tmp.streamPreview, source: obj7 };
      obj5 = { style: tmp.streamPreview, children: items1 };
      obj7 = { uri: previewUrl };
      items1 = [unpackModuleId(FastImageDefault, obj6), , , , ];
      const obj8 = { colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"], start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.streamPreviewDarkGradient, pointerEvents: "none" };
      items1[1] = unpackModuleId(LinearGradientDefault, obj8);
      const obj9 = { colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"], start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.streamPreviewGradient, pointerEvents: "none" };
      items1[2] = unpackModuleId(LinearGradientDefault, obj9);
      const obj10 = { style: tmp.streamPreviewBorder, pointerEvents: "none" };
      items1[3] = unpackModuleId(View, obj10);
      items1[4] = unpackModuleId(LiveTag, {});
      tmp8Result = tmp8(tmp9, obj4);
    }
    tmp8Result2 = tmp8(tmp9, obj);
  }
  return tmp8Result2;
};
export const useVoiceUsers = function useVoiceUsers(guild) {
  let blockedOrIgnoredIDs;
  let guildOrCategoryOrChannelMuted;
  let isHomeDrawerChannelInChannelList;
  let stateFromStores1;
  _require = guild;
  const id = guild.id;
  let obj = require("isHomeDrawerChannelInChannelList");
  isHomeDrawerChannelInChannelList = obj.useIsHomeDrawerChannelInChannelList();
  let items = [stateFromStores1, UserGuildSettingsStore];
  const items1 = [id, isHomeDrawerChannelInChannelList];
  const obj2 = require("get initialized");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    const found = arr.filter((channel) => {
      channel = channel.channel;
      const tmp = channel.type === constants.GUILD_VOICE && !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(streamingChannelId, channel.id) && isHomeDrawerChannelInChannelList(channel);
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const items2 = [SortedVoiceStateStore];
  const items3 = [id];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items2, () => SortedVoiceStateStore.getVoiceStates(id), items3);
  const items4 = [RelationshipStore];
  const obj4 = require("get initialized");
  stateFromStores1 = obj4.useStateFromStores(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStores1];
  const items6 = [stateFromStores, guild.afkChannelId, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    let obj = _modDef12;
    return obj.flatMap(stateFromStoresArray, (arg0) => {
      if (arg0 === closure_1_0.afkChannelId) {
        return [];
      } else {
        let items = stateFromStores[arg0];
        if (items == null) {
          items = [];
        }
        const mapped = items.map((user) => user.user);
        const obj = closure_0(isHomeDrawerChannelInChannelList[20]);
        return obj.filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1);
      }
    });
  }, items5);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let user = null;
    streamingChannelId = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((item) => {
      if (item !== user.afkChannelId) {
        if (stateFromStoresArray.includes(item)) {
          let items = stateFromStores[item];
          if (items == null) {
            items = [];
          }
          const found = items.find((voiceState) => voiceState.voiceState.selfStream);
          const tmp5 = null != found && null == user;
          if (tmp5) {
            user = found.user;
            c1 = item;
          }
        }
      }
    });
    return { streamingUser: user, streamingChannelId };
  }, items6);
  return { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
};
