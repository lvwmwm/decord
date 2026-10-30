// Module ID: 17844
// Function ID: 17845
// Name: PinotMemberSettingState
// Dependencies: [15606, 4838, 1228, 504, 2]
// Exports: usePinotMemberSettingState

// Module 17844 (PinotMemberSettingState)
import get_initialized from "get initialized" /* 504 */;
import wrappers from "wrappers" /* 1228 */;
import PinotMemberSettingStore from "PinotMemberSettingStore" /* 15606 */;
import UserSettingDefinitions from "UserSettingDefinitions" /* 4838 */;
import size from "module_2" /* 2 */;

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
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingState.tsx");

export const PinotMemberOptedOut = defineProtoSettingResult;
export function usePinotMemberSettingState() {
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
}
