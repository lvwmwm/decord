// Module ID: 12972
// Function ID: 12973
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12893, 5098, 5102, 5104, 12907, 8614, 12924, 12917, 12921, 12950, 8611, 8613, 8615, 8617, 8619, 8621, 12903, 12901, 558, 576, 12973, 1297, 2]

// Module 12972 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5098 from "module_5098" /* 5098 */;
import _modDef5102 from "module_5102" /* 5102 */;
import _modDef5104 from "module_5104" /* 5104 */;
import _modDef8611 from "module_8611" /* 8611 */;
import _modDef8613 from "module_8613" /* 8613 */;
import _modDef8614 from "module_8614" /* 8614 */;
import _modDef8615 from "module_8615" /* 8615 */;
import _modDef8617 from "module_8617" /* 8617 */;
import _modDef8619 from "module_8619" /* 8619 */;
import _modDef8621 from "module_8621" /* 8621 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import _modDef12901 from "module_12901" /* 12901 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12917 from "module_12917" /* 12917 */;
import _modDef12921 from "module_12921" /* 12921 */;
import _modDef12924 from "module_12924" /* 12924 */;
import _modDef12950 from "module_12950" /* 12950 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let items = [_modDef5098, _modDef5102, _modDef5104, _modDef12907, _modDef8614, _modDef12924, _modDef12917, _modDef12921, _modDef12950, _modDef8611, _modDef8613, _modDef8615, _modDef8617, _modDef8619, _modDef8621, _modDef12903, _modDef12901];
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
