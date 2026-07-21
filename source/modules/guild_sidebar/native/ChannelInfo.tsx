// Module ID: 14923
// Function ID: 112357
// Name: LimitAndDurationInfo
// Dependencies: []
// Exports: default

// Module 14923 (LimitAndDurationInfo)
function LimitAndDurationInfo(channel) {
  let hasMedia;
  let hasVideo;
  let selected;
  let voiceStatesCount;
  channel = channel.channel;
  const arg1 = channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = channel(closure_2[20]);
      isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
    }
    obj = { isLocked: !closure_5.can(constants.CONNECT, channel), hasVideo: closure_7.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
    return obj;
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  obj = { channel, locked: stateFromStoresObject.isLocked };
  let tmp3 = hasVideo;
  if (!hasVideo) {
    tmp3 = hasMedia;
  }
  obj.video = tmp3;
  obj.selected = selected;
  if (tmp2(obj)) {
    obj = { userCount: voiceStatesCount };
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    obj.video = hasVideo;
    obj.channel = channel;
    let tmp4Result = tmp4(arg1(dependencyMap[22]).ConnectedUserLimit, obj);
  } else {
    const obj1 = { channel };
    tmp4Result = tmp4(DurationInfo, obj1);
  }
  return tmp4Result;
}
function DurationInfo(channel) {
  let obj = arg1(dependencyMap[23]);
  const startTime = obj.useStartTime(channel.channel);
  let tmp3 = null;
  if (null != startTime) {
    obj = {};
    obj = { start: startTime };
    obj.entry = obj;
    obj.style = tmp.activeTimestamp;
    tmp3 = jsx(arg1(dependencyMap[24]).ActiveTimestamp, obj);
  }
  return tmp3;
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ GuildFeatures: closure_8, Permissions: closure_9 } = tmp3);
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = { fontFamily: tmp3.Fonts.CODE_NORMAL };
let closure_11 = obj.createStyles({ activeTimestamp: obj });
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  let enableActivities;
  let enableConnectedUserLimit;
  let guild;
  let isChannelCollapsed;
  let isNewChannel;
  let isSubscriptionGated;
  let mentionsCount;
  let muted;
  let needSubscriptionToAccess;
  let voiceStates;
  channel = channel.channel;
  const arg1 = channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4, closure_6, closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: guild.getGuild(channel.guild_id), mentionsCount: store.getMentionCount(channel.id), isMentionLowImportance: store.getIsMentionLowImportance(channel.id), isNewChannel: closure_3.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp2 = importDefault(dependencyMap[10])(channel);
  let obj1 = arg1(dependencyMap[11]);
  const optInEnabledForGuild = obj1.useOptInEnabledForGuild(channel.guild_id);
  let obj2 = arg1(dependencyMap[12]);
  const unreadThreadsCountForParent = obj2.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  obj = { mentionsCount, isNewChannel, postsWithUnreadsCount: unreadThreadsCountForParent, muted };
  if (importDefault(dependencyMap[13])(obj)) {
    obj = { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance };
    if (isNewChannel) {
      isNewChannel = optInEnabledForGuild;
    }
    obj.isNewChannel = isNewChannel;
    let tmp28 = null;
    if (channel.isForumLikeChannel()) {
      tmp28 = unreadThreadsCountForParent;
    }
    obj.postsWithUnreadsCount = tmp28;
    obj.muted = muted;
    return jsx(importDefault(dependencyMap[14]), obj);
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (null != guild) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (null != hasItem) {
          if (hasItem) {
            if (obj5.hasStream(voiceStates)) {
              return jsx(arg1(dependencyMap[16]).LiveTag, {});
            }
            const obj5 = arg1(dependencyMap[15]);
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        if (obj6.showChannelItemEmbeddedActivities(tmp2)) {
          obj1 = { embeddedApps: tmp2, muted };
          return jsx(importDefault(dependencyMap[18]), obj1);
        }
        const obj6 = arg1(dependencyMap[17]);
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj2 = { locked: needSubscriptionToAccess };
          return jsx(importDefault(dependencyMap[19]), obj2);
        }
      }
    }
    if (null != enableConnectedUserLimit) {
      if (enableConnectedUserLimit) {
        let length;
        if (null != voiceStates) {
          length = voiceStates.length;
        }
        let num3 = 0;
        if (null != length) {
          num3 = length;
        }
        const obj3 = { channel, voiceStatesCount: num3, selected: channel.isChannelSelected };
        return <LimitAndDurationInfo {...obj3} />;
      }
    }
    return null;
  }
};
