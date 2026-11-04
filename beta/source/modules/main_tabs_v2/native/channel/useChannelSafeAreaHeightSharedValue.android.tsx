// Module ID: 11238
// Function ID: 11239
// Name: useChannelSafeAreaHeightSharedValue
// Dependencies: [19, 1625, 5596, 575, 11239, 11244, 11246, 5209, 11247, 5095, 11248, 5637, 11249, 1623, 2]
// Exports: default, useChannelSafeAreaRestingHeight

// Module 11238 (useChannelSafeAreaHeightSharedValue)
import nativeDefault from "native" /* 575 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useToken from "useToken" /* 5596 */;
import spring from "spring" /* 5637 */;
import useChannelDockHeightDefault from "useChannelDockHeight" /* 11239 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11249 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let closure_4 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{dockHeightValue,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;const dockSpace=dockHeightValue.get();function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom,dockSpace);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  let closure_0;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[5])();
  _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[6])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  let obj = require("useKeyboardType");
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const obj2 = require("useKeyboardType");
  const keyboardWillOpenSharedValue = obj2.useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[8])().minimum;
  const obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue(minimum);
  let result = sharedValue.set(minimum);
  const obj5 = require("useToken");
  const token = obj5.useToken(keyboardOpenOrOpening(keyboardOpenedHeight[3]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmp7 = keyboardOpenOrOpening(keyboardOpenedHeight[4])();
  let closure_7 = tmp7;
  const obj6 = require("ReanimatedRexport");
  const sharedValue1 = obj6.useSharedValue(tmp7);
  const tmp9 = keyboardOpenOrOpening(keyboardOpenedHeight[10])();
  let closure_9 = tmp9;
  const items = [tmp7, sharedValue1, tmp9];
  const effect = keyboardTypeSharedValue.useEffect(() => {
    let withSpringResult;
    set = sharedValue1.set;
    if (closure_9) {
      const obj = spring;
      withSpringResult = obj.withSpring(closure_7, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
    } else {
      withSpringResult = closure_7;
    }
    const result = set(withSpringResult);
  }, items);
  const fn = function p() {
    const value = sharedValue1.get();
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let bound;
        const value3 = keyboardTypeSharedValue.get();
        if (value3 === KeyboardTypes.KeyboardTypes.SYSTEM) {
          const _Math = Math;
          bound = Math.max(closure_0.get().bottom, token, value);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    let value4 = keyboardOpenedHeight.get();
    if (value4 <= 0) {
      const _Math2 = Math;
      value4 = Math.max(closure_0.get().bottom, token, value);
    }
    return value4;
  };
  const obj7 = require("ReanimatedRexport");
  fn.__closure = { dockHeightValue: sharedValue1, chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__workletHash = 7676113890874;
  fn.__initData = keyboardWillOpenSharedValue;
  ({ dockHeightValue: sharedValue1, chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue });
  return obj7.useDerivedValue(fn);
};
export function useChannelSafeAreaRestingHeight() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(bottom, token, useChannelDockHeightDefault());
}
