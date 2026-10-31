// Module ID: 18349
// Function ID: 18350
// Name: getGuildsBarGuildMenuItems
// Dependencies: [5, 4885, 1072, 7249, 1113, 15784, 1994, 9208, 7288, 7561, 15730, 2]
// Exports: default

// Module 18349 (getGuildsBarGuildMenuItems)
import Constants from "Constants" /* 1072 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7288 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 15730 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, paths;

const AnalyticsSections = Constants.AnalyticsSections;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildMenuItems.tsx");

export default function getGuildsBarGuildMenuItems(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  _require = arg0;
  let obj = {
    IconComponent: require("EnvelopeIcon").EnvelopeIcon,
    label: intl.string(require("intl").t.e6RscS),
    action() {
      return (async (arg0, value) => {
        if (paths === 2) {
          paths = 3;
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
            paths = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                paths = 3;
                throw value;
              } else if (arg0 === 2) {
                paths = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                paths = 1;
                const obj4 = { value: tmp3(paths[6])(paths[5], paths.paths), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              paths = 3;
              throw value;
            } else if (arg0 === 2) {
              paths = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const items = [closure_128_0];
              value.default(items, constants.GUILD_LIST);
              paths = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp10) {
            paths = 3;
            throw tmp10;
          }
        }
      })();
    }
  };
  intl = require("intl").intl;
  let items = [obj, , ];
  let obj2 = {
    IconComponent: require("BellIcon").BellIcon,
    label: intl2.string(require("intl").t.HcoRu0),
    action() {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      obj.open(closure_0);
    }
  };
  intl2 = require("intl").intl;
  items[1] = obj2;
  let obj3 = {
    IconComponent: require("SettingsIcon").SettingsIcon,
    label: intl3.string(require("intl").t.PdRCRg),
    action() {
      const guild = GuildStore.getGuild(closure_0);
      if (null != guild) {
        openGuildActionSheetDefault(guild);
      }
    }
  };
  intl3 = require("intl").intl;
  items[2] = obj3;
  return items;
};
