// Module ID: 10925
// Function ID: 84895
// Name: useTrackQuestEventWithImpression
// Dependencies: [31, 653, 10468, 6959, 6940, 6971, 6969, 6919, 491, 477, 6976, 4979, 6970, 675, 2]
// Exports: useBountyCarouselEmptyStateAnalytics, useQuestHomeEntrypointAnalyticsEvents, useQuestsEmbedFallbackAnalytics, useTrackAdContentClickedWithImpression, useTrackQuestContentClickedWithImpression

// Module 10925 (useTrackQuestEventWithImpression)
import result from "result";
import { AnalyticEvents } from "ME";

let require = arg1;
function useTrackQuestEventWithImpression() {
  questImpression = questImpression(10468).useQuestImpression();
  const items = [questImpression];
  return React.useCallback((properties) => {
    let obj = questImpression(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj["impression_id"] = id;
    obj["properties"] = obj;
    obj.trackQuestEvent(obj);
  }, items);
}
function useTrackAdContentEventWithImpression() {
  questImpression = questImpression(10468).useQuestImpression();
  const items = [questImpression];
  return React.useCallback((properties) => {
    let obj = questImpression(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    let id;
    if (null != questImpression) {
      id = questImpression.getId();
    }
    obj["impression_id"] = id;
    obj["properties"] = obj;
    obj.trackAdContentEvent(obj);
  }, items);
}
let result = require("useQuestImpressionRef").fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export { useTrackQuestEventWithImpression };
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  let tmp = useTrackQuestEventWithImpression();
  const require = tmp;
  const items = [tmp];
  return React.useCallback((questId) => {
    let closure_2;
    let result;
    let closure_4;
    let closure_5;
    let sourceQuestContent;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: result, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    const adMetadataSealed = tmp(outer1_2[4]).getAdMetadataSealed(sourceQuestContent);
    let obj = tmp(outer1_2[4]);
    const adTrafficMetadataSealed = tmp(outer1_2[4]).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const obj2 = tmp(outer1_2[4]);
    let obj3 = tmp(outer1_2[5]);
    const adUser = obj3.getAdUser(tmp(outer1_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { questId, event: outer2_4.QUEST_CONTENT_CLICKED };
      obj = {};
      const merged = Object.assign(questId(outer2_2[6]).getContentProperties(questContent, result, closure_4));
      const merged1 = Object.assign(outer2_1(outer2_2[7])());
      obj["cta_name"] = closure_2;
      const obj3 = questId(outer2_2[6]);
      const tmp = questId;
      obj["click_id"] = questId(outer2_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (obj5.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        obj5 = questId(outer2_2[9]);
      }
      obj["apple_advertising_id"] = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (obj6.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        obj6 = questId(outer2_2[9]);
      }
      obj["android_advertising_id"] = advertisingId1;
      let tmp10 = null;
      if (null != closure_7) {
        tmp10 = closure_7;
      }
      obj["metadata_sealed"] = tmp10;
      let tmp11 = null;
      if (null != closure_8) {
        tmp11 = closure_8;
      }
      obj["traffic_metadata_sealed"] = tmp11;
      const obj4 = questId(outer2_2[8]);
      const currentQuestHomeSearchSession = questId(outer2_2[10]).getCurrentQuestHomeSearchSession();
      let uuid;
      if (null != currentQuestHomeSearchSession) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      let tmp14 = null;
      if (null != uuid) {
        tmp14 = uuid;
      }
      obj["search_session_id"] = tmp14;
      obj.properties = obj;
      obj.trackGuildAndChannelMetadata = closure_5;
      const obj7 = questId(outer2_2[10]);
      obj.shouldExtendSession = questId(outer2_2[4]).isBillableQuestContent(questContent);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items);
};
export { useTrackAdContentEventWithImpression };
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  let tmp = useTrackAdContentEventWithImpression();
  const require = tmp;
  const items = [tmp];
  return React.useCallback((arg0) => {
    let closure_0;
    let closure_1;
    let closure_2;
    let closure_4;
    let closure_5;
    let closure_6;
    let closure_7;
    let closure_8;
    let questContent;
    ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let obj = tmp(outer1_2[5]);
    const adUser = obj.getAdUser(tmp(outer1_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, event: outer2_4.QUEST_CONTENT_CLICKED };
      obj = {};
      const merged = Object.assign(callback(outer2_2[6]).getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(outer2_1(outer2_2[7])());
      obj["cta_name"] = closure_4;
      const obj3 = callback(outer2_2[6]);
      const tmp = outer1_0;
      obj["click_id"] = callback(outer2_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (obj5.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        obj5 = callback(outer2_2[9]);
      }
      obj["apple_advertising_id"] = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (obj6.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        obj6 = callback(outer2_2[9]);
      }
      obj["android_advertising_id"] = advertisingId1;
      const obj4 = callback(outer2_2[8]);
      const currentQuestHomeSearchSession = callback(outer2_2[10]).getCurrentQuestHomeSearchSession();
      let uuid;
      if (null != currentQuestHomeSearchSession) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      let tmp12 = null;
      if (null != uuid) {
        tmp12 = uuid;
      }
      obj["search_session_id"] = tmp12;
      obj.properties = obj;
      obj.trackGuildAndChannelMetadata = closure_7;
      const obj7 = callback(outer2_2[10]);
      obj.shouldExtendSession = callback(outer2_2[4]).isBillableQuestContent(questContent);
      obj.sourceQuestContent = closure_8;
      tmp(obj);
    });
  }, items);
};
export const useQuestsEmbedFallbackAnalytics = function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const result = callback(outer1_2[3]).trackQuestEmbedFallbackViewed(closure_1, callback);
  }, items);
};
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(reason) {
  let closure_0 = reason;
  const items = [reason];
  const effect = React.useEffect(() => {
    if (null != callback) {
      const result = callback(outer1_2[3]).trackBountyCarouselEmptyStateViewed(callback);
      const obj = callback(outer1_2[3]);
    }
  }, items);
};
export const useQuestHomeEntrypointAnalyticsEvents = function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let dependencyMap;
  let memo;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  const QuestContent = questHomeHero(4979).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const contentProperties = questHomeHero(_undefined[6]).getContentProperties(_undefined);
    delete tmp.row_index;
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  callback = memo.useCallback((event) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        let obj = { adContentId: questHomeHero.id, adCreativeType: questHomeHero(_undefined[12]).AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent: _undefined };
        questHomeHero(_undefined[3]).trackAdContentEvent(obj);
        const obj2 = questHomeHero(_undefined[3]);
      }
    }
    obj = shouldShowQuestHomeHeroContent(_undefined[13]);
    obj.track(event, memo);
  }, items1);
  const items2 = [callback];
  callback1 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  callback2 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER_OFF);
  }, items3);
  callback3 = memo.useCallback(() => {
    shouldShowQuestHomeHeroContent(_undefined[13]).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  callback4 = memo.useCallback(() => {
    let obj = shouldShowQuestHomeHeroContent(_undefined[13]);
    obj = { is_targeted: false };
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj = { ad_content_id: questHomeHero.id };
      let obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged1 = Object.assign(obj1);
    obj.track(callback.QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
};
