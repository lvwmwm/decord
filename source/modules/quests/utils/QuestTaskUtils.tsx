// Module ID: 6955
// Function ID: 55599
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: formatWatchTaskRemainingTime, getActivityApplicationId, getAllApplicationIds, getConsoleApplicationId, getDesktopApplicationIds, getInGameApplicationId, getPlayActivityApplicationId, getQuestTaskDetails, getQuestTaskTypes, getStreamingApplicationId, getThirdPartyTaskDetails, hasAchievementActivityTask, hasAchievementInGameTask, hasSomeFirstPartyTasks, hasStreamOnDesktopTask, isDesktopOnlyPlayQuest, isVideoQuestForMobilePlatformOnly

// Module 6955 (_createForOfIteratorHelperLoose)
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
function getApplicationIdsByTaskTypes(value, items) {
  let iter6;
  if (null != value) {
    const _Set = Set;
    const set = new Set();
    const tmp7 = _createForOfIteratorHelperLoose(items);
    const iter = tmp7();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp10 = value.config.taskConfigV2.tasks[iter2.value];
        let tmp11 = tmp8;
        let tmp12 = tmp9;
        if (null != tmp10) {
          tmp11 = tmp8;
          tmp12 = tmp9;
          if ("applications" in tmp10) {
            let _Array = Array;
            tmp11 = tmp8;
            tmp12 = tmp9;
            if (Array.isArray(tmp10.applications)) {
              let tmp13 = closure_8;
              let tmp14 = closure_8(tmp10.applications);
              let iter3 = tmp14();
              let iter4 = iter3;
              tmp11 = iter3;
              tmp12 = tmp14;
              if (!iter3.done) {
                do {
                  let addResult = set.add(iter4.value.id);
                  let iter5 = tmp14();
                  iter4 = iter5;
                  tmp11 = iter5;
                  tmp12 = tmp14;
                  let done = iter5.done;
                } while (!done);
              }
            }
          }
        }
        iter6 = tmp7();
        let tmp8 = tmp11;
        let tmp9 = tmp12;
        iter2 = iter6;
      } while (!iter6.done);
    }
    let arr;
    if (set.size > 0) {
      const _Array2 = Array;
      arr = Array.from(set);
    }
    return arr;
  }
}
function hasPlayOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
}
function hasPlayActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
}
function shouldUsePlayOnDesktopTask(quest) {
  let tmp = null != quest;
  if (tmp) {
    const obj = { quest };
    tmp = hasPlayOnDesktopTask(obj);
  }
  return tmp;
}
function hasSomeFirstPartyTasks(items) {
  const arg1 = items;
  return (arg0) => arg0.some((arg0) => null != arg0.config.taskConfigV2.tasks[arg0]);
}
function isInGameQuest(quest) {
  const arg1 = quest;
  return Array.from(arg1(dependencyMap[1]).FirstPartyQuestTaskTypesSets.IN_GAME).some((arg0) => null != arg0.config.taskConfigV2.tasks[arg0]);
}
function isConsoleQuest(quest) {
  return result(quest);
}
function hasUnsavedProgress(userStatus, PLAY_ON_PLAYSTATION) {
  let expiresAt;
  if (null != userStatus) {
    if (null != userStatus.progress[PLAY_ON_PLAYSTATION]) {
      const heartbeat = tmp3.heartbeat;
      if (null != heartbeat) {
        expiresAt = heartbeat.expiresAt;
      }
    }
  }
  if (null == expiresAt) {
    return false;
  } else {
    const _Date = Date;
    const date = new Date(expiresAt);
    const valueOfResult = date.valueOf();
    const _isNaN = isNaN;
    let tmp10 = !isNaN(valueOfResult);
    if (tmp10) {
      const _Date2 = Date;
      tmp10 = valueOfResult > Date.now();
    }
    return tmp10;
  }
}
function isQuestProgressingOnConsole(userStatus) {
  let tmp = null != userStatus.userStatus;
  if (tmp) {
    let tmp5 = hasUnsavedProgress(userStatus.userStatus, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX);
    if (!tmp5) {
      tmp5 = hasUnsavedProgress(userStatus.userStatus, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION);
    }
    tmp = tmp5;
  }
  return tmp;
}
function _isPlayOnDesktopTaskType(type) {
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  return type === arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP;
}
function _computePercentComplete(target, arg1) {
  let num = 0;
  if (target > 0) {
    const _Math = Math;
    num = arg1(dependencyMap[2]).floor(Math.min(arg1 / target, 1), 4);
    const obj = arg1(dependencyMap[2]);
  }
  return num;
}
function getTimeSinceLastBeatSeconds(userStatus, target) {
  userStatus = userStatus.userStatus;
  let lastBeatAt;
  if (null != userStatus) {
    const progress = userStatus.progress;
    if (null != progress) {
      if (null != progress[target.type]) {
        const heartbeat = tmp3.heartbeat;
        if (null != heartbeat) {
          lastBeatAt = heartbeat.lastBeatAt;
        }
      }
    }
  }
  if (null != lastBeatAt) {
    let result = isQuestProgressingOnConsole(userStatus);
    if (!result) {
      result = closure_3.isProgressingOnDesktop(userStatus.id);
    }
    if (result) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(lastBeatAt);
      const diff = timestamp - date.valueOf();
      return target(dependencyMap[2]).floor(diff / importDefault(dependencyMap[3]).Millis.SECOND, 2);
    }
  }
  return 0;
}
function getProgressSeconds(quest, target) {
  target = target.target;
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    return target;
  } else {
    const userStatus3 = quest.userStatus;
    let tmp2;
    if (null != userStatus3) {
      const progress = userStatus3.progress;
      if (null != progress) {
        tmp2 = progress[target.type];
      }
    }
    let value;
    if (null != tmp2) {
      value = tmp2.value;
    }
    if (null == value) {
      const userStatus2 = quest.userStatus;
      let prop;
      if (null != userStatus2) {
        prop = userStatus2.streamProgressSeconds;
      }
      value = prop;
    }
    let num2 = 0;
    if (null != value) {
      num2 = value;
    }
    if (result3(quest)) {
      let optimisticProgress = closure_3.getOptimisticProgress(quest.id, target.type);
      if (null == optimisticProgress) {
        optimisticProgress = num2;
      }
      let sum = optimisticProgress;
    } else {
      sum = num2 + getTimeSinceLastBeatSeconds(quest, target);
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(0.99 * target, sum);
    return Math.max(target(dependencyMap[2]).floor(bound, 2), 0);
  }
}
function _getTaskDetailsForType(arg0) {
  let includeTaskTypes;
  let quest;
  let taskType;
  ({ quest, taskType, includeTaskTypes } = arg0);
  if (includeTaskTypes === undefined) {
    includeTaskTypes = arg1(dependencyMap[1]).FirstPartyQuestTaskTypesSets.ALL;
  }
  const arg1 = includeTaskTypes;
  const taskConfigV2 = quest.config.taskConfigV2;
  let tmp3 = taskType;
  if (null == taskType) {
    const _Object = Object;
    let values = Object.values(taskConfigV2.tasks);
    const first = values.filter((type) => includeTaskTypes.has(type.type))[0];
    let type;
    if (null != first) {
      type = first.type;
    }
    tmp3 = type;
  }
  let tmp7 = taskConfigV2.tasks[tmp3];
  if (null == tmp7) {
    tmp7 = taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  }
  if (null == tmp7) {
    let obj1 = arg1(dependencyMap[4]);
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + quest.id + " has no task matching the include filters");
    let obj = {};
    obj = { source: "_getTaskDetailsForType" };
    obj.tags = obj;
    obj1 = { questId: quest.id, taskType };
    if (null == includeTaskTypes) {
      includeTaskTypes = [];
    }
    obj1.includeTaskTypes = Array.from(includeTaskTypes);
    obj.extra = obj1;
    const result = obj1.captureQuestsException(error, obj);
    return null;
  } else {
    const target = tmp7.target;
    const tmp23 = getProgressSeconds(quest, tmp7);
    const _Object2 = Object;
    values = Object.values(taskConfigV2.tasks);
    const found = values.find(_isPlayOnDesktopTaskType);
    let mapped;
    if (null != found) {
      const applications = found.applications;
      if (null != applications) {
        mapped = applications.map((id) => id.id);
      }
    }
    obj = { progressSeconds: tmp23, targetSeconds: target };
    const _Math = Math;
    obj.targetMinutes = Math.ceil(target / importDefault(dependencyMap[3]).Seconds.MINUTE);
    obj.percentComplete = _computePercentComplete(target, tmp23);
    obj.taskType = tmp3;
    obj.applications = mapped;
    return obj;
  }
}
function _parseFirstPartyTaskType(arg0) {
  const ALL = arg1(dependencyMap[1]).FirstPartyQuestTaskTypesSets.ALL;
  let tmp = null;
  if (ALL.has(arg0)) {
    tmp = arg0;
  }
  return tmp;
}
function getDefaultWatchVideoTask(config) {
  let tmp = config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO];
  if (null == tmp) {
    if (null != tmp2) {
      tmp = tmp2;
    }
    let tmp4 = null;
    if (null != tmp) {
      tmp4 = tmp;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = tmp2;
  }
  return tmp3;
}
function _getQuestTaskDetails(quest, includeTaskTypes) {
  if (isInGameQuest(quest)) {
    let obj = { SidebarType: "isArray", TEST_4: "key", VOICE_RECORDING_MAX_DURATION_MILLIS: "constructor", invalidFieldKeys: "apply", taskType: includeTaskTypes(dependencyMap[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    let tmp6Result = obj;
  } else if (result(quest)) {
    obj = { quest };
    if (null != includeTaskTypes) {
      obj.includeTaskTypes = includeTaskTypes;
      tmp6Result = function _getLatestTaskDetails(arg0) {
        let includeTaskTypes;
        let quest;
        let tmp10;
        ({ quest, includeTaskTypes } = arg0);
        if (includeTaskTypes === undefined) {
          includeTaskTypes = callback(closure_2[1]).FirstPartyQuestTaskTypesSets.ALL;
        }
        const userStatus = quest.userStatus;
        let progress;
        if (null != userStatus) {
          progress = userStatus.progress;
        }
        if (null == progress) {
          progress = {};
        }
        const values = Object.values(progress);
        const sorted = values.sort((heartbeat, heartbeat2) => {
          let lastBeatAt;
          if (null != heartbeat) {
            heartbeat = heartbeat.heartbeat;
            if (null != heartbeat) {
              lastBeatAt = heartbeat.lastBeatAt;
            }
          }
          if (null != heartbeat2) {
            heartbeat2 = heartbeat2.heartbeat;
            if (null != heartbeat2) {
              lastBeatAt = heartbeat2.lastBeatAt;
            }
          }
          if (null != lastBeatAt) {
            if (null != lastBeatAt) {
              const _Date3 = Date;
              const date = new Date(lastBeatAt);
              const _Date4 = Date;
              let valueOfResult = date.valueOf();
              const date1 = new Date(lastBeatAt);
              let num3 = 1;
              if (valueOfResult > date1.valueOf()) {
                num3 = -1;
              }
              let num = num3;
            }
            return num;
          }
          if (null == lastBeatAt) {
            if (null == lastBeatAt) {
              let updatedAt;
              if (null != heartbeat) {
                updatedAt = heartbeat.updatedAt;
              }
              if (null != updatedAt) {
                let updatedAt1;
                if (null != heartbeat2) {
                  updatedAt1 = heartbeat2.updatedAt;
                }
                if (null != updatedAt1) {
                  const _Date = Date;
                  const date2 = new Date(heartbeat.updatedAt);
                  const _Date2 = Date;
                  valueOfResult = date2.valueOf();
                  const date3 = new Date(heartbeat2.updatedAt);
                  let num2 = 1;
                  if (valueOfResult > date3.valueOf()) {
                    num2 = -1;
                  }
                  num = num2;
                }
              }
            }
          }
          num = 1;
          if (null != lastBeatAt) {
            num = 1;
            if (null == lastBeatAt) {
              num = -1;
            }
          }
        });
        const tmp3Result = closure_8(sorted.filter(callback(closure_2[5]).isNotNullish));
        const iter = tmp3Result();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            let tmp6 = callback3;
            let tmp7 = callback3(iter2.value.eventName);
            let tmp8 = tmp5;
            if (null != tmp7) {
              tmp8 = tmp5;
              if (null != includeTaskTypes) {
                tmp8 = tmp5;
                if (includeTaskTypes.has(tmp7)) {
                  let tmp9 = callback2;
                  let obj = { quest, taskType: tmp7, includeTaskTypes };
                  tmp10 = callback2(obj);
                  tmp8 = tmp10;
                  if (null != tmp10) {
                    break;
                  }
                }
              }
            }
            let iter3 = tmp3Result();
            let tmp5 = tmp8;
            iter2 = iter3;
          }
          return tmp10;
        }
        obj = { quest, includeTaskTypes };
        return callback2(obj);
      }(obj);
    } else {
      const FirstPartyQuestTaskTypesSets = includeTaskTypes(dependencyMap[1]).FirstPartyQuestTaskTypesSets;
      const tmp20 = isQuestProgressingOnConsole(quest);
    }
  } else if (result3(quest)) {
    const obj1 = { quest };
    const tmp15 = getDefaultWatchVideoTask(quest.config);
    let type;
    if (null != tmp15) {
      type = tmp15.type;
    }
    obj1.taskType = type;
    tmp6Result = _getTaskDetailsForType(obj1);
    const tmp13 = _getTaskDetailsForType;
  } else if (shouldUsePlayOnDesktopTask(quest)) {
    const obj2 = { quest, taskType: includeTaskTypes(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    tmp6Result = _getTaskDetailsForType(obj2);
  } else {
    obj = { quest };
    const FirstPartyQuestTaskTypes = includeTaskTypes(dependencyMap[1]).FirstPartyQuestTaskTypes;
    if (tmp5) {
      obj.taskType = FirstPartyQuestTaskTypes.PLAY_ACTIVITY;
      tmp6Result = tmp6(obj);
    } else {
      obj.taskType = FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
      tmp6Result = tmp6(obj);
    }
    const tmp5 = hasPlayActivityTask(quest);
  }
  return tmp6Result;
}
function getDefaultInGameTask(config) {
  const tasks = config.taskConfigV2.tasks;
  let tmp2 = tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  if (null != tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY]) {
    tmp2 = tmp;
  }
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = tmp2;
  }
  return tmp3;
}
function getRemainingTaskTime(targetSeconds) {
  return parseMinutesAndSecondsFromSeconds(targetSeconds.targetSeconds - targetSeconds.progressSeconds);
}
function parseMinutesAndSecondsFromSeconds(arg0) {
  return { minutes: Math.max(0, Math.floor(arg0 / 60)), seconds: Math.max(0, Math.floor(arg0 % 60)) };
}
function formatWatchTaskTime(minutes, seconds) {
  const StringResult = String(minutes);
  const padStartResult = String(minutes).padStart(2, "0");
  return "" + padStartResult + ":" + String(seconds).padStart(2, "0");
}
let closure_3 = importDefault(dependencyMap[0]);
const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
const result = hasSomeFirstPartyTasks(items);
const items1 = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO];
const result1 = hasSomeFirstPartyTasks(items1);
const items2 = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
const result2 = hasSomeFirstPartyTasks(items2);
const items3 = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE];
const result3 = hasSomeFirstPartyTasks(items3);
const items4 = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
const result4 = hasSomeFirstPartyTasks(items4);
const items5 = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
const result5 = hasSomeFirstPartyTasks(items5);
const result6 = arg1(dependencyMap[6]).fileFinishedImporting("modules/quests/utils/QuestTaskUtils.tsx");

export const getAllApplicationIds = function getAllApplicationIds(quest) {
  if (null != quest) {
    const _Object = Object;
    return getApplicationIdsByTaskTypes(quest, Object.keys(quest.config.taskConfigV2.tasks));
  }
};
export const getDesktopApplicationIds = function getDesktopApplicationIds(value) {
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP];
  return getApplicationIdsByTaskTypes(value, items);
};
export const getConsoleApplicationId = function getConsoleApplicationId(consoleApplicationId) {
  let first;
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION];
  const tmp2 = getApplicationIdsByTaskTypes(consoleApplicationId, items);
  if (null != tmp2) {
    first = tmp2[0];
  }
  return first;
};
export const getPlayActivityApplicationId = function getPlayActivityApplicationId(quest) {
  let first;
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY];
  const tmp2 = getApplicationIdsByTaskTypes(quest, items);
  if (null != tmp2) {
    first = tmp2[0];
  }
  return first;
};
export const getInGameApplicationId = function getInGameApplicationId(quest) {
  let first;
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
  const tmp2 = getApplicationIdsByTaskTypes(quest, items);
  if (null != tmp2) {
    first = tmp2[0];
  }
  return first;
};
export const getActivityApplicationId = function getActivityApplicationId(quest) {
  let first;
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY, arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
  const tmp2 = getApplicationIdsByTaskTypes(quest, items);
  if (null != tmp2) {
    first = tmp2[0];
  }
  return first;
};
export const getStreamingApplicationId = function getStreamingApplicationId(value) {
  let first;
  const items = [arg1(dependencyMap[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
  const tmp2 = getApplicationIdsByTaskTypes(value, items);
  if (null != tmp2) {
    first = tmp2[0];
  }
  return first;
};
export { hasPlayOnDesktopTask };
export const hasStreamOnDesktopTask = function hasStreamOnDesktopTask(arg0) {
  return null != arg0.quest.config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP];
};
export const hasAchievementActivityTask = function hasAchievementActivityTask(quest) {
  return null != quest.config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY];
};
export const hasAchievementInGameTask = function hasAchievementInGameTask(quest) {
  return null != quest.config.taskConfigV2.tasks[closure_0(undefined, closure_2[1]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME];
};
export { hasPlayActivityTask };
export { shouldUsePlayOnDesktopTask };
export { hasSomeFirstPartyTasks };
export { isInGameQuest };
export const hasSomeConsoleTasks = result;
export const hasWatchVideoOnDesktopTasks = result1;
export const hasWatchVideoOnMobileTasks = result2;
export const hasWatchVideoTasks = result3;
export const hasStandaloneGameplayTasks = result4;
export const hasActivityTasks = result5;
export const isVideoQuestForMobilePlatformOnly = function isVideoQuestForMobilePlatformOnly(arg0) {
  let tmp = result2(arg0);
  if (tmp) {
    tmp = !result1(arg0);
  }
  return tmp;
};
export { isConsoleQuest };
export const isDesktopOnlyPlayQuest = function isDesktopOnlyPlayQuest(quest) {
  let tmp = !isConsoleQuest(quest);
  if (tmp) {
    const obj = { quest };
    tmp = hasPlayOnDesktopTask(obj);
  }
  return tmp;
};
export { isQuestProgressingOnConsole };
export const getQuestTaskTypes = function getQuestTaskTypes(config) {
  return new Set(Object.keys(config.config.taskConfigV2.tasks));
};
export { getDefaultWatchVideoTask };
export const getQuestTaskDetails = function getQuestTaskDetails(quest, DESKTOP) {
  const tmp = _getQuestTaskDetails(quest, DESKTOP);
  if (null != tmp) {
    return tmp;
  } else {
    let obj = { quest };
    let tmp3 = _getTaskDetailsForType(obj);
    if (null == tmp3) {
      obj = { SidebarType: "isArray", TEST_4: "key", VOICE_RECORDING_MAX_DURATION_MILLIS: "constructor", invalidFieldKeys: "apply", taskType: DESKTOP(dependencyMap[1]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
      tmp3 = obj;
    }
    return tmp3;
  }
};
export { getDefaultInGameTask };
export const getThirdPartyTaskDetails = function getThirdPartyTaskDetails(quest) {
  const tmp = getDefaultInGameTask(quest.config);
  if (null == tmp) {
    return null;
  } else {
    const userStatus = quest.userStatus;
    let value;
    if (null != userStatus) {
      const progress = userStatus.progress;
      if (null != progress) {
        if (null != progress[tmp.type]) {
          value = iter.value;
        }
      }
    }
    let num = 0;
    if (null != value) {
      num = value;
    }
    const obj = { title: tmp.messages.taskTitle, description: tmp.messages.taskDescription, target: tmp.target, progress: num, percentComplete: _computePercentComplete(tmp.target, num) };
    return obj;
  }
};
export { getRemainingTaskTime };
export { parseMinutesAndSecondsFromSeconds };
export const formatWatchTaskRemainingTime = function formatWatchTaskRemainingTime(targetSeconds) {
  const tmp = getRemainingTaskTime(targetSeconds);
  return formatWatchTaskTime(tmp.minutes, tmp.seconds);
};
export { formatWatchTaskTime };
