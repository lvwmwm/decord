// Module ID: 13935
// Function ID: 13936
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13668, 5276, 5280, 5282, 13873, 6228, 13894, 13888, 13884, 13910, 6224, 6227, 6230, 6233, 6236, 6239, 13695, 13693, 13936, 1282, 2]
// Exports: default

// Module 13935 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5276 from "module_5276" /* 5276 */;
import _modDef5280 from "module_5280" /* 5280 */;
import _modDef5282 from "module_5282" /* 5282 */;
import _modDef6224 from "module_6224" /* 6224 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6228 from "module_6228" /* 6228 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6239 from "module_6239" /* 6239 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import _modDef13693 from "module_13693" /* 13693 */;
import _modDef13695 from "module_13695" /* 13695 */;
import _modDef13873 from "module_13873" /* 13873 */;
import _modDef13884 from "module_13884" /* 13884 */;
import _modDef13888 from "module_13888" /* 13888 */;
import _modDef13894 from "module_13894" /* 13894 */;
import _modDef13910 from "module_13910" /* 13910 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5276, _modDef5280, _modDef5282, _modDef13873, _modDef6228, _modDef13894, _modDef13888, _modDef13884, _modDef13910, _modDef6224, _modDef6227, _modDef6230, _modDef6233, _modDef6236, _modDef6239, _modDef13695, _modDef13693];
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
