// Module ID: 5735
// Function ID: 49295
// Name: _getGuildIdsToFetchSoundsFor
// Dependencies: [31, 1838, 4578, 624, 2]
// Exports: getGuildIdsToFetchSoundsFor, useGuildIdsToFetchSoundsFor

// Module 5735 (_getGuildIdsToFetchSoundsFor)
import { useMemo } from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _getGuildIdsToFetchSoundsFor(guildIds, sounds) {
  let closure_0 = sounds;
  return guildIds.filter((arg0) => null == sounds.get(arg0));
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [_createForOfIteratorHelperLoose];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[3]).useStateFromStoresArray(items, () => outer1_3.getGuildIds());
  const obj = stateFromStoresArray(stateFromStores[3]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = stateFromStoresArray(stateFromStores[3]).useStateFromStores(items1, () => outer1_4.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => outer1_5(stateFromStoresArray, stateFromStores), items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  guildIds = guildIds.getGuildIds();
  return _getGuildIdsToFetchSoundsFor(guildIds, sounds.getSounds());
};
