// Module ID: 9545
// Function ID: 74422
// Name: items
// Dependencies: []

// Module 9545 (items)
const TOKEN_REGEX = require(dependencyMap[0]).TOKEN_REGEX;
let obj = {
  check(arg0, getGuildId) {
    if (arg2) {
      if (null == getGuildId.getGuildId()) {
        return false;
      } else {
        const extractEveryoneRoleResult = importDefault(dependencyMap[1]).extractEveryoneRole(arg0, getGuildId);
        if (null == extractEveryoneRoleResult) {
          return false;
        } else {
          if (obj6.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
            let obj = importDefault(dependencyMap[1]);
            const everyoneMemberCountResult = obj.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
            if (getGuildId.isForumPost()) {
            } else if (getGuildId.isThread()) {
            }
            obj = {};
            const intl = require(dependencyMap[2]).intl;
            obj = { role: extractEveryoneRoleResult };
            const _Math4 = Math;
            const result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
            obj.count = result.toLocaleString();
            obj.body = intl.formatToPlainString(_2YaiQ1, obj);
            const intl2 = require(dependencyMap[2]).intl;
            obj.footer = intl2.string(require(dependencyMap[2]).t.mVyrtu);
            return obj;
          } else {
            return false;
          }
          const obj6 = importDefault(dependencyMap[1]);
        }
        const obj5 = importDefault(dependencyMap[1]);
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
      const intl = require(dependencyMap[2]).intl;
      obj.body = intl.string(require(dependencyMap[2]).t.sTwS1a);
      tmp2 = obj;
    }
    return tmp2;
  },
  analyticsType: "API Token Warning"
};
items[1] = obj;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;
