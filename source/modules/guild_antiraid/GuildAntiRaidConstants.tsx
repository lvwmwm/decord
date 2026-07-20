// Module ID: 7692
// Function ID: 61363
// Name: GUILD_REPORT_RAID_MOBILE_KEY
// Dependencies: []
// Exports: getTimeframes

// Module 7692 (GUILD_REPORT_RAID_MOBILE_KEY)
const Permissions = require(dependencyMap[0]).Permissions;
const importAllResult = importAll(dependencyMap[2]);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidConstants.tsx");

export const GUILD_REPORT_RAID_MOBILE_KEY = "guild_report_raid_mobile";
export const NAGBAR_DISPLAY_MAX_HOURS = 2;
export const DEFAULT_LOCKDOWN_DURATION = 2;
export const getTimeframes = () => {
  let obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.label = intl.string(require(dependencyMap[1]).t.GA/d4I);
  const items = [obj, , , , , ];
  obj = { filters: "log", isSunsetRule: null };
  const intl2 = require(dependencyMap[1]).intl;
  obj.label = intl2.string(require(dependencyMap[1]).t.+rHFej);
  items[1] = obj;
  obj = { filters: null, isSunsetRule: null };
  const intl3 = require(dependencyMap[1]).intl;
  obj.label = intl3.string(require(dependencyMap[1]).t.5CNt/M);
  items[2] = obj;
  const obj1 = {};
  const intl4 = require(dependencyMap[1]).intl;
  obj1.label = intl4.string(require(dependencyMap[1]).t.oQ4PNE);
  items[3] = obj1;
  const obj2 = { filters: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006897728971497669, isSunsetRule: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000317864906617062 };
  const intl5 = require(dependencyMap[1]).intl;
  obj2.label = intl5.string(require(dependencyMap[1]).t.LOQ0j6);
  items[4] = obj2;
  const obj3 = {};
  const intl6 = require(dependencyMap[1]).intl;
  obj3.label = intl6.string(require(dependencyMap[1]).t.W0+LsV);
  items[5] = obj3;
  return items;
};
export const IncidentAlertModeratorPermissions = importAll(dependencyMap[2]).combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
