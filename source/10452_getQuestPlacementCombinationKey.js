// Module ID: 10452
// Function ID: 80917
// Name: getQuestPlacementCombinationKey
// Dependencies: []
// Exports: QuestContentImpressionTracker

// Module 10452 (getQuestPlacementCombinationKey)
function getQuestPlacementCombinationKey(arg0, arg1) {
  return "" + arg0 + "_" + arg1;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ HEARTBEAT_SECONDS: closure_8, MIN_QUEST_VIEW_TIME_SECONDS: closure_9, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: closure_10 } = arg1(dependencyMap[5]));
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const jsx = arg1(dependencyMap[7]).jsx;
const set = new Set();
const tmp4 = () => {
  class QuestContentImpression {
    constructor(arg0) {
      self = this;
      QuestContentImpression = this;
      self = this;
      tmp = closure_4(this, QuestContentImpression);
      this.isRunning = false;
      this.trackViewedPlacement = (arg0) => {
        const questPlacementFromQuestContent = self(closure_2[8]).getQuestPlacementFromQuestContent(self.questContent);
        let result = null != questPlacementFromQuestContent;
        if (result) {
          result = self(closure_2[8]).isBillableQuestContent(self.questContent);
          const obj2 = self(closure_2[8]);
        }
        if (result) {
          set.add(callback(arg0, questPlacementFromQuestContent));
        }
      };
      fn = (arg0) => {
        const questPlacementFromQuestContent = self(closure_2[8]).getQuestPlacementFromQuestContent(self.questContent);
        let result = null != questPlacementFromQuestContent;
        if (result) {
          result = !set.has(callback(arg0, questPlacementFromQuestContent));
        }
        if (result) {
          result = self(closure_2[8]).isBillableQuestContent(self.questContent);
          const obj2 = self(closure_2[8]);
        }
        return result;
      };
      this.shouldExtendSession = fn;
      // CreateGeneratorClosureLongIndex (0x67)
      this.onMinViewTimeReached = closure_3(fn);
      this.beat = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        let self = flag;
        self = undefined;
        let obj;
        obj = undefined;
        if (null != self.lastBeatTime) {
          const _Math = Math;
          const _Date = Date;
          const rounded = Math.round(Date.now() - self.lastBeatTime);
          self = rounded;
          obj = {};
          ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } = self);
          obj = { is_termination_beat: flag, viewed_time_ms: rounded, triggered_by_status_change: self.triggeredByStatusChange };
          const adContentIds = self.entity.adContentIds;
          const item = adContentIds.forEach((arg0, arg1) => {
            if (flag.entity.adCreativeType === flag(obj[14]).AdCreativeType.QUEST) {
              const quest = quest.getQuest(tmp20);
              const questLogger = flag(obj[16]).getQuestLogger();
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
              const obj5 = flag(obj[16]);
              obj = {};
              const merged = Object.assign(obj);
              obj["questId"] = flag.entity.adContentIds[arg1];
              obj["event"] = constants.QUEST_CONTENT_VIEW_TIME;
              let obj1 = {};
              const merged1 = Object.assign(obj);
              const merged2 = Object.assign(flag.commonProperties());
              obj["properties"] = obj1;
              flag(obj[17]).trackQuestEvent(obj);
              const obj8 = flag(obj[17]);
            } else {
              const questLogger1 = flag(obj[16]).getQuestLogger();
              let str = "";
              if (flag) {
                str = "terminal ";
              }
              const _HermesInternal = HermesInternal;
              obj = { impressionId: flag.id };
              questLogger1.info("" + flag.entity.adContentIds[arg1] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj);
              obj1 = flag(obj[17]);
              const obj2 = {};
              const merged3 = Object.assign(obj);
              obj2["adContentId"] = flag.entity.adContentIds[arg1];
              obj2["adCreativeType"] = flag.entity.adCreativeType;
              obj2["event"] = constants.QUEST_CONTENT_VIEW_TIME;
              const obj3 = {};
              const merged4 = Object.assign(obj);
              const merged5 = Object.assign(flag.commonProperties());
              obj2["properties"] = obj3;
              obj1.trackAdContentEvent(obj2);
              const obj11 = flag(obj[16]);
            }
          });
        }
        self.lastBeatTime = Date.now();
      };
      this.commonProperties = () => {
        const merged = Object.assign(self(closure_2[10]).getContentProperties(self.questContent, self.questContentPosition, self.questContentRowIndex));
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
        _self.heartbeatTimeoutId = window.setInterval(() => lib.beat(), 1000 * closure_8);
        _self.minViewTimeReachedTimeoutId = window.setTimeout(_self.onMinViewTimeReached, 1000 * _self.minViewTimeSeconds);
        const _self = { trackGuildAndChannelMetadata: _self.trackGuildAndChannelMetadata, sourceQuestContent: _self.sourceQuestContent };
        const _self2 = { triggered_by_status_change: _self.triggeredByStatusChange };
        const adContentIds = _self.entity.adContentIds;
        const item = adContentIds.forEach((adCreativeId) => {
          let obj = lib(closure_2[8]);
          const adMetadataSealed = obj.getAdMetadataSealed(lib.sourceQuestContent, adCreativeId);
          if (lib.migrateQuestContentLoadedToCaptureAdUserAction) {
            obj = { adCreativeType: tmp2.entity.adCreativeType, adCreativeId: tmp2.entity.adContentIds[arg1] };
            obj = { type: tmp3(tmp4[20]).AdUserActionType.END_CONTENT_LOAD };
            ({ questContent: obj12.surfaceId, sourceQuestContent: obj12.sourceQuestContent, id: obj12.impressionId, triggeredByStatusChange: obj12.triggeredByStatusChange, trackGuildAndChannelMetadata: obj12.trackGuildAndChannelMetadata, questContentPosition: obj12.questContentPosition, questContentRowIndex: obj12.questContentRowIndex } = tmp2);
            const merged = Object.assign(obj);
            tmp3(tmp4[19]).captureAdUserAction(obj);
            const tmp3Result = tmp3(tmp4[19]);
          } else if (lib.entity.adCreativeType === tmp5) {
            const quest = quest.getQuest(tmp7);
            let obj1 = lib(closure_2[16]);
            const questLogger = obj1.getQuestLogger();
            let questName;
            if (null != quest) {
              questName = quest.config.messages.questName;
            }
            let tmp14 = tmp7;
            if (null != questName) {
              tmp14 = questName;
            }
            let obj3 = lib(closure_2[10]);
            const _HermesInternal = HermesInternal;
            obj1 = { impressionId: lib.id };
            questLogger.info("" + tmp14 + " Quest became visible at " + obj3.getQuestContentName(lib.questContent), obj1);
            let obj5 = lib(closure_2[17]);
            const obj2 = {};
            const merged1 = Object.assign(lib);
            obj2["questId"] = lib.entity.adContentIds[arg1];
            obj2["event"] = constants.QUEST_CONTENT_LOADED;
            obj3 = {};
            const merged2 = Object.assign(closure_1);
            let tmp27 = null;
            if (null != adMetadataSealed) {
              tmp27 = adMetadataSealed;
            }
            obj3["metadata_sealed"] = tmp27;
            const merged3 = Object.assign(lib.commonProperties());
            let id;
            if (null != quest) {
              id = quest.id;
            }
            const adTrafficMetadataSealed = lib(closure_2[8]).getAdTrafficMetadataSealed(lib.sourceQuestContent, id);
            let tmp35 = null;
            if (null != adTrafficMetadataSealed) {
              tmp35 = adTrafficMetadataSealed;
            }
            obj3["traffic_metadata_sealed"] = tmp35;
            obj2["properties"] = obj3;
            obj5.trackQuestEvent(obj2);
            const obj9 = lib(closure_2[8]);
          } else {
            const questLogger1 = lib(closure_2[16]).getQuestLogger();
            const obj13 = lib(closure_2[16]);
            const _HermesInternal2 = HermesInternal;
            const obj4 = { impressionId: lib.id };
            questLogger1.info("" + lib.entity.adContentIds[arg1] + " ad content became visible at " + lib(closure_2[10]).getQuestContentName(lib.questContent), obj4);
            const obj15 = lib(closure_2[10]);
            obj5 = {};
            const merged4 = Object.assign(lib);
            obj5["adContentId"] = lib.entity.adContentIds[arg1];
            obj5["adCreativeType"] = lib.entity.adCreativeType;
            obj5["event"] = constants.QUEST_CONTENT_LOADED;
            const obj6 = {};
            const merged5 = Object.assign(closure_1);
            const merged6 = Object.assign(lib.commonProperties());
            obj5["properties"] = obj6;
            lib(closure_2[17]).trackAdContentEvent(obj5);
            const obj17 = lib(closure_2[17]);
          }
        });
        let obj = _self2(closure_2[21]);
        obj = { name: _self(closure_2[22]).MetricEvents.QUEST_CONTENT_IMPRESSION };
        const items = ["quest_content:" + _self(closure_2[10]).getQuestContentName(_self.questContent)];
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
        minViewTimeSeconds = closure_9;
      }
      ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = arg0);
      obj = QuestContentImpression(closure_2[23]);
      self.id = obj.v4();
      self.questContent = questContent;
      self.questContentPosition = questContentPosition;
      self.minViewTimeSeconds = minViewTimeSeconds;
      self.minViewportPercentage = closure_10;
      self.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      self.triggeredByStatusChange = triggeredByStatusChange;
      self.questContentRowIndex = questContentRowIndex;
      self.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
      self.onImpressionCallback = onImpression;
      self.sourceQuestContent = sourceQuestContent;
      obj2 = QuestContentImpression(closure_2[24]);
      self.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(QuestContentImpression(closure_2[24]).AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED, "quest_content_impression");
      QUEST = QuestContentImpression(closure_2[14]).AdCreativeType.QUEST;
      self.entity = { adContentIds, adCreativeType };
      return;
    }
  }
  const arg1 = QuestContentImpression;
  let obj = {
    key: "getId",
    value() {
      return this.id;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getQuestContentPosition",
    value() {
      return this.questContentPosition;
    }
  };
  items[1] = obj;
  return callback(QuestContentImpression, items);
}();
const context = importAllResult.createContext(undefined);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export const QuestContentImpression = tmp4;
export const QuestImpressionContext = context;
export const QuestContentImpressionTracker = function QuestContentImpressionTracker(visible) {
  const arg1 = visible;
  visible = visible.visible;
  const importDefault = visible;
  const visibleChanged = visible.visibleChanged;
  const dependencyMap = visibleChanged;
  const focused = visible.focused;
  let closure_3 = focused;
  const focusedChanged = visible.focusedChanged;
  let closure_4 = focusedChanged;
  const sourceQuestContent = visible.sourceQuestContent;
  let closure_5 = sourceQuestContent;
  let obj = arg1(dependencyMap[25]);
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  const ref = questStatusChanged.useRef(null);
  let closure_7 = ref;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[26]).useStateFromStores(items, () => null != ref.questEnrollmentBlockedUntil, []);
  importDefault(dependencyMap[27])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
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
  const effect = importAllResult.useEffect((self) => {
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
      ({ minViewTimeSeconds: obj.minViewTimeSeconds, onImpression: obj.onImpression, questContent: obj.questContent, questContentPosition: obj.questContentPosition, questContentRowIndex: obj.questContentRowIndex } = self);
      obj.sourceQuestContent = sourceQuestContent;
      obj.trackGuildAndChannelMetadata = self.trackGuildAndChannelMetadata;
      obj.triggeredByStatusChange = questStatusChanged;
      const adCreativeType = self.adCreativeType;
      const QUEST = self(visibleChanged[14]).AdCreativeType.QUEST;
      obj = {};
      const merged = Object.assign(obj);
      obj["adContentIds"] = self.adContentIds;
      obj["adCreativeType"] = self.adCreativeType;
      const prototype = ctor.prototype;
      const tmp23 = new ctor(obj);
      ref.current = tmp23;
      const current2 = ref.current;
      current2.start();
    }
  }, items1);
  obj = { value: ref, children: visible.children(visible.reference, ref) };
  return <context.Provider {...obj} />;
};
