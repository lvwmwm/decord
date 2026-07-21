// Module ID: 14848
// Function ID: 111891
// Name: VoiceUserConnected
// Dependencies: []
// Exports: default

// Module 14848 (VoiceUserConnected)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const jsx = arg1(dependencyMap[8]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

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
  const arg1 = channel;
  const user = channel.user;
  const importDefault = user;
  const sessionId = channel.sessionId;
  const dependencyMap = sessionId;
  ({ selfVideo, mute } = channel);
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = store.getId() === user.id;
  let closure_3 = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (tmp) {
      let obj = { embedded: null, component: null, localVideo: closure_7.isVideoEnabled() };
    } else {
      obj = { padding: "postal-address-country", flex: "password", flexDirection: "email", localMute: closure_7.isLocalMute(user.id) };
      const tmp = closure_7;
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const items1 = [closure_5];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items1, () => streamForUser.getStreamForUser(user.id, channel.getGuildId()));
  const obj2 = arg1(dependencyMap[9]);
  const items2 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items2, () => {
    let tmp;
    if (null != sessionId) {
      const sessionById = sessionById.getSessionById(sessionId);
      let os;
      if (null != sessionById) {
        os = sessionById.clientInfo.os;
      }
      tmp = os;
    }
    return tmp;
  });
  const obj3 = arg1(dependencyMap[9]);
  const items3 = [closure_9];
  const items4 = [channel.id, user.id];
  let tmp6 = null != sessionId;
  const stateFromStores2 = arg1(dependencyMap[9]).useStateFromStores(items3, () => voicePlatformForChannel.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp6) {
    tmp6 = tmp;
  }
  if (tmp6) {
    tmp6 = sessionId !== store.getSessionId();
  }
  const obj4 = arg1(dependencyMap[9]);
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = arg1(dependencyMap[9]).useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = tmp.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  const obj5 = arg1(dependencyMap[9]);
  const items7 = [closure_4];
  const stateFromStores4 = arg1(dependencyMap[9]).useStateFromStores(items7, () => {
    const guildRingingUsers = guildRingingUsers.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  obj = { guildId: channel.guild_id, member, user, collapsed };
  const obj6 = arg1(dependencyMap[9]);
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
  return tmp10(importDefault(dependencyMap[10]), obj);
};
