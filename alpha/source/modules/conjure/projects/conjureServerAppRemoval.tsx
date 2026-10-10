// Module ID: 11408
// Function ID: 11409
// Name: conjureServerAppRemoval
// Dependencies: [5, 19, 5440, 4748, 2125, 2087, 4750, 4760, 1390, 1085, 11409, 5421, 558, 576, 504, 12, 6097, 6945, 6852, 2]
// Exports: conjureDeleteAppChannelItems, conjureKickAppItems, loadConjureServerApp

// Module 11408 (conjureServerAppRemoval)
import Constants from "Constants" /* 1085 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4748 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6852 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import conjureAppInServer from "conjureAppInServer" /* 11409 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c1, c2, c4, set, user;

const f108253 = (id) => {
  obj = { key: "channel:" + id.id, kind: "channel", label: "#" + id.name };
  return obj;
};
const f108254 = () => {

};
function conjureApplicationIdForBot(userId) {
  let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(userId);
  if (appIdForBotUserId == null) {
    appIdForBotUserId = userId;
  }
  return appIdForBotUserId;
}
function readConjureServerApp(arg0, arg1) {
  let name;
  let tmp18;
  let guild = null;
  if (null != arg0) {
    guild = GuildStore.getGuild(arg0);
  }
  let application = null;
  if (null != arg1) {
    application = ApplicationStore.getApplication(arg1);
  }
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  if (null != guild) {
    if (null != application) {
      if (null != prop) {
        let items;
        const arr3 = appChannelApplicationIds(guild.id);
        const mapped = arr3.map((item) => authStore.getApplication(item));
        const found = mapped.find((vibegrationsProjectId) => {
          prop = undefined;
          if (vibegrationsProjectId != null) {
            prop = vibegrationsProjectId.vibegrationsProjectId;
          }
          return prop === prop;
        });
        if (null == found) {
          items = [];
        } else {
          obj = guild(11409);
          items = obj.findConjureAppChannels(guild.id, found.id);
        }
        let canRemoveConjureBotResult = null != found;
        if (canRemoveConjureBotResult) {
          let bot = application.bot;
          let id;
          const canRemoveConjureBot = guild(11409).canRemoveConjureBot;
          guild(11409);
          if (bot != null) {
            id = bot.id;
          }
          canRemoveConjureBotResult = canRemoveConjureBot(guild, id);
        }
        if (canRemoveConjureBotResult) {
          const bot2 = found.bot;
          let id1;
          const canRemoveConjureBot2 = guild(11409).canRemoveConjureBot;
          guild(11409);
          if (bot2 != null) {
            id1 = bot2.id;
          }
          canRemoveConjureBotResult = canRemoveConjureBot2(guild, id1);
        }
        if (canRemoveConjureBotResult) {
          const memberIds = GuildMemberStore.getMemberIds(guild.id);
          const found1 = memberIds.filter((item) => {
            user = user.getUser(item);
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            let tmp3 = true === bot;
            if (tmp3) {
              const getApplication = authStore.getApplication;
              let appIdForBotUserId = authStore.getAppIdForBotUserId(item);
              if (appIdForBotUserId == null) {
                appIdForBotUserId = item;
              }
              const application = getApplication(appIdForBotUserId);
              prop = undefined;
              if (application != null) {
                prop = application.vibegrationsProjectId;
              }
              tmp3 = prop === prop;
            }
            return tmp3;
          });
          canRemoveConjureBotResult = found1.every((item) => {
            obj = conjureAppInServer;
            return obj.canRemoveConjureBot(guild, item);
          });
        }
        if (canRemoveConjureBotResult) {
          canRemoveConjureBotResult = items.every((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
        }
        let obj2 = { projectId: prop, guildId: null, guildName: null, targetAppName: application.name, rest: tmp18 };
        ({ id: obj3.guildId, name: obj3.guildName } = guild);
        tmp18 = null;
        if (null != found) {
          tmp18 = null;
          if (0 !== items.length) {
            tmp18 = null;
            if (canRemoveConjureBotResult) {
              const obj4 = {
                appName: found.name,
                previewAppName: name,
                channels: items.map((id) => {
                              let obj2;
                              obj = { id: id.id, name: obj2.computeChannelName(id, user, RelationshipStore) };
                              obj2 = guild(dependencyMap[11]);
                              return obj;
                            }),
                targetIsPreview: found.id !== application.id
              };
              if (found.id === application.id) {
                const _HermesInternal = HermesInternal;
                name = "" + found.name + c14;
              } else {
                name = application.name;
              }
              tmp18 = obj4;
            }
          }
        }
        return obj2;
      }
    }
  }
  return null;
}
let obj = function _loadConjureServerApp() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let arr;
    let closure_2;
    let closure_3;
    let tmp10;
    let closure_0 = arg0;
    let closure_1 = value;
    await loadMissingApplication(closure_1);
    if (1 === c4) {
      if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const application = closure_131_5.getApplication(closure_1);
        let prop;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        tmp10 = null;
        if (null != prop) {
          c4 = 2;
          c5 = 1;
          const obj6 = { value: all(arr.map(closure_131_21)), done: false };
          arr = closure_131_19(closure_0);
          return obj6;
        }
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      tmp10 = closure_131_16(closure_0, closure_1);
    }
    return tmp10;
  });
  return obj(...arguments);
};
function appChannelApplicationIds(id) {
  set = new Set();
  const iter = GuildChannelStore.getChannels(id)[closure_7][Symbol.iterator]();
  while (iter !== undefined) {
    let channel = iter.next().channel;
    let obj2 = ConjureUtils;
    let conjureChannelAppIdResult = obj2.conjureChannelAppId(channel);
    if (null != conjureChannelAppIdResult) {
      let addResult = set.add(tmp4);
    }
    continue;
  }
  const items = [...set];
  return items;
}
function fetchMissingApplication(item10010) {
  const tmp = null != ApplicationStore.getApplication(item10010) || ApplicationStore.isFetchingApplication(item10010);
  if (!tmp) {
    const obj2 = ApplicationActionCreators;
    const application = obj2.fetchApplication(item10010);
    application.catch(f108254);
  }
}
function loadMissingApplication() {
  return obj(...arguments);
}
obj = function _loadMissingApplication() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp10 = closure_0;
            if (null == application.getApplication(closure_0)) {
              const obj2 = require("ApplicationActionCreators");
              application = obj2.fetchApplication(tmp10);
              c2 = 1;
              c1 = 1;
              const obj5 = {
                value: application.catch(() => {

                          }),
                done: false
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
let c14 = " (Preview)";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureServerApp(arg0, arg1) {
  let closure_0;
  let first;
  let items5;
  let stateFromStores;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let tmp2 = stateFromStores;
  obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function h() {
      let tmp2 = null != closure_1;
      if (tmp2) {
        const application = ApplicationStore.getApplication(tmp);
        let prop;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        tmp2 = null != prop;
      }
      return tmp2;
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[14]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== arg1) {
    class S {
      constructor() {
        if (null != closure_1) {
          const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
          if (!tmp2) {
            const obj2 = ApplicationActionCreators;
            const application = obj2.fetchApplication(tmp);
            application.catch(f108254);
          }
        }
      }
    }
    const items2 = [arg1];
    cResult[4] = arg1;
    cResult[5] = S;
    cResult[6] = items2;
    tmp10 = items2;
    tmp9 = S;
  } else {
    class S {
      constructor() {
        if (null != closure_1) {
          const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
          if (!tmp2) {
            const obj2 = ApplicationActionCreators;
            const application = obj2.fetchApplication(tmp);
            application.catch(f108254);
          }
        }
      }
    }
    tmp10 = cResult[6];
  }
  const effect = react.useEffect(tmp9, tmp10);
  const obj3 = react;
  if (cResult[7] === arg0) {
    class S {
      constructor() {
        if (null != closure_1) {
          const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
          if (!tmp2) {
            const obj2 = ApplicationActionCreators;
            const application = obj2.fetchApplication(tmp);
            application.catch(f108254);
          }
        }
      }
    }
    const effect1 = obj3.useEffect(M, items5);
    closure_18(arg0, arg1);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          if (null != closure_1) {
            const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
            if (!tmp2) {
              const obj2 = ApplicationActionCreators;
              const application = obj2.fetchApplication(tmp);
              application.catch(f108254);
            }
          }
        }
      }
      const items3 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
      cResult[11] = items3;
    } else {
      class S {
        constructor() {
          if (null != closure_1) {
            const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
            if (!tmp2) {
              const obj2 = ApplicationActionCreators;
              const application = obj2.fetchApplication(tmp);
              application.catch(f108254);
            }
          }
        }
      }
    }
    if (cResult[12] === arg1) {
      class S {
        constructor() {
          if (null != closure_1) {
            const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
            if (!tmp2) {
              const obj2 = ApplicationActionCreators;
              const application = obj2.fetchApplication(tmp);
              application.catch(f108254);
            }
          }
        }
      }
      const tmpResult2 = tmp(tmp2[14]);
      return tmpResult2.useStateFromStores(tmp15, tmp22, tmp23, tmp(tmp2[15]).isEqual);
    }
    const fn2 = function y() {
      return readConjureServerApp(closure_0, closure_1);
    };
    const items4 = [arg0, arg1];
    cResult[12] = arg1;
    cResult[13] = arg0;
    cResult[14] = fn2;
    cResult[15] = items4;
  }
  class M {
    constructor() {
      if (null != closure_0) {
        const tmp2 = stateFromStores;
        if (tmp2) {
          const tmp4 = appChannelApplicationIds(tmp);
          for (const item10010 of tmp4) {
            let tmp8 = fetchMissingApplication(item10010);
            continue;
          }
        }
      }
    }
  }
  items5 = [arg0, stateFromStores];
  cResult[7] = arg0;
  cResult[8] = stateFromStores;
  cResult[9] = M;
  cResult[10] = items5;
}) : (function useConjureServerApp(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  const items = [ApplicationStore];
  const items1 = [arg1];
  obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      const application = ApplicationStore.getApplication(tmp);
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      tmp2 = null != prop;
    }
    return tmp2;
  }, items1);
  const items2 = [arg1];
  const effect = react.useEffect(() => {
    if (null != closure_1) {
      const tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
      if (!tmp2) {
        const obj2 = ApplicationActionCreators;
        const application = obj2.fetchApplication(tmp);
        application.catch(f108254);
      }
    }
  }, items2);
  const items3 = [arg0, stateFromStores];
  const effect1 = react.useEffect(() => {
    if (null != closure_0) {
      const tmp2 = stateFromStores;
      if (tmp2) {
        const tmp4 = appChannelApplicationIds(tmp);
        for (const item10010 of tmp4) {
          let tmp8 = fetchMissingApplication(item10010);
          continue;
        }
      }
    }
  }, items3);
  let tmp4 = closure_18(arg0, arg1);
  let obj2 = require("get initialized");
  const items4 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
  const items5 = [arg0, arg1];
  return obj2.useStateFromStores(items4, () => readConjureServerApp(closure_0, closure_1), items5, require("module_12").isEqual);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureBotMembers(arg0, arg1) {
  let closure_0;
  let closure_3;
  let first;
  let stateFromStores;
  let tmp6;
  let tmp7;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let tmp2 = stateFromStores;
  obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = ApplicationStore;
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function c() {
      let application = null;
      if (null != closure_1) {
        application = ApplicationStore.getApplication(tmp);
      }
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      if (null == prop) {
        return null;
      } else {
        const bot = application.bot;
        let username;
        if (bot != null) {
          username = bot.username;
        }
        if (username == null) {
          username = application.name;
        }
        let str = username;
        if (username.endsWith(c14)) {
          str = username.slice(0, -10);
        }
        return str.toLowerCase();
      }
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[14]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[5] === stateFromStores) {
      tmp9 = cResult[6];
      tmp10 = cResult[7];
    }
    const effect = react.useEffect(tmp9, tmp10);
    const _Symbol = Symbol;
    const obj3 = react;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [GuildMemberStore, UserStore, ApplicationStore];
      class I {
        constructor() {
          if (null != closure_0) {
            tmp2 = closure_2;
            if (null != closure_2) {
              tmp3 = closure_8;
              memberIds = closure_8.getMemberIds(tmp);
              found = memberIds.filter((item) => {
                user = user.getUser(item);
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                let startsWithResult = true === bot;
                if (startsWithResult) {
                  const str = user.username;
                  const formatted = str.toLowerCase();
                  startsWithResult = formatted.startsWith(stateFromStores);
                }
                return startsWithResult;
              });
              tmp4 = conjureApplicationIdForBot;
              mapped = found.map(conjureApplicationIdForBot);
              found1 = mapped.filter((item) => null == application.getApplication(item));
            }
            return [];
          }
          return;
        }
      }
      cResult[8] = items2;
    }
    if (cResult[9] === arg0) {
      let tmp25;
      let tmp24;
      const useStateFromStores = tmp(tmp2[14]).useStateFromStores;
      const tmpResult2 = tmp(tmp2[14]);
      class I {
        constructor() {
          if (null != closure_0) {
            tmp2 = closure_2;
            if (null != closure_2) {
              tmp3 = closure_8;
              memberIds = closure_8.getMemberIds(tmp);
              found = memberIds.filter((item) => {
                user = user.getUser(item);
                let bot;
                if (user != null) {
                  bot = user.bot;
                }
                let startsWithResult = true === bot;
                if (startsWithResult) {
                  const str = user.username;
                  const formatted = str.toLowerCase();
                  startsWithResult = formatted.startsWith(stateFromStores);
                }
                return startsWithResult;
              });
              tmp4 = conjureApplicationIdForBot;
              mapped = found.map(conjureApplicationIdForBot);
              found1 = mapped.filter((item) => null == application.getApplication(item));
            }
            return [];
          }
          return;
        }
      }
      _asyncToGenerator = tmp23;
      if (cResult[13] !== tmp23) {
        class M {
          constructor() {
            const tmp2 = _asyncToGenerator[Symbol.iterator]();
            while (tmp2 !== undefined) {
              let tmp5 = fetchMissingApplication(tmp3);
              continue;
            }
          }
        }
        const items3 = [tmp23];
        cResult[13] = tmp23;
        cResult[14] = M;
        class I {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              if (null != closure_2) {
                tmp3 = closure_8;
                memberIds = closure_8.getMemberIds(tmp);
                found = memberIds.filter((item) => {
                  user = user.getUser(item);
                  let bot;
                  if (user != null) {
                    bot = user.bot;
                  }
                  let startsWithResult = true === bot;
                  if (startsWithResult) {
                    const str = user.username;
                    const formatted = str.toLowerCase();
                    startsWithResult = formatted.startsWith(stateFromStores);
                  }
                  return startsWithResult;
                });
                tmp4 = conjureApplicationIdForBot;
                mapped = found.map(conjureApplicationIdForBot);
                found1 = mapped.filter((item) => null == application.getApplication(item));
              }
              return [];
            }
            return;
          }
        }
        cResult[15] = items3;
        tmp25 = items3;
        tmp24 = M;
      } else {
        class M {
          constructor() {
            const tmp2 = _asyncToGenerator[Symbol.iterator]();
            while (tmp2 !== undefined) {
              let tmp5 = fetchMissingApplication(tmp3);
              continue;
            }
          }
        }
        tmp25 = cResult[15];
      }
      const effect1 = obj3.useEffect(tmp24, tmp25);
    }
    class I {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_2;
          if (null != closure_2) {
            tmp3 = closure_8;
            memberIds = closure_8.getMemberIds(tmp);
            found = memberIds.filter((item) => {
              user = user.getUser(item);
              let bot;
              if (user != null) {
                bot = user.bot;
              }
              let startsWithResult = true === bot;
              if (startsWithResult) {
                const str = user.username;
                const formatted = str.toLowerCase();
                startsWithResult = formatted.startsWith(stateFromStores);
              }
              return startsWithResult;
            });
            tmp4 = conjureApplicationIdForBot;
            mapped = found.map(conjureApplicationIdForBot);
            found1 = mapped.filter((item) => null == application.getApplication(item));
          }
          return [];
        }
        return;
      }
    }
    const items4 = [arg0, stateFromStores];
    cResult[9] = arg0;
    cResult[10] = stateFromStores;
    cResult[11] = I;
    cResult[12] = items4;
  }
  const fn2 = function v() {
    const tmp2 = null != closure_0 && null != stateFromStores;
    if (tmp2) {
      obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(tmp, stateFromStores, 10, false);
    }
  };
  const items5 = [arg0, stateFromStores];
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items5;
  tmp10 = items5;
  tmp9 = fn2;
}) : (function useConjureBotMembers(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("get initialized");
  const items = [ApplicationStore];
  const items1 = [arg1];
  stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != closure_1) {
      application = ApplicationStore.getApplication(tmp);
    }
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    if (null == prop) {
      return null;
    } else {
      const bot = application.bot;
      let username;
      if (bot != null) {
        username = bot.username;
      }
      if (username == null) {
        username = application.name;
      }
      let str = username;
      if (username.endsWith(c14)) {
        str = username.slice(0, -10);
      }
      return str.toLowerCase();
    }
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && null != stateFromStores;
    if (tmp2) {
      obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(tmp, stateFromStores, 10, false);
    }
  }, items2);
  const items3 = [GuildMemberStore, UserStore, ApplicationStore];
  const items4 = [arg0, stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let application;
    if (null != closure_0) {
      if (null != stateFromStores) {
        const memberIds = GuildMemberStore.getMemberIds(tmp);
        const found = memberIds.filter((item) => {
          user = user.getUser(item);
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          let startsWithResult = true === bot;
          if (startsWithResult) {
            const str = user.username;
            const formatted = str.toLowerCase();
            startsWithResult = formatted.startsWith(stateFromStores);
          }
          return startsWithResult;
        });
        const mapped = found.map(conjureApplicationIdForBot);
        const found1 = mapped.filter((item) => null == application.getApplication(item));
      }
      return [];
    }
  }, items4, require("module_12").isEqual);
  const items5 = [stateFromStores1];
  const effect1 = react.useEffect(() => {
    const tmp2 = stateFromStores1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = fetchMissingApplication(tmp3);
      continue;
    }
  }, items5);
});
const result = size.fileFinishedImporting("modules/conjure/projects/conjureServerAppRemoval.tsx");

export { conjureApplicationIdForBot };
export { readConjureServerApp };
export const useConjureServerApp = tmp2;
export const loadConjureServerApp = function loadConjureServerApp() {
  return obj(...arguments);
};
export const conjureKickAppItems = function conjureKickAppItems(rest) {
  const channels = rest.channels;
  const items = [...channels.map(f108253)];
  if (rest.targetIsPreview) {
    obj = { key: "main-app", kind: "app", label: rest.appName };
    const obj2 = { key: "main-app", kind: "app", label: rest.appName };
  } else {
    obj = { key: "preview-app", kind: "app", label: rest.previewAppName };
  }
  items[tmp] = obj;
  return items;
};
export const conjureDeleteAppChannelItems = function conjureDeleteAppChannelItems(rest, channelId) {
  let closure_0 = channelId;
  const channels = rest.channels;
  const found = channels.filter((id) => id.id !== channelId);
  const items = [...found.map(f108253), obj, obj2];
  obj = { key: "main-app", kind: "app", label: rest.appName };
  return items;
};
