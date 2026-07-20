// Module ID: 5728
// Function ID: 49206
// Name: _getGuildIdsToFetchSoundsFor
// Dependencies: []
// Exports: getGuildIdsToFetchSoundsFor, useGuildIdsToFetchSoundsFor

// Module 5728 (_getGuildIdsToFetchSoundsFor)
function _getGuildIdsToFetchSoundsFor(guildIds, sounds) {
  const require = sounds;
  return guildIds.filter((arg0) => null == arg1.get(arg0));
}
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [closure_3];
  const stateFromStoresArray = require(dependencyMap[3]).useStateFromStoresArray(items, () => guildIds.getGuildIds());
  const require = stateFromStoresArray;
  const obj = require(dependencyMap[3]);
  const items1 = [closure_4];
  const stateFromStores = require(dependencyMap[3]).useStateFromStores(items1, () => sounds.getSounds());
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => callback(stateFromStoresArray, stateFromStores), items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  const guildIds = guildIds.getGuildIds();
  return _getGuildIdsToFetchSoundsFor(guildIds, sounds.getSounds());
};
