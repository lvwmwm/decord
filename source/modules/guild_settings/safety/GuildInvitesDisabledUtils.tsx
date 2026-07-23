// Module ID: 11416
// Function ID: 88787
// Name: useInvitesDisabledPermission
// Dependencies: [10219, 3758, 653, 566, 2]
// Exports: useShouldShowInvitesDisabledNotif

// Module 11416 (useInvitesDisabledPermission)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function useInvitesDisabledPermission(guild) {
  const _require = guild;
  const items = [closure_3];
  const items1 = [guild];
  return _require(566).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.MANAGE_GUILD, closure_0);
    }
    return canResult;
  }, items1);
}
function useInvitesDisabled(features) {
  const _require = features;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let guildIncident = null;
    if (null != id) {
      guildIncident = outer1_2.getGuildIncident(id.id);
    }
    return guildIncident;
  });
  let hasItem;
  if (null != features) {
    features = features.features;
    hasItem = features.has(constants.INVITES_DISABLED);
  }
  if (!hasItem) {
    let invitesDisabledUntil;
    if (null != stateFromStores) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let tmp5 = null != invitesDisabledUntil;
    if (tmp5) {
      const _Date = Date;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp5 = date > date1;
    }
    hasItem = tmp5;
  }
  return hasItem;
}
({ GuildFeatures: closure_4, Permissions: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export { useInvitesDisabledPermission };
export { useInvitesDisabled };
export const useShouldShowInvitesDisabledNotif = function useShouldShowInvitesDisabledNotif(guild) {
  let tmp = useInvitesDisabledPermission(guild);
  if (tmp) {
    tmp = useInvitesDisabled(guild);
  }
  return tmp;
};
