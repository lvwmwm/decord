// Module ID: 18189
// Function ID: 18190
// Name: useFavoritesCleanupActivity
// Dependencies: [32, 19, 6842, 504, 6894, 1113, 3450, 1089, 2]
// Exports: default

// Module 18189 (useFavoritesCleanupActivity)
import DurationsDefault from "Durations" /* 1089 */;
import _modDef3450 from "module_3450" /* 3450 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6894 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanupActivity.tsx");

export default function useFavoritesCleanupActivity(threadMetadata) {
  let diff;
  _require = threadMetadata;
  const first = _slicedToArray(react.useState(Date.now), 1)[0];
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [threadMetadata];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = getThreadAutoArchiveTimeOnce;
    return obj.getThreadLastActivityTime(threadMetadata);
  }, items1);
  if (Number.isFinite(stateFromStores)) {
    let formatToPlainStringResult;
    if (stateFromStores > 0) {
      const intl2 = tmp2(1113).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _Math = Math;
      const _Math2 = Math;
      const obj2 = { days: Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY)) };
      const IzxPdG = _modDef3450.IzxPdG;
      diff = first - stateFromStores;
      formatToPlainStringResult = formatToPlainString(IzxPdG, obj2);
    }
    threadMetadata = threadMetadata.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (archived) {
      const intl3 = tmp2(1113).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3450.Dr1FWM, obj3);
    }
    return formatToPlainStringResult1;
  }
  const intl = tmp2(1113).intl;
  formatToPlainStringResult = intl.string(_modDef3450.rYws6y);
};
