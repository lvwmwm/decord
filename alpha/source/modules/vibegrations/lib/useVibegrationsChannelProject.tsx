// Module ID: 10736
// Function ID: 10737
// Name: useVibegrationsChannelProject
// Dependencies: [19, 2112, 2074, 4509, 8699, 1085, 558, 576, 6746, 504, 8700, 11, 6747, 2]

// Module 10736 (useVibegrationsChannelProject)
import Constants from "Constants" /* 1085 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8699 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsProjectStore = VibegrationsProjectStore2;
let _require, guild_id;

const isProjectOwner = VibegrationsProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let closure_0;
  let stateFromStoresArray;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp8;
  let tmp = _require;
  const tmp2 = guild_id;
  let obj = require("react");
  const cResult = obj.c(27);
  if (cResult[0] !== guild_id) {
    const tmpResult = tmp(tmp2[8]);
    let result = tmpResult.vibegrationsChannelAppId(guild_id);
    cResult[0] = guild_id;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  const tmp6 = null != tmp4;
  let closure_1 = tmp6;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, ];
    let tmp10 = PermissionStore;
    items[1] = PermissionStore;
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guild_id) {
    const fn = function b() {
      let guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      return canResult;
    };
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(tmp2[9]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    class G {
      constructor() {
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
      }
    }
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = G;
    cResult[9] = items3;
    tmp17 = items3;
    tmp16 = G;
  } else {
    class G {
      constructor() {
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
      }
    }
    tmp17 = cResult[9];
  }
  const tmpResult4 = tmp(tmp2[9]);
  stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp14, tmp16, tmp17);
  if (cResult[10] === tmp4) {
    class G {
      constructor() {
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
      }
    }
  }
  class E {
    constructor() {
      const tmp = closure_1 && null != closure_0;
      if (tmp) {
        const listProjects = VibegrationsActionCreators.listProjects;
        VibegrationsActionCreators;
        listProjects(guild_id);
      }
    }
  }
  cResult[10] = tmp4;
  cResult[11] = guild_id;
  cResult[12] = tmp6;
  cResult[13] = E;
}) : ((guild_id) => {
  let require;
  let stateFromStoresArray;
  let tmp = require;
  const tmp2 = guild_id;
  let obj = require("VibegrationsUtils");
  const result = obj.vibegrationsChannelAppId(guild_id);
  require = result;
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
  const tmpResult = tmp(tmp2[9]);
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
  const tmpResult3 = tmp(tmp2[9]);
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
  const items4 = [tmp4, result, guild_id, stateFromStores, stateFromStoresArray];
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
  const tmpResult4 = tmp(tmp2[9]);
  return tmpResult4.useStateFromStores(items5, () => {
    let result1;
    if (null == result1) {
      return null;
    } else {
      const require = VibegrationsProjectStore.findProjectByApplicationId(tmp);
      if (null != require) {
        if (!isProjectOwner(require)) {
          result1 = null;
          if (null != guild_id) {
            const obj = closure_1(guild_id[11]);
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
});
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelProject.tsx");

export default tmp2;
