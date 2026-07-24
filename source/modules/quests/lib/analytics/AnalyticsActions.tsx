// Module ID: 6958
// Function ID: 55588
// Name: assignBillingSessionId
// Dependencies: [5, 6959, 683, 6941, 653, 6697, 6961, 6939, 6962, 6964, 6968, 6969, 4324, 675, 6970, 6918, 477, 491, 6975, 4979, 2]
// Exports: trackAdContentAppStoreOverlayEvent, trackAdContentClicked, trackAppStoreOverlayEvent, trackBountyAutoScrollDismissed, trackBountyCarouselEmptyStateViewed, trackBountyCarouselScroll, trackBountyVerticalScroll, trackQuestBarOrDockModeChange, trackQuestContentClicked, trackQuestEmbedFallbackViewed, trackQuestHomeCarouselScroll, trackQuestHomeOrbShopCarouselScroll, trackQuestHomeOrbShopCarouselViewed, trackQuestHomeSearchClosed, trackQuestHomeSearchEntered, trackQuestHomeSearchQuerySubmitted

// Module 6958 (assignBillingSessionId)
import stopAnalyticsHeartbeat from "stopAnalyticsHeartbeat";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import set from "_isNativeReflectConstruct";

const require = arg1;
function assignBillingSessionId(uuid, arg1) {
  let tmp = uuid;
  if (!arg1) {
    uuid = undefined;
    const activeSessionUnsafe = require(6697) /* stopAnalyticsHeartbeat */.getActiveSessionUnsafe();
    if (null != activeSessionUnsafe) {
      uuid = activeSessionUnsafe.uuid;
    }
    let tmp7 = null;
    if (null != uuid) {
      tmp7 = uuid;
    }
    tmp = tmp7;
    const obj = require(6697) /* stopAnalyticsHeartbeat */;
  }
  return tmp;
}
function getCommonProperties(adContentId, sourceQuestContent, QUEST, shouldExtendSession) {
  let tmp = QUEST;
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession(shouldExtendSession).uuid;
  const adDecisionData = require(6939) /* _createForOfIteratorHelperLoose */.getAdDecisionData(adContentId, sourceQuestContent);
  obj = { client_ad_session_id: uuid };
  const obj2 = require(6939) /* _createForOfIteratorHelperLoose */;
  obj.billing_session_id = assignBillingSessionId(uuid, require(6939) /* _createForOfIteratorHelperLoose */.isBillableQuestContent(sourceQuestContent));
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
  const obj = { quest_id: value.id, quest_type: require(6962) /* _createForOfIteratorHelperLoose */.getQuestType(value.config) };
  const obj2 = require(6962) /* _createForOfIteratorHelperLoose */;
  let allApplicationIds = require(6964) /* _createForOfIteratorHelperLoose */.getAllApplicationIds(value);
  if (null == allApplicationIds) {
    allApplicationIds = [];
  }
  obj.application_ids = allApplicationIds;
  const obj3 = require(6964) /* _createForOfIteratorHelperLoose */;
  obj.quest_status = require(6968) /* getQuestContentName */.getQuestStatus(value);
  const merged = Object.assign(getCommonProperties(value.id, sourceQuestContent, require(6969) /* AdCreativeType */.AdCreativeType.QUEST, shouldExtendSession));
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
  const adMetadataSealed = require(6939) /* _createForOfIteratorHelperLoose */.getAdMetadataSealed(sourceQuestContent, adContentId);
  let tmp5 = null;
  if (null != adMetadataSealed) {
    tmp5 = adMetadataSealed;
  }
  obj["metadata_sealed"] = tmp5;
  const obj2 = require(6939) /* _createForOfIteratorHelperLoose */;
  const adTrafficMetadataSealed = require(6939) /* _createForOfIteratorHelperLoose */.getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  let tmp7 = null;
  if (null != adTrafficMetadataSealed) {
    tmp7 = adTrafficMetadataSealed;
  }
  obj["traffic_metadata_sealed"] = tmp7;
  if (null != relatedQuestId) {
    obj = { quest_id: relatedQuestId };
    let questStatus = null;
    if (null != quest) {
      questStatus = require(6968) /* getQuestContentName */.getQuestStatus(quest);
      const obj6 = require(6968) /* getQuestContentName */;
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
  if (!_isNativeReflectConstruct.displayTools) {
    const isLoggingAnalyticsEvents = obj.isLoggingAnalyticsEvents;
    if (!arg3) {
      const hasItem = set.has(TEXT_AREA_CTA_CLICKED);
      if (flag) {
        let tmp6Result = tmp6(4324);
        return tmp6Result.trackWithMetadata(TEXT_AREA_CTA_CLICKED, trackWithMetadataResult, hasItem);
      } else {
        tmp6Result = tmp6(675);
        obj = { flush: hasItem };
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
  let iter = (function*(arg0) {
    let clickId;
    let impressionId;
    let questContent;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    ({ questContent, clickId, questContentPosition, questContentRowIndex, questContentCTA, impressionId } = arg0);
    yield undefined;
    let obj = outer2_0(outer2_2[14]);
    const tmp2 = yield obj.getAdUser(outer2_0(outer2_2[10]).getQuestContentName(questContent));
    obj = {};
    const obj2 = outer2_0(outer2_2[10]);
    const merged = Object.assign(outer2_0(outer2_2[10]).getContentProperties(questContent, questContentPosition, questContentRowIndex));
    const merged1 = Object.assign(outer2_1(outer2_2[15])());
    obj["cta_name"] = questContentCTA;
    obj["impression_id"] = impressionId;
    let advertisingId = null;
    if (null != tmp2) {
      advertisingId = null;
      if (obj5.isIOS()) {
        advertisingId = tmp2.advertisingId;
      }
      obj5 = outer2_0(outer2_2[16]);
    }
    obj["apple_advertising_id"] = advertisingId;
    let advertisingId1 = null;
    if (null != tmp2) {
      advertisingId1 = null;
      if (obj6.isAndroid()) {
        advertisingId1 = tmp2.advertisingId;
      }
      obj6 = outer2_0(outer2_2[16]);
    }
    obj["android_advertising_id"] = advertisingId1;
    if (null == clickId) {
      clickId = outer2_0(outer2_2[17]).v4();
      const obj7 = outer2_0(outer2_2[17]);
    }
    obj["click_id"] = clickId;
    return obj;
  })();
  iter.next();
  return iter;
}
async function _trackQuestContentClicked(arg0, arg1) {
  let iter = (function*(arg0) {
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
    let obj = outer2_0(outer2_2[7]);
    const adTrafficMetadataSealed = obj.getAdTrafficMetadataSealed(sourceQuestContent, questId);
    obj = { questId, event: outer2_7.QUEST_CONTENT_CLICKED };
    obj = {};
    const merged = Object.assign(yield outer2_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId }));
    const tmp3 = outer2_14;
    const tmp4 = yield outer2_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId });
    const adMetadataSealed = outer2_0(outer2_2[7]).getAdMetadataSealed(sourceQuestContent);
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
    const obj4 = outer2_0(outer2_2[7]);
    const currentQuestHomeSearchSession = outer2_0(outer2_2[18]).getCurrentQuestHomeSearchSession();
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
    const obj5 = outer2_0(outer2_2[18]);
    obj.shouldExtendSession = outer2_0(outer2_2[7]).isBillableQuestContent(questContent);
    obj.sourceQuestContent = sourceQuestContent;
    tmp3(obj);
  })();
  iter.next();
  return iter;
}
async function _trackAdContentClicked(arg0, arg1) {
  let iter = (function*(arg0) {
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
    const obj = { adContentId, relatedQuestId, adCreativeType, event: outer2_7.QUEST_CONTENT_CLICKED, properties: yield outer2_16({ questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId }), trackGuildAndChannelMetadata, shouldExtendSession: outer2_0(outer2_2[7]).isBillableQuestContent(questContent), sourceQuestContent };
    outer2_15(obj);
  })();
  iter.next();
  return iter;
}
const items = [, ];
({ QUEST_CONTENT_VIEWED: arr[0], QUEST_CONTENT_CLICKED: arr[1] } = AnalyticEvents);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(closure_0, closure_1, app_id, event, arg4) {
  let obj = { content_name: require(6968) /* getQuestContentName */.getQuestContentName(closure_1.content) };
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = closure_1);
  const obj2 = require(6968) /* getQuestContentName */;
  obj.source_content_name = require(6968) /* getQuestContentName */.getQuestContentName(closure_1.sourceQuestContent);
  obj.app_id = app_id;
  obj.content_position = closure_1.position;
  let tmp = event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED;
  if (!tmp) {
    tmp = event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED;
  }
  if (tmp) {
    tmp = undefined !== arg4;
  }
  obj = { questId: closure_0.id, event };
  let tmp4 = obj;
  if (tmp) {
    obj = {};
    const merged = Object.assign(obj);
    obj["time_spent_ms"] = arg4;
    tmp4 = obj;
  }
  obj.properties = tmp4;
  obj.sourceQuestContent = closure_1.sourceQuestContent;
  trackQuestEvent(obj);
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0, closure_2, app_id, event, arg4) {
  let adContentId;
  let adCreativeType;
  let obj = {};
  ({ adContentId, adCreativeType } = arg0);
  obj.content_name = require(6968) /* getQuestContentName */.getQuestContentName(closure_2.content);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = closure_2);
  const obj2 = require(6968) /* getQuestContentName */;
  obj.source_content_name = require(6968) /* getQuestContentName */.getQuestContentName(closure_2.sourceQuestContent);
  obj.app_id = app_id;
  obj.content_position = closure_2.position;
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
  obj.sourceQuestContent = closure_2.sourceQuestContent;
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
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid };
  const obj2 = importDefault(675);
  obj.billing_session_id = assignBillingSessionId(uuid, require(6939) /* _createForOfIteratorHelperLoose */.isBillableQuestContent(questContent));
  obj.scrolling_type = scrollingType;
  obj.scrolling_direction = scrollingDirection;
  obj.carousel_position = carouselPosition;
  const obj4 = require(6939) /* _createForOfIteratorHelperLoose */;
  obj.content_name = require(6968) /* getQuestContentName */.getQuestContentName(questContent);
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  let carouselSize;
  let isPlaceholderCarousel;
  let obtainableOrbRewards;
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  importDefault(675).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, { obtainable_orb_rewards: obtainableOrbRewards, carousel_size: carouselSize, is_placeholder_carousel: isPlaceholderCarousel });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(result) {
  let carouselPosition;
  let carouselSize;
  let scrollingDirection;
  ({ scrollingDirection, carouselPosition, carouselSize } = result);
  importDefault(675).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, { scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(closure_0) {
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid };
  const obj2 = importDefault(675);
  obj.billing_session_id = assignBillingSessionId(uuid, require(6939) /* _createForOfIteratorHelperLoose */.isBillableQuestContent(require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_HOME_MOBILE_CAROUSEL));
  obj.reason = closure_0;
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj);
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(result) {
  let scrollSessionId;
  let scrollingDirection;
  let scrollingType;
  let timeWatchedPreScrollMs;
  let verticalScrollingPosition;
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = result);
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), scrolling_type: scrollingType, scrolling_direction: scrollingDirection, vertical_scrolling_position: verticalScrollingPosition, scroll_session_id: scrollSessionId, time_watched_pre_scroll_ms: timeWatchedPreScrollMs };
  importDefault(675).track(AnalyticEvents.BOUNTY_VERTICAL_SCROLL, obj);
};
export const trackBountyAutoScrollDismissed = function trackBountyAutoScrollDismissed(arg0) {
  let scrollSessionId;
  let verticalScrollingPosition;
  ({ verticalScrollingPosition, scrollSessionId } = arg0);
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), vertical_scrolling_position: verticalScrollingPosition, scroll_session_id: scrollSessionId };
  importDefault(675).track(AnalyticEvents.BOUNTY_AUTO_SCROLL_DISMISSED, obj);
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
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { scrolling_type: scrollingType, client_ad_session_id: uuid };
  const obj2 = importDefault(675);
  obj.billing_session_id = assignBillingSessionId(uuid, require(6939) /* _createForOfIteratorHelperLoose */.isBillableQuestContent(questContent));
  obj.scrolling_direction = scrollingDirection;
  obj.scroll_window_start_index = scrollWindowStartIndex;
  obj.scroll_window_end_index = scrollWindowEndIndex;
  obj.scroll_window_size = scrollWindowSize;
  const obj4 = require(6939) /* _createForOfIteratorHelperLoose */;
  obj.content_name = require(6968) /* getQuestContentName */.getQuestContentName(questContent);
  obj.content_id = questContent;
  obj.carousel_size = carouselSize;
  obj2.track(AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId.searchSessionId };
  importDefault(675).track(AnalyticEvents.QUEST_HOME_SEARCH_ENTERED, obj);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  let searchSessionDurationMs;
  let searchSessionId;
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId, search_session_duration_ms: searchSessionDurationMs };
  importDefault(675).track(AnalyticEvents.QUEST_HOME_SEARCH_CLOSED, obj);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  let hasResults;
  let resultsCount;
  let searchQuery;
  let searchQueryLength;
  let searchSessionId;
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  let obj = require(6961) /* isAdSessionExpired */;
  const uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: assignBillingSessionId(uuid, false), search_session_id: searchSessionId, search_query: searchQuery, search_query_length: searchQueryLength, results_count: resultsCount, has_results: hasResults };
  importDefault(675).track(AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj);
};
export const trackQuestBarOrDockModeChange = function trackQuestBarOrDockModeChange(arg0) {
  let mode;
  let prevMode;
  let questContent;
  let questId;
  let sourceQuestContent;
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  let obj = require(6968) /* getQuestContentName */;
  const contentProperties = obj.getContentProperties(questContent);
  obj = { questId, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: obj, sourceQuestContent };
  obj = { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode };
  trackQuestEvent(obj);
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  let obj = importDefault(4324);
  obj = { quest_id: questId, reason: EXCLUDED_QUEST };
  obj.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, obj);
};
