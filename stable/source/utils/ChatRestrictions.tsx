// Module ID: 9837
// Function ID: 9838
// Name: ChatRestrictions
// Dependencies: [1086, 9838, 1127, 2]

// Module 9837 (ChatRestrictions)
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import MentionGuardUtilsDefault from "MentionGuardUtils" /* 9838 */;
import size from "module_2" /* 2 */;

const TOKEN_REGEX = Constants.TOKEN_REGEX;
let obj = {
  check(arg0, getGuildId, arg2) {
    let formatToPlainString;
    let intl2;
    let obj2;
    let result;
    const tmp = arg2;
    if (tmp) {
      if (null == getGuildId.getGuildId()) {
        return false;
      } else {
        const obj5 = MentionGuardUtilsDefault;
        const extractEveryoneRoleResult = obj5.extractEveryoneRole(arg0, getGuildId);
        if (null == extractEveryoneRoleResult) {
          return false;
        } else {
          const tmp10Result = MentionGuardUtilsDefault;
          if (tmp10Result.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
            const tmp10Result2 = MentionGuardUtilsDefault;
            const everyoneMemberCountResult = tmp10Result2.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
            let v47E5Rz = intl3.t["47E5Rz"];
            if (getGuildId.isForumPost()) {
              v47E5Rz = tmp7(1127).t.sYW2cy;
            } else if (getGuildId.isThread()) {
              v47E5Rz = tmp7(1127).t["2YaiQ1"];
            }
            const obj = { body: formatToPlainString(v47E5Rz, obj2), footer: intl2.string(intl3.t.mVyrtu) };
            const intl = tmp7(1127).intl;
            const _Math4 = Math;
            formatToPlainString = intl.formatToPlainString;
            obj2 = { role: extractEveryoneRoleResult, count: result.toLocaleString() };
            result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
            intl2 = tmp7(1127).intl;
            return obj;
          } else {
            return false;
          }
        }
      }
    } else {
      return false;
    }
  },
  analyticsType: "@Everyone Warning",
  animation: "applicationId"
};
const items = [
  obj,
  {
    check(arg0) {
      let intl;
      let isMatch = TOKEN_REGEX.test(arg0);
      if (isMatch) {
        const obj = { body: intl.string(intl3.t.sTwS1a) };
        intl = intl3.intl;
        isMatch = obj;
      }
      return isMatch;
    },
    analyticsType: "API Token Warning"
  }
];
let result = size.fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;
