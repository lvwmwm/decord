// Module ID: 6954
// Function ID: 55534
// Name: assignBillingSessionId
// Dependencies: []
// Exports: trackAdContentAppStoreOverlayEvent, trackAdContentClicked, trackAppStoreOverlayEvent, trackBountyAutoScrollDismissed, trackBountyCarouselEmptyStateViewed, trackBountyCarouselScroll, trackBountyVerticalScroll, trackQuestBarOrDockModeChange, trackQuestContentClicked, trackQuestEmbedFallbackViewed, trackQuestHomeCarouselScroll, trackQuestHomeOrbShopCarouselScroll, trackQuestHomeOrbShopCarouselViewed, trackQuestHomeSearchClosed, trackQuestHomeSearchEntered, trackQuestHomeSearchQuerySubmitted

// Module 6954 (assignBillingSessionId)
function assignBillingSessionId(uuid, arg1) {
  let tmp = uuid;
  if (!arg1) {
    uuid = undefined;
    const activeSessionUnsafe = arg1(dependencyMap[5]).getActiveSessionUnsafe();
    if (null != activeSessionUnsafe) {
      uuid = activeSessionUnsafe.uuid;
    }
    let tmp7 = null;
    if (null != uuid) {
      tmp7 = uuid;
    }
    tmp = tmp7;
    const obj = arg1(dependencyMap[5]);
  }
  return tmp;
}
function getCommonProperties(adContentId, sourceQuestContent, QUEST, shouldExtendSession) {
  let tmp = QUEST;
  let obj = sourceQuestContent(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession(shouldExtendSession).uuid;
  const adDecisionData = sourceQuestContent(dependencyMap[7]).getAdDecisionData(adContentId, sourceQuestContent);
  obj = { client_ad_session_id: uuid };
  const obj2 = sourceQuestContent(dependencyMap[7]);
  obj.billing_session_id = assignBillingSessionId(uuid, sourceQuestContent(dependencyMap[7]).isBillableQuestContent(sourceQuestContent));
  obj.ad_content_id = adContentId;
  const merged = Object.assign(adDecisionData);
  const creative_type = adDecisionData.creative_type;
  if (null != creative_type) {
    tmp = creative_type;
  }
  obj["creative_type"] = tmp;
  return obj;
}
function getCommonQuestProperties(value, sourceQuestContent, shouldExtendSession) {
  const obj = { quest_id: value.id, quest_type: sourceQuestContent(dependencyMap[8]).getQuestType(value.config) };
  const obj2 = sourceQuestContent(dependencyMap[8]);
  let allApplicationIds = sourceQuestContent(dependencyMap[9]).getAllApplicationIds(value);
  if (null == allApplicationIds) {
    allApplicationIds = [];
  }
  obj.application_ids = allApplicationIds;
  const obj3 = sourceQuestContent(dependencyMap[9]);
  obj.quest_status = sourceQuestContent(dependencyMap[10]).getQuestStatus(value);
  const merged = Object.assign(getCommonProperties(value.id, sourceQuestContent, sourceQuestContent(dependencyMap[11]).AdCreativeType.QUEST, shouldExtendSession));
  return obj;
}
function getCommonAdContentProperties(arg0) {
  let adContentId;
  let adCreativeType;
  let relatedQuestId;
  let shouldExtendSession;
  let sourceQuestContent;
  ({ adContentId, adCreativeType, sourceQuestContent, shouldExtendSession, relatedQuestId } = arg0);
  let quest = null;
  if (null != relatedQuestId) {
    quest = quest.getQuest(relatedQuestId);
  }
  let obj = {};
  const merged = Object.assign(getCommonProperties(adContentId, sourceQuestContent, adCreativeType, shouldExtendSession));
  const adMetadataSealed = arg1(dependencyMap[7]).getAdMetadataSealed(sourceQuestContent, adContentId);
  let tmp5 = null;
  if (null != adMetadataSealed) {
    tmp5 = adMetadataSealed;
  }
  obj["metadata_sealed"] = tmp5;
  const obj2 = arg1(dependencyMap[7]);
  const adTrafficMetadataSealed = arg1(dependencyMap[7]).getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  let tmp7 = null;
  if (null != adTrafficMetadataSealed) {
    tmp7 = adTrafficMetadataSealed;
  }
  obj["traffic_metadata_sealed"] = tmp7;
  if (null != relatedQuestId) {
    obj = { quest_id: relatedQuestId };
    let questStatus = null;
    if (null != quest) {
      questStatus = arg1(dependencyMap[10]).getQuestStatus(quest);
      const obj6 = arg1(dependencyMap[10]);
    }
    obj.quest_status = questStatus;
  } else {
    obj = {};
  }
  const merged1 = Object.assign(obj);
  return obj;
}
function trackEvent(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (!closure_4.displayTools) {
    const isLoggingAnalyticsEvents = obj.isLoggingAnalyticsEvents;
    if (!arg3) {
      const hasItem = set.has(TEXT_AREA_CTA_CLICKED);
      if (flag) {
        let tmp6Result = tmp6(tmp7[12]);
        return tmp6Result.trackWithMetadata(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult, hasItem);
      } else {
        tmp6Result = tmp6(tmp7[13]);
        const obj = { flush: hasItem };
        tmp6Result.track(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult, obj);
      }
    }
  }
}
function trackQuestEvent(questId) {
  let event;
  let properties;
  let shouldExtendSession;
  let trackGuildAndChannelMetadata;
  ({ event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = questId);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  const quests = quest.quests;
  const value = quests.get(questId.questId);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(getCommonQuestProperties(value, questId.sourceQuestContent, shouldExtendSession));
    const merged1 = Object.assign(properties);
    trackEvent(event, obj, trackGuildAndChannelMetadata, value.preview);
  }
}
function trackAdContentEvent(sourceQuestContent) {
  let adContentId;
  let adCreativeType;
  let event;
  let properties;
  let relatedQuestId;
  let shouldExtendSession;
  let trackGuildAndChannelMetadata;
  ({ event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  ({ adContentId, relatedQuestId, adCreativeType } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  let obj = {};
  obj = { adContentId, adCreativeType, sourceQuestContent: sourceQuestContent.sourceQuestContent, shouldExtendSession, relatedQuestId };
  const merged = Object.assign(getCommonAdContentProperties(obj));
  const merged1 = Object.assign(properties);
  trackEvent(event, obj, trackGuildAndChannelMetadata, false);
}
function getCommonClickEventProperties(arg0) {
  return _getCommonClickEventProperties(...arguments);
}
async function _getCommonClickEventProperties(arg0, arg1) {
  const fn = function*(arg0) {
    let clickId;
    let impressionId;
    let questContent;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    ({ questContent, clickId, questContentPosition, questContentRowIndex, questContentCTA, impressionId } = arg0);
    yield undefined;
    let obj = callback(closure_2[14]);
    const tmp2 = yield obj.getAdUser(callback(closure_2[10]).getQuestContentName(questContent));
    obj = {};
    const obj2 = callback(closure_2[10]);
    const merged = Object.assign(callback(closure_2[10]).getContentProperties(questContent, questContentPosition, questContentRowIndex));
    const merged1 = Object.assign(callback2(closure_2[15])());
    obj["cta_name"] = questContentCTA;
    obj["impression_id"] = impressionId;
    let advertisingId = null;
    if (null != tmp2) {
      advertisingId = null;
      if (obj5.isIOS()) {
        advertisingId = tmp2.advertisingId;
      }
      const obj5 = callback(closure_2[16]);
    }
    obj["apple_advertising_id"] = advertisingId;
    let advertisingId1 = null;
    if (null != tmp2) {
      advertisingId1 = null;
      if (obj6.isAndroid()) {
        advertisingId1 = tmp2.advertisingId;
      }
      const obj6 = callback(closure_2[16]);
    }
    obj["android_advertising_id"] = advertisingId1;
    if (null == clickId) {
      clickId = callback(closure_2[17]).v4();
      const obj7 = callback(closure_2[17]);
    }
    obj["click_id"] = clickId;
    return obj;
  };
  fn.next();
  return fn;
}
async function _trackQuestContentClicked(arg0, arg1) {
  const fn = function*(arg0) {
    let clickId;
    let impressionId;
    let questContent;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    let questId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    ({ questId, questContent, sourceQuestContent, questContentCTA, questContentPosition, questContentRowIndex, impressionId, clickId, trackGuildAndChannelMetadata } = arg0);
    yield undefined;
    let obj = callback(closure_2[7]);
    const adTrafficMetadataSealed = obj.getAdTrafficMetadataSealed(sourceQuestContent, questId);
    obj = { questId, event: constants.QUEST_CONTENT_CLICKED };
    obj = {};
    const merged = Object.assign(yield closure_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId }));
    const tmp3 = closure_14;
    const tmp4 = yield closure_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId });
    const adMetadataSealed = callback(closure_2[7]).getAdMetadataSealed(sourceQuestContent);
    let tmp7 = null;
    if (null != adMetadataSealed) {
      tmp7 = adMetadataSealed;
    }
    obj["metadata_sealed"] = tmp7;
    let tmp8 = null;
    if (null != adTrafficMetadataSealed) {
      tmp8 = adTrafficMetadataSealed;
    }
    obj["traffic_metadata_sealed"] = tmp8;
    const obj4 = callback(closure_2[7]);
    const currentQuestHomeSearchSession = callback(closure_2[18]).getCurrentQuestHomeSearchSession();
    let uuid;
    if (null != currentQuestHomeSearchSession) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    let tmp11 = null;
    if (null != uuid) {
      tmp11 = uuid;
    }
    obj["search_session_id"] = tmp11;
    obj.properties = obj;
    obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    const obj5 = callback(closure_2[18]);
    obj.shouldExtendSession = callback(closure_2[7]).isBillableQuestContent(questContent);
    obj.sourceQuestContent = sourceQuestContent;
    tmp3(obj);
  };
  fn.next();
  return fn;
}
async function _trackAdContentClicked(arg0, arg1) {
  const fn = function*(arg0) {
    let adContentId;
    let adCreativeType;
    let impressionId;
    let questContent;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    ({ questContent, adContentId, relatedQuestId, adCreativeType, questContentCTA, questContentPosition, questContentRowIndex, impressionId, trackGuildAndChannelMetadata, sourceQuestContent } = arg0);
    yield undefined;
    const obj = { adContentId, relatedQuestId, adCreativeType, event: constants.QUEST_CONTENT_CLICKED, properties: yield closure_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId }), trackGuildAndChannelMetadata, shouldExtendSession: callback(closure_2[7]).isBillableQuestContent(questContent), sourceQuestContent };
    closure_15(obj);
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const items = [, ];
({ QUEST_CONTENT_VIEWED: arr[0], QUEST_CONTENT_CLICKED: arr[1] } = AnalyticEvents);
const set = new Set(items);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(id, content, app_id, event, arg4) {
  let obj = { content_name: content(dependencyMap[10]).getQuestContentName(content.content) };
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = content);
  const obj2 = content(dependencyMap[10]);
  obj.source_content_name = content(dependencyMap[10]).getQuestContentName(content.sourceQuestContent);
  obj.app_id = app_id;
  obj.content_position = content.position;
  let tmp = event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
  if (!tmp) {
    tmp = event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED;
  }
  if (tmp) {
    tmp = undefined !== arg4;
  }
  obj = { questId: id.id, event };
  let tmp4 = obj;
  if (tmp) {
    obj = {};
    const merged = Object.assign(obj);
    obj["time_spent_ms"] = arg4;
    tmp4 = obj;
  }
  obj.properties = tmp4;
  obj.sourceQuestContent = content.sourceQuestContent;
  trackQuestEvent(obj);
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0, content, app_id, event, arg4) {
  let adContentId;
  let adCreativeType;
  let obj = {};
  ({ adContentId, adCreativeType } = arg0);
  obj.content_name = content(dependencyMap[10]).getQuestContentName(content.content);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = content);
  const obj2 = content(dependencyMap[10]);
  obj.source_content_name = content(dependencyMap[10]).getQuestContentName(content.sourceQuestContent);
  obj.app_id = app_id;
  obj.content_position = content.position;
  obj = { adContentId, adCreativeType, event };
  if (event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED) {
    let tmp3 = obj;
    if (undefined !== arg4) {
      obj = {};
      const merged = Object.assign(obj);
      obj["time_spent_ms"] = arg4;
      tmp3 = obj;
    }
  } else {
    tmp3 = obj;
  }
  obj.properties = tmp3;
  obj.sourceQuestContent = content.sourceQuestContent;
  trackAdContentEvent(obj);
};
export { trackAdContentEvent };
export { getCommonClickEventProperties };
export const trackQuestContentClicked = function trackQuestContentClicked(arg0) {
  return _trackQuestContentClicked(...arguments);
};
export const trackAdContentClicked = function trackAdContentClicked(arg0) {
  return _trackAdContentClicked(...arguments);
};
export const trackBountyCarouselScroll = function trackBountyCarouselScroll(result) {
  let carouselPosition;
  let scrollingDirection;
  let scrollingType;
  const questContent = result.questContent;
  ({ scrollingType, scrollingDirection, carouselPosition } = result);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid };
  const obj2 = importDefault(dependencyMap[13]);
  obj.billing_session_id = assignBillingSessionId(uuid, arg1(dependencyMap[7]).isBillableQuestContent(questContent));
  obj.scrolling_type = scrollingType;
  obj.scrolling_direction = scrollingDirection;
  obj.carousel_position = carouselPosition;
  const obj4 = arg1(dependencyMap[7]);
  obj.content_name = arg1(dependencyMap[10]).getQuestContentName(questContent);
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  let carouselSize;
  let isPlaceholderCarousel;
  let obtainableOrbRewards;
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  importDefault(dependencyMap[13]).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, { obtainable_orb_rewards: obtainableOrbRewards, carousel_size: carouselSize, is_placeholder_carousel: isPlaceholderCarousel });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(result) {
  let carouselPosition;
  let carouselSize;
  let scrollingDirection;
  ({ scrollingDirection, carouselPosition, carouselSize } = result);
  importDefault(dependencyMap[13]).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, { scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(reason) {
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid };
  const obj2 = importDefault(dependencyMap[13]);
  obj.billing_session_id = assignBillingSessionId(uuid, arg1(dependencyMap[7]).isBillableQuestContent(arg1(dependencyMap[19]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL));
  obj.reason = reason;
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj);
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(result) {
  let scrollSessionId;
  let scrollingDirection;
  let scrollingType;
  let timeWatchedPreScrollMs;
  let verticalScrollingPosition;
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = result);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), scrolling_type: scrollingType, scrolling_direction: scrollingDirection, vertical_scrolling_position: verticalScrollingPosition, scroll_session_id: scrollSessionId, time_watched_pre_scroll_ms: timeWatchedPreScrollMs };
  importDefault(dependencyMap[13]).track(AnalyticEvents.BOUNTY_VERTICAL_SCROLL, obj);
};
export const trackBountyAutoScrollDismissed = function trackBountyAutoScrollDismissed(arg0) {
  let scrollSessionId;
  let verticalScrollingPosition;
  ({ verticalScrollingPosition, scrollSessionId } = arg0);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), vertical_scrolling_position: verticalScrollingPosition, scroll_session_id: scrollSessionId };
  importDefault(dependencyMap[13]).track(AnalyticEvents.BOUNTY_AUTO_SCROLL_DISMISSED, obj);
};
export const trackQuestHomeCarouselScroll = function trackQuestHomeCarouselScroll(questContent) {
  let carouselSize;
  let scrollWindowEndIndex;
  let scrollWindowSize;
  let scrollWindowStartIndex;
  let scrollingDirection;
  let scrollingType;
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, scrollWindowStartIndex, scrollWindowEndIndex, scrollWindowSize, carouselSize } = questContent);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { scrolling_type: scrollingType, client_ad_session_id: uuid };
  const obj2 = importDefault(dependencyMap[13]);
  obj.billing_session_id = assignBillingSessionId(uuid, arg1(dependencyMap[7]).isBillableQuestContent(questContent));
  obj.scrolling_direction = scrollingDirection;
  obj.scroll_window_start_index = scrollWindowStartIndex;
  obj.scroll_window_end_index = scrollWindowEndIndex;
  obj.scroll_window_size = scrollWindowSize;
  const obj4 = arg1(dependencyMap[7]);
  obj.content_name = arg1(dependencyMap[10]).getQuestContentName(questContent);
  obj.content_id = questContent;
  obj.carousel_size = carouselSize;
  obj2.track(AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId.searchSessionId };
  importDefault(dependencyMap[13]).track(AnalyticEvents.QUEST_HOME_SEARCH_ENTERED, obj);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  let searchSessionDurationMs;
  let searchSessionId;
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId, search_session_duration_ms: searchSessionDurationMs };
  importDefault(dependencyMap[13]).track(AnalyticEvents.QUEST_HOME_SEARCH_CLOSED, obj);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  let hasResults;
  let resultsCount;
  let searchQuery;
  let searchQueryLength;
  let searchSessionId;
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  let obj = arg1(dependencyMap[6]);
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId, search_query: searchQuery, search_query_length: searchQueryLength, results_count: resultsCount, has_results: hasResults };
  importDefault(dependencyMap[13]).track(AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj);
};
export const trackQuestBarOrDockModeChange = function trackQuestBarOrDockModeChange(arg0) {
  let mode;
  let prevMode;
  let questContent;
  let questId;
  let sourceQuestContent;
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  let obj = arg1(dependencyMap[10]);
  const contentProperties = obj.getContentProperties(questContent);
  obj = { questId, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: obj, sourceQuestContent };
  obj = { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode };
  trackQuestEvent(obj);
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  let obj = importDefault(dependencyMap[12]);
  obj = { quest_id: questId, reason: EXCLUDED_QUEST };
  obj.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, obj);
};
