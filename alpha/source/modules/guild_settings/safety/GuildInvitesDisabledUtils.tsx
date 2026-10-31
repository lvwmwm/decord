// Module ID: 13914
// Function ID: 13915
// Name: GuildInvitesDisabledUtils
// Dependencies: [11010, 4946, 1072, 504, 2]
// Exports: useInvitesDisabled, useInvitesDisabledPermission, useShouldShowInvitesDisabledNotif

// Module 13914 (GuildInvitesDisabledUtils)
import GuildIncidentsStore from "GuildIncidentsStore" /* 11010 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guildIncident;

let closure_4;
let hasOwnProperty;
const f105262 = () => {
  const canResult = null != guild && PermissionStore.can(hasOwnProperty.MANAGE_GUILD, tmp);
  return canResult;
};
const f105263 = () => {
  guildIncident = null;
  if (null != closure_0) {
    guildIncident = guildIncident.getGuildIncident(tmp.id);
  }
  return guildIncident;
};
({ GuildFeatures: closure_4, Permissions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export function useInvitesDisabledPermission(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f105262, items1);
}
export function useInvitesDisabled(features) {
  _require = features;
  const items = [GuildIncidentsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f105263);
  let hasItem;
  if (features != null) {
    features = features.features;
    hasItem = features.has(constants.INVITES_DISABLED);
  }
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores != null) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let tmp5 = null != invitesDisabledUntil;
    if (tmp5) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      tmp5 = date > new Date();
      const date1 = new Date();
    }
    hasItem = tmp5;
  }
  return hasItem;
}
export function useShouldShowInvitesDisabledNotif(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f105262, items1);
  _require = guild;
  const items2 = [GuildIncidentsStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, f105263);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.INVITES_DISABLED);
  }
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores1 != null) {
      invitesDisabledUntil = stateFromStores1.invitesDisabledUntil;
    }
    let tmp6 = null != invitesDisabledUntil;
    if (tmp6) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(stateFromStores1.invitesDisabledUntil);
      tmp6 = date > new Date();
      const date1 = new Date();
    }
    hasItem = tmp6;
  }
  if (stateFromStores) {
    stateFromStores = hasItem;
  }
  return stateFromStores;
}
