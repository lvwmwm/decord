// Module ID: 12288
// Function ID: 12289
// Name: useConjureShareToServer
// Dependencies: [5, 32, 19, 5072, 6899, 10987, 1072, 6900, 504, 12289, 1113, 4026, 11074, 10996, 12260, 10994, 2]
// Exports: default

// Module 12288 (useConjureShareToServer)
import Constants from "Constants" /* 1072 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6899 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6900 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10994 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5072 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10987 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5, importDefault;

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
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
let items = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  let closure_1;
  let closure_4;
  let conjureEligibleGuilds;
  let error;
  let guild;
  let tmp23;
  let tmp25;
  _require = arg0;
  importDefault = arg2;
  const tmp2 = _require;
  const tmp3 = conjureEligibleGuilds;
  obj = require("get initialized");
  items = [ConjureProjectStore];
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
    available = "user" === stateFromStores.install_scope;
  }
  if (available) {
    available = null == stateFromStores.install_scope_setup;
  }
  if (available) {
    const tmp8 = isProjectOwner;
    available = isProjectOwner(stateFromStores);
  }
  const items4 = [PermissionStore];
  const items5 = [conjureEligibleGuilds];
  const tmp2Result = tmp2(tmp3[8]);
  const guilds = tmp2Result.useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((item) => closure_1_6.can(constants.MANAGE_GUILD, item)), items5);
  let obj5 = guild;
  const tmp10 = _slicedToArray(guild.useState(null), 2);
  _slicedToArray = tmp10[1];
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
  let blockedReason = null;
  if (null != stateFromStores) {
    let supported_surfaces = stateFromStores.supported_surfaces;
    if (supported_surfaces == null) {
      supported_surfaces = [];
    }
    const items7 = [];
    const tmp14 = items7;
    const arraySpreadResult = HermesBuiltin.arraySpread(items7, supported_surfaces, 0);
    let prop = stateFromStores.preview_supported_surfaces;
    if (prop == null) {
      prop = [];
    }
    HermesBuiltin.arraySpread(items7, prop, arraySpreadResult);
    blockedReason = null;
    if (items7.some((item) => items.includes(item))) {
      let intl = tmp2(tmp3[10]).intl;
      blockedReason = intl.string(require("module_4026")["/Ow58q"]);
    }
  }
  [tmp23, PermissionStore] = _slicedToArray(obj5.useState(false), 2);
  _slicedToArray(obj5.useState(false), 2);
  [tmp25, ConjureProjectStore] = _slicedToArray(obj5.useState(null), 2);
  _slicedToArray(obj5.useState(null), 2);
  const pickGuild = obj5.useCallback((arg0) => {
    closure_4(arg0);
    ConjureProjectStore(null);
  }, []);
  const items8 = [guild, arg0];
  const share = obj5.useCallback(guilds(function*(arg0, value) {
    let closure_2;
    let tmp45Result2;
    function waitForPublishStatus() {
      return closure_1_12(...arguments);
    }
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let tmp;
        let message;
        let error;
        let testAppReady;
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
            testAppReady = undefined;
            const intl = tmp2(conjureEligibleGuilds[10]).intl;
            const stringResult = intl.string(tmp(conjureEligibleGuilds[11]).qDjkvv);
            c0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              PermissionStore(true);
              ConjureProjectStore(null);
              const tmp45Result = tmp2(conjureEligibleGuilds[12]);
              tmp = tmp45Result.nextConjurePreviewAppPublished(tmp2, 30000);
              c3 = 1;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: tmp45Result2.shareConjureProject(tmp2, tmp49.id), done: false };
              tmp45Result2 = tmp2(conjureEligibleGuilds[13]);
              return obj6;
            }
          }
        } else if (1 === c4) {
          let tmp24;
          c3 = 0;
          let body = conjureEligibleGuilds;
          tmp.cancel();
          message = undefined;
          if (body != null) {
            body = body.body;
            if (body != null) {
              message = body.message;
            }
          }
          if (typeof message === "string") {
            tmp24 = message;
          } else {
            tmp24 = c0;
          }
          error = tmp24;
          closure_129_7(error);
          closure_129_6(false);
          const obj7 = { shared: false, error };
          c5 = 3;
          const obj8 = { value: obj7, done: true };
          return obj8;
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else if (value) {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: waitForPublishStatus(closure_129_0), done: false };
              return obj10;
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              c3 = 0;
              c4 = 2;
              c5 = 1;
              const obj12 = { value: tmp.published, done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          testAppReady = value;
          closure_129_6(false);
          const obj13 = { shared: true, testAppReady };
          c5 = 3;
          const obj14 = { value: obj13, done: true };
          return obj14;
        }
      } catch (tmp38) {
        conjureEligibleGuilds = tmp38;
        if (0 === c3) {
          c5 = 3;
          throw tmp38;
        } else {
          c4 = 1;
        }
      }
    }
  }), items8);
  const items9 = [guild, arg0, arg2];
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
  }), items9);
  if (available) {
    available = stateFromStores1;
  }
  if (available) {
    available = guilds.length > 0;
  }
  return { available, guilds, guild, pickGuild, blockedReason, sharing, error, share, publish };
};
