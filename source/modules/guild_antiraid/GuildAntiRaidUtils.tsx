// Module ID: 7791
// Function ID: 61707
// Name: hasDetectedRaid
// Dependencies: [7792, 3712, 7793, 1212, 2]
// Exports: getDisabledInterventions, getEnabledInterventions, getIncidentAlertType, getSecurityActionDetailsString, hasDMsDisabled, hasDetectedActivity, hasDetectedDMRaid, hasInvitesDisabled, initialLockdownDurationHours, isUnderLockdown

// Module 7791 (hasDetectedRaid)
import GUILD_REPORT_RAID_MOBILE_KEY from "GUILD_REPORT_RAID_MOBILE_KEY";

let closure_3;
let closure_4;
let closure_5;
function hasDetectedRaid(raidDetectedAt) {
  let tmp = null != raidDetectedAt.raidDetectedAt;
  if (tmp) {
    const obj = importDefault(3712)(raidDetectedAt.raidDetectedAt);
    tmp = importDefault(3712)(raidDetectedAt.raidDetectedAt).add(closure_3, "hours") > importDefault(3712)();
    const addResult = importDefault(3712)(raidDetectedAt.raidDetectedAt).add(closure_3, "hours");
  }
  return tmp;
}
({ NAGBAR_DISPLAY_MAX_HOURS: closure_3, DEFAULT_LOCKDOWN_DURATION: closure_4, getTimeframes: closure_5 } = GUILD_REPORT_RAID_MOBILE_KEY);
let obj = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
const result = require("GuildIncidentActionSources").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidUtils.tsx");

export const DATE_CONFIG = obj;
export const hasDetectedActivity = function hasDetectedActivity(stateFromStores1) {
  let tmp = null != stateFromStores1.dmSpamDetectedAt;
  if (tmp) {
    const obj = importDefault(3712)(stateFromStores1.dmSpamDetectedAt);
    tmp = importDefault(3712)(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours") > importDefault(3712)();
    const addResult = importDefault(3712)(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours");
  }
  if (!tmp) {
    let tmp6 = null != stateFromStores1.raidDetectedAt;
    if (tmp6) {
      const obj2 = importDefault(3712)(stateFromStores1.raidDetectedAt);
      tmp6 = importDefault(3712)(stateFromStores1.raidDetectedAt).add(closure_3, "hours") > importDefault(3712)();
      const addResult1 = importDefault(3712)(stateFromStores1.raidDetectedAt).add(closure_3, "hours");
    }
    tmp = tmp6;
  }
  return tmp;
};
export { hasDetectedRaid };
export const hasDetectedDMRaid = function hasDetectedDMRaid(dmSpamDetectedAt) {
  let tmp = null != dmSpamDetectedAt.dmSpamDetectedAt;
  if (tmp) {
    const obj = importDefault(3712)(dmSpamDetectedAt.dmSpamDetectedAt);
    tmp = importDefault(3712)(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours") > importDefault(3712)();
    const addResult = importDefault(3712)(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours");
  }
  return tmp;
};
export const getIncidentAlertType = function getIncidentAlertType(guildIncident) {
  if (null != guildIncident) {
    const GuildIncidentAlertTypes = require(7793) /* GuildIncidentActionSources */.GuildIncidentAlertTypes;
    const tmp2 = hasDetectedRaid(guildIncident);
  }
};
export const getEnabledInterventions = function getEnabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (pauseInvites) {
    items.push(require(7793) /* GuildIncidentActionSources */.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (pauseDms) {
    items.push(require(7793) /* GuildIncidentActionSources */.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const getDisabledInterventions = function getDisabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (!pauseInvites) {
    items.push(require(7793) /* GuildIncidentActionSources */.GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (!pauseDms) {
    items.push(require(7793) /* GuildIncidentActionSources */.GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const isUnderLockdown = function isUnderLockdown(guildIncident) {
  let tmp = null != guildIncident.dmsDisabledUntil;
  if (tmp) {
    const _Date = Date;
    const date = new Date(guildIncident.dmsDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date > date1;
  }
  if (!tmp) {
    let tmp11 = null != guildIncident.invitesDisabledUntil;
    if (tmp11) {
      const _Date3 = Date;
      const date2 = new Date(guildIncident.invitesDisabledUntil);
      const _Date4 = Date;
      const date3 = new Date();
      tmp11 = date2 > date3;
    }
    tmp = tmp11;
  }
  return tmp;
};
export const hasDMsDisabled = function hasDMsDisabled(stateFromStores) {
  let dmsDisabledUntil;
  if (null != stateFromStores) {
    dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
  }
  let tmp2 = null != dmsDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(stateFromStores.dmsDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
export const hasInvitesDisabled = function hasInvitesDisabled(stateFromStores) {
  let invitesDisabledUntil;
  if (null != stateFromStores) {
    invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
  }
  let tmp2 = null != invitesDisabledUntil;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(stateFromStores.invitesDisabledUntil);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date > date1;
  }
  return tmp2;
};
export const initialLockdownDurationHours = function initialLockdownDurationHours(stateFromStores) {
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.lockdownDurationHours;
  }
  if (null == prop) {
    prop = closure_4;
  } else {
    const obj = callback();
  }
  return prop;
};
export const getSecurityActionDetailsString = function getSecurityActionDetailsString(dmsDisabledUntil, guildName) {
  let invitesDisabledUntil = dmsDisabledUntil.dmsDisabledUntil;
  if (null == invitesDisabledUntil) {
    invitesDisabledUntil = dmsDisabledUntil.invitesDisabledUntil;
  }
  if (null == invitesDisabledUntil) {
    return "";
  } else {
    let tmp = tmp26;
    if (null != dmsDisabledUntil.dmsDisabledUntil) {
      tmp = tmp27;
    }
    if (tmp === true) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { guildName };
      const _Date3 = Date;
      const date = new Date(invitesDisabledUntil);
      obj.time = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, obj);
      return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.hCZitf, obj);
    } else if (tmp26 === true) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { guildName };
      const _Date2 = Date;
      const date1 = new Date(invitesDisabledUntil);
      obj.time = date1.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, obj);
      return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["HNKxf+"], obj);
    } else if (tmp27 === true) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { guildName };
      const _Date = Date;
      const date2 = new Date(invitesDisabledUntil);
      obj.time = date2.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, obj);
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.M3iSyL, obj);
    } else {
      return "";
    }
  }
};
