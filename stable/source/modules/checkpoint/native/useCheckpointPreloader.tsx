// Module ID: 13967
// Function ID: 13968
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13700, 5308, 5312, 5314, 13905, 6260, 13926, 13920, 13916, 13942, 6256, 6259, 6262, 6265, 6268, 6271, 13727, 13725, 13968, 1282, 2]
// Exports: default

// Module 13967 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5308 from "module_5308" /* 5308 */;
import _modDef5312 from "module_5312" /* 5312 */;
import _modDef5314 from "module_5314" /* 5314 */;
import _modDef6256 from "module_6256" /* 6256 */;
import _modDef6259 from "module_6259" /* 6259 */;
import _modDef6260 from "module_6260" /* 6260 */;
import _modDef6262 from "module_6262" /* 6262 */;
import _modDef6265 from "module_6265" /* 6265 */;
import _modDef6268 from "module_6268" /* 6268 */;
import _modDef6271 from "module_6271" /* 6271 */;
import CheckpointStore from "CheckpointStore" /* 13700 */;
import _modDef13725 from "module_13725" /* 13725 */;
import _modDef13727 from "module_13727" /* 13727 */;
import _modDef13905 from "module_13905" /* 13905 */;
import _modDef13916 from "module_13916" /* 13916 */;
import _modDef13920 from "module_13920" /* 13920 */;
import _modDef13926 from "module_13926" /* 13926 */;
import _modDef13942 from "module_13942" /* 13942 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5308, _modDef5312, _modDef5314, _modDef13905, _modDef6260, _modDef13926, _modDef13920, _modDef13916, _modDef13942, _modDef6256, _modDef6259, _modDef6262, _modDef6265, _modDef6268, _modDef6271, _modDef13727, _modDef13725];
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
