// Module ID: 16028
// Function ID: 16029
// Name: useMaybeFetchCheckpointData
// Dependencies: [19, 15977, 558, 576, 504, 15972, 2]

// Module 16028 (useMaybeFetchCheckpointData)
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 15972 */;
import CheckpointStore2 from "CheckpointStore" /* 15977 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

let tmp;
const get_initialized = tmp(504);
const useEffect = react.useEffect;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCheckpointData() {
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      return CheckpointStore.fetchState;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const fetchState = CheckpointStore.fetchState;
      const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
      if (!tmp) {
        const obj = CheckpointActionCreators;
        const checkpointData = obj.fetchCheckpointData();
      }
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  useEffect(tmp8, tmp9);
  return stateFromStores;
}) : (function useMaybeFetchCheckpointData() {
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState);
  useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    if (!tmp) {
      const obj = CheckpointActionCreators;
      const checkpointData = obj.fetchCheckpointData();
    }
  }, []);
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export const useMaybeFetchCheckpointData = tmp2;
