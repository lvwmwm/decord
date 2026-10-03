// Module ID: 16223
// Function ID: 16224
// Name: GuildsBarFolderMenuItems
// Dependencies: [5, 5616, 1085, 4817, 1126, 13771, 1987, 6883, 16224, 2]
// Exports: getGuildFolderMenuItems

// Module 16223 (GuildsBarFolderMenuItems)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, guildFolderById;

const AnalyticsSections = Constants.AnalyticsSections;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(id) {
  let intl;
  let intl2;
  _require = id;
  let obj = {
    IconComponent: require("EnvelopeIcon").EnvelopeIcon,
    label: intl.string(require("intl").t.e6RscS),
    action() {
      return (async (arg0, value) => {
        let closure_0;
        if (guildFolderById === 2) {
          guildFolderById = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            guildFolderById = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                guildFolderById = 3;
                throw value;
              } else if (arg0 === 2) {
                guildFolderById = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const paths = tmp2;
                guildFolderById = undefined;
                guildFolderById = guildFolderById.getGuildFolderById(id);
                if (null != guildFolderById) {
                  c2 = 1;
                  guildFolderById = 1;
                  const obj4 = { value: tmp(paths[6])(paths[5], paths.paths), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              guildFolderById = 3;
              throw value;
            } else if (arg0 === 2) {
              guildFolderById = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              value.default(guildFolderById.guildIds, constants.GUILD_LIST);
            }
            guildFolderById = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } catch (tmp13) {
            guildFolderById = 3;
            throw tmp13;
          }
        }
      })();
    }
  };
  intl = require("intl").intl;
  const items = [obj, ];
  let obj2 = {
    IconComponent: require("SettingsIcon").SettingsIcon,
    label: intl2.string(require("intl").t.Dx7im5),
    action() {
      return (async (arg0, value) => {
        let closure_0;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === paths) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                paths = 1;
                c2 = 1;
                const obj4 = { value: tmp3(paths[6])(paths[8], paths.paths), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const result = value.showGuildsBarFolderModal(closure_128_0);
              c2 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp9) {
            c2 = 3;
            throw tmp9;
          }
        }
      })();
    }
  };
  intl2 = require("intl").intl;
  items[1] = obj2;
  return items;
};
