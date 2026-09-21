// Module ID: 18347
// Function ID: 18348
// Name: QuestProgressManager
// Dependencies: [5, 32, 2040, 9313, 1999, 4778, 2015, 4780, 7939, 17495, 5661, 9314, 1091, 7945, 7935, 9624, 5662, 11542, 5664, 7964, 4887, 4886, 7363, 5669, 7960, 4808, 1370, 4885, 7958, 573, 2]

// Module 18347 (QuestProgressManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import GameAnalyticsUtils from "GameAnalyticsUtils" /* 4885 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4886 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 4887 */;
import QuestVariants from "QuestVariants" /* 5662 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5669 */;
import QuestDataUtils from "QuestDataUtils" /* 7935 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7958 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7960 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 9624 */;
import QuestActionCreators from "QuestActionCreators" /* 11542 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import FramesStore from "FramesStore" /* 9313 */;
import RunningGameStore from "RunningGameStore" /* 1999 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import DetectableGameStore from "DetectableGameStore" /* 2015 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4780 */;
import QuestStore from "QuestStore" /* 7939 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17495 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

require = fn;
function isQuestProgressable(nextResult) {
  const isQuestExpiredResult = QuestDataUtils.isQuestExpired(nextResult);
  let tmp2 = !isQuestExpiredResult;
  if (!isQuestExpiredResult) {
    tmp2 = null != nextResult.userStatus;
  }
  if (tmp2) {
    tmp2 = null != nextResult.userStatus.enrolledAt;
  }
  if (tmp2) {
    tmp2 = null == nextResult.userStatus.completedAt;
  }
  return tmp2;
}
function handleEmbeddedActivityLaunchSuccess(applicationId) {
  const eligibleQuestsForApplicationId = QuestMatchingUtils.getEligibleQuestsForApplicationId(QuestStore.quests, applicationId);
  for (const item10020 of eligibleQuestsForApplicationId) {
    if (tmp) {
      let features = tmp3.config.features;
      let tmp6 = require;
      if (features.includes(QuestVariants.QuestVariants.MOBILE_ACTIVITY_QUEST)) {
        let tmp6Result = tmp6(11542);
        let obj3 = { questContent: tmp6(5664).QuestContent.RUNNING_ACTIVITY, questContentCTA: tmp6(7964).QuestContentCTA.START_QUEST, sourceQuestContent: tmp6(5664).QuestContent.RUNNING_ACTIVITY };
        let enrollInQuestResult = tmp6Result.enrollInQuest(item10020.id, obj3);
        obj2.return();
        return enrollInQuestResult;
      }
    }
    continue;
  }
}
function isQuestRobloxRelated(desktopApplicationIds, distributor) {
  let tmp = null != distributor;
  if (tmp) {
    let someResult = desktopApplicationIds.some((item) => item === RobloxSubgameTypes.ROBLOX_APPLICATION_ID);
    if (someResult) {
      someResult = RobloxSubgameUtils.isRobloxSubgame(distributor);
    }
    tmp = someResult;
  }
  return tmp;
}
const QuestConstants = fn(5661);
({ DISCORD_APPLICATION_ID: closure_12, QuestsExperimentLocations } = QuestConstants);
const isLaunched = fn(9314).isLaunched;
const MINUTE = DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
const getQuestLogger = fn(7945);
const logger = getQuestLogger.getQuestLogger({ location: QuestsExperimentLocations.QUESTS_MANAGER });
class QuestProgressManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = {};
    map = new Map();
    obj[closure_0(closure_2[23]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP] = map;
    map1 = new Map();
    obj[closure_0(closure_2[23]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP] = map1;
    map2 = new Map();
    obj[closure_0(closure_2[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY] = map2;
    applyArgumentsResult.heartbeats = obj;
    applyArgumentsResult.calculateHeartbeatDurationMs = function calculateHeartbeatDurationMs(arg0) {
      quests = quests.quests;
      value = quests.get(arg0);
      if (null != value) {
        if (null != value.config) {
          if (null != value.userStatus) {
            const questTaskDetails = applyArgumentsResult(7960).getQuestTaskDetails(value, applyArgumentsResult(5669).FirstPartyQuestTaskTypesSets.DESKTOP);
            const _Math = Math;
            const diff = questTaskDetails.targetSeconds - questTaskDetails.progressSeconds;
            const bound = Math.max(0, diff * DurationsDefault.Millis.SECOND);
            let sum = MINUTE;
            if (bound <= MINUTE) {
              sum = bound + SECOND;
            }
            return sum;
          }
        }
      }
      return MINUTE;
    };
    applyArgumentsResult.initiateHeartbeat = function initiateHeartbeat(arg0, arg1, arg2) {
      closure_1 = arg1;
      closure_2 = arg2;
      const obj = arg0.heartbeats[arg1];
      if (obj.has(arg0)) {
        let _HermesInternal2 = HermesInternal;
        logger.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: " + arg0);
      } else {
        function maybeSendHeartbeat() {
          const activelyProgressingQuests = applyArgumentsResult.getActivelyProgressingQuests(closure_1);
          if (activelyProgressingQuests.has(closure_0)) {
            value = activelyProgressingQuests.get(tmp2);
            applicationId = undefined;
            if (value != null) {
              applicationId = value.applicationId;
            }
            if (applicationId == null) {
              let applicationId1;
              if (closure_2 != null) {
                applicationId1 = closure_2.applicationId;
              }
              applicationId = applicationId1;
            }
            let prop;
            if (value != null) {
              prop = value.executableFingerprint;
            }
            let executablePath;
            if (value != null) {
              executablePath = value.executablePath;
            }
            if (executablePath == null) {
              let executablePath1;
              if (closure_2 != null) {
                executablePath1 = closure_2.executablePath;
              }
              executablePath = executablePath1;
            }
            let timerId = require;
            if (tmp === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
              const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
              if (null == currentUserActiveStream) {
                const _HermesInternal3 = HermesInternal;
                logger.log("~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: " + tmp2);
                obj.terminateHeartbeat(tmp2, tmp);
              } else {
                const _HermesInternal4 = HermesInternal;
                const timerIdResult = timerId(4808);
                logger.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + tmp2);
                const encodeStreamKeyResult = timerId(4808).encodeStreamKey(currentUserActiveStream);
                const obj2 = { questId: tmp2, streamKey: encodeStreamKeyResult, applicationId, executablePath, executableFingerprint: prop };
                timerId(11542).sendHeartbeat(obj2);
                const timerIdResult1 = timerId(11542);
              }
            } else {
              const _HermesInternal2 = HermesInternal;
              logger.log("~ initiateHeartbeat -> Sending heartbeat for questId: " + tmp2);
              const obj3 = { questId: tmp2, applicationId, executablePath, executableFingerprint: prop };
              timerId(11542).sendHeartbeat(obj3);
              const timerIdResult2 = timerId(11542);
            }
            prop = obj.calculateHeartbeatDurationMs(tmp2);
            const _window = window;
            timerId = window.setTimeout(maybeSendHeartbeat, prop);
            const result = obj.set(tmp2, timerId);
          } else {
            const _HermesInternal = HermesInternal;
            logger.log("~ initiateHeartbeat -> Quest " + tmp2 + " is no longer actively progressing, terminating heartbeat");
            obj.terminateHeartbeat(tmp2, tmp);
          }
        }
        let _HermesInternal = HermesInternal;
        logger.log("~ initiateHeartbeat -> Initiating heartbeat for Quest " + arg0);
        maybeSendHeartbeat();
      }
    };
    applyArgumentsResult.terminateHeartbeat = function terminateHeartbeat(questId, item10030) {
      quests = QuestStore.quests;
      value = obj.get(questId);
      if (null != value) {
        const _HermesInternal2 = HermesInternal;
        logger.log("~ terminateHeartbeat -> Terminating heartbeat for questId: " + questId);
        const _window = window;
        window.clearTimeout(value);
        obj.delete(questId);
        value2 = quests.get(questId);
        let tmp6 = null != value2;
        if (tmp6) {
          const isQuestExpiredResult = QuestDataUtils.isQuestExpired(value2);
          let tmp5 = !isQuestExpiredResult;
          if (!isQuestExpiredResult) {
            tmp5 = null != value2.userStatus;
          }
          if (tmp5) {
            tmp5 = null != value2.userStatus.enrolledAt;
          }
          if (tmp5) {
            tmp5 = null == value2.userStatus.completedAt;
          }
          tmp6 = tmp5;
        }
        if (tmp6) {
          const _HermesInternal = HermesInternal;
          obj5.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: " + questId);
          const obj4 = { questId, terminal: true };
          QuestActionCreators.sendHeartbeat(obj4);
        }
        obj5 = logger;
      }
    };
    applyArgumentsResult.handleSendHeartbeatSuccess = function handleSendHeartbeatSuccess(questId) {
      questId = questId.questId;
      logger.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: " + questId + ")");
      if (null != questId.userStatus.completedAt) {
        const _HermesInternal = HermesInternal;
        logger.log("~ handleSendHeartbeatSuccess -> Quest " + questId + " completed, terminating any heartbeats for it");
        const _Object = Object;
        const keys = Object.keys(applyArgumentsResult.heartbeats);
        for (const item10030 of keys) {
          let terminateHeartbeatResult = applyArgumentsResult.terminateHeartbeat(questId, item10030);
          continue;
        }
      }
    };
    applyArgumentsResult.handleSendHeartbeatFailure = function handleSendHeartbeatFailure(questId) {
      logger.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: " + questId.questId);
    };
    obj1 = {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS");
          },
      QUESTS_ENROLL_SUCCESS() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
            return applyArgumentsResult.syncHeartbeats(items, "QUESTS_ENROLL_SUCCESS", (config) => {
              let hasItem = null != config;
              if (hasItem) {
                const features = config.config.features;
                hasItem = features.includes(closure_1_0(dependencyMap[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
              }
              return !hasItem;
            });
          },
      QUESTS_SEND_HEARTBEAT_SUCCESS: applyArgumentsResult.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: applyArgumentsResult.handleSendHeartbeatFailure,
      QUESTS_PREVIEW_UPDATE_SUCCESS() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
            return applyArgumentsResult.syncHeartbeats(items, "QUESTS_PREVIEW_UPDATE_SUCCESS");
          },
      GAME_FETCH_SUCCESS() {
            return DispatcherDefault.wait(() => {
              const items = [applyArgumentsResult(5669).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              closure_1_0.syncHeartbeats(items, "GAME_FETCH_SUCCESS");
            });
          },
      APPLICATIONS_FETCH_SUCCESS() {
            return DispatcherDefault.wait(() => {
              const items = [applyArgumentsResult(5669).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              closure_1_0.syncHeartbeats(items, "APPLICATIONS_FETCH_SUCCESS");
            });
          },
      RUNNING_GAMES_CHANGE() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "RUNNING_GAMES_CHANGE");
          },
      RUNNING_NON_GAMES_CHANGE() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "RUNNING_NON_GAMES_CHANGE");
          },
      LOCAL_ACTIVITY_UPDATE() {
            return DispatcherDefault.wait(() => {
              const items = [applyArgumentsResult(5669).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              closure_1_0.syncHeartbeats(items, "LOCAL_ACTIVITY_UPDATE");
            });
          },
      RPC_APP_DISCONNECTED() {
            return DispatcherDefault.wait(() => {
              const items = [applyArgumentsResult(5669).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
              closure_1_0.syncHeartbeats(items, "RPC_APP_DISCONNECTED");
            });
          },
      STREAM_START() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "STREAM_START");
          },
      STREAM_CREATE() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "STREAM_CREATE");
          },
      STREAM_CLOSE() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "STREAM_CLOSE");
          },
      PASSIVE_UPDATE_V2() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "PASSIVE_UPDATE_V2");
          },
      VOICE_STATE_UPDATES() {
            const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
            return applyArgumentsResult.syncHeartbeats(items, "VOICE_STATE_UPDATES");
          },
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(applicationId) {
            handleEmbeddedActivityLaunchSuccess(applicationId.applicationId);
          },
      FRAME_LAUNCH: null,
      FRAME_STOP: null,
      EMBEDDED_ACTIVITY_UPDATE_V2: null,
      QUEST_APPLICATION_START_TIMER: null
    };
    closure_129_0 = undefined;
    closure_129_1 = applyArgumentsResult;
    closure_129_0 = closure_3(async (arg0) => {
      await closure_1_18(applicationId);
      const items = [applyArgumentsResult(dependencyMap[23]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      closure_130_1.syncHeartbeats(items, "FRAME_LAUNCH", (config) => {
        let hasItem = null != config;
        if (hasItem) {
          const features = config.config.features;
          hasItem = features.includes(closure_1_0(closure_1_2[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
        }
        return !hasItem;
      });
      await "HermesInternal";
      closure_1 = tmp2;
      applicationId = applyArgumentsResult.applicationId;
      return "PX_16";
    });
    obj1.FRAME_LAUNCH = function FRAME_LAUNCH(arg0) {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj1.FRAME_STOP = function FRAME_STOP() {
      const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      applyArgumentsResult.syncHeartbeats(items, "FRAME_STOP");
    };
    obj1.EMBEDDED_ACTIVITY_UPDATE_V2 = function EMBEDDED_ACTIVITY_UPDATE_V2() {
      const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      applyArgumentsResult.syncHeartbeats(items, "EMBEDDED_ACTIVITY_UPDATE_V2", (config) => {
        let hasItem = null != config;
        if (hasItem) {
          const features = config.config.features;
          hasItem = features.includes(closure_1_0(dependencyMap[16]).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
        }
        return !hasItem;
      });
    };
    obj1.QUEST_APPLICATION_START_TIMER = function QUEST_APPLICATION_START_TIMER(questId) {
      questId = questId.questId;
      const items = [FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
      applyArgumentsResult.syncHeartbeats(items, "QUEST_APPLICATION_START_TIMER", (id) => {
        let tmp = null != id;
        if (tmp) {
          tmp = id.id === questId;
        }
        if (tmp) {
          let hasItem = null != id;
          if (hasItem) {
            const features = id.config.features;
            hasItem = features.includes(applyArgumentsResult(5662).QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
          }
          tmp = hasItem;
        }
        return tmp;
      });
    };
    applyArgumentsResult.actions = obj1;
    return applyArgumentsResult;
  }
}
const prototype = QuestProgressManager.prototype;
prototype["syncHeartbeats"] = function syncHeartbeats(items, APPLICATIONS_FETCH_SUCCESS, arg2) {

};
prototype["getActivelyProgressingQuests"] = function getActivelyProgressingQuests(arg0) {
  const self = this;
  if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === arg0) {
    return self.getActivelyProgressingPlayOnDesktopQuests();
  } else if (tmp(5669).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === arg0) {
    return self.getActivelyProgressingStreamOnDesktopQuests();
  } else if (tmp(5669).FirstPartyQuestTaskTypes.PLAY_ACTIVITY === arg0) {
    return self.getActivelyProgressingActivityQuests();
  } else {
    tmp(1370).assertNever(arg0);
  }
};
prototype["getActivelyProgressingPlayOnDesktopQuests"] = function getActivelyProgressingPlayOnDesktopQuests() {
  const map = new Map();
  const runningGames = RunningGameStore.getRunningGames();
  const runningNonGames = RunningGameStore.getRunningNonGames();
  const quests = QuestStore.quests;
  logger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", runningGames, "Running non-games: ", runningNonGames);
  let obj = {};
  let iter = runningGames[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (!nextResult.isLauncher) {
      let id = tmp5.id;
      let tmp7 = id;
      if (null == id) {
        let overrideForGame = RunningGameStore.getOverrideForGame(tmp5);
        let findGameResult = DetectableGameStore.findGame(tmp5);
        let id1;
        if (findGameResult != null) {
          id1 = findGameResult.id;
        }
        tmp7 = id1;
      }
      if (null != tmp7) {
        let obj3 = map(obj[15]);
        let questApplicationIdsForRunningGame = obj3.getQuestApplicationIdsForRunningGame(tmp5, tmp7);
        for (const item10062 of questApplicationIdsForRunningGame) {
          obj[item10062] = tmp5;
          continue;
        }
      }
    }
    continue;
  }
  for (const item10070 of runningNonGames) {
    let tmp25 = item10070;
    if (null != item10070.id) {
      obj[tmp25.id] = tmp25;
    }
    continue;
  }
  function _loop(iter2) {
    closure_0 = iter2;
    obj = GameAnalyticsUtils;
    const result = obj.removeExecutablePathPrefix(tmp.exePath);
    const values = quests.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let tmp7 = require;
      let obj2 = QuestTaskUtils;
      let desktopApplicationIds = obj2.getDesktopApplicationIds(nextResult);
      if (isQuestProgressable(nextResult)) {
        if (null != desktopApplicationIds) {
          let found = desktopApplicationIds.find((item) => item === closure_0);
          if (null != found) {
            let obj3 = { applicationId: null, executablePath: null, executableFingerprint: null };
            obj3.applicationId = tmp25;
            obj3.executablePath = result;
            obj3.executableFingerprint = tmp.executableFingerprint;
            let result1 = map.set(tmp5.id, obj3);
          } else if (isQuestRobloxRelated(desktopApplicationIds, tmp)) {
            let obj4 = { applicationId: null, executablePath: null, executableFingerprint: null };
            obj4.applicationId = tmp7(4887).ROBLOX_APPLICATION_ID;
            obj4.executablePath = result;
            obj4.executableFingerprint = tmp.executableFingerprint;
            let result2 = map.set(tmp5.id, obj4);
          }
        }
      }
      continue;
    }
  }
  const keys = Object.keys(obj);
  const iter2 = keys[Symbol.iterator]();
  while (iter2 !== undefined) {
    let _loopResult = _loop(iter2.next());
    continue;
  }
  logger.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
  return map;
};
prototype["getActivelyProgressingStreamOnDesktopQuests"] = function getActivelyProgressingStreamOnDesktopQuests() {
  const map = new Map();
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null == currentUserActiveStream) {
    return map;
  } else if (SortedVoiceStateStore.countVoiceStatesForChannel(currentUserActiveStream.channelId) < 2) {
    return map;
  } else {
    const streamerActiveStreamMetadata = obj2.getStreamerActiveStreamMetadata();
    if (null == streamerActiveStreamMetadata) {
      return map;
    } else {
      logger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", streamerActiveStreamMetadata);
      const id = streamerActiveStreamMetadata.id;
      if (null == id) {
        return map;
      } else {
        const quests = QuestStore.quests;
        const values = quests.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          let obj3 = QuestTaskUtils;
          let streamingApplicationId = obj3.getStreamingApplicationId(nextResult);
          let tmp10 = isQuestProgressable(nextResult);
          if (tmp10) {
            tmp10 = null != streamingApplicationId;
          }
          if (tmp10) {
            if (streamingApplicationId === id) {
              let obj = { applicationId: id };
              let result = map.set(tmp5.id, obj);
            }
          }
          continue;
        }
        const _Array = Array;
        logger.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
        return map;
      }
    }
  }
  obj2 = ApplicationStreamingStore;
};
prototype["getActivelyProgressingActivityQuests"] = function getActivelyProgressingActivityQuests() {
  const map = new Map();
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  const mainFrame = FramesStore.getMainFrame();
  const set = new Set(selfEmbeddedActivities.keys());
  if (isLaunched(mainFrame)) {
    set.add(mainFrame.applicationId);
  }
  logger.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(set));
  if (0 === set.size) {
    return map;
  } else {
    const quests = QuestStore.quests;
    const iter = tmp2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      let values = quests.values();
      for (const item10047 of values) {
        let tmp12 = item10047;
        let obj4 = QuestTaskUtils;
        let playActivityApplicationId = obj4.getPlayActivityApplicationId(item10047);
        let tmp17 = isQuestProgressable(item10047);
        if (tmp17) {
          tmp17 = null != playActivityApplicationId;
        }
        if (tmp17) {
          if (playActivityApplicationId === tmp8) {
            let obj = { applicationId: null };
            obj.applicationId = tmp8;
            let result = map.set(tmp12.id, obj);
          }
        }
        continue;
      }
      continue;
    }
    const values2 = quests.values();
    for (const item10074 of values2) {
      let tmp27 = item10074;
      let result1 = isQuestProgressable(item10074);
      if (result1) {
        let obj6 = utils_QuestUtils;
        result1 = obj6.isPlayAnyActivityQuest(tmp27);
      }
      if (result1) {
        let obj2 = { applicationId: null };
        obj2.applicationId = applicationId;
        let result2 = map.set(tmp27.id, obj2);
      }
      continue;
    }
    const _Array = Array;
    logger.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(map.keys()));
    return map;
  }
};
const questProgressManager = new QuestProgressManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/managers/QuestProgressManager.tsx");

export default questProgressManager;
