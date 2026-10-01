// Module ID: 15754
// Function ID: 15755
// Name: VoiceUser
// Dependencies: [19, 2044, 4858, 502, 1993, 4854, 4855, 21, 504, 15755, 2]
// Exports: default

// Module 15754 (VoiceUser)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

let userIds;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  let channelId;
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
  let obj = AuthenticationStore;
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  let tmp = AuthenticationStore.getId() === user.id;
  let closure_3 = tmp;
  let tmp2 = channel;
  let obj2 = channel(sessionId[8]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let obj;
    const tmp = closure_3;
    if (tmp) {
      obj = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
      const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
    } else {
      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const items1 = [ApplicationStreamingStore];
  const obj3 = channel(sessionId[8]);
  const stateFromStores = obj3.useStateFromStores(items1, () => ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId()));
  const items2 = [SessionsStore];
  const obj4 = channel(sessionId[8]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let tmp2;
    if (null != sessionId) {
      const sessionById = SessionsStore.getSessionById(tmp);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      tmp2 = os;
    }
    return tmp2;
  });
  const items3 = [VoiceStateStore];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const obj5 = channel(sessionId[8]);
  const stateFromStores2 = obj5.useStateFromStores(items3, () => VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp8) {
    tmp8 = tmp;
  }
  if (tmp8) {
    tmp8 = sessionId !== obj.getSessionId();
  }
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const tmp2Result = tmp2(sessionId[8]);
  const stateFromStores3 = tmp2Result.useStateFromStores(items5, () => {
    let id;
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  const obj6 = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: mute, serverDeaf: deaf, mute: selfMute, deaf: selfDeaf, localMute, video: selfVideo, stream: channelId === channel.id, platform: stateFromStores1, disabled: null == stateFromStores1 && tmp8, isInEmbeddedActivity: null != stateFromStores3, isGuest, voicePlatform: stateFromStores2 };
  const tmp10 = jsx;
  const tmp11 = user(sessionId[9]);
  if (!mute) {
    mute = suppress;
  }
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  channelId = undefined;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  return tmp10(tmp11, obj6);
};
