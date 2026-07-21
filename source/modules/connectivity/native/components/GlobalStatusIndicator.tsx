// Module ID: 10624
// Function ID: 82860
// Name: nativeEventEmitter
// Dependencies: []
// Exports: default, useGlobalStatusIndicatorHeightSharedValue

// Module 10624 (nativeEventEmitter)
let NativeEventEmitter;
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_4, StyleSheet: closure_5, TouchableWithoutFeedback: closure_6, NativeEventEmitter } = tmp2);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
const nativeEventEmitter = new NativeEventEmitter(tmp2.NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  onPress = onPress.onPress;
  const arg1 = onPress;
  let openVoice;
  let callback;
  let closure_6;
  const tmp = importDefault(dependencyMap[8])();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_11];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (null != tmp) {
      channelId = tmp.channelId;
    }
    if (null == channelId) {
      channelId = channelId.getChannelId();
    }
    return channelId;
  }, items1);
  const dependencyMap = stateFromStores;
  const items2 = [closure_10];
  const items3 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items2, () => channel.getChannel(stateFromStores), items3);
  const React = stateFromStores1;
  const obj2 = arg1(dependencyMap[9]);
  const voiceChatNavigationContext = arg1(dependencyMap[10]).useVoiceChatNavigationContext();
  openVoice = undefined;
  if (null != voiceChatNavigationContext) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  callback = React.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (chatOpen.getChatOpen(stateFromStores1.id)) {
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
  closure_6 = React.useRef(callback);
  const effect = React.useEffect(() => {
    closure_6.current = callback;
  });
  const items5 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    let closure_0 = closure_15.addListener("StatusBarTapped", () => {
      ref.current();
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
    const intl = arg1(dependencyMap[12]).intl;
    stringResult = intl.string(arg1(dependencyMap[12]).t.GaCMgX);
  }
  obj.accessibilityHint = stringResult;
  obj.onPress = callback;
  obj = { children: callback(importDefault(dependencyMap[13]), {}) };
  obj.children = callback(openVoice, obj);
  return callback(closure_6, obj);
}
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default function GlobalStatusIndicator(children) {
  children = children.children;
  const arg1 = children;
  let flag = children.showWhenParticipantOnScreen;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.forceHide;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  const onPress = children.onPress;
  const dependencyMap = onPress;
  let React;
  let isVisible;
  let tmp4;
  const globalStatusIndicatorState = arg1(dependencyMap[15]).useGlobalStatusIndicatorState(flag);
  const obj = arg1(dependencyMap[15]);
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => null != content.getContent());
  const obj2 = arg1(dependencyMap[9]);
  const items1 = [closure_9];
  const height = globalStatusIndicatorState.height;
  React = height;
  isVisible = globalStatusIndicatorState.isVisible;
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items1, () => open.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  tmp4 = stateFromStores;
  if (!stateFromStores) {
    tmp4 = stateFromStores1;
  }
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return React.useMemo(() => {
    let obj = {};
    obj = {};
    let str;
    if (isVisible) {
      str = "no-hide-descendants";
    }
    obj.importantForAccessibility = str;
    obj.accessibilityElementsHidden = isVisible;
    const items = [isVisible.absoluteFill, ];
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
    const items1 = [callback(isVisible, obj), ];
    let tmp5 = null;
    if (isVisible) {
      const obj1 = { onPress };
      tmp5 = callback(closure_16, obj1);
    }
    items1[1] = tmp5;
    obj.children = items1;
    return closure_14(closure_13, obj);
  }, items2);
};
export const useGlobalStatusIndicatorHeightSharedValue = function useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState) {
  const arg1 = globalStatusIndicatorState;
  const sharedValue = arg1(dependencyMap[14]).useSharedValue(globalStatusIndicatorState.height);
  const importDefault = sharedValue;
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(arg0.height);
  }, items);
  return sharedValue;
};
