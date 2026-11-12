// Module ID: 8747
// Function ID: 8748
// Name: QuestUserStatusUtils
// Dependencies: [2]
// Exports: getMostRecentQuestUserStatus

// Module 8747 (QuestUserStatusUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/QuestUserStatusUtils.tsx");

export function getMostRecentQuestUserStatus(userStatus, userStatus2) {
  if (null == userStatus) {
    return userStatus2;
  } else if (null == userStatus2) {
    return userStatus;
  } else {
    const _Object = Object;
    const tmp = null == userStatus.completedAt && null != userStatus2.completedAt;
    const keys = Object.keys(userStatus.progress);
    for (const item10020 of keys) {
      let tmp7 = userStatus.progress[item10020];
      let iter = tmp7;
      if (null != tmp7) {
        let tmp35 = userStatus2.progress[tmp6];
        let iter2 = tmp35;
        if (null != tmp35) {
          if (iter2.value >= iter.value) {
            if (null != iter.completedAt) {
              if (null == iter2.completedAt) {
                obj.return();
                return userStatus;
              }
            }
            let heartbeat = iter.heartbeat;
            let lastBeatAt;
            if (heartbeat != null) {
              lastBeatAt = heartbeat.lastBeatAt;
            }
            let tmp11 = lastBeatAt;
            let heartbeat2 = iter2.heartbeat;
            let lastBeatAt1;
            if (heartbeat2 != null) {
              lastBeatAt1 = heartbeat2.lastBeatAt;
            }
            let tmp14 = lastBeatAt1;
            if (iter2.value === iter.value) {
              if (!tmp) {
                if (null != iter.completedAt) {
                  if (null != tmp11) {
                    if (null != tmp14) {
                      let _Date = Date;
                      let self = this;
                      let self2 = this;
                      let date = new Date(tmp14);
                      let _Date2 = Date;
                      let self3 = this;
                      let self4 = this;
                      let time = date.getTime();
                      let date1 = new Date(tmp11);
                    }
                    obj.return();
                    return userStatus;
                  }
                }
              }
            }
          }
        }
        obj.return();
        return userStatus;
      }
      continue;
    }
    const items = ["enrolledAt", "completedAt", "claimedAt"];
    for (const item10071 of items) {
      if (null != userStatus[item10071]) {
        if (null == userStatus2[tmp30]) {
          obj4.return();
          return userStatus;
        }
      }
      continue;
    }
    let tmp33 = userStatus2;
    if (userStatus.dismissedQuestContent & ~userStatus2.dismissedQuestContent) {
      tmp33 = userStatus;
    }
    return tmp33;
  }
}
