// Module ID: 10463
// Function ID: 10464
// Name: useVibegrationsChannelProject
// Dependencies: [19, 2108, 2067, 4469, 8495, 1074, 5370, 504, 8496, 11, 5371, 2]
// Exports: default

// Module 10463 (useVibegrationsChannelProject)
import Constants from "Constants" /* 1074 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8495 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8496 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const VibegrationsProjectStore = VibegrationsProjectStore2;

const isProjectOwner = VibegrationsProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelProject.tsx");

export default function useVibegrationsChannelProject(topic) {
  let guild_id;
  let stateFromStoresArray;
  let tmp = require;
  const tmp2 = guild_id;
  topic = undefined;
  const vibegrationsAppIdFromTopic = require("VibegrationsUtils").vibegrationsAppIdFromTopic;
  const tmp3 = require("VibegrationsUtils");
  if (topic != null) {
    topic = topic.topic;
  }
  const result = vibegrationsAppIdFromTopic(topic);
  require = result;
  const tmp6 = null != result;
  let closure_1 = tmp6;
  guild_id = undefined;
  if (topic != null) {
    guild_id = topic.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let items = [GuildStore, PermissionStore];
  const items1 = [guild_id];
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    let guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items1);
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  const tmpResult3 = tmp(tmp2[7]);
  stateFromStoresArray = tmpResult3.useStateFromStoresArray(items2, () => {
    let items;
    if (null != guild_id) {
      const selfMember = GuildMemberStore.getSelfMember(tmp);
      let roles;
      if (selfMember != null) {
        roles = selfMember.roles;
      }
      if (roles == null) {
        roles = [];
      }
      items = roles;
    } else {
      items = [];
    }
    return items;
  }, items3);
  const items4 = [tmp6, result, guild_id, stateFromStores, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    const tmp = closure_1 && null != require;
    if (tmp) {
      const listProjects = VibegrationsActionCreators.listProjects;
      VibegrationsActionCreators;
      listProjects(guild_id);
    }
  }, items4);
  const items5 = [VibegrationsProjectStore];
  const items6 = [result, stateFromStores, stateFromStoresArray, guild_id];
  const tmpResult4 = tmp(tmp2[7]);
  return tmpResult4.useStateFromStores(items5, () => {
    let result1;
    if (null == result1) {
      return null;
    } else {
      require = VibegrationsProjectStore.findProjectByApplicationId(tmp);
      if (null != require) {
        if (!isProjectOwner(require)) {
          result1 = null;
          if (null != guild_id) {
            const obj = closure_1(guild_id[9]);
            result1 = obj.castGuildIdAsEveryoneGuildRoleId(tmp2);
          }
          let prop = require.collaborator_role_ids;
          if (prop == null) {
            prop = [];
          }
          let tmp7 = null;
          if (require.guild_id === guild_id) {
            tmp7 = null;
            const obj2 = require("VibegrationsTypes");
            if (obj2.isProjectPublic(require)) {
              const tmp10 = stateFromStores;
              if (tmp10) {
                tmp7 = require;
              } else {
                tmp7 = null;
              }
            }
          }
          return tmp7;
        }
      }
      return require;
    }
  }, items6);
};
