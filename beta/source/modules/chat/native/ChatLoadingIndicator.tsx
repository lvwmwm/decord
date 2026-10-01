// Module ID: 12845
// Function ID: 12846
// Name: ChatLoadingIndicator
// Dependencies: [32, 19, 17, 4825, 5589, 5056, 2099, 1372, 1980, 1074, 21, 4836, 576, 5204, 5300, 1981, 504, 4832, 12846, 4566, 4837, 1115, 5435, 2]
// Exports: ChannelHeaderLoadingIndicator, useShouldChannelShowLoadingIndicator

// Module 12845 (ChatLoadingIndicator)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import MessageStore from "MessageStore" /* 5056 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
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
let closure_18 = react.memo(() => {
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
  const obj2 = { variant: "text-md/normal", color: str2, children: str4 };
  let str3 = "false";
  str4 = "false";
  if (messagesCached) {
    str4 = "true";
  }
  items1[3] = map1(Text2, obj2);
  let tmp4Result = null;
  if (messagesCached !== false) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: items2 };
    items2 = [" ", "(should be ", str3, " to hide loading indicator)"];
    tmp4Result = tmp4(tmp(4832).Text, obj3);
  }
  items1[4] = tmp4Result;
  const items3 = [authStore2(closure_15, { children: items1 }), "\n", , , , , ];
  const items4 = ["messages.ready", ":", " ", , ];
  let str6 = str;
  const Text3 = tmp(4832).Text;
  if (messagesReady) {
    str6 = "text-feedback-positive";
  }
  const obj4 = { variant: "text-md/normal", color: str6, children: str7 };
  str7 = str3;
  if (messagesReady) {
    str7 = "true";
  }
  items4[3] = map1(Text3, obj4);
  let tmp4Result3 = null;
  if (messagesReady !== true) {
    const obj5 = { variant: "text-md/normal", color: "text-muted", children: items5 };
    items5 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result3 = tmp4(tmp(4832).Text, obj5);
  }
  items4[4] = tmp4Result3;
  items3[2] = authStore2(closure_15, { children: items4 });
  items3[3] = "\n";
  const items6 = ["connected", ":", " ", , ];
  let str10 = str;
  const Text4 = tmp(4832).Text;
  if (connected) {
    str10 = "text-feedback-positive";
  }
  const obj6 = { variant: "text-md/normal", color: str10, children: str11 };
  str11 = str3;
  if (connected) {
    str11 = "true";
  }
  items6[3] = map1(Text4, obj6);
  let tmp4Result4 = null;
  if (connected !== true) {
    const obj7 = { variant: "text-md/normal", color: "text-muted", children: items7 };
    items7 = [" ", "(should be ", "true", " to hide loading indicator)"];
    tmp4Result4 = tmp4(tmp(4832).Text, obj7);
  }
  items6[4] = tmp4Result4;
  items3[4] = authStore2(closure_15, { children: items6 });
  items3[5] = "\n";
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  const items8 = ["should show chat indicator", ":", " ", , ];
  const Text5 = tmp(4832).Text;
  if (messagesCached) {
    str = "text-feedback-positive";
  }
  const obj8 = { variant: "text-md/normal", color: str, children: str3 };
  if (messagesCached) {
    str3 = "true";
  }
  items8[3] = map1(Text5, obj8);
  const obj9 = { variant: "text-md/normal", color: "text-default", children: items3 };
  items8[4] = null;
  items3[6] = authStore2(closure_15, { children: items8 });
  return authStore2(Text, obj9);
});
const __initData = { code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = function useShouldChannelShowLoadingIndicator(channelId) {
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
};
export const ChannelHeaderLoadingIndicator = function ChannelHeaderLoadingIndicator() {
  let intl;
  let items2;
  let items3;
  let stateFromStores;
  let useReducedMotion;
  const tmp = closure_16();
  let obj = stateFromStores(504);
  let items = [AccessibilityStore];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = stateFromStores(504);
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
  let obj3 = stateFromStores(4566);
  const fn = function t() {
    let Easing;
    let Easing2;
    let obj5;
    let tmp11;
    let withRepeat;
    let withSequence;
    let withTiming2;
    let withTimingResult;
    let withTimingResult1;
    const obj = { transform: null };
    if (stateFromStores) {
      obj.transform = [];
      tmp11 = obj;
    } else {
      const obj2 = { scale: withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(1, obj5)), -1) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(1, { duration: 0 });
      const obj4 = { duration: 1500, easing: Easing.bezier(0.4, 0, 0.2, 1) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      withTimingResult1 = withTiming(0.5, obj4);
      obj5 = { duration: 1500, easing: Easing2.bezier(0.4, 0, 0.2, 1) };
      withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport.Easing;
      const items = [obj2];
      obj.transform = items;
      tmp11 = obj;
    }
    return tmp11;
  };
  let obj4 = { useReducedMotion: stateFromStores, withRepeat: stateFromStores(4566).withRepeat, withSequence: stateFromStores(4566).withSequence, withTiming: stateFromStores(4837).withTiming, Easing: stateFromStores(4566).Easing };
  fn.__closure = obj4;
  fn.__workletHash = 17454673879926;
  fn.__initData = __initData;
  let obj5 = { style: tmp.container, children: items3 };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj6 = { style: items2 };
  items2 = [tmp.pulse, animatedStyle];
  items3 = [closure_13(ReanimatedRexportDefault.View, obj6), ];
  const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(stateFromStores(1115).t.JwIJMV) };
  const Text = stateFromStores(4832).Text;
  intl = stateFromStores(1115).intl;
  items3[1] = closure_13(Text, obj7);
  const tmp8 = closure_14(View, obj5);
  let tmp7Result = tmp8;
  const tmp7 = closure_13;
  if (stateFromStores1) {
    const obj8 = { onPress: openLoadingIndicatorDebugBody, children: tmp8 };
    tmp7Result = tmp7(tmp2(5435).PressableOpacity, obj8);
  }
  return tmp7Result;
};
