// Module ID: 14435
// Function ID: 14436
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 14146, 5391, 5395, 5397, 14158, 6339, 6342, 6345, 6348, 6351, 6354, 14154, 14431, 14429, 14434, 14396, 14185, 6343, 14386, 14379, 14375, 14404, 6344, 14387, 14380, 14376, 14405, 14436, 1282, 2]
// Exports: default

// Module 14435 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5391 from "module_5391" /* 5391 */;
import _modDef5395 from "module_5395" /* 5395 */;
import _modDef5397 from "module_5397" /* 5397 */;
import _modDef6339 from "module_6339" /* 6339 */;
import _modDef6342 from "module_6342" /* 6342 */;
import _modDef6343 from "module_6343" /* 6343 */;
import _modDef6344 from "module_6344" /* 6344 */;
import _modDef6345 from "module_6345" /* 6345 */;
import _modDef6348 from "module_6348" /* 6348 */;
import _modDef6351 from "module_6351" /* 6351 */;
import _modDef6354 from "module_6354" /* 6354 */;
import CheckpointStore2 from "CheckpointStore" /* 14146 */;
import _modDef14154 from "module_14154" /* 14154 */;
import _modDef14158 from "module_14158" /* 14158 */;
import CheckpointSounds from "CheckpointSounds" /* 14185 */;
import _modDef14375 from "module_14375" /* 14375 */;
import _modDef14376 from "module_14376" /* 14376 */;
import _modDef14379 from "module_14379" /* 14379 */;
import _modDef14380 from "module_14380" /* 14380 */;
import _modDef14386 from "module_14386" /* 14386 */;
import _modDef14387 from "module_14387" /* 14387 */;
import _modDef14396 from "module_14396" /* 14396 */;
import _modDef14404 from "module_14404" /* 14404 */;
import _modDef14405 from "module_14405" /* 14405 */;
import _modDef14429 from "module_14429" /* 14429 */;
import _modDef14431 from "module_14431" /* 14431 */;
import _modDef14434 from "module_14434" /* 14434 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let items = [_modDef5391, _modDef5395, _modDef5397, _modDef14158, _modDef6339, _modDef6342, _modDef6345, _modDef6348, _modDef6351, _modDef6354, _modDef14154, _modDef14431, _modDef14429, _modDef14434, _modDef14396, ...CheckpointSounds.CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6343, _modDef14386, _modDef14379, _modDef14375, _modDef14404];
const items2 = [_modDef6344, _modDef14387, _modDef14380, _modDef14376, _modDef14405];
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
