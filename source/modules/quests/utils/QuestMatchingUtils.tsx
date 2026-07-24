// Module ID: 10505
// Function ID: 81284
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4167, 4976, 653, 4155, 6964, 6939, 6962, 2]
// Exports: allPlayOnDesktopQuestsByApplicationId, getEligibleQuestsForApplicationId, getQuestByApplicationId, getQuestsFromActivities

// Module 10505 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { ActivityGamePlatforms } from "ME";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_8 } from "items3";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
    consoleApplicationId = require(6964) /* _createForOfIteratorHelperLoose */.getConsoleApplicationId(consoleApplicationId);
    flag = false;
    if (tmp2 != consoleApplicationId) {
      application = application.getApplication(consoleApplicationId);
      tmp2 = tmp2 != application;
      if (tmp2) {
        tmp2 = formatted === application.name.toLowerCase();
        const str2 = application.name;
      }
      flag = tmp2;
    }
    tmp10 = flag;
    const obj = require(6964) /* _createForOfIteratorHelperLoose */;
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
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let obj = require(6939) /* _createForOfIteratorHelperLoose */;
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
  const _require = application_id;
  const allApplicationIds = _require(6964).getAllApplicationIds(consoleApplicationId);
  const obj = _require(6964);
  return null != allApplicationIds && allApplicationIds.some((arg0) => arg0 === closure_0);
}
({ DISCORD_APPLICATION_ID: closure_4, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: closure_5, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: closure_6 } = QuestsExperimentLocations);
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

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
        let tmp7 = require;
        let tmp8 = dependencyMap;
        let obj = require(6939) /* _createForOfIteratorHelperLoose */;
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
  let closure_0 = arg1;
  return Array.from(arr.values()).filter((quest) => {
    let hasPlayOnDesktopTaskResult = outer1_13(callback, quest);
    if (hasPlayOnDesktopTaskResult) {
      let obj = callback(outer1_1[6]);
      hasPlayOnDesktopTaskResult = !obj.isQuestExpired(quest);
    }
    if (hasPlayOnDesktopTaskResult) {
      obj = { quest };
      hasPlayOnDesktopTaskResult = callback(outer1_1[5]).hasPlayOnDesktopTask(obj);
      const obj2 = callback(outer1_1[5]);
    }
    return hasPlayOnDesktopTaskResult;
  });
};
export const getQuestsFromActivities = function getQuestsFromActivities(result, closure_0) {
  if (null != closure_0) {
    if (null != result) {
      const tmp2 = _createForOfIteratorHelperLoose(closure_0);
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
  let closure_0 = applicationId;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == applicationId) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(quests.values()).filter((userStatus) => {
      const activityApplicationId = applicationId(flag[5]).getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        canLaunchActivityResult = applicationId(flag[7]).canLaunchActivity(userStatus);
        const obj2 = applicationId(flag[7]);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = !applicationId(flag[6]).isQuestExpired(userStatus);
        const obj3 = applicationId(flag[6]);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === applicationId;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== outer1_4;
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
