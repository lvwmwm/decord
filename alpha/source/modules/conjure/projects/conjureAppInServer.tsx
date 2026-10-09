// Module ID: 11367
// Function ID: 11368
// Name: conjureAppInServer
// Dependencies: [5437, 7314, 4707, 2086, 4709, 1085, 6939, 6940, 2]
// Exports: canRemoveConjureBot, conjurePreviewBotUserId, conjureProductionBotUserId, findConjureAppChannels, readConjureAppServerPresence, readConjureBotInGuild

// Module 11367 (conjureAppInServer)
import Constants from "Constants" /* 1085 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4707 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;

const f107980 = (channel) => channel.channel;
let closure_5 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/conjure/projects/conjureAppInServer.tsx");

export const conjureProductionBotUserId = function conjureProductionBotUserId(project) {
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
};
export const conjurePreviewBotUserId = function conjurePreviewBotUserId(project) {
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
};
export const readConjureBotInGuild = function readConjureBotInGuild(project, guild_id) {
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
};
export const canRemoveConjureBot = function canRemoveConjureBot(guild, id) {
  const canManageUserResult = null != id && PermissionStore.canManageUser(Permissions.KICK_MEMBERS, id, guild) || PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  return canManageUserResult;
};
export const findConjureAppChannels = function findConjureAppChannels(id, application_id) {
  let closure_0 = application_id;
  const arr = GuildChannelStore.getChannels(id)[closure_5];
  const mapped = arr.map(f107980);
  return mapped.filter((item) => {
    const obj = ConjureUtils;
    return obj.conjureChannelAppId(item) === application_id;
  });
};
export const readConjureAppServerPresence = function readConjureAppServerPresence(install_scope) {
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
          const arr2 = GuildChannelStore.getChannels(install_scope.guild_id)[closure_5];
          const mapped = arr2.map(f107980);
          str2 = "in_server";
          if (mapped.filter((item) => {
            const obj = ConjureUtils;
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
              const obj2 = application_id(6940);
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
};
