// Module ID: 7004
// Function ID: 56127
// Name: trackForumChannelSeenBatch
// Dependencies: []
// Exports: maybeTrackForumNewPostDraftCreated, trackForumAddMediaToOriginalPostClicked, trackForumChannelMediaUploaderClicked, trackForumChannelSeenBatch, trackForumCreateNewPostClick, trackForumCreateNewPostKeybindUsed, trackForumCreateNewPostStarted, trackForumEnableAutomodClicked, trackForumLayoutUpdated, trackForumMorePostsLoaded, trackForumNewPostCleared, trackForumOnboardingClicked, trackForumPostClicked, trackForumPostCreated, trackForumPostLinkCopied, trackForumPostSidebarViewed, trackForumPreviewPostClicked, trackForumScrolled, trackForumSearchCleared, trackForumSearched, trackForumSortOrderUpdated, trackForumTagFilterClicked, trackForumUpsellModalClicked, trackForumUpsellModalViewed, trackMobileForumComposerDismissed, trackMobileForumComposerOpened

// Module 7004 (trackForumChannelSeenBatch)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const DraftType = arg1(dependencyMap[1]).DraftType;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  let additionalTimes;
  let guildId;
  let postIds;
  let sessionId;
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId, sessionId }));
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["num_search_results"] = numSearchResults;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCHED, obj);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
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
      let obj = importDefault(dependencyMap[5]);
      obj = {};
      obj = { channelId };
      const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata(obj));
      obj["guild_id"] = channelId.guildId;
      obj["channel_id"] = channelId;
      const obj3 = arg1(dependencyMap[6]);
      obj["applied_tag_ids"] = arg1(dependencyMap[6]).getForumPostDraftAppliedTagIds(channelId);
      const obj5 = arg1(dependencyMap[6]);
      obj["num_attachments"] = arg1(dependencyMap[6]).getForumPostDraftNumAttachments(channelId);
      obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj);
      const obj6 = arg1(dependencyMap[6]);
    }
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = channelId.guildId;
  obj["channel_id"] = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, obj);
};
export const trackForumPostCreated = function trackForumPostCreated(arg0) {
  let postId;
  ({ guildId: closure_0, channelId: closure_1, postId } = arg0);
  const dependencyMap = postId;
  ({ applicationId: closure_3, voiceChatEnabled: closure_4 } = arg0);
  function _trackForumPostCreated() {
    let obj = callback2(postId[5]);
    obj = {};
    obj = { channelId: postId };
    const merged = Object.assign(callback(postId[6]).collectForumPostAnalyticsMetadata(obj));
    obj["guild_id"] = callback;
    obj["channel_id"] = callback2;
    obj["application_id"] = closure_3;
    obj["voice_chat_enabled"] = closure_4;
    obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CREATED, obj);
  }
  const DraftType = _trackForumPostCreated;
  if (closure_6.isLoading(postId)) {
    const result = closure_6.addConditionalChangeListener(() => {
      const tmp = !loading.isLoading(postId);
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
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
  let obj = importDefault(dependencyMap[7]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[5]).collectGuildAnalyticsMetadata(guildId));
  const obj3 = arg1(dependencyMap[5]);
  const merged1 = Object.assign(arg1(dependencyMap[5]).collectChannelAnalyticsMetadata(store.getChannel(channelId)));
  const obj4 = arg1(dependencyMap[5]);
  const merged2 = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["num_archived_threads"] = numArchivedThreads;
  const obj5 = arg1(dependencyMap[6]);
  obj["num_active_threads"] = arg1(dependencyMap[6]).getNumActiveThreads(guildId, channelId);
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumPostAnalyticsMetadata({ channelId: postId }));
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
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId.guildId;
  obj["channel_id"] = channelId;
  const obj3 = arg1(dependencyMap[6]);
  obj["sort_type"] = arg1(dependencyMap[6]).convertSortOrderToReadableString(sortOrder);
  obj["sort_order"] = sortOrder;
  obj["forum_channel_sort_order"] = sortOrder;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POSTS_SORTED, obj);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  let forumLayout;
  let guildId;
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[6]).collectForumAnalyticsMetadata({ channelId }));
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["forum_channel_layout"] = forumLayout;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_LAYOUT_UPDATED, obj);
};
export const trackForumPostLinkCopied = function trackForumPostLinkCopied(arg0) {
  let _location;
  let postId;
  ({ postId, location: _location } = arg0);
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_POST_LINK_COPIED, { forum_post_id: postId, location: _location });
};
export const trackForumOnboardingClicked = function trackForumOnboardingClicked(onboarding_cta_type) {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: onboarding_cta_type.onboardingCTA });
};
export const trackForumUpsellModalClicked = function trackForumUpsellModalClicked(forum_demo_id) {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: forum_demo_id.forumDemoId });
};
export const trackForumAddMediaToOriginalPostClicked = function trackForumAddMediaToOriginalPostClicked(added) {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: added.added });
};
export const trackForumChannelMediaUploaderClicked = function trackForumChannelMediaUploaderClicked(is_mobile) {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: is_mobile.isMobile });
};
export const trackForumEnableAutomodClicked = function trackForumEnableAutomodClicked() {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
};
export const trackForumPreviewPostClicked = function trackForumPreviewPostClicked() {
  importDefault(dependencyMap[5]).trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
};
export const trackForumPostSidebarViewed = function trackForumPostSidebarViewed(channelId) {
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[5]).collectGuildAnalyticsMetadata(channelId.guild_id));
  const obj3 = arg1(dependencyMap[5]);
  const merged1 = Object.assign(arg1(dependencyMap[5]).collectChannelAnalyticsMetadata(channelId));
  const obj4 = arg1(dependencyMap[5]);
  const merged2 = Object.assign(arg1(dependencyMap[8]).collectThreadMetadata(channelId, true));
  const obj5 = arg1(dependencyMap[8]);
  const merged3 = Object.assign(arg1(dependencyMap[5]).getChannelOpenedMetadata(channelId.id));
  obj["channel_view"] = "Split View";
  const obj6 = arg1(dependencyMap[5]);
  obj["platform"] = arg1(dependencyMap[9]).getPlatform();
  obj.trackWithMetadata(constants.CHANNEL_OPENED, obj);
  obj = { channelId: channelId.id };
  importDefault(dependencyMap[10])(obj);
};
export const trackMobileForumComposerOpened = function trackMobileForumComposerOpened(arg0) {
  let _location;
  let channelId;
  let guildId;
  ({ guildId, channelId, location: _location } = arg0);
  importDefault(dependencyMap[7]).track(constants.OPEN_MODAL, { type: "Create Forum Post", guild_id: guildId, channel_id: channelId, location: _location });
};
export const trackMobileForumComposerDismissed = function trackMobileForumComposerDismissed() {
  importDefault(dependencyMap[7]).track(constants.MODAL_DISMISSED, { type: "Create Forum Post" });
};
export const trackForumUpsellModalViewed = function trackForumUpsellModalViewed() {
  let obj = importDefault(dependencyMap[5]);
  obj = { section: constants2.CHANNEL_WELCOME_CTA };
  obj.trackWithMetadata(constants.OPEN_MODAL, { type: "Forum Channel Upsell Modal", location: obj });
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[5]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[8]).collectThreadMetadata(store.getChannel(channelId)));
  obj["channel_id"] = channelId;
  obj["guild_id"] = channelId.guildId;
  obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
};
