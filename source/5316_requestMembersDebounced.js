// Module ID: 5316
// Function ID: 45127
// Name: requestMembersDebounced
// Dependencies: []
// Exports: getGuildNameSuggestion

// Module 5316 (requestMembersDebounced)
function requestMembersDebounced(items, arg1, arg2) {
  arg1 = items;
  const importDefault = arg1;
  const importAll = arg2;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const timeout = setTimeout(() => {
    function pushGuild(guild) {
      items.push(guild.id);
    }
    const arg1 = pushGuild;
    const items = [];
    const arg0 = items;
    if (null == arg0) {
      const push = items.push;
      const items1 = [];
      HermesBuiltin.arraySpread(store.getGuildIds(), 0);
      HermesBuiltin.apply(items1, items);
    } else {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        const item = arg0.forEach((guildId) => {
          const guild = guild.getGuild(guildId);
          if (null != guild) {
            pushGuild(guild);
          }
        });
      } else {
        const guild = store.getGuild(arg0);
        if (null != guild) {
          pushGuild(guild);
        }
      }
    }
    if (items.length > 0) {
      const members = arg1(closure_3[4]).requestMembers(items, arg1.toLocaleLowerCase(), arg2);
      const obj = arg1(closure_3[4]);
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
  const currentUser = currentUser.getCurrentUser();
  let obj = importAll(dependencyMap[5]);
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = arg1(dependencyMap[6]).intl;
      obj = {};
      let substr = name;
      if (null != truncateUsername) {
        substr = name;
        if (truncateUsername.truncateUsername) {
          substr = name.slice(0, 20);
        }
      }
      obj.username = substr;
      str = intl.formatToPlainString(arg1(dependencyMap[6]).t.Y6Qfju, obj);
    }
  }
  return str;
}
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let importDefaultResult = importDefault(dependencyMap[2]);
let obj = { maxAge: importDefault(dependencyMap[3]).Millis.MINUTE };
importDefaultResult = new importDefaultResult(obj);
obj = {
  getGuildNameSuggestion,
  requestMembers(arr) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 10;
    }
    let importDefault;
    const isArray = Array.isArray(arr);
    const items = [];
    importDefault = items;
    if (isArray) {
      const item = arr.forEach((arg0) => {
        if (null == callback(arg0, arg1)) {
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
const result = arg1(dependencyMap[7]).fileFinishedImporting("utils/GuildUtils.tsx");

export default obj;
export { getGuildNameSuggestion };
