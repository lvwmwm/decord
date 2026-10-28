// Module ID: 13069
// Function ID: 13070
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12986, 5144, 5148, 5150, 13000, 8661, 13019, 13010, 13015, 13046, 8657, 8660, 8663, 8666, 8669, 8672, 12996, 12994, 558, 576, 13070, 1297, 2]

// Module 13069 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5144 from "module_5144" /* 5144 */;
import _modDef5148 from "module_5148" /* 5148 */;
import _modDef5150 from "module_5150" /* 5150 */;
import _modDef8657 from "module_8657" /* 8657 */;
import _modDef8660 from "module_8660" /* 8660 */;
import _modDef8661 from "module_8661" /* 8661 */;
import _modDef8663 from "module_8663" /* 8663 */;
import _modDef8666 from "module_8666" /* 8666 */;
import _modDef8669 from "module_8669" /* 8669 */;
import _modDef8672 from "module_8672" /* 8672 */;
import CheckpointStore from "CheckpointStore" /* 12986 */;
import _modDef12994 from "module_12994" /* 12994 */;
import _modDef12996 from "module_12996" /* 12996 */;
import _modDef13000 from "module_13000" /* 13000 */;
import _modDef13010 from "module_13010" /* 13010 */;
import _modDef13015 from "module_13015" /* 13015 */;
import _modDef13019 from "module_13019" /* 13019 */;
import _modDef13046 from "module_13046" /* 13046 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5144, _modDef5148, _modDef5150, _modDef13000, _modDef8661, _modDef13019, _modDef13010, _modDef13015, _modDef13046, _modDef8657, _modDef8660, _modDef8663, _modDef8666, _modDef8669, _modDef8672, _modDef12996, _modDef12994];
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
