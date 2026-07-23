// Module ID: 9552
// Function ID: 74463
// Name: items
// Dependencies: [653, 9553, 1212, 2]

// Module 9552 (items)
import { TOKEN_REGEX } from "ME";

let obj = {
  check(arg0, getGuildId) {
    if (arg2) {
      if (null == getGuildId.getGuildId()) {
        return false;
      } else {
        const extractEveryoneRoleResult = importDefault(9553).extractEveryoneRole(arg0, getGuildId);
        if (null == extractEveryoneRoleResult) {
          return false;
        } else {
          if (obj6.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
            let obj = importDefault(9553);
            const everyoneMemberCountResult = obj.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
            if (getGuildId.isForumPost()) {
            } else if (getGuildId.isThread()) {
            }
            obj = {};
            const intl = require(1212) /* getSystemLocale */.intl;
            obj = { role: extractEveryoneRoleResult };
            const _Math4 = Math;
            const result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
            obj.count = result.toLocaleString();
            obj.body = intl.formatToPlainString(_2YaiQ1, obj);
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj.footer = intl2.string(require(1212) /* getSystemLocale */.t.mVyrtu);
            return obj;
          } else {
            return false;
          }
          obj6 = importDefault(9553);
        }
        const obj5 = importDefault(9553);
      }
    } else {
      return false;
    }
  },
  analyticsType: "@Everyone Warning",
  animation: undefined
};
const items = [obj, ];
obj = {
  check(arg0) {
    const tmp = !TOKEN_REGEX.test(arg0);
    let tmp2 = !tmp;
    if (!tmp) {
      const obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.body = intl.string(require(1212) /* getSystemLocale */.t.sTwS1a);
      tmp2 = obj;
    }
    return tmp2;
  },
  analyticsType: "API Token Warning"
};
items[1] = obj;
let result = require("getSystemLocale").fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;
