// Module ID: 10466
// Function ID: 81042
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: allPlayOnDesktopQuestsByApplicationId, getEligibleQuestsForApplicationId, getQuestByApplicationId, getQuestsFromActivities

// Module 10466 (_createForOfIteratorHelperLoose)
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
function questMatchesActivity(value, applicationId) {
  let flag = value;
  let consoleApplicationId = applicationId;
  let tmp2 = null;
  if (null == value) {
    return tmp3;
  } else {
    let tmp5 = flag.application_id === closure_8;
    if (!tmp5) {
      tmp5 = flag.platform === ActivityGamePlatforms.XBOX;
    }
    if (!tmp5) {
      let tmp8 = flag.platform === ActivityGamePlatforms.PS4;
      if (!tmp8) {
        tmp8 = flag.platform === ActivityGamePlatforms.PS5;
      }
      if (!tmp8) {
        let tmp10 = tmp2 != consoleApplicationId;
        if (tmp10) {
          tmp10 = consoleApplicationId.id === closure_5;
        }
        if (tmp10) {
          tmp10 = flag.application_id === closure_6;
        }
        if (!tmp10) {
          let tmp13 = tmp2 != flag.application_id;
          if (tmp13) {
            tmp13 = questMatchesApplicationId(flag.application_id, consoleApplicationId);
          }
          tmp10 = tmp13;
        }
      }
    }
    const formatted = flag.name.toLowerCase();
    consoleApplicationId = applicationId(dependencyMap[5]).getConsoleApplicationId(consoleApplicationId);
    flag = false;
    if (tmp2 != consoleApplicationId) {
      const application = application.getApplication(consoleApplicationId);
      tmp2 = tmp2 != application;
      if (tmp2) {
        tmp2 = formatted === application.name.toLowerCase();
        const str2 = application.name;
      }
      flag = tmp2;
    }
    tmp10 = flag;
    const obj = applicationId(dependencyMap[5]);
    const str = flag.name;
  }
}
function getQuestByActivity(result, value) {
  let tmp4;
  const tmp = _createForOfIteratorHelperLoose(result);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      let tmp2 = callback;
      let tmp3 = callback(iter.value, 2);
      [r10014, tmp4] = tmp3;
      let tmp5 = questMatchesActivity;
      if (questMatchesActivity(value, tmp4)) {
        let tmp6 = value;
        let tmp7 = dependencyMap;
        let obj = value(dependencyMap[6]);
        if (!obj.isQuestExpired(tmp4)) {
          break;
        }
      }
      let iter2 = tmp();
      iter = iter2;
    }
    return tmp4;
  }
}
function questMatchesApplicationId(application_id, consoleApplicationId) {
  consoleApplicationId = application_id;
  const allApplicationIds = consoleApplicationId(dependencyMap[5]).getAllApplicationIds(consoleApplicationId);
  const obj = consoleApplicationId(dependencyMap[5]);
  return null != allApplicationIds && allApplicationIds.some((arg0) => arg0 === arg0);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ DISCORD_APPLICATION_ID: closure_4, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: closure_5, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_6 } = arg1(dependencyMap[2]));
const ActivityGamePlatforms = arg1(dependencyMap[3]).ActivityGamePlatforms;
let closure_8 = arg1(dependencyMap[4]).XBOX_ACTIVITY_APPLICATION_ID;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export const getQuestByApplicationId = function getQuestByApplicationId(arg0, application_id) {
  let tmp5;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp();
  let iter2 = iter;
  let tmp2;
  if (!iter.done) {
    while (true) {
      let tmp3 = callback;
      let tmp4 = callback(iter2.value, 2);
      [r10016, tmp5] = tmp4;
      let tmp6 = questMatchesApplicationId;
      if (!questMatchesApplicationId(application_id, tmp5)) {
        let iter3 = tmp();
        iter2 = iter3;
        if (iter3.done) {
          break;
        }
      } else {
        let tmp7 = application_id;
        let tmp8 = dependencyMap;
        let obj = application_id(dependencyMap[6]);
        tmp2 = tmp5;
        if (!obj.isQuestExpired(tmp5)) {
          break;
        }
      }
      break;
    }
  }
  return tmp2;
};
export const allPlayOnDesktopQuestsByApplicationId = function allPlayOnDesktopQuestsByApplicationId(arr) {
  return Array.from(arr.values()).filter((quest) => {
    let hasPlayOnDesktopTaskResult = callback(arg1, quest);
    if (hasPlayOnDesktopTaskResult) {
      let obj = arg1(closure_1[6]);
      hasPlayOnDesktopTaskResult = !obj.isQuestExpired(quest);
    }
    if (hasPlayOnDesktopTaskResult) {
      obj = { quest };
      hasPlayOnDesktopTaskResult = arg1(closure_1[5]).hasPlayOnDesktopTask(obj);
      const obj2 = arg1(closure_1[5]);
    }
    return hasPlayOnDesktopTaskResult;
  });
};
export const getQuestsFromActivities = function getQuestsFromActivities(result, arg1) {
  if (null != arg1) {
    if (null != result) {
      const tmp2 = _createForOfIteratorHelperLoose(arg1);
      const iter = tmp2();
      let iter2 = iter;
      if (!iter.done) {
        const tmp4 = getQuestByActivity(result, iter2.value);
        while (null == tmp4) {
          let iter3 = tmp2();
          iter2 = iter3;
        }
        return tmp4;
      }
      return null;
    }
  }
  return null;
};
export const getEligibleQuestsForApplicationId = function getEligibleQuestsForApplicationId(quests, applicationId, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  if (null == applicationId) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(quests.values()).filter((userStatus) => {
      const activityApplicationId = arg1(flag[5]).getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        canLaunchActivityResult = arg1(flag[7]).canLaunchActivity(userStatus);
        const obj2 = arg1(flag[7]);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = !arg1(flag[6]).isQuestExpired(userStatus);
        const obj3 = arg1(flag[6]);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === arg1;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== closure_4;
      }
      if (canLaunchActivityResult) {
        userStatus = userStatus.userStatus;
        let completedAt;
        if (null != userStatus) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || flag;
        const tmp10 = null == completedAt || flag;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (null != userStatus2) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || flag;
        const tmp12 = null == enrolledAt || flag;
      }
      return canLaunchActivityResult;
    });
    const arr = Array.from(quests.values());
  }
  return items;
};
