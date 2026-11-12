// Module ID: 13090
// Function ID: 13091
// Name: useConjureShareToServer
// Dependencies: [5, 32, 19, 5175, 6954, 7313, 1072, 504, 13091, 1113, 4079, 13092, 7265, 6955, 13067, 7320, 2]
// Exports: default

// Module 13090 (useConjureShareToServer)
import Constants from "Constants" /* 1072 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6954 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 7320 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore_mod from "PermissionStore" /* 5175 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7313 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5;

function refreshUntilBotJoins(arg0, arg1) {
  const f105460 = () => {
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
        const timerId = setTimeout(f105460, 1500);
      }
    }
  };
  let closure_0 = arg0;
  let c1 = 6;
  let timerId = setTimeout(f105460, 1500);
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
        } else if (!closure_130_13(closure_0)) {
          const _Date = Date;
        }
        c4 = 3;
        const obj5 = { value: closure_130_13(closure_0), done: true };
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
let _slicedToArray = _slicedToArray_mod;
let PermissionStore = PermissionStore_mod;
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  let closure_4;
  let conjureEligibleGuilds;
  let error;
  let guild;
  let tmp13;
  let tmp15;
  _require = arg0;
  let closure_1 = arg2;
  let tmp = _require;
  const tmp2 = conjureEligibleGuilds;
  obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("get initialized");
  const items2 = [ConjureProjectStore];
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
  conjureEligibleGuilds = obj3.useConjureEligibleGuilds("ConjureShareToServer");
  let available = null != stateFromStores;
  if (available) {
    let str = "user";
    available = "user" === stateFromStores.install_scope;
  }
  if (available) {
    available = isProjectOwner(stateFromStores);
  }
  const items4 = [PermissionStore];
  const items5 = [conjureEligibleGuilds];
  const tmpResult = tmp(tmp2[7]);
  const guilds = tmpResult.useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((item) => closure_1_6.can(constants.MANAGE_GUILD, item)), items5);
  let obj5 = guild;
  const tmp8 = _slicedToArray;
  const tmp9 = _slicedToArray(guild.useState(null), 2);
  _slicedToArray = tmp9[1];
  const items6 = [tmp9[0], , ];
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
  [tmp13, PermissionStore] = tmp8(obj5.useState(false), 2);
  tmp8(obj5.useState(false), 2);
  [tmp15, ConjureProjectStore] = tmp8(obj5.useState(null), 2);
  tmp8(obj5.useState(null), 2);
  const pickGuild = obj5.useCallback((arg0) => {
    closure_4(arg0);
    ConjureProjectStore(null);
  }, []);
  const items7 = [guild, arg0];
  const share = obj5.useCallback(guilds(function*(arg0, value) {
    let closure_2;
    let obj19;
    let publishStatus;
    let tmp43;
    function waitForPublishStatus() {
      return closure_1_12(...arguments);
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
            PermissionStore = undefined;
            const intl = tmp43(conjureEligibleGuilds[9]).intl;
            const stringResult = intl.string(tmp(conjureEligibleGuilds[10]).qDjkvv);
            c0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              PermissionStore(true);
              ConjureProjectStore(null);
              const obj18 = tmp43(conjureEligibleGuilds[11]);
              tmp = obj18.nextConjurePreviewAppPublished(tmp43, 30000);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj19.shareConjureProject(tmp43, tmp70.id), done: false };
              obj19 = tmp43(conjureEligibleGuilds[12]);
              return obj6;
            }
          }
        } else {
          let project;
          if (1 === c4) {
            let tmp41;
            c3 = 0;
            project = conjureEligibleGuilds;
            tmp.cancel();
            message = undefined;
            if (project != null) {
              const body = project.body;
              if (body != null) {
                message = body.message;
              }
            }
            if (typeof message === "string") {
              tmp41 = message;
            } else {
              tmp41 = c0;
            }
            error = tmp41;
            tmp43 = closure_129_7;
            closure_129_7(error);
            closure_129_6(false);
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
              tmp43 = project;
              project2 = project.getProject(closure_129_0);
              if (null != project2) {
                const obj17 = tmp43(conjureEligibleGuilds[13]);
                if (!obj17.usesPreviewApp(project2)) {
                  tmp.cancel();
                  closure_129_6(false);
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
                  const obj10 = { shared: true, next: str2 };
                  c5 = 3;
                  const obj11 = { value: obj10, done: true };
                  return obj11;
                }
              }
              c4 = 3;
              c5 = 1;
              const obj12 = { value: tmp.published, done: false };
              return obj12;
            }
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else if (value) {
                c4 = 4;
                c5 = 1;
                const obj14 = { value: waitForPublishStatus(closure_129_0), done: false };
                return obj14;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            PermissionStore = value;
            closure_129_6(false);
            let str = "await_test_app";
            if (PermissionStore) {
              str = "publish";
            }
            const obj15 = { shared: true, next: str };
            c5 = 3;
            const obj16 = { value: obj15, done: true };
            return obj16;
          }
        }
      } catch (tmp49) {
        conjureEligibleGuilds = tmp49;
        if (0 === c3) {
          c5 = 3;
          throw tmp49;
        } else {
          c4 = 1;
        }
      }
    }
  }), items7);
  const items8 = [guild, arg0, arg2];
  const publish = obj5.useCallback(guilds(function*(arg0, value) {
    let c2;
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
              conjureEligibleGuilds = 1;
              const obj5 = { platform: tmp14.platform, guildId: tmp4.id };
              c1 = 2;
              const obj2 = c0(conjureEligibleGuilds[14]);
              c0 = 1;
              const obj6 = { value: obj2.runConjurePublishAction(closure_0, "share", obj5), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp3) {
          conjureEligibleGuilds = 0;
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          conjureEligibleGuilds = 0;
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          conjureEligibleGuilds = 0;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        if (0 === conjureEligibleGuilds) {
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
