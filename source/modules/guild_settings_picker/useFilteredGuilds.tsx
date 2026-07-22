// Module ID: 12788
// Function ID: 97967
// Name: useFilteredGuilds
// Dependencies: []
// Exports: default

// Module 12788 (useFilteredGuilds)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const arg1 = isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let tmp;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const importDefault = stateFromStores;
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const dependencyMap = stateFromStores1;
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const React = stateFromStores2;
  obj = {
    options: React.useMemo(() => {
      if (null == stateFromStores2) {
        let items = [];
      } else {
        if (null == isGuildIncluded) {
          let found = stateFromStores;
        } else {
          found = stateFromStores.filter((arg0) => {
            callback2(closure_2[5])(null != closure_2[arg0], "guild should not be null");
            return callback(closure_2[arg0], closure_3);
          });
        }
        items = found.map((id) => {
          callback2(closure_2[5])(null != closure_2[id], "guild should not be null");
          return { id, label: closure_2[id].name, value: closure_2[id].id };
        });
      }
      return items;
    }, items3)
  };
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  if (null != selectedGuildId) {
    tmp = stateFromStores1[selectedGuildId];
  }
  obj.selectedGuild = tmp;
  return obj;
};
