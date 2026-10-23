// Module ID: 12995
// Function ID: 12996
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12912, 5110, 5114, 5116, 12926, 8627, 12945, 12936, 12941, 12972, 8623, 8626, 8629, 8632, 8635, 8638, 12922, 12920, 558, 576, 12996, 1297, 2]

// Module 12995 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5110 from "module_5110" /* 5110 */;
import _modDef5114 from "module_5114" /* 5114 */;
import _modDef5116 from "module_5116" /* 5116 */;
import _modDef8623 from "module_8623" /* 8623 */;
import _modDef8626 from "module_8626" /* 8626 */;
import _modDef8627 from "module_8627" /* 8627 */;
import _modDef8629 from "module_8629" /* 8629 */;
import _modDef8632 from "module_8632" /* 8632 */;
import _modDef8635 from "module_8635" /* 8635 */;
import _modDef8638 from "module_8638" /* 8638 */;
import CheckpointStore from "CheckpointStore" /* 12912 */;
import _modDef12920 from "module_12920" /* 12920 */;
import _modDef12922 from "module_12922" /* 12922 */;
import _modDef12926 from "module_12926" /* 12926 */;
import _modDef12936 from "module_12936" /* 12936 */;
import _modDef12941 from "module_12941" /* 12941 */;
import _modDef12945 from "module_12945" /* 12945 */;
import _modDef12972 from "module_12972" /* 12972 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5110, _modDef5114, _modDef5116, _modDef12926, _modDef8627, _modDef12945, _modDef12936, _modDef12941, _modDef12972, _modDef8623, _modDef8626, _modDef8629, _modDef8632, _modDef8635, _modDef8638, _modDef12922, _modDef12920];
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
