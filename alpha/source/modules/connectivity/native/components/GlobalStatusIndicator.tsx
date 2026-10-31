// Module ID: 11862
// Function ID: 11863
// Name: GlobalStatusIndicator
// Dependencies: [19, 17, 5259, 6843, 10204, 4863, 5764, 21, 11859, 504, 11006, 7939, 1113, 11863, 5095, 11857, 2]
// Exports: default, useGlobalStatusIndicatorHeightSharedValue

// Module 11862 (GlobalStatusIndicator)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetStore from "ActionSheetStore" /* 5259 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import NativeMenuStore from "NativeMenuStore" /* 10204 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId, importDefault;

let NativeEventEmitter;
let NativeModules;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
({ View: closure_4, StyleSheet: hasOwnProperty, TouchableWithoutFeedback: metroRequire, NativeEventEmitter, NativeModules } = react_native);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  let callback;
  let obj5;
  let stringResult;
  importDefault = undefined;
  let stateFromStores;
  onPress = undefined;
  let closure_6;
  const tmp2 = stateFromStores;
  const tmp = importDefault;
  const tmp3 = require("useVoiceStateForRemoteSession")();
  importDefault = tmp3;
  let obj = onPress(stateFromStores[9]);
  const items = [RTCConnectionStore];
  const items1 = [tmp3];
  stateFromStores = obj.useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    if (channelId == null) {
      channelId = RTCConnectionStore.getChannelId();
    }
    return channelId;
  }, items1);
  const items2 = [ChannelStore];
  const items3 = [stateFromStores];
  const obj2 = onPress(stateFromStores[9]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(stateFromStores), items3);
  const obj3 = onPress(stateFromStores[10]);
  const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  onPress = stateFromStores1.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (ChannelRTCStore.getChatOpen(stateFromStores1.id)) {
          tmp2();
        }
        if (onPress != null) {
          tmp8();
        }
      }
      const obj = PrivateChannelCallUtils;
      const result = obj.navigateToVoiceChannel(tmp, "RTC Panel");
    }
  }, items4);
  closure_6 = stateFromStores1.useRef(onPress);
  const effect = stateFromStores1.useEffect(() => {
    closure_6.current = current;
  });
  const items5 = [stateFromStores];
  const effect1 = stateFromStores1.useEffect(() => {
    let ref;
    let closure_0 = nativeEventEmitter.addListener("StatusBarTapped", () => {
      ref.current();
    });
    return () => {
      const obj = closure_0;
      if (null != closure_0) {
        obj.remove();
      }
    };
  }, items5);
  let str = "text";
  const tmp13 = closure_6;
  if (null != stateFromStores1) {
    str = "button";
  }
  const obj4 = { accessibilityRole: str, accessibilityHint: stringResult, onPress, children: closure_12(openVoice, obj5) };
  stringResult = undefined;
  if (null != stateFromStores1) {
    const intl = tmp4(tmp2[12]).intl;
    stringResult = intl.string(tmp4(tmp2[12]).t.GaCMgX);
  }
  obj5 = { children: closure_12(tmp(tmp2[13]), {}) };
  return closure_12(tmp13, obj4);
}
let result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default function GlobalStatusIndicator(children) {
  let content;
  let open;
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
  let accessibilityElementsHidden;
  let obj = children(onPress[15]);
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState(flag);
  let obj2 = children(onPress[9]);
  let items = [ActionSheetStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != content.getContent());
  const items1 = [NativeMenuStore];
  const height = globalStatusIndicatorState.height;
  let isVisible = globalStatusIndicatorState.isVisible;
  const obj3 = children(onPress[9]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => open.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  let tmp4 = stateFromStores || stateFromStores1;
  accessibilityElementsHidden = tmp4;
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return height.useMemo(() => {
    let items;
    let str;
    const tmp = authStore3;
    const tmp2 = map1;
    const tmp4 = React3;
    if (accessibilityElementsHidden) {
      str = "no-hide-descendants";
    }
    const obj = { importantForAccessibility: str, accessibilityElementsHidden, style: items, children };
    items = [hasOwnProperty.absoluteFill, ];
    let num = 0;
    if (!flag2) {
      num = height;
    }
    items[1] = { marginTop: num, overflow: "hidden" };
    children = [authStore2(tmp4, obj), ];
    let tmp3Result = null;
    if (isVisible) {
      const obj2 = { onPress };
      tmp3Result = tmp3(GlobalStatusIndicatorWrapper, obj2);
    }
    children[1] = tmp3Result;
    return tmp(tmp2, { children });
  }, items2);
};
export function useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState) {
  let closure_0 = globalStatusIndicatorState;
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(globalStatusIndicatorState.height);
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(styles.height);
  }, items);
  return sharedValue;
}
