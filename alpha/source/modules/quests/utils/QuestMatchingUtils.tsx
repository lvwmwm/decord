// Module ID: 15252
// Function ID: 15253
// Name: QuestMatchingUtils
// Dependencies: [32, 2165, 7318, 5338, 2145, 7472, 8831, 8815, 8829, 15137, 2]
// Exports: getActivityQuestForApplicationId, getEligibleQuestsForApplicationId, getQuestApplicationIdsForRunningGame, getQuestByApplicationId, getQuestsFromActivities

// Module 15252 (QuestMatchingUtils)
import Constants from "Constants" /* 2145 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7472 */;
import QuestExpirationUtils from "QuestExpirationUtils" /* 8815 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8829 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8831 */;
import getApplicationIdsForGameDefault from "getApplicationIdsForGame" /* 15137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import SocialSdkApplicationStore from "SocialSdkApplicationStore" /* 7318 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function questMatchesActivity(application_id, id) {
  let tmp = null != application_id;
  if (tmp) {
    const tmp3 = application_id.application_id === closure_9 || application_id.platform === ActivityGamePlatforms.ActivityGamePlatforms.XBOX;
    if (!tmp3) {
      let tmp10;
      const tmp9 = application_id.platform === ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4 || application_id.platform === tmp7(7472).ActivityGamePlatforms.PLAYSTATION_5;
      if (!tmp9) {
        tmp10 = null != id && id.id === metroImportDefault && application_id.application_id === metroImportAll;
        if (!tmp10) {
          let tmp13 = null != application_id.application_id;
          if (tmp13) {
            application_id = application_id.application_id;
            const tmp7Result = QuestTaskUtils;
            const allApplicationIds = tmp7Result.getAllApplicationIds(id);
            tmp13 = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
            null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
          }
          tmp10 = tmp13;
        }
      }
      tmp = tmp10;
    }
    const str = application_id.name;
    const formatted = str.toLowerCase();
    const obj3 = QuestTaskUtils;
    const consoleApplicationId = obj3.getConsoleApplicationId(id);
    let flag = false;
    if (null != consoleApplicationId) {
      const application = ApplicationStore.getApplication(consoleApplicationId);
      let tmp21 = null != application;
      if (tmp21) {
        const str2 = application.name;
        tmp21 = formatted === str2.toLowerCase();
      }
      flag = tmp21;
    }
    tmp10 = flag;
  }
  return tmp;
}
function getQuestByActivity(result, application_id) {
  let tmp4;
  const obj = result[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [r10011, tmp4] = tmp3;
    let tmp5 = tmp4;
    if (questMatchesActivity(application_id, tmp4)) {
      let obj2 = QuestExpirationUtils;
      if (!obj2.isQuestExpired(tmp5)) {
        obj.return();
        return tmp5;
      }
    }
    continue;
  }
}
function questMatchesApplicationId(arg0, quest) {
  let closure_0 = arg0;
  const obj = QuestTaskUtils;
  const allApplicationIds = obj.getAllApplicationIds(quest);
  const tmp = null != allApplicationIds && allApplicationIds.some((item) => item === closure_0);
  return tmp;
}
({ DISCORD_APPLICATION_ID: metroRequire, PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID: metroImportDefault, PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID: metroImportAll } = QuestConstants);
let closure_9 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/quests/utils/QuestMatchingUtils.tsx");

export { questMatchesActivity };
export { getQuestByActivity };
export function getQuestByApplicationId(arg0, arg1) {
  let tmp5;
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [r10013, tmp5] = tmp4;
    let tmp6 = tmp5;
    if (questMatchesApplicationId(arg1, tmp5)) {
      let tmp;
      let obj2 = QuestExpirationUtils;
      if (!obj2.isQuestExpired(tmp6)) {
        tmp = tmp5;
        obj.return();
        break;
      }
      return tmp;
    }
    continue;
  }
}
export function getQuestsFromActivities(result, arg1) {
  if (null != arg1) {
    if (null != result) {
      const obj = arg1[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp7 = getQuestByActivity(result, tmp4);
        if (null != tmp7) {
          obj.return();
          return tmp7;
        }
      }
      return null;
    }
  }
  return null;
}
export function getEligibleQuestsForApplicationId(quests, applicationId) {
  let flag;
  let items;
  let closure_0 = applicationId;
  if (null == applicationId) {
    items = [];
  } else {
    const _Array = Array;
    const arr = Array.from(quests.values());
    items = arr.filter((userStatus) => {
      const obj = QuestTaskUtils;
      const activityApplicationId = obj.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        const tmpResult = utils_QuestUtils;
        canLaunchActivityResult = tmpResult.canLaunchActivity(userStatus);
      }
      if (canLaunchActivityResult) {
        const tmpResult2 = QuestExpirationUtils;
        canLaunchActivityResult = !tmpResult2.isQuestExpired(userStatus);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === closure_0;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== metroRequire;
      }
      if (canLaunchActivityResult) {
        userStatus = userStatus.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || c1;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || c1;
      }
      return canLaunchActivityResult;
    });
  }
  return items;
}
export function getActivityQuestForApplicationId(quests, validateApplicationResult) {
  let items;
  let closure_0 = validateApplicationResult;
  let c1 = true;
  if (null == validateApplicationResult) {
    items = [];
  } else {
    const _Array = Array;
    const arr = Array.from(quests.values());
    items = arr.filter((userStatus) => {
      const obj = QuestTaskUtils;
      const activityApplicationId = obj.getActivityApplicationId(userStatus);
      let canLaunchActivityResult = null != userStatus;
      if (canLaunchActivityResult) {
        const tmpResult = utils_QuestUtils;
        canLaunchActivityResult = tmpResult.canLaunchActivity(userStatus);
      }
      if (canLaunchActivityResult) {
        const tmpResult2 = QuestExpirationUtils;
        canLaunchActivityResult = !tmpResult2.isQuestExpired(userStatus);
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId === closure_0;
      }
      if (canLaunchActivityResult) {
        canLaunchActivityResult = activityApplicationId !== metroRequire;
      }
      if (canLaunchActivityResult) {
        userStatus = userStatus.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        canLaunchActivityResult = null == completedAt || c1;
      }
      if (canLaunchActivityResult) {
        const userStatus2 = userStatus.userStatus;
        let enrolledAt;
        if (userStatus2 != null) {
          enrolledAt = userStatus2.enrolledAt;
        }
        canLaunchActivityResult = null == enrolledAt || c1;
      }
      return canLaunchActivityResult;
    });
  }
  return items.sort(function(userStatus, userStatus2) {
    let enrolledAt;
    let num;
    userStatus = userStatus.userStatus;
    let enrolledAt1;
    if (userStatus != null) {
      enrolledAt1 = userStatus.enrolledAt;
    }
    userStatus2 = userStatus2.userStatus;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt1) {
      let num2 = 1;
      if (null != enrolledAt1) {
        let num3 = -1;
        if (null != enrolledAt) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          const date = new Date(enrolledAt1);
          const time = date.getTime();
          const date1 = new Date(enrolledAt);
          num3 = time - date1.getTime();
        }
        num2 = num3;
      }
      num = num2;
    } else {
      num = 0;
    }
    return num;
  })[0];
}
export function getQuestApplicationIdsForRunningGame(pid, arg1) {
  const obj = getApplicationIdsForGameDefault(arg1);
  const applicationIdForPID = SocialSdkApplicationStore.getApplicationIdForPID(pid.pid);
  if (null != applicationIdForPID) {
    const tmp4 = getApplicationIdsForGameDefault(applicationIdForPID);
    for (const item10019 of tmp4) {
      let addResult = obj.add(item10019);
      continue;
    }
  }
  return obj;
}
