// Module ID: 6758
// Function ID: 6759
// Name: useGuildIdsToFetchSoundsFor
// Dependencies: [19, 2067, 5319, 563, 2]
// Exports: getGuildIdsToFetchSoundsFor, useGuildIdsToFetchSoundsFor

// Module 6758 (useGuildIdsToFetchSoundsFor)
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  let guildIds;
  let sounds;
  let stateFromStores;
  let stateFromStoresArray;
  const items = [GuildStore];
  const obj = stateFromStoresArray(stateFromStores[3]);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => guildIds.getGuildIds());
  const items1 = [SoundboardStore];
  const obj2 = stateFromStoresArray(stateFromStores[3]);
  stateFromStores = obj2.useStateFromStores(items1, () => sounds.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => {
    let closure_0 = stateFromStores;
    return stateFromStoresArray.filter((item) => null == closure_0.get(item));
  }, items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  const guildIds = GuildStore.getGuildIds();
  const sounds = SoundboardStore.getSounds();
  return guildIds.filter((item) => null == closure_0.get(item));
};
