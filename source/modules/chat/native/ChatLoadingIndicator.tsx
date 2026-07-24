// Module ID: 10149
// Function ID: 78484
// Name: openLoadingIndicatorDebugBody
// Dependencies: [57, 31, 27, 4122, 4808, 4349, 1906, 1849, 6651, 653, 33, 4130, 689, 4471, 4561, 1934, 566, 4126, 10150, 3991, 4131, 1212, 4660, 2]
// Exports: ChannelHeaderLoadingIndicator, useShouldChannelShowLoadingIndicator

// Module 10149 (openLoadingIndicatorDebugBody)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function openLoadingIndicatorDebugBody() {
  currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser && currentUser.isStaff();
  if (!tmp) {
    tmp = null != currentUser && currentUser.isStaffPersonal();
    const tmp2 = null != currentUser && currentUser.isStaffPersonal();
  }
  if (tmp) {
    let obj = {
      importer() {
          return outer1_0(outer1_2[15])(outer1_2[14], outer1_2.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["title"] = "Chat Loading indicator";
              obj["children"] = outer3_13(outer3_17, {});
              return outer3_13(closure_0, obj);
            };
          });
        },
      isDismissable: true
    };
    importDefault(4471).openLazy(obj);
    const obj2 = importDefault(4471);
  }
}
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4 } };
obj = { height: 8, width: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.pulse = obj;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_17 = importAllResult.memo(() => {
  let connected;
  let messagesCached;
  let messagesReady;
  function renderField(connected, messagesCached, arg2) {
    let obj = {};
    const items = [connected, ":", " ", , ];
    obj = { variant: "text-md/normal" };
    let str = "text-feedback-critical";
    if (messagesCached) {
      str = "text-feedback-positive";
    }
    obj.color = str;
    let str2 = "false";
    let str3 = "false";
    if (messagesCached) {
      str3 = "true";
    }
    obj.children = str3;
    items[3] = outer1_13(outer1_0(outer1_2[17]).Text, obj);
    let tmp5Result = null;
    if (null != arg2) {
      tmp5Result = null;
      if (messagesCached !== arg2) {
        obj = { variant: "text-md/normal", color: "text-muted" };
        if (arg2) {
          str2 = "true";
        }
        const items1 = [" ", "(should be ", str2, " to hide loading indicator)"];
        obj.children = items1;
        tmp5Result = outer1_14(outer1_0(outer1_2[17]).Text, obj);
        const tmp5 = outer1_14;
      }
    }
    items[4] = tmp5Result;
    obj.children = items;
    return outer1_14(outer1_15, obj);
  }
  let obj = require(566) /* initialize */;
  let items = [closure_8, closure_7, closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channelId = outer1_9.getChannelId();
    const isConnectedResult = outer1_7.isConnected();
    if (null == channelId) {
      let obj = { messagesCached: false, messagesReady: false, connected: isConnectedResult };
      return obj;
    } else {
      const messages = outer1_8.getMessages(channelId);
      obj = {};
      ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
      obj.connected = isConnectedResult;
      return obj;
    }
  });
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  obj = { variant: "text-md/normal", color: "text-default" };
  let items1 = [renderField("messages.cached", messagesCached, false), "\n", renderField("messages.ready", messagesReady, true), "\n", renderField("connected", connected, true), "\n", ];
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  items1[6] = renderField("should show chat indicator", messagesCached);
  obj.children = items1;
  return closure_14(require(4126) /* Text */.Text, obj);
});
let closure_18 = { code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = function useShouldChannelShowLoadingIndicator(channelId) {
  const _require = channelId;
  const ChatLoadingIndicatorExperiment = _require(stateFromStores[18]).ChatLoadingIndicatorExperiment;
  const enabled = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [closure_8, closure_7, closure_11];
  stateFromStores = _require(stateFromStores[16]).useStateFromStores(items, () => {
    if (enabled) {
      if (null == closure_0) {
        return false;
      } else if (outer1_11.getState() !== outer1_12.ACTIVE) {
        return false;
      } else {
        const messages = outer1_8.getMessages(closure_0);
        let cached = messages.cached;
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
  const tmp2 = callback(importAllResult.useState(false), 2);
  callback = tmp2[1];
  const items1 = [stateFromStores];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_3(true);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      callback(false);
    }
  }, items1);
  return tmp2[0];
};
export const ChannelHeaderLoadingIndicator = function ChannelHeaderLoadingIndicator() {
  const tmp = callback4();
  let obj = stateFromStores(566);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.useReducedMotion);
  let obj1 = stateFromStores(566);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const currentUser = outer1_10.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      let isStaffPersonalResult;
      if (null != currentUser) {
        isStaffPersonalResult = currentUser.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
  let obj2 = stateFromStores(3991);
  const fn = function t() {
    let obj = {};
    if (stateFromStores) {
      obj.transform = [];
      let tmp7 = obj;
    } else {
      obj = {};
      let obj2 = stateFromStores(outer1_2[19]);
      const obj4 = stateFromStores(outer1_2[19]);
      obj = { duration: 0 };
      const obj5 = stateFromStores(outer1_2[20]);
      const withTimingResult = stateFromStores(outer1_2[20]).withTiming(1, obj);
      const obj1 = { duration: 1500 };
      const Easing = stateFromStores(outer1_2[19]).Easing;
      obj1.easing = Easing.bezier(0.4, 0, 0.2, 1);
      const obj7 = stateFromStores(outer1_2[20]);
      const withTimingResult1 = stateFromStores(outer1_2[20]).withTiming(0.5, obj1);
      obj2 = { duration: 1500 };
      const Easing2 = stateFromStores(outer1_2[19]).Easing;
      obj2.easing = Easing2.bezier(0.4, 0, 0.2, 1);
      obj.scale = obj2.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, stateFromStores(outer1_2[20]).withTiming(1, obj2)), -1);
      const items = [obj];
      obj.transform = items;
      tmp7 = obj;
      const obj9 = stateFromStores(outer1_2[20]);
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, withRepeat: stateFromStores(3991).withRepeat, withSequence: stateFromStores(3991).withSequence, withTiming: stateFromStores(4131).withTiming, Easing: stateFromStores(3991).Easing };
  fn.__closure = obj;
  fn.__workletHash = 17454673879926;
  fn.__initData = closure_18;
  obj = { style: tmp.container };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.pulse, animatedStyle];
  const items3 = [callback2(importDefault(3991).View, { style: items2 }), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted" };
  const intl = stateFromStores(1212).intl;
  obj1.children = intl.string(stateFromStores(1212).t.JwIJMV);
  items3[1] = callback2(stateFromStores(4126).Text, obj1);
  obj.children = items3;
  const tmp5 = callback3(View, obj);
  let tmp6 = tmp5;
  if (stateFromStores1) {
    obj2 = { onPress: openLoadingIndicatorDebugBody, children: tmp5 };
    tmp6 = callback2(stateFromStores(4660).PressableOpacity, obj2);
  }
  return tmp6;
};
