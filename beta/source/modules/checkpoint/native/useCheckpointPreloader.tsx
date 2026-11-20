// Module ID: 14549
// Function ID: 14550
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 14255, 5444, 5448, 5450, 14270, 6392, 6395, 6398, 6401, 6404, 6407, 14265, 14494, 14491, 14497, 14520, 14294, 6396, 14511, 14504, 14483, 14527, 6397, 14512, 14505, 14484, 14528, 14550, 1285, 2]
// Exports: default

// Module 14549 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef5444 from "module_5444" /* 5444 */;
import _modDef5448 from "module_5448" /* 5448 */;
import _modDef5450 from "module_5450" /* 5450 */;
import _modDef6392 from "module_6392" /* 6392 */;
import _modDef6395 from "module_6395" /* 6395 */;
import _modDef6396 from "module_6396" /* 6396 */;
import _modDef6397 from "module_6397" /* 6397 */;
import _modDef6398 from "module_6398" /* 6398 */;
import _modDef6401 from "module_6401" /* 6401 */;
import _modDef6404 from "module_6404" /* 6404 */;
import _modDef6407 from "module_6407" /* 6407 */;
import CheckpointStore2 from "CheckpointStore" /* 14255 */;
import _modDef14265 from "module_14265" /* 14265 */;
import _modDef14270 from "module_14270" /* 14270 */;
import CheckpointSounds from "CheckpointSounds" /* 14294 */;
import _modDef14483 from "module_14483" /* 14483 */;
import _modDef14484 from "module_14484" /* 14484 */;
import _modDef14491 from "module_14491" /* 14491 */;
import _modDef14494 from "module_14494" /* 14494 */;
import _modDef14497 from "module_14497" /* 14497 */;
import _modDef14504 from "module_14504" /* 14504 */;
import _modDef14505 from "module_14505" /* 14505 */;
import _modDef14511 from "module_14511" /* 14511 */;
import _modDef14512 from "module_14512" /* 14512 */;
import _modDef14520 from "module_14520" /* 14520 */;
import _modDef14527 from "module_14527" /* 14527 */;
import _modDef14528 from "module_14528" /* 14528 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let items = [_modDef5444, _modDef5448, _modDef5450, _modDef14270, _modDef6392, _modDef6395, _modDef6398, _modDef6401, _modDef6404, _modDef6407, _modDef14265, _modDef14494, _modDef14491, _modDef14497, _modDef14520, ...CheckpointSounds.CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6396, _modDef14511, _modDef14504, _modDef14483, _modDef14527];
const items2 = [_modDef6397, _modDef14512, _modDef14505, _modDef14484, _modDef14528];
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
  let closure_0;
  let closure_1;
  let closure_2;
  let compactAssets;
  let tmp4;
  let obj = react;
  _require = react.useRef(0);
  dependencyMap = react.useRef(true);
  const obj2 = require("useMaybeFetchCheckpointData");
  const maybeFetchCheckpointData = obj2.useMaybeFetchCheckpointData();
  let tmp2 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  _slicedToArray = tmp2;
  const tmp3 = _slicedToArray(obj.useState(false), 2);
  [tmp4, react] = tmp3;
  items = [tmp2];
  const effect = obj.useEffect(() => {
    function handleSettled() {
      if (handleSettled.current) {
        items.current = items.current + 1;
        if (items.current === items.length) {
          react(true);
        }
      }
    }
    const tmp2 = closure_2;
    if (tmp2) {
      items = [];
      const tmp4 = compactAssets.compactAssets ? items2 : items1;
      HermesBuiltin.arraySpread(items, tmp4, HermesBuiltin.arraySpread(items, closure_1_6, 0));
      const item = items.forEach((url) => {
        const HTTP = HTTPUtils.HTTP;
        const obj = { url, binary: true, rejectWithError: true };
        const value = HTTP.get(obj);
        return value.then(handleSettled, handleSettled);
      });
    }
  }, items);
  const effect1 = obj.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  if (tmp4) {
    tmp4 = tmp2;
  }
  return tmp4;
};
