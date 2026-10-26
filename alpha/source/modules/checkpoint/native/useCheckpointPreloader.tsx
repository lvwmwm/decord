// Module ID: 13036
// Function ID: 13037
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12953, 5112, 5116, 5118, 12967, 8629, 12986, 12977, 12982, 13013, 8625, 8628, 8631, 8634, 8637, 8640, 12963, 12961, 558, 576, 13037, 1297, 2]

// Module 13036 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5112 from "module_5112" /* 5112 */;
import _modDef5116 from "module_5116" /* 5116 */;
import _modDef5118 from "module_5118" /* 5118 */;
import _modDef8625 from "module_8625" /* 8625 */;
import _modDef8628 from "module_8628" /* 8628 */;
import _modDef8629 from "module_8629" /* 8629 */;
import _modDef8631 from "module_8631" /* 8631 */;
import _modDef8634 from "module_8634" /* 8634 */;
import _modDef8637 from "module_8637" /* 8637 */;
import _modDef8640 from "module_8640" /* 8640 */;
import CheckpointStore from "CheckpointStore" /* 12953 */;
import _modDef12961 from "module_12961" /* 12961 */;
import _modDef12963 from "module_12963" /* 12963 */;
import _modDef12967 from "module_12967" /* 12967 */;
import _modDef12977 from "module_12977" /* 12977 */;
import _modDef12982 from "module_12982" /* 12982 */;
import _modDef12986 from "module_12986" /* 12986 */;
import _modDef13013 from "module_13013" /* 13013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5112, _modDef5116, _modDef5118, _modDef12967, _modDef8629, _modDef12986, _modDef12977, _modDef12982, _modDef13013, _modDef8625, _modDef8628, _modDef8631, _modDef8634, _modDef8637, _modDef8640, _modDef12963, _modDef12961];
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
