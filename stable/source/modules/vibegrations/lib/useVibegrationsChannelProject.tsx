// Module ID: 10498
// Function ID: 10499
// Name: useVibegrationsChannelProject
// Dependencies: [19, 2111, 2073, 4472, 8492, 1086, 558, 576, 5371, 504, 8493, 11, 5372, 2]

// Module 10498 (useVibegrationsChannelProject)
import Constants from "Constants" /* 1086 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8492 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8493 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsProjectStore = VibegrationsProjectStore2;
let _require, importDefault, topic;

const isProjectOwner = VibegrationsProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((topic) => {
  let closure_0;
  let closure_1;
  let guild_id;
  let stateFromStoresArray;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp9;
  let tmp = _require;
  const tmp2 = guild_id;
  let obj = require("react");
  const cResult = obj.c(27);
  topic = undefined;
  if (topic != null) {
    topic = topic.topic;
  }
  if (cResult[0] !== topic) {
    const tmpResult = tmp(tmp2[8]);
    let result = tmpResult.vibegrationsAppIdFromTopic(topic);
    cResult[0] = topic;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  let tmp7 = null != tmp5;
  importDefault = tmp7;
  guild_id = undefined;
  if (topic != null) {
    guild_id = topic.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = GuildStore;
    let items = [GuildStore, ];
    items[1] = PermissionStore;
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guild_id) {
    const fn = function p() {
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
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = tmp(tmp2[9]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    const fn2 = function j() {
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
    };
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = fn2;
    cResult[9] = items3;
    tmp18 = items3;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  const tmpResult5 = tmp(tmp2[9]);
  stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp15, tmp17, tmp18);
  if (cResult[10] === tmp5) {
    if (cResult[11] === guild_id) {
      let tmp20;
      if (cResult[12] === tmp7) {
        tmp20 = cResult[13];
      }
      if (cResult[14] === tmp5) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[17] === guild_id) {
              let tmp21;
              let tmp24;
              if (cResult[18] === tmp7) {
                tmp21 = cResult[19];
              }
              const effect = stateFromStores.useEffect(tmp20, tmp21);
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [VibegrationsProjectStore];
                cResult[20] = items4;
                tmp24 = items4;
              } else {
                tmp24 = cResult[20];
              }
              if (cResult[21] === tmp5) {
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === stateFromStoresArray) {
                    let tmp26;
                    let tmp27;
                    if (cResult[24] === guild_id) {
                      tmp26 = cResult[25];
                      tmp27 = cResult[26];
                    }
                    const tmpResult6 = tmp(tmp2[9]);
                    return tmpResult6.useStateFromStores(tmp24, tmp26, tmp27);
                  }
                }
              }
              class B {
                constructor() {
                  let result1;
                  if (null == result1) {
                    return null;
                  } else {
                    const result = VibegrationsProjectStore.findProjectByApplicationId(tmp);
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
                          const obj2 = closure_0(guild_id[12]);
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
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      const listProjects = VibegrationsActionCreators.listProjects;
      VibegrationsActionCreators;
      listProjects(guild_id);
    }
  };
  cResult[10] = tmp5;
  cResult[11] = guild_id;
  cResult[12] = tmp7;
  cResult[13] = fn3;
  tmp20 = fn3;
}) : ((topic) => {
  let guild_id;
  let require;
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
