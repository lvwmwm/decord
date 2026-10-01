// Module ID: 15859
// Function ID: 15860
// Name: ChannelInfo
// Dependencies: [19, 6952, 2067, 4469, 4851, 4855, 1074, 21, 4836, 504, 11541, 7310, 15860, 15861, 4982, 1177, 15863, 15864, 15750, 5729, 11777, 15751, 15865, 12582, 2]
// Exports: default

// Module 15859 (ChannelInfo)
import Fragment from "Fragment" /* 21 */;
import StageMediaHooks from "StageMediaHooks" /* 5729 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11541 */;
import useShowConnectedUserLimitDefault from "useShowConnectedUserLimit" /* 11777 */;
import showChannelBadgeDefault from "showChannelBadge" /* 15860 */;
import ChannelBadgeDefault from "ChannelBadge" /* 15861 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 15865 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 6952 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Fonts;
let c9;
let metroImportAll;
let tmp2;
const Badges = tmp2(12582);
function LimitAndDurationInfo(channel) {
  let hasMedia;
  let hasVideo;
  let selected;
  let tmp5;
  let tmp6Result;
  let voiceStatesCount;
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  const tmp = channel;
  let obj = channel(504);
  const items = [VoiceStateStore, PermissionStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      const obj = StageMediaHooks;
      isGuildStageVoiceResult = obj.getStageHasMedia(tmp.id);
    }
    const obj2 = { isLocked: !PermissionStore.can(constants.CONNECT, channel), hasVideo: hasVideoResult, hasMedia: isGuildStageVoiceResult };
    return obj2;
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  let obj2 = { channel, locked: stateFromStoresObject.isLocked, video: tmp5, selected };
  tmp5 = hasVideo;
  const tmp4 = useShowConnectedUserLimitDefault;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  if (tmp4(obj2)) {
    const obj3 = { userCount: voiceStatesCount, video: hasVideo, channel };
    const ConnectedUserLimit = tmp(15751).ConnectedUserLimit;
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    tmp6Result = tmp6(ConnectedUserLimit, obj3);
  } else {
    const obj4 = { channel };
    tmp6Result = tmp6(DurationInfo, obj4);
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  channel = channel.channel;
  const tmp = closure_11();
  const obj = useVoiceChannelStartTime;
  const startTime = obj.useStartTime(channel);
  let tmp5 = null;
  if (null != startTime) {
    const obj3 = { start: startTime };
    tmp5 = jsx(Badges.ActiveTimestamp, { entry: obj3, style: tmp.activeTimestamp });
  }
  return tmp5;
}
({ GuildFeatures: metroImportAll, Permissions: c9, Fonts } = Constants);
const jsx = Fragment.jsx;
let obj = { activeTimestamp: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 } };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

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
  let num;
  let tmp11Result;
  let tmp18;
  let voiceStates;
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  const isChannelSelected = channel.isChannelSelected;
  let obj = channel(504);
  const items = [GuildStore, ReadStateStore, NewChannelsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) };
    return obj;
  });
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const isMentionLowImportance = stateFromStoresObject.isMentionLowImportance;
  const tmp5 = useEmbeddedAppsForChannelDefault(channel);
  const obj2 = channel(7310);
  const postsWithUnreadsCount = obj2.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    const obj3 = { mentionCount: mentionsCount, isMentionLowImportance, isNewChannel, postsWithUnreadsCount: tmp18, muted };
    tmp18 = null;
    const tmp16 = jsx;
    const tmp4Result = ChannelBadgeDefault;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    tmp11Result = tmp16(tmp4Result, obj3);
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          const tmpResult = channel(4982);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1177).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        const tmpResult2 = channel(15863);
        if (tmpResult2.showChannelItemEmbeddedActivities(tmp5)) {
          tmp11Result = jsx(tmp4(15864), { embeddedApps: tmp5, muted });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          tmp11Result = jsx(tmp4(15750), { locked: needSubscriptionToAccess });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        const obj6 = { channel, voiceStatesCount: num, selected: isChannelSelected };
        num = undefined;
        const tmp11 = jsx;
        const tmp12 = LimitAndDurationInfo;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        tmp11Result = tmp11(tmp12, obj6);
      }
    }
  }
  return tmp11Result;
};
