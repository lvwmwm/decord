// Module ID: 7075
// Function ID: 7076
// Name: GuildUtils
// Dependencies: [5177, 1388, 1456, 1089, 572, 6917, 5372, 1113, 2]
// Exports: getGuildNameSuggestion

// Module 7075 (GuildUtils)
import DurationsDefault from "Durations" /* 1089 */;
import intl2 from "intl" /* 1113 */;
import UserUtilsAll from "UserUtils" /* 5372 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserStore from "UserStore" /* 1388 */;
import LRUCache from "LRUCache" /* 1456 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function getGuildNameSuggestion(truncateUsername) {
  const currentUser = UserStore.getCurrentUser();
  const obj = UserUtilsAll;
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = intl2.intl;
      const formatToPlainString = intl.formatToPlainString;
      truncateUsername = undefined;
      const Y6Qfju = intl2.t.Y6Qfju;
      if (truncateUsername != null) {
        truncateUsername = truncateUsername.truncateUsername;
      }
      let substr = name;
      if (truncateUsername) {
        substr = name.slice(0, 20);
      }
      const obj2 = { username: substr };
      str = formatToPlainString(Y6Qfju, obj2);
    }
  }
  return str;
}
let obj = { maxAge: DurationsDefault.Millis.MINUTE };
const importDefaultResult2 = new LRUCache(obj);
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  importDefaultResult2.reset();
});
let obj2 = {
  getGuildNameSuggestion,
  requestMembers(arr, arg1) {
    let closure_4;
    let flag2;
    let timeout;
    const f93456 = () => {
      items = [];
      if (null == items) {
        const push = items.push;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, GuildStore.getGuildIds(), 0);
        HermesBuiltin.apply(push, items1, items);
      } else {
        const _Array = Array;
        if (Array.isArray(items)) {
          const item = arr2.forEach((item) => {
            guild = guild.getGuild(item);
            if (null != guild) {
              items.push(guild.id);
            }
          });
        } else {
          let guild = GuildStore.getGuild(arr2);
          if (null != guild) {
            items.push(guild.id);
          }
        }
      }
      if (items.length > 0) {
        const obj = items(dependencyMap[5]);
        const members = obj.requestMembers(items, closure_1.toLocaleLowerCase(), num);
      }
    };
    let closure_0 = arg1;
    let num = arg2;
    if (arg2 === undefined) {
      num = 10;
    }
    const isArray = Array.isArray(arr);
    let items = [];
    if (isArray) {
      let item = arr.forEach((item) => {
        let str = item;
        const tmp = closure_0;
        if (item == null) {
          str = "";
        }
        const combined = "" + str + ":" + tmp;
        const value = importDefaultResult2.get(combined);
        const obj = importDefaultResult2;
        if (null == value) {
          const result = obj.set(combined, true);
        }
        if (null == value) {
          items.push(item);
        }
      });
      flag2 = false;
    } else {
      let str = arr;
      if (arr == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + str + ":" + arg1;
      let obj = importDefaultResult2;
      let value = importDefaultResult2.get(combined);
      if (null == value) {
        let result = obj.set(combined, true);
      }
      flag2 = false;
      if (null == value) {
        flag2 = true;
      }
    }
    if (items.length > 0) {
      if (isArray) {
        let closure_1 = arg1;
        if (null != timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
        }
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(f93456, 200);
      }
    }
    if (flag2) {
      closure_0 = arr;
      closure_1 = arg1;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(f93456, 200);
    }
  }
};
let result = size.fileFinishedImporting("utils/GuildUtils.tsx");

export default obj2;
export { getGuildNameSuggestion };
