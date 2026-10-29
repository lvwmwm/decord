// Module ID: 8440
// Function ID: 8441
// Name: GuildAntiRaidUtils
// Dependencies: [8441, 2047, 8442, 1125, 2]
// Exports: getDisabledInterventions, getEnabledInterventions, getIncidentAlertType, getSecurityActionDetailsString, hasDMsDisabled, hasDetectedActivity, hasDetectedDMRaid, hasDetectedRaid, hasInvitesDisabled, initialLockdownDurationHours, isUnderLockdown

// Module 8440 (GuildAntiRaidUtils)
import intl4 from "intl" /* 1125 */;
import _modDef2047 from "module_2047" /* 2047 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8442 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8441 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ NAGBAR_DISPLAY_MAX_HOURS: c3, DEFAULT_LOCKDOWN_DURATION: closure_4, getTimeframes: hasOwnProperty } = GuildAntiRaidConstants);
let date = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidUtils.tsx");

export const DATE_CONFIG = date;
export function hasDetectedActivity(incidentsData) {
  let tmp = null != incidentsData.dmSpamDetectedAt;
  if (tmp) {
    const obj = _modDef2047(incidentsData.dmSpamDetectedAt);
    const addResult = obj.add(_false, "hours");
    tmp = addResult > _modDef2047();
  }
  if (!tmp) {
    let tmp6 = null != incidentsData.raidDetectedAt;
    if (tmp6) {
      const obj2 = _modDef2047(incidentsData.raidDetectedAt);
      const addResult1 = obj2.add(_false, "hours");
      tmp6 = addResult1 > _modDef2047();
    }
    tmp = tmp6;
  }
  return tmp;
}
export function hasDetectedRaid(raidDetectedAt) {
  let tmp = null != raidDetectedAt.raidDetectedAt;
  if (tmp) {
    const obj = _modDef2047(raidDetectedAt.raidDetectedAt);
    const addResult = obj.add(_false, "hours");
    tmp = addResult > _modDef2047();
  }
  return tmp;
}
export function hasDetectedDMRaid(dmSpamDetectedAt) {
  let tmp = null != dmSpamDetectedAt.dmSpamDetectedAt;
  if (tmp) {
    const obj = _modDef2047(dmSpamDetectedAt.dmSpamDetectedAt);
    const addResult = obj.add(_false, "hours");
    tmp = addResult > _modDef2047();
  }
  return tmp;
}
export function getIncidentAlertType(guildIncident) {
  let tmp;
  if (null != guildIncident) {
    let tmp2 = null != guildIncident.raidDetectedAt;
    if (tmp2) {
      const obj = _modDef2047(guildIncident.raidDetectedAt);
      const addResult = obj.add(_false, "hours");
      tmp2 = addResult > _modDef2047();
    }
    const GuildIncidentAlertTypes = GuildAntiRaidTypes.GuildIncidentAlertTypes;
    tmp = tmp2 ? GuildIncidentAlertTypes.JOIN_RAID : GuildIncidentAlertTypes.DM_RAID;
  }
  return tmp;
}
export function getEnabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  const tmp = pauseInvites;
  if (tmp) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  const tmp5 = pauseDms;
  if (tmp5) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
}
export function getDisabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  const tmp = pauseInvites;
  if (!tmp) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  const tmp5 = pauseDms;
  if (!tmp5) {
    items.push(GuildAntiRaidTypes.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
}
export function isUnderLockdown(incidentsData) {
  let tmp = null != incidentsData.dmsDisabledUntil;
  if (tmp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date(incidentsData.dmsDisabledUntil);
    tmp = date > new Date();
    const date1 = new Date();
  }
  if (!tmp) {
    let tmp7 = null != incidentsData.invitesDisabledUntil;
    if (tmp7) {
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      const date2 = new Date(incidentsData.invitesDisabledUntil);
      tmp7 = date2 > new Date();
      const date3 = new Date();
    }
    tmp = tmp7;
  }
  return tmp;
}
export function hasDMsDisabled(stateFromStores) {
  let dmsDisabledUntil;
  if (stateFromStores != null) {
    dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
  }
  let tmp2 = null != dmsDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date(stateFromStores.dmsDisabledUntil);
    tmp2 = date > new Date();
    const date1 = new Date();
  }
  return tmp2;
}
export function hasInvitesDisabled(stateFromStores) {
  let invitesDisabledUntil;
  if (stateFromStores != null) {
    invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
  }
  let tmp2 = null != invitesDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date(stateFromStores.invitesDisabledUntil);
    tmp2 = date > new Date();
    const date1 = new Date();
  }
  return tmp2;
}
export function initialLockdownDurationHours(stateFromStores) {
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.lockdownDurationHours;
  }
  if (null == prop) {
    prop = React3;
  } else {
    hasOwnProperty();
  }
  return prop;
}
export function getSecurityActionDetailsString(dmsDisabledUntil, guildName) {
  let date1;
  let date2;
  let invitesDisabledUntil = dmsDisabledUntil.dmsDisabledUntil;
  if (invitesDisabledUntil == null) {
    invitesDisabledUntil = dmsDisabledUntil.invitesDisabledUntil;
  }
  if (null == invitesDisabledUntil) {
    return "";
  } else {
    const tmp = null != dmsDisabledUntil.dmsDisabledUntil && null != dmsDisabledUntil.invitesDisabledUntil;
    if (tmp === true) {
      const intl3 = intl4.intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const obj2 = { guildName, time: date.toLocaleString(intl4.intl.currentLocale, date) };
      const hCZitf = intl4.t.hCZitf;
      date = new Date(invitesDisabledUntil);
      return formatToPlainString3(hCZitf, obj2);
    } else if (null != dmsDisabledUntil.dmsDisabledUntil === true) {
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const obj3 = { guildName, time: date1.toLocaleString(intl4.intl.currentLocale, date) };
      const prop = intl4.t["HNKxf+"];
      date1 = new Date(invitesDisabledUntil);
      return formatToPlainString2(prop, obj3);
    } else if (null != dmsDisabledUntil.invitesDisabledUntil === true) {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj = { guildName, time: date2.toLocaleString(intl4.intl.currentLocale, date) };
      const M3iSyL = intl4.t.M3iSyL;
      date2 = new Date(invitesDisabledUntil);
      return formatToPlainString(M3iSyL, obj);
    } else {
      return "";
    }
  }
}
