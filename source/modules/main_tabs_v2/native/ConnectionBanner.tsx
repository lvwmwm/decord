// Module ID: 15170
// Function ID: 115498
// Name: getBannerLabel
// Dependencies: [57, 31, 27, 12663, 14047, 653, 33, 4130, 689, 1212, 3834, 15171, 15173, 4126, 666, 3991, 5109, 4554, 566, 675, 14046, 4542, 12664, 2]
// Exports: default

// Module 15170 (getBannerLabel)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ConnectivityIndicatorState as closure_8 } from "_isNativeReflectConstruct";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let require = arg1;
function getBannerLabel(state) {
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.XKk1gp);
  } else if (constants.NO_CONNECTION === state) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.zPerw8);
  } else if (constants.BACK_ONLINE === state) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.j8lYE2);
  }
}
function ConnectionBannerIcon(state) {
  state = state.state;
  const tmp = _createForOfIteratorHelperLoose();
  require(3834) /* map */;
  if (constants.WAITING_FOR_NETWORK === state) {
    let obj = { style: tmp.leadingSlot };
    obj = { size: "small", color: tmp3, style: tmp.spinner };
    obj.children = callback2(closure_5, obj);
    return callback2(closure_6, obj);
  } else if (constants.NO_CONNECTION === state) {
    const obj1 = { style: tmp.leadingSlot };
    const obj2 = { size: "xs", color: importDefault(689).colors.INTERACTIVE_ICON_DEFAULT };
    obj1.children = callback2(require(15171) /* ConnectionUnknownIcon */.ConnectionUnknownIcon, obj2);
    return callback2(closure_6, obj1);
  } else if (constants.BACK_ONLINE === state) {
    obj = { style: tmp.leadingSlot };
    const obj3 = { size: "xs", color: importDefault(689).colors.ICON_FEEDBACK_POSITIVE };
    obj.children = callback2(require(15173) /* ConnectionFineIcon */.ConnectionFineIcon, obj3);
    return callback2(closure_6, obj);
  }
}
function ConnectionBannerContent(state) {
  state = state.state;
  let obj = { style: _createForOfIteratorHelperLoose().content };
  const items = [callback2(ConnectionBannerIcon, { state }), ];
  obj = { variant: "text-sm/medium", color: null, maxFontSizeMultiplier: 1.5 };
  let str = "text-muted";
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  obj.color = str;
  obj.children = getBannerLabel(state);
  items[1] = callback2(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_13(closure_6, obj);
}
function BackOnlineGlow(opacity) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = token(3834);
  token = obj.useToken(importDefault(689).colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = React.useMemo(() => {
    const obj = outer1_1(outer1_2[14])(token);
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
  items1 = [tmp.glow, { opacity: opacity.progress }];
  obj = { style: tmp.glow, maskElement: callback2(importDefault(4554), { style: tmp.glowMaskGradient, colors: closure_14, locations: closure_15, start: closure_16, end: closure_17 }), children: callback2(importDefault(4554), { style: tmp.glowMaskGradient, colors: memo, locations: closure_18, start: closure_19, end: closure_20 }) };
  obj.children = callback2(importDefault(5109), obj);
  return callback2(importDefault(3991).View, obj);
}
function ConnectionBannerInner() {
  let obj = require(sharedValue[20]);
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  let obj1 = require(sharedValue[18]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getState());
  require = tmp4;
  const importDefault = tmp5;
  let tmp6 = null;
  if (stateFromStores !== constants.HIDDEN) {
    tmp6 = stateFromStores;
  }
  let obj2 = require(sharedValue[15]);
  sharedValue = obj2.useSharedValue(0);
  const tmp8 = callback(sharedValue1.useState(tmp6), 2);
  const first = tmp8[0];
  callback = tmp10;
  let obj3 = require(sharedValue[15]);
  sharedValue1 = obj3.useSharedValue(0);
  if (tmp12) {
    tmp10(tmp6);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = sharedValue1.useEffect(() => {
    let obj = tmp4(sharedValue[21]);
    let num = 0;
    if (tmp4) {
      num = 1;
    }
    const fn = function n(arg0) {
      if (!tmp) {
        callback(sharedValue[15]).runOnJS(outer1_3)(null);
        const obj = callback(sharedValue[15]);
      }
    };
    obj = { shouldShowBanner: tmp4, runOnJS: tmp4(sharedValue[15]).runOnJS, setRenderState: _slicedToArray };
    fn.__closure = obj;
    fn.__workletHash = 3065113239920;
    fn.__initData = outer1_22;
    const result = sharedValue1.set(obj.withSpring(num, outer1_10, "respect-motion-settings", fn));
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    if (closure_1) {
      num = 1;
    }
    const result = sharedValue.set(tmp4(sharedValue[21]).withSpring(num, outer1_10));
  }, items2);
  const tmp = _createForOfIteratorHelperLoose();
  tmp12 = null != tmp6 && first !== tmp6;
  class A {
    constructor() {
      obj = {};
      obj = { translateY: (1 - useSharedValue.get()) * outer1_9 };
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
  const animatedStyle = require(sharedValue[15]).useAnimatedStyle(A);
  obj = { pointerEvents: "none", style: items3 };
  items3 = [tmp.container, , ];
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
  return closure_13(importDefault(sharedValue[15]).View, obj);
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
CONNECTION_BANNER_HEIGHT = CONNECTION_BANNER_HEIGHT.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = CONNECTION_BANNER_HEIGHT.YOU_BAR_SPRING_CONFIG;
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = ["transparent", "black", "black", "transparent"];
let closure_15 = [0, 0.25, 0.75, 1];
let closure_16 = { x: 0, y: 0.5 };
let closure_17 = { x: 1, y: 0.5 };
let closure_18 = [0, 0.4, 0.75, 1];
let closure_19 = { x: 0, y: 0 };
let closure_20 = { x: 0, y: 1 };
_createForOfIteratorHelperLoose = { container: { position: "absolute", left: 0, right: 0, bottom: 0 }, glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, glowMaskGradient: { flex: 1 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, right: 0, height: CONNECTION_BANNER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.leadingSlot = { width: 16, height: 16, alignItems: "center", justifyContent: "center" };
let items = [{ scale: 0.8 }];
_createForOfIteratorHelperLoose.spinner = { transform: items };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_22 = { code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}" };
let closure_23 = { code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  let hidden;
  let timeoutMs;
  const config = importDefault(12664).useConfig({ location: "ConnectionBanner" });
  ({ hidden, timeoutMs } = config);
  (function useConnectivityIndicatorAnalytics(hidden) {
    let closure_0 = hidden;
    const items = [outer1_7];
    const stateFromStores = outer1_0(outer1_2[18]).useStateFromStores(items, () => outer2_7.getState());
    let closure_2 = outer1_4.useRef(null);
    const items1 = [stateFromStores, hidden];
    const effect = outer1_4.useEffect(() => {
      const current = ref.current;
      ref.current = stateFromStores;
      if (null != current) {
        if (current === outer2_8.HIDDEN) {
          if (stateFromStores !== outer2_8.HIDDEN) {
            if (stateFromStores !== outer2_8.BACK_ONLINE) {
              let str = "hidden";
              if (!closure_0) {
                let str2 = "connecting";
                if (stateFromStores === outer2_8.NO_CONNECTION) {
                  str2 = "offline";
                }
                str = str2;
              }
              let obj = outer2_1(outer2_2[19]);
              obj = { connection_indicator_type: str };
              obj.track(outer2_11.CONNECTION_INDICATOR_SHOWN, obj);
            }
          }
        }
      }
    }, items1);
  })(hidden);
  let tmp3 = null;
  if (null != timeoutMs) {
    tmp3 = null;
    if (!hidden) {
      tmp3 = callback2(ConnectionBannerInner, {});
    }
  }
  return tmp3;
};
