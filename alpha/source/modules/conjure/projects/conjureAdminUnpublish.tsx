// Module ID: 18535
// Function ID: 18536
// Name: conjureAdminUnpublish
// Dependencies: [5, 19, 2164, 6132, 4942, 4883, 4944, 1386, 6903, 7661, 504, 6103, 12459, 2]
// Exports: conjureAdminUnpublishTarget, loadConjureAdminUnpublishLookup, useConjureAdminUnpublishLookup, useConjureAdminUnpublishTarget

// Module 18535 (conjureAdminUnpublish)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6903 */;
import conjureAppInServer from "conjureAppInServer" /* 7661 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;
import GuildChannelStore from "GuildChannelStore" /* 4942 */;
import GuildStore from "GuildStore" /* 4883 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c1, c2;

const f115242 = () => {
  project = null;
  const tmp = readUnknownBotUserId;
  if (null != closure_0) {
    project = project.getProject(tmp2);
  }
  return tmp(project);
};
function readUnknownBotUserId(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let guild = null;
  if (null != guild_id) {
    guild = GuildStore.getGuild(guild_id.guild_id);
  }
  if (null != guild_id) {
    if (null != guild) {
      if (!isProjectOwner(guild_id)) {
        const supported_surfaces = guild_id.supported_surfaces;
        let num;
        if (supported_surfaces != null) {
          num = supported_surfaces.length;
        }
        if (num == null) {
          num = 0;
        }
        if (0 === num) {
          return null;
        } else {
          obj = conjureAppInServer;
          if ("in_server" === obj.readConjureAppServerPresence(guild_id)) {
            return null;
          } else {
            const tmp4Result = conjureAppInServer;
            const result = tmp4Result.conjureProductionBotUserId(guild_id);
            let tmp8 = null;
            if (null == UserProfileStore.getMutualGuilds(result)) {
              let tmp9 = null;
              const tmp4Result2 = conjureAppInServer;
              if (tmp4Result2.canRemoveConjureBot(guild, result)) {
                tmp9 = result;
              }
              tmp8 = tmp9;
            }
            return tmp8;
          }
        }
      }
    }
  }
  return null;
}
let obj = function _loadConjureAdminUnpublishLookup() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp6 = readUnknownBotUserId(closure_0);
            if (null != tmp6) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: loadBotServers(tmp6), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp9) {
        c1 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function loadBotServers() {
  return obj(...arguments);
}
obj = function _loadBotServers() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: obj2.fetchProfile(closure_0, { withMutualGuilds: true }), done: false };
            obj2 = require("UserActionCreators");
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c3 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp7) {
        if (0 === c3) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
let result = size.fileFinishedImporting("modules/conjure/projects/conjureAdminUnpublish.tsx");

export function conjureAdminUnpublishTarget(project, removeTarget) {
  let tmp = null;
  if (null != removeTarget) {
    tmp = null;
    if (removeTarget.canRemoveBot) {
      tmp = null;
      if (!isProjectOwner(project)) {
        tmp = removeTarget;
      }
    }
  }
  return tmp;
}
export function useConjureAdminUnpublishLookup(projectId) {
  let stateFromStores;
  _require = projectId;
  const items = [ConjureProjectStore, UserStore, GuildStore, GuildChannelStore, ApplicationStore, UserProfileStore, PermissionStore];
  const items1 = [projectId];
  obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f115242, items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      loadBotServers(tmp);
    }
  }, items2);
}
export function loadConjureAdminUnpublishLookup() {
  return obj(...arguments);
}
export function useConjureAdminUnpublishTarget(id) {
  let conjureRemoveTarget;
  _require = id;
  const items = [ConjureProjectStore, UserStore, GuildStore, GuildChannelStore, ApplicationStore, UserProfileStore, PermissionStore];
  const items1 = [id];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f115242, items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      loadBotServers(tmp);
    }
  }, items2);
  const obj2 = require("conjureRemoveApp");
  conjureRemoveTarget = obj2.useConjureRemoveTarget(id);
  const items3 = [ConjureProjectStore];
  const items4 = [id, conjureRemoveTarget];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items3, () => {
    project = null;
    if (null != id) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      let tmp6 = null;
      if (null != conjureRemoveTarget) {
        tmp6 = null;
        if (conjureRemoveTarget.canRemoveBot) {
          tmp6 = null;
          if (!isProjectOwner(project)) {
            tmp6 = tmp5;
          }
        }
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }, items4);
}
