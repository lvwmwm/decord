// Module ID: 10635
// Function ID: 82923
// Name: nativeEventEmitter
// Dependencies: [31, 27, 3823, 4143, 9547, 1348, 4202, 33, 8934, 566, 10215, 4341, 1212, 10636, 3991, 10631, 2]
// Exports: default, useGlobalStatusIndicatorHeightSharedValue

// Module 10635 (nativeEventEmitter)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let NativeEventEmitter;
let closure_12;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_4, StyleSheet: closure_5, TouchableWithoutFeedback: closure_6, NativeEventEmitter } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
const nativeEventEmitter = new NativeEventEmitter(get_ActivityIndicator.NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  onPress = onPress.onPress;
  let openVoice;
  let callback;
  let closure_6;
  const tmp = importDefault(stateFromStores[8])();
  importDefault = tmp;
  let obj = onPress(stateFromStores[9]);
  const items = [closure_11];
  const items1 = [tmp];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (null != tmp) {
      channelId = tmp.channelId;
    }
    if (null == channelId) {
      channelId = outer1_11.getChannelId();
    }
    return channelId;
  }, items1);
  const items2 = [closure_10];
  const items3 = [stateFromStores];
  const stateFromStores1 = onPress(stateFromStores[9]).useStateFromStores(items2, () => outer1_10.getChannel(stateFromStores), items3);
  const obj2 = onPress(stateFromStores[9]);
  const voiceChatNavigationContext = onPress(stateFromStores[10]).useVoiceChatNavigationContext();
  openVoice = undefined;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (outer1_8.getChatOpen(stateFromStores1.id)) {
          openVoice();
        }
        if (null != onPress) {
          onPress();
        }
      }
      const result = onPress(stateFromStores[11]).navigateToVoiceChannel(stateFromStores1, "RTC Panel");
      const obj = onPress(stateFromStores[11]);
    }
  }, items4);
  closure_6 = stateFromStores1.useRef(callback);
  const effect = stateFromStores1.useEffect(() => {
    closure_6.current = callback;
  });
  const items5 = [stateFromStores];
  const effect1 = stateFromStores1.useEffect(() => {
    let closure_0 = outer1_15.addListener("StatusBarTapped", () => {
      outer1_6.current();
    });
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items5);
  obj = {};
  let str = "text";
  if (null != stateFromStores1) {
    str = "button";
  }
  obj.accessibilityRole = str;
  let stringResult;
  if (null != stateFromStores1) {
    const intl = onPress(stateFromStores[12]).intl;
    stringResult = intl.string(onPress(stateFromStores[12]).t.GaCMgX);
  }
  obj.accessibilityHint = stringResult;
  obj.onPress = callback;
  obj = { children: callback(importDefault(stateFromStores[13]), {}) };
  obj.children = callback(openVoice, obj);
  return callback(closure_6, obj);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default function GlobalStatusIndicator(children) {
  children = children.children;
  let flag = children.showWhenParticipantOnScreen;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.forceHide;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = children.onPress;
  let height;
  let isVisible;
  let c5;
  const globalStatusIndicatorState = children(onPress[15]).useGlobalStatusIndicatorState(flag);
  let obj = children(onPress[15]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = children(onPress[9]).useStateFromStores(items, () => null != outer1_7.getContent());
  const obj2 = children(onPress[9]);
  let items1 = [closure_9];
  height = globalStatusIndicatorState.height;
  isVisible = globalStatusIndicatorState.isVisible;
  const stateFromStores1 = children(onPress[9]).useStateFromStores(items1, () => outer1_9.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  let tmp4 = stateFromStores;
  if (!stateFromStores) {
    tmp4 = stateFromStores1;
  }
  c5 = tmp4;
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return height.useMemo(() => {
    let obj = {};
    obj = {};
    let str;
    if (_undefined) {
      str = "no-hide-descendants";
    }
    obj.importantForAccessibility = str;
    obj.accessibilityElementsHidden = _undefined;
    const items = [_undefined.absoluteFill, ];
    obj = {};
    let num = 0;
    if (!flag2) {
      num = height;
    }
    obj.marginTop = num;
    obj.overflow = "hidden";
    items[1] = obj;
    obj.style = items;
    obj.children = children;
    const items1 = [outer1_12(isVisible, obj), ];
    let tmp5 = null;
    if (isVisible) {
      const obj1 = { onPress };
      tmp5 = outer1_12(outer1_16, obj1);
    }
    items1[1] = tmp5;
    obj.children = items1;
    return outer1_14(outer1_13, obj);
  }, items2);
};
export const useGlobalStatusIndicatorHeightSharedValue = function useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState) {
  const _require = globalStatusIndicatorState;
  const sharedValue = _require(3991).useSharedValue(globalStatusIndicatorState.height);
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(globalStatusIndicatorState.height);
  }, items);
  return sharedValue;
};
