// Module ID: 13420
// Function ID: 13421
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 13119, 5448, 5452, 5454, 13134, 6400, 6403, 6406, 6409, 6412, 6415, 13129, 13357, 13354, 13362, 13386, 13157, 6404, 13376, 13369, 13346, 13393, 6405, 13377, 13370, 13347, 13394, 13421, 1285, 2]
// Exports: default

// Module 13420 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef5448 from "module_5448" /* 5448 */;
import _modDef5452 from "module_5452" /* 5452 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef6400 from "module_6400" /* 6400 */;
import _modDef6403 from "module_6403" /* 6403 */;
import _modDef6404 from "module_6404" /* 6404 */;
import _modDef6405 from "module_6405" /* 6405 */;
import _modDef6406 from "module_6406" /* 6406 */;
import _modDef6409 from "module_6409" /* 6409 */;
import _modDef6412 from "module_6412" /* 6412 */;
import _modDef6415 from "module_6415" /* 6415 */;
import CheckpointStore2 from "CheckpointStore" /* 13119 */;
import _modDef13129 from "module_13129" /* 13129 */;
import _modDef13134 from "module_13134" /* 13134 */;
import CheckpointSounds from "CheckpointSounds" /* 13157 */;
import _modDef13346 from "module_13346" /* 13346 */;
import _modDef13347 from "module_13347" /* 13347 */;
import _modDef13354 from "module_13354" /* 13354 */;
import _modDef13357 from "module_13357" /* 13357 */;
import _modDef13362 from "module_13362" /* 13362 */;
import _modDef13369 from "module_13369" /* 13369 */;
import _modDef13370 from "module_13370" /* 13370 */;
import _modDef13376 from "module_13376" /* 13376 */;
import _modDef13377 from "module_13377" /* 13377 */;
import _modDef13386 from "module_13386" /* 13386 */;
import _modDef13393 from "module_13393" /* 13393 */;
import _modDef13394 from "module_13394" /* 13394 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let items = [_modDef5448, _modDef5452, _modDef5454, _modDef13134, _modDef6400, _modDef6403, _modDef6406, _modDef6409, _modDef6412, _modDef6415, _modDef13129, _modDef13357, _modDef13354, _modDef13362, _modDef13386, ...CheckpointSounds.CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6404, _modDef13376, _modDef13369, _modDef13346, _modDef13393];
const items2 = [_modDef6405, _modDef13377, _modDef13370, _modDef13347, _modDef13394];
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
