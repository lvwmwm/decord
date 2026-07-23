// Module ID: 14975
// Function ID: 114136
// Name: VoiceUserConnected
// Dependencies: [31, 1347, 4143, 4149, 1194, 4177, 4145, 4146, 33, 566, 14976, 2]
// Exports: default

// Module 14975 (VoiceUserConnected)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  let collapsed;
  let deaf;
  let isGuest;
  let localMute;
  let localVideo;
  let member;
  let mute;
  let selfDeaf;
  let selfMute;
  let selfVideo;
  let suppress;
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  let tmp = store.getId() === user.id;
  let _createForOfIteratorHelperLoose = tmp;
  let obj = channel(sessionId[9]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (_createForOfIteratorHelperLoose) {
      let obj = { localMute: false, localDeaf: false, localVideo: outer1_7.isVideoEnabled() };
    } else {
      obj = { localMute: outer1_7.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const items1 = [closure_5];
  const stateFromStores = channel(sessionId[9]).useStateFromStores(items1, () => outer1_5.getStreamForUser(user.id, channel.getGuildId()));
  const obj2 = channel(sessionId[9]);
  const items2 = [closure_8];
  const stateFromStores1 = channel(sessionId[9]).useStateFromStores(items2, () => {
    let tmp;
    if (null != sessionId) {
      const sessionById = outer1_8.getSessionById(sessionId);
      let os;
      if (null != sessionById) {
        os = sessionById.clientInfo.os;
      }
      tmp = os;
    }
    return tmp;
  });
  const obj3 = channel(sessionId[9]);
  const items3 = [closure_9];
  const items4 = [channel.id, user.id];
  let tmp6 = null != sessionId;
  const stateFromStores2 = channel(sessionId[9]).useStateFromStores(items3, () => outer1_9.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp6) {
    tmp6 = tmp;
  }
  if (tmp6) {
    tmp6 = sessionId !== store.getSessionId();
  }
  const obj4 = channel(sessionId[9]);
  const items5 = [_createForOfIteratorHelperLoose];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = channel(sessionId[9]).useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = tmp.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(outer1_1.id);
    });
  }, items6);
  const obj5 = channel(sessionId[9]);
  const items7 = [_isNativeReflectConstruct];
  const stateFromStores4 = channel(sessionId[9]).useStateFromStores(items7, () => {
    const guildRingingUsers = outer1_4.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  obj = { guildId: channel.guild_id, member, user, collapsed };
  const obj6 = channel(sessionId[9]);
  const tmp10 = jsx;
  if (!mute) {
    mute = suppress;
  }
  obj.serverMute = mute;
  obj.serverDeaf = deaf;
  obj.mute = selfMute;
  obj.deaf = selfDeaf;
  obj.localMute = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj.video = selfVideo;
  let channelId;
  if (null != stateFromStores) {
    channelId = stateFromStores.channelId;
  }
  obj.stream = channelId === channel.id;
  obj.platform = stateFromStores1;
  obj.disabled = null == stateFromStores1 && tmp6;
  obj.isInEmbeddedActivity = null != stateFromStores3;
  obj.isGuest = isGuest;
  obj.voicePlatform = stateFromStores2;
  obj.ringing = stateFromStores4;
  return tmp10(user(sessionId[10]), obj);
};
