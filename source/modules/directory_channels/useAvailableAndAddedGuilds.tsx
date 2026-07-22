// Module ID: 10040
// Function ID: 77612
// Name: useAvailableAndAddedGuilds
// Dependencies: []
// Exports: default

// Module 10040 (useAvailableAndAddedGuilds)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const Permissions = arg1(dependencyMap[7]).Permissions;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  let obj = arg1(dependencyMap[8]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => adminGuildEntryIds.getAdminGuildEntryIds(arg1));
  const dependencyMap = stateFromStores;
  const items1 = [closure_9, closure_7, closure_8];
  const items2 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[8]).useStateFromStoresArray(items1, () => {
    const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const arg0 = items;
    const item = flattenedGuildIds.forEach((guildId) => {
      const guild = guild.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_8.can(constants.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== items;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  let closure_4 = stateFromStoresArray;
  importDefault(dependencyMap[9])(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    stateFromStoresArray(tmp)();
  });
  obj = {
    availableGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem = null != set;
      if (hasItem) {
        hasItem = set.has(id.id);
      }
      return !hasItem;
    }), items3),
    addedGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      if (null != set) {
        hasItem = set.has(id.id);
      }
      return hasItem;
    }), items4),
    loading: tmp[0]
  };
  const items3 = [stateFromStoresArray, stateFromStores];
  const items4 = [stateFromStoresArray, stateFromStores];
  return obj;
};
