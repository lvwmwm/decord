// Module ID: 14788
// Function ID: 14789
// Name: ChatLoadingIndicator
// Dependencies: [32, 19, 17, 5142, 6703, 6196, 5044, 1385, 2122, 1072, 21, 5141, 575, 6094, 6165, 2123, 504, 5761, 14789, 1652, 5378, 1113, 7121, 2]
// Exports: ChannelHeaderLoadingIndicator, useShouldChannelShowLoadingIndicator

// Module 14788 (ChatLoadingIndicator)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import Text_Text from "Text/Text" /* 5761 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6094 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6703 */;
import MessageStore from "MessageStore" /* 6196 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import UserStore from "UserStore" /* 1385 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
let _require;

let closure_14;
let closure_15;
let map1;
let size;
function openLoadingIndicatorDebugBody() {
  let paths;
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  if (isStaffResult) {
    let obj = {
      importer() {
          const promise = require("asyncRequire")(paths[14], paths.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              const obj = { title: "Chat Loading indicator", children: closure_2_13(closure_2_18, {}) };
              const merged = Object.assign(arg0);
              return closure_2_13(closure_0, obj);
            };
          });
        },
      isDismissable: true
    };
    const obj2 = actions_AlertActionCreatorsDefault;
    obj2.openLazy(obj);
  }
}
const View = react_native.View;
const AppStates = Constants.AppStates;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 }, pulse: size };
size = { height: 8, width: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_16 = createStyles.createStyles(obj);
let closure_18 = react.memo(function LoadingIndicatorDebugBody() {
  let connected;
  let items2;
  let items5;
  let items7;
  let messagesCached;
  let messagesReady;
  let str11;
  let str4;
  let str7;
  let obj = get_initialized;
  const items = [MessageStore, GatewayConnectionStore, SelectedChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      return { messagesCached: false, messagesReady: false, connected: isConnectedResult };
    } else {
      messages = messages.getMessages(channelId);
      const obj = { messagesCached: null, messagesReady: null, connected: isConnectedResult };
      ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
      return obj;
    }
  });
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  const items1 = ["messages.cached", ":", " ", , ];
  const Text = Text_Text.Text;
  let str = "text-feedback-critical";
  let str2 = "text-feedback-critical";
  const Text2 = Text_Text.Text;
  if (messagesCached) {
    str2 = "text-feedback-positive";
  }
  const obj2 = { variant: "body-md/normal", color: str2, children: str4 };
  let str3 = "false";
  str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  items1[3] = map1(Text2, obj2);
  let tmp4Result = null;
  if (messagesCached !== false) {
    const obj3 = { variant: "body-md/normal", color: "text-muted", children: items2 };
    items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    tmp4Result = tmp4(tmp(5761).Text, obj3);
  }
  items1[4] = tmp4Result;
  const items3 = [authStore3(closure_15, { children: items1 }), "\n", , , , , ];
  const items4 = ["messages.ready", ":", " ", , ];
  let str6 = str;
  const Text3 = tmp(5761).Text;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  const obj4 = { variant: "body-md/normal", color: str6, children: str7 };
  str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  items4[3] = map1(Text3, obj4);
  let tmp4Result3 = null;
  if (messagesReady !== true) {
    const obj5 = { variant: "body-md/normal", color: "text-muted", children: items5 };
    items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result3 = tmp4(tmp(5761).Text, obj5);
  }
  items4[4] = tmp4Result3;
  items3[2] = authStore3(closure_15, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", , ];
  let str10 = str;
  const Text4 = tmp(5761).Text;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj6 = { variant: "body-md/normal", color: str10, children: str11 };
  str11 = str3;
  if (connected) {
    str11 = "true";
  }
  items6[3] = map1(Text4, obj6);
  let tmp4Result4 = null;
  if (connected !== true) {
    const obj7 = { variant: "body-md/normal", color: "text-muted", children: items7 };
    items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result4 = tmp4(tmp(5761).Text, obj7);
  }
  items6[4] = tmp4Result4;
  items3[4] = authStore3(closure_15, { children: items6 });
  items3[5] = "\n";
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  const items8 = ["should show chat indicator", ":", " ", , ];
  const Text5 = tmp(5761).Text;
  if (messagesCached) {
    str = "text-feedback-positive";
  }
  const obj8 = { variant: "body-md/normal", color: str, children: str3 };
  if (messagesCached) {
    str3 = "true";
  }
  items8[3] = map1(Text5, obj8);
  const obj9 = { variant: "body-md/normal", color: "text-default", children: items3 };
  items8[4] = null;
  items3[6] = authStore3(closure_15, { children: items8 });
  return authStore3(Text, obj9);
});
let closure_19 = { code: "(function ChatLoadingIndicatorTsx1(){let[useReducedMotion,withRepeat,withSequence,withTiming,Easing]=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export function useShouldChannelShowLoadingIndicator(channelId) {
  let closure_3;
  let first;
  let stateFromStores;
  _require = channelId;
  const ChatLoadingIndicatorExperiment = require("ChatLoadingIndicatorExperiment").ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [MessageStore, GatewayConnectionStore, AppStateStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = enabled;
    if (tmp) {
      if (null == channelId) {
        return false;
      } else if (AppStateStore.getState() !== AppStates.ACTIVE) {
        return false;
      } else {
        const messages = MessageStore.getMessages(tmp2);
        let cached = messages.cached;
        const isConnectedResult = GatewayConnectionStore.isConnected();
        if (!cached) {
          cached = !messages.ready;
        }
        if (!cached) {
          cached = !isConnectedResult;
        }
        return cached;
      }
    } else {
      return false;
    }
  });
  [first, _slicedToArray] = react.useState(false);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let closure_0;
    const tmp = stateFromStores;
    if (tmp) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_3(true);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_3(false);
    }
  }, items1);
  return first;
}
export function ChannelHeaderLoadingIndicator() {
  let intl;
  let items4;
  let items5;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const tmp = closure_16();
  let obj = get_initialized;
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = get_initialized;
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      let isStaffPersonalResult;
      if (currentUser != null) {
        isStaffPersonalResult = currentUser.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
  const items2 = [closure_19, stateFromStores, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items2[2] = _mod1652.withRepeat;
  items2[3] = _mod1652.withSequence;
  items2[4] = timing_timing.withTiming;
  items2[5] = _mod1652.Easing;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
  class ChatLoadingIndicatorTsx1 {
    constructor() {
      let obj4;
      let tmp4;
      let tmp7;
      let tmp9;
      const obj = { transform: null };
      if (c0) {
        obj.transform = [];
        tmp9 = obj;
      } else {
        const obj2 = { scale: _undefined(_undefined2(tmp4, tmp7, _undefined3(1, obj4)), -1) };
        const obj3 = { duration: 1500, easing: _undefined4.bezier(0.4, 0, 0.2, 1) };
        tmp4 = _undefined3(1, { duration: 0 });
        obj4 = { duration: 1500, easing: _undefined4.bezier(0.4, 0, 0.2, 1) };
        const items = [obj2];
        obj.transform = items;
        tmp9 = obj;
        tmp7 = _undefined3(0.5, obj3);
      }
      return tmp9;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  ChatLoadingIndicatorTsx1.__closure = items3;
  ChatLoadingIndicatorTsx1.__workletHash = 6182376502575;
  ChatLoadingIndicatorTsx1.__initData = tmp7;
  let obj3 = { style: tmp.container, children: items5 };
  const animatedStyle = useAnimatedStyle(ChatLoadingIndicatorTsx1);
  let obj4 = { style: items4 };
  items4 = [tmp.pulse, animatedStyle];
  items5 = [map1(_modDef1652.View, obj4), ];
  const obj5 = { variant: "body-xs/medium", color: "text-muted", children: intl.string(intl2.t.JwIJMV) };
  const Text = tmp2(5761).Text;
  intl = tmp2(1113).intl;
  items5[1] = map1(Text, obj5);
  const tmp15 = authStore3(View, obj3);
  let tmp14Result = tmp15;
  const tmp14 = map1;
  if (stateFromStores1) {
    const obj6 = { onPress: openLoadingIndicatorDebugBody, children: tmp15 };
    tmp14Result = tmp14(tmp2(7121).PressableOpacity, obj6);
  }
  return tmp14Result;
}
