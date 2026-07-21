// Module ID: 14996
// Function ID: 112931
// Name: getBannerLabel
// Dependencies: []
// Exports: default

// Module 14996 (getBannerLabel)
function getBannerLabel(state) {
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl3 = arg1(dependencyMap[9]).intl;
    return intl3.string(arg1(dependencyMap[9]).t.XKk1gp);
  } else if (constants.NO_CONNECTION === state) {
    const intl2 = arg1(dependencyMap[9]).intl;
    return intl2.string(arg1(dependencyMap[9]).t.zPerw8);
  } else if (constants.BACK_ONLINE === state) {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.j8lYE2);
  }
}
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = callback3();
  arg1(dependencyMap[10]);
  if (constants.WAITING_FOR_NETWORK === state) {
    let obj = { style: tmp.leadingSlot };
    obj = { size: "small", color: tmp3, style: tmp.spinner };
    obj.children = callback2(closure_5, obj);
    return callback2(closure_6, obj);
  } else if (constants.NO_CONNECTION === state) {
    const obj1 = { style: tmp.leadingSlot };
    const obj2 = { size: "xs", color: importDefault(dependencyMap[8]).colors.INTERACTIVE_ICON_DEFAULT };
    obj1.children = callback2(arg1(dependencyMap[11]).ConnectionUnknownIcon, obj2);
    return callback2(closure_6, obj1);
  } else if (constants.BACK_ONLINE === state) {
    obj = { style: tmp.leadingSlot };
    const obj3 = { size: "xs", color: importDefault(dependencyMap[8]).colors.ICON_FEEDBACK_POSITIVE };
    obj.children = callback2(arg1(dependencyMap[12]).ConnectionFineIcon, obj3);
    return callback2(closure_6, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  let obj = { style: callback3().content };
  const items = [callback2(ConnectionBannerIcon, { state }), ];
  obj = {};
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  obj.color = str;
  obj.children = getBannerLabel(state);
  items[1] = callback2(arg1(dependencyMap[13]).Text, obj);
  obj.children = items;
  return closure_13(closure_6, obj);
}
function BackOnlineGlow(opacity) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const token = obj.useToken(importDefault(dependencyMap[8]).colors.ICON_FEEDBACK_POSITIVE);
  const arg1 = token;
  const items = [token];
  const memo = React.useMemo(() => {
    const obj = callback(closure_2[14])(token);
    const items = [obj.alpha(0).css(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).css();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.28).css();
    const alphaResult2 = obj.alpha(0.28);
    items[3] = obj.alpha(0.55).css();
    return items;
  }, items);
  obj = { style: items1, pointerEvents: "none" };
  const items1 = [tmp.glow, { opacity: opacity.progress }];
  obj = { style: tmp.glow, maskElement: callback2(importDefault(dependencyMap[17]), { style: tmp.glowMaskGradient, colors: closure_14, locations: closure_15, start: closure_16, end: closure_17 }), children: callback2(importDefault(dependencyMap[17]), { style: tmp.glowMaskGradient, colors: memo, locations: closure_18, start: closure_19, end: closure_20 }) };
  obj.children = callback2(importDefault(dependencyMap[16]), obj);
  return callback2(importDefault(dependencyMap[15]).View, obj);
}
function ConnectionBannerInner() {
  let obj = arg1(dependencyMap[20]);
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => state.getState());
  const arg1 = tmp4;
  const importDefault = tmp5;
  let tmp6 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp6 = stateFromStores;
  }
  let obj2 = arg1(dependencyMap[15]);
  const sharedValue = obj2.useSharedValue(0);
  const dependencyMap = sharedValue;
  const tmp8 = callback(React.useState(tmp6), 2);
  const first = tmp8[0];
  const callback = tmp10;
  let obj3 = arg1(dependencyMap[15]);
  const sharedValue1 = obj3.useSharedValue(0);
  const React = sharedValue1;
  if (tmp12) {
    tmp10(tmp6);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = React.useEffect(() => {
    let obj = tmp4(sharedValue[21]);
    let num = 0;
    if (tmp4) {
      num = 1;
    }
    const fn = function n(arg0) {
      if (!tmp) {
        callback(closure_2[15]).runOnJS(closure_3)(null);
        const obj = callback(closure_2[15]);
      }
    };
    obj = { shouldShowBanner: tmp4, runOnJS: tmp4(sharedValue[15]).runOnJS, setRenderState: tmp10 };
    fn.__closure = obj;
    fn.__workletHash = 3065113239920;
    fn.__initData = closure_22;
    const result = sharedValue1.set(obj.withSpring(num, closure_10, "respect-motion-settings", fn));
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = React.useEffect(() => {
    let num = 0;
    if (tmp5) {
      num = 1;
    }
    const result = sharedValue.set(tmp4(sharedValue[21]).withSpring(num, closure_10));
  }, items2);
  const tmp = callback3();
  const tmp12 = null != tmp6 && first !== tmp6;
  class A {
    constructor() {
      obj = {};
      obj = { translateY: (1 - useSharedValue.get()) * closure_9 };
      items = [];
      items[0] = obj;
      obj.transform = items;
      obj.opacity = useSharedValue.get();
      return obj;
    }
  }
  obj = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
  A.__closure = obj;
  A.__workletHash = 13973493587548;
  A.__initData = closure_23;
  const animatedStyle = arg1(dependencyMap[15]).useAnimatedStyle(A);
  obj = { pointerEvents: "none", style: items3 };
  const items3 = [tmp.container, , ];
  obj1 = { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT };
  items3[1] = obj1;
  items3[2] = animatedStyle;
  let tmp18 = null;
  if (first === constants.BACK_ONLINE) {
    obj2 = { progress: sharedValue };
    tmp18 = callback2(BackOnlineGlow, obj2);
  }
  const items4 = [tmp18, ];
  let tmp21 = null;
  if (null != first) {
    obj3 = { state: first };
    tmp21 = callback2(ConnectionBannerContent, obj3);
  }
  items4[1] = tmp21;
  obj.children = items4;
  return closure_13(importDefault(dependencyMap[15]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[3]).ConnectivityIndicatorState;
const tmp3 = arg1(dependencyMap[4]);
const CONNECTION_BANNER_HEIGHT = tmp3.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = tmp3.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let closure_14 = [];
let closure_15 = [97.646, 171.162, 0, 95.94];
let closure_16 = { max: false, guildId: false };
let closure_17 = { max: 3211264, guildId: 2042617856 };
let closure_18 = [0.167, 0.167, 16.667, 59.6];
let closure_19 = { max: -536870861, guildId: -299892737 };
let closure_20 = {};
let obj = arg1(dependencyMap[7]);
obj = { container: {}, glow: { marginBottom: "center", justifyContent: null, alignItems: 4, it: 4, now: "rgba(0, 0, 0, 0.75)" }, glowMaskGradient: { flex: 1 } };
obj = { height: CONNECTION_BANNER_HEIGHT, gap: importDefault(dependencyMap[8]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12 };
obj.content = obj;
obj.leadingSlot = {};
const items = [{ scale: 0.8 }];
obj.spinner = { transform: items };
let closure_21 = obj.createStyles(obj);
let closure_22 = { code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}" };
let closure_23 = { code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}" };
const tmp4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  let hidden;
  let timeoutMs;
  const config = importDefault(dependencyMap[22]).useConfig({ location: "ConnectionBanner" });
  ({ hidden, timeoutMs } = config);
  function useConnectivityIndicatorAnalytics(hidden) {
    const items = [closure_7];
    const stateFromStores = hidden(closure_2[18]).useStateFromStores(items, () => state.getState());
    closure_2 = React.useRef(null);
    const items1 = [stateFromStores, hidden];
    const effect = React.useEffect(() => {
      const current = ref.current;
      ref.current = stateFromStores;
      if (null != current) {
        if (current === constants.HIDDEN) {
          if (stateFromStores !== constants.HIDDEN) {
            if (stateFromStores !== constants.BACK_ONLINE) {
              let str = "hidden";
              if (!arg0) {
                let str2 = "connecting";
                if (stateFromStores === constants.NO_CONNECTION) {
                  str2 = "offline";
                }
                str = str2;
              }
              let obj = stateFromStores(ref[19]);
              obj = { connection_indicator_type: str };
              obj.track(constants2.CONNECTION_INDICATOR_SHOWN, obj);
            }
          }
        }
      }
    }, items1);
  }(hidden);
  let tmp3 = null;
  if (null != timeoutMs) {
    tmp3 = null;
    if (!hidden) {
      tmp3 = callback2(ConnectionBannerInner, {});
    }
  }
  return tmp3;
};
