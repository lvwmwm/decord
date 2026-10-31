// Module ID: 14686
// Function ID: 14687
// Name: ContentImpressionTracker
// Dependencies: [5, 19, 7846, 9686, 1072, 21, 1266, 6788, 7842, 14663, 14664, 14668, 14666, 7872, 7871, 7852, 9682, 9687, 9684, 7853, 7862, 6540, 6545, 9717, 504, 5593, 9718, 2]
// Exports: QuestContentImpressionTracker

// Module 14686 (ContentImpressionTracker)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import QuestDataUtils from "QuestDataUtils" /* 7842 */;
import getQuestLogger from "getQuestLogger" /* 7853 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import IosAttributionEligibility from "IosAttributionEligibility" /* 14663 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 14664 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 14666 */;
import IosAttributionMetrics from "IosAttributionMetrics" /* 14668 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7846 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 9686 */;
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
    let obj2 = Object.create(new.target.prototype);
    obj2.isRunning = false;
    obj2.iosAttributionRegistered = false;
    obj2.trackViewedPlacement = function trackViewedPlacement(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj2.questContent);
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
    obj2.shouldExtendSession = function shouldExtendSession(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj2.questContent);
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
    obj2.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(item, adProvenanceMetadataSealed) {
      if (!obj2.iosAttributionRegistered) {
        const obj = IosAttributionEligibility;
        if (obj.isIosAttributionEligible()) {
          const tmp2Result = IosAttributionNativeModule;
          const activeIosAttributionFramework = tmp2Result.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              const tmp2Result6 = IosAttributionEligibility;
              if (tmp2Result6.isCampaignIosAttributionEnabled(obj2.sourceQuestContent, item)) {
                obj2 = { impressionId: obj2.id, metadataSealed: adProvenanceMetadataSealed, framework: activeIosAttributionFramework, iosAttributionRegistered: true };
                const tmp2Result7 = IosAttributionImpressionRegistry;
                const result = tmp2Result7.registerViewThroughImpression(obj2);
              } else {
                const tmp2Result8 = IosAttributionMetrics;
                const result1 = tmp2Result8.trackIosAttributionImpression(tmp2(14668).IosAttributionImpressionResult.NOT_SKAN_ENABLED, activeIosAttributionFramework, tmp.id);
              }
            } else {
              const tmp2Result9 = IosAttributionMetrics;
              const result2 = tmp2Result9.trackIosAttributionImpression(tmp2(14668).IosAttributionImpressionResult.NO_METADATA, activeIosAttributionFramework, tmp.id);
            }
          } else {
            const tmp2Result10 = IosAttributionMetrics;
            const result3 = tmp2Result10.trackIosAttributionImpression(tmp2(14668).IosAttributionImpressionResult.NO_FRAMEWORK, activeIosAttributionFramework, tmp.id);
          }
        }
      }
    };
    obj2.onMinViewTimeReached = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let closure_1;
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              let tmp13 = tmp(c2[13]);
              const getAdUser = tmp13.getAdUser;
              obj2 = tmp(c2[14]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: getAdUser(obj2.getQuestContentName(obj2.questContent)), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const tmp5 = tmp;
            const tmp6 = closure_1;
            tmp = value;
            const adContentIds = closure_129_0.entity.adContentIds;
            const item = adContentIds.forEach((item, index) => {
              let tmp13;
              const shouldExtendSessionResult = adUser.shouldExtendSession(item);
              adUser.trackViewedPlacement(item);
              if (adUser.entity.adCreativeType === obj2(closure_3_2[7]).AdCreativeType.QUEST) {
                quest = quest.getQuest(tmp6);
                let isQuestExpiredResult = null == quest;
                if (!isQuestExpiredResult) {
                  const tmp4Result = obj2(closure_3_2[15]);
                  isQuestExpiredResult = tmp4Result.isQuestExpired(quest);
                }
                if (!isQuestExpiredResult) {
                  const items = [adUser.entity.adContentIds[index]];
                  const tmp4Result8 = obj2(closure_3_2[16]);
                  tmp4Result8.markAdContentSeen(obj2(closure_3_2[7]).AdCreativeType.QUEST, items);
                }
              }
              const obj = { type: null };
              const tmp4Result9 = obj2(closure_3_2[8]);
              const result = tmp4Result9.isBillableQuestContent(tmp.questContent, tmp.entity.adCreativeType);
              const AdUserActionType = tmp4(tmp5[17]).AdUserActionType;
              if (result) {
                obj.type = AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION;
                tmp13 = obj;
              } else {
                obj.type = AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
                tmp13 = obj;
              }
              obj2 = { shouldExtendSession: shouldExtendSessionResult, adUser };
              const merged = Object.assign(tmp13);
              ({ questContent: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, id: obj5.impressionId, triggeredByStatusChange: obj5.triggeredByStatusChange, minViewTimeSeconds: obj5.minViewTimeSeconds, minViewportPercentage: obj5.minViewportPercentage, isQuestEnrollmentBlocked: obj5.isQuestEnrollmentBlocked } = adUser);
              ({ questContentPosition: obj5.questContentPosition, questContentRowIndex: obj5.questContentRowIndex, trackGuildAndChannelMetadata: obj5.trackGuildAndChannelMetadata } = adUser);
              if (adUser.entity.adCreativeType === obj2(closure_3_2[7]).AdCreativeType.QUEST) {
                const obj3 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index] };
                const captureAdUserAction2 = obj2(closure_3_2[18]).captureAdUserAction;
                obj2(closure_3_2[18]);
                const merged1 = Object.assign(obj2);
                captureAdUserAction2(obj3);
              } else if (null != adUser.entity.relatedQuestId) {
                const obj4 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index], relatedQuestId: adUser.entity.relatedQuestId };
                const captureAdUserAction = obj2(closure_3_2[18]).captureAdUserAction;
                obj2(closure_3_2[18]);
                const merged2 = Object.assign(obj2);
                captureAdUserAction(obj4);
              } else {
                let obj8;
                const obj6 = { adCreativeType: adUser.entity.adCreativeType, adCreativeId: adUser.entity.adContentIds[index] };
                const captureAdUserAction3 = obj2(closure_3_2[18]).captureAdUserAction;
                obj2(closure_3_2[18]);
                const merged3 = Object.assign(obj2);
                if (null != adUser.entity.noFillDecision) {
                  obj8 = { noFillDecision: adUser.entity.noFillDecision };
                  const obj7 = { noFillDecision: adUser.entity.noFillDecision };
                } else {
                  obj8 = {};
                }
                const merged4 = Object.assign(obj8);
                captureAdUserAction3(obj6);
              }
              const tmp4Result13 = obj2(closure_3_2[19]);
              const questLogger = tmp4Result13.getQuestLogger();
              const info = questLogger.info;
              const minViewTimeSeconds = tmp.minViewTimeSeconds;
              const obj9 = { impressionId: adUser.id };
              const tmp4Result14 = obj2(closure_3_2[14]);
              info("" + item + " ad content viewed for at least " + minViewTimeSeconds + "s at " + tmp4Result14.getQuestContentName(adUser.questContent), obj9);
            });
            if (closure_129_0.onImpressionCallback != null) {
              closure_129_0.onImpressionCallback();
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    obj2.beat = function beat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let rounded;
      let obj;
      obj2 = undefined;
      if (null != flag.lastBeatTime) {
        const _Math = Math;
        const _Date = Date;
        rounded = Math.round(Date.now() - tmp.lastBeatTime);
        obj = { trackGuildAndChannelMetadata: null, sourceQuestContent: null };
        ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } = flag);
        obj2 = { is_termination_beat: flag, viewed_time_ms: rounded, triggered_by_status_change: tmp.triggeredByStatusChange };
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((item, index) => {
          let obj4;
          let obj7;
          if (obj2.entity.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
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
            obj2 = { impressionId: obj2.id };
            info("" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat", obj2);
            const obj3 = { questId: obj2.entity.adContentIds[index], event: AnalyticEvents.QUEST_CONTENT_VIEW_TIME, properties: obj4 };
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
            const obj5 = { impressionId: obj2.id };
            info2("" + obj2.entity.adContentIds[index] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj5);
            const obj6 = { adContentId: obj2.entity.adContentIds[index], relatedQuestId: obj2.entity.relatedQuestId, noFillDecision: obj2.entity.noFillDecision, adCreativeType: obj2.entity.adCreativeType, event: AnalyticEvents.QUEST_CONTENT_VIEW_TIME, properties: obj7 };
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
    obj2.commonProperties = function commonProperties() {
      const obj = { impression_id: obj2.id, is_quest_enrollment_blocked: obj2.isQuestEnrollmentBlocked };
      obj2 = AnalyticsTypes;
      const merged = Object.assign(obj2.getContentProperties(obj2.questContent, obj2.questContentPosition, obj2.questContentRowIndex));
      return obj;
    };
    obj2.clone = function clone(triggeredByStatusChange) {
      triggeredByStatusChange = triggeredByStatusChange.triggeredByStatusChange;
      obj2.stop();
      const obj = { questContent: obj2.questContent, questContentRowIndex: obj2.questContentRowIndex, questContentPosition: obj2.questContentPosition, trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, triggeredByStatusChange, isQuestEnrollmentBlocked: obj2.isQuestEnrollmentBlocked, onImpression: obj2.onImpressionCallback, sourceQuestContent: obj2.sourceQuestContent };
      const merged = Object.assign(obj2.entity);
      return new QuestContentImpression(obj);
    };
    obj2.start = function start() {
      let items;
      obj2.stop(false);
      obj2.lastBeatTime = Date.now();
      obj2.heartbeatTimeoutId = window.setInterval(() => obj2.beat(), 1000 * metroRequire);
      obj2.minViewTimeReachedTimeoutId = window.setTimeout(obj2.onMinViewTimeReached, 1000 * obj2.minViewTimeSeconds);
      const adContentIds = obj2.entity.adContentIds;
      const item = adContentIds.forEach((item, index) => {
        let obj3;
        const obj = obj2(dependencyMap[8]);
        const result = closure_1_0.maybeRegisterIosAttributionImpression(item, obj.getAdProvenanceMetadataSealed(closure_1_0.sourceQuestContent, item));
        if (closure_1_0.entity.adCreativeType === obj2(dependencyMap[7]).AdCreativeType.QUEST) {
          obj2 = { adCreativeType: closure_1_0.entity.adCreativeType, adCreativeId: closure_1_0.entity.adContentIds[index] };
          obj3 = obj2;
        } else {
          obj3 = { adCreativeType: closure_1_0.entity.adCreativeType, adCreativeId: closure_1_0.entity.adContentIds[index], relatedQuestId: closure_1_0.entity.relatedQuestId, noFillDecision: closure_1_0.entity.noFillDecision };
        }
        const captureAdUserAction = obj2(dependencyMap[18]).captureAdUserAction;
        const tmpResult = obj2(dependencyMap[18]);
        const obj4 = { type: obj2(dependencyMap[17]).AdUserActionType.END_CONTENT_LOAD, surfaceId: closure_1_0.questContent, sourceQuestContent: closure_1_0.sourceQuestContent, impressionId: closure_1_0.id, triggeredByStatusChange: closure_1_0.triggeredByStatusChange, trackGuildAndChannelMetadata: closure_1_0.trackGuildAndChannelMetadata, questContentPosition: closure_1_0.questContentPosition, questContentRowIndex: closure_1_0.questContentRowIndex };
        const merged = Object.assign(obj3);
        captureAdUserAction(obj4);
      });
      const tmp3 = MonitoringAgentDefault;
      let obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_IMPRESSION, tags: items };
      const increment = tmp3.increment;
      obj2 = AnalyticsTypes;
      items = ["quest_content:" + obj2.getQuestContentName(obj2.questContent)];
      increment(obj);
      obj2.isRunning = true;
    };
    obj2.stop = function stop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        obj2.beat(true);
      }
      obj2.lastBeatTime = undefined;
      clearInterval(obj2.heartbeatTimeoutId);
      clearTimeout(obj2.minViewTimeReachedTimeoutId);
      obj2.isRunning = false;
      const obj = IosAttributionImpressionRegistry;
      obj.endImpression(obj2.id);
    };
    ({ adContentIds, adCreativeType, minViewTimeSeconds, relatedQuestId, noFillDecision, questContent, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = arg0);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = closure_7;
    }
    ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = arg0);
    let obj = obj2(1266);
    obj2.id = obj.v4();
    obj2.questContent = questContent;
    obj2.questContentPosition = questContentPosition;
    obj2.minViewTimeSeconds = minViewTimeSeconds;
    obj2.minViewportPercentage = minViewportPercentage;
    obj2.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj2.triggeredByStatusChange = triggeredByStatusChange;
    obj2.questContentRowIndex = questContentRowIndex;
    obj2.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
    obj2.onImpressionCallback = onImpression;
    obj2.sourceQuestContent = sourceQuestContent;
    if (adCreativeType === obj2(6788).AdCreativeType.QUEST) {
      let obj3 = { adContentIds, adCreativeType };
      obj2.entity = obj3;
    } else {
      let obj6 = { adContentIds, adCreativeType, relatedQuestId, noFillDecision };
      obj2.entity = obj6;
    }
    return obj2;
  }
  getId() {
    return this.id;
  }
  getQuestContentPosition() {
    return this.questContentPosition;
  }
}
const prototype = QuestContentImpression.prototype;
let result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export { QuestContentImpression };
export function QuestContentImpressionTracker(visible) {
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
  if (visible.adCreativeType !== tmp(tmp2[7]).AdCreativeType.QUEST) {
    noFillDecision = visible.noFillDecision;
  }
  const ref = focusedChanged.useRef(null);
  const items = [sourceQuestContent];
  const tmpResult = tmp(tmp2[24]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => null != sourceQuestContent.questEnrollmentBlockedUntil, []);
  visible(tmp2[25])(() => () => {
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
  const Provider = tmp(tmp2[26]).QuestImpressionContext.Provider;
  return stateFromStores(Provider, obj2);
}
