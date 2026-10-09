// Module ID: 12929
// Function ID: 12930
// Name: AnalyticsHooks
// Dependencies: [19, 1085, 558, 576, 9174, 7400, 7380, 7415, 7409, 7358, 1279, 1382, 7411, 5982, 5986, 1265, 2]

// Module 12929 (AnalyticsHooks)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import v1 from "v1" /* 1279 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7358 */;
import QuestDataUtils from "QuestDataUtils" /* 7380 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7409 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 7411 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, advertisingId, dependencyMap;

let AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackQuestEventWithImpression() {
  let getQuestImpressionId;
  let tmp3;
  let obj = getQuestImpressionId(576);
  const cResult = obj.c(2);
  let obj2 = getQuestImpressionId(9174);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      let obj2;
      const obj = { properties: obj2 };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      const merged = Object.assign(properties);
      obj2 = { impression_id: getQuestImpressionId() };
      const merged1 = Object.assign(properties.properties);
      trackQuestEvent(obj);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useTrackQuestEventWithImpression() {
  let getQuestImpressionId;
  let obj = getQuestImpressionId(9174);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
    AnalyticsActions;
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackQuestEvent(obj);
  }, items);
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackQuestContentClickedWithImpression() {
  let closure_0;
  let tmp3;
  let obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = closure_5();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(questId) {
      let closure_2;
      let closure_3;
      let closure_4;
      let closure_7;
      let closure_8;
      let cta_name;
      let sourceQuestContent;
      let trackGuildAndChannelMetadata;
      questId = questId.questId;
      const questContent = questId.questContent;
      ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
      let obj = closure_0(dependencyMap[6]);
      const adMetadataSealed = obj.getAdMetadataSealed(sourceQuestContent);
      let obj2 = closure_0(dependencyMap[6]);
      const adTrafficMetadataSealed = obj2.getAdTrafficMetadataSealed(sourceQuestContent, questId);
      let tmp = closure_0(dependencyMap[7]);
      const getAdUser = tmp.getAdUser;
      let obj3 = closure_0(dependencyMap[8]);
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
        const tmp = closure_0;
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
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useTrackQuestContentClickedWithImpression() {
  let tmp = closure_5();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((questId) => {
    let closure_2;
    let closure_3;
    let closure_4;
    let closure_7;
    let closure_8;
    let cta_name;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    let obj = closure_0(dependencyMap[6]);
    const adMetadataSealed = obj.getAdMetadataSealed(sourceQuestContent);
    let obj2 = closure_0(dependencyMap[6]);
    const adTrafficMetadataSealed = obj2.getAdTrafficMetadataSealed(sourceQuestContent, questId);
    let tmp = closure_0(dependencyMap[7]);
    const getAdUser = tmp.getAdUser;
    let obj3 = closure_0(dependencyMap[8]);
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
      const tmp = closure_0;
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
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackAdContentEventWithImpression() {
  let getQuestImpressionId;
  let tmp3;
  let obj = getQuestImpressionId(576);
  const cResult = obj.c(2);
  let obj2 = getQuestImpressionId(9174);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] !== getQuestImpressionId) {
    const fn = function t(properties) {
      let obj2;
      const obj = { properties: obj2 };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      const merged = Object.assign(properties);
      obj2 = { impression_id: getQuestImpressionId() };
      const merged1 = Object.assign(properties.properties);
      trackAdContentEvent(obj);
    };
    cResult[0] = getQuestImpressionId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useTrackAdContentEventWithImpression() {
  let getQuestImpressionId;
  let obj = getQuestImpressionId(9174);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return react.useCallback((properties) => {
    let obj2;
    const obj = { properties: obj2 };
    const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
    AnalyticsActions;
    const merged = Object.assign(properties);
    obj2 = { impression_id: getQuestImpressionId() };
    const merged1 = Object.assign(properties.properties);
    trackAdContentEvent(obj);
  }, items);
});
let closure_6 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackAdContentClickedWithImpression() {
  let closure_0;
  let tmp3;
  let obj = require("react");
  const cResult = obj.c(2);
  const tmp2 = closure_6();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(arg0) {
      let adCreativeType;
      let closure_1;
      let closure_2;
      let closure_4;
      let closure_7;
      let closure_8;
      let cta_name;
      let questContent;
      let relatedQuestId;
      let sourceQuestContent;
      let trackGuildAndChannelMetadata;
      ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
      ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
      let tmp = adContentId(dependencyMap[7]);
      const getAdUser = tmp.getAdUser;
      let obj = adContentId(dependencyMap[8]);
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
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useTrackAdContentClickedWithImpression() {
  let tmp = closure_6();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((arg0) => {
    let adCreativeType;
    let closure_1;
    let closure_2;
    let closure_4;
    let closure_7;
    let closure_8;
    let cta_name;
    let questContent;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    ({ adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let tmp = adContentId(dependencyMap[7]);
    const getAdUser = tmp.getAdUser;
    let obj = adContentId(dependencyMap[8]);
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
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
    const obj = AnalyticsActions;
    const result = obj.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    const obj = AnalyticsActions;
    const result = obj.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountyCarouselEmptyStateAnalytics(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        const obj = AnalyticsActions;
        const result = obj.trackBountyCarouselEmptyStateViewed(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useBountyCarouselEmptyStateAnalytics(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj = AnalyticsActions;
      const result = obj.trackBountyCarouselEmptyStateViewed(tmp);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  let closure_4;
  let sourceQuestContent;
  let tmp5;
  const tmp = questHomeHero;
  let tmp2 = dependencyMap;
  let obj = questHomeHero(576);
  const cResult = obj.c(19);
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  const QuestContent = questHomeHero(5982).QuestContent;
  const tmp4 = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp4;
  if (cResult[0] !== tmp4) {
    const tmpResult = tmp(7409);
    const contentProperties = tmpResult.getContentProperties(tmp4);
    delete tmp6["row_index"];
    cResult[0] = tmp4;
    cResult[1] = contentProperties;
    tmp5 = contentProperties;
  } else {
    tmp5 = cResult[1];
  }
  properties = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === questHomeHero) {
        let tmp7;
        let tmp8;
        let tmp9;
        let tmp11;
        if (cResult[5] === shouldShowQuestHomeHeroContent) {
          tmp7 = cResult[6];
        }
        AnalyticEvents = tmp7;
        if (cResult[7] !== tmp7) {
          const fn = function _() {
            closure_4(AnalyticEvents.QUEST_HOVER);
          };
          cResult[7] = tmp7;
          cResult[8] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp7) {
          const fn2 = function v() {
            closure_4(AnalyticEvents.QUEST_HOVER_OFF);
          };
          cResult[9] = tmp7;
          cResult[10] = fn2;
          tmp9 = fn2;
        } else {
          tmp9 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
          cResult[11] = T;
          tmp11 = T;
        } else {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
        }
        if (cResult[12] === tmp5) {
          class T {
            constructor() {
              const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
              obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
            }
          }
          if (cResult[15] === tmp12) {
            class T {
              constructor() {
                const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
                obj.track(closure_4.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
              }
            }
          }
          let obj2 = { handleMouseEnter: tmp8, handleMouseLeave: tmp9, handleOnboardingPopoutRender: tmp11, handleEntrypointClick: tmp12 };
          cResult[15] = tmp12;
          class I {
            constructor() {
              let obj3;
              const track = AnalyticsUtilsDefault.track;
              const QUEST_CONTENT_CLICKED = AnalyticEvents.QUEST_CONTENT_CLICKED;
              const obj = { is_targeted: false };
              AnalyticsUtilsDefault;
              const merged = Object.assign(properties);
              if (null != questHomeHero) {
                obj3 = { ad_content_id: tmp3.id };
                const obj2 = { ad_content_id: tmp3.id };
              } else {
                obj3 = {};
              }
              const merged1 = Object.assign(obj3);
              track(QUEST_CONTENT_CLICKED, obj);
            }
          }
          cResult[17] = tmp9;
          cResult[18] = obj2;
        }
        class I {
          constructor() {
            let obj3;
            const track = AnalyticsUtilsDefault.track;
            const QUEST_CONTENT_CLICKED = AnalyticEvents.QUEST_CONTENT_CLICKED;
            const obj = { is_targeted: false };
            AnalyticsUtilsDefault;
            const merged = Object.assign(properties);
            if (null != questHomeHero) {
              obj3 = { ad_content_id: tmp3.id };
              const obj2 = { ad_content_id: tmp3.id };
            } else {
              obj3 = {};
            }
            const merged1 = Object.assign(obj3);
            track(QUEST_CONTENT_CLICKED, obj);
          }
        }
        cResult[12] = tmp5;
        cResult[13] = questHomeHero;
        cResult[14] = I;
        class C {
          constructor(event) {
            if (null != questHomeHero) {
              const tmp2 = shouldShowQuestHomeHeroContent;
              if (tmp2) {
                const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties, sourceQuestContent };
                const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
                AnalyticsActions;
                trackAdContentEvent(obj2);
              }
            }
            const obj = AnalyticsUtilsDefault;
            obj.track(event, properties);
          }
        }
      }
    }
  }
  class C {
    constructor(event) {
      if (null != questHomeHero) {
        const tmp2 = shouldShowQuestHomeHeroContent;
        if (tmp2) {
          const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties, sourceQuestContent };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          trackAdContentEvent(obj2);
        }
      }
      const obj = AnalyticsUtilsDefault;
      obj.track(event, properties);
    }
  }
  cResult[2] = tmp5;
  cResult[3] = tmp4;
  cResult[4] = questHomeHero;
  cResult[5] = shouldShowQuestHomeHeroContent;
  cResult[6] = C;
  tmp7 = C;
}) : (function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  let sourceQuestContent;
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(5982).QuestContent;
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
    const obj = shouldShowQuestHomeHeroContent(sourceQuestContent[15]);
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
});
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = tmp2;
export const useTrackQuestContentClickedWithImpression = tmp3;
export const useTrackAdContentEventWithImpression = tmp4;
export const useTrackAdContentClickedWithImpression = tmp5;
export const useQuestsEmbedFallbackAnalytics = tmp6;
export const useBountyCarouselEmptyStateAnalytics = tmp7;
export const useQuestHomeEntrypointAnalyticsEvents = tmp8;
