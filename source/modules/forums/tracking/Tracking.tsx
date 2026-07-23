// Module ID: 7009
// Function ID: 56161
// Name: trackForumChannelSeenBatch
// Dependencies: [1348, 4468, 5656, 7010, 653, 4324, 7011, 675, 7016, 477, 7017, 2]
// Exports: maybeTrackForumNewPostDraftCreated, trackForumAddMediaToOriginalPostClicked, trackForumChannelMediaUploaderClicked, trackForumChannelSeenBatch, trackForumCreateNewPostClick, trackForumCreateNewPostKeybindUsed, trackForumCreateNewPostStarted, trackForumEnableAutomodClicked, trackForumLayoutUpdated, trackForumMorePostsLoaded, trackForumNewPostCleared, trackForumOnboardingClicked, trackForumPostClicked, trackForumPostCreated, trackForumPostLinkCopied, trackForumPostSidebarViewed, trackForumPreviewPostClicked, trackForumScrolled, trackForumSearchCleared, trackForumSearched, trackForumSortOrderUpdated, trackForumTagFilterClicked, trackForumUpsellModalClicked, trackForumUpsellModalViewed, trackMobileForumComposerDismissed, trackMobileForumComposerOpened

// Module 7009 (trackForumChannelSeenBatch)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  let additionalTimes;
  let guildId;
  let postIds;
  let sessionId;
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId, sessionId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["post_ids"] = postIds;
  obj["additional_seen_time_millis"] = additionalTimes;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEEN_BATCH, obj);
};
export const trackForumSearched = function trackForumSearched(channelId) {
  let guildId;
  let numSearchResults;
  channelId = channelId.channelId;
  ({ guildId, numSearchResults } = channelId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["num_search_results"] = numSearchResults;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCHED, obj);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCH_CLEARED, obj);
};
export const trackForumTagFilterClicked = function trackForumTagFilterClicked(channelId) {
  let _location;
  let added;
  let filterTagIds;
  let guildId;
  let tagId;
  channelId = channelId.channelId;
  ({ guildId, tagId, filterTagIds, added, location: _location } = channelId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["tag_id"] = tagId;
  obj["filter_tag_ids"] = filterTagIds;
  obj["added"] = added;
  obj["location"] = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_TAG_FILTER_CLICKED, obj);
};
export const trackForumCreateNewPostClick = function trackForumCreateNewPostClick(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, obj);
};
export const maybeTrackForumNewPostDraftCreated = function maybeTrackForumNewPostDraftCreated(channelId) {
  channelId = channelId.channelId;
  const channel = store.getChannel(channelId);
  if (null != channel) {
    const threadSettings = store2.getThreadSettings(channelId);
    if (null != channel.template) {
      const trimmed = str6.trim();
    }
    const draft = store2.getDraft(channelId, DraftType.FirstThreadMessage);
    let tmp5 = null == draft;
    if (!tmp5) {
      tmp5 = 0 === draft.length;
    }
    if (!tmp5) {
      let trimmed1;
      if (null != draft) {
        trimmed1 = draft.trim();
      }
      tmp5 = trimmed1 === trimmed;
    }
    let appliedTags;
    if (null != threadSettings) {
      appliedTags = threadSettings.appliedTags;
    }
    let tmp8 = null == appliedTags;
    if (!tmp8) {
      let size;
      if (null != threadSettings) {
        appliedTags = threadSettings.appliedTags;
        if (null != appliedTags) {
          size = appliedTags.size;
        }
      }
      tmp8 = 0 === size;
    }
    let name;
    if (null != threadSettings) {
      name = threadSettings.name;
    }
    let tmp11 = null == name;
    if (!tmp11) {
      let length;
      if (null != threadSettings) {
        if (null != threadSettings.name) {
          const trimmed2 = str.trim();
          if (null != trimmed2) {
            length = trimmed2.length;
          }
        }
      }
      tmp11 = 0 === length;
    }
    if (tmp5) {
      tmp5 = tmp8;
    }
    if (tmp5) {
      tmp5 = tmp11;
    }
    if (!tmp5) {
      let obj = importDefault(4324);
      obj = {};
      obj = { channelId };
      const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata(obj));
      obj["guild_id"] = channelId.guildId;
      obj["channel_id"] = channelId;
      const obj3 = require(7011) /* getForumChannelSessionId */;
      obj["applied_tag_ids"] = require(7011) /* getForumChannelSessionId */.getForumPostDraftAppliedTagIds(channelId);
      const obj5 = require(7011) /* getForumChannelSessionId */;
      obj["num_attachments"] = require(7011) /* getForumChannelSessionId */.getForumPostDraftNumAttachments(channelId);
      obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj);
      const obj6 = require(7011) /* getForumChannelSessionId */;
    }
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, obj);
};
export const trackForumPostCreated = function trackForumPostCreated(arg0) {
  let _isNativeReflectConstruct;
  let closure_4;
  let importDefault;
  let postId;
  let require;
  ({ guildId: require, channelId: importDefault, postId } = arg0);
  ({ applicationId: _isNativeReflectConstruct, voiceChatEnabled: closure_4 } = arg0);
  function _trackForumPostCreated() {
    let obj = outer1_1(postId[5]);
    obj = {};
    obj = { channelId: postId };
    const merged = Object.assign(outer1_0(postId[6]).collectForumPostAnalyticsMetadata(obj));
    obj["guild_id"] = closure_0;
    obj["channel_id"] = closure_1;
    obj["application_id"] = _isNativeReflectConstruct;
    obj["voice_chat_enabled"] = closure_4;
    obj.trackWithMetadata(outer1_8.FORUM_CHANNEL_POST_CREATED, obj);
  }
  if (closure_6.isLoading(postId)) {
    const result = closure_6.addConditionalChangeListener(() => {
      const tmp = !outer1_6.isLoading(postId);
      let flag = !tmp;
      if (tmp) {
        _trackForumPostCreated();
        flag = false;
      }
      return flag;
    });
  } else {
    const result1 = _trackForumPostCreated();
  }
};
export const trackForumScrolled = function trackForumScrolled(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SCROLLED, obj);
};
export const trackForumMorePostsLoaded = function trackForumMorePostsLoaded(arg0) {
  let channelId;
  let filterTagIds;
  let guildId;
  let hasMoreThreads;
  let numArchivedThreads;
  let sortOrder;
  ({ guildId, channelId } = arg0);
  ({ numArchivedThreads, hasMoreThreads, filterTagIds, sortOrder } = arg0);
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(store.getChannel(channelId)));
  const obj4 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged2 = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["num_archived_threads"] = numArchivedThreads;
  const obj5 = require(7011) /* getForumChannelSessionId */;
  obj["num_active_threads"] = require(7011) /* getForumChannelSessionId */.getNumActiveThreads(guildId, channelId);
  obj["has_more_threads"] = hasMoreThreads;
  obj["filter_tag_ids"] = filterTagIds;
  obj["sort_order"] = sortOrder;
  obj.track(constants.FORUM_CHANNEL_MORE_POSTS_LOADED, obj);
};
export const trackForumPostClicked = function trackForumPostClicked(channelId) {
  let _location;
  let guildId;
  let postId;
  channelId = channelId.channelId;
  ({ guildId, postId, location: _location } = channelId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumPostAnalyticsMetadata({ channelId: postId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["is_search_result"] = null != searchResults.getSearchResults(channelId);
  obj["location"] = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CLICKED, obj);
};
export const trackForumSortOrderUpdated = function trackForumSortOrderUpdated(guildId) {
  let channelId;
  let sortOrder;
  ({ channelId, sortOrder } = guildId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId.guildId;
  obj["channel_id"] = channelId;
  const obj3 = require(7011) /* getForumChannelSessionId */;
  obj["sort_type"] = require(7011) /* getForumChannelSessionId */.convertSortOrderToReadableString(sortOrder);
  obj["sort_order"] = sortOrder;
  obj["forum_channel_sort_order"] = sortOrder;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POSTS_SORTED, obj);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  let forumLayout;
  let guildId;
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7011) /* getForumChannelSessionId */.collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["forum_channel_layout"] = forumLayout;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_LAYOUT_UPDATED, obj);
};
export const trackForumPostLinkCopied = function trackForumPostLinkCopied(arg0) {
  let _location;
  let postId;
  ({ postId, location: _location } = arg0);
  importDefault(4324).trackWithMetadata(constants.FORUM_POST_LINK_COPIED, { forum_post_id: postId, location: _location });
};
export const trackForumOnboardingClicked = function trackForumOnboardingClicked(onboarding_cta_type) {
  importDefault(4324).trackWithMetadata(constants.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: onboarding_cta_type.onboardingCTA });
};
export const trackForumUpsellModalClicked = function trackForumUpsellModalClicked(forum_demo_id) {
  importDefault(4324).trackWithMetadata(constants.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: forum_demo_id.forumDemoId });
};
export const trackForumAddMediaToOriginalPostClicked = function trackForumAddMediaToOriginalPostClicked(added) {
  importDefault(4324).trackWithMetadata(constants.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: added.added });
};
export const trackForumChannelMediaUploaderClicked = function trackForumChannelMediaUploaderClicked(is_mobile) {
  importDefault(4324).trackWithMetadata(constants.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: is_mobile.isMobile });
};
export const trackForumEnableAutomodClicked = function trackForumEnableAutomodClicked() {
  importDefault(4324).trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
};
export const trackForumPreviewPostClicked = function trackForumPreviewPostClicked() {
  importDefault(4324).trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
};
export const trackForumPostSidebarViewed = function trackForumPostSidebarViewed(channelId) {
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(channelId.guild_id));
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channelId));
  const obj4 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged2 = Object.assign(require(7016) /* collectThreadMetadata */.collectThreadMetadata(channelId, true));
  const obj5 = require(7016) /* collectThreadMetadata */;
  const merged3 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.getChannelOpenedMetadata(channelId.id));
  obj["channel_view"] = "Split View";
  const obj6 = require(4324) /* _createForOfIteratorHelperLoose */;
  obj["platform"] = require(477) /* set */.getPlatform();
  obj.trackWithMetadata(constants.CHANNEL_OPENED, obj);
  obj = { channelId: channelId.id };
  importDefault(7017)(obj);
};
export const trackMobileForumComposerOpened = function trackMobileForumComposerOpened(arg0) {
  let _location;
  let channelId;
  let guildId;
  ({ guildId, channelId, location: _location } = arg0);
  importDefault(675).track(constants.OPEN_MODAL, { type: "Create Forum Post", guild_id: guildId, channel_id: channelId, location: _location });
};
export const trackMobileForumComposerDismissed = function trackMobileForumComposerDismissed() {
  importDefault(675).track(constants.MODAL_DISMISSED, { type: "Create Forum Post" });
};
export const trackForumUpsellModalViewed = function trackForumUpsellModalViewed() {
  let obj = importDefault(4324);
  obj = { section: constants2.CHANNEL_WELCOME_CTA };
  obj.trackWithMetadata(constants.OPEN_MODAL, { type: "Forum Channel Upsell Modal", location: obj });
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(require(7016) /* collectThreadMetadata */.collectThreadMetadata(store.getChannel(channelId)));
  obj["channel_id"] = channelId;
  obj["guild_id"] = channelId.guildId;
  obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
};
