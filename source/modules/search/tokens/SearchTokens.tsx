// Module ID: 10079
// Function ID: 77892
// Name: getMonths
// Dependencies: [57, 1348, 1907, 3767, 1906, 3970, 1849, 10080, 10081, 653, 3712, 22, 1212, 4320, 3969, 10078, 10082, 5045, 4974, 7094, 10083, 10084, 2]
// Exports: buildCrossDMSearchTokensConfig, getLocalizedAuthorTypeAnswer, getLocalizedHasAnswer, getRandomDateShortcut, isMeAutcompleteAnswer, isSearchFilterTokenType, isValidFilterAnswerForSubmit, rebuildSearchTokenConfigs

// Module 10079 (getMonths)
import _slicedToArray from "_slicedToArray";
import closure_4 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";

let SearchTokenTypes;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_5;
let closure_6;
const require = arg1;
function getMonths() {
  const obj = importDefault(3712);
  const monthsResult = importDefault(3712).months();
  return new Set(importDefault(3712).months().map((str) => str.toLowerCase()));
}
function getWeekdays() {
  const obj = importDefault(3712);
  const weekdaysResult = importDefault(3712).weekdays();
  return new Set(importDefault(3712).weekdays().map((str) => str.toLowerCase()));
}
function getYears() {
  const fullYear = new Date().getFullYear();
  const date = new Date();
  const obj2 = importDefault(22);
  const rangeResult = importDefault(22).range(2015, fullYear + 1);
  return new Set(importDefault(22).range(2015, fullYear + 1).map((arg0) => arg0.toString()));
}
function makeDateRange(startOfResult, day) {
  const items = [startOfResult, startOfResult.clone().add(1, day)];
  return items;
}
function makeDate(day) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const obj = importDefault(3712)();
  return makeDateRange(importDefault(3712)().startOf(day).add(num, day), day);
}
function parseDate(arg0, arg1, day) {
  return makeDateRange(importDefault(3712)(arg0, arg1).local(), day);
}
function getShortcuts() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj[intl.string(require(1212) /* getSystemLocale */.t.HYiVEQ)] = () => outer1_30("day");
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj[intl2.string(require(1212) /* getSystemLocale */.t.cu86KC)] = () => outer1_30("day", -1);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj[intl3.string(require(1212) /* getSystemLocale */.t["FvBj/6"])] = () => outer1_30("week");
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj[intl4.string(require(1212) /* getSystemLocale */.t["20uWCw"])] = () => outer1_30("month");
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj[intl5.string(require(1212) /* getSystemLocale */.t["dXC/hn"])] = () => outer1_30("year");
  return obj;
}
function buildKey(intl14) {
  return "" + intl14 + ":";
}
function buildFilterRegex(intl13) {
  const regExp = new RegExp(buildKey(intl13), "i");
  return regExp;
}
function isValidUserAutocomplete(token) {
  function extractId(byTag) {
    let tmp = null;
    if (null != byTag) {
      let id;
      if (null != byTag) {
        id = byTag.id;
      }
      tmp = id;
    }
    return tmp;
  }
  const match = token.getMatch(1);
  if (regex2.test(match)) {
    let flag = null != match;
    if (flag) {
      token.setData("userId", match);
      flag = true;
    }
    return flag;
  } else if (match === closure_14) {
    let extractIdResult = extractId(authStore.getCurrentUser());
  } else if (null != token.getMatch(4)) {
    extractIdResult = extractId(authStore.findByTag(token.getMatch(4)));
  } else {
    const match1 = token.getMatch(2);
    extractIdResult = extractId(authStore.findByTag(match1, token.getMatch(3)));
  }
}
function dateValidator(getFullMatch) {
  const str = getFullMatch.getFullMatch();
  const formatted = getFullMatch.getFullMatch().trim().toLowerCase();
  const tmp2 = getShortcuts()[formatted];
  if (null != tmp2) {
    const tmp18 = callback(tmp2(), 2);
    let first = tmp18[0];
    let obj4 = tmp18[1];
  } else {
    if (obj5.has(formatted)) {
      const tmp16 = callback(parseDate(formatted, "MMMM", "month"), 2);
      first = tmp16[0];
      obj4 = tmp16[1];
    } else {
      if (obj.has(formatted)) {
        const tmp13 = callback(parseDate(formatted, "dddd", "day"), 2);
        first = tmp13[0];
        obj4 = tmp13[1];
      } else {
        if (obj2.has(formatted)) {
          const tmp10 = callback(tmp5(formatted, "YYYY", "year"), 2);
          first = tmp10[0];
          obj4 = tmp10[1];
        } else {
          const tmp8 = callback(tmp5(formatted, closure_16, "day"), 2);
          first = tmp8[0];
          obj4 = tmp8[1];
        }
        obj2 = getYears();
      }
      obj = getWeekdays();
    }
    obj5 = getMonths();
  }
  let tmp19 = !first.isValid();
  if (!tmp19) {
    tmp19 = !obj4.isValid();
  }
  let flag = !tmp19;
  if (!tmp19) {
    let tmp20 = null;
    let tmp21 = first;
    if ("before" !== arg1) {
      tmp20 = first;
      tmp21 = obj4;
      if ("after" === arg1) {
        tmp20 = obj4;
        tmp21 = null;
      }
    }
    getFullMatch.setData("start", tmp20);
    getFullMatch.setData("end", tmp21);
    flag = true;
  }
  return flag;
}
function isValidChannelAutocomplete(token, items) {
  const str = token.getMatch(1);
  if (regex2.test(str)) {
    items = [str];
    token.setData("channelIds", items);
    let flag = true;
  } else {
    let replaced = str;
    if (tmp) {
      const substr = str.substring(1, str.length - 1);
      replaced = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    tmp = str.startsWith("\"") && str.endsWith("\"");
    if (obj2.isGuildLikeSearchContext(items)) {
      flag = (function isValidGuildChannelAutocomplete(setData, replaced, guildId) {
        let closure_0 = replaced;
        const combined = outer1_7.getChannels(guildId)[outer1_5].concat(outer1_7.getChannels(guildId)[outer1_6]);
        const textChannelNameDisambiguations = outer1_7.getTextChannelNameDisambiguations(guildId);
        let obj = outer1_7.getChannels(guildId)[outer1_5];
        const obj2 = outer1_1(outer1_2[11]);
        const mapped = outer1_1(outer1_2[11]).chain(combined).map((channel) => channel.channel);
        if (null != guildId) {
          let allThreadsForGuild = outer1_4.getAllThreadsForGuild(guildId);
        } else {
          allThreadsForGuild = [];
        }
        const combined1 = mapped.concat(allThreadsForGuild);
        const chainResult = outer1_1(outer1_2[11]).chain(combined);
        const valueResult = combined1.filter((channel) => {
          let name;
          if (null != table[channel.id]) {
            name = tmp2.name;
          }
          if (null == name) {
            name = outer2_0(outer2_2[13]).computeChannelName(channel, outer2_11, outer2_8);
            const obj = outer2_0(outer2_2[13]);
          }
          return closure_0 === name;
        }).value();
        let length;
        if (null != valueResult) {
          length = valueResult.length;
        }
        let flag = length > 0;
        if (flag) {
          setData.setData("channelIds", valueResult.map((id) => id.id));
          flag = true;
        }
        return flag;
      })(token, replaced, items.guildId);
    } else {
      flag = items.type === constants.DMS;
      if (flag) {
        flag = !closure_10.hidePersonalInformation;
      }
      if (flag) {
        flag = (function isValidPrivateChannelAutocomplete(setData, replaced) {
          let closure_0 = replaced;
          const values = Object.values(outer1_4.getMutablePrivateChannels());
          const found = values.filter((isGroupDM) => {
            if (isGroupDM.isGroupDM()) {
              if (closure_0 === obj.computeChannelName(isGroupDM, outer2_11, outer2_8)) {
                return true;
              }
              obj = outer2_0(outer2_2[13]);
            }
            if (isGroupDM.isDM()) {
              const user = outer2_11.getUser(isGroupDM.getRecipientId());
              if (null == user) {
                return false;
              } else {
                return closure_0 === outer2_1(outer2_2[14]).getUserTag(user);
              }
            } else {
              return false;
            }
          });
          let length;
          if (null != found) {
            length = found.length;
          }
          let flag = length > 0;
          if (flag) {
            setData.setData("channelIds", found.map((id) => id.id));
            flag = true;
          }
          return flag;
        })(token, replaced);
      }
    }
    obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
  }
  return flag;
}
function getHasMap() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj[intl.string(require(1212) /* getSystemLocale */.t.ZNR2fi)] = "link";
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj[intl2.string(require(1212) /* getSystemLocale */.t["20uQR3"])] = "embed";
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj[intl3.string(require(1212) /* getSystemLocale */.t.L4lxyE)] = "poll";
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj[intl4.string(require(1212) /* getSystemLocale */.t.nrpA5E)] = "snapshot";
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj[intl5.string(require(1212) /* getSystemLocale */.t["AV/v6i"])] = "file";
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj[intl6.string(require(1212) /* getSystemLocale */.t.XM9XGP)] = "video";
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj[intl7.string(require(1212) /* getSystemLocale */.t.TNLcpx)] = "image";
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj[intl8.string(require(1212) /* getSystemLocale */.t.F8Wf0e)] = "sound";
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj[intl9.string(require(1212) /* getSystemLocale */.t.PJgX2h)] = "sticker";
  return obj;
}
function getAuthorTypeMap() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj[intl.string(require(1212) /* getSystemLocale */.t.tPZo4p)] = "user";
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj[intl2.string(require(1212) /* getSystemLocale */.t.JL7sRS)] = "bot";
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj[intl3.string(require(1212) /* getSystemLocale */.t.WjkIKU)] = "webhook";
  return obj;
}
function getLocalizedAnswer(str, authorTypeMap) {
  const startsWithResult = str.startsWith("-");
  let substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(authorTypeMap);
  const found = entries.find((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp === substr;
  });
  let first;
  if (null != found) {
    first = found[0];
  }
  if (null != first) {
    substr = first;
  }
  let combined = substr;
  if (startsWithResult) {
    const _HermesInternal = HermesInternal;
    combined = "-" + substr;
  }
  return combined;
}
function isValidHasAutocomplete(token) {
  return require(10082) /* ANSWER_IN_REGEX */.validateForMapWithNegation("has", getHasMap(), token);
}
function isValidAuthorTypeAutocomplete(token) {
  return require(10082) /* ANSWER_IN_REGEX */.validateForMapWithNegation("author_type", getAuthorTypeMap(), token);
}
function isValidPinnedAutocomplete(token) {
  const match = token.getMatch(1);
  if ("true" === match) {
    token.setData("pinned", true);
    let flag = true;
  } else {
    flag = "false" === match;
    if (flag) {
      token.setData("pinned", false);
      flag = true;
    }
  }
  return flag;
}
function generateDateAutocompletions() {
  const items = [...Array.from(getMonths()), ...Array.from(getWeekdays()), ...Array.from(getYears()), ...Object.keys(getShortcuts())];
  return items;
}
function getDateAutocompletions(toLocaleLowerCase, MAX_RECENT_CHANNELS) {
  let closure_0 = arg2;
  return genericSearch(toLocaleLowerCase, MAX_RECENT_CHANNELS, generateDateAutocompletions()).map((text) => {
    const obj = {};
    const merged = Object.assign(text);
    obj["group"] = closure_0;
    obj["key"] = "" + closure_0 + "-" + text.text;
    return obj;
  });
}
function genericSearch(toLocaleLowerCase, MAX_RECENT_CHANNELS, arg2) {
  let closure_0 = toLocaleLowerCase.toLocaleLowerCase();
  const found = importDefault(22)(arg2).filter((toLocaleLowerCase) => outer1_1(outer1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
  const arr = importDefault(22)(arg2);
  const takeResult = found.take(MAX_RECENT_CHANNELS);
  return found.take(MAX_RECENT_CHANNELS).map((text) => ({ text })).value();
}
function getUserAutocompletions(tokens) {
  let maxResults;
  let query;
  let searchContext;
  ({ query, searchContext, maxResults } = tokens);
  tokens = tokens.tokens;
  let items;
  let set;
  let currentUser1;
  let c3;
  function maybeAddUser(id) {
    let hasItem = null == id;
    if (!hasItem) {
      hasItem = set.has(id.id);
    }
    if (!hasItem) {
      hasItem = outer1_8.isBlockedOrIgnored(id.id);
    }
    if (!hasItem) {
      const obj = { user: id, text: set(currentUser1[14]).getUserTag(id) };
      items.push(obj);
      set.add(id.id);
      const obj2 = set(currentUser1[14]);
    }
  }
  let obj = {};
  const str2 = query.trim().split("#")[0];
  obj.query = str2;
  obj.limit = maxResults;
  obj.request = false;
  let obj1 = items(currentUser1[18]);
  obj.boosters = obj1.getBoosterMap(items(currentUser1[19]).AutocompleterResultTypes.USER);
  const type = searchContext.type;
  if (constants.GUILD !== type) {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          obj = {};
          const merged = Object.assign(obj);
          obj["channelId"] = searchContext.channelId;
          let queryChannelUsersResult = set(currentUser1[18]).queryChannelUsers(obj);
          const obj7 = set(currentUser1[18]);
        } else if (constants.DMS === type) {
          if (null == tokens) {
            tokens = [];
          }
          const arr2 = (function getPrivateChannelRecipients(tokens) {
            function maybeAddUser(id) {
              let hasItem = null == id;
              if (!hasItem) {
                hasItem = set.has(id.id);
              }
              if (!hasItem) {
                items1.push(id);
                set.add(id.id);
              }
            }
            if (null == tokens) {
              return [];
            } else {
              const _Set = Set;
              const set = new Set();
              const items = [];
              let item = tokens.forEach((getData) => {
                const data = getData.getData("channelIds");
                if (null != data) {
                  const item = data.forEach((arg0) => outer1_1.push(arg0));
                }
              });
              const items1 = [];
              const item1 = items.forEach((channelId) => {
                const channel = maybeAddUser.getChannel(channelId);
                if (null != channel) {
                  if (channel.isDM()) {
                    maybeAddUser(outer2_11.getUser(channel.getRecipientId()));
                  } else if (channel.isGroupDM()) {
                    const recipients = channel.recipients;
                    const item = recipients.forEach((arg0) => {
                      outer1_3(outer3_11.getUser(arg0));
                    });
                  }
                }
              });
              return items1;
            }
          })(tokens);
          if (null != arr2) {
            if (arr2.length > 0) {
              const currentUser = authStore.getCurrentUser();
              if (null != currentUser) {
                arr2.push(currentUser);
              }
              obj = {};
              const merged1 = Object.assign(obj);
              obj["users"] = arr2;
              queryChannelUsersResult = set(currentUser1[18]).queryUsers(obj);
              const obj5 = set(currentUser1[18]);
            }
          }
          let obj2 = set(currentUser1[18]);
          obj1 = {};
          const merged2 = Object.assign(obj);
          queryChannelUsersResult = obj2.queryAllUsers(obj1);
        } else {
          return [];
        }
      }
      currentUser1 = authStore.getCurrentUser();
      const replaced = str2.toLowerCase().replace(/^@/, "");
      let tmp24 = null != currentUser1 && str2.length > 0;
      if (tmp24) {
        const intl = items(currentUser1[12]).intl;
        let startsWithResult = intl.string(items(currentUser1[12]).t.Qf3ptv).startsWith(replaced);
        if (!startsWithResult) {
          const substr = closure_14.substr(1);
          startsWithResult = substr.startsWith(replaced);
        }
        tmp24 = startsWithResult;
        const stringResult = intl.string(items(currentUser1[12]).t.Qf3ptv);
      }
      c3 = tmp24;
      const found = queryChannelUsersResult.filter((record) => {
        record = record.record;
        let isBlockedOrIgnoredResult = outer1_8.isBlockedOrIgnored(record.id);
        if (!isBlockedOrIgnoredResult) {
          let tmp2 = c3;
          if (c3) {
            let id;
            if (null != currentUser1) {
              id = currentUser1.id;
            }
            tmp2 = record.id === id;
          }
          isBlockedOrIgnoredResult = tmp2;
        }
        return !isBlockedOrIgnoredResult;
      });
      const mapped = found.map((record) => {
        record = record.record;
        const obj = { text: set(currentUser1[14]).getUserTag(record), user: record };
        return obj;
      });
      if (tmp24) {
        obj2 = { text: closure_14, user: currentUser1 };
        mapped.unshift(obj2);
      }
      return mapped;
    }
  }
  if (0 === str2.length) {
    items = [];
    let _Set = Set;
    set = new Set();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId(searchContext.guildId);
    const recentlyTalked = set(currentUser1[18]).getRecentlyTalked(currentlySelectedChannelId, maxResults);
    let item = recentlyTalked.forEach((record) => {
      maybeAddUser(record.record);
    });
    recentMessageAuthorIds = recentMessageAuthorIds.getRecentMessageAuthorIds(searchContext.guildId);
    let item1 = recentMessageAuthorIds.forEach((arg0) => {
      maybeAddUser(outer1_11.getUser(arg0));
    });
    return items.slice(0, maxResults);
  } else {
    const obj3 = {};
    const merged3 = Object.assign(obj);
    obj3["guildId"] = searchContext.guildId;
    queryChannelUsersResult = set(currentUser1[18]).queryGuildUsers(obj3);
    const obj13 = set(currentUser1[18]);
  }
}
function getChannelAutocompletions(arg0) {
  let maxResults;
  let query;
  let searchContext;
  ({ query, searchContext, maxResults } = arg0);
  const str = query.trim();
  if (str.startsWith("\"")) {
    if (str.endsWith("\"")) {
      const substr = str.substring(1, str.length - 1);
      let str2 = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    let substr1 = str2;
    if ("#" === str2[0]) {
      substr1 = str2.substring(1);
    }
    if (obj3.isGuildLikeSearchContext(searchContext)) {
      let items = (function getGuildChannelAutocompletions(substr1, guildId, maxResults) {
        let obj = outer1_1(outer1_2[18]);
        obj = { query: substr1, type: outer1_5, guildId, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true, includeAllThreads: true, boosters: outer1_0(outer1_2[18]).getBoosterMap(outer1_0(outer1_2[19]).AutocompleterResultTypes.TEXT_CHANNEL) };
        const obj3 = outer1_0(outer1_2[18]);
        const queryChannelsResult = obj.queryChannels(obj);
        obj = { query: substr1, type: outer1_6, guildId, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true };
        const obj5 = outer1_1(outer1_2[18]);
        obj.boosters = outer1_0(outer1_2[18]).getBoosterMap(outer1_0(outer1_2[19]).AutocompleterResultTypes.VOICE_CHANNEL);
        const combined = queryChannelsResult.concat(obj5.queryChannels(obj));
        const mapped = combined.map((record) => record.record);
        if (0 === substr1.length) {
          const channelId = outer1_9.getChannelId(guildId);
          const found = mapped.find((id) => id.id === closure_0);
          if (null != found) {
            mapped.splice(mapped.indexOf(found), 1);
            mapped.unshift(found);
          }
        }
        const textChannelNameDisambiguations = outer1_7.getTextChannelNameDisambiguations(guildId);
        const obj7 = outer1_0(outer1_2[18]);
        const obj8 = outer1_1(outer1_2[11])(mapped);
        const takeResult = outer1_1(outer1_2[11])(mapped).take(maxResults);
        return outer1_1(outer1_2[11])(mapped).take(maxResults).map((channel) => {
          const obj = {};
          let name;
          if (null != table[channel.id]) {
            name = tmp.name;
          }
          if (null == name) {
            name = outer2_0(outer2_2[13]).computeChannelName(channel, outer2_11, outer2_8);
            const obj2 = outer2_0(outer2_2[13]);
          }
          obj.text = "" + name;
          obj.channel = channel;
          obj.key = channel.id;
          return obj;
        }).value();
      })(substr1, searchContext.guildId, maxResults);
    } else {
      if (searchContext.type === constants.DMS) {
        if (!closure_10.hidePersonalInformation) {
          items = (function getPrivateChannelAutocompletions(substr1, maxResults, arg2) {
            let obj = outer1_1(outer1_2[18]);
            obj = { query: substr1, limit: maxResults, fuzzy: true, boosters: outer1_0(outer1_2[18]).getBoosterMap(outer1_0(outer1_2[19]).AutocompleterResultTypes.GROUP_DM) };
            const obj3 = outer1_0(outer1_2[18]);
            const queryGroupDMsResult = obj.queryGroupDMs(obj);
            obj = { query: substr1, limit: maxResults };
            const obj5 = outer1_1(outer1_2[18]);
            obj.boosters = outer1_0(outer1_2[18]).getBoosterMap(outer1_0(outer1_2[19]).AutocompleterResultTypes.USER);
            const obj7 = outer1_0(outer1_2[18]);
            const queryDMChannelsResult = obj5.queryDMChannels(obj);
            const tmp2 = outer1_1(outer1_2[11]);
            const sorted = outer1_1(outer1_2[11])(queryGroupDMsResult.concat(queryDMChannelsResult)).sort(outer1_0(outer1_2[19]).sortByMatchScore);
            const mapped = sorted.map((record) => {
              record = record.record;
              const obj = { text: record.comparator, channel: record };
              let id;
              if (null != record) {
                id = record.id;
              }
              obj.key = id;
              return obj;
            });
            const tmp2Result = outer1_1(outer1_2[11])(queryGroupDMsResult.concat(queryDMChannelsResult));
            const iter = mapped.filter((text) => null != text.text && null != text.channel && null != text.key);
            return mapped.filter((text) => null != text.text && null != text.channel && null != text.key).value().slice(0, maxResults);
          })(substr1, maxResults, false);
        }
      }
      items = [];
    }
    return items;
  }
  str2 = str;
  if (str.startsWith("\"")) {
    const substr2 = str.substring(1);
    str2 = substr2.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
  }
}
function makeSearchTokenConfigs(arg0) {
  const _require = arg0;
  const intl = _require(items1[12]).intl;
  let items = [intl.string(_require(items1[12]).t.tPZo4p), , ];
  const intl2 = _require(items1[12]).intl;
  items[1] = intl2.string(_require(items1[12]).t.JL7sRS);
  const intl3 = _require(items1[12]).intl;
  items[2] = intl3.string(_require(items1[12]).t.WjkIKU);
  const intl4 = _require(items1[12]).intl;
  items1 = [, , , , , , , , ];
  items1[0] = intl4.string(_require(items1[12]).t.TNLcpx);
  const intl5 = _require(items1[12]).intl;
  items1[1] = intl5.string(_require(items1[12]).t.XM9XGP);
  const intl6 = _require(items1[12]).intl;
  items1[2] = intl6.string(_require(items1[12]).t.ZNR2fi);
  const intl7 = _require(items1[12]).intl;
  items1[3] = intl7.string(_require(items1[12]).t["AV/v6i"]);
  const intl8 = _require(items1[12]).intl;
  items1[4] = intl8.string(_require(items1[12]).t["20uQR3"]);
  const intl9 = _require(items1[12]).intl;
  items1[5] = intl9.string(_require(items1[12]).t.F8Wf0e);
  const intl10 = _require(items1[12]).intl;
  items1[6] = intl10.string(_require(items1[12]).t.L4lxyE);
  const intl11 = _require(items1[12]).intl;
  items1[7] = intl11.string(_require(items1[12]).t.PJgX2h);
  const intl12 = _require(items1[12]).intl;
  items1[8] = intl12.string(_require(items1[12]).t.nrpA5E);
  let obj = {};
  obj = {};
  const intl13 = _require(items1[12]).intl;
  obj.regex = buildFilterRegex(intl13.string(_require(items1[12]).t["1TUdFo"]));
  obj.componentType = obj.FILTER;
  const intl14 = _require(items1[12]).intl;
  obj.key = buildKey(intl14.string(_require(items1[12]).t["1TUdFo"]));
  const intl15 = _require(items1[12]).intl;
  obj.plainText = intl15.string(_require(items1[12]).t["1TUdFo"]);
  obj.validator = function validator() {
    return callback(items1[20]).isFromUserFilterSupported();
  };
  obj.getAutocompletions = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_FROM] = obj;
  obj = { follows: items2, regex: closure_22, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "author_id" };
  items2 = [SearchTokenTypes.FILTER_FROM];
  obj[SearchTokenTypes.ANSWER_USERNAME_FROM] = obj;
  const obj1 = {};
  const intl16 = _require(items1[12]).intl;
  obj1.regex = buildFilterRegex(intl16.string(_require(items1[12]).t["i96lO+"]));
  obj1.componentType = obj.FILTER;
  const intl17 = _require(items1[12]).intl;
  obj1.key = buildKey(intl17.string(_require(items1[12]).t["i96lO+"]));
  const intl18 = _require(items1[12]).intl;
  obj1.plainText = intl18.string(_require(items1[12]).t["i96lO+"]);
  obj1.validator = function validator() {
    return callback(items1[20]).isMentionsUserFilterSupported();
  };
  obj1.getAutocompletions = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_MENTIONS] = obj1;
  const items3 = [SearchTokenTypes.FILTER_MENTIONS];
  obj[SearchTokenTypes.ANSWER_USERNAME_MENTIONS] = { follows: items3, regex: closure_22, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "mentions" };
  const obj3 = {};
  const intl19 = _require(items1[12]).intl;
  obj3.regex = buildFilterRegex(intl19.string(_require(items1[12]).t.CqCvir));
  obj3.componentType = obj.FILTER;
  const intl20 = _require(items1[12]).intl;
  obj3.key = buildKey(intl20.string(_require(items1[12]).t.CqCvir));
  const intl21 = _require(items1[12]).intl;
  obj3.plainText = intl21.string(_require(items1[12]).t.CqCvir);
  obj3.getAutocompletions = function getAutocompletions(query) {
    return outer1_46(query.query, query.maxResults, items1);
  };
  obj[SearchTokenTypes.FILTER_HAS] = obj3;
  const obj4 = {};
  let obj7 = _require(items1[16]);
  obj4.regex = obj7.makeRegexForOptionsWithNegation(items1);
  const items4 = [SearchTokenTypes.FILTER_HAS];
  obj4.follows = items4;
  obj4.validator = isValidHasAutocomplete;
  obj4.componentType = obj.ANSWER;
  obj4.queryKey = "has";
  obj[SearchTokenTypes.ANSWER_HAS] = obj4;
  const obj5 = {};
  const intl22 = _require(items1[12]).intl;
  obj5.regex = buildFilterRegex(intl22.string(_require(items1[12]).t.RpRAZD));
  const intl23 = _require(items1[12]).intl;
  obj5.key = buildKey(intl23.string(_require(items1[12]).t.RpRAZD));
  const intl24 = _require(items1[12]).intl;
  obj5.plainText = intl24.string(_require(items1[12]).t.RpRAZD);
  obj5.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_LINK_FROM] = obj5;
  const items5 = [SearchTokenTypes.FILTER_LINK_FROM];
  obj[SearchTokenTypes.ANSWER_LINK_FROM] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items5, mutable: true, componentType: obj.ANSWER, queryKey: "link_hostname" };
  obj7 = {};
  const intl25 = _require(items1[12]).intl;
  obj7.regex = buildFilterRegex(intl25.string(_require(items1[12]).t.TMNjFm));
  const intl26 = _require(items1[12]).intl;
  obj7.key = buildKey(intl26.string(_require(items1[12]).t.TMNjFm));
  const intl27 = _require(items1[12]).intl;
  obj7.plainText = intl27.string(_require(items1[12]).t.TMNjFm);
  obj7.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_TYPE] = obj7;
  const obj2 = { follows: items3, regex: closure_22, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "mentions" };
  const obj6 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items5, mutable: true, componentType: obj.ANSWER, queryKey: "link_hostname" };
  const items6 = [SearchTokenTypes.FILTER_FILE_TYPE];
  obj[SearchTokenTypes.ANSWER_FILE_TYPE] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items6, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_extension" };
  const obj9 = {};
  const intl28 = _require(items1[12]).intl;
  obj9.regex = buildFilterRegex(intl28.string(_require(items1[12]).t["5xtLRC"]));
  const intl29 = _require(items1[12]).intl;
  obj9.key = buildKey(intl29.string(_require(items1[12]).t["5xtLRC"]));
  const intl30 = _require(items1[12]).intl;
  obj9.plainText = intl30.string(_require(items1[12]).t["5xtLRC"]);
  obj9.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_NAME] = obj9;
  const obj8 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items6, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_extension" };
  const items7 = [SearchTokenTypes.FILTER_FILE_NAME];
  obj[SearchTokenTypes.ANSWER_FILE_NAME] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items7, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_filename" };
  const obj11 = {};
  const intl31 = _require(items1[12]).intl;
  obj11.regex = buildFilterRegex(intl31.string(_require(items1[12]).t["qZ+7BA"]));
  obj11.componentType = obj.FILTER;
  const intl32 = _require(items1[12]).intl;
  obj11.key = buildKey(intl32.string(_require(items1[12]).t["qZ+7BA"]));
  const intl33 = _require(items1[12]).intl;
  obj11.plainText = intl33.string(_require(items1[12]).t["qZ+7BA"]);
  obj11.getAutocompletions = function getAutocompletions(query) {
    return outer1_45(query.query, query.maxResults, outer1_15.FILTER_BEFORE);
  };
  obj[SearchTokenTypes.FILTER_BEFORE] = obj11;
  const obj12 = {};
  const intl34 = _require(items1[12]).intl;
  const obj10 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items7, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_filename" };
  const intl35 = _require(items1[12]).intl;
  obj12.regex = buildFilterRegex("(" + intl34.string(_require(items1[12]).t.tIxkOo) + "|" + intl35.string(_require(items1[12]).t.h2NzSd) + ")");
  obj12.componentType = obj.FILTER;
  const intl36 = _require(items1[12]).intl;
  obj12.key = buildKey(intl36.string(_require(items1[12]).t.h2NzSd));
  const intl37 = _require(items1[12]).intl;
  obj12.plainText = intl37.string(_require(items1[12]).t.h2NzSd);
  obj12.getAutocompletions = function getAutocompletions(query) {
    return outer1_45(query.query, query.maxResults, outer1_15.FILTER_ON);
  };
  obj[SearchTokenTypes.FILTER_ON] = obj12;
  const obj13 = {};
  const intl38 = _require(items1[12]).intl;
  obj13.regex = buildFilterRegex(intl38.string(_require(items1[12]).t.KSDx7M));
  obj13.componentType = obj.FILTER;
  const intl39 = _require(items1[12]).intl;
  obj13.key = buildKey(intl39.string(_require(items1[12]).t.KSDx7M));
  const intl40 = _require(items1[12]).intl;
  obj13.plainText = intl40.string(_require(items1[12]).t.KSDx7M);
  obj13.getAutocompletions = function getAutocompletions(query) {
    return outer1_45(query.query, query.maxResults, outer1_15.FILTER_AFTER);
  };
  obj[SearchTokenTypes.FILTER_AFTER] = obj13;
  const items8 = [SearchTokenTypes.FILTER_BEFORE];
  obj[SearchTokenTypes.ANSWER_BEFORE] = {
    regex: regExp,
    follows: items8,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "before");
    }
  };
  const items9 = [SearchTokenTypes.FILTER_ON];
  obj[SearchTokenTypes.ANSWER_ON] = {
    regex: regExp,
    follows: items9,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "on");
    }
  };
  const items10 = [SearchTokenTypes.FILTER_AFTER];
  obj[SearchTokenTypes.ANSWER_AFTER] = {
    regex: regExp,
    follows: items10,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "after");
    }
  };
  const obj17 = {};
  const intl41 = _require(items1[12]).intl;
  obj17.regex = buildFilterRegex(intl41.string(_require(items1[12]).t.WNpFHa));
  obj17.componentType = obj.FILTER;
  const intl42 = _require(items1[12]).intl;
  obj17.key = buildKey(intl42.string(_require(items1[12]).t.WNpFHa));
  const intl43 = _require(items1[12]).intl;
  obj17.plainText = intl43.string(_require(items1[12]).t.WNpFHa);
  obj17.validator = function validator() {
    if (null != callback) {
      let selectedSearchContext = callback;
    } else {
      selectedSearchContext = outer1_12.getSelectedSearchContext();
    }
    let result = null != selectedSearchContext;
    if (result) {
      result = callback(items1[20]).isInChannelFilterSupported(selectedSearchContext);
      const obj = callback(items1[20]);
    }
    return result;
  };
  obj17.getAutocompletions = getChannelAutocompletions;
  obj[SearchTokenTypes.FILTER_IN] = obj17;
  const obj14 = {
    regex: regExp,
    follows: items8,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "before");
    }
  };
  const obj15 = {
    regex: regExp,
    follows: items9,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "on");
    }
  };
  const obj16 = {
    regex: regExp,
    follows: items10,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return outer1_36(arg0, "after");
    }
  };
  const stringResult = intl34.string(_require(items1[12]).t.tIxkOo);
  const items11 = [SearchTokenTypes.FILTER_IN];
  obj[SearchTokenTypes.ANSWER_IN] = {
    regex: _require(items1[16]).ANSWER_IN_REGEX,
    mutable: true,
    follows: items11,
    componentType: obj.ANSWER,
    validator(arg0) {
      if (null != closure_0) {
        let selectedSearchContext = closure_0;
      } else {
        selectedSearchContext = outer1_12.getSelectedSearchContext();
      }
      let tmp3 = null != selectedSearchContext;
      if (tmp3) {
        tmp3 = outer1_37(arg0, selectedSearchContext);
      }
      return tmp3;
    },
    queryKey: "channel_id"
  };
  const obj19 = {};
  const intl44 = _require(items1[12]).intl;
  obj19.regex = buildFilterRegex(intl44.string(_require(items1[12]).t["0B74eY"]));
  obj19.componentType = obj.FILTER;
  const intl45 = _require(items1[12]).intl;
  obj19.key = buildKey(intl45.string(_require(items1[12]).t["0B74eY"]));
  const intl46 = _require(items1[12]).intl;
  obj19.plainText = intl46.string(_require(items1[12]).t["0B74eY"]);
  obj19.getAutocompletions = function getAutocompletions() {
    const items = [{ text: "true" }, { text: "false" }];
    return items;
  };
  obj[SearchTokenTypes.FILTER_PINNED] = obj19;
  const items12 = [SearchTokenTypes.FILTER_PINNED];
  obj[SearchTokenTypes.ANSWER_PINNED] = { regex: regExp1, componentType: obj.ANSWER, follows: items12, queryKey: "pinned", validator: isValidPinnedAutocomplete };
  const obj21 = {};
  const intl47 = _require(items1[12]).intl;
  obj21.regex = buildFilterRegex(intl47.string(_require(items1[12]).t.us8IQi));
  obj21.componentType = obj.FILTER;
  const intl48 = _require(items1[12]).intl;
  obj21.key = buildKey(intl48.string(_require(items1[12]).t.us8IQi));
  const intl49 = _require(items1[12]).intl;
  obj21.plainText = intl49.string(_require(items1[12]).t.us8IQi);
  obj21.getAutocompletions = function getAutocompletions(query) {
    return outer1_46(query.query, query.maxResults, items);
  };
  obj[SearchTokenTypes.FILTER_AUTHOR_TYPE] = obj21;
  const obj22 = {};
  const obj18 = {
    regex: _require(items1[16]).ANSWER_IN_REGEX,
    mutable: true,
    follows: items11,
    componentType: obj.ANSWER,
    validator(arg0) {
      if (null != closure_0) {
        let selectedSearchContext = closure_0;
      } else {
        selectedSearchContext = outer1_12.getSelectedSearchContext();
      }
      let tmp3 = null != selectedSearchContext;
      if (tmp3) {
        tmp3 = outer1_37(arg0, selectedSearchContext);
      }
      return tmp3;
    },
    queryKey: "channel_id"
  };
  const obj20 = { regex: regExp1, componentType: obj.ANSWER, follows: items12, queryKey: "pinned", validator: isValidPinnedAutocomplete };
  obj22.regex = _require(items1[16]).makeRegexForOptionsWithNegation(items);
  const items13 = [SearchTokenTypes.FILTER_AUTHOR_TYPE];
  obj22.follows = items13;
  obj22.validator = isValidAuthorTypeAutocomplete;
  obj22.componentType = obj.ANSWER;
  obj22.queryKey = "author_type";
  obj[SearchTokenTypes.ANSWER_AUTHOR_TYPE] = obj22;
  return obj;
}
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_5, GUILD_VOCAL_CHANNELS_KEY: closure_6 } = _isNativeReflectConstruct);
({ ME: closure_14, SearchTokenTypes } = ME);
({ SEARCH_DATE_FORMAT: closure_16, SearchTypes: closure_17, IS_SEARCH_FILTER_TOKEN: closure_18, ID_REGEX: closure_19 } = ME);
let regExp = new RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i");
const regExp1 = new RegExp("\\s*(true|false)", "i");
const re22 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
let obj = { FILTER: "FILTER", ANSWER: "ANSWER" };
obj = {};
let closure_25 = { [SearchTokenTypes.FILTER_HAS]: SearchTokenTypes.ANSWER_HAS, [SearchTokenTypes.FILTER_AUTHOR_TYPE]: SearchTokenTypes.ANSWER_AUTHOR_TYPE, [SearchTokenTypes.FILTER_PINNED]: SearchTokenTypes.ANSWER_PINNED };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/tokens/SearchTokens.tsx");

export default obj;
export { isValidUserAutocomplete };
export { isValidChannelAutocomplete };
export const getLocalizedHasAnswer = function getLocalizedHasAnswer(arg0) {
  return getLocalizedAnswer(arg0, getHasMap());
};
export const getLocalizedAuthorTypeAnswer = function getLocalizedAuthorTypeAnswer(arg0) {
  return getLocalizedAnswer(arg0, getAuthorTypeMap());
};
export const getRandomDateShortcut = function getRandomDateShortcut() {
  return importDefault(22).sample(generateDateAutocompletions());
};
export { getUserAutocompletions };
export const ComponentTypes = obj;
export const buildCrossDMSearchTokensConfig = function buildCrossDMSearchTokensConfig() {
  return makeSearchTokenConfigs({ type: constants.DMS });
};
export const rebuildSearchTokenConfigs = function rebuildSearchTokenConfigs() {
  const merged = Object.assign(obj, makeSearchTokenConfigs());
};
export const isSearchFilterTokenType = function isSearchFilterTokenType(type) {
  return regex.test(type);
};
export const isMeAutcompleteAnswer = function isMeAutcompleteAnswer(str) {
  if (0 === str.length) {
    return false;
  } else {
    const replaced = str.toLowerCase().replace(/^@/, "");
    const intl = require(1212) /* getSystemLocale */.intl;
    str = str.toLowerCase();
    let startsWithResult = intl.string(require(1212) /* getSystemLocale */.t.Qf3ptv).startsWith(replaced);
    if (!startsWithResult) {
      const substr = closure_14.substring(1);
      startsWithResult = substr.startsWith(replaced);
    }
    return startsWithResult;
  }
};
export const isValidFilterAnswerForSubmit = function isValidFilterAnswerForSubmit(searchTokenType, trimmed) {
  if (null == table[searchTokenType]) {
    return true;
  } else {
    const Token = require(10084) /* getMatch */.Token;
    const _HermesInternal = HermesInternal;
    const items = ["filter:" + trimmed, trimmed];
    const prototype = Token.prototype;
    const token = new Token(items, tmp);
    if (SearchTokenTypes.ANSWER_HAS === tmp) {
      return isValidHasAutocomplete(token);
    } else if (SearchTokenTypes.ANSWER_AUTHOR_TYPE === tmp) {
      return isValidAuthorTypeAutocomplete(token);
    } else if (SearchTokenTypes.ANSWER_PINNED === tmp) {
      return isValidPinnedAutocomplete(token);
    } else {
      return false;
    }
  }
};
