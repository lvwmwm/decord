// Module ID: 10744
// Function ID: 83605
// Name: UserSettingsVoiceOutputOptions
// Dependencies: [31, 27, 4149, 1194, 4177, 4191, 33, 4130, 566, 44, 8882, 10738, 1212, 5165, 10745, 2]
// Exports: default

// Module 10744 (UserSettingsVoiceOutputOptions)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ slider: { marginTop: 4 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  const tmp = callback2();
  let obj = stateFromStores1(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getOutputVolume());
  let obj1 = stateFromStores1(566);
  const items1 = [_isNativeReflectConstruct, closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const lastActiveStream = outer1_5.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== outer1_6.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let obj2 = stateFromStores1(566);
  const items2 = [closure_7];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = outer1_7.getLocalVolume(stateFromStores1.ownerId, outer1_8.STREAM);
    }
    return num;
  });
  const callback = React.useCallback((volume) => {
    outer1_1(outer1_2[9])(null != stateFromStores1, "Can not set stream volume without active stream");
    outer1_1(outer1_2[10]).setLocalVolume(stateFromStores1.ownerId, volume, outer1_8.STREAM);
  }, items3);
  obj = {};
  const intl = stateFromStores1(1212).intl;
  obj.title = intl.string(stateFromStores1(1212).t.UXxPGB);
  obj.hasIcons = false;
  obj = {};
  const intl2 = stateFromStores1(1212).intl;
  obj.label = intl2.string(stateFromStores1(1212).t.xPHVBs);
  obj1 = { style: tmp.slider, children: callback(importDefault(10745), obj2) };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(closure_45) {
      return outer1_1(outer1_2[10]).setOutputVolume(closure_45);
    }
  };
  obj.subLabel = callback(View, obj1);
  const items4 = [callback(stateFromStores1(5165).TableRow, obj), ];
  let tmp7 = null != stateFromStores1;
  if (tmp7) {
    const obj3 = {};
    const intl3 = stateFromStores1(1212).intl;
    obj3.label = intl3.string(stateFromStores1(1212).t.pEAl4b);
    const obj4 = { style: tmp.slider };
    const obj5 = { value: stateFromStores2, onValueChange: callback };
    obj4.children = callback(importDefault(10745), obj5);
    obj3.subLabel = callback(View, obj4);
    tmp7 = callback(stateFromStores1(5165).TableRow, obj3);
  }
  items4[1] = tmp7;
  obj.children = items4;
  return closure_10(stateFromStores1(10738).UserSettingsTableRowGroup, obj);
};
