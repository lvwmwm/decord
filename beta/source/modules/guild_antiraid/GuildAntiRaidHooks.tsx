// Module ID: 9557
// Function ID: 9558
// Name: GuildAntiRaidHooks
// Dependencies: [1220, 2067, 4469, 4655, 1372, 9540, 7459, 1074, 563, 11, 7458, 1086, 4474, 9558, 2]
// Exports: getDisabledActions, shouldShowRaidInAppNotification, shouldShowRaidNotificationNagbar, useDisabledActions, useFirstGuildIncidentId, useGuildIncidentsState, useShowAntiRaidInGuildNotifSettings

// Module 9557 (GuildAntiRaidHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7458 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7459 */;
import GuildAntiRaidPermissionsUtils from "GuildAntiRaidPermissionsUtils" /* 9558 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserStore from "UserStore" /* 1372 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_12;
let unpackModuleId;
function getFirstGuildIncidentId(guildId) {
  let guild;
  const currentUser = UserStore.getCurrentUser();
  const incidentsByGuild = GuildIncidentsStore.getIncidentsByGuild();
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(incidentsByGuild);
  const mapped = keys.map((item) => guild.getGuild(item));
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp18 = incidentsByGuild[tmp5.id];
      let tmp19 = tmp18;
      if (null != tmp18) {
        let tmp20 = require;
        let obj6 = GuildAntiRaidUtils;
        if (obj6.hasDetectedActivity(tmp19)) {
          let tmp20Result = tmp20(7458);
          if (!tmp20Result.isUnderLockdown(tmp19)) {
            let tmp13 = BigFlagUtilsAll;
            let hasAny = tmp13.hasAny;
            let obj4 = PermissionUtilsAll;
            let obj2 = { user: currentUser, context: tmp5, checkElevated: false };
            if (hasAny(obj4.computePermissions(obj2), closure_10)) {
              let id = nextResult.id;
              iter.return();
              return id;
            }
          }
        } else {
          let tmp20Result2 = tmp20(7458);
        }
      }
    }
    continue;
  }
  return null;
}
let closure_10 = GuildAntiRaidConstants.IncidentAlertModeratorPermissions;
({ EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId, GuildFeatures: closure_12 } = Constants);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidHooks.tsx");

export const useFirstGuildIncidentId = function useFirstGuildIncidentId() {
  let currentUser;
  let incidentsByGuild;
  let stateFromStores1;
  let obj = stateFromStores1(563);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [GuildIncidentsStore];
  const obj2 = stateFromStores1(563);
  stateFromStores1 = obj2.useStateFromStores(items1, () => incidentsByGuild.getIncidentsByGuild());
  const items2 = [GuildStore];
  const obj3 = stateFromStores1(563);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let guild;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(stateFromStores1);
    return keys.map((item) => guild.getGuild(item));
  });
  const iter = stateFromStoresArray[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null != nextResult) {
      let tmp16 = stateFromStores1[tmp5.id];
      let tmp17 = tmp16;
      if (null != tmp16) {
        let tmp19 = stateFromStores1;
        let obj7 = stateFromStores1(7458);
        if (obj7.hasDetectedActivity(tmp17)) {
          let tmp11 = BigFlagUtilsAll;
          let hasAny = tmp11.hasAny;
          let obj5 = PermissionUtilsAll;
          let obj4 = { user: stateFromStores, context: tmp5, checkElevated: false };
          if (hasAny(obj5.computePermissions(obj4), closure_10)) {
            let id = nextResult.id;
            iter.return();
            return id;
          }
        } else {
          let tmp19Result = tmp19(7458);
        }
      }
    }
    continue;
  }
  return null;
};
export const useGuildIncidentsState = function useGuildIncidentsState(id) {
  let isUnderLockdownResult;
  _require = id;
  const tmp = _require;
  let obj = require("useStateFromStores");
  const items = [GuildStore, PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const guildPermissions = PermissionStore.getGuildPermissions(guild);
      let hasAnyResult = null != guildPermissions;
      if (hasAnyResult) {
        const obj = BigFlagUtilsAll;
        hasAnyResult = obj.hasAny(guildPermissions, closure_10);
      }
      return hasAnyResult;
    }
  });
  const items1 = [GuildIncidentsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guildIncident = null;
    if (null != id) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
    }
    return guildIncident;
  });
  const obj3 = { shouldShowIncidentActions: stateFromStores, incidentData: stateFromStores1, isUnderLockdown: isUnderLockdownResult };
  isUnderLockdownResult = null != stateFromStores1;
  if (isUnderLockdownResult) {
    const tmpResult = tmp(7458);
    isUnderLockdownResult = tmpResult.isUnderLockdown(stateFromStores1);
  }
  return obj3;
};
export const shouldShowRaidNotificationNagbar = function shouldShowRaidNotificationNagbar() {
  const guildId = getFirstGuildIncidentId(SelectedGuildStore.getGuildId());
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  const show = null != guildId && !(null != tmp2 && tmp2.disableRaidAlertNag);
  return { show, guildId };
};
export const shouldShowRaidInAppNotification = function shouldShowRaidInAppNotification() {
  const guildId = getFirstGuildIncidentId(SelectedGuildStore.getGuildId());
  let guildsProto = UserSettingsProtoStore.getGuildsProto();
  if (guildsProto == null) {
    guildsProto = {};
  }
  let tmp2 = null;
  if (null != guildId) {
    tmp2 = guildsProto[guildId];
  }
  let guildIncident = null;
  const tmp3 = null != tmp2 && tmp2.disableRaidAlertNag;
  if (null != guildId) {
    guildIncident = GuildIncidentsStore.getGuildIncident(guildId);
  }
  let isUnderLockdownResult = null != guildIncident;
  if (isUnderLockdownResult) {
    const obj2 = GuildAntiRaidUtils;
    isUnderLockdownResult = obj2.isUnderLockdown(guildIncident);
  }
  const show = null != guildId && !isUnderLockdownResult && !tmp3;
  return { show, guildId };
};
export const getDisabledActions = function getDisabledActions(id) {
  let tmp11;
  if (null == id) {
    return { dmsDisabled: false, invitesDisabled: false };
  } else {
    const guildIncident = GuildIncidentsStore.getGuildIncident(id.id);
    let hasItem;
    if (id != null) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (guildIncident != null) {
        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
      }
      let tmp4 = null != invitesDisabledUntil;
      if (tmp4) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(guildIncident.invitesDisabledUntil);
        tmp4 = date > new Date();
        const date1 = new Date();
      }
      hasItem = tmp4;
    }
    let dmsDisabledUntil;
    const obj = { invitesDisabled: hasItem, dmsDisabled: tmp11 };
    if (guildIncident != null) {
      dmsDisabledUntil = guildIncident.dmsDisabledUntil;
    }
    tmp11 = null != dmsDisabledUntil;
    if (tmp11) {
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      const date2 = new Date(guildIncident.dmsDisabledUntil);
      tmp11 = date2 > new Date();
      const date3 = new Date();
    }
    return obj;
  }
};
export const useDisabledActions = function useDisabledActions(id) {
  let obj2;
  let tmp13;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_11;
  }
  const items = [GuildIncidentsStore];
  const items1 = [id];
  const obj = id(563);
  const stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(id), items1);
  if (null == id) {
    obj2 = { dmsDisabled: false, invitesDisabled: false };
  } else {
    let hasItem;
    if (id != null) {
      const features = id.features;
      hasItem = features.has(constants.INVITES_DISABLED);
    }
    if (!hasItem) {
      let invitesDisabledUntil;
      if (stateFromStores != null) {
        invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
      }
      let tmp6 = null != invitesDisabledUntil;
      if (tmp6) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(stateFromStores.invitesDisabledUntil);
        tmp6 = date > new Date();
        const date1 = new Date();
      }
      hasItem = tmp6;
    }
    obj2 = { invitesDisabled: hasItem, dmsDisabled: tmp13 };
    let dmsDisabledUntil;
    if (stateFromStores != null) {
      dmsDisabledUntil = stateFromStores.dmsDisabledUntil;
    }
    tmp13 = null != dmsDisabledUntil;
    if (tmp13) {
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      const date2 = new Date(stateFromStores.dmsDisabledUntil);
      tmp13 = date2 > new Date();
      const date3 = new Date();
    }
  }
  return obj2;
};
export const useShowAntiRaidInGuildNotifSettings = function useShowAntiRaidInGuildNotifSettings(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [PermissionStore, GuildStore];
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const obj = GuildAntiRaidPermissionsUtils;
    return obj.canReportRaid(guild, PermissionStore);
  });
};
