// Module ID: 13653
// Function ID: 13654
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13386, 5155, 5159, 5161, 13582, 6091, 13603, 13597, 13593, 13630, 6087, 6090, 6093, 6096, 6099, 6102, 13406, 13404, 13654, 1283, 2]
// Exports: default

// Module 13653 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import _modDef5155 from "module_5155" /* 5155 */;
import _modDef5159 from "module_5159" /* 5159 */;
import _modDef5161 from "module_5161" /* 5161 */;
import _modDef6087 from "module_6087" /* 6087 */;
import _modDef6090 from "module_6090" /* 6090 */;
import _modDef6091 from "module_6091" /* 6091 */;
import _modDef6093 from "module_6093" /* 6093 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _modDef6099 from "module_6099" /* 6099 */;
import _modDef6102 from "module_6102" /* 6102 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import _modDef13404 from "module_13404" /* 13404 */;
import _modDef13406 from "module_13406" /* 13406 */;
import _modDef13582 from "module_13582" /* 13582 */;
import _modDef13593 from "module_13593" /* 13593 */;
import _modDef13597 from "module_13597" /* 13597 */;
import _modDef13603 from "module_13603" /* 13603 */;
import _modDef13630 from "module_13630" /* 13630 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5155, _modDef5159, _modDef5161, _modDef13582, _modDef6091, _modDef13603, _modDef13597, _modDef13593, _modDef13630, _modDef6087, _modDef6090, _modDef6093, _modDef6096, _modDef6099, _modDef6102, _modDef13406, _modDef13404];
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
