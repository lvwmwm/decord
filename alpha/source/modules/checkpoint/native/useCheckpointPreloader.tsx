// Module ID: 12726
// Function ID: 12727
// Name: useCheckpointPreloader
// Dependencies: [32, 19, 12417, 4961, 4965, 4967, 12432, 5902, 5905, 5908, 5911, 5914, 5917, 12427, 12660, 12465, 12657, 12665, 12689, 12456, 5906, 12679, 12672, 12650, 12696, 5907, 12680, 12673, 12651, 12697, 12727, 1285, 2]
// Exports: default

// Module 12726 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef4961 from "module_4961" /* 4961 */;
import _modDef4965 from "module_4965" /* 4965 */;
import _modDef4967 from "module_4967" /* 4967 */;
import _modDef5902 from "module_5902" /* 5902 */;
import _modDef5905 from "module_5905" /* 5905 */;
import _modDef5906 from "module_5906" /* 5906 */;
import _modDef5907 from "module_5907" /* 5907 */;
import _modDef5908 from "module_5908" /* 5908 */;
import _modDef5911 from "module_5911" /* 5911 */;
import _modDef5914 from "module_5914" /* 5914 */;
import _modDef5917 from "module_5917" /* 5917 */;
import CheckpointStore2 from "CheckpointStore" /* 12417 */;
import _modDef12427 from "module_12427" /* 12427 */;
import _modDef12432 from "module_12432" /* 12432 */;
import CheckpointSounds from "CheckpointSounds" /* 12456 */;
import _modDef12465 from "module_12465" /* 12465 */;
import _modDef12650 from "module_12650" /* 12650 */;
import _modDef12651 from "module_12651" /* 12651 */;
import _modDef12657 from "module_12657" /* 12657 */;
import _modDef12660 from "module_12660" /* 12660 */;
import _modDef12665 from "module_12665" /* 12665 */;
import _modDef12672 from "module_12672" /* 12672 */;
import _modDef12673 from "module_12673" /* 12673 */;
import _modDef12679 from "module_12679" /* 12679 */;
import _modDef12680 from "module_12680" /* 12680 */;
import _modDef12689 from "module_12689" /* 12689 */;
import _modDef12696 from "module_12696" /* 12696 */;
import _modDef12697 from "module_12697" /* 12697 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
let items = [_modDef4961, _modDef4965, _modDef4967, _modDef12432, _modDef5902, _modDef5905, _modDef5908, _modDef5911, _modDef5914, _modDef5917, _modDef12427, _modDef12660, _modDef12465, _modDef12657, _modDef12665, _modDef12689, ...CheckpointSounds.CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef5906, _modDef12679, _modDef12672, _modDef12650, _modDef12696];
const items2 = [_modDef5907, _modDef12680, _modDef12673, _modDef12651, _modDef12697];
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
