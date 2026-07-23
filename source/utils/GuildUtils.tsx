// Module ID: 5047
// Function ID: 43603
// Name: requestMembersDebounced
// Dependencies: [1838, 1849, 1362, 664, 5048, 3969, 1212, 2]
// Exports: getGuildNameSuggestion

// Module 5047 (requestMembersDebounced)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "priv";

const require = arg1;
function requestMembersDebounced(items, arg1, arg2) {
  let closure_0 = items;
  let closure_1 = arg1;
  let closure_2 = arg2;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    function pushGuild(guild) {
      items.push(guild.id);
    }
    const items = [];
    if (null == items) {
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(outer1_5.getGuildIds(), 0);
      HermesBuiltin.apply(items1, items);
    } else {
      const _Array = Array;
      if (Array.isArray(items)) {
        const item = items.forEach((guildId) => {
          const guild = outer2_5.getGuild(guildId);
          if (null != guild) {
            pushGuild(guild);
          }
        });
      } else {
        let guild = outer1_5.getGuild(items);
        if (null != guild) {
          pushGuild(guild);
        }
      }
    }
    if (items.length > 0) {
      const members = callback(outer1_3[4]).requestMembers(items, pushGuild.toLocaleLowerCase(), closure_2);
      const obj = callback(outer1_3[4]);
    }
  }, 200);
}
function getCachedResults(arg0, arg1) {
  let str = "";
  if (null != arg0) {
    str = arg0;
  }
  const combined = "" + str + ":" + arg1;
  const value = importDefaultResult.get(combined);
  if (null != value) {
    return value;
  } else {
    const result = importDefaultResult.set(combined, true);
  }
}
function getGuildNameSuggestion(truncateUsername) {
  currentUser = currentUser.getCurrentUser();
  let obj = importAll(3969);
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = {};
      let substr = name;
      if (null != truncateUsername) {
        substr = name;
        if (truncateUsername.truncateUsername) {
          substr = name.slice(0, 20);
        }
      }
      obj.username = substr;
      str = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Y6Qfju, obj);
    }
  }
  return str;
}
let obj = { maxAge: require("set").Millis.MINUTE };
importDefaultResult = new importDefaultResult(obj);
obj = {
  getGuildNameSuggestion,
  requestMembers(arr) {
    let num = arg2;
    let closure_0 = arg1;
    if (arg2 === undefined) {
      num = 10;
    }
    let items;
    const isArray = Array.isArray(arr);
    items = [];
    if (isArray) {
      const item = arr.forEach((arg0) => {
        if (null == outer1_9(arg0, closure_0)) {
          items.push(arg0);
        }
      });
      let flag = false;
    } else {
      flag = false;
      if (null == getCachedResults(arr, arg1)) {
        flag = true;
      }
    }
    if (items.length > 0) {
      if (isArray) {
        requestMembersDebounced(items, arg1, num);
      }
    }
    if (flag) {
      requestMembersDebounced(arr, arg1, num);
    }
  }
};
let result = require("priv").fileFinishedImporting("utils/GuildUtils.tsx");

export default obj;
export { getGuildNameSuggestion };
