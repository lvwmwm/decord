// Module ID: 10742
// Function ID: 83577
// Name: handleInputModePress
// Dependencies: [31, 27, 4177, 653, 33, 4130, 5495, 1212, 8882, 566, 10738, 5165, 4126, 5502, 10743, 2]
// Exports: default

// Module 10742 (handleInputModePress)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function handleInputModePress() {
  let obj = require(5495) /* showSimpleActionSheet */;
  obj = { key: "InputMode" };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["pS+K2L"]);
  obj.header = obj;
  const obj1 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl2.string(require(1212) /* getSystemLocale */.t.Q8gkVL);
  obj1.onPress = function onPress() {
    outer1_1(outer1_2[8]).setMode(outer1_5.PUSH_TO_TALK);
  };
  const items = [obj1, ];
  const obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.cHCEOJ);
  obj2.onPress = function onPress() {
    outer1_1(outer1_2[8]).setMode(outer1_5.VOICE_ACTIVITY);
  };
  items[1] = obj2;
  obj.options = items;
  obj.hasIcons = false;
  const result = obj.showSimpleActionSheet(obj);
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ value: { textAlign: "right" }, slider: { marginTop: 4 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceInputOptions.tsx");

export default function UserSettingsVoiceInputOptions() {
  const iter = callback3();
  let obj = inputMode(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: outer1_4.getMode(), vadThreshold: outer1_4.getModeOptions().threshold, vadAutoThreshold: outer1_4.getModeOptions().autoThreshold }));
  inputMode = stateFromStoresObject.inputMode;
  const vadAutoThreshold = stateFromStoresObject.vadAutoThreshold;
  obj = {};
  const intl = inputMode(1212).intl;
  obj.title = intl.string(inputMode(1212).t.LKCupB);
  obj.hasIcons = false;
  obj = {};
  const intl2 = inputMode(1212).intl;
  obj.label = intl2.string(inputMode(1212).t["pS+K2L"]);
  const obj1 = { style: iter.value, variant: "text-md/medium", color: "text-muted" };
  if (inputMode === InputModes.PUSH_TO_TALK) {
    const intl4 = inputMode(1212).intl;
    let stringResult = intl4.string(inputMode(1212).t.Q8gkVL);
  } else {
    const intl3 = inputMode(1212).intl;
    stringResult = intl3.string(inputMode(1212).t.cHCEOJ);
  }
  obj1.children = stringResult;
  obj.trailing = callback(inputMode(4126).Text, obj1);
  obj.onPress = handleInputModePress;
  const items1 = [callback(inputMode(5165).TableRow, obj), ];
  let tmp9 = null;
  if (inputMode !== InputModes.PUSH_TO_TALK) {
    const obj2 = {};
    const obj3 = {};
    const intl5 = inputMode(1212).intl;
    obj3.label = intl5.string(inputMode(1212).t.Z4oaN0);
    obj3.value = vadAutoThreshold;
    obj3.onValueChange = function onValueChange(autoThreshold) {
      let obj = outer1_1(outer1_2[8]);
      obj = { autoThreshold };
      return obj.setMode(inputMode, obj);
    };
    const items2 = [callback(inputMode(5502).TableSwitchRow, obj3), ];
    const obj4 = {};
    const intl6 = inputMode(1212).intl;
    obj4.label = intl6.string(inputMode(1212).t["o+2oMK"]);
    const obj5 = { style: iter.slider };
    const obj6 = {
      auto: vadAutoThreshold,
      threshold: stateFromStoresObject.vadThreshold,
      onThresholdChange(threshold) {
          let obj = outer1_1(outer1_2[8]);
          obj = { threshold };
          return obj.setMode(inputMode, obj);
        }
    };
    obj5.children = callback(importDefault(10743), obj6);
    obj4.subLabel = callback(View, obj5);
    items2[1] = callback(inputMode(5165).TableRow, obj4);
    obj2.children = items2;
    tmp9 = callback2(closure_7, obj2);
  }
  items1[1] = tmp9;
  obj.children = items1;
  return callback2(inputMode(10738).UserSettingsTableRowGroup, obj);
};
export { handleInputModePress };
