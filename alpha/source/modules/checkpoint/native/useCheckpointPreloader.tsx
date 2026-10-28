// Module ID: 13270
// Function ID: 13271
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13015, 5148, 5152, 5154, 13200, 8666, 13219, 13210, 13215, 13246, 8662, 8665, 8668, 8671, 8674, 8677, 13025, 13023, 558, 576, 13271, 1294, 2]

// Module 13270 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _modDef5148 from "module_5148" /* 5148 */;
import _modDef5152 from "module_5152" /* 5152 */;
import _modDef5154 from "module_5154" /* 5154 */;
import _modDef8662 from "module_8662" /* 8662 */;
import _modDef8665 from "module_8665" /* 8665 */;
import _modDef8666 from "module_8666" /* 8666 */;
import _modDef8668 from "module_8668" /* 8668 */;
import _modDef8671 from "module_8671" /* 8671 */;
import _modDef8674 from "module_8674" /* 8674 */;
import _modDef8677 from "module_8677" /* 8677 */;
import CheckpointStore from "CheckpointStore" /* 13015 */;
import _modDef13023 from "module_13023" /* 13023 */;
import _modDef13025 from "module_13025" /* 13025 */;
import _modDef13200 from "module_13200" /* 13200 */;
import _modDef13210 from "module_13210" /* 13210 */;
import _modDef13215 from "module_13215" /* 13215 */;
import _modDef13219 from "module_13219" /* 13219 */;
import _modDef13246 from "module_13246" /* 13246 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5148, _modDef5152, _modDef5154, _modDef13200, _modDef8666, _modDef13219, _modDef13210, _modDef13215, _modDef13246, _modDef8662, _modDef8665, _modDef8668, _modDef8671, _modDef8674, _modDef8677, _modDef13025, _modDef13023];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointPreloader() {
  let closure_0;
  let closure_1;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(4);
  _require = react.useRef(0);
  dependencyMap = react.useRef(true);
  const obj3 = require("useMaybeFetchCheckpointData");
  const maybeFetchCheckpointData = obj3.useMaybeFetchCheckpointData();
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, _slicedToArray] = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let ref;
      function handleSettled() {
        if (ref.current) {
          handleSettled.current = handleSettled.current + 1;
          if (handleSettled.current === items.length) {
            closure_1_2(true);
          }
        }
      }
      const item = items.forEach((url) => {
        const HTTP = HTTPUtils.HTTP;
        const obj = { url, binary: true, rejectWithError: true };
        const value = HTTP.get(obj);
        return value.then(handleSettled, handleSettled);
      });
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  useEffect(tmp6, tmp7);
  const tmp8 = useEffect;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      return () => {
        closure_1_1.current = false;
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  tmp8(tmp10, tmp11);
  return tmp5;
}) : (function useCheckpointPreloader() {
  let closure_0;
  let closure_1;
  let tmp4;
  let obj = react;
  _require = react.useRef(0);
  dependencyMap = react.useRef(true);
  const obj2 = require("useMaybeFetchCheckpointData");
  const maybeFetchCheckpointData = obj2.useMaybeFetchCheckpointData();
  const tmp2 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  const tmp3 = _slicedToArray(obj.useState(false), 2);
  [tmp4, _slicedToArray] = tmp3;
  useEffect(() => {
    let ref;
    function handleSettled() {
      if (ref.current) {
        handleSettled.current = handleSettled.current + 1;
        if (handleSettled.current === items.length) {
          closure_1_2(true);
        }
      }
    }
    const item = items.forEach((url) => {
      const HTTP = HTTPUtils.HTTP;
      const obj = { url, binary: true, rejectWithError: true };
      const value = HTTP.get(obj);
      return value.then(handleSettled, handleSettled);
    });
  }, []);
  useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  return tmp4;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default tmp2;
