// Module ID: 11938
// Function ID: 11939
// Name: AnalyticsHooks
// Dependencies: [19, 1078, 558, 568, 11646, 7991, 7972, 8008, 8001, 7950, 1259, 1368, 8004, 5698, 5702, 1245, 2]

// Module 11938 (AnalyticsHooks)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import v1 from "v1" /* 1259 */;
import AdCreativeType from "AdCreativeType" /* 5702 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7950 */;
import QuestDataUtils from "QuestDataUtils" /* 7972 */;
import AnalyticsActions from "AnalyticsActions" /* 7991 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8001 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 8004 */;
import noop from "module_19" /* 19 */;

require = fn;
let AnalyticEvents = fn(1078).AnalyticEvents;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = getQuestImpressionId(568).c(2);
  const obj = getQuestImpressionId(568);
  getQuestImpressionId = getQuestImpressionId(11646).useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      const obj2 = {};
      const merged = Object.assign(properties);
      const obj3 = {};
      const merged1 = Object.assign(properties.properties);
      obj3.impression_id = getQuestImpressionId();
      obj2.properties = obj3;
      AnalyticsActions.trackQuestEvent(obj2);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  getQuestImpressionId = getQuestImpressionId(11646).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = getQuestImpressionId();
    obj2.properties = obj3;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items);
});
let closure_5 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = getQuestImpressionId(568).c(2);
  const obj = getQuestImpressionId(568);
  getQuestImpressionId = getQuestImpressionId(11646).useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      const obj2 = {};
      const merged = Object.assign(properties);
      const obj3 = {};
      const merged1 = Object.assign(properties.properties);
      obj3.impression_id = getQuestImpressionId();
      obj2.properties = obj3;
      AnalyticsActions.trackAdContentEvent(obj2);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  getQuestImpressionId = getQuestImpressionId(11646).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = getQuestImpressionId();
    obj2.properties = obj3;
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items);
});
let closure_6 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(2);
  const tmp2 = closure_5();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(questId) {
      questId = questId.questId;
      const questContent = questId.questContent;
      ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
      const adMetadataSealed = closure_0(7972).getAdMetadataSealed(sourceQuestContent);
      let obj = closure_0(7972);
      const adTrafficMetadataSealed = closure_0(7972).getAdTrafficMetadataSealed(sourceQuestContent, questId);
      let obj2 = closure_0(7972);
      let obj3 = closure_0(8008);
      const adUser = obj3.getAdUser(closure_0(8001).getQuestContentName(questContent));
      adUser.then((advertisingId) => {
        const obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
        const obj2 = {};
        const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_3, closure_1_4));
        const merged1 = Object.assign(getDeviceMetadataDefault());
        obj2.cta_name = cta_name;
        const tmp = closure_0;
        const tmp4 = questContent;
        obj2.click_id = v1.v4();
        advertisingId = null;
        if (null != advertisingId) {
          advertisingId = null;
          if (tmp2Result.isIOS()) {
            advertisingId = advertisingId.advertisingId;
          }
          tmp2Result = tmp2(1368);
        }
        obj2.apple_advertising_id = advertisingId;
        let advertisingId1 = null;
        if (null != advertisingId) {
          advertisingId1 = null;
          if (tmp2Result4.isAndroid()) {
            advertisingId1 = advertisingId.advertisingId;
          }
          tmp2Result4 = tmp2(1368);
        }
        obj2.android_advertising_id = advertisingId1;
        let tmp9 = null;
        if (null != closure_7) {
          tmp9 = closure_7;
        }
        obj2.metadata_sealed = tmp9;
        let tmp10 = null;
        if (null != closure_8) {
          tmp10 = closure_8;
        }
        obj2.traffic_metadata_sealed = tmp10;
        const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
        let uuid;
        if (currentQuestHomeSearchSession != null) {
          uuid = currentQuestHomeSearchSession.uuid;
        }
        if (uuid == null) {
          uuid = null;
        }
        obj2.search_session_id = uuid;
        obj.properties = obj2;
        obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
        const tmp2Result5 = QuestHomeSearchSession;
        obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
        obj.sourceQuestContent = sourceQuestContent;
        tmp(obj);
      });
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let tmp = closure_5();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useCallback((questId) => {
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    const adMetadataSealed = closure_0(7972).getAdMetadataSealed(sourceQuestContent);
    let obj = closure_0(7972);
    const adTrafficMetadataSealed = closure_0(7972).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    let obj2 = closure_0(7972);
    let obj3 = closure_0(8008);
    const adUser = obj3.getAdUser(closure_0(8001).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      const obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      const obj2 = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_3, closure_1_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj2.cta_name = cta_name;
      const tmp = closure_0;
      const tmp4 = questContent;
      obj2.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        tmp2Result = tmp2(1368);
      }
      obj2.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        tmp2Result4 = tmp2(1368);
      }
      obj2.android_advertising_id = advertisingId1;
      let tmp9 = null;
      if (null != closure_7) {
        tmp9 = closure_7;
      }
      obj2.metadata_sealed = tmp9;
      let tmp10 = null;
      if (null != closure_8) {
        tmp10 = closure_8;
      }
      obj2.traffic_metadata_sealed = tmp10;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj2.search_session_id = uuid;
      obj.properties = obj2;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result5 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items);
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(2);
  const tmp2 = closure_6();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(arg0) {
      ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
      ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
      let obj = adContentId(8008);
      const adUser = obj.getAdUser(adContentId(8001).getQuestContentName(questContent));
      adUser.then((advertisingId) => {
        const obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
        const obj2 = {};
        const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_5, closure_1_6));
        const merged1 = Object.assign(getDeviceMetadataDefault());
        obj2.cta_name = cta_name;
        const tmp = closure_0;
        const tmp4 = questContent;
        obj2.click_id = v1.v4();
        advertisingId = null;
        if (null != advertisingId) {
          advertisingId = null;
          if (tmp2Result.isIOS()) {
            advertisingId = advertisingId.advertisingId;
          }
          tmp2Result = tmp2(1368);
        }
        obj2.apple_advertising_id = advertisingId;
        let advertisingId1 = null;
        if (null != advertisingId) {
          advertisingId1 = null;
          if (tmp2Result4.isAndroid()) {
            advertisingId1 = advertisingId.advertisingId;
          }
          tmp2Result4 = tmp2(1368);
        }
        obj2.android_advertising_id = advertisingId1;
        const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
        let uuid;
        if (currentQuestHomeSearchSession != null) {
          uuid = currentQuestHomeSearchSession.uuid;
        }
        if (uuid == null) {
          uuid = null;
        }
        obj2.search_session_id = uuid;
        obj.properties = obj2;
        obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
        const tmp2Result5 = QuestHomeSearchSession;
        obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
        obj.sourceQuestContent = sourceQuestContent;
        tmp(obj);
      });
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let tmp = closure_6();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useCallback((arg0) => {
    ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let obj = adContentId(8008);
    const adUser = obj.getAdUser(adContentId(8001).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      const obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      const obj2 = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_5, closure_1_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj2.cta_name = cta_name;
      const tmp = closure_0;
      const tmp4 = questContent;
      obj2.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        tmp2Result = tmp2(1368);
      }
      obj2.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        tmp2Result4 = tmp2(1368);
      }
      obj2.android_advertising_id = advertisingId1;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj2.search_session_id = uuid;
      obj.properties = obj2;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result5 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
    const result = AnalyticsActions.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const result = AnalyticsActions.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  }, items);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        const result = AnalyticsActions.trackBountyCarouselEmptyStateViewed(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const result = AnalyticsActions.trackBountyCarouselEmptyStateViewed(tmp);
    }
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = tmp2;
export const useTrackQuestContentClickedWithImpression = tmp3;
export const useTrackAdContentEventWithImpression = tmp4;
export const useTrackAdContentClickedWithImpression = tmp5;
export const useQuestsEmbedFallbackAnalytics = tmp6;
export const useBountyCarouselEmptyStateAnalytics = tmp7;
export const useQuestHomeEntrypointAnalyticsEvents = ReactCompilerGating.isReactCompilerEnabled() ? ((questHomeHero) => {
  const cResult = questHomeHero(568).c(19);
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  const QuestContent = questHomeHero(5698).QuestContent;
  const tmp6 = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp6;
  if (cResult[0] !== tmp6) {
    const contentProperties = questHomeHero(8001).getContentProperties(tmp6);
    delete tmp[tmp2];
    cResult[0] = tmp6;
    cResult[1] = contentProperties;
    let tmp7 = contentProperties;
    const tmp3Result = questHomeHero(8001);
  } else {
    tmp7 = cResult[1];
  }
  properties = tmp7;
  if (cResult[2] === tmp7) {
    if (cResult[3] === tmp6) {
      if (cResult[4] === questHomeHero) {
        if (cResult[5] === shouldShowQuestHomeHeroContent) {
          let tmp9 = cResult[6];
        }
        AnalyticEvents = tmp9;
        if (cResult[7] !== tmp9) {
          const fn = function _() {
            closure_4(AnalyticEvents.QUEST_HOVER);
          };
          cResult[7] = tmp9;
          cResult[8] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp9) {
          const fn2 = function v() {
            closure_4(AnalyticEvents.QUEST_HOVER_OFF);
          };
          cResult[9] = tmp9;
          cResult[10] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              obj = closure_1(QUEST_HOME_ENTRYPOINT[15]);
              trackResult = obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
              return;
            }
          }
          cResult[11] = T;
          const tmp13 = T;
        } else {
          class T {
            constructor() {
              obj = closure_1(QUEST_HOME_ENTRYPOINT[15]);
              trackResult = obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
              return;
            }
          }
        }
        if (cResult[12] === tmp7) {
          class T {
            constructor() {
              obj = closure_1(QUEST_HOME_ENTRYPOINT[15]);
              trackResult = obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
              return;
            }
          }
          if (cResult[15] === tmp14) {
            class T {
              constructor() {
                obj = closure_1(QUEST_HOME_ENTRYPOINT[15]);
                trackResult = obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
                return;
              }
            }
          }
          let obj2 = { handleMouseEnter: tmp10, handleMouseLeave: tmp11, handleOnboardingPopoutRender: tmp13, handleEntrypointClick: tmp14 };
          cResult[15] = tmp14;
          cResult[16] = tmp10;
          cResult[17] = tmp11;
          cResult[18] = obj2;
        }
        const fn3 = function k() {
          const merged = Object.assign(closure_3);
          if (null != questHomeHero) {
            const obj3 = { ad_content_id: tmp2.id };
            let obj4 = obj3;
          } else {
            obj4 = {};
          }
          const merged1 = Object.assign(obj4);
          AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_CONTENT_CLICKED, { is_targeted: false });
        };
        cResult[12] = tmp7;
        cResult[13] = questHomeHero;
        cResult[14] = fn3;
        class C {
          constructor(arg0) {
            if (null != questHomeHero) {
              tmp2 = closure_1;
              if (closure_1) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj2 = closure_0(closure_2[5]);
                obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
                obj1.adContentId = tmp.id;
                tmp6 = closure_2;
                obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
                obj1.event = questHomeHero;
                tmp7 = closure_3;
                obj1.properties = closure_3;
                tmp8 = QUEST_HOME_ENTRYPOINT;
                obj1.sourceQuestContent = QUEST_HOME_ENTRYPOINT;
                trackAdContentEventResult = obj2.trackAdContentEvent(obj1);
              }
              return;
            }
            obj = closure_1(closure_2[15]);
            trackResult = obj.track(questHomeHero, closure_3);
            return;
          }
        }
      }
    }
  }
  class C {
    constructor(arg0) {
      if (null != questHomeHero) {
        tmp2 = closure_1;
        if (closure_1) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj2 = closure_0(closure_2[5]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          obj1.adContentId = tmp.id;
          tmp6 = closure_2;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          obj1.event = questHomeHero;
          tmp7 = closure_3;
          obj1.properties = closure_3;
          tmp8 = QUEST_HOME_ENTRYPOINT;
          obj1.sourceQuestContent = QUEST_HOME_ENTRYPOINT;
          trackAdContentEventResult = obj2.trackAdContentEvent(obj1);
        }
        return;
      }
      obj = closure_1(closure_2[15]);
      trackResult = obj.track(questHomeHero, closure_3);
      return;
    }
  }
  cResult[2] = tmp7;
  cResult[3] = tmp6;
  cResult[4] = questHomeHero;
  cResult[5] = shouldShowQuestHomeHeroContent;
  cResult[6] = C;
  tmp9 = C;
}) : ((questHomeHero) => {
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(5698).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const contentProperties = AnalyticsTypes.getContentProperties(closure_2);
    delete tmp[tmp2];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = memo.useCallback((event) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        const obj3 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent };
        AnalyticsActions.trackAdContentEvent(obj3);
      }
    }
    AnalyticsUtilsDefault.track(event, memo);
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
    shouldShowQuestHomeHeroContent(sourceQuestContent[15]).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  const callback4 = memo.useCallback(() => {
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      const obj3 = { ad_content_id: tmp2.id };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged1 = Object.assign(obj4);
    AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_CONTENT_CLICKED, { is_targeted: false });
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
});
