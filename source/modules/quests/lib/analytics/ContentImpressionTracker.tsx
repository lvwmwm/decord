// Module ID: 10469
// Function ID: 81014
// Name: getQuestPlacementCombinationKey
// Dependencies: [5, 6, 7, 31, 6942, 10470, 653, 33, 6940, 6971, 6969, 477, 6919, 10471, 6970, 9444, 6948, 6959, 6976, 9450, 9451, 6837, 6842, 491, 9449, 10468, 566, 4559, 2]
// Exports: QuestContentImpressionTracker

// Module 10469 (getQuestPlacementCombinationKey)
import closure_3 from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import ME from "ME";
import jsxProd from "jsxProd";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import set from "_defineProperties";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function getQuestPlacementCombinationKey(arg0, arg1) {
  return "" + arg0 + "_" + arg1;
}
({ HEARTBEAT_SECONDS: closure_8, MIN_QUEST_VIEW_TIME_SECONDS: closure_9, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: closure_10 } = MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN);
let set = new Set();
let tmp4 = (() => {
  class QuestContentImpression {
    constructor(arg0) {
      self = this;
      self = this;
      self = this;
      tmp = outer1_4(this, self);
      this.isRunning = false;
      this.trackViewedPlacement = (arg0) => {
        const questPlacementFromQuestContent = QuestContentImpression(outer2_2[8]).getQuestPlacementFromQuestContent(self.questContent);
        let result = null != questPlacementFromQuestContent;
        if (result) {
          result = QuestContentImpression(outer2_2[8]).isBillableQuestContent(self.questContent);
          const obj2 = QuestContentImpression(outer2_2[8]);
        }
        if (result) {
          outer2_13.add(outer2_16(arg0, questPlacementFromQuestContent));
        }
      };
      fn = (arg0) => {
        const questPlacementFromQuestContent = QuestContentImpression(outer2_2[8]).getQuestPlacementFromQuestContent(self.questContent);
        let result = null != questPlacementFromQuestContent;
        if (result) {
          result = !outer2_13.has(outer2_16(arg0, questPlacementFromQuestContent));
        }
        if (result) {
          result = QuestContentImpression(outer2_2[8]).isBillableQuestContent(self.questContent);
          const obj2 = QuestContentImpression(outer2_2[8]);
        }
        return result;
      };
      this.shouldExtendSession = fn;
      // CreateGeneratorClosureLongIndex (0x67)
      this.onMinViewTimeReached = outer1_3(fn);
      this.beat = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        let rounded;
        let obj;
        obj = undefined;
        if (null != flag.lastBeatTime) {
          const _Math = Math;
          const _Date = Date;
          rounded = Math.round(Date.now() - flag.lastBeatTime);
          obj = {};
          ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } = flag);
          obj = { is_termination_beat: flag, viewed_time_ms: rounded, triggered_by_status_change: flag.triggeredByStatusChange };
          const adContentIds = flag.entity.adContentIds;
          const item = adContentIds.forEach((arg0, arg1) => {
            if (flag.entity.adCreativeType === QuestContentImpression(outer3_2[14]).AdCreativeType.QUEST) {
              const quest = outer3_7.getQuest(tmp20);
              const questLogger = QuestContentImpression(outer3_2[16]).getQuestLogger();
              let questName;
              if (null != quest) {
                questName = quest.config.messages.questName;
              }
              let tmp27 = tmp20;
              if (null != questName) {
                tmp27 = questName;
              }
              let str11 = "";
              if (flag) {
                str11 = "terminal ";
              }
              const _HermesInternal2 = HermesInternal;
              let obj = { impressionId: flag.id };
              questLogger.info("" + tmp27 + " Quest impression " + str11 + "heartbeat: " + rounded + "ms since last heartbeat", obj);
              const obj5 = QuestContentImpression(outer3_2[16]);
              obj = {};
              const merged = Object.assign(obj);
              obj["questId"] = flag.entity.adContentIds[arg1];
              obj["event"] = outer3_11.QUEST_CONTENT_VIEW_TIME;
              let obj1 = {};
              const merged1 = Object.assign(obj);
              const merged2 = Object.assign(flag.commonProperties());
              obj["properties"] = obj1;
              QuestContentImpression(outer3_2[17]).trackQuestEvent(obj);
              const obj8 = QuestContentImpression(outer3_2[17]);
            } else {
              const questLogger1 = QuestContentImpression(outer3_2[16]).getQuestLogger();
              let str = "";
              if (flag) {
                str = "terminal ";
              }
              const _HermesInternal = HermesInternal;
              obj = { impressionId: flag.id };
              questLogger1.info("" + flag.entity.adContentIds[arg1] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj);
              obj1 = QuestContentImpression(outer3_2[17]);
              const obj2 = {};
              const merged3 = Object.assign(obj);
              obj2["adContentId"] = flag.entity.adContentIds[arg1];
              obj2["adCreativeType"] = flag.entity.adCreativeType;
              obj2["event"] = outer3_11.QUEST_CONTENT_VIEW_TIME;
              const obj3 = {};
              const merged4 = Object.assign(obj);
              const merged5 = Object.assign(flag.commonProperties());
              obj2["properties"] = obj3;
              obj1.trackAdContentEvent(obj2);
              const obj11 = QuestContentImpression(outer3_2[16]);
            }
          });
        }
        flag.lastBeatTime = Date.now();
      };
      this.commonProperties = () => {
        const merged = Object.assign(QuestContentImpression(outer2_2[10]).getContentProperties(self.questContent, self.questContentPosition, self.questContentRowIndex));
        return { impression_id: self.id, is_quest_enrollment_blocked: self.isQuestEnrollmentBlocked };
      };
      this.clone = (triggeredByStatusChange) => {
        self.stop();
        const merged = Object.assign(self.entity);
        return new self({ questContent: self.questContent, questContentRowIndex: self.questContentRowIndex, questContentPosition: self.questContentPosition, trackGuildAndChannelMetadata: self.trackGuildAndChannelMetadata, triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange, isQuestEnrollmentBlocked: self.isQuestEnrollmentBlocked, onImpression: self.onImpressionCallback, sourceQuestContent: self.sourceQuestContent });
      };
      this.start = () => {
        _self.stop(false);
        _self.lastBeatTime = Date.now();
        _self.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * outer2_8);
        _self.minViewTimeReachedTimeoutId = window.setTimeout(_self.onMinViewTimeReached, 1000 * _self.minViewTimeSeconds);
        _self = { trackGuildAndChannelMetadata: _self.trackGuildAndChannelMetadata, sourceQuestContent: _self.sourceQuestContent };
        let closure_1 = { triggered_by_status_change: _self.triggeredByStatusChange };
        const adContentIds = _self.entity.adContentIds;
        const item = adContentIds.forEach((adCreativeId) => {
          let obj = QuestContentImpression(outer3_2[8]);
          const adMetadataSealed = obj.getAdMetadataSealed(closure_0.sourceQuestContent, adCreativeId);
          if (closure_0.migrateQuestContentLoadedToCaptureAdUserAction) {
            obj = { adCreativeType: tmp2.entity.adCreativeType, adCreativeId: tmp2.entity.adContentIds[arg1] };
            obj = { type: tmp3(tmp4[20]).AdUserActionType.END_CONTENT_LOAD };
            ({ questContent: obj12.surfaceId, sourceQuestContent: obj12.sourceQuestContent, id: obj12.impressionId, triggeredByStatusChange: obj12.triggeredByStatusChange, trackGuildAndChannelMetadata: obj12.trackGuildAndChannelMetadata, questContentPosition: obj12.questContentPosition, questContentRowIndex: obj12.questContentRowIndex } = tmp2);
            const merged = Object.assign(obj);
            tmp3(tmp4[19]).captureAdUserAction(obj);
            const tmp3Result = tmp3(tmp4[19]);
          } else if (closure_0.entity.adCreativeType === tmp5) {
            const quest = outer3_7.getQuest(tmp7);
            let obj1 = QuestContentImpression(outer3_2[16]);
            const questLogger = obj1.getQuestLogger();
            let questName;
            if (null != quest) {
              questName = quest.config.messages.questName;
            }
            let tmp14 = tmp7;
            if (null != questName) {
              tmp14 = questName;
            }
            let obj3 = QuestContentImpression(outer3_2[10]);
            const _HermesInternal = HermesInternal;
            obj1 = { impressionId: closure_0.id };
            questLogger.info("" + tmp14 + " Quest became visible at " + obj3.getQuestContentName(closure_0.questContent), obj1);
            let obj5 = QuestContentImpression(outer3_2[17]);
            const obj2 = {};
            const merged1 = Object.assign(closure_0);
            obj2["questId"] = closure_0.entity.adContentIds[arg1];
            obj2["event"] = outer3_11.QUEST_CONTENT_LOADED;
            obj3 = {};
            const merged2 = Object.assign(closure_1);
            let tmp27 = null;
            if (null != adMetadataSealed) {
              tmp27 = adMetadataSealed;
            }
            obj3["metadata_sealed"] = tmp27;
            const merged3 = Object.assign(closure_0.commonProperties());
            let id;
            if (null != quest) {
              id = quest.id;
            }
            const adTrafficMetadataSealed = QuestContentImpression(outer3_2[8]).getAdTrafficMetadataSealed(closure_0.sourceQuestContent, id);
            let tmp35 = null;
            if (null != adTrafficMetadataSealed) {
              tmp35 = adTrafficMetadataSealed;
            }
            obj3["traffic_metadata_sealed"] = tmp35;
            obj2["properties"] = obj3;
            obj5.trackQuestEvent(obj2);
            const obj9 = QuestContentImpression(outer3_2[8]);
          } else {
            const questLogger1 = QuestContentImpression(outer3_2[16]).getQuestLogger();
            const obj13 = QuestContentImpression(outer3_2[16]);
            const _HermesInternal2 = HermesInternal;
            const obj4 = { impressionId: closure_0.id };
            questLogger1.info("" + closure_0.entity.adContentIds[arg1] + " ad content became visible at " + QuestContentImpression(outer3_2[10]).getQuestContentName(closure_0.questContent), obj4);
            const obj15 = QuestContentImpression(outer3_2[10]);
            obj5 = {};
            const merged4 = Object.assign(closure_0);
            obj5["adContentId"] = closure_0.entity.adContentIds[arg1];
            obj5["adCreativeType"] = closure_0.entity.adCreativeType;
            obj5["event"] = outer3_11.QUEST_CONTENT_LOADED;
            const obj6 = {};
            const merged5 = Object.assign(closure_1);
            const merged6 = Object.assign(closure_0.commonProperties());
            obj5["properties"] = obj6;
            QuestContentImpression(outer3_2[17]).trackAdContentEvent(obj5);
            const obj17 = QuestContentImpression(outer3_2[17]);
          }
        });
        let obj = outer2_1(outer2_2[21]);
        obj = { name: QuestContentImpression(outer2_2[22]).MetricEvents.QUEST_CONTENT_IMPRESSION };
        const items = ["quest_content:" + QuestContentImpression(outer2_2[10]).getQuestContentName(_self.questContent)];
        obj.tags = items;
        obj.increment(obj);
        _self.isRunning = true;
      };
      this.stop = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = true;
        }
        if (flag) {
          self.beat(true);
        }
        self.lastBeatTime = undefined;
        clearInterval(self.heartbeatTimeoutId);
        clearTimeout(self.minViewTimeReachedTimeoutId);
        self.isRunning = false;
      };
      ({ minViewTimeSeconds, adContentIds, adCreativeType, questContent, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = arg0);
      if (undefined === minViewTimeSeconds) {
        minViewTimeSeconds = outer1_9;
      }
      ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = arg0);
      obj = QuestContentImpression(outer1_2[23]);
      self.id = obj.v4();
      self.questContent = questContent;
      self.questContentPosition = questContentPosition;
      self.minViewTimeSeconds = minViewTimeSeconds;
      self.minViewportPercentage = outer1_10;
      self.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      self.triggeredByStatusChange = triggeredByStatusChange;
      self.questContentRowIndex = questContentRowIndex;
      self.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
      self.onImpressionCallback = onImpression;
      self.sourceQuestContent = sourceQuestContent;
      obj2 = QuestContentImpression(outer1_2[24]);
      self.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(QuestContentImpression(outer1_2[24]).AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED, "quest_content_impression");
      QUEST = QuestContentImpression(outer1_2[14]).AdCreativeType.QUEST;
      self.entity = { adContentIds, adCreativeType };
      return;
    }
  }
  let obj = {
    key: "getId",
    value() {
      return this.id;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getQuestContentPosition",
    value() {
      return this.questContentPosition;
    }
  };
  items[1] = obj;
  return callback(QuestContentImpression, items);
})();
let closure_14 = tmp4;
const context = importAllResult.createContext(undefined);
let result = set.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export const QuestContentImpression = tmp4;
export const QuestImpressionContext = context;
export const QuestContentImpressionTracker = function QuestContentImpressionTracker(visible) {
  const _require = visible;
  visible = visible.visible;
  const visibleChanged = visible.visibleChanged;
  const focused = visible.focused;
  const focusedChanged = visible.focusedChanged;
  const sourceQuestContent = visible.sourceQuestContent;
  let obj = _require(visibleChanged[25]);
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  const ref = questStatusChanged.useRef(null);
  const items = [ref];
  const stateFromStores = _require(visibleChanged[26]).useStateFromStores(items, () => null != ref.questEnrollmentBlockedUntil, []);
  visible(visibleChanged[27])(() => () => {
    if (null != outer1_7.current) {
      const current = outer1_7.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , ];
  ({ adContentIds: arr2[4], onImpression: arr2[5], questContent: arr2[6], questContentPosition: arr2[7], questContentRowIndex: arr2[8], trackGuildAndChannelMetadata: arr2[9] } = visible);
  items1[10] = questStatusChanged;
  items1[11] = visible.minViewTimeSeconds;
  items1[12] = stateFromStores;
  items1[13] = sourceQuestContent;
  items1[14] = visible.adCreativeType;
  const effect = questStatusChanged.useEffect(() => {
    let tmp = focused;
    if (focused) {
      tmp = visible;
    }
    let tmp2 = visibleChanged;
    if (!visibleChanged) {
      tmp2 = focusedChanged;
    }
    if (!tmp2) {
      tmp2 = questStatusChanged;
    }
    if (tmp2) {
      tmp2 = tmp;
    }
    let tmp3 = tmp2;
    if (!tmp2) {
      let tmp4 = visibleChanged;
      if (!visibleChanged) {
        tmp4 = focusedChanged;
      }
      if (tmp4) {
        tmp4 = !tmp;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      tmp3 = questStatusChanged;
    }
    if (tmp3) {
      tmp3 = null != ref.current;
    }
    if (tmp3) {
      const current = ref.current;
      current.stop();
    }
    if (tmp2) {
      let obj = { isQuestEnrollmentBlocked: stateFromStores };
      ({ minViewTimeSeconds: obj.minViewTimeSeconds, onImpression: obj.onImpression, questContent: obj.questContent, questContentPosition: obj.questContentPosition, questContentRowIndex: obj.questContentRowIndex } = visible);
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackGuildAndChannelMetadata = visible.trackGuildAndChannelMetadata;
      obj.triggeredByStatusChange = questStatusChanged;
      const adCreativeType = visible.adCreativeType;
      const QUEST = visible(visibleChanged[14]).AdCreativeType.QUEST;
      obj = {};
      const merged = Object.assign(obj);
      obj["adContentIds"] = visible.adContentIds;
      obj["adCreativeType"] = visible.adCreativeType;
      const prototype = outer1_14.prototype;
      const tmp23 = new outer1_14(obj);
      ref.current = tmp23;
      const current2 = ref.current;
      current2.start();
    }
  }, items1);
  obj = { value: ref, children: visible.children(visible.reference, ref) };
  return <context.Provider value={ref}>{arg0.children(arg0.reference, ref)}</context.Provider>;
};
