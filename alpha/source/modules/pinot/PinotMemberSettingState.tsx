// Module ID: 17535
// Function ID: 17536
// Name: PinotMemberSettingState
// Dependencies: [15331, 4836, 1239, 558, 576, 504, 2]

// Module 17535 (PinotMemberSettingState)
import react from "react" /* 576 */;
import wrappers from "wrappers" /* 1239 */;
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 15331 */;
import UserSettingDefinitions from "UserSettingDefinitions" /* 4836 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const defineProtoSettingResult = UserSettingDefinitions.defineProtoSetting("privacy", "swpMessagePromotionOptedOut", (value) => {
  value = undefined;
  if (value != null) {
    value = value.value;
  }
  if (value == null) {
    value = null;
  }
  return value;
}, (value) => {
  let obj2;
  if (null != value) {
    const BoolValue = wrappers.BoolValue;
    const obj = { value };
    obj2 = BoolValue.create(obj);
  }
  return obj2;
});
let c3 = defineProtoSettingResult;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotMemberSettingState() {
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(5);
  let setting = defineProtoSettingResult.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PinotMemberSettingStore];
    const fn = function n() {
      const obj = { locked: PinotMemberSettingStore.isLocked(), defaultOptedOut: PinotMemberSettingStore.defaultsToOptedOut() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  const locked = stateFromStoresObject.locked;
  let tmp10 = locked;
  if (!tmp10) {
    if (setting == null) {
      setting = tmp9;
    }
    tmp10 = setting;
  }
  if (cResult[2] === locked) {
    let tmp12;
    if (cResult[3] === tmp10) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const obj2 = { locked, optedOut: tmp10 };
  cResult[2] = locked;
  cResult[3] = tmp10;
  cResult[4] = obj2;
  tmp12 = obj2;
}) : (function usePinotMemberSettingState() {
  let setting = defineProtoSettingResult.useSetting();
  let obj = get_initialized;
  const items = [PinotMemberSettingStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { locked: PinotMemberSettingStore.isLocked(), defaultOptedOut: PinotMemberSettingStore.defaultsToOptedOut() };
    return obj;
  });
  let locked = stateFromStoresObject.locked;
  const obj2 = { locked, optedOut: locked };
  if (!locked) {
    if (setting == null) {
      setting = tmp3;
    }
    locked = setting;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingState.tsx");

export const PinotMemberOptedOut = defineProtoSettingResult;
export const usePinotMemberSettingState = tmp3;
