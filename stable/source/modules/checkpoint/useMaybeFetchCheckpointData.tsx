// Module ID: 13070
// Function ID: 13071
// Name: useMaybeFetchCheckpointData
// Dependencies: [19, 12986, 558, 576, 504, 12987, 7439, 2]

// Module 13070 (useMaybeFetchCheckpointData)
import GameActionCreators from "GameActionCreators" /* 7439 */;
import CheckpointStore2 from "CheckpointStore" /* 12986 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const CheckpointStore = CheckpointStore2;
let _require, dependencyMap;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCheckpointData() {
  let closure_0;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
      return CheckpointStore.fetchState;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function f() {
      const stats = CheckpointStore.stats;
      let tmp;
      if (stats != null) {
        const games = stats.games;
        if (games != null) {
          tmp = games.games;
        }
      }
      return tmp;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores1) {
    let mapped;
    if (stateFromStores1 != null) {
      mapped = stateFromStores1.map((game) => game.game.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    cResult[4] = stateFromStores1;
    cResult[5] = mapped;
    tmp11 = mapped;
  } else {
    tmp11 = cResult[5];
  }
  _require = tmp11;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        const fetchState = CheckpointStore.fetchState;
        const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
        if (!tmp) {
          const obj = closure_0(dependencyMap[5]);
          const checkpointData = obj.fetchCheckpointData();
        }
      }
    }
    const items2 = [];
    cResult[6] = F;
    cResult[7] = items2;
    tmp14 = items2;
    tmp13 = F;
  } else {
    class F {
      constructor() {
        const fetchState = CheckpointStore.fetchState;
        const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
        if (!tmp) {
          const obj = closure_0(dependencyMap[5]);
          const checkpointData = obj.fetchCheckpointData();
        }
      }
    }
    tmp14 = cResult[7];
  }
  closure_2(tmp13, tmp14);
  const tmp15 = closure_2;
  if (cResult[8] !== tmp11) {
    class F {
      constructor() {
        const fetchState = CheckpointStore.fetchState;
        const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
        if (!tmp) {
          const obj = closure_0(dependencyMap[5]);
          const checkpointData = obj.fetchCheckpointData();
        }
      }
    }
    const items3 = [tmp11];
    cResult[8] = tmp11;
    cResult[9] = tmp19;
    cResult[10] = items3;
    tmp18 = items3;
    tmp17 = tmp19;
  } else {
    class F {
      constructor() {
        const fetchState = CheckpointStore.fetchState;
        const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
        if (!tmp) {
          const obj = closure_0(dependencyMap[5]);
          const checkpointData = obj.fetchCheckpointData();
        }
      }
    }
    tmp18 = cResult[10];
  }
  tmp15(tmp17, tmp18);
  return stateFromStores;
}) : (function useMaybeFetchCheckpointData() {
  let closure_1;
  let stateFromStores1;
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState);
  const items1 = [CheckpointStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let tmp;
    if (stats != null) {
      const games = stats.games;
      if (games != null) {
        tmp = games.games;
      }
    }
    return tmp;
  });
  const items2 = [stateFromStores1];
  const tmp3 = closure_3(() => {
    let mapped;
    const arr = stateFromStores1;
    if (stateFromStores1 != null) {
      mapped = arr.map((game) => game.game.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items2);
  dependencyMap = tmp3;
  closure_2(() => {
    const fetchState = CheckpointStore.fetchState;
    const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    if (!tmp) {
      const obj = stateFromStores1(closure_1[5]);
      const checkpointData = obj.fetchCheckpointData();
    }
  }, []);
  const items3 = [tmp3];
  closure_2(() => {
    const obj = GameActionCreators;
    const gamesWithSupplementalData = obj.fetchGamesWithSupplementalData(closure_1);
  }, items3);
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export const useMaybeFetchCheckpointData = tmp3;
