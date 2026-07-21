// Module ID: 14407
// Function ID: 108683
// Name: useUserSafetySettingsSelectedGuildId
// Dependencies: []
// Exports: useAllServersOptionSelected, useIsSelectedGuildAHub

// Module 14407 (useUserSafetySettingsSelectedGuildId)
function useUserSafetySettingsSelectedGuildId() {
  return callback2().selectedGuildId;
}
let closure_2 = importDefault(dependencyMap[0]);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_3, useUserSafetySettingsSelectedGuildStore: closure_4 } = arg1(dependencyMap[1]));
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export { useUserSafetySettingsSelectedGuildId };
export const useAllServersOptionSelected = function useAllServersOptionSelected() {
  return callback2().selectedGuildId === closure_3;
};
export const useIsSelectedGuildAHub = function useIsSelectedGuildAHub() {
  let hasItem;
  const callback = useUserSafetySettingsSelectedGuildId();
  const items = [closure_2];
  const stateFromStores = callback(dependencyMap[3]).useStateFromStores(items, () => guild.getGuild(closure_0));
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.HUB);
  }
  return null != hasItem && hasItem;
};
