// Module ID: 17452
// Function ID: 17453
// Name: GuildTemplateSettingsUtils
// Dependencies: [5, 32, 19, 2045, 4469, 6877, 1074, 504, 6742, 4735, 2]
// Exports: isGuildTemplateNameValid, useCanViewAllChannels, useGuildTemplate

// Module 17452 (GuildTemplateSettingsUtils)
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6877 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_3;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateSettingsUtils.tsx");

export const isGuildTemplateNameValid = function isGuildTemplateNameValid(str) {
  const tmp = null != str && str.trim().length >= 2;
  return tmp;
};
export const useCanViewAllChannels = function useCanViewAllChannels(guildId) {
  _require = guildId;
  const items = [ChannelStore, PermissionStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(guildId));
    return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
  }, items1);
};
export const useGuildTemplate = function useGuildTemplate(guildId) {
  let closure_2;
  let loadError;
  let tmp2;
  _require = guildId;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, importDefault] = tmp;
  [loadError, dependencyMap] = react.useState(null);
  const items = [guildId];
  const effect = react.useEffect(() => {
    function fetchGuildTemplate(arg0) {
      return obj(...arguments);
    }
    let obj = function _fetchGuildTemplate() {
      obj = _asyncToGenerator(async function(arg0, value) {
        let obj2;
        let closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c4;
          try {
            let closure_1;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp4;
                tmp(null);
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj2.loadTemplatesForGuild(closure_0), done: false };
                obj2 = closure_2_1(closure_2_2[8]);
                return obj5;
              }
            } else {
              if (1 === c5) {
                c4 = 0;
                closure_1 = closure_3;
                const self = this;
                const self2 = this;
                const aPIError = new closure_2_0(closure_2_2[9]).APIError(closure_1);
                tmp(aPIError);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c4 = 0;
              }
              closure_1(closure_0);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp26) {
            closure_3 = tmp26;
            if (0 === c4) {
              c6 = 3;
              throw tmp26;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null != obj) {
      fetchGuildTemplate(tmp);
    }
  }, items);
  let obj = require("get initialized");
  const items1 = [GuildTemplateStore];
  const items2 = [guildId];
  let loading = null != guildId;
  const guildTemplate = obj.useStateFromStores(items1, () => {
    let forGuild;
    if (null != guildId) {
      forGuild = GuildTemplateStore.getForGuild(tmp);
    }
    return forGuild;
  }, items2);
  if (loading) {
    loading = tmp2 !== guildId;
  }
  return { loading, guildTemplate, loadError };
};
