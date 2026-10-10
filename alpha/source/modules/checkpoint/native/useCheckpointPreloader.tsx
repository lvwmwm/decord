// Module ID: 16027
// Function ID: 16028
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 15977, 4913, 4915, 15992, 16013, 16001, 15985, 15983, 558, 576, 16028, 1295, 2]

// Module 16027 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _modDef4913 from "module_4913" /* 4913 */;
import _modDef4915 from "module_4915" /* 4915 */;
import CheckpointStore from "CheckpointStore" /* 15977 */;
import _modDef15983 from "module_15983" /* 15983 */;
import _modDef15985 from "module_15985" /* 15985 */;
import _modDef15992 from "module_15992" /* 15992 */;
import _modDef16001 from "module_16001" /* 16001 */;
import _modDef16013 from "module_16013" /* 16013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef4913, _modDef4915, _modDef15992, _modDef16013, _modDef16001, _modDef15985, _modDef15983];
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
        const obj = { url, rejectWithError: true };
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
      const obj = { url, rejectWithError: true };
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
