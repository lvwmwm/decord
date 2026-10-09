// Module ID: 7400
// Function ID: 7401
// Name: AnalyticsActions
// Dependencies: [5, 7401, 1370, 7384, 1085, 7177, 7403, 7380, 7404, 7406, 7409, 5986, 5106, 1265, 7410, 7420, 7421, 5982, 7415, 7358, 1382, 1279, 7411, 2]
// Exports: createAppStoreOverlayCarouselScrollTracker, getAppStoreOverlayStoreAppIds, trackAdContentAppStoreOverlayEvent, trackAdContentQuestBarOrDockModeChange, trackAppStoreOverlayCarouselScroll, trackAppStoreOverlayEvent, trackAppStoreOverlaySurfaceClickedForAdContent, trackAppStoreOverlaySurfaceClickedForQuest, trackBountyCarouselEmptyStateViewed, trackBountyVerticalScroll, trackQuestContentQuestBarOrDockModeChange, trackQuestEmbedFallbackViewed, trackQuestHomeCarouselScroll, trackQuestHomeOrbShopCarouselScroll, trackQuestHomeOrbShopCarouselViewed, trackQuestHomeSearchClosed, trackQuestHomeSearchEntered, trackQuestHomeSearchQuerySubmitted

// Module 7400 (AnalyticsActions)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5106 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7177 */;
import QuestDataUtils from "QuestDataUtils" /* 7380 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7403 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7404 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7406 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7409 */;
import captureAdUserAction4 from "captureAdUserAction" /* 7410 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7420 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7421 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7401 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1370 */;
import QuestStore from "QuestStore" /* 7384 */;
import size from "module_2" /* 2 */;

let _null, _null2, _null3;

function trackQuestEvent(questId) {
  let allApplicationIds;
  let creative_type;
  let event;
  let obj12;
  let properties;
  let shouldExtendSession;
  let tmp24Result;
  let trackGuildAndChannelMetadata;
  ({ event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = questId);
  questId = questId.questId;
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  const sourceQuestContent = questId.sourceQuestContent;
  const quests = QuestStore.quests;
  const value = quests.get(questId);
  if (null != value) {
    obj = { quest_id: value.id, quest_type: obj12.getQuestType(value.config), application_ids: allApplicationIds, quest_status: tmp24Result.getQuestStatus(value) };
    obj12 = utils_QuestUtils;
    const obj13 = QuestTaskUtils;
    allApplicationIds = obj13.getAllApplicationIds(value);
    if (allApplicationIds == null) {
      allApplicationIds = [];
    }
    const id = value.id;
    tmp24Result = AnalyticsTypes;
    const QUEST = tmp24(5986).AdCreativeType.QUEST;
    const tmp24Result5 = SessionAdGenerator;
    let uuid = tmp24Result5.getOrRefreshAdSession(shouldExtendSession).uuid;
    const tmp24Result6 = QuestDataUtils;
    const adDecisionData = tmp24Result6.getAdDecisionData(id, sourceQuestContent);
    const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid, ad_content_id: id, creative_type };
    const tmp24Result7 = QuestDataUtils;
    if (!tmp24Result7.isBillableQuestContent(sourceQuestContent, QUEST)) {
      const tmp24Result8 = SessionHeartbeatScheduler;
      const activeSessionUnsafe = tmp24Result8.getActiveSessionUnsafe();
      let uuid1;
      if (activeSessionUnsafe != null) {
        uuid1 = activeSessionUnsafe.uuid;
      }
      if (uuid1 == null) {
        uuid1 = null;
      }
      uuid = uuid1;
    }
    const merged = Object.assign(adDecisionData);
    creative_type = adDecisionData.creative_type;
    if (creative_type == null) {
      creative_type = QUEST;
    }
    const obj3 = {};
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(properties);
    const preview = value.preview;
    if (trackGuildAndChannelMetadata === undefined) {
      trackGuildAndChannelMetadata = false;
    }
    if (!DevToolsSettingsStore.displayTools) {
      const isLoggingAnalyticsEvents = DeveloperOptionsStore.isLoggingAnalyticsEvents;
      if (!preview) {
        const hasItem = set.has(event);
        if (trackGuildAndChannelMetadata) {
          const tmp21Result = AppAnalyticsUtilsDefault;
          tmp21Result.trackWithMetadata(event, obj3, hasItem);
        } else {
          const obj4 = { flush: hasItem };
          const tmp21Result2 = AnalyticsUtilsDefault;
          tmp21Result2.track(event, obj3, obj4);
        }
      }
    }
  }
}
function captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, arg1, arg2) {
  if (obj.MAIN_CTA === overlaySurface) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK };
    const captureAdUserAction2 = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged = Object.assign(arg2);
    const merged1 = Object.assign(arg1);
    captureAdUserAction2(obj2);
  } else if (obj.RATING_STAT === overlaySurface) {
    obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS };
    const captureAdUserAction = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged2 = Object.assign(arg2);
    const merged3 = Object.assign(arg1);
    captureAdUserAction(obj);
  } else if (obj.SEE_MORE === overlaySurface) {
    const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND };
    const captureAdUserAction3 = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged4 = Object.assign(arg2);
    const merged5 = Object.assign(arg1);
    captureAdUserAction3(obj3);
  }
}
function trackAdContentEvent(sourceQuestContent) {
  let adContentId;
  let adCreativeType;
  let adMetadataSealed;
  let adTrafficMetadataSealed;
  let creative_type;
  let event;
  let metadataSealed;
  let noFillDecision;
  let obj7;
  let obj9;
  let prop;
  let properties;
  let questStatus;
  let relatedQuestId;
  let shouldExtendSession;
  let trackGuildAndChannelMetadata;
  ({ adContentId, relatedQuestId, noFillDecision, adCreativeType, event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let quest = null;
  if (null != relatedQuestId) {
    quest = QuestStore.getQuest(relatedQuestId);
  }
  obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession(shouldExtendSession).uuid;
  const obj2 = QuestDataUtils;
  const adDecisionData = obj2.getAdDecisionData(adContentId, sourceQuestContent);
  const obj3 = { client_ad_session_id: uuid, billing_session_id: uuid, ad_content_id: adContentId, creative_type };
  const obj4 = QuestDataUtils;
  if (!obj4.isBillableQuestContent(sourceQuestContent, adCreativeType)) {
    const tmp3Result = SessionHeartbeatScheduler;
    const activeSessionUnsafe = tmp3Result.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
  }
  const merged = Object.assign(adDecisionData);
  creative_type = adDecisionData.creative_type;
  if (creative_type == null) {
    creative_type = adCreativeType;
  }
  const obj5 = { metadata_sealed: adMetadataSealed, traffic_metadata_sealed: adTrafficMetadataSealed };
  const merged1 = Object.assign(obj3);
  const tmp3Result4 = QuestDataUtils;
  adMetadataSealed = tmp3Result4.getAdMetadataSealed(sourceQuestContent, adContentId);
  if (adMetadataSealed == null) {
    adMetadataSealed = null;
  }
  const tmp3Result5 = QuestDataUtils;
  adTrafficMetadataSealed = tmp3Result5.getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  if (adTrafficMetadataSealed == null) {
    adTrafficMetadataSealed = null;
  }
  if (null != noFillDecision) {
    const obj6 = { decision_id: null, is_targeted: false, metadata_sealed: metadataSealed, traffic_metadata_sealed: prop };
    ({ decisionId: obj10.decision_id, metadataSealed } = noFillDecision);
    if (metadataSealed == null) {
      metadataSealed = null;
    }
    prop = noFillDecision.trafficMetadataSealed;
    if (prop == null) {
      prop = null;
    }
    obj7 = obj6;
  } else {
    obj7 = {};
  }
  const merged2 = Object.assign(obj7);
  if (null != relatedQuestId) {
    const obj8 = { quest_id: relatedQuestId, quest_status: questStatus };
    questStatus = null;
    if (null != quest) {
      const tmp3Result6 = AnalyticsTypes;
      questStatus = tmp3Result6.getQuestStatus(quest);
    }
    obj9 = obj8;
  } else {
    obj9 = {};
  }
  const obj11 = {};
  const merged3 = Object.assign(obj9);
  const merged4 = Object.assign(obj5);
  const merged5 = Object.assign(properties);
  if (trackGuildAndChannelMetadata === undefined) {
    trackGuildAndChannelMetadata = false;
  }
  if (!DevToolsSettingsStore.displayTools) {
    const isLoggingAnalyticsEvents = DeveloperOptionsStore.isLoggingAnalyticsEvents;
    const hasItem = set.has(event);
    if (trackGuildAndChannelMetadata) {
      const tmp22Result = AppAnalyticsUtilsDefault;
      tmp22Result.trackWithMetadata(event, obj11, hasItem);
    } else {
      const obj12 = { flush: hasItem };
      const tmp22Result2 = AnalyticsUtilsDefault;
      tmp22Result2.track(event, obj11, obj12);
    }
  }
}
function getCommonClickEventProperties() {
  return obj(...arguments);
}
let obj = function _getCommonClickEventProperties() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let advertisingId;
    let advertisingId1;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let click_id;
    let impression_id;
    let obj6;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let cta_name;
        let closure_6;
        c5 = 2;
        if (0 === impression_id) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            cta_name = undefined;
            ({ questContent: c0, questContentPosition: c1, questContentRowIndex: c2, questContentCTA: c3, impressionId: c4, clickId: c5 } = closure_0);
            closure_6 = undefined;
            impression_id = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === impression_id) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const getAdUser = closure_131_0(closure_131_2[18]).getAdUser;
            const tmp29 = closure_131_0(closure_131_2[18]);
            impression_id = 2;
            c5 = 1;
            const obj8 = { value: getAdUser(obj6.getQuestContentName(c0)), done: false };
            obj6 = closure_131_0(closure_131_2[10]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_6 = value;
          const obj10 = { cta_name, impression_id, apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, click_id };
          const obj12 = closure_131_0(closure_131_2[10]);
          const merged = Object.assign(obj12.getContentProperties(c0, c1, c2));
          const merged1 = Object.assign(closure_131_1(closure_131_2[19])());
          advertisingId = null;
          if (null != closure_6) {
            advertisingId = null;
            obj = closure_131_0(closure_131_2[20]);
            if (obj.isIOS()) {
              advertisingId = closure_6.advertisingId;
            }
          }
          advertisingId1 = null;
          if (null != closure_6) {
            advertisingId1 = null;
            const obj2 = closure_131_0(closure_131_2[20]);
            if (obj2.isAndroid()) {
              advertisingId1 = closure_6.advertisingId;
            }
          }
          click_id = c5;
          if (c5 == null) {
            const obj3 = closure_131_0(closure_131_2[21]);
            click_id = obj3.v4();
          }
          c5 = 3;
          const obj11 = { value: obj10, done: true };
          return obj11;
        }
      } catch (tmp33) {
        c5 = 3;
        throw tmp33;
      }
    }
  });
  return obj(...arguments);
};
function trackQuestContentClicked() {
  return obj(...arguments);
}
obj = function _trackQuestContentClicked() {
  obj = _asyncToGenerator(async (questId) => {
    let clickId;
    let closure_4;
    let impressionId;
    let trackGuildAndChannelMetadata;
    let c9 = 0;
    let c10 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let obj2;
      let properties;
      let uuid;
      const obj9 = closure_134_0(closure_134_2[7]);
      const adTrafficMetadataSealed = obj9.getAdTrafficMetadataSealed(sourceQuestContent, questId);
      sourceQuestContent = closure_134_9;
      const obj6 = { questId, event: closure_134_7.QUEST_CONTENT_CLICKED, properties, trackGuildAndChannelMetadata, shouldExtendSession: obj2.isBillableQuestContent(_null), sourceQuestContent };
      properties = { metadata_sealed: _null, traffic_metadata_sealed: _null2, search_session_id: _null3 };
      const obj7 = { questContent: _null, questContentPosition: _null3, questContentRowIndex, questContentCTA: _null2, impressionId, clickId };
      await closure_134_13(obj7);
      const merged = Object.assign(value);
      const obj8 = closure_134_0(closure_134_2[7]);
      const adMetadataSealed = obj8.getAdMetadataSealed(sourceQuestContent);
      _null = adMetadataSealed;
      if (adMetadataSealed == null) {
        _null = null;
      }
      _null2 = adTrafficMetadataSealed;
      if (adTrafficMetadataSealed == null) {
        _null2 = null;
      }
      obj = closure_134_0(closure_134_2[22]);
      const currentQuestHomeSearchSession = obj.getCurrentQuestHomeSearchSession();
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      _null3 = uuid;
      if (uuid == null) {
        _null3 = null;
      }
      obj2 = closure_134_0(closure_134_2[7]);
      sourceQuestContent(obj6);
      await "IconComponent";
      ({ questId: c0, questContent: c1, questContentCTA: c2, questContentPosition: c3, questContentRowIndex: c4, impressionId: c5, clickId: c6, trackGuildAndChannelMetadata: c7, sourceQuestContent: c8 } = closure_0);
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function trackAdContentClicked() {
  return obj(...arguments);
}
obj = function _trackAdContentClicked() {
  obj = _asyncToGenerator(async (adContentId) => {
    let impressionId;
    let questContent;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let obj6;
      adCreativeType = closure_131_12;
      const obj5 = { adContentId, relatedQuestId, adCreativeType, event: closure_131_7.QUEST_CONTENT_CLICKED, properties: await closure_131_13(obj6), trackGuildAndChannelMetadata, shouldExtendSession: obj.isBillableQuestContent(questContent), sourceQuestContent };
      obj6 = { questContent, questContentPosition, questContentRowIndex, questContentCTA, impressionId };
      obj = closure_131_0(closure_131_2[7]);
      adCreativeType(obj5);
      await "IconComponent";
      ({ adContentId: c0, relatedQuestId: c1, adCreativeType: c2, questContent: c3, questContentCTA: c4, questContentPosition: c5, questContentRowIndex: c6, impressionId: c7, trackGuildAndChannelMetadata: c8, sourceQuestContent: c9 } = closure_0);
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const items = [, , ];
({ QUEST_CONTENT_VIEWED: arr[0], QUEST_CONTENT_ENGAGED_VIEWED: arr[1], QUEST_CONTENT_CLICKED: arr[2] } = AnalyticEvents);
const set = new Set(items);
obj = { MAIN_CTA: "main_cta", RATING_STAT: "rating_stat", SEE_MORE: "see_more" };
const result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const AppStoreOverlayVariant = { NATIVE: "native", CUSTOM: "custom" };
export const AppStoreOverlaySurfaces = obj;
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(arg0) {
  let event;
  let inlineStoreAppId;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let overlaySurface;
  let overlayVariant;
  let quest;
  let timeSpentMs;
  let tmp16;
  let tmp9;
  let trackingCtx;
  ({ quest, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  obj = { content_name: obj2.getQuestContentName(trackingCtx.content), cta_name: null, impression_id: null, source_content_name: obj3.getQuestContentName(trackingCtx.sourceQuestContent), app_id: inlineStoreAppId, content_position: trackingCtx.position, overlay_variant: overlayVariant };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  obj2 = AnalyticsTypes;
  obj3 = AnalyticsTypes;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    const obj4 = { questId: quest.id, event, properties: obj5, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj5 = { time_spent_ms: timeSpentMs };
    const merged = Object.assign(obj);
    const tmp18 = trackQuestEvent;
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    tmp18(obj4);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    const obj6 = { questId: quest.id, event, properties: obj7, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj7 = { time_spent_ms: tmp16, overlay_surface: overlaySurface };
    const merged1 = Object.assign(obj);
    tmp16 = timeSpentMs;
    const tmp11 = trackQuestEvent;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    tmp11(obj6);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj8 = { questId: quest.id, event, properties: obj9, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj9 = { overlay_surface: tmp9 };
    const merged2 = Object.assign(obj);
    tmp9 = overlaySurface;
    const tmp4 = trackQuestEvent;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    tmp4(obj8);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj10 = { questId: quest.id, event, properties: obj, sourceQuestContent: trackingCtx.sourceQuestContent };
    trackQuestEvent(obj10);
  }
};
export const trackAppStoreOverlaySurfaceClickedForQuest = function trackAppStoreOverlaySurfaceClickedForQuest(arg0) {
  let EXPAND;
  let overlaySurface;
  let questId;
  let trackingCtx;
  ({ questId, trackingCtx, overlaySurface } = arg0);
  if (obj.MAIN_CTA === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (obj.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (obj.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    ({ sourceQuestContent: obj3.sourceQuestContent, position: obj3.questContentPosition, impressionId: obj3.impressionId } = trackingCtx);
    const obj4 = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    const obj7 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj4, obj7);
  } else {
    ({ position: obj2.questContentPosition, impressionId: obj2.impressionId, sourceQuestContent: obj2.sourceQuestContent } = trackingCtx);
    const obj8 = { questId, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    trackQuestContentClicked(obj8);
  }
};
export const AppStoreOverlayCarouselTypes = { MEDIA: "media", STATS: "stats" };
export const getAppStoreOverlayStoreAppIds = function getAppStoreOverlayStoreAppIds(appId) {
  let tmp2;
  appId = appId.appId;
  let tmp;
  if ("ios" === appId.platform) {
    tmp = appId;
  }
  obj = { iosAppId: tmp, androidAppId: tmp2 };
  tmp2 = undefined;
  if ("android" === appId.platform) {
    tmp2 = appId;
  }
  return obj;
};
export const trackAppStoreOverlayCarouselScroll = function trackAppStoreOverlayCarouselScroll(arg0) {
  let adContentId;
  let androidAppId;
  let carouselPosition;
  let carouselSize;
  let carouselType;
  let iosAppId;
  let questId;
  let scrollingDirection;
  ({ questId, adContentId, iosAppId, androidAppId } = arg0);
  ({ carouselType, scrollingDirection, carouselPosition, carouselSize } = arg0);
  const track = AnalyticsUtilsDefault.track;
  const QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL;
  AnalyticsUtilsDefault;
  if (questId == null) {
    questId = null;
  }
  obj = { quest_id: questId, ad_content_id: adContentId, ios_app_id: iosAppId, android_app_id: androidAppId, carousel_type: carouselType, scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize };
  if (adContentId == null) {
    adContentId = null;
  }
  if (iosAppId == null) {
    iosAppId = null;
  }
  if (androidAppId == null) {
    androidAppId = null;
  }
  track(QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL, obj);
};
export function createAppStoreOverlayCarouselScrollTracker(arg0, appId) {
  let closure_0 = arg0;
  return (arg0) => {
    let adContentId;
    let androidAppId;
    let carouselPosition;
    let carouselSize;
    let carouselType;
    let iosAppId;
    let questId;
    let scrollingDirection;
    let tmp4;
    obj = {};
    const merged = Object.assign(closure_0);
    appId = appId.appId;
    let tmp3;
    if ("ios" === appId.platform) {
      tmp3 = appId;
    }
    const obj2 = { iosAppId: tmp3, androidAppId: tmp4 };
    tmp4 = undefined;
    if ("android" === appId.platform) {
      tmp4 = appId;
    }
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(arg0);
    ({ questId, adContentId, iosAppId, androidAppId } = obj);
    ({ carouselType, scrollingDirection, carouselPosition, carouselSize } = obj);
    const track = AnalyticsUtilsDefault.track;
    const QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL = AnalyticEvents.QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL;
    AnalyticsUtilsDefault;
    if (questId == null) {
      questId = null;
    }
    const obj3 = { quest_id: questId, ad_content_id: adContentId, ios_app_id: iosAppId, android_app_id: androidAppId, carousel_type: carouselType, scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize };
    if (adContentId == null) {
      adContentId = null;
    }
    if (iosAppId == null) {
      iosAppId = null;
    }
    if (androidAppId == null) {
      androidAppId = null;
    }
    track(QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL, obj3);
  };
}
export const trackAppStoreOverlaySurfaceClickedForAdContent = function trackAppStoreOverlaySurfaceClickedForAdContent(relatedQuestId) {
  let EXPAND;
  let adContentId;
  let adCreativeType;
  let overlaySurface;
  let trackingCtx;
  ({ adContentId, adCreativeType, trackingCtx, overlaySurface } = relatedQuestId);
  relatedQuestId = relatedQuestId.relatedQuestId;
  if (obj.MAIN_CTA === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (obj.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (obj.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    ({ sourceQuestContent: obj3.sourceQuestContent, position: obj3.questContentPosition, impressionId: obj3.impressionId } = trackingCtx);
    const obj4 = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    const obj7 = { adCreativeType, adCreativeId: adContentId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj4, obj7);
  } else {
    ({ position: obj2.questContentPosition, impressionId: obj2.impressionId, sourceQuestContent: obj2.sourceQuestContent } = trackingCtx);
    const obj8 = { adContentId, relatedQuestId, adCreativeType, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    trackAdContentClicked(obj8);
  }
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0) {
  let adContentId;
  let adCreativeType;
  let event;
  let inlineStoreAppId;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let overlaySurface;
  let overlayVariant;
  let timeSpentMs;
  let tmp16;
  let tmp9;
  let trackingCtx;
  ({ adContentId, adCreativeType, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  obj = { content_name: obj2.getQuestContentName(trackingCtx.content), cta_name: null, impression_id: null, source_content_name: obj3.getQuestContentName(trackingCtx.sourceQuestContent), app_id: inlineStoreAppId, content_position: trackingCtx.position, overlay_variant: overlayVariant };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  obj2 = AnalyticsTypes;
  obj3 = AnalyticsTypes;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    const obj4 = { adContentId, adCreativeType, event, properties: obj5, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj5 = { time_spent_ms: timeSpentMs };
    const merged = Object.assign(obj);
    const tmp18 = trackAdContentEvent;
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    tmp18(obj4);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    const obj6 = { adContentId, adCreativeType, event, properties: obj7, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj7 = { time_spent_ms: tmp16, overlay_surface: overlaySurface };
    const merged1 = Object.assign(obj);
    tmp16 = timeSpentMs;
    const tmp11 = trackAdContentEvent;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    tmp11(obj6);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj8 = { adContentId, adCreativeType, event, properties: obj9, sourceQuestContent: trackingCtx.sourceQuestContent };
    obj9 = { overlay_surface: tmp9 };
    const merged2 = Object.assign(obj);
    tmp9 = overlaySurface;
    const tmp4 = trackAdContentEvent;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    tmp4(obj8);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj10 = { adContentId, adCreativeType, event, properties: obj, sourceQuestContent: trackingCtx.sourceQuestContent };
    trackAdContentEvent(obj10);
  }
};
export { trackAdContentEvent };
export { getCommonClickEventProperties };
export { trackQuestContentClicked };
export { trackAdContentClicked };
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  let carouselSize;
  let isPlaceholderCarousel;
  let obtainableOrbRewards;
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, { obtainable_orb_rewards: obtainableOrbRewards, carousel_size: carouselSize, is_placeholder_carousel: isPlaceholderCarousel });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(arg0) {
  let carouselPosition;
  let carouselSize;
  let scrollingDirection;
  ({ scrollingDirection, carouselPosition, carouselSize } = arg0);
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, { scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(reason) {
  obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid, reason };
  const track = AnalyticsUtilsDefault.track;
  const BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED = AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED;
  AnalyticsUtilsDefault;
  const obj3 = QuestDataUtils;
  if (!obj3.isBillableQuestContent(QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE)) {
    const tmpResult = SessionHeartbeatScheduler;
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
  }
  track(BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj2);
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(arg0) {
  let scrollSessionId;
  let scrollingDirection;
  let scrollingType;
  let timeWatchedPreScrollMs;
  let uuid1;
  let verticalScrollingPosition;
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = arg0);
  obj = SessionAdGenerator;
  const uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid1, scrolling_type: scrollingType, scrolling_direction: scrollingDirection, vertical_scrolling_position: verticalScrollingPosition, scroll_session_id: scrollSessionId, time_watched_pre_scroll_ms: timeWatchedPreScrollMs };
  const track = AnalyticsUtilsDefault.track;
  const BOUNTY_VERTICAL_SCROLL = AnalyticEvents.BOUNTY_VERTICAL_SCROLL;
  AnalyticsUtilsDefault;
  const obj3 = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj3.getActiveSessionUnsafe();
  uuid1 = undefined;
  if (activeSessionUnsafe != null) {
    uuid1 = activeSessionUnsafe.uuid;
  }
  if (uuid1 == null) {
    uuid1 = null;
  }
  track(BOUNTY_VERTICAL_SCROLL, obj2);
};
export const trackQuestHomeCarouselScroll = function trackQuestHomeCarouselScroll(questContent) {
  let carouselSize;
  let scrollWindowEndIndex;
  let scrollWindowSize;
  let scrollWindowStartIndex;
  let scrollingDirection;
  let scrollingType;
  let tmpResult2;
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, scrollWindowStartIndex, scrollWindowEndIndex, scrollWindowSize, carouselSize } = questContent);
  obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { scrolling_type: scrollingType, client_ad_session_id: uuid, billing_session_id: uuid, scrolling_direction: scrollingDirection, scroll_window_start_index: scrollWindowStartIndex, scroll_window_end_index: scrollWindowEndIndex, scroll_window_size: scrollWindowSize, content_name: tmpResult2.getQuestContentName(questContent), content_id: questContent, carousel_size: carouselSize };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_HOME_CAROUSEL_SCROLL = AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL;
  AnalyticsUtilsDefault;
  const obj3 = QuestDataUtils;
  if (!obj3.isBillableQuestContent(questContent)) {
    const tmpResult = SessionHeartbeatScheduler;
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
  }
  tmpResult2 = AnalyticsTypes;
  track(QUEST_HOME_CAROUSEL_SCROLL, obj2);
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  let uuid1;
  searchSessionId = searchSessionId.searchSessionId;
  obj = SessionAdGenerator;
  const uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid1, search_session_id: searchSessionId };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_HOME_SEARCH_ENTERED = AnalyticEvents.QUEST_HOME_SEARCH_ENTERED;
  AnalyticsUtilsDefault;
  const obj3 = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj3.getActiveSessionUnsafe();
  uuid1 = undefined;
  if (activeSessionUnsafe != null) {
    uuid1 = activeSessionUnsafe.uuid;
  }
  if (uuid1 == null) {
    uuid1 = null;
  }
  track(QUEST_HOME_SEARCH_ENTERED, obj2);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  let searchSessionDurationMs;
  let searchSessionId;
  let uuid1;
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  obj = SessionAdGenerator;
  const uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid1, search_session_id: searchSessionId, search_session_duration_ms: searchSessionDurationMs };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_HOME_SEARCH_CLOSED = AnalyticEvents.QUEST_HOME_SEARCH_CLOSED;
  AnalyticsUtilsDefault;
  const obj3 = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj3.getActiveSessionUnsafe();
  uuid1 = undefined;
  if (activeSessionUnsafe != null) {
    uuid1 = activeSessionUnsafe.uuid;
  }
  if (uuid1 == null) {
    uuid1 = null;
  }
  track(QUEST_HOME_SEARCH_CLOSED, obj2);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  let hasResults;
  let resultsCount;
  let searchQuery;
  let searchQueryLength;
  let searchSessionId;
  let uuid1;
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  obj = SessionAdGenerator;
  const uuid = obj.getOrRefreshAdSession().uuid;
  const obj2 = { client_ad_session_id: uuid, billing_session_id: uuid1, search_session_id: searchSessionId, search_query: searchQuery, search_query_length: searchQueryLength, results_count: resultsCount, has_results: hasResults };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_HOME_SEARCH_QUERY_SUBMITTED = AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED;
  AnalyticsUtilsDefault;
  const obj3 = SessionHeartbeatScheduler;
  const activeSessionUnsafe = obj3.getActiveSessionUnsafe();
  uuid1 = undefined;
  if (activeSessionUnsafe != null) {
    uuid1 = activeSessionUnsafe.uuid;
  }
  if (uuid1 == null) {
    uuid1 = null;
  }
  track(QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj2);
};
export const trackQuestContentQuestBarOrDockModeChange = function trackQuestContentQuestBarOrDockModeChange(arg0) {
  let mode;
  let prevMode;
  let questContent;
  let questId;
  let sourceQuestContent;
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  obj = AnalyticsTypes;
  const contentProperties = obj.getContentProperties(questContent);
  const obj2 = { questId, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode }, sourceQuestContent };
  trackQuestEvent(obj2);
};
export const trackAdContentQuestBarOrDockModeChange = function trackAdContentQuestBarOrDockModeChange(arg0) {
  let adContentId;
  let adCreativeType;
  let mode;
  let prevMode;
  let questContent;
  let sourceQuestContent;
  ({ adContentId, adCreativeType, questContent, sourceQuestContent, mode, prevMode } = arg0);
  obj = AnalyticsTypes;
  const contentProperties = obj.getContentProperties(questContent);
  const obj2 = { adContentId, adCreativeType, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode }, sourceQuestContent };
  trackAdContentEvent(obj2);
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  obj = AppAnalyticsUtilsDefault;
  const obj2 = { quest_id: questId, reason: EXCLUDED_QUEST };
  obj.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, obj2);
};
