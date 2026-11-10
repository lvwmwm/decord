// Module ID: 13890
// Function ID: 13891
// Name: useCheckpointCharacterOutfitPreload
// Dependencies: [32, 19, 13884, 2]
// Exports: useCheckpointCharacterOutfitPreload

// Module 13890 (useCheckpointCharacterOutfitPreload)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterOutfitPreload.tsx");

export function useCheckpointCharacterOutfitPreload(arg0) {
  let closure_2;
  let first;
  let items;
  let requestedDataBinding;
  let visibleDataBinding;
  ({ visibleDataBinding, requestedDataBinding } = arg0);
  _require = undefined;
  let checkpointCharacterOutfitImageProperty;
  _slicedToArray = undefined;
  visibleDataBinding = undefined;
  let obj = visibleDataBinding;
  [first, _require] = visibleDataBinding.useState({});
  const obj2 = require("CheckpointCharacterDataBinding");
  checkpointCharacterOutfitImageProperty = obj2.getCheckpointCharacterOutfitImageProperty(requestedDataBinding.outfitID);
  let tmp4;
  if (null != checkpointCharacterOutfitImageProperty) {
    tmp4 = requestedDataBinding[checkpointCharacterOutfitImageProperty];
  }
  _slicedToArray = tmp4;
  let tmp5 = null == checkpointCharacterOutfitImageProperty;
  if (!tmp5) {
    let tmp6;
    if (visibleDataBinding != null) {
      tmp6 = visibleDataBinding[checkpointCharacterOutfitImageProperty];
    }
    tmp5 = tmp6 === tmp4;
  }
  if (!tmp5) {
    tmp5 = first[checkpointCharacterOutfitImageProperty] === tmp4;
  }
  if (visibleDataBinding == null) {
    visibleDataBinding = requestedDataBinding;
  }
  const obj3 = {
    dataBinding: obj.useMemo(() => {
      if (null != checkpointCharacterOutfitImageProperty) {
        let obj;
        if (visibleDataBinding[checkpointCharacterOutfitImageProperty] !== closure_2) {
          obj = {};
          const merged = Object.assign(tmp2);
          obj[checkpointCharacterOutfitImageProperty] = tmp3;
        }
        return obj;
      }
      obj = visibleDataBinding;
    }, items),
    isOutfitPreloaded: tmp5,
    onDataBindingChange: obj.useMemo(() => {
      let obj = {};
      const prop = closure_0(checkpointCharacterOutfitImageProperty[2]).CHECKPOINT_CHARACTER_OUTFIT_IMAGE_PROPERTIES;
      const item = prop.forEach((item) => {
        closure_0 = item;
        obj[item] = (arg0) => {
          closure_0 = arg0;
          const tmp = closure_0((arg0) => {
            let tmp3 = arg0;
            if (arg0[closure_0] !== closure_0) {
              obj = {};
              const merged = Object.assign(arg0);
              obj[tmp] = tmp2;
              tmp3 = obj;
            }
            return tmp3;
          });
        };
      });
      return obj;
    }, [])
  };
  items = [visibleDataBinding, checkpointCharacterOutfitImageProperty, tmp4];
  return obj3;
}
