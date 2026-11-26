// Module ID: 18825
// Function ID: 18826
// Name: useConjureServerChangeButtons
// Dependencies: [4914, 7659, 6934, 4245, 504, 1112, 7575, 18508, 2]
// Exports: default

// Module 18825 (useConjureServerChangeButtons)
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6934 */;
import GuildStore from "GuildStore" /* 4914 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap, guild, importDefault;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
let obj = { add_to_server: _modDef4245["7SD3ul"], remove_from_server: _modDef4245.ErhKil, change_server: _modDef4245["1E5/ay"] };
let obj2 = { add_to_server: _modDef4245["Wy+mGW"], remove_from_server: _modDef4245.vUWHZe, change_server: _modDef4245.MfnSEe };
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureServerChangeButtons.tsx");

export default function useConjureServerChangeButtons(projectId, action) {
  let formatToPlainStringResult;
  let intl2;
  let stringResult;
  _require = projectId;
  importDefault = action;
  obj = require("get initialized");
  let items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  obj2 = require("conjureServerProject");
  const result = obj2.conjureServerProjectGuildId(stateFromStores);
  dependencyMap = result;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let guild_id = result;
  if ("remove_from_server" === action.action) {
    guild_id = action.guild_id;
  }
  const items2 = [GuildStore];
  const items3 = [guild_id];
  const tmpResult = require("get initialized");
  let stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    guild = guild.getGuild(guild_id);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  }, items3);
  if (stateFromStores1 == null) {
    const intl = tmp(1112).intl;
    stateFromStores1 = intl.string(_modDef4245["6bhivN"]);
  }
  const tmpResult3 = require("useConjureProjectServerChange");
  let tmp8 = tmpResult3.useConjureProjectServerCandidates(projectId).length > 0;
  const items4 = [ConjureChatStore];
  const items5 = [projectId, action, result];
  const tmpResult4 = require("get initialized");
  let tmp9 = tmpResult4.useStateFromStores(items4, () => {
    function doneLineHolds(messages, action, result) {
      let closure_0 = action;
      const findIndexResult = messages.findIndex((serverChange) => serverChange.serverChange === action);
      if (-1 === findIndexResult) {
        return false;
      } else {
        const items = [];
        const substr = messages.slice(findIndexResult + 1);
        const iter = substr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (null != nextResult.serverChange) {
            iter.return();
            let flag = false;
            return false;
          } else {
            let projectEvent = tmp5.projectEvent;
            let type;
            if (projectEvent != null) {
              type = projectEvent.type;
            }
            if ("app_removed" === type) {
              let arr = items.push(tmp5.projectEvent);
            }
            continue;
          }
        }
        if ("add_to_server" === action.action) {
          return 0 === items.length;
        } else {
          if ("remove_from_server" === action.action) {
            if (0 === items.length) {
              return true;
            }
          }
          if (1 !== items.length) {
            return false;
          } else {
            let tmp12;
            const first = items[0];
            if ("change_server" === action.action) {
              let tmp14 = null != result && first.moved_to_guild_id === result;
              if (tmp14) {
                tmp14 = null == action.guild_id || first.guild_id === action.guild_id;
              }
              tmp12 = tmp14;
            } else {
              tmp12 = null == first.moved_to_guild_id && first.guild_id === action.guild_id;
            }
            return tmp12;
          }
        }
      }
    }
    return doneLineHolds(ConjureChatStore.getMessages(projectId), action, dependencyMap);
  }, items5) && null != stateFromStores;
  let tmp10 = "guild" === install_scope;
  if (tmp9) {
    let tmp11 = tmp10;
    if ("remove_from_server" === action.action) {
      tmp11 = !tmp10;
    }
    tmp9 = tmp11;
  }
  let tmp12 = "change_server" !== action.action || null == action.guild_id || result === action.guild_id;
  let tmp13 = null != stateFromStores;
  if (tmp13) {
    let tmp14 = tmp10;
    if ("add_to_server" === action.action) {
      tmp14 = !tmp10;
    }
    tmp13 = tmp14;
  }
  if (tmp13) {
    tmp13 = tmp12;
  }
  if (tmp13) {
    tmp13 = !tmp9;
  }
  const tmp15 = null != stateFromStores && isProjectOwner(stateFromStores);
  let tmp18 = null;
  if (tmp13) {
    tmp18 = null;
    if (tmp15) {
      let tmp19 = "remove_from_server" !== tmp17;
      const obj3 = { kind: action.action, label: intl2.string(obj[action.action]), disabled: tmp19 };
      intl2 = tmp(1112).intl;
      if (tmp19) {
        tmp19 = !tmp8;
      }
      tmp18 = obj3;
    }
  }
  if (tmp13) {
    if (!tmp15) {
      const intl3 = tmp(1112).intl;
      stringResult = intl3.string(_modDef4245.Kt9exT);
    }
    const obj4 = { project: stateFromStores, action: tmp18, done: formatToPlainStringResult, note: stringResult };
    formatToPlainStringResult = null;
    if (tmp9) {
      const intl5 = tmp(1112).intl;
      const obj5 = { server: stateFromStores1 };
      formatToPlainStringResult = intl5.formatToPlainString(obj2[action.action], obj5);
    }
    return obj4;
  }
  let disabled;
  if (tmp18 != null) {
    disabled = tmp18.disabled;
  }
  stringResult = null;
  if (true === disabled) {
    const intl4 = tmp(1112).intl;
    stringResult = intl4.string(_modDef4245.NXvmoQ);
  }
};
