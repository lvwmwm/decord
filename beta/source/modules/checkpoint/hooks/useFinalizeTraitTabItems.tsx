// Module ID: 13931
// Function ID: 13932
// Name: useFinalizeTraitTabItems
// Dependencies: [32, 19, 13668, 6566, 504, 6244, 6243, 2]
// Exports: default, useFinalizeMoreTabOption

// Module 13931 (useFinalizeTraitTabItems)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6566 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR];
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFinalizeTraitTabItems.tsx");

export default function useFinalizeTraitTabItems(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg1;
  let tmp = _require;
  items = [CheckpointStore];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const tmp3 = CheckpointStore.selectedCharacterTraits[closure_0(undefined, closure_1[5]).CheckpointTrait.OUTFIT];
    if (null != tmp3) {
      let found;
      const tmpResult = closure_0(closure_1[6]);
      if (!tmpResult.isTraitNoneOptionId(closure_0(closure_1[5]).CheckpointTrait.OUTFIT, tmp3)) {
        found = items;
      }
      return found;
    }
    found = items.filter((item) => item !== closure_1_0(closure_1_1[3]).CheckpointCustomizationOption.OUTFIT_COLOR);
  });
  let tmp3 = arg0 === require("CheckpointCustomizationUtils").CheckpointCustomizationOption.OUTFIT_COLOR && !stateFromStoresArray.includes(tmp(6566).CheckpointCustomizationOption.OUTFIT_COLOR);
  dependencyMap = tmp3;
  const items1 = [tmp3, arg1];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      closure_0(CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE);
    }
  }, items1);
  return stateFromStoresArray;
};
export const FINALIZE_TRAIT_TAB_ITEMS = items;
export function useFinalizeMoreTabOption(activeCustomizationOption) {
  let moreTabOption;
  let tmp5;
  const hasItem = items.includes(activeCustomizationOption);
  const isMoreMenuActive = !hasItem;
  [moreTabOption, tmp5] = react.useState(null);
  let tmp6 = isMoreMenuActive;
  if (!hasItem) {
    tmp6 = moreTabOption !== activeCustomizationOption;
  }
  if (tmp6) {
    tmp5(activeCustomizationOption);
  }
  return { isMoreMenuActive, moreTabOption };
}
