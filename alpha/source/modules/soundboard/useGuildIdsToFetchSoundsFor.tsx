// Module ID: 7514
// Function ID: 7515
// Name: useGuildIdsToFetchSoundsFor
// Dependencies: [19, 4880, 6053, 563, 2]
// Exports: getGuildIdsToFetchSoundsFor, useGuildIdsToFetchSoundsFor

// Module 7514 (useGuildIdsToFetchSoundsFor)
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import SoundboardStore from "SoundboardStore" /* 6053 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export function useGuildIdsToFetchSoundsFor() {
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
}
export function getGuildIdsToFetchSoundsFor() {
  const guildIds = GuildStore.getGuildIds();
  const sounds = SoundboardStore.getSounds();
  return guildIds.filter((item) => null == closure_0.get(item));
}
