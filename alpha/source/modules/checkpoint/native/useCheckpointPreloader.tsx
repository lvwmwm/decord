// Module ID: 13503
// Function ID: 13504
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13236, 5149, 5153, 5155, 13432, 6084, 13453, 13447, 13443, 13480, 6080, 6083, 6086, 6089, 6092, 6095, 13256, 13254, 558, 576, 13504, 1294, 2]

// Module 13503 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _modDef5149 from "module_5149" /* 5149 */;
import _modDef5153 from "module_5153" /* 5153 */;
import _modDef5155 from "module_5155" /* 5155 */;
import _modDef6080 from "module_6080" /* 6080 */;
import _modDef6083 from "module_6083" /* 6083 */;
import _modDef6084 from "module_6084" /* 6084 */;
import _modDef6086 from "module_6086" /* 6086 */;
import _modDef6089 from "module_6089" /* 6089 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6095 from "module_6095" /* 6095 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import _modDef13254 from "module_13254" /* 13254 */;
import _modDef13256 from "module_13256" /* 13256 */;
import _modDef13432 from "module_13432" /* 13432 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13447 from "module_13447" /* 13447 */;
import _modDef13453 from "module_13453" /* 13453 */;
import _modDef13480 from "module_13480" /* 13480 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5149, _modDef5153, _modDef5155, _modDef13432, _modDef6084, _modDef13453, _modDef13447, _modDef13443, _modDef13480, _modDef6080, _modDef6083, _modDef6086, _modDef6089, _modDef6092, _modDef6095, _modDef13256, _modDef13254];
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
