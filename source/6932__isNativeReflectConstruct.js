// Module ID: 6932
// Function ID: 55322
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6932 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function initializeState() {
  let closure_3 = false;
  let closure_4 = false;
  let map = new Map();
  let closure_6 = false;
  let closure_7 = false;
  let map1 = new Map();
  const map2 = new Map();
  const map3 = new Map();
  const map4 = new Map();
  let closure_12 = 0;
  let closure_13 = 0;
  const set = new Set();
  const set1 = new Set();
  const set2 = new Set();
  const set3 = new Set();
  const set4 = new Set();
  map = new Map();
  const map6 = new Map();
  const map7 = new Map();
  const map8 = new Map();
  const map9 = new Map();
  const map10 = new Map();
  const set5 = new Set();
  const map11 = new Map();
  const map12 = new Map();
  const map13 = new Map();
  _stopExpirationChecker();
  let closure_37 = null;
  const map14 = new Map();
  const map5 = new Map();
  map1 = new Map();
  const map16 = new Map();
  const map17 = new Map();
  const map18 = new Map();
  let closure_46 = null;
  let closure_48 = null;
}
function updateQuestData(questId, userStatus) {
  let tmp3;
  let tmp4;
  const map = new Map(map);
  let value = map.get(questId);
  if (null != value) {
    let obj = {};
    const merged = Object.assign(value);
    const merged1 = Object.assign(userStatus);
    if (null != userStatus.userStatus) {
      userStatus = userStatus.userStatus;
      let progress;
      if (null != userStatus) {
        progress = userStatus.progress;
      }
      if (null == progress) {
        progress = {};
      }
      const values = Object.values(progress);
      let num = 0;
      if (0 < values.length) {
        while (true) {
          tmp4 = values[num];
          let tmp5 = userStatus;
          let tmp6 = dependencyMap;
          let obj3 = userStatus(dependencyMap[10]);
          let tmp7 = tmp2;
          let tmp8 = tmp3;
          if (!obj3.isNil(tmp4)) {
            let tmp9 = userStatus;
            let tmp10 = dependencyMap;
            let DESKTOP = userStatus(dependencyMap[11]).FirstPartyQuestTaskTypesSets.DESKTOP;
            let tmp11 = tmp3;
            if (DESKTOP.has(tmp4.eventName)) {
              break;
            } else {
              tmp7 = tmp2;
              tmp8 = tmp3;
            }
          }
          num = num + 1;
          let tmp2 = tmp7;
          tmp3 = tmp8;
        }
        const heartbeat = tmp4.heartbeat;
        let lastBeatAt;
        if (null != heartbeat) {
          lastBeatAt = heartbeat.lastBeatAt;
        }
        if (null != lastBeatAt) {
          set.add(questId);
          let tmp14 = tmp3;
        } else {
          const heartbeat2 = tmp4.heartbeat;
          let lastBeatAt1;
          if (null != heartbeat2) {
            lastBeatAt1 = heartbeat2.lastBeatAt;
          }
          tmp14 = heartbeat2;
          if (null == lastBeatAt1) {
            set.delete(questId);
            tmp14 = heartbeat2;
          }
        }
      }
    }
    const result = map.set(questId, obj);
    if (map1.has(questId)) {
      value = map1.get(questId);
      if (null != value) {
        const _Map = Map;
        const map1 = new Map(map1);
        obj = {};
        const merged2 = Object.assign(value);
        const merged3 = Object.assign(userStatus);
        const result1 = map1.set(questId, obj);
      }
    }
  }
}
function _addRewardCode(questId, rewardCode) {
  const map = new Map(map);
  const result = map.set(questId, rewardCode);
}
function updateQuestRewardData(questId, entitlements) {
  const map = new Map(map);
  const result = map.set(questId, entitlements.items);
  const value = store.get(questId);
  let userStatus;
  if (null != value) {
    userStatus = value.userStatus;
  }
  if (null != userStatus) {
    if (null == userStatus.claimedAt) {
      let obj = { entitlements };
      const tenantMetadata = obj.entitlements.items[0].tenantMetadata;
      let reward;
      if (null != tenantMetadata) {
        reward = tenantMetadata.questRewards.reward;
      }
      let tag;
      if (null != reward) {
        tag = reward.tag;
      }
      let rewardCode = null;
      if (tag === entitlements(dependencyMap[12]).QuestRewardTypes.REWARD_CODE) {
        rewardCode = reward.rewardCode;
      }
      if (null != rewardCode) {
        _addRewardCode(questId, rewardCode);
      }
      obj = {};
      const obj1 = {};
      const merged = Object.assign(userStatus);
      obj1["claimedAt"] = entitlements.claimedAt;
      let tier;
      if (null != rewardCode) {
        tier = rewardCode.tier;
      }
      let tmp16 = null;
      if (null != tier) {
        tmp16 = tier;
      }
      obj1["claimedTier"] = tmp16;
      obj.userStatus = obj1;
      updateQuestData(questId, obj);
      const tmp11 = updateQuestData;
    }
  }
}
function maybeDeleteQuestHeartbeatFailure(streamKey) {
  if (null != map.get(streamKey)) {
    const _Map = Map;
    const map = new Map(map);
    map.delete(streamKey);
  }
}
function removeQuestIdFromIsEnrolling(questId) {
  const set = new Set(set);
  set.delete(questId);
}
function removeQuestIdFromIsDismissing(questId) {
  const set = new Set(set);
  set.delete(questId);
}
function _runExpirationCheck() {
  function updateExpiredQuestsMap() {
    let closure_0 = false;
    const map = new Map(map);
    const item = closure_9.forEach((value) => {
      if (true !== map.get(arg1)) {
        if (obj.isQuestExpired(value)) {
          const result = obj2.set(arg1, true);
          const callback = true;
        } else if (!obj2.has(arg1)) {
          const result1 = map.set(arg1, false);
        }
        const obj = callback(closure_2[14]);
      }
    });
    if (closure_0) {
      closure_50.emitChange();
    }
  }();
  const result = arg1(dependencyMap[14]).findNextUpcomingExpirationEpochMs(Array.from(store.values()));
  if (null != result) {
    const _Math = Math;
    const _Date = Date;
    const bound = Math.max(5000, result - Date.now() + 2000);
    if (bound <= 864000000) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback();
      }, bound);
    }
  }
}
function _stopExpirationChecker() {
  if (null != closure_43) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_43);
    closure_43 = null;
  }
}
let closure_27 = importDefault(dependencyMap[0]);
let closure_28 = importDefault(dependencyMap[1]);
let closure_29 = importDefault(dependencyMap[2]);
let closure_30 = importDefault(dependencyMap[3]);
let closure_31 = importDefault(dependencyMap[4]);
let closure_32 = importDefault(dependencyMap[5]);
let closure_33 = importDefault(dependencyMap[6]);
let closure_34 = importDefault(dependencyMap[7]);
const QuestsExperimentLocations = arg1(dependencyMap[8]).QuestsExperimentLocations;
const map = new Map();
let closure_43 = null;
let closure_44 = 30 * importDefault(dependencyMap[9]).Millis.SECOND;
let closure_45 = 10 * importDefault(dependencyMap[9]).Millis.MINUTE;
let closure_46 = null;
let closure_47 = false;
let closure_48 = null;
const map1 = new Map();
initializeState();
let tmp5 = (Store) => {
  class QuestStore {
    constructor() {
      self = this;
      tmp = closure_27(this, QuestStore);
      obj = closure_30(QuestStore);
      tmp2 = closure_29;
      if (closure_51()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_30;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_30(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = QuestStore;
  callback2(QuestStore, Store);
  let obj = {
    key: "quests",
    get() {
      return closure_9;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "excludedQuests",
    get() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "claimedQuests",
    get() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetchingCurrentQuests",
    get() {
      return closure_3;
    }
  };
  items[4] = {
    key: "isFetchingClaimedQuests",
    get() {
      return closure_6;
    }
  };
  items[5] = {
    key: "isFetchingQuestPreview",
    value(arg0) {
      return set5.has(arg0);
    }
  };
  items[6] = {
    key: "lastFetchedCurrentQuests",
    get() {
      return closure_12;
    }
  };
  items[7] = {
    key: "lastFetchedQuestToDeliver",
    get() {
      return closure_13;
    }
  };
  items[8] = {
    key: "isFetchingQuestToDeliver",
    get() {
      return closure_4;
    }
  };
  items[9] = {
    key: "isFetchingQuestToDeliverByPlacement",
    value(arg0) {
      let value;
      if (null != closure_5) {
        value = closure_5.get(arg0);
      }
      return null != value && value;
    }
  };
  items[10] = {
    key: "canRefreshAd",
    value(arg0) {
      let value;
      if (null != closure_40) {
        value = closure_40.get(arg0);
      }
      let tmp3 = null == value;
      if (!tmp3) {
        const _Date = Date;
        tmp3 = Date.now() >= value;
      }
      return tmp3;
    }
  };
  items[11] = {
    key: "getQuestPreviewOverride",
    value(arg0) {
      let value = closure_23.get(arg0);
      value = undefined;
      if (null != value) {
        value = store.get(value);
      }
      return value;
    }
  };
  items[12] = {
    key: "questToDeliverForPlacement",
    get() {
      return closure_25;
    }
  };
  items[13] = {
    key: "questEnrollmentBlockedUntil",
    get() {
      return closure_37;
    }
  };
  items[14] = {
    key: "questAdDecisionByPlacement",
    get() {
      return closure_38;
    }
  };
  items[15] = {
    key: "getFetchQuestPreviewError",
    value(arg0) {
      return closure_49.get(arg0);
    }
  };
  items[16] = {
    key: "isEnrolling",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[17] = {
    key: "isClaimingReward",
    value(arg0) {
      return set2.has(arg0);
    }
  };
  items[18] = {
    key: "isFetchingRewardCode",
    value(arg0) {
      return set3.has(arg0);
    }
  };
  items[19] = {
    key: "isDismissingContent",
    value(arg0) {
      return set4.has(arg0);
    }
  };
  items[20] = {
    key: "getRewardCode",
    value(arg0) {
      return closure_20.get(arg0);
    }
  };
  items[21] = {
    key: "getRewards",
    value(arg0) {
      return closure_21.get(arg0);
    }
  };
  items[22] = {
    key: "getStreamHeartbeatFailure",
    value(arg0) {
      return closure_22.get(arg0);
    }
  };
  items[23] = {
    key: "getQuest",
    value(arg0) {
      return store.get(arg0);
    }
  };
  items[24] = {
    key: "getQuestConfig",
    value(arg0) {
      const quest = this.getQuest(arg0);
      let config;
      if (null != quest) {
        config = quest.config;
      }
      return config;
    }
  };
  items[25] = {
    key: "isProgressingOnDesktop",
    value(arg0) {
      return set6.has(arg0);
    }
  };
  items[26] = {
    key: "selectedTaskPlatform",
    value(arg0) {
      const value = closure_24.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[27] = {
    key: "getOptimisticProgress",
    value(arg0, arg1) {
      let value = closure_42.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      return value;
    }
  };
  items[28] = {
    key: "getExpiredQuestsMap",
    value() {
      return closure_36;
    }
  };
  items[29] = {
    key: "isQuestExpired",
    value(arg0) {
      const value = closure_36.get(arg0);
      return null != value && value;
    }
  };
  items[30] = {
    key: "getQuestLoadedViaPreview",
    value(arg0) {
      return closure_41.get(arg0);
    }
  };
  items[31] = {
    key: "isFetchingQuestHomeHero",
    value() {
      return closure_47;
    }
  };
  items[32] = {
    key: "getQuestHomeHero",
    value() {
      return closure_48;
    }
  };
  items[33] = {
    key: "getLastFetchedQuestHomeHero",
    value() {
      return closure_46;
    }
  };
  items[34] = {
    key: "isFetchingEarnedQuestToDeliver",
    get() {
      return closure_7;
    }
  };
  items[35] = {
    key: "isFetchingEarnedQuestToDeliverByPlacement",
    value(arg0) {
      let value;
      if (null != closure_8) {
        value = closure_8.get(arg0);
      }
      return null != value && value;
    }
  };
  items[36] = {
    key: "earnedQuestForPlacement",
    get() {
      return closure_26;
    }
  };
  return callback(QuestStore, items);
}(importDefault(dependencyMap[21]).Store);
tmp5.displayName = "QuestStore";
tmp5 = new tmp5(importDefault(dependencyMap[22]), {
  LOGOUT: function handleLogout() {
    _stopExpirationChecker();
    initializeState();
    const state = store3.getState();
    state.clearState();
    const state1 = state.getState();
    state1.reset();
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function handleFetchCurrentQuestsBegin() {
    let closure_3 = true;
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function handleFetchCurrentQuestsSuccess(excludedQuests) {
    let done;
    let iter2;
    let iter6;
    let questEnrollmentBlockedUntil;
    let quests;
    ({ quests, questEnrollmentBlockedUntil } = excludedQuests);
    const items = [...closure_9.keys()];
    const mapped = quests.map((id) => id.id);
    const arg1 = mapped;
    const found = items.filter((arg0) => !mapped.includes(arg0));
    if (found.length > 0) {
      let obj = importDefault(dependencyMap[13]);
      obj = { category: "quests.store" };
      const _HermesInternal = HermesInternal;
      obj.message = "handleFetchCurrentQuestsSuccess: " + found.length + " quest(s) removed during rebuild";
      obj = { prevQuestIds: items, nextQuestIds: mapped, removedIds: found };
      obj.data = obj;
      obj.addBreadcrumb(obj);
    }
    let closure_12 = Date.now();
    let closure_3 = false;
    const map = new Map();
    const map1 = new Map();
    const tmp7 = _createForOfIteratorHelperLoose(quests);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp8 = closure_9;
        let result = closure_9.set(value.id, value);
        let tmp10 = closure_0;
        let tmp11 = closure_2;
        let obj5 = closure_0(closure_2[14]);
        let result1 = map1.set(value.id, obj5.isQuestExpired(value));
        let targetedContent = value.targetedContent;
        if (targetedContent.includes(closure_0(closure_2[15]).QuestContent.QUEST_BAR)) {
          let tmp13 = closure_0;
          let tmp14 = closure_2;
          let obj6 = closure_0(closure_2[16]);
          let obj1 = {};
          let tmp15 = closure_35;
          obj1.location = closure_35.QUESTS_STORE;
          let questLogger = obj6.getQuestLogger(obj1);
          let _HermesInternal2 = HermesInternal;
          let str4 = "Delivered ";
          let str5 = " (";
          let str6 = ")";
          let logResult = questLogger.log("Delivered " + value.config.messages.questName + " (" + value.id + ")");
        }
        iter2 = tmp7();
        iter = iter2;
      } while (!iter2.done);
    }
    const map2 = new Map();
    const tmp18 = _createForOfIteratorHelperLoose(excludedQuests.excludedQuests);
    let iter3 = tmp18();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp19 = closure_10;
        let result2 = closure_10.set(value.id, value);
        let iter4 = tmp18();
        iter3 = iter4;
        done = iter4.done;
      } while (!done);
    }
    let values;
    if (null != closure_41) {
      values = closure_41.values();
    }
    const tmp21Result = _createForOfIteratorHelperLoose(values);
    let iter5 = tmp21Result();
    if (!iter5.done) {
      do {
        value = iter5.value;
        let tmp24 = closure_9;
        if (!closure_9.has(value.id)) {
          let tmp25 = closure_9;
          let result3 = closure_9.set(value.id, value);
          let tmp27 = closure_0;
          let tmp28 = closure_2;
          let obj10 = closure_0(closure_2[14]);
          let result4 = map1.set(value.id, obj10.isQuestExpired(value));
        }
        iter6 = tmp21Result();
        iter5 = iter6;
      } while (!iter6.done);
    }
    _stopExpirationChecker();
    _runExpirationCheck();
    let date = null;
    if (null != questEnrollmentBlockedUntil) {
      const _Date = Date;
      date = new Date(questEnrollmentBlockedUntil);
    }
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function handleFetchCurrentQuestsFailure() {
    let closure_12 = 0;
    let closure_3 = false;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function handleFetchClaimedQuestsBegin() {
    let closure_6 = true;
  },
  QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function handleFetchClaimedQuestsSuccess(quests) {
    let done;
    let closure_6 = false;
    const map = new Map();
    const tmp2 = _createForOfIteratorHelperLoose(quests.quests);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = closure_11;
        let result = closure_11.set(value.id, value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function handleFetchClaimedQuestsFailure() {
    let closure_6 = false;
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    let closure_4 = true;
    const map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    let adContext;
    let adDecisionData;
    let fetchedAt;
    let fromExpirationClear;
    let metadataSealed;
    let placement;
    let quest;
    let responseTtlSeconds;
    let trafficMetadataSealed;
    ({ quest, placement, adDecisionData, adContext, metadataSealed, trafficMetadataSealed, fromExpirationClear } = arg0);
    ({ responseTtlSeconds, fetchedAt } = arg0);
    if (fromExpirationClear === undefined) {
      fromExpirationClear = false;
    }
    let closure_13 = Date.now();
    let closure_4 = false;
    const map = new Map(map);
    const result = map.set(placement, false);
    if (!fromExpirationClear) {
      const value = store5.get(placement);
      if (null != value) {
        value.succeed();
      }
      map2.delete(placement);
    }
    if (obj3.getConfig({ location: "handleFetchQuestToDeliverSuccess" }).enableNewRequestBehavior) {
      let obj = {};
      let id;
      if (null != quest) {
        id = quest.id;
      }
      let tmp12 = null;
      if (null != id) {
        tmp12 = id;
      }
      obj.questId = tmp12;
      let id1;
      if (null != quest) {
        id1 = quest.id;
      }
      let tmp14 = null;
      if (null != id1) {
        tmp14 = id1;
      }
      obj.adCreativeId = tmp14;
      obj.fetchedAt = fetchedAt;
      obj.ttlMillis = arg1(dependencyMap[19]).resolveResponseTtl(responseTtlSeconds);
      obj.adDecisionData = adDecisionData;
      obj.adContext = adContext;
      obj.metadataSealed = metadataSealed;
      obj.trafficMetadataSealed = trafficMetadataSealed;
      const _Map = Map;
      const map1 = new Map(map1);
      const result1 = map1.set(placement, obj);
      const obj6 = arg1(dependencyMap[19]);
    } else if (null == quest) {
      map.delete(placement);
    } else {
      obj = { quest, adDecisionData, adContext, metadataSealed, trafficMetadataSealed };
      const result2 = map.set(placement, obj);
    }
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    map.delete(placement);
    let closure_13 = Date.now();
    let closure_4 = false;
    const map = new Map(map);
    const result = map.set(placement, false);
    let value = store5.get(placement);
    if (null == value) {
      let tmp5 = importDefault(dependencyMap[20]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(closure_44, closure_45);
      const result1 = store5.set(placement, tmp5);
      value = tmp5;
    }
    const timestamp = Date.now();
    const result2 = map2.set(placement, timestamp + value.fail());
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function handleFetchEarnedQuestToDeliverBegin(content) {
    let closure_7 = true;
    const map = new Map(map);
    const result = map.set(content.content, true);
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function handleFetchEarnedQuestToDeliverSuccess(content) {
    let fetchedAt;
    let iter3;
    let responseTtlSeconds;
    let serverQuests;
    let tmp8;
    let tmp9;
    content = content.content;
    let closure_7 = false;
    ({ serverQuests, fetchedAt, responseTtlSeconds } = content);
    const map = new Map(map);
    const result = map.set(content, false);
    const responseTtl = arg1(dependencyMap[19]).resolveResponseTtl(responseTtlSeconds);
    let value = store2.get(content);
    let prop;
    if (null != value) {
      prop = value.earnedDecisionByQuestId;
    }
    const map1 = new Map(prop);
    const tmp5 = _createForOfIteratorHelperLoose(serverQuests);
    const iter = tmp5();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp6 = closure_32;
        let tmp7 = closure_32(iter2.value, 2);
        [tmp8, tmp9] = tmp7;
        let obj = { fetchedAt, ttlMillis: responseTtl, shouldDeliver: null != tmp9 };
        let result1 = map1.set(tmp8, obj);
        if (null != tmp9) {
          let tmp15 = closure_9;
          let tmp17 = closure_0;
          let tmp18 = closure_2;
          value = closure_9.get(tmp8);
          let obj5 = closure_0(closure_2[17]);
          let result2 = obj5.questWithUserStatusFromServer(tmp9);
          if (null != value) {
            let tmp11 = closure_55;
            let tmp12 = closure_55(tmp8, result2);
            let tmp13 = result2;
          } else {
            let _Map = Map;
            let tmp20 = closure_9;
            let tmp21 = new.target;
            let tmp22 = new.target;
            let map2 = new Map(closure_9);
            let tmp23 = map2;
            closure_9 = map2;
            let result3 = map2.set(tmp8, result2);
            let _Map2 = Map;
            let tmp25 = closure_36;
            let tmp26 = new.target;
            let tmp27 = new.target;
            let map3 = new Map(closure_36);
            let tmp28 = map3;
            closure_36 = map3;
            let tmp29 = closure_0;
            let tmp30 = closure_2;
            let obj8 = closure_0(closure_2[14]);
            let result4 = map3.set(tmp8, obj8.isQuestExpired(result2));
            let tmp32 = result2;
          }
        }
        iter3 = tmp5();
        iter2 = iter3;
      } while (!iter3.done);
    }
    const result5 = store2.set(content, { earnedDecisionByQuestId: map1 });
  },
  QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function handleFetchEarnedQuestToDeliverFailure(content) {
    let closure_7 = false;
    const map = new Map(map);
    const result = map.set(content.content, false);
  },
  QUESTS_FETCH_PREVIEW_BEGIN: function handleFetchQuestPreviewBegin(questId) {
    questId = questId.questId;
    const set = new Set(set);
    set.add(questId);
    const map = new Map(map);
    map.delete(questId);
  },
  QUESTS_FETCH_PREVIEW_SUCCESS: function handleFetchQuestPreviewSuccess(arg0) {
    let quest;
    let questId;
    ({ questId, quest } = arg0);
    const set = new Set(set);
    set.delete(questId);
    const map = new Map(map);
    const result = map.set(questId, quest);
    let map1 = new Map(map1);
    const result1 = map1.set(questId, quest);
    const map2 = new Map(map1);
    map1 = map2;
    map2.delete(questId);
  },
  QUESTS_FETCH_PREVIEW_FAILURE: function handleFetchQuestPreviewFailure(questId) {
    questId = questId.questId;
    const set = new Set(set);
    set.delete(questId);
    const map = new Map(map);
    const result = map.set(questId, questId.error);
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function handleSendHeartbeatSuccess(userStatus) {
    let questId;
    let streamKey;
    ({ questId, streamKey } = userStatus);
    set.add(questId);
    updateQuestData(questId, { userStatus: userStatus.userStatus });
    if (null != streamKey) {
      maybeDeleteQuestHeartbeatFailure(streamKey);
    }
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function handleSendHeartbeatFailure(streamKey) {
    streamKey = streamKey.streamKey;
    let tmp = null != streamKey;
    if (tmp) {
      tmp = null == map.get(streamKey);
    }
    if (tmp) {
      const _Map = Map;
      const map = new Map(map);
      const obj = { questId: streamKey.questId, streamKey };
      const _Date = Date;
      obj.firstFailedAt = Date.now();
      const result = map.set(streamKey, obj);
    }
  },
  QUESTS_ENROLL_BEGIN: function handleEnrollBegin(questId) {
    const set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_ENROLL_SUCCESS: function handleEnrollSuccess(enrolledQuestUserStatus) {
    enrolledQuestUserStatus = enrolledQuestUserStatus.enrolledQuestUserStatus;
    updateQuestData(enrolledQuestUserStatus.questId, { userStatus: enrolledQuestUserStatus });
    removeQuestIdFromIsEnrolling(enrolledQuestUserStatus.questId);
  },
  QUESTS_ENROLL_FAILURE: function handleEnrollFailure(questId) {
    removeQuestIdFromIsEnrolling(questId.questId);
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function handleFetchRewardCodeBegin(questId) {
    const set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function handleFetchRewardCodeSuccess(arg0) {
    let questId;
    let rewardCode;
    ({ questId, rewardCode } = arg0);
    const set = new Set(set);
    set.delete(questId);
    _addRewardCode(questId, rewardCode);
    const value = store.get(questId);
    let userStatus;
    if (null != value) {
      userStatus = value.userStatus;
    }
    if (tmp5) {
      let obj = {};
      obj = {};
      const merged = Object.assign(userStatus);
      obj["claimedAt"] = rewardCode.claimedAt;
      obj.userStatus = obj;
      updateQuestData(questId, obj);
    }
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function handleFetchRewardCodeFailure(questId) {
    const set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_CLAIM_REWARD_BEGIN: function handleClaimRewardBegin(questId) {
    const set = new Set(set);
    set.add(questId.questId);
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function handleClaimRewardSuccess(questId) {
    questId = questId.questId;
    const set = new Set(set);
    set.delete(questId);
    updateQuestRewardData(questId, questId.entitlements);
  },
  QUESTS_CLAIM_REWARD_FAILURE: function handleClaimRewardFailure(questId) {
    const set = new Set(set);
    set.delete(questId.questId);
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function handleDismissContentBegin(questId) {
    let iter3;
    questId = questId.questId;
    const set = new Set(set);
    set.add(questId);
    const map = new Map(map);
    const tmp2 = _createForOfIteratorHelperLoose(map);
    const iter = tmp2();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp3 = closure_32;
        let tmp4 = closure_32(iter2.value, 2);
        if (tmp4[1] === questId) {
          let deleteResult = map.delete(tmp5);
          flag = true;
        }
        iter3 = tmp2();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function handleDismissContentSuccess(dismissedQuestUserStatus) {
    dismissedQuestUserStatus = dismissedQuestUserStatus.dismissedQuestUserStatus;
    updateQuestData(dismissedQuestUserStatus.questId, { userStatus: dismissedQuestUserStatus });
    removeQuestIdFromIsDismissing(dismissedQuestUserStatus.questId);
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function handleDismissContentFailure(questId) {
    removeQuestIdFromIsDismissing(questId.questId);
  },
  QUESTS_USER_STATUS_UPDATE: function handleQuestUserStatusUpdate(user_status) {
    user_status = user_status.user_status;
    let obj = arg1(dependencyMap[16]);
    obj = { location: QuestsExperimentLocations.QUESTS_STORE };
    const questLogger = obj.getQuestLogger(obj);
    questLogger.log("Received user status update for " + user_status.quest_id, user_status);
    const result = arg1(dependencyMap[17]).questUserStatusFromServer(user_status);
    updateQuestData(user_status.quest_id, { userStatus: result });
    const value = store.get(user_status.quest_id);
    if (null != value) {
      const isQuestExpiredResult = arg1(dependencyMap[14]).isQuestExpired(value);
      if (store4.get(user_status.quest_id) !== isQuestExpiredResult) {
        const _Map = Map;
        const map = new Map(store4);
        const store4 = map.set(user_status.quest_id, isQuestExpiredResult);
      }
      const obj5 = arg1(dependencyMap[14]);
    }
    let hasItem = 0 === Object.keys(result.progress).length;
    if (hasItem) {
      hasItem = map.has(result.questId);
    }
    if (hasItem) {
      const _HermesInternal = HermesInternal;
      questLogger.log("Removing optimistic progress for " + result.questId);
      map.delete(result.questId);
    }
  },
  STREAM_CLOSE: function handleStreamClose(streamKey) {
    maybeDeleteQuestHeartbeatFailure(streamKey.streamKey);
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function handleDismissProgressTrackingFailureNotice(streamKey) {
    maybeDeleteQuestHeartbeatFailure(streamKey.streamKey);
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function handlePreviewUpdateSuccess(previewQuestUserStatus) {
    previewQuestUserStatus = previewQuestUserStatus.previewQuestUserStatus;
    updateQuestData(previewQuestUserStatus.questId, { userStatus: previewQuestUserStatus });
    if (null == previewQuestUserStatus.claimedAt) {
      const _Map = Map;
      const map = new Map(map);
      map.delete(previewQuestUserStatus.questId);
    }
    if (null == previewQuestUserStatus.enrolledAt) {
      const _Map2 = Map;
      const map1 = new Map(map1);
      map1.delete(previewQuestUserStatus.questId);
      const state = store3.getState();
      state.resetQuest(previewQuestUserStatus.questId);
    }
    const value = store.get(previewQuestUserStatus.questId);
    if (null != value) {
      const isQuestExpiredResult = arg1(dependencyMap[14]).isQuestExpired(value);
      if (store4.get(previewQuestUserStatus.questId) !== isQuestExpiredResult) {
        const _Map3 = Map;
        const map2 = new Map(store4);
        const store4 = map2.set(previewQuestUserStatus.questId, isQuestExpiredResult);
      }
      const obj4 = arg1(dependencyMap[14]);
    }
  },
  QUESTS_PREVIEW_OVERRIDE: function handlePreviewOverride(arg0) {
    let placement;
    let questId;
    ({ placement, questId } = arg0);
    const map = new Map(map);
    if (map.get(placement) === questId) {
      map.delete(placement);
    } else {
      const result = map.set(placement, questId);
    }
  },
  QUESTS_SELECT_TASK_PLATFORM: function handleSelectTaskPlatform(arg0) {
    let platform;
    let questId;
    ({ questId, platform } = arg0);
    const map = new Map(map);
    if (null == platform) {
      map.delete(questId);
    } else {
      const result = map.set(questId, platform);
    }
  },
  QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function handleUpdateOptimisticProgress(questId) {
    let progress;
    let taskEventName;
    questId = questId.questId;
    ({ taskEventName, progress } = questId);
    let map = map.get(questId);
    if (null == map) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(taskEventName, progress);
    const result1 = map.set(questId, map);
  },
  QUESTS_RESET_OPTIMISTIC_PROGRESS: function handleResetOptimisticProgress(questId) {
    questId = questId.questId;
    if (map.has(questId)) {
      map.delete(questId);
    }
    const state = store3.getState();
    state.resetQuest(questId);
  },
  QUESTS_USER_COMPLETION_UPDATE: function handleUserCompletionUpdate(quest_enrollment_blocked_until) {
    quest_enrollment_blocked_until = quest_enrollment_blocked_until.quest_enrollment_blocked_until;
    let date = null;
    if (null != quest_enrollment_blocked_until) {
      const _Date = Date;
      date = new Date(quest_enrollment_blocked_until);
    }
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    let closure_47 = true;
    const map = new Map(map);
    const result = map.set(placement.placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(placement) {
    let closure_47 = false;
    let closure_46 = Date.now();
    const map = new Map(map);
    const result = map.set(placement.placement, false);
    const questHomeHero2 = placement.questHomeHero;
    const obj = { questId: null };
    const questHomeHero = placement.questHomeHero;
    let id;
    if (null != questHomeHero) {
      id = questHomeHero.id;
    }
    let tmp3 = null;
    if (null != id) {
      tmp3 = id;
    }
    obj.adCreativeId = tmp3;
    obj.fetchedAt = placement.fetchedAt;
    obj.ttlMillis = arg1(dependencyMap[19]).resolveResponseTtl(placement.responseTtlSeconds);
    ({ adDecisionData: obj2.adDecisionData, adContext: obj2.adContext, metadataSealed: obj2.metadataSealed, trafficMetadataSealed: obj2.trafficMetadataSealed } = placement);
    const map1 = new Map(map1);
    const result1 = map1.set(placement.placement, obj);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    let closure_47 = false;
    const map = new Map(map);
    const result = map.set(placement.placement, false);
  }
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/quests/QuestStore.tsx");

export default tmp5;
