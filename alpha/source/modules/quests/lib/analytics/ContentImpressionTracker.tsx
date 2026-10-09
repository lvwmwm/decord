// Module ID: 12934
// Function ID: 12935
// Name: ContentImpressionTracker
// Dependencies: [5, 19, 7384, 7414, 1085, 21, 1279, 7421, 7380, 5986, 12910, 12911, 12914, 12912, 7415, 7409, 1382, 7358, 7412, 7390, 9150, 7420, 7410, 7391, 7400, 7411, 5726, 5731, 558, 576, 9174, 504, 5393, 9175, 2]

// Module 12934 (ContentImpressionTracker)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5726 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import QuestDataUtils from "QuestDataUtils" /* 7380 */;
import getQuestLogger from "getQuestLogger" /* 7391 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7409 */;
import captureAdUserAction4 from "captureAdUserAction" /* 7410 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7420 */;
import IosAttributionEligibility from "IosAttributionEligibility" /* 12910 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 12911 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 12912 */;
import IosAttributionMetrics from "IosAttributionMetrics" /* 12914 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7384 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 7414 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ HEARTBEAT_SECONDS: metroRequire, MIN_QUEST_VIEW_TIME_SECONDS: metroImportDefault, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: metroImportAll } = ContentImpressionTrackerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const set = new Set();
class QuestContentImpression {
  constructor(arg0) {
    let adContentIds;
    let adCreativeType;
    let isQuestEnrollmentBlocked;
    let minViewTimeSeconds;
    let noFillDecision;
    let onImpression;
    let questContent;
    let questContentPosition;
    let questContentRowIndex;
    let relatedQuestId;
    let sourceQuestContent;
    let trackGuildAndChannelMetadata;
    let triggeredByStatusChange;
    let obj4 = Object.create(new.target.prototype);
    obj4.isRunning = false;
    obj4.iosAttributionRegistered = false;
    obj4.trackViewedPlacement = function trackViewedPlacement(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj4.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const tmpResult = QuestDataUtils;
        result = tmpResult.isBillableQuestContent(tmp3.questContent, tmp3.entity.adCreativeType);
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        set.add("" + item + "_" + questPlacementFromQuestContent);
      }
    };
    obj4.shouldExtendSession = function shouldExtendSession(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj4.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !set.has("" + item + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        const tmpResult = QuestDataUtils;
        result = tmpResult.isBillableQuestContent(tmp3.questContent, tmp3.entity.adCreativeType);
      }
      return result;
    };
    obj4.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(item, adProvenanceMetadataSealed) {
      if (!obj4.iosAttributionRegistered) {
        const obj = IosAttributionEligibility;
        if (obj.isIosAttributionEligible()) {
          const tmp2Result = IosAttributionNativeModule;
          const activeIosAttributionFramework = tmp2Result.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              const tmp2Result6 = IosAttributionEligibility;
              if (tmp2Result6.isCampaignIosAttributionEnabled(obj4.sourceQuestContent, item)) {
                const obj2 = { impressionId: obj4.id, metadataSealed: adProvenanceMetadataSealed, framework: activeIosAttributionFramework };
                const tmp2Result7 = IosAttributionImpressionRegistry;
                const result = tmp2Result7.registerViewThroughImpression(obj2);
                obj4.iosAttributionRegistered = true;
              } else {
                const tmp2Result8 = IosAttributionMetrics;
                const result1 = tmp2Result8.trackIosAttributionImpression(tmp2(12914).IosAttributionImpressionResult.NOT_SKAN_ENABLED, activeIosAttributionFramework, tmp.id);
              }
            } else {
              const tmp2Result9 = IosAttributionMetrics;
              const result2 = tmp2Result9.trackIosAttributionImpression(tmp2(12914).IosAttributionImpressionResult.NO_METADATA, activeIosAttributionFramework, tmp.id);
            }
          } else {
            const tmp2Result10 = IosAttributionMetrics;
            const result3 = tmp2Result10.trackIosAttributionImpression(tmp2(12914).IosAttributionImpressionResult.NO_FRAMEWORK, activeIosAttributionFramework, tmp.id);
          }
        }
      }
    };
    obj4.onMinViewTimeReached = _asyncToGenerator(async (arg0, value) => {
      let advertisingId;
      let advertisingId1;
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = undefined;
              let obj8;
              let obj9;
              const getAdUser = tmp(c2[14]).getAdUser;
              const tmp48 = tmp(c2[14]);
              let obj10 = tmp(c2[15]);
              c2 = 1;
              c3 = 1;
              let obj6 = { value: getAdUser(obj10.getQuestContentName(obj4.questContent)), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            obj8 = { trackGuildAndChannelMetadata: closure_129_0.trackGuildAndChannelMetadata, sourceQuestContent: closure_129_0.sourceQuestContent };
            obj9 = { min_view_time_seconds: closure_129_0.minViewTimeSeconds, min_viewport_percentage: closure_129_0.minViewportPercentage, triggered_by_status_change: closure_129_0.triggeredByStatusChange, apple_advertising_id: advertisingId, android_advertising_id: advertisingId1 };
            advertisingId = null;
            if (null != tmp) {
              const tmp6 = tmp;
              let obj = tmp(c2[16]);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = tmp.advertisingId;
              }
            }
            advertisingId1 = null;
            if (null != tmp) {
              const obj2 = tmp(c2[16]);
              advertisingId1 = null;
              if (obj2.isAndroid()) {
                advertisingId1 = tmp.advertisingId;
              }
            }
            let merged = Object.assign(tmp4(c2[17])());
            let obj3 = tmp(c2[18]);
            let merged1 = Object.assign(obj3.getBrandSafetyContext(closure_129_0.questContent));
            const adContentIds = closure_129_0.entity.adContentIds;
            const item = adContentIds.forEach((item, index) => {
              let adTrafficMetadataSealed;
              let obj12;
              let obj16;
              let uuid;
              const obj = obj4(closure_3_2[8]);
              let adMetadataSealed = obj.getAdMetadataSealed(adUser.sourceQuestContent, item);
              const shouldExtendSessionResult = adUser.shouldExtendSession(item);
              adUser.trackViewedPlacement(item);
              const adCreativeType = adUser.entity.adCreativeType;
              const migrateQuestContentViewedToCaptureAdUserAction = adUser.migrateQuestContentViewedToCaptureAdUserAction;
              const QUEST = obj4(closure_3_2[9]).AdCreativeType.QUEST;
              if (migrateQuestContentViewedToCaptureAdUserAction) {
                if (adCreativeType === QUEST) {
                  const quest = closure_3_5.getQuest(tmp33);
                  let isQuestExpiredResult = null == quest;
                  if (!isQuestExpiredResult) {
                    const tmpResult = obj4(closure_3_2[19]);
                    isQuestExpiredResult = tmpResult.isQuestExpired(quest);
                  }
                  if (!isQuestExpiredResult) {
                    const items = [adUser.entity.adContentIds[index]];
                    const tmpResult18 = obj4(closure_3_2[20]);
                    tmpResult18.markAdContentSeen(obj4(closure_3_2[9]).AdCreativeType.QUEST, items);
                  }
                }
                const tmpResult19 = obj4(closure_3_2[8]);
                const result = tmpResult19.isBillableQuestContent(obj2.questContent, obj2.entity.adCreativeType);
                const AdUserActionType = tmp(tmp2[21]).AdUserActionType;
                const obj3 = { type: result ? AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION : AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, minViewTimeSeconds: null, minViewportPercentage: null, isQuestEnrollmentBlocked: null, shouldExtendSession: shouldExtendSessionResult, adUser, questContentPosition: null, questContentRowIndex: null, trackGuildAndChannelMetadata: null };
                ({ questContent: obj14.surfaceId, sourceQuestContent: obj14.sourceQuestContent, id: obj14.impressionId, triggeredByStatusChange: obj14.triggeredByStatusChange, minViewTimeSeconds: obj14.minViewTimeSeconds, minViewportPercentage: obj14.minViewportPercentage, isQuestEnrollmentBlocked: obj14.isQuestEnrollmentBlocked } = adUser);
                ({ questContentPosition: obj14.questContentPosition, questContentRowIndex: obj14.questContentRowIndex, trackGuildAndChannelMetadata: obj14.trackGuildAndChannelMetadata } = adUser);
                if (adUser.entity.adCreativeType === obj4(closure_3_2[9]).AdCreativeType.QUEST) {
                  const tmpResult20 = obj4(closure_3_2[22]);
                  obj4 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index] };
                  const captureAdUserAction2 = tmpResult20.captureAdUserAction;
                  const merged = Object.assign(obj3);
                  captureAdUserAction2(obj4);
                } else if (null != adUser.entity.relatedQuestId) {
                  const obj5 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index], relatedQuestId: adUser.entity.relatedQuestId };
                  const captureAdUserAction = obj4(closure_3_2[22]).captureAdUserAction;
                  obj4(closure_3_2[22]);
                  const merged1 = Object.assign(obj3);
                  captureAdUserAction(obj5);
                } else {
                  let obj8;
                  const obj6 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index] };
                  const captureAdUserAction3 = obj4(closure_3_2[22]).captureAdUserAction;
                  obj4(closure_3_2[22]);
                  const merged2 = Object.assign(obj3);
                  if (null != adUser.entity.noFillDecision) {
                    obj8 = { noFillDecision: adUser.entity.noFillDecision };
                    const obj7 = { noFillDecision: adUser.entity.noFillDecision };
                  } else {
                    obj8 = {};
                  }
                  const merged3 = Object.assign(obj8);
                  captureAdUserAction3(obj6);
                }
                const tmpResult23 = obj4(closure_3_2[23]);
                const questLogger = tmpResult23.getQuestLogger();
                const info2 = questLogger.info;
                const minViewTimeSeconds2 = obj2.minViewTimeSeconds;
                const _HermesInternal2 = HermesInternal;
                const obj9 = { impressionId: adUser.id };
                const tmpResult24 = obj4(closure_3_2[15]);
                info2("" + item + " ad content viewed for at least " + minViewTimeSeconds2 + "s at " + tmpResult24.getQuestContentName(adUser.questContent), obj9);
              } else if (adCreativeType === QUEST) {
                const quest1 = closure_3_5.getQuest(tmp6);
                let isQuestExpiredResult1 = null == quest1;
                if (!isQuestExpiredResult1) {
                  const tmpResult25 = obj4(closure_3_2[19]);
                  isQuestExpiredResult1 = tmpResult25.isQuestExpired(quest1);
                }
                if (!isQuestExpiredResult1) {
                  const items1 = [adUser.entity.adContentIds[index]];
                  const tmpResult26 = obj4(closure_3_2[20]);
                  tmpResult26.markAdContentSeen(obj4(closure_3_2[9]).AdCreativeType.QUEST, items1);
                }
                const tmpResult27 = obj4(closure_3_2[23]);
                const questLogger1 = tmpResult27.getQuestLogger();
                let questName;
                const info = questLogger1.info;
                if (quest1 != null) {
                  questName = quest1.config.messages.questName;
                }
                if (questName == null) {
                  questName = tmp6;
                }
                const minViewTimeSeconds = obj2.minViewTimeSeconds;
                const _HermesInternal = HermesInternal;
                const obj10 = { impressionId: adUser.id };
                const tmpResult28 = obj4(closure_3_2[15]);
                info("" + questName + " Quest viewed for at least " + minViewTimeSeconds + "s at " + tmpResult28.getQuestContentName(adUser.questContent), obj10);
                const obj11 = { shouldExtendSession: shouldExtendSessionResult, questId: adUser.entity.adContentIds[index], event: constants.QUEST_CONTENT_VIEWED, properties: obj12 };
                const trackQuestEvent = obj4(closure_3_2[24]).trackQuestEvent;
                obj4(closure_3_2[24]);
                const merged4 = Object.assign(closure_1_1);
                obj12 = { metadata_sealed: adMetadataSealed, search_session_id: uuid, traffic_metadata_sealed: adTrafficMetadataSealed };
                const merged5 = Object.assign(closure_1_2);
                const merged6 = Object.assign(obj2.commonProperties());
                if (adMetadataSealed == null) {
                  adMetadataSealed = null;
                }
                const tmpResult30 = obj4(closure_3_2[25]);
                const currentQuestHomeSearchSession = tmpResult30.getCurrentQuestHomeSearchSession();
                uuid = undefined;
                if (currentQuestHomeSearchSession != null) {
                  uuid = currentQuestHomeSearchSession.uuid;
                }
                if (uuid == null) {
                  uuid = null;
                }
                let id;
                const getAdTrafficMetadataSealed = obj4(closure_3_2[8]).getAdTrafficMetadataSealed;
                const sourceQuestContent = obj2.sourceQuestContent;
                obj4(closure_3_2[8]);
                if (quest1 != null) {
                  id = quest1.id;
                }
                adTrafficMetadataSealed = getAdTrafficMetadataSealed(sourceQuestContent, id);
                if (adTrafficMetadataSealed == null) {
                  adTrafficMetadataSealed = null;
                }
                trackQuestEvent(obj11);
              } else {
                const tmpResult32 = obj4(closure_3_2[23]);
                const questLogger2 = tmpResult32.getQuestLogger();
                const info3 = questLogger2.info;
                const minViewTimeSeconds3 = obj2.minViewTimeSeconds;
                const _HermesInternal3 = HermesInternal;
                const obj13 = { impressionId: adUser.id };
                const tmpResult33 = obj4(closure_3_2[15]);
                info3("" + adUser.entity.adContentIds[index] + " ad content viewed for at least " + minViewTimeSeconds3 + "s at " + tmpResult33.getQuestContentName(adUser.questContent), obj13);
                const obj15 = { shouldExtendSession: shouldExtendSessionResult, adContentId: adUser.entity.adContentIds[index], relatedQuestId: adUser.entity.relatedQuestId, noFillDecision: adUser.entity.noFillDecision, adCreativeType: adUser.entity.adCreativeType, event: constants.QUEST_CONTENT_VIEWED, properties: obj16 };
                const trackAdContentEvent = obj4(closure_3_2[24]).trackAdContentEvent;
                obj4(closure_3_2[24]);
                const merged7 = Object.assign(closure_1_1);
                obj16 = {};
                const merged8 = Object.assign(closure_1_2);
                const merged9 = Object.assign(obj2.commonProperties());
                trackAdContentEvent(obj15);
              }
            });
            if (closure_129_0.onImpressionCallback != null) {
              closure_129_0.onImpressionCallback();
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          c3 = 3;
          throw tmp33;
        }
      }
    });
    obj4.beat = function beat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let rounded;
      let obj;
      let obj2;
      if (null != flag.lastBeatTime) {
        const _Math = Math;
        const _Date = Date;
        rounded = Math.round(Date.now() - tmp.lastBeatTime);
        obj = { trackGuildAndChannelMetadata: null, sourceQuestContent: null };
        ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } = flag);
        obj2 = { is_termination_beat: flag, viewed_time_ms: rounded, triggered_by_status_change: tmp.triggeredByStatusChange };
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((item, index) => {
          let obj7;
          if (obj4.entity.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
            const quest = QuestStore.getQuest(tmp19);
            const tmpResult = getQuestLogger;
            const questLogger = tmpResult.getQuestLogger();
            let questName;
            const info = questLogger.info;
            if (quest != null) {
              questName = quest.config.messages.questName;
            }
            if (questName == null) {
              questName = tmp19;
            }
            let str7 = "";
            if (flag) {
              str7 = "terminal ";
            }
            const _HermesInternal2 = HermesInternal;
            obj2 = { impressionId: obj4.id };
            info("" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat", obj2);
            const obj3 = { questId: obj4.entity.adContentIds[index], event: AnalyticEvents.QUEST_CONTENT_VIEW_TIME, properties: obj4 };
            const trackQuestEvent = AnalyticsActions.trackQuestEvent;
            AnalyticsActions;
            const merged = Object.assign(obj);
            obj4 = {};
            const merged1 = Object.assign(obj2);
            const merged2 = Object.assign(obj.commonProperties());
            trackQuestEvent(obj3);
          } else {
            const tmpResult5 = getQuestLogger;
            const questLogger1 = tmpResult5.getQuestLogger();
            let str = "";
            const info2 = questLogger1.info;
            if (flag) {
              str = "terminal ";
            }
            const _HermesInternal = HermesInternal;
            const obj5 = { impressionId: obj4.id };
            info2("" + obj4.entity.adContentIds[index] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj5);
            const obj6 = { adContentId: obj4.entity.adContentIds[index], relatedQuestId: obj4.entity.relatedQuestId, noFillDecision: obj4.entity.noFillDecision, adCreativeType: obj4.entity.adCreativeType, event: AnalyticEvents.QUEST_CONTENT_VIEW_TIME, properties: obj7 };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            const merged3 = Object.assign(obj);
            obj7 = {};
            const merged4 = Object.assign(obj2);
            const merged5 = Object.assign(obj.commonProperties());
            trackAdContentEvent(obj6);
          }
        });
      }
      flag.lastBeatTime = Date.now();
    };
    obj4.commonProperties = function commonProperties() {
      const obj = { impression_id: obj4.id, is_quest_enrollment_blocked: obj4.isQuestEnrollmentBlocked };
      const obj2 = AnalyticsTypes;
      const merged = Object.assign(obj2.getContentProperties(obj4.questContent, obj4.questContentPosition, obj4.questContentRowIndex));
      return obj;
    };
    obj4.clone = function clone(triggeredByStatusChange) {
      triggeredByStatusChange = triggeredByStatusChange.triggeredByStatusChange;
      obj4.stop();
      const obj = { questContent: obj4.questContent, questContentRowIndex: obj4.questContentRowIndex, questContentPosition: obj4.questContentPosition, trackGuildAndChannelMetadata: obj4.trackGuildAndChannelMetadata, triggeredByStatusChange, isQuestEnrollmentBlocked: obj4.isQuestEnrollmentBlocked, onImpression: obj4.onImpressionCallback, sourceQuestContent: obj4.sourceQuestContent };
      const merged = Object.assign(obj4.entity);
      return new QuestContentImpression(obj);
    };
    obj4.start = function start() {
      let closure_0;
      let items;
      obj4.stop(false);
      obj4.lastBeatTime = Date.now();
      obj4.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * closure_1_6);
      obj4.minViewTimeReachedTimeoutId = window.setTimeout(obj4.onMinViewTimeReached, 1000 * obj4.minViewTimeSeconds);
      obj4 = { trackGuildAndChannelMetadata: obj4.trackGuildAndChannelMetadata, sourceQuestContent: obj4.sourceQuestContent, isRunning: true };
      let closure_1 = { triggered_by_status_change: obj4.triggeredByStatusChange };
      const adContentIds = obj4.entity.adContentIds;
      const item = adContentIds.forEach((item, index) => {
        let adTrafficMetadataSealed;
        let obj13;
        let obj9;
        const obj = QuestDataUtils;
        let adMetadataSealed = obj.getAdMetadataSealed(obj4.sourceQuestContent, item);
        const obj3 = QuestDataUtils;
        const result = obj4.maybeRegisterIosAttributionImpression(item, obj3.getAdProvenanceMetadataSealed(obj4.sourceQuestContent, item));
        const adCreativeType = obj4.entity.adCreativeType;
        const migrateQuestContentLoadedToCaptureAdUserAction = obj4.migrateQuestContentLoadedToCaptureAdUserAction;
        const QUEST = AdCreativeType.AdCreativeType.QUEST;
        if (migrateQuestContentLoadedToCaptureAdUserAction) {
          let obj5;
          if (adCreativeType === QUEST) {
            obj4 = { adCreativeType: obj4.entity.adCreativeType, adCreativeId: obj4.entity.adContentIds[index] };
            obj5 = obj4;
          } else {
            obj5 = { adCreativeType: obj4.entity.adCreativeType, adCreativeId: obj4.entity.adContentIds[index], relatedQuestId: obj4.entity.relatedQuestId, noFillDecision: obj4.entity.noFillDecision };
          }
          const obj6 = { type: captureAdUserActionTypes.AdUserActionType.END_CONTENT_LOAD, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, trackGuildAndChannelMetadata: null, questContentPosition: null, questContentRowIndex: null };
          const captureAdUserAction = captureAdUserAction4.captureAdUserAction;
          captureAdUserAction4;
          ({ questContent: obj11.surfaceId, sourceQuestContent: obj11.sourceQuestContent, id: obj11.impressionId, triggeredByStatusChange: obj11.triggeredByStatusChange, trackGuildAndChannelMetadata: obj11.trackGuildAndChannelMetadata, questContentPosition: obj11.questContentPosition, questContentRowIndex: obj11.questContentRowIndex } = obj4);
          const merged = Object.assign(obj5);
          captureAdUserAction(obj6);
        } else if (adCreativeType === QUEST) {
          const quest = QuestStore.getQuest(tmp5);
          const tmpResult8 = getQuestLogger;
          const questLogger = tmpResult8.getQuestLogger();
          let questName;
          const info = questLogger.info;
          if (quest != null) {
            questName = quest.config.messages.questName;
          }
          if (questName == null) {
            questName = tmp5;
          }
          const _HermesInternal = HermesInternal;
          const obj7 = { impressionId: obj4.id };
          const tmpResult9 = AnalyticsTypes;
          info("" + questName + " Quest became visible at " + tmpResult9.getQuestContentName(obj4.questContent), obj7);
          const obj8 = { questId: obj4.entity.adContentIds[index], event: AnalyticEvents.QUEST_CONTENT_LOADED, properties: obj9 };
          const trackQuestEvent = AnalyticsActions.trackQuestEvent;
          AnalyticsActions;
          const merged1 = Object.assign(closure_0);
          obj9 = { metadata_sealed: adMetadataSealed, traffic_metadata_sealed: adTrafficMetadataSealed };
          const merged2 = Object.assign(closure_1);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          const merged3 = Object.assign(obj2.commonProperties());
          let id;
          const getAdTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed;
          const sourceQuestContent = obj2.sourceQuestContent;
          QuestDataUtils;
          if (quest != null) {
            id = quest.id;
          }
          adTrafficMetadataSealed = getAdTrafficMetadataSealed(sourceQuestContent, id);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          trackQuestEvent(obj8);
        } else {
          const tmpResult12 = getQuestLogger;
          const questLogger1 = tmpResult12.getQuestLogger();
          const info2 = questLogger1.info;
          const _HermesInternal2 = HermesInternal;
          const obj10 = { impressionId: obj4.id };
          const tmpResult13 = AnalyticsTypes;
          info2("" + obj4.entity.adContentIds[index] + " ad content became visible at " + tmpResult13.getQuestContentName(obj4.questContent), obj10);
          const obj12 = { adContentId: obj4.entity.adContentIds[index], relatedQuestId: obj4.entity.relatedQuestId, noFillDecision: obj4.entity.noFillDecision, adCreativeType: obj4.entity.adCreativeType, event: AnalyticEvents.QUEST_CONTENT_LOADED, properties: obj13 };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          const merged4 = Object.assign(closure_0);
          obj13 = {};
          const merged5 = Object.assign(closure_1);
          const merged6 = Object.assign(obj2.commonProperties());
          trackAdContentEvent(obj12);
        }
      });
      const tmp3 = MonitoringAgentDefault;
      let obj = { name: obj4(dependencyMap[27]).MetricEvents.QUEST_CONTENT_IMPRESSION, tags: items };
      const increment = tmp3.increment;
      const obj2 = obj4(dependencyMap[15]);
      items = ["quest_content:" + obj2.getQuestContentName(obj4.questContent)];
      increment(obj);
    };
    obj4.stop = function stop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        obj4.beat(true);
      }
      obj4.lastBeatTime = undefined;
      clearInterval(obj4.heartbeatTimeoutId);
      clearTimeout(obj4.minViewTimeReachedTimeoutId);
      obj4.isRunning = false;
      const obj = IosAttributionImpressionRegistry;
      obj.endImpression(obj4.id);
    };
    ({ adContentIds, adCreativeType, questContent, minViewTimeSeconds, relatedQuestId, noFillDecision, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = arg0);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = closure_7;
    }
    ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = arg0);
    const tmp2 = obj4;
    let tmp3 = dependencyMap;
    let obj = obj4(1279);
    obj4.id = obj.v4();
    obj4.questContent = questContent;
    obj4.questContentPosition = questContentPosition;
    obj4.minViewTimeSeconds = minViewTimeSeconds;
    obj4.minViewportPercentage = minViewportPercentage;
    obj4.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj4.triggeredByStatusChange = triggeredByStatusChange;
    obj4.questContentRowIndex = questContentRowIndex;
    obj4.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
    obj4.onImpressionCallback = onImpression;
    obj4.sourceQuestContent = sourceQuestContent;
    let obj2 = obj4(7421);
    obj4.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(obj4(7421).AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED, "quest_content_impression");
    const tmp4 = obj4(7421);
    const shouldMigrateToAdAnalyticsInterface = tmp4.shouldMigrateToAdAnalyticsInterface;
    let obj3 = obj4(7380);
    let result = obj3.isBillableQuestContent(questContent, adCreativeType);
    const AdAnalyticsInterfaceExperimentStep = obj4(7421).AdAnalyticsInterfaceExperimentStep;
    obj4.migrateQuestContentViewedToCaptureAdUserAction = shouldMigrateToAdAnalyticsInterface(result ? AdAnalyticsInterfaceExperimentStep.STEP_5_VIEWED_IMPRESSION : AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_content_impression");
    if (adCreativeType === tmp2(5986).AdCreativeType.QUEST) {
      let obj5 = { adContentIds, adCreativeType };
      obj4.entity = obj5;
    } else {
      let obj8 = { adContentIds, adCreativeType, relatedQuestId, noFillDecision };
      obj4.entity = obj8;
    }
    return obj4;
  }
  getId() {
    return this.id;
  }
  getQuestContentPosition() {
    return this.questContentPosition;
  }
}
const prototype = QuestContentImpression.prototype;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestContentImpressionTracker(visible) {
  let focusedChanged;
  let reference;
  let tmp10;
  let tmp13;
  let tmp8;
  let tmp9;
  let visibleChanged;
  _require = visible;
  const tmp = _require;
  let tmp2 = visibleChanged;
  let obj = require("react");
  const cResult = obj.c(28);
  visible = visible.visible;
  visibleChanged = visible.visibleChanged;
  const focused = visible.focused;
  ({ reference, focusedChanged } = visible);
  const sourceQuestContent = visible.sourceQuestContent;
  const obj2 = require("ContentImpressionTrackerHooks");
  const questStatusChanged = obj2.useQuestStatusChanged(visible);
  let relatedQuestId;
  if (visible.adCreativeType !== require("AdCreativeType").AdCreativeType.QUEST) {
    relatedQuestId = visible.relatedQuestId;
  }
  let noFillDecision;
  if (visible.adCreativeType !== tmp(tmp2[9]).AdCreativeType.QUEST) {
    noFillDecision = visible.noFillDecision;
  }
  const obj3 = focusedChanged;
  const ref = focusedChanged.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [sourceQuestContent];
    const fn = function u() {
      return null != sourceQuestContent.questEnrollmentBlockedUntil;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[31]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      return () => {
        if (null != ref.current) {
          const current = ref.current;
          current.stop();
        }
      };
    };
    cResult[3] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
  }
  visible(tmp2[32])(tmp13);
  if (cResult[4] === focused) {
    if (cResult[5] === focusedChanged) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === noFillDecision) {
          if (cResult[8] === visible.adContentIds) {
            if (cResult[9] === visible.adCreativeType) {
              if (cResult[10] === visible.minViewTimeSeconds) {
                if (cResult[11] === visible.onImpression) {
                  if (cResult[12] === visible.questContent) {
                    if (cResult[13] === visible.questContentPosition) {
                      if (cResult[14] === visible.questContentRowIndex) {
                        if (cResult[15] === visible.trackGuildAndChannelMetadata) {
                          if (cResult[16] === questStatusChanged) {
                            if (cResult[17] === relatedQuestId) {
                              if (cResult[18] === sourceQuestContent) {
                                if (cResult[19] === visible) {
                                  let tmp15;
                                  let tmp16;
                                  if (cResult[20] === visibleChanged) {
                                    tmp15 = cResult[21];
                                    tmp16 = cResult[22];
                                  }
                                  const effect = obj3.useEffect(tmp15, tmp16);
                                  if (cResult[23] === visible.children) {
                                    let tmp18;
                                    let tmp20;
                                    if (cResult[24] === reference) {
                                      tmp18 = cResult[25];
                                    }
                                    if (cResult[26] !== tmp18) {
                                      const obj4 = { value: ref, children: tmp18 };
                                      const tmp22 = stateFromStores(tmp(tmp2[33]).QuestImpressionContext.Provider, obj4);
                                      cResult[26] = tmp18;
                                      cResult[27] = tmp22;
                                      tmp20 = tmp22;
                                    } else {
                                      tmp20 = cResult[27];
                                    }
                                    return tmp20;
                                  }
                                  const childrenResult = visible.children(reference, ref);
                                  cResult[23] = visible.children;
                                  cResult[24] = reference;
                                  cResult[25] = childrenResult;
                                  tmp18 = childrenResult;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const fn3 = function q() {
    let tmp2 = visibleChanged;
    let tmp4 = tmp3;
    if (!tmp4) {
      if (!tmp2) {
        tmp2 = focusedChanged;
      }
      if (tmp2) {
        tmp2 = !tmp;
      }
      tmp4 = tmp2;
    }
    if (!tmp4) {
      tmp4 = questStatusChanged;
    }
    if (tmp4) {
      tmp4 = null != ref.current;
    }
    if (tmp4) {
      const current = ref.current;
      current.stop();
    }
    if ((visibleChanged || focusedChanged || questStatusChanged) && (focused && visible)) {
      let tmp15;
      const obj = { isQuestEnrollmentBlocked: stateFromStores, minViewTimeSeconds: null, onImpression: null, questContent: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent, trackGuildAndChannelMetadata: visible.trackGuildAndChannelMetadata, triggeredByStatusChange: questStatusChanged };
      ({ minViewTimeSeconds: obj.minViewTimeSeconds, onImpression: obj.onImpression, questContent: obj.questContent, questContentPosition: obj.questContentPosition, questContentRowIndex: obj.questContentRowIndex } = visible);
      if (visible.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
        const obj5 = {};
        const merged = Object.assign(obj);
        ({ adContentIds: obj3.adContentIds, adCreativeType: obj3.adCreativeType } = visible);
        const self2 = this;
        ref.current = new QuestContentImpression(obj5);
        tmp15 = ref;
      } else {
        tmp15 = ref;
        const obj6 = { relatedQuestId, noFillDecision };
        const merged1 = Object.assign(obj);
        ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = visible);
        const self = this;
        ref.current = new QuestContentImpression(obj6);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  };
  const items2 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , , , ];
  ({ adContentIds: arr3[4], onImpression: arr3[5], questContent: arr3[6], questContentPosition: arr3[7], questContentRowIndex: arr3[8], trackGuildAndChannelMetadata: arr3[9] } = visible);
  items2[10] = questStatusChanged;
  items2[11] = visible.minViewTimeSeconds;
  items2[12] = stateFromStores;
  items2[13] = sourceQuestContent;
  items2[14] = visible.adCreativeType;
  items2[15] = relatedQuestId;
  items2[16] = noFillDecision;
  cResult[4] = focused;
  cResult[5] = focusedChanged;
  cResult[6] = stateFromStores;
  cResult[7] = noFillDecision;
  cResult[8] = visible.adContentIds;
  cResult[9] = visible.adCreativeType;
  cResult[10] = visible.minViewTimeSeconds;
  cResult[11] = visible.onImpression;
  cResult[12] = visible.questContent;
  cResult[13] = visible.questContentPosition;
  cResult[14] = visible.questContentRowIndex;
  cResult[15] = visible.trackGuildAndChannelMetadata;
  cResult[16] = questStatusChanged;
  cResult[17] = relatedQuestId;
  cResult[18] = sourceQuestContent;
  cResult[19] = visible;
  cResult[20] = visibleChanged;
  cResult[21] = fn3;
  cResult[22] = items2;
  tmp16 = items2;
  tmp15 = fn3;
}) : (function QuestContentImpressionTracker(visible) {
  _require = visible;
  visible = visible.visible;
  const visibleChanged = visible.visibleChanged;
  const focused = visible.focused;
  const focusedChanged = visible.focusedChanged;
  const sourceQuestContent = visible.sourceQuestContent;
  const tmp = _require;
  let tmp2 = visibleChanged;
  const reference = visible.reference;
  let obj = require("ContentImpressionTrackerHooks");
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  let relatedQuestId;
  if (visible.adCreativeType !== require("AdCreativeType").AdCreativeType.QUEST) {
    relatedQuestId = visible.relatedQuestId;
  }
  let noFillDecision;
  if (visible.adCreativeType !== tmp(tmp2[9]).AdCreativeType.QUEST) {
    noFillDecision = visible.noFillDecision;
  }
  const ref = focusedChanged.useRef(null);
  const items = [sourceQuestContent];
  const tmpResult = tmp(tmp2[31]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => null != sourceQuestContent.questEnrollmentBlockedUntil, []);
  visible(tmp2[32])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , , , ];
  ({ adContentIds: arr2[4], onImpression: arr2[5], questContent: arr2[6], questContentPosition: arr2[7], questContentRowIndex: arr2[8], trackGuildAndChannelMetadata: arr2[9] } = visible);
  items1[10] = questStatusChanged;
  items1[11] = visible.minViewTimeSeconds;
  items1[12] = stateFromStores;
  items1[13] = sourceQuestContent;
  items1[14] = visible.adCreativeType;
  items1[15] = relatedQuestId;
  items1[16] = noFillDecision;
  const effect = focusedChanged.useEffect(function() {
    let tmp2 = visibleChanged;
    let tmp4 = tmp3;
    if (!tmp4) {
      if (!tmp2) {
        tmp2 = focusedChanged;
      }
      if (tmp2) {
        tmp2 = !tmp;
      }
      tmp4 = tmp2;
    }
    if (!tmp4) {
      tmp4 = questStatusChanged;
    }
    if (tmp4) {
      tmp4 = null != ref.current;
    }
    if (tmp4) {
      const current = ref.current;
      current.stop();
    }
    if ((visibleChanged || focusedChanged || questStatusChanged) && (focused && visible)) {
      let tmp15;
      const obj = { isQuestEnrollmentBlocked: stateFromStores, minViewTimeSeconds: null, onImpression: null, questContent: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent, trackGuildAndChannelMetadata: visible.trackGuildAndChannelMetadata, triggeredByStatusChange: questStatusChanged };
      ({ minViewTimeSeconds: obj.minViewTimeSeconds, onImpression: obj.onImpression, questContent: obj.questContent, questContentPosition: obj.questContentPosition, questContentRowIndex: obj.questContentRowIndex } = visible);
      if (visible.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
        const obj5 = {};
        const merged = Object.assign(obj);
        ({ adContentIds: obj3.adContentIds, adCreativeType: obj3.adCreativeType } = visible);
        const self2 = this;
        ref.current = new QuestContentImpression(obj5);
        tmp15 = ref;
      } else {
        tmp15 = ref;
        const obj6 = { relatedQuestId, noFillDecision };
        const merged1 = Object.assign(obj);
        ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = visible);
        const self = this;
        ref.current = new QuestContentImpression(obj6);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  }, items1);
  const obj2 = { value: ref, children: visible.children(reference, ref) };
  const Provider = tmp(tmp2[33]).QuestImpressionContext.Provider;
  return stateFromStores(Provider, obj2);
});
let result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export { QuestContentImpression };
export const QuestContentImpressionTracker = tmp4;
