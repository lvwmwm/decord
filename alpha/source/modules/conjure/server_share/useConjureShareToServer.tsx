// Module ID: 13189
// Function ID: 13190
// Name: useConjureShareToServer
// Dependencies: [5, 32, 19, 5177, 5238, 7017, 7377, 1072, 7018, 7260, 504, 13190, 1113, 4131, 13191, 7329, 13162, 7384, 2]
// Exports: canAddConjureProjectToAnotherServer, default

// Module 13189 (useConjureShareToServer)
import Constants from "Constants" /* 1072 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 7017 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import ConjureUtils from "ConjureUtils" /* 7260 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7329 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 7384 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5;

function refreshUntilBotJoins(arg0, arg1) {
  const f106671 = () => {
    const integrationStatus = ConjureProjectStore.getIntegrationStatus(closure_0);
    let prop;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (true !== prop) {
      obj = ConjureActionCreators;
      const result = obj.refreshConjureInstallState(tmp);
      if (1 < c1) {
        closure_0 = tmp;
        let closure_1 = tmp7 - 1;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(f106671, 1500);
      }
    }
  };
  let closure_0 = arg0;
  let c1 = 6;
  let timerId = setTimeout(f106671, 1500);
}
let obj = function _waitForPublishStatus() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp2;
            const _Date3 = Date;
            const sum = Date.now() + 5000;
            let c1 = sum;
            if (!isPublishable(closure_0)) {
              const _Date2 = Date;
              if (Date.now() < sum) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 250));
                c3 = 1;
                c4 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!closure_130_14(closure_0)) {
          const _Date = Date;
        }
        c4 = 3;
        const obj5 = { value: closure_130_14(closure_0), done: true };
        return obj5;
      } catch (tmp20) {
        c4 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
function isPublishable(id) {
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  let canPublishResult = null != publishState;
  if (canPublishResult) {
    obj = ConjurePublishTypes;
    canPublishResult = obj.canPublish(publishState);
  }
  return canPublishResult;
}
let isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  let _undefined;
  let _undefined2;
  let c10;
  let c9;
  let error;
  let tmp14;
  let tmp16;
  _require = arg0;
  let closure_1 = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let first;
  let guilds;
  let closure_7;
  let guild;
  isProjectOwner = undefined;
  c10 = undefined;
  let tmp = _require;
  const tmp2 = flag;
  obj = require("get initialized");
  const items = [guild];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("get initialized");
  const items2 = [guild];
  const items3 = [arg0];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const integrationStatus = ConjureProjectStore.getIntegrationStatus(closure_0);
    let preview_ready;
    if (integrationStatus != null) {
      preview_ready = integrationStatus.preview_ready;
    }
    return true === preview_ready;
  }, items3);
  let obj3 = require("useConjureProjects");
  const conjureEligibleGuilds = obj3.useConjureEligibleGuilds("ConjureShareToServer");
  let available = null != stateFromStores;
  if (available) {
    let str = "user";
    available = "user" === stateFromStores.install_scope;
  }
  if (available) {
    available = isProjectOwner(stateFromStores);
  }
  let obj4 = first;
  const tmp8 = conjureEligibleGuilds;
  first = conjureEligibleGuilds(first.useState(() => {
    const tmp = flag;
    if (tmp) {
      if (null != stateFromStores) {
        obj = ConjureProjectTypes;
        const result = obj.conjureProjectServerIds(tmp2);
      }
      return [];
    }
  }), 1)[0];
  const items4 = [closure_7];
  const items5 = [conjureEligibleGuilds, first];
  const tmpResult = tmp(tmp2[10]);
  guilds = tmpResult.useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((id) => {
    const canResult = closure_7.can(constants.MANAGE_GUILD, id) && !first.includes(id.id);
    return canResult;
  }), items5);
  const tmp10 = conjureEligibleGuilds(first.useState(null), 2);
  closure_7 = tmp10[1];
  const items6 = [tmp10[0], , ];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items6[1] = guild_id;
  items6[2] = arg1;
  const mapped = items6.map((item) => {
    closure_0 = item;
    return guilds.find((id) => id.id === closure_0);
  });
  guild = mapped.find((item) => null != item);
  if (guild == null) {
    guild = guilds[0];
  }
  if (guild == null) {
    guild = null;
  }
  [tmp14, c9] = tmp8(obj4.useState(false), 2);
  tmp8(obj4.useState(false), 2);
  [tmp16, c10] = tmp8(obj4.useState(null), 2);
  tmp8(obj4.useState(null), 2);
  const pickGuild = obj4.useCallback((arg0) => {
    closure_7(arg0);
    _undefined2(null);
  }, []);
  const items7 = [flag, guild, arg0];
  const share = obj4.useCallback(stateFromStores(function*(arg0, value) {
    let obj15;
    let publishStatus;
    let tmp46;
    function waitForPublishStatus() {
      return closure_1_13(...arguments);
    }
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let tmp;
        let message;
        let error;
        let project2;
        let closure_5;
        let closure_6;
        let c0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            message = undefined;
            error = undefined;
            project2 = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            const intl = tmp46(closure_2[12]).intl;
            const stringResult = intl.string(tmp(closure_2[13]).qDjkvv);
            c0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              _undefined(true);
              publishStatus(null);
              let result = null;
              if (false) {
                const obj14 = tmp46(closure_2[14]);
                result = obj14.nextConjurePreviewAppPublished(tmp46, 30000);
              }
              tmp = result;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj15.shareConjureProject(tmp46, tmp82.id), done: false };
              obj15 = tmp46(closure_2[15]);
              return obj6;
            }
          }
        } else if (1 === c4) {
          let tmp44;
          c3 = 0;
          let body = closure_2;
          const obj11 = tmp;
          if (tmp != null) {
            obj11.cancel();
          }
          message = undefined;
          if (body != null) {
            body = body.body;
            if (body != null) {
              message = body.message;
            }
          }
          if (typeof message === "string") {
            tmp44 = message;
          } else {
            tmp44 = c0;
          }
          error = tmp44;
          tmp46 = closure_129_10;
          closure_129_10(error);
          closure_129_9(false);
          const obj7 = { shared: false, error };
          c5 = 3;
          const obj8 = { value: obj7, done: true };
          return obj8;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c3 = 0;
            if (null == tmp) {
              closure_129_9(false);
              c5 = 3;
              const obj10 = { value: { shared: true, next: "added" }, done: true };
              return obj10;
            } else {
              tmp46 = project;
              project2 = project.getProject(closure_129_0);
              if (null != project2) {
                const obj21 = tmp46(closure_2[8]);
                if (!obj21.usesPreviewApp(project2)) {
                  tmp.cancel();
                  closure_129_9(false);
                  publishStatus = publishStatus.getPublishStatus(closure_129_0);
                  let publishState;
                  if (publishStatus != null) {
                    publishState = publishStatus.publishState;
                  }
                  closure_5 = "not_live" === publishState;
                  const tmp24 = closure_5;
                  if (!tmp24) {
                    refreshUntilBotJoins(closure_129_0, 6);
                  }
                  let str2 = "added";
                  if (closure_5) {
                    str2 = "publish";
                  }
                  const obj12 = { shared: true, next: str2 };
                  c5 = 3;
                  const obj13 = { value: obj12, done: true };
                  return obj13;
                }
              }
              c4 = 3;
              c5 = 1;
              const obj16 = { value: tmp.published, done: false };
              return obj16;
            }
          }
        } else {
          if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else if (value) {
              c4 = 4;
              c5 = 1;
              const obj18 = { value: waitForPublishStatus(closure_129_0), done: false };
              return obj18;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          closure_6 = value;
          closure_129_9(false);
          let str = "await_test_app";
          if (closure_6) {
            str = "publish";
          }
          const obj19 = { shared: true, next: str };
          c5 = 3;
          const obj20 = { value: obj19, done: true };
          return obj20;
        }
      } catch (tmp59) {
        closure_2 = tmp59;
        if (0 === c3) {
          c5 = 3;
          throw tmp59;
        } else {
          c4 = 1;
        }
      }
    }
  }), items7);
  const items8 = [guild, arg0, arg2];
  const publish = obj4.useCallback(stateFromStores(function*(arg0, value) {
    let v3;
    if (c0 === 2) {
      c0 = 3;
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
      let c2;
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != closure_1) {
            if (null != guild) {
              c2 = 1;
              const obj5 = { platform: tmp14.platform, guildId: tmp4.id };
              c1 = 2;
              const obj2 = c0(c2[16]);
              c0 = 1;
              const obj6 = { value: obj2.runConjurePublishAction(closure_0, "share", obj5), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp3) {
          c2 = 0;
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        if (0 === c2) {
          c0 = 3;
          throw tmp8;
        } else {
          c1 = 1;
        }
      }
    }
  }), items8);
  if (available) {
    available = stateFromStores1;
  }
  if (available) {
    available = guilds.length > 0;
  }
  return { available, guilds, guild, pickGuild, sharing, error, share, publish };
};
export function canAddConjureProjectToAnotherServer(project, removeTarget, ConjureChatMoreSheet) {
  _require = ConjureChatMoreSheet;
  const guild_ids = project.guild_ids;
  const tmp = isProjectOwner(project);
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = null == removeTarget;
  }
  if (!tmp2) {
    tmp2 = null == guild_ids;
  }
  let tmp6 = !tmp2;
  if (tmp6) {
    let someResult = guild_ids.length < require("ConjureProjectTypes").MAX_PROJECT_SERVERS;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(GuildStore.getGuilds());
      someResult = values.some((id) => {
        const hasItem = guild_ids.includes(id.id);
        let result = !hasItem;
        if (result) {
          obj = ConjureUtils;
          result = obj.canStartConjureProject(id, ConjureChatMoreSheet);
        }
        return result;
      });
    }
    tmp6 = someResult;
  }
  return tmp6;
}
