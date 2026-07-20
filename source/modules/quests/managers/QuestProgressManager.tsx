// Module ID: 16441
// Function ID: 127027
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16441 (_isNativeReflectConstruct)
let QuestsExperimentLocations;
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
function isQuestProgressable(userStatus) {
  let tmp = !arg1(dependencyMap[18]).isQuestExpired(userStatus);
  if (tmp) {
    tmp = null != userStatus.userStatus;
  }
  if (tmp) {
    tmp = null != userStatus.userStatus.enrolledAt;
  }
  if (tmp) {
    tmp = null == userStatus.userStatus.completedAt;
  }
  return tmp;
}
function handleEmbeddedActivityLaunchSuccess(applicationId) {
  let obj = arg1(dependencyMap[19]);
  const tmp2 = _createForOfIteratorHelperLoose(obj.getEligibleQuestsForApplicationId(quests.quests, applicationId));
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      if (tmp) {
        let features = iter2.value.config.features;
        let tmp4 = arg1;
        let tmp5 = dependencyMap;
        if (features.includes(arg1(dependencyMap[20]).QuestVariants.MOBILE_ACTIVITY_QUEST)) {
          break;
        }
      }
      let iter3 = tmp2();
      iter2 = iter3;
    }
    obj = { questContent: arg1(dependencyMap[22]).QuestContent.RUNNING_ACTIVITY, questContentCTA: arg1(dependencyMap[23]).QuestContentCTA.START_QUEST, sourceQuestContent: arg1(dependencyMap[22]).QuestContent.RUNNING_ACTIVITY };
    return arg1(dependencyMap[21]).enrollInQuest(tmp3.id, obj);
  }
}
function isQuestRobloxRelated(arr, distributor) {
  let tmp = null != distributor;
  if (tmp) {
    let someResult = arr.some((arg0) => arg0 === callback(closure_2[24]).ROBLOX_APPLICATION_ID);
    if (someResult) {
      someResult = distributor(dependencyMap[25]).isRobloxSubgame(distributor);
      const obj = distributor(dependencyMap[25]);
    }
    tmp = someResult;
  }
  return tmp;
}
function manualHeartbeatInitializationQuest(config) {
  let hasItem = null != config;
  if (hasItem) {
    const features = config.config.features;
    hasItem = features.includes(arg1(dependencyMap[20]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
  }
  return hasItem;
}
importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
let closure_15 = importDefault(dependencyMap[13]);
let closure_16 = importDefault(dependencyMap[14]);
({ DISCORD_APPLICATION_ID: closure_17, QuestsExperimentLocations } = arg1(dependencyMap[15]));
const MINUTE = importDefault(dependencyMap[16]).Millis.MINUTE;
const SECOND = importDefault(dependencyMap[16]).Millis.SECOND;
let obj = arg1(dependencyMap[17]);
obj = { location: QuestsExperimentLocations.QUESTS_MANAGER };
const questLogger = obj.getQuestLogger(obj);
let tmp4 = (arg0) => {
  class QuestProgressManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_4(this, QuestProgressManager);
      items1 = [...items];
      obj = closure_7(QuestProgressManager);
      tmp3 = closure_6;
      if (closure_22()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      QuestProgressManager = tmp3Result;
      obj = {};
      map = new Map();
      obj[QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP] = map;
      map1 = new Map();
      obj[QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP] = map1;
      map2 = new Map();
      obj[QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY] = map2;
      tmp3Result.heartbeats = obj;
      tmp3Result.calculateHeartbeatDurationMs = (arg0) => {
        const quests = closure_15.quests;
        const value = quests.get(arg0);
        if (null != value) {
          if (null != value.config) {
            if (null != value.userStatus) {
              const questTaskDetails = tmp3Result(closure_2[27]).getQuestTaskDetails(value, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypesSets.DESKTOP);
              const _Math = Math;
              const diff = questTaskDetails.targetSeconds - questTaskDetails.progressSeconds;
              const bound = Math.max(0, diff * callback(closure_2[16]).Millis.SECOND);
              if (bound <= closure_19) {
                let sum = bound + closure_20;
              } else {
                sum = closure_19;
              }
              return sum;
            }
          }
        }
        return closure_19;
      };
      tmp3Result.initiateHeartbeat = (arg0, arg1, arg2) => {
        let closure_1 = arg1;
        const obj = arg0.heartbeats[arg1];
        if (obj.has(arg0)) {
          const _HermesInternal2 = HermesInternal;
          closure_21.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: " + arg0);
        } else {
          function maybeSendHeartbeat(self, arg1, self2) {
            const activelyProgressingQuests = self.getActivelyProgressingQuests(arg1);
            if (activelyProgressingQuests.has(self)) {
              const value = activelyProgressingQuests.get(self);
              let result = null;
              let timerId;
              let applicationId;
              if (null != value) {
                applicationId = value.applicationId;
              }
              if (result == applicationId) {
                let applicationId1;
                if (result != self2) {
                  applicationId1 = self2.applicationId;
                }
                applicationId = applicationId1;
              }
              const QuestHeartbeatExecutableFingerprintExperiment = self(self2[28]).QuestHeartbeatExecutableFingerprintExperiment;
              let obj = { location: constants.QUESTS_MANAGER };
              if (QuestHeartbeatExecutableFingerprintExperiment.getConfig(obj).enabled) {
                let prop;
                if (result != value) {
                  prop = value.executableFingerprint;
                }
                let tmp19 = prop;
              }
              let executablePath;
              if (result != value) {
                executablePath = value.executablePath;
              }
              if (result == executablePath) {
                let executablePath1;
                if (result != self2) {
                  executablePath1 = self2.executablePath;
                }
                executablePath = executablePath1;
              }
              if (arg1 === self(self2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
                const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
                if (result == currentUserActiveStream) {
                  const _HermesInternal3 = HermesInternal;
                  closure_21.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: " + self);
                  self.terminateHeartbeat(self, arg1);
                } else {
                  const _HermesInternal4 = HermesInternal;
                  const obj5 = self(self2[29]);
                  closure_21.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + self);
                  const encodeStreamKeyResult = self(self2[29]).encodeStreamKey(currentUserActiveStream);
                  obj = { questId: self, streamKey: encodeStreamKeyResult, applicationId, executablePath, executableFingerprint: tmp19 };
                  self(self2[21]).sendHeartbeat(obj);
                  const obj6 = self(self2[21]);
                }
              } else {
                const _HermesInternal2 = HermesInternal;
                closure_21.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + self);
                const obj1 = { questId: self, applicationId, executablePath, executableFingerprint: tmp19 };
                self(self2[21]).sendHeartbeat(obj1);
                const obj3 = self(self2[21]);
              }
              tmp19 = self;
              executablePath = self.calculateHeartbeatDurationMs(self);
              const _window = window;
              timerId = window.setTimeout(maybeSendHeartbeat, executablePath);
              result = obj.set(self, timerId);
            } else {
              const _HermesInternal = HermesInternal;
              closure_21.log("~ initiateHeartbeat -> Quest " + self + " is no longer actively progressing, terminating heartbeat");
              self.terminateHeartbeat(self, arg1);
            }
          }
          const _HermesInternal = HermesInternal;
          closure_21.log("~ initiateHeartbeat -> Initiating heartbeat for Quest " + arg0);
          maybeSendHeartbeat();
        }
      };
      tmp3Result.terminateHeartbeat = (questId) => {
        let obj = tmp3Result.heartbeats[arg1];
        const quests = closure_15.quests;
        let value = obj.get(questId);
        if (null != value) {
          const _HermesInternal2 = HermesInternal;
          closure_21.log("~ terminateHeartbeat -> Terminating heartbeat for questId: " + questId);
          const _window = window;
          window.clearTimeout(value);
          obj.delete(questId);
          value = quests.get(questId);
          let tmp3 = null != value;
          if (tmp3) {
            tmp3 = callback2(value);
          }
          if (tmp3) {
            const _HermesInternal = HermesInternal;
            closure_21.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: " + questId);
            obj = { questId, terminal: true };
            tmp3Result(closure_2[21]).sendHeartbeat(obj);
            const obj2 = tmp3Result(closure_2[21]);
          }
        }
      };
      tmp3Result.handleSendHeartbeatSuccess = (questId) => {
        let length;
        questId = questId.questId;
        closure_21.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: " + questId + ")");
        if (null != questId.userStatus.completedAt) {
          const _HermesInternal = HermesInternal;
          closure_21.log("~ handleSendHeartbeatSuccess -> Quest " + questId + " completed, terminating any heartbeats for it");
          const _Object = Object;
          const keys = Object.keys(tmp3Result.heartbeats);
          let num = 0;
          if (0 < keys.length) {
            do {
              let tmp5 = closure_0;
              let terminateHeartbeatResult = closure_0.terminateHeartbeat(questId, keys[num]);
              num = num + 1;
              length = keys.length;
            } while (num < length);
          }
        }
      };
      tmp3Result.handleSendHeartbeatFailure = (questId) => {
        closure_21.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: " + questId.questId);
      };
      obj1 = {
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS");
            },
        QUESTS_ENROLL_SUCCESS() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
              return tmp3Result.syncHeartbeats(items, "QUESTS_ENROLL_SUCCESS", (arg0) => !callback(arg0));
            },
        QUESTS_SEND_HEARTBEAT_SUCCESS: tmp3Result.handleSendHeartbeatSuccess,
        QUESTS_SEND_HEARTBEAT_FAILURE: tmp3Result.handleSendHeartbeatFailure,
        QUESTS_PREVIEW_UPDATE_SUCCESS() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
              return tmp3Result.syncHeartbeats(items, "QUESTS_PREVIEW_UPDATE_SUCCESS");
            },
        RUNNING_GAMES_CHANGE() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "RUNNING_GAMES_CHANGE");
            },
        RUNNING_NON_GAMES_CHANGE() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "RUNNING_NON_GAMES_CHANGE");
            },
        STREAM_START() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "STREAM_START");
            },
        STREAM_CREATE() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "STREAM_CREATE");
            },
        STREAM_CLOSE() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "STREAM_CLOSE");
            },
        PASSIVE_UPDATE_V2() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "PASSIVE_UPDATE_V2");
            },
        VOICE_STATE_UPDATES() {
              const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
              return tmp3Result.syncHeartbeats(items, "VOICE_STATE_UPDATES");
            },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(applicationId) {
              callback3(applicationId.applicationId);
            }
      };
      // CreateGeneratorClosureLongIndex (0x67)
      closure_1 = closure_3(tmp);
      obj1.FRAME_LAUNCH = function() {
        return callback(...arguments);
      };
      obj1.FRAME_STOP = function FRAME_STOP() {
        const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        tmp3Result.syncHeartbeats(items, "FRAME_STOP");
      };
      obj1.EMBEDDED_ACTIVITY_UPDATE_V2 = function EMBEDDED_ACTIVITY_UPDATE_V2() {
        const items = [tmp3Result(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        tmp3Result.syncHeartbeats(items, "EMBEDDED_ACTIVITY_UPDATE_V2", (arg0) => !callback(arg0));
      };
      obj1.QUEST_APPLICATION_START_TIMER = function QUEST_APPLICATION_START_TIMER(questId) {
        const items = [questId.questId(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
        questId.questId.syncHeartbeats(items, "QUEST_APPLICATION_START_TIMER", (id) => {
          let tmp = null != id;
          if (tmp) {
            tmp = id.id === questId;
          }
          if (tmp) {
            tmp = callback(id);
          }
          return tmp;
        });
      };
      tmp3Result.actions = obj1;
      return tmp3Result;
    }
  }
  const arg1 = QuestProgressManager;
  callback2(QuestProgressManager, arg0);
  let obj = {
    key: "syncHeartbeats",
    value(arg0, arg1, arg2) {

    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getActivelyProgressingQuests",
    value(arg0) {
      const self = this;
      if (QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === arg0) {
        return self.getActivelyProgressingPlayOnDesktopQuests();
      } else if (QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === arg0) {
        return self.getActivelyProgressingStreamOnDesktopQuests();
      } else if (QuestProgressManager(closure_2[26]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY === arg0) {
        return self.getActivelyProgressingActivityQuests();
      } else {
        QuestProgressManager(closure_2[30]).assertNever(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getActivelyProgressingPlayOnDesktopQuests",
    value() {
      let iter3;
      let iter5;
      let length;
      const map = new Map();
      const QuestProgressManager = map;
      const runningGames = store.getRunningGames();
      const runningNonGames = store.getRunningNonGames();
      const quests = closure_15.quests;
      closure_21.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", runningGames, "Running non-games: ", runningNonGames);
      const obj = {};
      const tmp4 = callback5(runningGames);
      const iter = tmp4();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp7 = tmp5;
          let tmp8 = tmp6;
          if (!value.isLauncher) {
            if (null == value.id) {
              let tmp9 = closure_11;
              let overrideForGame = closure_11.getOverrideForGame(value);
              if (null != value.distributor) {
                let tmp11 = closure_13;
                let findGameResult = closure_13.findGame(value);
                let id;
                if (null != findGameResult) {
                  id = findGameResult.id;
                }
                tmp7 = overrideForGame;
                tmp8 = findGameResult;
                if (null != id) {
                  obj[findGameResult.id] = value;
                  tmp7 = overrideForGame;
                  tmp8 = findGameResult;
                }
              } else {
                tmp8 = tmp6;
                tmp7 = overrideForGame;
              }
            } else {
              obj[value.id] = value;
              tmp7 = tmp5;
              tmp8 = tmp6;
            }
          }
          iter3 = tmp4();
          let tmp5 = tmp7;
          let tmp6 = tmp8;
          iter2 = iter3;
        } while (!iter3.done);
      }
      const tmp14 = callback5(runningNonGames);
      let iter4 = tmp14();
      if (!iter4.done) {
        do {
          value = iter4.value;
          if (null != value.id) {
            obj[value.id] = value;
          }
          iter5 = tmp14();
          iter4 = iter5;
        } while (!iter5.done);
      }
      function _loop(arg0) {
        let iter3;
        let obj = arg0(obj[31]);
        const result = obj.removeExecutablePathPrefix(tmp.exePath);
        const tmp3 = callback(quests.values());
        const iter = tmp3();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp5 = closure_0;
            let tmp6 = closure_2;
            let obj2 = closure_0(closure_2[27]);
            let desktopApplicationIds = obj2.getDesktopApplicationIds(value);
            let tmp7 = closure_25;
            let tmp8 = tmp4;
            if (closure_25(value)) {
              tmp8 = tmp4;
              if (null != desktopApplicationIds) {
                let found = desktopApplicationIds.find((arg0) => arg0 === arg0);
                if (null != found) {
                  let tmp14 = closure_0;
                  obj = { applicationId: found, executablePath: result, executableFingerprint: tmp.executableFingerprint };
                  let result1 = closure_0.set(value.id, obj);
                  tmp8 = found;
                } else {
                  let tmp9 = closure_27;
                  tmp8 = found;
                  if (closure_27(desktopApplicationIds, tmp)) {
                    let tmp10 = closure_0;
                    obj = {};
                    let tmp11 = closure_0;
                    let tmp12 = closure_2;
                    obj.applicationId = closure_0(closure_2[24]).ROBLOX_APPLICATION_ID;
                    obj.executablePath = result;
                    obj.executableFingerprint = tmp.executableFingerprint;
                    let result2 = closure_0.set(value.id, obj);
                    tmp8 = found;
                  }
                }
              }
            }
            iter3 = tmp3();
            let tmp4 = tmp8;
            iter2 = iter3;
          } while (!iter3.done);
        }
      }
      const keys = Object.keys(obj);
      let num = 0;
      if (0 < keys.length) {
        do {
          let _loopResult = _loop(keys[num]);
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      closure_21.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
      return map;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getActivelyProgressingStreamOnDesktopQuests",
    value: function getActivelyProgressingStreamOnDesktopQuests() {
      let iter;
      const map = new Map();
      const currentUserActiveStream = authStore.getCurrentUserActiveStream();
      if (null == currentUserActiveStream) {
        return map;
      } else if (closure_14.countVoiceStatesForChannel(currentUserActiveStream.channelId) < 2) {
        return map;
      } else {
        const streamerActiveStreamMetadata = authStore.getStreamerActiveStreamMetadata();
        if (null == streamerActiveStreamMetadata) {
          return map;
        } else {
          closure_21.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", streamerActiveStreamMetadata);
          const id = streamerActiveStreamMetadata.id;
          if (null == id) {
            return map;
          } else {
            const quests = closure_15.quests;
            const tmp17 = callback5(quests.values());
            let iter2 = tmp17();
            if (!iter2.done) {
              do {
                let value = iter2.value;
                let tmp2 = closure_0;
                let tmp3 = closure_2;
                let obj2 = closure_0(closure_2[27]);
                let streamingApplicationId = obj2.getStreamingApplicationId(value);
                let tmp5 = closure_25;
                let tmp6 = closure_25(value) && null != streamingApplicationId;
                if (tmp6) {
                  if (streamingApplicationId === id) {
                    let obj = { applicationId: id };
                    let result = map.set(value.id, obj);
                  }
                }
                iter = tmp17();
                iter2 = iter;
              } while (!iter.done);
            }
            const _Array = Array;
            closure_21.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
            return map;
          }
        }
      }
    }
  };
  items[4] = {
    key: "getActivelyProgressingActivityQuests",
    value: function getActivelyProgressingActivityQuests() {
      let iter3;
      let iter6;
      const map = new Map();
      const selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
      const connectedFrame = connectedFrame.getConnectedFrame();
      const set = new Set(selfEmbeddedActivities.keys());
      if (null != connectedFrame) {
        set.add(connectedFrame.applicationId);
      }
      closure_21.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(set));
      if (0 === set.size) {
        return map;
      } else {
        const quests = closure_15.quests;
        const tmp26 = callback5(set);
        const iter7 = tmp26();
        let iter4 = iter7;
        if (!iter7.done) {
          do {
            let value = iter4.value;
            let tmp4 = closure_23;
            let tmp5 = closure_23(quests.values());
            let iter = tmp5();
            if (!iter.done) {
              do {
                value = iter.value;
                let tmp6 = closure_0;
                let tmp7 = closure_2;
                let obj4 = closure_0(closure_2[27]);
                let playActivityApplicationId = obj4.getPlayActivityApplicationId(value);
                let tmp9 = closure_25;
                let tmp10 = closure_25(value) && null != playActivityApplicationId;
                if (tmp10) {
                  if (playActivityApplicationId === value) {
                    let obj = { applicationId: value };
                    let result = map.set(value.id, obj);
                  }
                }
                let iter2 = tmp5();
                iter = iter2;
                let tmp12 = value;
                let tmp13 = playActivityApplicationId;
              } while (!iter2.done);
            }
            iter3 = tmp26();
            iter4 = iter3;
          } while (!iter3.done);
        }
        const tmp15 = callback5(quests.values());
        let iter5 = tmp15();
        if (!iter5.done) {
          do {
            value = iter5.value;
            let tmp16 = closure_25;
            let result1 = closure_25(value);
            if (result1) {
              let tmp18 = closure_0;
              let tmp19 = closure_2;
              let obj6 = closure_0(closure_2[32]);
              result1 = obj6.isPlayAnyActivityQuest(value);
            }
            if (result1) {
              obj = {};
              let tmp20 = closure_17;
              obj.applicationId = closure_17;
              let result2 = map.set(value.id, obj);
            }
            iter6 = tmp15();
            iter5 = iter6;
          } while (!iter6.done);
        }
        const _Array = Array;
        closure_21.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
        return map;
      }
    }
  };
  return callback(QuestProgressManager, items);
}(importDefault(dependencyMap[33]));
tmp4 = new tmp4();
const tmp3 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/quests/managers/QuestProgressManager.tsx");

export default tmp4;
