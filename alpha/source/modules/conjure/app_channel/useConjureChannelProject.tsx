// Module ID: 12653
// Function ID: 12654
// Name: useConjureChannelProject
// Dependencies: [19, 2124, 2086, 4709, 10617, 1085, 558, 576, 6939, 504, 11369, 11, 6940, 2]

// Module 12653 (useConjureChannelProject)
import Constants from "Constants" /* 1085 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 10617 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;
let _require, listProjectsResult, tmp3, tmp5;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureChannelProject(guild_id) {
  let closure_0;
  let stateFromStoresArray;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp8;
  let tmp = _require;
  const tmp2 = guild_id;
  let obj = require("react");
  const cResult = obj.c(27);
  if (cResult[0] !== guild_id) {
    const tmpResult = tmp(tmp2[8]);
    const conjureChannelAppIdResult = tmpResult.conjureChannelAppId(guild_id);
    cResult[0] = guild_id;
    cResult[1] = conjureChannelAppIdResult;
    tmp4 = conjureChannelAppIdResult;
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
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = S;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = S;
  } else {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(tmp2[9]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }
  if (cResult[7] !== guild_id) {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = tmp17;
    cResult[9] = items3;
    tmp16 = items3;
    tmp15 = tmp17;
  } else {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult4 = tmp(tmp2[9]);
  stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp14, tmp15, tmp16);
  if (cResult[10] === tmp4) {
    class S {
      constructor() {
        guild = null;
        if (null != c2) {
          tmp3 = closure_5;
          guild = closure_5.getGuild(tmp);
        }
        canResult = null != guild;
        if (canResult) {
          tmp5 = closure_6;
          tmp6 = Permissions;
          canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
  }
  class C {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = null;
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        tmp6 = closure_0(closure_2[10]);
        tmp7 = c2;
        tmp8 = null;
        listProjects = tmp6.listProjects;
        listProjectsResult = listProjects(tmp7);
      }
      return;
    }
  }
  cResult[10] = tmp4;
  cResult[11] = guild_id;
  cResult[12] = tmp6;
  cResult[13] = C;
}) : (function useConjureChannelProject(guild_id) {
  let require;
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
  const tmpResult4 = tmp(tmp2[9]);
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
            const obj = closure_1(guild_id[11]);
            result1 = obj.castGuildIdAsEveryoneGuildRoleId(tmp2);
          }
          let prop = result.collaborator_role_ids;
          if (prop == null) {
            prop = [];
          }
          let tmp7 = null;
          if (result.guild_id === guild_id) {
            tmp7 = null;
            const obj2 = require("ConjureTypes");
            if (obj2.isProjectPublic(result)) {
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
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default tmp2;
