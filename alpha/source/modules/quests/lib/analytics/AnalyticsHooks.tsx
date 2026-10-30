// Module ID: 16931
// Function ID: 16932
// Name: AnalyticsHooks
// Dependencies: [19, 1072, 9697, 7855, 7835, 7865, 7864, 7812, 1267, 1376, 7870, 6778, 6782, 1253, 2]
// Exports: useBountyCarouselEmptyStateAnalytics, useQuestHomeEntrypointAnalyticsEvents, useQuestsEmbedFallbackAnalytics, useTrackAdContentClickedWithImpression, useTrackAdContentEventWithImpression, useTrackQuestContentClickedWithImpression, useTrackQuestEventWithImpression

// Module 16931 (AnalyticsHooks)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import v1 from "v1" /* 1267 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7812 */;
import QuestDataUtils from "QuestDataUtils" /* 7835 */;
import AnalyticsActions from "AnalyticsActions" /* 7855 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 7870 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let advertisingId, dependencyMap, questId;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export function useTrackQuestEventWithImpression() {
  let getQuestImpressionId;
  const obj = getQuestImpressionId(9697);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackQuestEvent = callback(dependencyMap[3]).trackQuestEvent;
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackQuestEvent(obj);
  }, items);
}
export function useTrackQuestContentClickedWithImpression() {
  let callback;
  let obj = callback(9697);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  callback = react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackQuestEvent = callback(dependencyMap[3]).trackQuestEvent;
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackQuestEvent(obj);
  }, items);
  const items1 = [callback];
  return react.useCallback((questId) => {
    let closure_2;
    let closure_3;
    let closure_4;
    let closure_5;
    let closure_7;
    let closure_8;
    let cta_name;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    let obj = callback(dependencyMap[4]);
    const adMetadataSealed = obj.getAdMetadataSealed(sourceQuestContent);
    let obj2 = callback(dependencyMap[4]);
    const adTrafficMetadataSealed = obj2.getAdTrafficMetadataSealed(sourceQuestContent, questId);
    let tmp = callback(dependencyMap[5]);
    const getAdUser = tmp.getAdUser;
    let obj3 = callback(dependencyMap[6]);
    const adUser = getAdUser(obj3.getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let advertisingId1;
      let obj2;
      let obj4;
      let tmp10;
      let tmp2Result6;
      let tmp4;
      let tmp9;
      let uuid;
      const obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(tmp4), sourceQuestContent };
      obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, metadata_sealed: tmp9, traffic_metadata_sealed: tmp10, search_session_id: uuid };
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(questContent, closure_3, closure_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      advertisingId = null;
      obj4 = v1;
      const tmp = callback;
      tmp4 = questContent;
      if (null != advertisingId) {
        advertisingId = null;
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        const tmp2Result4 = PlatformUtils;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      tmp9 = null;
      if (null != closure_7) {
        tmp9 = closure_7;
      }
      tmp10 = null;
      if (null != closure_8) {
        tmp10 = closure_8;
      }
      const tmp2Result5 = QuestHomeSearchSession;
      const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
      uuid = undefined;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      tmp2Result6 = QuestDataUtils;
      tmp(obj);
    });
  }, items1);
}
export function useTrackAdContentEventWithImpression() {
  let getQuestImpressionId;
  const obj = getQuestImpressionId(9697);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackAdContentEvent = callback(dependencyMap[3]).trackAdContentEvent;
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackAdContentEvent(obj);
  }, items);
}
export function useTrackAdContentClickedWithImpression() {
  let adContentId;
  let obj = adContentId(9697);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  adContentId = react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackAdContentEvent = callback(dependencyMap[3]).trackAdContentEvent;
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackAdContentEvent(obj);
  }, items);
  const items1 = [adContentId];
  return react.useCallback((arg0) => {
    let adCreativeType;
    let callback;
    let closure_1;
    let closure_2;
    let closure_4;
    let closure_5;
    let closure_6;
    let closure_7;
    let closure_8;
    let cta_name;
    let questContent;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    ({ adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let tmp = callback(dependencyMap[5]);
    const getAdUser = tmp.getAdUser;
    let obj = callback(dependencyMap[6]);
    const adUser = getAdUser(obj.getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let advertisingId1;
      let obj2;
      let obj4;
      let tmp2Result6;
      let tmp4;
      let uuid;
      const obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: obj2, trackGuildAndChannelMetadata, shouldExtendSession: tmp2Result6.isBillableQuestContent(tmp4), sourceQuestContent };
      obj2 = { cta_name, click_id: obj4.v4(), apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, search_session_id: uuid };
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      advertisingId = null;
      obj4 = v1;
      const tmp = adContentId;
      tmp4 = questContent;
      if (null != advertisingId) {
        advertisingId = null;
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        const tmp2Result4 = PlatformUtils;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      const tmp2Result5 = QuestHomeSearchSession;
      const currentQuestHomeSearchSession = tmp2Result5.getCurrentQuestHomeSearchSession();
      uuid = undefined;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      tmp2Result6 = QuestDataUtils;
      tmp(obj);
    });
  }, items1);
}
export function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const obj = AnalyticsActions;
    const result = obj.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  }, items);
}
export function useBountyCarouselEmptyStateAnalytics(COMPLETED) {
  let closure_0 = COMPLETED;
  const items = [COMPLETED];
  const effect = react.useEffect(() => {
    if (null != COMPLETED) {
      const obj = AnalyticsActions;
      const result = obj.trackBountyCarouselEmptyStateViewed(tmp);
    }
  }, items);
}
export function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  let sourceQuestContent;
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(6778).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const obj = AnalyticsTypes;
    const contentProperties = obj.getContentProperties(sourceQuestContent);
    delete tmp["row_index"];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = memo.useCallback((event) => {
    if (null != questHomeHero) {
      const tmp2 = shouldShowQuestHomeHeroContent;
      if (tmp2) {
        const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent };
        const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
        AnalyticsActions;
        trackAdContentEvent(obj2);
      }
    }
    const obj = AnalyticsUtilsDefault;
    obj.track(event, memo);
  }, items1);
  const items2 = [callback];
  const callback1 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  const callback2 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER_OFF);
  }, items3);
  const callback3 = memo.useCallback(() => {
    const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[13]);
    obj.track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  const callback4 = memo.useCallback(() => {
    let obj3;
    const track = AnalyticsUtilsDefault.track;
    const QUEST_CONTENT_CLICKED = AnalyticEvents.QUEST_CONTENT_CLICKED;
    const obj = { is_targeted: false };
    AnalyticsUtilsDefault;
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj3 = { ad_content_id: tmp3.id };
      const obj2 = { ad_content_id: tmp3.id };
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    track(QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
}
