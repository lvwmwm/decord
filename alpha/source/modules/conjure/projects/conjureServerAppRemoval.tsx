// Module ID: 14049
// Function ID: 14050
// Name: conjureServerAppRemoval
// Dependencies: [5, 19, 2162, 5173, 5155, 5114, 5175, 5185, 1385, 1072, 7287, 5891, 504, 12, 6854, 7197, 6992, 2]
// Exports: conjureDeleteAppChannelItems, loadConjureServerApp, useConjureServerApp

// Module 14049 (conjureServerAppRemoval)
import Constants from "Constants" /* 1072 */;
import GuildChannelStore2 from "GuildChannelStore" /* 5173 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6992 */;
import ConjureUtils from "ConjureUtils" /* 7197 */;
import conjureAppInServer from "conjureAppInServer" /* 7287 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c1, c2, c4, set, user;

const f107865 = () => {

};
function conjureApplicationIdForBot(userId) {
  let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(userId);
  if (appIdForBotUserId == null) {
    appIdForBotUserId = userId;
  }
  return appIdForBotUserId;
}
function readConjureServerApp(arg0, arg1) {
  let found3;
  let found4;
  let name2;
  let obj4;
  let tmp22;
  let tmp31;
  const f107863 = (item) => {
    obj = guild(conjureProjectId[11]);
    return obj.computeChannelName(item, user, RelationshipStore);
  };
  let guild = null;
  if (null != arg0) {
    guild = GuildStore.getGuild(arg0);
  }
  let application = null;
  if (null != arg1) {
    application = ApplicationStore.getApplication(arg1);
  }
  let conjureProjectId;
  if (application != null) {
    conjureProjectId = application.conjureProjectId;
  }
  if (null != guild) {
    if (null != application) {
      if (null != conjureProjectId) {
        let items;
        let endsWithResult;
        const arr6 = appChannelApplicationIds(guild.id);
        const mapped = arr6.map((item) => authStore.getApplication(item));
        const found = mapped.find((conjureProjectId) => {
          conjureProjectId = undefined;
          if (conjureProjectId != null) {
            conjureProjectId = conjureProjectId.conjureProjectId;
          }
          return conjureProjectId === conjureProjectId;
        });
        if (null == found) {
          items = [];
        } else {
          obj = guild(conjureProjectId[10]);
          items = obj.findConjureAppChannels(guild.id, found.id);
        }
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
            application = getApplication(appIdForBotUserId);
            conjureProjectId = undefined;
            if (application != null) {
              conjureProjectId = application.conjureProjectId;
            }
            tmp3 = conjureProjectId === conjureProjectId;
          }
          return tmp3;
        });
        let canRemoveConjureBotResult = null != found;
        if (canRemoveConjureBotResult) {
          let bot = application.bot;
          let id;
          const canRemoveConjureBot = guild(conjureProjectId[10]).canRemoveConjureBot;
          guild(conjureProjectId[10]);
          if (bot != null) {
            id = bot.id;
          }
          canRemoveConjureBotResult = canRemoveConjureBot(guild, id);
        }
        if (canRemoveConjureBotResult) {
          const bot2 = found.bot;
          let id1;
          const canRemoveConjureBot2 = guild(conjureProjectId[10]).canRemoveConjureBot;
          guild(conjureProjectId[10]);
          if (bot2 != null) {
            id1 = bot2.id;
          }
          canRemoveConjureBotResult = canRemoveConjureBot2(guild, id1);
        }
        if (canRemoveConjureBotResult) {
          canRemoveConjureBotResult = found1.every((item) => {
            obj = conjureAppInServer;
            return obj.canRemoveConjureBot(guild, item);
          });
        }
        if (canRemoveConjureBotResult) {
          canRemoveConjureBotResult = items.every((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
        }
        if (null != found) {
          endsWithResult = found.id !== application.id;
        } else {
          const name = application.name;
          endsWithResult = name.endsWith(c14);
        }
        let found2;
        if (!endsWithResult) {
          found2 = found1.find((item) => {
            let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(item);
            if (appIdForBotUserId == null) {
              appIdForBotUserId = item;
            }
            return appIdForBotUserId !== application.id;
          });
        }
        ({ id: obj2.guildId, name: obj2.guildName } = guild);
        const obj3 = { projectId: conjureProjectId, guildId: null, guildName: null, targetAppName: application.name, targetIsPreview: endsWithResult, deletableChannelNames: found3.map(f107863), keptChannelNames: found4.map(f107863), previewApp: tmp22, rest: tmp31 };
        found3 = items.filter(canDeleteChannel);
        found4 = items.filter((item) => !PermissionStore.can(constants.MANAGE_CHANNELS, item));
        tmp22 = null;
        if (null != found2) {
          let getApplication = ApplicationStore.getApplication;
          let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(found2);
          if (appIdForBotUserId == null) {
            appIdForBotUserId = found2;
          }
          const application1 = getApplication(appIdForBotUserId);
          let name1;
          if (application1 != null) {
            name1 = application1.name;
          }
          if (name1 == null) {
            const _HermesInternal = HermesInternal;
            name1 = "" + application.name + c14;
          }
          const obj5 = { name: name1, canRemove: obj4.canRemoveConjureBot(guild, found2) };
          tmp22 = obj5;
          obj4 = guild(conjureProjectId[10]);
        }
        tmp31 = null;
        if (null != found) {
          tmp31 = null;
          if (0 !== items.length) {
            tmp31 = null;
            if (canRemoveConjureBotResult) {
              const obj8 = {
                appName: found.name,
                previewAppName: name2,
                channels: items.map((id) => {
                              let obj2;
                              obj = { id: id.id, name: obj2.computeChannelName(id, user, RelationshipStore) };
                              obj2 = guild(conjureProjectId[11]);
                              return obj;
                            }),
                targetIsPreview: found.id !== application.id
              };
              if (found.id === application.id) {
                const _HermesInternal2 = HermesInternal;
                name2 = "" + found.name + c14;
              } else {
                name2 = application.name;
              }
              tmp31 = obj8;
            }
          }
        }
        return obj3;
      }
    }
  }
  return null;
}
function canDeleteChannel(arg0) {
  return PermissionStore.can(Permissions.MANAGE_CHANNELS, arg0);
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
        let conjureProjectId;
        if (application != null) {
          conjureProjectId = application.conjureProjectId;
        }
        tmp10 = null;
        if (null != conjureProjectId) {
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
    application.catch(f107865);
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
        return { value: "HermesInternal", done: null };
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
            const tmp4 = closure_0;
            if (null == application.getApplication(closure_0)) {
              const obj2 = require("ApplicationActionCreators");
              application = obj2.fetchApplication(tmp4);
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
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
let c14 = " (Preview)";
const result = size.fileFinishedImporting("modules/conjure/projects/conjureServerAppRemoval.tsx");

export { conjureApplicationIdForBot };
export { readConjureServerApp };
export function useConjureServerApp(guildId, applicationId) {
  let stateFromStores;
  _require = guildId;
  obj = require("get initialized");
  const items = [ApplicationStore];
  const items1 = [applicationId];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != applicationId;
    if (tmp2) {
      application = ApplicationStore.getApplication(tmp);
      let conjureProjectId;
      if (application != null) {
        conjureProjectId = application.conjureProjectId;
      }
      tmp2 = null != conjureProjectId;
    }
    return tmp2;
  }, items1);
  const items2 = [applicationId];
  const effect = react.useEffect(() => {
    if (null != applicationId) {
      const tmp2 = null != ApplicationStore.getApplication(applicationId) || ApplicationStore.isFetchingApplication(applicationId);
      if (!tmp2) {
        const obj2 = ApplicationActionCreators;
        application = obj2.fetchApplication(tmp);
        application.catch(f107865);
      }
    }
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect1 = react.useEffect(() => {
    if (null != guildId) {
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
  _require = guildId;
  let closure_1 = applicationId;
  let obj2 = require("get initialized");
  const items4 = [ApplicationStore];
  const items5 = [applicationId];
  const stateFromStores1 = obj2.useStateFromStores(items4, () => {
    application = null;
    if (null != closure_1) {
      application = application.getApplication(tmp);
    }
    let conjureProjectId;
    if (application != null) {
      conjureProjectId = application.conjureProjectId;
    }
    if (null == conjureProjectId) {
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
      if (username.endsWith(closure_2_14)) {
        str = username.slice(0, -10);
      }
      return str.toLowerCase();
    }
  }, items5);
  const items6 = [guildId, stateFromStores1];
  const effect2 = react.useEffect(() => {
    const tmp2 = null != closure_0 && null != stateFromStores1;
    if (tmp2) {
      obj = applicationId(stateFromStores[14]);
      const members = obj.requestMembers(tmp, stateFromStores1, 10, false);
    }
  }, items6);
  const items7 = [GuildMemberStore, UserStore, ApplicationStore];
  const items8 = [guildId, stateFromStores1];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items7, () => {
    if (null != closure_0) {
      if (null != stateFromStores1) {
        memberIds = memberIds.getMemberIds(tmp);
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
            startsWithResult = formatted.startsWith(stateFromStores1);
          }
          return startsWithResult;
        });
        const mapped = found.map(conjureApplicationIdForBot);
        const found1 = mapped.filter((item) => null == application.getApplication(item));
      }
      return [];
    }
  }, items8, require("module_12").isEqual);
  const items9 = [stateFromStores2];
  const effect3 = react.useEffect(() => {
    const tmp2 = stateFromStores2[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = fetchMissingApplication(tmp3);
      continue;
    }
  }, items9);
  const items10 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
  const items11 = [guildId, applicationId];
  const obj4 = require("get initialized");
  return obj4.useStateFromStores(items10, () => readConjureServerApp(guildId, applicationId), items11, require("module_12").isEqual);
}
export function loadConjureServerApp() {
  return obj(...arguments);
}
export function conjureDeleteAppChannelItems(rest, channelId) {
  let closure_0 = channelId;
  const channels = rest.channels;
  const found = channels.filter((id) => id.id !== channelId);
  const items = [
    ...found.map((id) => {
      obj = { key: "channel:" + id.id, kind: "channel", label: "#" + id.name };
      return obj;
    }),
    obj,
    obj2
  ];
  obj = { key: "main-app", kind: "app", label: rest.appName };
  return items;
}
