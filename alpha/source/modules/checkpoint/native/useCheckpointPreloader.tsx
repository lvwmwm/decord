// Module ID: 13688
// Function ID: 13689
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13421, 5160, 5164, 5166, 13619, 6096, 13640, 13634, 13630, 13665, 6092, 6095, 6098, 6101, 6104, 6107, 13443, 13441, 13689, 1282, 2]
// Exports: default

// Module 13688 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5160 from "module_5160" /* 5160 */;
import _modDef5164 from "module_5164" /* 5164 */;
import _modDef5166 from "module_5166" /* 5166 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6095 from "module_6095" /* 6095 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _modDef6098 from "module_6098" /* 6098 */;
import _modDef6101 from "module_6101" /* 6101 */;
import _modDef6104 from "module_6104" /* 6104 */;
import _modDef6107 from "module_6107" /* 6107 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import _modDef13441 from "module_13441" /* 13441 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13619 from "module_13619" /* 13619 */;
import _modDef13630 from "module_13630" /* 13630 */;
import _modDef13634 from "module_13634" /* 13634 */;
import _modDef13640 from "module_13640" /* 13640 */;
import _modDef13665 from "module_13665" /* 13665 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5160, _modDef5164, _modDef5166, _modDef13619, _modDef6096, _modDef13640, _modDef13634, _modDef13630, _modDef13665, _modDef6092, _modDef6095, _modDef6098, _modDef6101, _modDef6104, _modDef6107, _modDef13443, _modDef13441];
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
