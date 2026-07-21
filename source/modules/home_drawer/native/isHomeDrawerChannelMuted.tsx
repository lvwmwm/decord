// Module ID: 14721
// Function ID: 111032
// Name: useIsHomeDrawerChannelMuted
// Dependencies: []
// Exports: useIsHomeDrawerChannelMuted

// Module 14721 (useIsHomeDrawerChannelMuted)
let closure_2 = importDefault(dependencyMap[0]);
const isThread = arg1(dependencyMap[1]).isThread;
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
  const items = [closure_2, closure_4];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => (type) => {
    const tmp = callback(type.type);
    if (tmp) {
      if (muted.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], arg1(dependencyMap[3]).statesWillNeverBeEqual);
};
