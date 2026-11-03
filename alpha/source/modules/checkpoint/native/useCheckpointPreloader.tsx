// Module ID: 13834
// Function ID: 13835
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13571, 5283, 5287, 5289, 13774, 6216, 13795, 13789, 13785, 13810, 6212, 6215, 6218, 6221, 6224, 6227, 13596, 13594, 13835, 1282, 2]
// Exports: default

// Module 13834 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5283 from "module_5283" /* 5283 */;
import _modDef5287 from "module_5287" /* 5287 */;
import _modDef5289 from "module_5289" /* 5289 */;
import _modDef6212 from "module_6212" /* 6212 */;
import _modDef6215 from "module_6215" /* 6215 */;
import _modDef6216 from "module_6216" /* 6216 */;
import _modDef6218 from "module_6218" /* 6218 */;
import _modDef6221 from "module_6221" /* 6221 */;
import _modDef6224 from "module_6224" /* 6224 */;
import _modDef6227 from "module_6227" /* 6227 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import _modDef13594 from "module_13594" /* 13594 */;
import _modDef13596 from "module_13596" /* 13596 */;
import _modDef13774 from "module_13774" /* 13774 */;
import _modDef13785 from "module_13785" /* 13785 */;
import _modDef13789 from "module_13789" /* 13789 */;
import _modDef13795 from "module_13795" /* 13795 */;
import _modDef13810 from "module_13810" /* 13810 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5283, _modDef5287, _modDef5289, _modDef13774, _modDef6216, _modDef13795, _modDef13789, _modDef13785, _modDef13810, _modDef6212, _modDef6215, _modDef6218, _modDef6221, _modDef6224, _modDef6227, _modDef13596, _modDef13594];
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
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
};
