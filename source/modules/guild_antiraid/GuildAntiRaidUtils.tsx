// Module ID: 7696
// Function ID: 61384
// Name: hasDetectedRaid
// Dependencies: []
// Exports: getDisabledInterventions, getEnabledInterventions, getIncidentAlertType, getSecurityActionDetailsString, hasDMsDisabled, hasDetectedActivity, hasDetectedDMRaid, hasInvitesDisabled, initialLockdownDurationHours, isUnderLockdown

// Module 7696 (hasDetectedRaid)
function hasDetectedRaid(raidDetectedAt) {
  let tmp = null != raidDetectedAt.raidDetectedAt;
  if (tmp) {
    const obj = importDefault(dependencyMap[1])(raidDetectedAt.raidDetectedAt);
    tmp = importDefault(dependencyMap[1])(raidDetectedAt.raidDetectedAt).add(closure_3, "hours") > importDefault(dependencyMap[1])();
    const addResult = importDefault(dependencyMap[1])(raidDetectedAt.raidDetectedAt).add(closure_3, "hours");
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
({ NAGBAR_DISPLAY_MAX_HOURS: closure_3, DEFAULT_LOCKDOWN_DURATION: closure_4, getTimeframes: closure_5 } = _module);
const obj = {};
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidUtils.tsx");

export const DATE_CONFIG = obj;
export const hasDetectedActivity = function hasDetectedActivity(stateFromStores1) {
  let tmp = null != stateFromStores1.dmSpamDetectedAt;
  if (tmp) {
    const obj = importDefault(dependencyMap[1])(stateFromStores1.dmSpamDetectedAt);
    tmp = importDefault(dependencyMap[1])(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours") > importDefault(dependencyMap[1])();
    const addResult = importDefault(dependencyMap[1])(stateFromStores1.dmSpamDetectedAt).add(closure_3, "hours");
  }
  if (!tmp) {
    let tmp6 = null != stateFromStores1.raidDetectedAt;
    if (tmp6) {
      const obj2 = importDefault(dependencyMap[1])(stateFromStores1.raidDetectedAt);
      tmp6 = importDefault(dependencyMap[1])(stateFromStores1.raidDetectedAt).add(closure_3, "hours") > importDefault(dependencyMap[1])();
      const addResult1 = importDefault(dependencyMap[1])(stateFromStores1.raidDetectedAt).add(closure_3, "hours");
    }
    tmp = tmp6;
  }
  return tmp;
};
export { hasDetectedRaid };
export const hasDetectedDMRaid = function hasDetectedDMRaid(dmSpamDetectedAt) {
  let tmp = null != dmSpamDetectedAt.dmSpamDetectedAt;
  if (tmp) {
    const obj = importDefault(dependencyMap[1])(dmSpamDetectedAt.dmSpamDetectedAt);
    tmp = importDefault(dependencyMap[1])(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours") > importDefault(dependencyMap[1])();
    const addResult = importDefault(dependencyMap[1])(dmSpamDetectedAt.dmSpamDetectedAt).add(closure_3, "hours");
  }
  return tmp;
};
export const getIncidentAlertType = function getIncidentAlertType(guildIncident) {
  if (null != guildIncident) {
    const GuildIncidentAlertTypes = require(dependencyMap[2]).GuildIncidentAlertTypes;
    const tmp2 = hasDetectedRaid(guildIncident);
  }
};
export const getEnabledInterventions = function getEnabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (pauseInvites) {
    items.push(require(dependencyMap[2]).GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (pauseDms) {
    items.push(require(dependencyMap[2]).GuildIncidentActionTypes.DMS_DISABLED);
  }
  return items;
};
export const getDisabledInterventions = function getDisabledInterventions(pauseInvites, pauseDms) {
  const items = [];
  if (!pauseInvites) {
    items.push(require(dependencyMap[2]).GuildIncidentActionTypes.INVITES_DISABLED);
  }
  if (!pauseDms) {
    items.push(require(dependencyMap[2]).GuildIncidentActionTypes.DMS_DISABLED);
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
  const require = prop;
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
      const intl3 = require(dependencyMap[3]).intl;
      let obj = { guildName };
      const _Date3 = Date;
      const date = new Date(invitesDisabledUntil);
      obj.time = date.toLocaleString(require(dependencyMap[3]).intl.currentLocale, obj);
      return intl3.formatToPlainString(require(dependencyMap[3]).t.hCZitf, obj);
    } else if (tmp26 === true) {
      const intl2 = require(dependencyMap[3]).intl;
      obj = { guildName };
      const _Date2 = Date;
      const date1 = new Date(invitesDisabledUntil);
      obj.time = date1.toLocaleString(require(dependencyMap[3]).intl.currentLocale, obj);
      return intl2.formatToPlainString(require(dependencyMap[3]).t.HNKxf+, obj);
    } else if (tmp27 === true) {
      const intl = require(dependencyMap[3]).intl;
      obj = { guildName };
      const _Date = Date;
      const date2 = new Date(invitesDisabledUntil);
      obj.time = date2.toLocaleString(require(dependencyMap[3]).intl.currentLocale, obj);
      return intl.formatToPlainString(require(dependencyMap[3]).t.M3iSyL, obj);
    } else {
      return "";
    }
  }
};
