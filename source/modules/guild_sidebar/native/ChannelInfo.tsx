// Module ID: 15050
// Function ID: 114602
// Name: LimitAndDurationInfo
// Dependencies: [31, 6764, 1838, 3758, 4142, 4146, 653, 33, 4130, 566, 11179, 6767, 9137, 15051, 15052, 4313, 1273, 15054, 15055, 14971, 4950, 11393, 14972, 15056, 11931, 2]
// Exports: default

// Module 15050 (LimitAndDurationInfo)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function LimitAndDurationInfo(channel) {
  let hasMedia;
  let hasVideo;
  let selected;
  let voiceStatesCount;
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  let obj = channel(566);
  const items = [closure_7, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      let obj = channel(outer1_2[20]);
      isGuildStageVoiceResult = obj.getStageHasMedia(channel.id);
    }
    obj = { isLocked: !outer1_5.can(outer1_9.CONNECT, channel), hasVideo: outer1_7.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
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
    let tmp4Result = tmp4(channel(14972).ConnectedUserLimit, obj);
  } else {
    const obj1 = { channel };
    tmp4Result = tmp4(DurationInfo, obj1);
  }
  return tmp4Result;
}
function DurationInfo(channel) {
  let obj = require(15056) /* useStartTime */;
  const startTime = obj.useStartTime(channel.channel);
  let tmp3 = null;
  if (null != startTime) {
    obj = {};
    obj = { start: startTime };
    obj.entry = obj;
    obj.style = tmp.activeTimestamp;
    tmp3 = jsx(require(11931) /* ActiveTimestamp */.ActiveTimestamp, { start: startTime });
  }
  return tmp3;
}
({ GuildFeatures: closure_8, Permissions: closure_9 } = ME);
_createForOfIteratorHelperLoose = { fontFamily: ME.Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ activeTimestamp: _createForOfIteratorHelperLoose });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

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
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  let obj = channel(566);
  const items = [closure_4, closure_6, _isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guild: outer1_4.getGuild(channel.guild_id), mentionsCount: outer1_6.getMentionCount(channel.id), isMentionLowImportance: outer1_6.getIsMentionLowImportance(channel.id), isNewChannel: outer1_3.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp2 = importDefault(11179)(channel);
  let obj1 = channel(6767);
  const optInEnabledForGuild = obj1.useOptInEnabledForGuild(channel.guild_id);
  let obj2 = channel(9137);
  const unreadThreadsCountForParent = obj2.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  obj = { mentionsCount, isNewChannel, postsWithUnreadsCount: unreadThreadsCountForParent, muted };
  if (importDefault(15051)(obj)) {
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
    return jsx(importDefault(15052), { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance });
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
              return jsx(channel(1273).LiveTag, {});
            }
            obj5 = channel(4313);
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        if (obj6.showChannelItemEmbeddedActivities(tmp2)) {
          obj1 = { embeddedApps: tmp2, muted };
          return jsx(importDefault(15055), { embeddedApps: tmp2, muted });
        }
        obj6 = channel(15054);
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          obj2 = { locked: needSubscriptionToAccess };
          return jsx(importDefault(14971), { locked: needSubscriptionToAccess });
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
        return <LimitAndDurationInfo channel={channel} voiceStatesCount={num3} selected={arg0.isChannelSelected} />;
      }
    }
    return null;
  }
};
