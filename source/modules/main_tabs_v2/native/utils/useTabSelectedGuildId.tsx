// Module ID: 13491
// Function ID: 102381
// Name: useTabSelectedGuildId
// Dependencies: []
// Exports: default

// Module 13491 (useTabSelectedGuildId)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/utils/useTabSelectedGuildId.tsx");

export default function useTabSelectedGuildId() {
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const guildId = store.getGuildId();
    let lastSelectedGuildId = store.getLastSelectedGuildId();
    let first = flattenedGuildIds.getFlattenedGuildIds()[0];
    if (null != guildId) {
      lastSelectedGuildId = guildId;
    }
    if (null != lastSelectedGuildId) {
      first = lastSelectedGuildId;
    }
    return first;
  });
};
