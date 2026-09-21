// Module ID: 16458
// Function ID: 16459
// Name: VoiceUser
// Dependencies: [19, 2044, 4774, 4780, 502, 1996, 4776, 4777, 21, 558, 568, 504, 16459, 2]

// Module 16458 (VoiceUser)
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import SessionsStore from "SessionsStore" /* 4776 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(sessionId[10]).c(48);
  channel = channel.channel;
  const user = channel.user;
  sessionId = channel.sessionId;
  ({ member, selfMute, selfDeaf, selfVideo, mute, deaf, collapsed, isGuest } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    let first = id;
  } else {
    first = cResult[0];
  }
  EmbeddedActivitiesStore = tmp7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === first === user.id) {
    if (cResult[3] === user.id) {
      let tmp10 = cResult[4];
    }
    const stateFromStoresObject = tmp(tmp2[11]).useStateFromStoresObject(tmp8, tmp10);
    const localMute = stateFromStoresObject.localMute;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStreamingStore];
      cResult[5] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === channel) {
      if (cResult[7] === user.id) {
        let tmp14 = cResult[8];
      }
      const stateFromStores = tmp(tmp2[11]).useStateFromStores(tmp12, tmp14);
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SessionsStore];
        cResult[9] = items2;
        let tmp16 = items2;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== sessionId) {
        const fn = function k() {
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
        };
        cResult[10] = sessionId;
        cResult[11] = fn;
        let tmp18 = fn;
      } else {
        tmp18 = cResult[11];
      }
      const tmpResult5 = tmp(tmp2[11]);
      const stateFromStores1 = tmp(tmp2[11]).useStateFromStores(tmp16, tmp18);
      class O {
        constructor() {
          return closure_5.getStreamForUser(user.id, channel.getGuildId());
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [VoiceStateStore];
        cResult[12] = items3;
        let tmp20 = items3;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === channel.id) {
        if (cResult[14] === user.id) {
          let tmp22 = cResult[15];
          let tmp23 = cResult[16];
        }
        const stateFromStores2 = tmp(tmp2[11]).useStateFromStores(tmp20, tmp23, tmp22);
        if (cResult[17] === tmp7) {
          if (!selfVideo) {
            selfVideo = stateFromStoresObject.localVideo;
          }
          const _Symbol3 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const items4 = [EmbeddedActivitiesStore];
            cResult[20] = items4;
            let tmp28 = items4;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] === channel.id) {
            if (cResult[22] === user.id) {
              let tmp30 = cResult[23];
              let tmp31 = cResult[24];
            }
            const _Symbol4 = Symbol;
            const stateFromStores3 = tmp(tmp2[11]).useStateFromStores(tmp28, tmp30, tmp31);
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const items5 = [ChannelRTCStore];
              cResult[25] = items5;
            }
            class T {
              constructor() {
                embeddedActivitiesForChannel = closure_3.getEmbeddedActivitiesForChannel(channel.id);
                return embeddedActivitiesForChannel.find((userIds) => {
                  userIds = userIds.userIds;
                  return userIds.has(id.id);
                });
              }
            }
            const fn2 = function $() {
              const guildRingingUsers = ChannelRTCStore.getGuildRingingUsers(channel.id);
              return guildRingingUsers.has(user.id);
            };
            class O {
              constructor() {
                return closure_5.getStreamForUser(user.id, channel.getGuildId());
              }
            }
            cResult[27] = user.id;
            class H {
              constructor() {
                return closure_9.getVoicePlatformForChannel(channel.id, user.id);
              }
            }
            const tmpResult8 = tmp(tmp2[11]);
          }
          class T {
            constructor() {
              embeddedActivitiesForChannel = closure_3.getEmbeddedActivitiesForChannel(channel.id);
              return embeddedActivitiesForChannel.find((userIds) => {
                userIds = userIds.userIds;
                return userIds.has(id.id);
              });
            }
          }
          const items6 = [user.id, ];
          class O {
            constructor() {
              return closure_5.getStreamForUser(user.id, channel.getGuildId());
            }
          }
          cResult[21] = channel.id;
          class H {
            constructor() {
              return closure_9.getVoicePlatformForChannel(channel.id, user.id);
            }
          }
          cResult[23] = T;
          cResult[24] = items6;
          tmp31 = items6;
          tmp30 = T;
        }
        cResult[17] = tmp7;
        class O {
          constructor() {
            return closure_5.getStreamForUser(user.id, channel.getGuildId());
          }
        }
        cResult[18] = sessionId;
        cResult[19] = null != sessionId && tmp7;
        class H {
          constructor() {
            return closure_9.getVoicePlatformForChannel(channel.id, user.id);
          }
        }
        const tmp27 = null != sessionId && tmp7;
        const tmpResult7 = tmp(tmp2[11]);
      }
      class H {
        constructor() {
          return closure_9.getVoicePlatformForChannel(channel.id, user.id);
        }
      }
      const items7 = [channel.id, user.id];
      cResult[13] = channel.id;
      cResult[14] = user.id;
      cResult[15] = items7;
      cResult[16] = H;
      tmp23 = H;
      tmp22 = items7;
      const tmpResult6 = tmp(tmp2[11]);
    }
    class O {
      constructor() {
        return closure_5.getStreamForUser(user.id, channel.getGuildId());
      }
    }
    cResult[6] = channel;
    cResult[8] = O;
    tmp14 = O;
    const tmpResult = tmp(tmp2[11]);
  }
  class U {
    constructor() {
      if (closure_3) {
        obj1 = { localMute: false, localDeaf: false, localVideo: null };
        tmp3 = closure_7;
        obj1.localVideo = closure_7.isVideoEnabled();
        obj = obj1;
      } else {
        obj = { localMute: null, localDeaf: false, localVideo: false };
        tmp = closure_7;
        tmp2 = user;
        obj.localMute = closure_7.isLocalMute(user.id);
      }
      return obj;
    }
  }
  cResult[2] = first === user.id;
  cResult[3] = user.id;
  cResult[4] = U;
  tmp10 = U;
}) : ((channel) => {
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = AuthenticationStore.getId() === user.id;
  closure_3 = tmp;
  const items = [MediaEngineStore];
  const stateFromStoresObject = channel(sessionId[11]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
      let obj = obj2;
    } else {
      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  let obj = AuthenticationStore;
  let obj2 = channel(sessionId[11]);
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = channel(sessionId[11]).useStateFromStores(items1, () => ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId()));
  const obj3 = channel(sessionId[11]);
  const items2 = [SessionsStore];
  const stateFromStores1 = channel(sessionId[11]).useStateFromStores(items2, () => {
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
  const obj4 = channel(sessionId[11]);
  const items3 = [VoiceStateStore];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const stateFromStores2 = channel(sessionId[11]).useStateFromStores(items3, () => VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp8) {
    tmp8 = tmp;
  }
  if (tmp8) {
    tmp8 = sessionId !== obj.getSessionId();
  }
  const obj5 = channel(sessionId[11]);
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = channel(sessionId[11]).useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  const tmp2Result = channel(sessionId[11]);
  const items7 = [ChannelRTCStore];
  const stateFromStores4 = channel(sessionId[11]).useStateFromStores(items7, () => {
    const guildRingingUsers = ChannelRTCStore.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  const obj6 = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null };
  const tmp11 = jsx;
  const tmp2Result2 = channel(sessionId[11]);
  if (!mute) {
    mute = suppress;
  }
  obj6.serverMute = mute;
  obj6.serverDeaf = deaf;
  obj6.mute = selfMute;
  obj6.deaf = selfDeaf;
  obj6.localMute = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj6.video = selfVideo;
  let channelId;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  obj6.stream = channelId === channel.id;
  obj6.platform = stateFromStores1;
  obj6.disabled = null == stateFromStores1 && tmp8;
  obj6.isInEmbeddedActivity = null != stateFromStores3;
  obj6.isGuest = isGuest;
  obj6.voicePlatform = stateFromStores2;
  obj6.ringing = stateFromStores4;
  return tmp11(user(sessionId[12]), obj6);
});
