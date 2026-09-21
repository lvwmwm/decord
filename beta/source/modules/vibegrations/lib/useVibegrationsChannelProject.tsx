// Module ID: 11300
// Function ID: 11301
// Name: useVibegrationsChannelProject
// Dependencies: [19, 2109, 2067, 4399, 9307, 1078, 558, 568, 5276, 504, 9308, 11, 5277, 2]

// Module 11300 (useVibegrationsChannelProject)
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 9308 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9307 */;

require = fn;
const isProjectOwner = fn(9307).isProjectOwner;
const Permissions = fn(1078).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChannelProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((topic) => {
  const cResult = require("c").c(27);
  topic = undefined;
  if (topic != null) {
    topic = topic.topic;
  }
  if (cResult[0] !== topic) {
    let result = tmp(tmp2[8]).vibegrationsAppIdFromTopic(topic);
    cResult[0] = topic;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = tmp(tmp2[8]);
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  importDefault = tmp7;
  guild_id = undefined;
  if (topic != null) {
    guild_id = topic.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, PermissionStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guild_id) {
    const fn = function p() {
      guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    };
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    const fn2 = function j() {
      if (null != guild_id) {
        const selfMember = GuildMemberStore.getSelfMember(tmp);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        let items = roles;
      } else {
        items = [];
      }
      return items;
    };
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = fn2;
    cResult[9] = items3;
    let tmp18 = items3;
    let tmp17 = fn2;
  } else {
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  const tmpResult4 = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp15, tmp17, tmp18);
  if (cResult[10] === tmp5) {
    if (cResult[11] === guild_id) {
      if (cResult[12] === tmp7) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[17] === guild_id) {
              if (cResult[18] === tmp7) {
                let tmp21 = cResult[19];
              }
              const effect = stateFromStores.useEffect(tmp20, tmp21);
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [VibegrationsProjectStore];
                cResult[20] = items4;
                let tmp24 = items4;
              } else {
                tmp24 = cResult[20];
              }
              if (cResult[21] === tmp5) {
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === stateFromStoresArray) {
                    if (cResult[24] === guild_id) {
                      let tmp26 = cResult[25];
                      let tmp27 = cResult[26];
                    }
                    return tmp(tmp2[9]).useStateFromStores(tmp24, tmp26, tmp27);
                  }
                }
              }
              class B {
                constructor() {
                  if (null == closure_0) {
                    return null;
                  } else {
                    tmp11 = closure_1_7;
                    result = closure_1_7.findProjectByApplicationId(tmp);
                    if (null != result) {
                      tmp13 = closure_1_8;
                      if (!closure_1_8(result)) {
                        tmp2 = c2;
                        result1 = null;
                        if (null != c2) {
                          tmp4 = closure_1;
                          tmp5 = c2;
                          obj = closure_1(c2[11]);
                          result1 = obj.castGuildIdAsEveryoneGuildRoleId(tmp2);
                        }
                        closure_0 = result1;
                        prop = result.collaborator_role_ids;
                        if (prop == null) {
                          prop = [];
                        }
                        tmp7 = null;
                        if (result.guild_id === tmp2) {
                          tmp8 = closure_0;
                          tmp9 = c2;
                          obj2 = closure_0(c2[12]);
                          tmp7 = null;
                          if (obj2.isProjectPublic(result)) {
                            tmp10 = closure_3;
                            if (closure_3) {
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
                }
              }
              const items5 = [tmp5, stateFromStores, stateFromStoresArray, guild_id];
              cResult[21] = tmp5;
              cResult[22] = stateFromStores;
              cResult[23] = stateFromStoresArray;
              cResult[24] = guild_id;
              cResult[25] = B;
              cResult[26] = items5;
              tmp27 = items5;
              tmp26 = B;
            }
          }
        }
      }
      const items6 = [tmp7, tmp5, guild_id, stateFromStores, ];
      cResult[14] = tmp5;
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStoresArray;
      cResult[17] = guild_id;
      cResult[18] = tmp7;
      cResult[19] = items6;
      tmp21 = items6;
    }
  }
  const fn3 = function h() {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
    if (tmp) {
      VibegrationsActionCreators.listProjects(guild_id);
    }
  };
  cResult[10] = tmp5;
  cResult[11] = guild_id;
  cResult[12] = null != tmp5;
  cResult[13] = fn3;
  tmp20 = fn3;
}) : ((topic) => {
  topic = undefined;
  if (topic != null) {
    topic = topic.topic;
  }
  let result = require("VibegrationsUtils").vibegrationsAppIdFromTopic(topic);
  require = result;
  closure_1 = tmp5;
  guild_id = undefined;
  if (topic != null) {
    guild_id = topic.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = require("VibegrationsUtils");
  let items = [GuildStore, PermissionStore];
  const items1 = [guild_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    if (null != guild_id) {
      const selfMember = GuildMemberStore.getSelfMember(tmp);
      let roles;
      if (selfMember != null) {
        roles = selfMember.roles;
      }
      if (roles == null) {
        roles = [];
      }
      let items = roles;
    } else {
      items = [];
    }
    return items;
  }, items3);
  const items4 = [null != result, result, guild_id, stateFromStores, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != result;
    }
    if (tmp) {
      VibegrationsActionCreators.listProjects(guild_id);
    }
  }, items4);
  const tmpResult3 = require("initialize");
  const items5 = [VibegrationsProjectStore];
  const items6 = [result, stateFromStores, stateFromStoresArray, guild_id];
  return require("initialize").useStateFromStores(items5, () => {
    if (null == result1) {
      return null;
    } else {
      result = VibegrationsProjectStore.findProjectByApplicationId(tmp);
      if (null != result) {
        if (!isProjectOwner(result)) {
          result1 = null;
          if (null != guild_id) {
            result1 = closure_1(guild_id[11]).castGuildIdAsEveryoneGuildRoleId(tmp2);
            const obj = closure_1(guild_id[11]);
          }
          let prop = result.collaborator_role_ids;
          if (prop == null) {
            prop = [];
          }
          let tmp7 = null;
          if (result.guild_id === guild_id) {
            tmp7 = null;
            if (obj2.isProjectPublic(result)) {
              if (stateFromStores) {
                tmp7 = result;
              } else {
                tmp7 = null;
              }
            }
            obj2 = result(guild_id[12]);
          }
          return tmp7;
        }
      }
      return result;
    }
  }, items6);
});
