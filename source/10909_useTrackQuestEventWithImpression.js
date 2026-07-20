// Module ID: 10909
// Function ID: 84801
// Name: useTrackQuestEventWithImpression
// Dependencies: []
// Exports: useBountyCarouselEmptyStateAnalytics, useQuestHomeEntrypointAnalyticsEvents, useQuestsEmbedFallbackAnalytics, useTrackAdContentClickedWithImpression, useTrackQuestContentClickedWithImpression

// Module 10909 (useTrackQuestEventWithImpression)
function useTrackQuestEventWithImpression() {
  const questImpression = arg1(dependencyMap[2]).useQuestImpression();
  const arg1 = questImpression;
  const items = [questImpression];
  return React.useCallback((properties) => {
    let obj = questImpression(closure_2[3]);
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
  const questImpression = arg1(dependencyMap[2]).useQuestImpression();
  const arg1 = questImpression;
  const items = [questImpression];
  return React.useCallback((properties) => {
    let obj = questImpression(closure_2[3]);
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
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export { useTrackQuestEventWithImpression };
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  const tmp = useTrackQuestEventWithImpression();
  const arg1 = tmp;
  const items = [tmp];
  return React.useCallback((questId) => {
    let sourceQuestContent;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    const adMetadataSealed = questId(closure_2[4]).getAdMetadataSealed(sourceQuestContent);
    const obj = questId(closure_2[4]);
    const adTrafficMetadataSealed = questId(closure_2[4]).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const obj2 = questId(closure_2[4]);
    const obj3 = questId(closure_2[5]);
    const adUser = obj3.getAdUser(questId(closure_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { questId, event: constants.QUEST_CONTENT_CLICKED };
      obj = {};
      const merged = Object.assign(questId(closure_2[6]).getContentProperties(questContent, closure_3, constants));
      const merged1 = Object.assign(questContent(closure_2[7])());
      obj["cta_name"] = closure_2;
      const obj3 = questId(closure_2[6]);
      const tmp = questId;
      obj["click_id"] = questId(closure_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (obj5.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        const obj5 = questId(closure_2[9]);
      }
      obj["apple_advertising_id"] = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (obj6.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        const obj6 = questId(closure_2[9]);
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
      const obj4 = questId(closure_2[8]);
      const currentQuestHomeSearchSession = questId(closure_2[10]).getCurrentQuestHomeSearchSession();
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
      const obj7 = questId(closure_2[10]);
      obj.shouldExtendSession = questId(closure_2[4]).isBillableQuestContent(questContent);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items);
};
export { useTrackAdContentEventWithImpression };
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  const tmp = useTrackAdContentEventWithImpression();
  const arg1 = tmp;
  const items = [tmp];
  return React.useCallback((arg0) => {
    let questContent;
    ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    const obj = tmp(closure_2[5]);
    const adUser = obj.getAdUser(tmp(closure_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { adContentId: callback, relatedQuestId: callback2, adCreativeType: closure_2, event: constants.QUEST_CONTENT_CLICKED };
      obj = {};
      const merged = Object.assign(callback(closure_2[6]).getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(callback2(closure_2[7])());
      obj["cta_name"] = constants;
      const obj3 = callback(closure_2[6]);
      const tmp = callback;
      obj["click_id"] = callback(closure_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (obj5.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        const obj5 = callback(closure_2[9]);
      }
      obj["apple_advertising_id"] = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (obj6.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        const obj6 = callback(closure_2[9]);
      }
      obj["android_advertising_id"] = advertisingId1;
      const obj4 = callback(closure_2[8]);
      const currentQuestHomeSearchSession = callback(closure_2[10]).getCurrentQuestHomeSearchSession();
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
      const obj7 = callback(closure_2[10]);
      obj.shouldExtendSession = callback(closure_2[4]).isBillableQuestContent(questContent);
      obj.sourceQuestContent = closure_8;
      tmp(obj);
    });
  }, items);
};
export const useQuestsEmbedFallbackAnalytics = function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const result = arg0(closure_2[3]).trackQuestEmbedFallbackViewed(arg1, arg0);
  }, items);
};
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(reason) {
  const arg1 = reason;
  const items = [reason];
  const effect = React.useEffect(() => {
    if (null != arg0) {
      const result = arg0(closure_2[3]).trackBountyCarouselEmptyStateViewed(arg0);
      const obj = arg0(closure_2[3]);
    }
  }, items);
};
export const useQuestHomeEntrypointAnalyticsEvents = function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  questHomeHero = questHomeHero.questHomeHero;
  const arg1 = questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  const importDefault = shouldShowQuestHomeHeroContent;
  let dependencyMap;
  let React;
  let AnalyticEvents;
  let useTrackQuestEventWithImpression;
  let useTrackAdContentEventWithImpression;
  let callback3;
  let callback4;
  const QuestContent = arg1(dependencyMap[11]).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  const memo = React.useMemo(() => {
    const contentProperties = questHomeHero(tmp[6]).getContentProperties(tmp);
    delete r0.row_index;
    return contentProperties;
  }, items);
  React = memo;
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = React.useCallback((event) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        let obj = { adContentId: questHomeHero.id, adCreativeType: questHomeHero(tmp[12]).AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent: tmp };
        questHomeHero(tmp[3]).trackAdContentEvent(obj);
        const obj2 = questHomeHero(tmp[3]);
      }
    }
    obj = shouldShowQuestHomeHeroContent(tmp[13]);
    obj.track(event, memo);
  }, items1);
  AnalyticEvents = callback;
  const items2 = [callback];
  const callback1 = React.useCallback(() => {
    callback(callback.QUEST_HOVER);
  }, items2);
  useTrackQuestEventWithImpression = callback1;
  const items3 = [callback];
  const callback2 = React.useCallback(() => {
    callback(callback.QUEST_HOVER_OFF);
  }, items3);
  useTrackAdContentEventWithImpression = callback2;
  callback3 = React.useCallback(() => {
    shouldShowQuestHomeHeroContent(tmp[13]).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  callback4 = React.useCallback(() => {
    let obj = shouldShowQuestHomeHeroContent(tmp[13]);
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
  return React.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
};
