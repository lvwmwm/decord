// Module ID: 10843
// Function ID: 10844
// Name: conjureAppInServer
// Dependencies: [5, 2043, 7760, 4935, 4879, 4937, 1084, 8710, 7405, 6832, 2]
// Exports: canRemoveConjureBot, fetchConjureAppInGuild, findConjureAppChannels, readConjureAppServerPresence, readConjureBotInGuild

// Module 10843 (conjureAppInServer)
import Constants from "Constants" /* 1084 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4935 */;
import ConjureUtils from "ConjureUtils" /* 7405 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let c3, c4, c5;

const f110170 = (channel) => channel.channel;
function conjureProductionBotUserId(project) {
  const application = ApplicationStore.getApplication(project.application_id);
  let id;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (id == null) {
    id = project.application_id;
  }
  return id;
}
function conjurePreviewBotUserId(project) {
  const preview_application_id = project.preview_application_id;
  let tmp = null;
  if (null != preview_application_id) {
    const application = ApplicationStore.getApplication(preview_application_id);
    let id;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    if (id == null) {
      id = preview_application_id;
    }
    tmp = id;
  }
  return tmp;
}
let obj = function _fetchConjureAppInGuild() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    let closure_2 = tmp;
    closure_0 = closure_1;
    const items = [conjureProductionBotUserId(closure_0), ];
    items[1] = conjurePreviewBotUserId(closure_0);
    const tmp20 = globalThis;
    await Promise.all(items.map((() => {
      let mutualGuilds;
      closure_0 = closure_1_2(function*(arg0, value) {
        let obj3;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            let mutualGuilds2;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2 = tmp;
                mutualGuilds2 = undefined;
                if (null == closure_0) {
                  c5 = 3;
                  return { value: false, done: true };
                } else {
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj3.fetchProfile(tmp21, { withMutualGuilds: true }), done: false };
                  obj3 = closure_0(closure_2_1[7]);
                  return obj5;
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c3 = 0;
              mutualGuilds2 = mutualGuilds.getMutualGuilds(closure_0);
              let someResult = null;
              if (null != mutualGuilds2) {
                someResult = mutualGuilds2.some((guild) => guild.guild.id === closure_1_0);
              }
              c5 = 3;
              obj = { value: someResult, done: true };
              return obj;
            }
          } catch (tmp15) {
            if (0 === c3) {
              c5 = 3;
              throw tmp15;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return function() {
        return closure_0(...arguments);
      };
    })()));
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    closure_1 = arg1;
    let hasItem = closure_1.includes(true);
    if (!hasItem) {
      const hasItem1 = closure_1.includes(null) && null;
      hasItem = hasItem1;
    }
    return hasItem;
  });
  return obj(...arguments);
};
let closure_6 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/conjure/projects/conjureAppInServer.tsx");

export { conjureProductionBotUserId };
export { conjurePreviewBotUserId };
export function readConjureBotInGuild(project, guild_id) {
  let closure_0 = guild_id;
  if (null == guild_id) {
    return null;
  } else {
    const getMutualGuilds = UserProfileStore.getMutualGuilds;
    const application = ApplicationStore.getApplication(project.application_id);
    let id;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    if (id == null) {
      id = project.application_id;
    }
    const mutualGuilds = getMutualGuilds(id);
    let someResult = null;
    if (null != mutualGuilds) {
      someResult = mutualGuilds.some((guild) => guild.guild.id === guild_id);
    }
    return someResult;
  }
}
export function fetchConjureAppInGuild() {
  return obj(...arguments);
}
export function canRemoveConjureBot(guild, id) {
  const canManageUserResult = null != id && PermissionStore.canManageUser(Permissions.KICK_MEMBERS, id, guild) || PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  return canManageUserResult;
}
export function findConjureAppChannels(id, application_id) {
  let closure_0 = application_id;
  const arr = GuildChannelStore.getChannels(id)[closure_6];
  const mapped = arr.map(f110170);
  return mapped.filter((item) => {
    obj = ConjureUtils;
    return obj.conjureChannelAppId(item) === application_id;
  });
}
export function readConjureAppServerPresence(install_scope) {
  if ("user" !== install_scope.install_scope) {
    if (null != install_scope.guild_id) {
      if (null == GuildStore.getGuild(install_scope.guild_id)) {
        return null;
      } else {
        const guild_id = install_scope.guild_id;
        let tmp6 = null;
        if (null != guild_id) {
          const getMutualGuilds = UserProfileStore.getMutualGuilds;
          const application = ApplicationStore.getApplication(install_scope.application_id);
          let id;
          if (application != null) {
            const bot = application.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          if (id == null) {
            id = install_scope.application_id;
          }
          const mutualGuilds = getMutualGuilds(id);
          let someResult = null;
          if (null != mutualGuilds) {
            someResult = mutualGuilds.some((guild) => guild.guild.id === guild_id);
          }
          tmp6 = someResult;
        }
        let str2 = "in_server";
        if (true !== tmp6) {
          const application_id = install_scope.application_id;
          const arr2 = GuildChannelStore.getChannels(install_scope.guild_id)[closure_6];
          const mapped = arr2.map(f110170);
          str2 = "in_server";
          if (mapped.filter((item) => {
            obj = ConjureUtils;
            return obj.conjureChannelAppId(item) === application_id;
          }).length <= 0) {
            const supported_surfaces = install_scope.supported_surfaces;
            let num;
            if (supported_surfaces != null) {
              num = supported_surfaces.length;
            }
            if (num == null) {
              num = 0;
            }
            let tmp7 = null;
            if (num > 0) {
              const obj2 = application_id(6832);
              if (obj2.projectUsesAppChannels(install_scope)) {
                tmp7 = "not_in_server";
              } else {
                tmp7 = null;
              }
            }
            str2 = tmp7;
          }
        }
        return str2;
      }
    }
  }
  return null;
}
