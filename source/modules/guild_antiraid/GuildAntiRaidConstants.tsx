// Module ID: 7792
// Function ID: 61720
// Name: GUILD_REPORT_RAID_MOBILE_KEY
// Dependencies: [482, 1212, 483, 2]
// Exports: getTimeframes

// Module 7792 (GUILD_REPORT_RAID_MOBILE_KEY)
import { Permissions } from "sum";
import importAllResult from "fromHexReverseArray";

const combineResult = require("fromHexReverseArray").combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = require("fromHexReverseArray").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let obj = { id: "1", value: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["GA/d4I"]);
  const items = [obj, , , , , ];
  obj = { id: "2", value: 2 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["+rHFej"]);
  items[1] = obj;
  obj = { id: "4", value: 4 };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t["5CNt/M"]);
  items[2] = obj;
  const obj1 = { id: "6", value: 6 };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t.oQ4PNE);
  items[3] = obj1;
  const obj2 = { id: "12", value: 12 };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl5.string(require(1212) /* getSystemLocale */.t.LOQ0j6);
  items[4] = obj2;
  const obj3 = { id: "24", value: 24 };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl6.string(require(1212) /* getSystemLocale */.t["W0+LsV"]);
  items[5] = obj3;
  return items;
};
export const IncidentAlertModeratorPermissions = combineResult;
