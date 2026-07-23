// Module ID: 7011
// Function ID: 56212
// Name: getForumChannelSessionId
// Dependencies: [5040, 3760, 7012, 5683, 1348, 4468, 3758, 4467, 5656, 653, 1355, 1211, 7013, 1357, 7014, 21, 7015, 2]
// Exports: collectForumPostAnalyticsMetadata, convertSortOrderToReadableString, getForumPostDraftAppliedTagIds, getForumPostDraftNumAttachments, getNumActiveThreads

// Module 7011 (getForumChannelSessionId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { ChannelFlags } from "set";
import { ThreadSortOrderReadableForAnalytics as closure_15 } from "AbortCodes";

const require = arg1;
function getForumChannelSessionId(channelId) {
  return importDefault(7013).getForumChannelSessionId(channelId);
}
function getForumPostFirstMessage(id) {
  message = message.getMessage(id);
  let firstMessage = null;
  if (message.loaded) {
    firstMessage = message.firstMessage;
  }
  return firstMessage;
}
function getForumPostUniqueReactionCount(id) {
  const tmp = getForumPostFirstMessage(id);
  let num = 0;
  if (null != tmp) {
    num = tmp.reactions.length;
  }
  return num;
}
function getForumPostReactionCount(id) {
  const tmp = getForumPostFirstMessage(id);
  let num = 0;
  if (null != tmp) {
    const reactions = tmp.reactions;
    num = reactions.reduce((arg0, count) => arg0 + count.count, 0);
  }
  return num;
}
function getForumPostAppliedTagIds(id) {
  const channel = store.getChannel(id);
  if (null == channel) {
    return [];
  } else {
    const channel1 = store.getChannel(channel.parent_id);
    if (null != channel1) {
      const availableTags = channel1.availableTags;
    }
    if (null != channel1) {
      if (null != availableTags) {
        const _Set = Set;
        const set = new Set(availableTags.map((id) => id.id));
        const appliedTags = channel.appliedTags;
        let found;
        if (null != appliedTags) {
          found = appliedTags.filter((arg0) => set.has(arg0));
        }
        if (null == found) {
          found = [];
        }
        return found;
      }
    }
    return [];
  }
}
function getForumPostAttachmentMimetypes(id) {
  const tmp = getForumPostFirstMessage(id);
  if (null == tmp) {
    let items = [];
  } else {
    const attachments = tmp.attachments;
    items = attachments.map((content_type) => {
      content_type = content_type.content_type;
      let str = "unknown";
      if (null != content_type) {
        str = content_type;
      }
      return str;
    });
  }
  return items;
}
function collectForumAnalyticsMetadata(sessionId) {
  sessionId = sessionId.sessionId;
  const channel = store.getChannel(sessionId.channelId);
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (channel.isForumLikeChannel()) {
      const obj = {};
      let tmp2 = null != channel.topic;
      if (tmp2) {
        tmp2 = channel.topic.trim().length > 0;
        const str = channel.topic;
      }
      obj.forum_channel_has_guidelines = tmp2;
      const defaultReactionEmoji = channel.defaultReactionEmoji;
      let emojiId;
      if (null != defaultReactionEmoji) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      obj.forum_channel_default_emoji_reaction_id = emojiId;
      const defaultReactionEmoji2 = channel.defaultReactionEmoji;
      let emojiName;
      if (null != defaultReactionEmoji2) {
        emojiName = defaultReactionEmoji2.emojiName;
      }
      obj.forum_channel_default_emoji_reaction_name = emojiName;
      const availableTags = channel.availableTags;
      let mapped;
      if (null != availableTags) {
        mapped = availableTags.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      obj.forum_channel_available_tag_ids = mapped;
      obj.forum_channel_tag_required = channel.hasFlag(ChannelFlags.REQUIRE_TAG);
      obj.forum_channel_can_create_post = closure_10.can(Permissions.SEND_MESSAGES, channel);
      obj.forum_channel_filter_tag_ids = importDefault(7014).getFilterTagIdsAnalytics();
      const obj3 = importDefault(7014);
      obj.forum_channel_sort_order = importDefault(7014).getSortOrderAnalytics(channel.id);
      if (null == sessionId) {
        sessionId = getForumChannelSessionId(channel.id);
      }
      obj.forum_channel_session_id = sessionId;
      const obj4 = importDefault(7014);
      obj.forum_channel_layout = importDefault(7014).getLayoutAnalytics(channel.id);
      obj.forum_channel_default_sort_order = channel.defaultSortOrder;
      const obj5 = importDefault(7014);
      obj.forum_channel_tag_setting = importDefault(7014).getTagSettingAnalytics(channel.id);
      obj.forum_channel_default_layout = channel.defaultForumLayout;
      obj.forum_channel_is_moderator_report_channel = channel.isModeratorReportChannel();
      tmp = obj;
      const obj6 = importDefault(7014);
    }
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/tracking/TrackingUtils.tsx");

export { getForumChannelSessionId };
export const convertSortOrderToReadableString = function convertSortOrderToReadableString(sortOrder) {
  if (require(1357) /* set */.ThreadSortOrder.CREATION_DATE === sortOrder) {
    return constants.CREATION_DATE;
  } else if (require(1357) /* set */.ThreadSortOrder.LATEST_ACTIVITY === sortOrder) {
    return constants.LATEST_ACTIVITY;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected sort order " + sortOrder);
    throw error;
  }
};
export const getForumPostDraftNumAttachments = function getForumPostDraftNumAttachments(channelId) {
  return uploads.getUploads(channelId, DraftType.FirstThreadMessage).length;
};
export const getForumPostDraftAppliedTagIds = function getForumPostDraftAppliedTagIds(channelId) {
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const channel1 = store.getChannel(channel.parent_id);
    if (null != channel1) {
      const availableTags = channel1.availableTags;
    }
    if (null != channel1) {
      if (null != availableTags) {
        threadSettings = threadSettings.getThreadSettings(channelId);
        let appliedTags;
        if (null != threadSettings) {
          appliedTags = threadSettings.appliedTags;
        }
        if (null == appliedTags) {
          const _Set = Set;
          appliedTags = new Set();
        }
        const _Set2 = Set;
        const set = new Set(availableTags.map((id) => id.id));
        const _Array = Array;
        return Array.from(appliedTags).filter((arg0) => set.has(arg0));
      }
    }
    return [];
  }
};
export const getNumActiveThreads = function getNumActiveThreads(guildId, channelId) {
  return Object.keys(threadsForParent.getThreadsForParent(guildId, channelId)).length;
};
export { getForumPostAttachmentMimetypes };
export { collectForumAnalyticsMetadata };
export const collectForumPostAnalyticsMetadata = function collectForumPostAnalyticsMetadata(channelId) {
  channelId = channelId.channelId;
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isForumPost()) {
      const channel1 = store.getChannel(channel.parent_id);
      let tmp2 = null;
      if (null != channel1) {
        tmp2 = null;
        if (channel1.isForumLikeChannel()) {
          let obj = {};
          obj = { channelId: channel1.id, sessionId: channelId.sessionId };
          const merged = Object.assign(collectForumAnalyticsMetadata(obj));
          obj["thread_approximate_member_count"] = memberCount.getMemberCount(channelId);
          obj["thread_approximate_message_count"] = count.getCount(channelId);
          const threadMetadata = channel.threadMetadata;
          let archived;
          if (null != threadMetadata) {
            archived = threadMetadata.archived;
          }
          obj["thread_archived"] = true === archived;
          const threadMetadata2 = channel.threadMetadata;
          let locked;
          if (null != threadMetadata2) {
            locked = threadMetadata2.locked;
          }
          obj["thread_locked"] = null != locked && locked;
          const threadMetadata3 = channel.threadMetadata;
          let autoArchiveDuration;
          if (null != threadMetadata3) {
            autoArchiveDuration = threadMetadata3.autoArchiveDuration;
          }
          let num = 0;
          if (null != autoArchiveDuration) {
            num = autoArchiveDuration;
          }
          obj["thread_auto_archive_duration_minutes"] = num;
          obj["thread_approximate_creation_date"] = importDefault(21).extractTimestamp(channelId);
          obj["forum_post_id"] = channel.id;
          const obj5 = importDefault(21);
          const tmp10 = null != locked && locked;
          obj["forum_post_first_message_id"] = importDefault(21).castChannelIdAsMessageId(channel.id);
          obj["forum_post_num_reactions"] = getForumPostReactionCount(channel.id);
          obj["forum_post_num_unique_reactions"] = getForumPostUniqueReactionCount(channel.id);
          obj["forum_post_applied_tag_ids"] = getForumPostAppliedTagIds(channel.id);
          obj["forum_post_is_pinned"] = channel.hasFlag(ChannelFlags.PINNED);
          const obj6 = importDefault(21);
          const readStateSnapshotAnalytics = importDefault(7015).getReadStateSnapshotAnalytics(channel.id);
          let isNew;
          if (null != readStateSnapshotAnalytics) {
            isNew = readStateSnapshotAnalytics.isNew;
          }
          obj["forum_post_is_new"] = isNew;
          const obj7 = importDefault(7015);
          const readStateSnapshotAnalytics1 = importDefault(7015).getReadStateSnapshotAnalytics(channel.id);
          let hasUnreads;
          if (null != readStateSnapshotAnalytics1) {
            hasUnreads = readStateSnapshotAnalytics1.hasUnreads;
          }
          obj["forum_post_is_unread"] = hasUnreads;
          obj["forum_post_is_following"] = closure_4.hasJoined(channel.id);
          obj["forum_post_attachment_mimetypes"] = getForumPostAttachmentMimetypes(channel.id);
          tmp2 = obj;
          const obj8 = importDefault(7015);
        }
      }
      return tmp2;
    }
  }
  return null;
};
