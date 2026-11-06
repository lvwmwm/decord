// Module ID: 13910
// Function ID: 13911
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13643, 5306, 5310, 5312, 13848, 6253, 13869, 13863, 13859, 13885, 6249, 6252, 6255, 6258, 6261, 6264, 13670, 13668, 13911, 1282, 2]
// Exports: default

// Module 13910 (useCheckpointPreloader)
import react2 from "react" /* 19 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5306 from "module_5306" /* 5306 */;
import _modDef5310 from "module_5310" /* 5310 */;
import _modDef5312 from "module_5312" /* 5312 */;
import _modDef6249 from "module_6249" /* 6249 */;
import _modDef6252 from "module_6252" /* 6252 */;
import _modDef6253 from "module_6253" /* 6253 */;
import _modDef6255 from "module_6255" /* 6255 */;
import _modDef6258 from "module_6258" /* 6258 */;
import _modDef6261 from "module_6261" /* 6261 */;
import _modDef6264 from "module_6264" /* 6264 */;
import CheckpointStore from "CheckpointStore" /* 13643 */;
import _modDef13668 from "module_13668" /* 13668 */;
import _modDef13670 from "module_13670" /* 13670 */;
import _modDef13848 from "module_13848" /* 13848 */;
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13863 from "module_13863" /* 13863 */;
import _modDef13869 from "module_13869" /* 13869 */;
import _modDef13885 from "module_13885" /* 13885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap;

const useEffect = react2.useEffect;
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const items = [_modDef5306, _modDef5310, _modDef5312, _modDef13848, _modDef6253, _modDef13869, _modDef13863, _modDef13859, _modDef13885, _modDef6249, _modDef6252, _modDef6255, _modDef6258, _modDef6261, _modDef6264, _modDef13670, _modDef13668];
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
