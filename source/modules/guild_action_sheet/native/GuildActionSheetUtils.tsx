// Module ID: 12845
// Function ID: 98182
// Name: useGuildActionSheetPermissions
// Dependencies: [555352064, 488505344, 250937344, 131072]
// Exports: useGuildActionSheetPermissions

// Module 12845 (useGuildActionSheetPermissions)
let closure_2 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  const arg1 = guild;
  const items = [closure_2];
  const items1 = [guild];
  return arg1(dependencyMap[2]).useStateFromStoresObject(items, () => {
    if (null == arg0) {
      let obj = { "Bool(true)": true, "Bool(true)": false, "Bool(true)": false };
    } else {
      obj = { canAccessSettings: closure_2.canAccessGuildSettings(arg0) };
      let canResult = closure_2.can(constants.CHANGE_NICKNAME, arg0);
      if (!canResult) {
        canResult = closure_2.can(constants.MANAGE_NICKNAMES, arg0);
      }
      obj.canEditNickname = canResult;
      obj.canManageChannels = closure_2.can(constants.MANAGE_CHANNELS, arg0);
    }
    return obj;
  }, items1);
};
