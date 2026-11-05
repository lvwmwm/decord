// Module ID: 13934
// Function ID: 13935
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13668, 5286, 5290, 5292, 13873, 6233, 13894, 13888, 13884, 13909, 6229, 6232, 6235, 6238, 6241, 6244, 13695, 13693, 13935, 1282, 2]
// Exports: default

// Module 13934 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5286 from "module_5286" /* 5286 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef5292 from "module_5292" /* 5292 */;
import _modDef6229 from "module_6229" /* 6229 */;
import _modDef6232 from "module_6232" /* 6232 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6235 from "module_6235" /* 6235 */;
import _modDef6238 from "module_6238" /* 6238 */;
import _modDef6241 from "module_6241" /* 6241 */;
import _modDef6244 from "module_6244" /* 6244 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import _modDef13693 from "module_13693" /* 13693 */;
import _modDef13695 from "module_13695" /* 13695 */;
import _modDef13873 from "module_13873" /* 13873 */;
import _modDef13884 from "module_13884" /* 13884 */;
import _modDef13888 from "module_13888" /* 13888 */;
import _modDef13894 from "module_13894" /* 13894 */;
import _modDef13909 from "module_13909" /* 13909 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5286, _modDef5290, _modDef5292, _modDef13873, _modDef6233, _modDef13894, _modDef13888, _modDef13884, _modDef13909, _modDef6229, _modDef6232, _modDef6235, _modDef6238, _modDef6241, _modDef6244, _modDef13695, _modDef13693];
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
