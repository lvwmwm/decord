// Module ID: 17612
// Function ID: 17613
// Name: useFavoritesCleanupActivity
// Dependencies: [32, 19, 6772, 558, 576, 6824, 504, 1125, 3413, 1101, 2]

// Module 17612 (useFavoritesCleanupActivity)
import DurationsDefault from "Durations" /* 1101 */;
import _modDef3413 from "module_3413" /* 3413 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6824 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6772 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesCleanupActivity(threadMetadata) {
  let diff;
  let first1;
  let tmp12;
  let tmp7;
  let tmp8;
  _require = threadMetadata;
  let obj = require("react");
  const cResult = obj.c(8);
  const first = _slicedToArray(react.useState(Date.now), 1)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== threadMetadata) {
    const fn = function u() {
      const obj = getThreadAutoArchiveTimeOnce;
      return obj.getThreadLastActivityTime(threadMetadata);
    };
    const items1 = [threadMetadata];
    cResult[1] = threadMetadata;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp7, tmp8);
  threadMetadata = threadMetadata.threadMetadata;
  let archived;
  const tmp10 = cResult[4];
  if (threadMetadata != null) {
    archived = threadMetadata.archived;
  }
  if (tmp10 === archived) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === first) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  if (Number.isFinite(stateFromStores)) {
    let formatToPlainStringResult;
    if (stateFromStores > 0) {
      const intl2 = tmp(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _Math = Math;
      const _Math2 = Math;
      const obj2 = { days: Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY)) };
      const IzxPdG = _modDef3413.IzxPdG;
      diff = first - stateFromStores;
      formatToPlainStringResult = formatToPlainString(IzxPdG, obj2);
    }
    const threadMetadata2 = threadMetadata.threadMetadata;
    let archived1;
    if (threadMetadata2 != null) {
      archived1 = threadMetadata2.archived;
    }
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (archived1) {
      const intl3 = tmp(1125).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3413.Dr1FWM, obj3);
    }
    const threadMetadata3 = threadMetadata.threadMetadata;
    let archived2;
    if (threadMetadata3 != null) {
      archived2 = threadMetadata3.archived;
    }
    cResult[4] = archived2;
    cResult[5] = stateFromStores;
    cResult[6] = first;
    cResult[7] = formatToPlainStringResult1;
    tmp12 = formatToPlainStringResult1;
  }
  const intl = tmp(1125).intl;
  formatToPlainStringResult = intl.string(_modDef3413.rYws6y);
}) : (function useFavoritesCleanupActivity(threadMetadata) {
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
      const intl2 = tmp2(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _Math = Math;
      const _Math2 = Math;
      const obj2 = { days: Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY)) };
      const IzxPdG = _modDef3413.IzxPdG;
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
      const intl3 = tmp2(1125).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3413.Dr1FWM, obj3);
    }
    return formatToPlainStringResult1;
  }
  const intl = tmp2(1125).intl;
  formatToPlainStringResult = intl.string(_modDef3413.rYws6y);
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanupActivity.tsx");

export default tmp2;
