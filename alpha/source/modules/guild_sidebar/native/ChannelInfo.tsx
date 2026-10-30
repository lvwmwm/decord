// Module ID: 18235
// Function ID: 18236
// Name: ChannelInfo
// Dependencies: [19, 7704, 4880, 4941, 6836, 5674, 1072, 21, 5009, 504, 12209, 9817, 18236, 18222, 6042, 1188, 18237, 18238, 18120, 6706, 13792, 18121, 18239, 14816, 2]
// Exports: default

// Module 18235 (ChannelInfo)
import Fragment from "Fragment" /* 21 */;
import StageMediaHooks from "StageMediaHooks" /* 6706 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12209 */;
import useShowConnectedUserLimitDefault from "useShowConnectedUserLimit" /* 13792 */;
import ChannelBadgeDefault from "ChannelBadge" /* 18222 */;
import showChannelBadgeDefault from "showChannelBadge" /* 18236 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 18239 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7704 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let Fonts;
let c9;
let metroImportAll;
let tmp2;
const Badges = tmp2(14816);
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
    const ConnectedUserLimit = tmp(18121).ConnectedUserLimit;
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
  const obj2 = channel(9817);
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
          const tmpResult = channel(6042);
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1188).LiveTag, {});
          }
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        const tmpResult2 = channel(18237);
        if (tmpResult2.showChannelItemEmbeddedActivities(tmp5)) {
          tmp11Result = jsx(tmp4(18238), { embeddedApps: tmp5, muted });
        }
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          tmp11Result = jsx(tmp4(18120), { locked: needSubscriptionToAccess });
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
