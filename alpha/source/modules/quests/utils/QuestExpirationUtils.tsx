// Module ID: 7840
// Function ID: 7841
// Name: QuestExpirationUtils
// Dependencies: [2]
// Exports: findNextUpcomingExpirationEpochMs, isQuestConfigExpired, isQuestExpired

// Module 7840 (QuestExpirationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/QuestExpirationUtils.tsx");

export function isQuestConfigExpired(expiresAt) {
  const date = new Date(expiresAt.expiresAt);
  const valueOfResult = date.valueOf();
  return valueOfResult <= Date.now();
}
export function isQuestExpired(config) {
  const date = new Date(config.config.expiresAt);
  const valueOfResult = date.valueOf();
  return valueOfResult <= Date.now();
}
export function findNextUpcomingExpirationEpochMs(arg0) {
  let tmp = null;
  const timestamp = Date.now();
  const tmp3 = arg0[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let date = new Date(tmp4.config.expiresAt);
    let valueOfResult = date.valueOf();
    if (valueOfResult > timestamp) {
      let tmp9 = null == tmp;
      if (!tmp9) {
        tmp9 = tmp7 < tmp;
      }
      if (tmp9) {
        tmp = valueOfResult;
      }
    }
    continue;
  }
  return tmp;
}
