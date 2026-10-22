// Module ID: 12947
// Function ID: 12948
// Name: useTraitPickerOptions
// Dependencies: [19, 1392, 12875, 558, 576, 504, 1991, 6348, 2]

// Module 12947 (useTraitPickerOptions)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6348 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12875 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTraitPickerOptions(arg0) {
  let currentUser;
  let customizationOption;
  let options;
  let savedOptionId;
  let stats;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(10);
  ({ customizationOption, options, savedOptionId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return stats.stats;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class P {
      constructor() {
        const obj = require("PremiumTypeUtils");
        return obj.isPremium(currentUser.getCurrentUser());
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    tmp9 = P;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === customizationOption) {
    if (cResult[5] === stateFromStores1) {
      if (cResult[6] === options) {
        if (cResult[7] === savedOptionId) {
          let tmp12;
          if (cResult[8] === stateFromStores) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
  }
  const tmpResult4 = CheckpointCustomizationUtils;
  const traitPickerOptions = tmpResult4.getTraitPickerOptions(customizationOption, options, stateFromStores, stateFromStores1, savedOptionId);
  cResult[4] = customizationOption;
  cResult[5] = stateFromStores1;
  cResult[6] = options;
  cResult[7] = savedOptionId;
  cResult[8] = stateFromStores;
  cResult[9] = traitPickerOptions;
  tmp12 = traitPickerOptions;
}) : (function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const options = customizationOption.options;
  const savedOptionId = customizationOption.savedOptionId;
  let stateFromStores1;
  let obj = customizationOption(options[5]);
  const items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.stats);
  const items1 = [stateFromStores];
  const obj2 = customizationOption(options[5]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = customizationOption(options[6]);
    return obj.isPremium(stateFromStores.getCurrentUser());
  });
  const items2 = [customizationOption, stateFromStores1, options, savedOptionId, stateFromStores];
  return savedOptionId.useMemo(() => {
    const obj = CheckpointCustomizationUtils;
    return obj.getTraitPickerOptions(customizationOption, options, stateFromStores, stateFromStores1, savedOptionId);
  }, items2);
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export const useTraitPickerOptions = tmp2;
