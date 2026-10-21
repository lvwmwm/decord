// Module ID: 12917
// Function ID: 12918
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12843, 5094, 5098, 5100, 12857, 12904, 12873, 12867, 12869, 12897, 8601, 8602, 8603, 8604, 8605, 8606, 12853, 12851, 558, 576, 12918, 1297, 2]

// Module 12917 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5094 from "module_5094" /* 5094 */;
import _modDef5098 from "module_5098" /* 5098 */;
import _modDef5100 from "module_5100" /* 5100 */;
import _modDef8601 from "module_8601" /* 8601 */;
import _modDef8602 from "module_8602" /* 8602 */;
import _modDef8603 from "module_8603" /* 8603 */;
import _modDef8604 from "module_8604" /* 8604 */;
import _modDef8605 from "module_8605" /* 8605 */;
import _modDef8606 from "module_8606" /* 8606 */;
import CheckpointStore from "CheckpointStore" /* 12843 */;
import _modDef12851 from "module_12851" /* 12851 */;
import _modDef12853 from "module_12853" /* 12853 */;
import _modDef12857 from "module_12857" /* 12857 */;
import _modDef12867 from "module_12867" /* 12867 */;
import _modDef12869 from "module_12869" /* 12869 */;
import _modDef12873 from "module_12873" /* 12873 */;
import _modDef12897 from "module_12897" /* 12897 */;
import _modDef12904 from "module_12904" /* 12904 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5094, _modDef5098, _modDef5100, _modDef12857, _modDef12904, _modDef12873, _modDef12867, _modDef12869, _modDef12897, _modDef8601, _modDef8602, _modDef8603, _modDef8604, _modDef8605, _modDef8606, _modDef12853, _modDef12851];
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
