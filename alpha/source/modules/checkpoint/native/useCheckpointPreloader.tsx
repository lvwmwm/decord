// Module ID: 13920
// Function ID: 13921
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13656, 5284, 5288, 5290, 13860, 6231, 13881, 13875, 13871, 13896, 6227, 6230, 6233, 6236, 6239, 6242, 13683, 13681, 13921, 1282, 2]
// Exports: default

// Module 13920 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5284 from "module_5284" /* 5284 */;
import _modDef5288 from "module_5288" /* 5288 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6231 from "module_6231" /* 6231 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6239 from "module_6239" /* 6239 */;
import _modDef6242 from "module_6242" /* 6242 */;
import CheckpointStore from "CheckpointStore" /* 13656 */;
import _modDef13681 from "module_13681" /* 13681 */;
import _modDef13683 from "module_13683" /* 13683 */;
import _modDef13860 from "module_13860" /* 13860 */;
import _modDef13871 from "module_13871" /* 13871 */;
import _modDef13875 from "module_13875" /* 13875 */;
import _modDef13881 from "module_13881" /* 13881 */;
import _modDef13896 from "module_13896" /* 13896 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5284, _modDef5288, _modDef5290, _modDef13860, _modDef6231, _modDef13881, _modDef13875, _modDef13871, _modDef13896, _modDef6227, _modDef6230, _modDef6233, _modDef6236, _modDef6239, _modDef6242, _modDef13683, _modDef13681];
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
