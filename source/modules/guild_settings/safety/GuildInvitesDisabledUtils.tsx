// Module ID: 11406
// Function ID: 88737
// Name: useInvitesDisabledPermission
// Dependencies: []
// Exports: useShouldShowInvitesDisabledNotif

// Module 11406 (useInvitesDisabledPermission)
function useInvitesDisabledPermission(guild) {
  const arg1 = guild;
  const items = [closure_3];
  const items1 = [guild];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_3.can(constants.MANAGE_GUILD, arg0);
    }
    return canResult;
  }, items1);
}
function useInvitesDisabled(features) {
  const arg1 = features;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let guildIncident = null;
    if (null != arg0) {
      guildIncident = guildIncident.getGuildIncident(arg0.id);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ GuildFeatures: closure_4, Permissions: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_settings/safety/GuildInvitesDisabledUtils.tsx");

export { useInvitesDisabledPermission };
export { useInvitesDisabled };
export const useShouldShowInvitesDisabledNotif = function useShouldShowInvitesDisabledNotif(guild) {
  let tmp = useInvitesDisabledPermission(guild);
  if (tmp) {
    tmp = useInvitesDisabled(guild);
  }
  return tmp;
};
