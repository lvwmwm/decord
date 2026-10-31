// Module ID: 14397
// Function ID: 14398
// Name: useConjureChannelProject
// Dependencies: [19, 4926, 4885, 4946, 6844, 1072, 7419, 504, 10875, 11, 6845, 2]
// Exports: default

// Module 14397 (useConjureChannelProject)
import Constants from "Constants" /* 1072 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6844 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default function useConjureChannelProject(guild_id) {
  let stateFromStoresArray;
  let tmp = require;
  const tmp2 = guild_id;
  let obj = require("ConjureUtils");
  const conjureChannelAppIdResult = obj.conjureChannelAppId(guild_id);
  require = conjureChannelAppIdResult;
  let closure_1 = tmp4;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
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
  const items4 = [tmp4, conjureChannelAppIdResult, guild_id, stateFromStores, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    const tmp = closure_1 && null != require;
    if (tmp) {
      const listProjects = ConjureActionCreators.listProjects;
      ConjureActionCreators;
      listProjects(guild_id);
    }
  }, items4);
  const items5 = [ConjureProjectStore];
  const items6 = [conjureChannelAppIdResult, stateFromStores, stateFromStoresArray, guild_id];
  const tmpResult4 = tmp(tmp2[7]);
  return tmpResult4.useStateFromStores(items5, () => {
    let result1;
    if (null == result1) {
      return null;
    } else {
      const result = ConjureProjectStore.findProjectByApplicationId(tmp);
      if (null != result) {
        if (!isProjectOwner(result)) {
          result1 = null;
          if (null != guild_id) {
            const obj = closure_1(guild_id[9]);
            result1 = obj.castGuildIdAsEveryoneGuildRoleId(tmp2);
          }
          let prop = result.collaborator_role_ids;
          if (prop == null) {
            prop = [];
          }
          let tmp7 = null;
          if (result.guild_id === guild_id) {
            tmp7 = null;
            const obj2 = require("ConjureProjectTypes");
            if (obj2.isProjectGuildCollaborationEnabled(result)) {
              const tmp10 = stateFromStores;
              if (tmp10) {
                tmp7 = result;
              } else {
                tmp7 = null;
              }
            }
          }
          return tmp7;
        }
      }
      return result;
    }
  }, items6);
};
