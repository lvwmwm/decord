// Module ID: 10382
// Function ID: 80055
// Name: useChannelSafeAreaHeightSharedValue
// Dependencies: []
// Exports: default

// Module 10382 (useChannelSafeAreaHeightSharedValue)
let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputFloating,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardHeight}=this.__closure;function resolveBottom(bottom){return chatInputFloating?Math.max(bottom,chatInputSpaceBottom):bottom;}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardHeight;}" };
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = importDefault(dependencyMap[0])();
  const require = tmp;
  const tmp2 = importDefault(dependencyMap[1])();
  const keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  const importDefault = keyboardOpenOrOpening;
  const keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  const dependencyMap = keyboardOpenedHeight;
  let obj = require(dependencyMap[2]);
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  let closure_3 = keyboardTypeSharedValue;
  const keyboardWillOpenSharedValue = require(dependencyMap[2]).useKeyboardWillOpenSharedValue();
  const tmp5 = importDefault(dependencyMap[3])();
  const obj2 = require(dependencyMap[2]);
  const token = require(dependencyMap[4]).useToken(importDefault(dependencyMap[5]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj3 = require(dependencyMap[4]);
  const chatInputFloating = require(dependencyMap[6]).useMobileVisualRefreshConfig({ location: "ChatInput" }).chatInputFloating;
  const obj4 = require(dependencyMap[6]);
  const fn = function o() {
    function resolveBottom(bottom) {
      let bound = bottom;
      if (closure_7) {
        const _Math = Math;
        bound = Math.max(bottom, closure_6);
      }
      return bound;
    }
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let value = keyboardTypeSharedValue.get();
        if (value === tmp(keyboardOpenedHeight[8]).KeyboardTypes.SYSTEM) {
          let bottom = resolveBottom(tmp.get().bottom);
        } else {
          bottom = keyboardOpenedHeight;
        }
        return bottom;
      }
    }
    value = keyboardOpenedHeight.get();
    if (value <= 0) {
      value = resolveBottom(tmp.get().bottom);
    }
    return value;
  };
  obj = { chatInputFloating, chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require(dependencyMap[8]).KeyboardTypes, customKeyboardHeight: tmp5 };
  fn.__closure = obj;
  fn.__workletHash = 12051290156095;
  fn.__initData = closure_3;
  return require(dependencyMap[7]).useDerivedValue(fn);
};
