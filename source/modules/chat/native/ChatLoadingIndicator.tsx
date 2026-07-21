// Module ID: 10108
// Function ID: 78226
// Name: openLoadingIndicatorDebugBody
// Dependencies: []
// Exports: ChannelHeaderLoadingIndicator, useShouldChannelShowLoadingIndicator

// Module 10108 (openLoadingIndicatorDebugBody)
function openLoadingIndicatorDebugBody() {
  const currentUser = currentUser.getCurrentUser();
  let tmp = null != currentUser && currentUser.isStaff();
  if (!tmp) {
    tmp = null != currentUser && currentUser.isStaffPersonal();
    const tmp2 = null != currentUser && currentUser.isStaffPersonal();
  }
  if (tmp) {
    const obj = {
      importer() {
          return callback(paths[15])(paths[14], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["title"] = "Chat Loading indicator";
              obj["children"] = callback(closure_17, {});
              return callback(closure_0, obj);
            };
          });
        },
      isDismissable: true
    };
    importDefault(dependencyMap[13]).openLazy(obj);
    const obj2 = importDefault(dependencyMap[13]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const AppStates = arg1(dependencyMap[9]).AppStates;
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = arg1(dependencyMap[10]));
const tmp2 = arg1(dependencyMap[10]);
let obj = { container: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null } };
obj = { <string:1632221346>: 800, <string:2722977214>: 16, borderRadius: importDefault(dependencyMap[12]).radii.round, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BRAND };
obj.pulse = obj;
let closure_16 = arg1(dependencyMap[11]).createStyles(obj);
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
    items[3] = closure_13(callback(closure_2[17]).Text, obj);
    let tmp5Result = null;
    if (null != arg2) {
      tmp5Result = null;
      if (messagesCached !== arg2) {
        obj = {};
        if (arg2) {
          str2 = "true";
        }
        const items1 = [0, 8.048, str2, " to hide loading indicator)"];
        obj.children = items1;
        tmp5Result = closure_14(callback(closure_2[17]).Text, obj);
        const tmp5 = closure_14;
      }
    }
    items[4] = tmp5Result;
    obj.children = items;
    return closure_14(closure_15, obj);
  }
  let obj = arg1(dependencyMap[16]);
  const items = [closure_8, closure_7, closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channelId = channelId.getChannelId();
    const isConnectedResult = connected.isConnected();
    if (null == channelId) {
      let obj = { 9223372036854775807: null, 0: null, connected: isConnectedResult };
      return obj;
    } else {
      const messages = messages.getMessages(channelId);
      obj = {};
      ({ cached: obj.messagesCached, ready: obj.messagesReady } = messages);
      obj.connected = isConnectedResult;
      return obj;
    }
  });
  ({ messagesCached, messagesReady, connected } = stateFromStoresObject);
  obj = {};
  const items1 = [renderField("messages.cached", messagesCached, false), "\n", renderField("messages.ready", messagesReady, true), "\n", renderField("connected", connected, true), "\n", ];
  if (!messagesCached) {
    messagesCached = !messagesReady;
  }
  if (!messagesCached) {
    messagesCached = !connected;
  }
  items1[6] = renderField("should show chat indicator", messagesCached);
  obj.children = items1;
  return closure_14(arg1(dependencyMap[17]).Text, obj);
});
let closure_18 = { code: "function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}" };
const obj2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/chat/native/ChatLoadingIndicator.tsx");

export const useShouldChannelShowLoadingIndicator = function useShouldChannelShowLoadingIndicator(channelId) {
  const arg1 = channelId;
  const ChatLoadingIndicatorExperiment = arg1(dependencyMap[18]).ChatLoadingIndicatorExperiment;
  const importDefault = ChatLoadingIndicatorExperiment.useConfig({ location: "ChatLoadingIndicatorGuard" }).enabled;
  const items = [closure_8, closure_7, closure_11];
  const stateFromStores = arg1(dependencyMap[16]).useStateFromStores(items, () => {
    if (enabled) {
      if (null == arg0) {
        return false;
      } else if (state.getState() !== constants.ACTIVE) {
        return false;
      } else {
        const messages = messages.getMessages(arg0);
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
  const dependencyMap = stateFromStores;
  const tmp2 = callback(importAllResult.useState(false), 2);
  const callback = tmp2[1];
  const items1 = [stateFromStores];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(true);
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
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const arg1 = stateFromStores;
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const currentUser = currentUser.getCurrentUser();
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
  let obj2 = arg1(dependencyMap[19]);
  const fn = function t() {
    let obj = {};
    if (stateFromStores) {
      obj.transform = [];
      let tmp7 = obj;
    } else {
      obj = {};
      let obj2 = stateFromStores(closure_2[19]);
      const obj4 = stateFromStores(closure_2[19]);
      obj = { duration: 0 };
      const obj5 = stateFromStores(closure_2[20]);
      const withTimingResult = stateFromStores(closure_2[20]).withTiming(1, obj);
      const obj1 = { duration: 1500 };
      const Easing = stateFromStores(closure_2[19]).Easing;
      obj1.easing = Easing.bezier(0.4, 0, 0.2, 1);
      const obj7 = stateFromStores(closure_2[20]);
      const withTimingResult1 = stateFromStores(closure_2[20]).withTiming(0.5, obj1);
      obj2 = { duration: 1500 };
      const Easing2 = stateFromStores(closure_2[19]).Easing;
      obj2.easing = Easing2.bezier(0.4, 0, 0.2, 1);
      obj.scale = obj2.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, stateFromStores(closure_2[20]).withTiming(1, obj2)), -1);
      const items = [obj];
      obj.transform = items;
      tmp7 = obj;
      const obj9 = stateFromStores(closure_2[20]);
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, withRepeat: arg1(dependencyMap[19]).withRepeat, withSequence: arg1(dependencyMap[19]).withSequence, withTiming: arg1(dependencyMap[20]).withTiming, Easing: arg1(dependencyMap[19]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 17454673879926;
  fn.__initData = closure_18;
  obj = { style: tmp.container };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.pulse, animatedStyle];
  const items3 = [callback2(importDefault(dependencyMap[19]).View, { style: items2 }), ];
  obj1 = {};
  const intl = arg1(dependencyMap[21]).intl;
  obj1.children = intl.string(arg1(dependencyMap[21]).t.JwIJMV);
  items3[1] = callback2(arg1(dependencyMap[17]).Text, obj1);
  obj.children = items3;
  const tmp5 = callback3(View, obj);
  let tmp6 = tmp5;
  if (stateFromStores1) {
    obj2 = { onPress: openLoadingIndicatorDebugBody, children: tmp5 };
    tmp6 = callback2(arg1(dependencyMap[22]).PressableOpacity, obj2);
  }
  return tmp6;
};
