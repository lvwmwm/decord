// Module ID: 8411
// Function ID: 67000
// Name: useGuildProfile
// Dependencies: []
// Exports: useGuildProfile

// Module 8411 (useGuildProfile)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const arg1 = guildId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => store.getProfile(arg0));
  const items1 = [closure_4];
  obj = { guildProfile: stateFromStores };
  // CreateGeneratorClosureLongIndex (0x67)
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => store.getFetchStatus(arg0));
  const items2 = [guildId];
  obj.fetchGuildProfile = React.useCallback(callback(tmp), items2);
  obj.fetchStatus = stateFromStores1;
  return obj;
};
