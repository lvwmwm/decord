// Module ID: 8719
// Function ID: 8720
// Name: FriendAnniversaryUtils
// Dependencies: [2169, 2]
// Exports: categorizeFriendAnniversariesByAffinity, isFriendAnniversary, pruneTimestampMap, yearsSince

// Module 8719 (FriendAnniversaryUtils)
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/shared/FriendAnniversaryUtils.tsx");

export const FRIEND_ANNIVERSARY_ELIGIBILITY_WINDOW_DAYS = 7;
export function isFriendAnniversary(date) {
  date = new Date();
  const items = [-1, 0, 1];
  const fullYear = date.getFullYear();
  const obj2 = items[Symbol.iterator]();
  while (obj2 !== undefined) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let date1 = new Date(date);
    let tmp5 = date1;
    let setFullYearResult = date1.setFullYear(fullYear + tmp2);
    let tmp7 = importDefault;
    let obj4 = _modDef2169(date1);
    if (!obj4.isSame(date, "day")) {
      let _Math = Math;
      let obj5 = tmp7(2169)(date);
      if (abs(obj5.diff(tmp5, "days")) <= 7) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
}
export function yearsSince(friendsSince) {
  const obj = _modDef2169();
  return round(obj.diff(friendsSince, "months") / 12);
}
export function categorizeFriendAnniversariesByAffinity(arr, fn, flag) {
  const highestAffinity = new Set();
  const highAffinity = new Set();
  const tmp = flag;
  if (tmp) {
    const _Math = Math;
    const substr = arr.slice(0, Math.ceil(arr.length / 2));
    const item = substr.forEach((item) => {
      highestAffinity.add(item);
    });
    const item1 = arr.forEach((item) => {
      highAffinity.add(item);
    });
  } else {
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let tmp8 = fn(nextResult);
      let tmp9 = tmp8;
      let tmp10 = null != tmp8;
      if (tmp10) {
        tmp10 = tmp9 > 0.7;
      }
      if (tmp10) {
        let addResult = highestAffinity.add(tmp7);
      }
      let tmp15 = null != tmp9;
      if (tmp15) {
        tmp15 = tmp9 > 0.5;
      }
      if (tmp15) {
        let addResult1 = highAffinity.add(tmp7);
      }
      continue;
    }
  }
  return { highestAffinity, highAffinity };
}
export function pruneTimestampMap(messageGiftIntentLastShownMap, currentTime, arg2) {
  const obj = {};
  for (const key10006 in messageGiftIntentLastShownMap) {
    let tmp2 = messageGiftIntentLastShownMap[key10006];
    if (currentTime - tmp2 > arg2) {
      continue;
    } else {
      obj[key10006] = tmp2;
      continue;
    }
    continue;
  }
  return obj;
}
