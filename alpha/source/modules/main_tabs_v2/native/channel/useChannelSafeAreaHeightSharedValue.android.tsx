// Module ID: 11426
// Function ID: 11427
// Name: useChannelSafeAreaHeightSharedValue
// Dependencies: [19, 1627, 5732, 575, 11427, 11432, 11434, 5333, 11435, 1652, 11436, 5771, 11437, 1625, 2]
// Exports: default, useChannelSafeAreaRestingHeight

// Module 11426 (useChannelSafeAreaHeightSharedValue)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useToken from "useToken" /* 5732 */;
import spring_spring from "spring/spring" /* 5771 */;
import useChannelDockHeightDefault from "useChannelDockHeight" /* 11427 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11437 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let closure_4 = { code: "(function useChannelSafeAreaHeightSharedValueAndroidTsx1(){let[dockHeightValue,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV]=this.__closure;const dockSpace=dockHeightValue.get();function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom,dockSpace);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  let closure_0;
  let closure_2;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  let sharedValue1;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  const tmp = sharedValue1(11432)();
  ({ keyboardOpenOrOpening, keyboardOpenedHeight } = sharedValue1(11434)());
  const tmp2 = sharedValue1(11434)();
  let obj = require("useKeyboardType");
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const obj2 = require("useKeyboardType");
  const keyboardWillOpenSharedValue = obj2.useKeyboardWillOpenSharedValue();
  const minimum = sharedValue1(11435)().minimum;
  const obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(minimum);
  let result = sharedValue.set(minimum);
  const obj5 = require("useToken");
  const token = obj5.useToken(sharedValue1(575).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmp7 = sharedValue1(11427)();
  _require = tmp7;
  const obj6 = require("module_1652");
  sharedValue1 = obj6.useSharedValue(tmp7);
  const tmp9 = sharedValue1(11436)();
  dependencyMap = tmp9;
  const items = [tmp7, sharedValue1, tmp9];
  const effect = react.useEffect(() => {
    let withSpringResult;
    set = sharedValue1.set;
    if (closure_2) {
      const obj = spring_spring;
      withSpringResult = obj.withSpring(closure_0, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
    } else {
      withSpringResult = closure_0;
    }
    const result = set(withSpringResult);
  }, items);
  const items1 = [closure_4, sharedValue1, token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, tmp, keyboardTypeSharedValue, , ];
  const useDerivedValue = require("module_1652").useDerivedValue;
  const tmp11 = require("module_1652");
  items1[8] = require("KeyboardTypes").KeyboardTypes;
  items1[9] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  function useChannelSafeAreaHeightSharedValueAndroidTsx1() {
    const value = _undefined.get();
    if (!_undefined2.get()) {
      if (!_undefined3.get()) {
        let bound;
        if (_undefined6.get() === _undefined7.SYSTEM) {
          const _Math = Math;
          bound = Math.max(_undefined5.get().bottom, c1, value);
        } else {
          bound = _undefined8.get();
        }
        return bound;
      }
    }
    let value2 = _undefined4.get();
    if (value2 <= 0) {
      const _Math2 = Math;
      value2 = Math.max(_undefined5.get().bottom, c1, value);
    }
    return value2;
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__closure = items2;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__workletHash = 15573495853475;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__initData = tmp12;
  return useDerivedValue(useChannelSafeAreaHeightSharedValueAndroidTsx1);
};
export function useChannelSafeAreaRestingHeight() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(bottom, token, useChannelDockHeightDefault());
}
