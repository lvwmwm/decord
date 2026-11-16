// Module ID: 14547
// Function ID: 14548
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 14253, 5444, 5448, 5450, 14268, 6392, 6395, 6398, 6401, 6404, 6407, 14263, 14492, 14489, 14495, 14518, 14292, 6396, 14509, 14502, 14481, 14525, 6397, 14510, 14503, 14482, 14526, 14548, 1285, 2]
// Exports: default

// Module 14547 (useCheckpointPreloader)
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
import CheckpointStore2 from "CheckpointStore" /* 14253 */;
import _modDef14263 from "module_14263" /* 14263 */;
import _modDef14268 from "module_14268" /* 14268 */;
import CheckpointSounds from "CheckpointSounds" /* 14292 */;
import _modDef14481 from "module_14481" /* 14481 */;
import _modDef14482 from "module_14482" /* 14482 */;
import _modDef14489 from "module_14489" /* 14489 */;
import _modDef14492 from "module_14492" /* 14492 */;
import _modDef14495 from "module_14495" /* 14495 */;
import _modDef14502 from "module_14502" /* 14502 */;
import _modDef14503 from "module_14503" /* 14503 */;
import _modDef14509 from "module_14509" /* 14509 */;
import _modDef14510 from "module_14510" /* 14510 */;
import _modDef14518 from "module_14518" /* 14518 */;
import _modDef14525 from "module_14525" /* 14525 */;
import _modDef14526 from "module_14526" /* 14526 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let items = [_modDef5444, _modDef5448, _modDef5450, _modDef14268, _modDef6392, _modDef6395, _modDef6398, _modDef6401, _modDef6404, _modDef6407, _modDef14263, _modDef14492, _modDef14489, _modDef14495, _modDef14518, ...CheckpointSounds.CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6396, _modDef14509, _modDef14502, _modDef14481, _modDef14525];
const items2 = [_modDef6397, _modDef14510, _modDef14503, _modDef14482, _modDef14526];
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
