// Module ID: 16033
// Function ID: 16034
// Name: ConnectionBanner
// Dependencies: [32, 19, 17, 13230, 14627, 1074, 21, 4836, 576, 1115, 4531, 16034, 16036, 4832, 672, 4566, 5976, 5293, 504, 1241, 14626, 5280, 13231, 2]
// Exports: default

// Module 16033 (ConnectionBanner)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useToken from "useToken" /* 4531 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import spring from "spring" /* 5280 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import _modDef5976 from "module_5976" /* 5976 */;
import ConnectivityIndicatorStateStore2 from "ConnectivityIndicatorStateStore" /* 13230 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConnectivityIndicatorStateStore = ConnectivityIndicatorStateStore2;
let _require, dependencyMap, importDefault, set;

let closure_12;
let hasOwnProperty;
let items;
let map1;
let metroRequire;
let obj2;
let rect;
let tmp2;
const ReanimatedRexport = tmp2(4566);
function ConnectionBannerIcon(state) {
  let ConnectionFineIcon;
  let ConnectionUnknownIcon;
  let obj3;
  let obj5;
  let obj6;
  state = state.state;
  const tmp = closure_21();
  useToken;
  if (constants.WAITING_FOR_NETWORK === state) {
    const obj2 = { style: tmp.leadingSlot, children: closure_12(hasOwnProperty, obj3) };
    obj3 = { size: "small", color: tmp6, style: tmp.spinner };
    return closure_12(metroRequire, obj2);
  } else if (constants.NO_CONNECTION === state) {
    const obj4 = { style: tmp.leadingSlot, children: closure_12(ConnectionUnknownIcon, obj5) };
    obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    ConnectionUnknownIcon = tmp2(16034).ConnectionUnknownIcon;
    return closure_12(metroRequire, obj4);
  } else if (constants.BACK_ONLINE === state) {
    const obj = { style: tmp.leadingSlot, children: closure_12(ConnectionFineIcon, obj6) };
    obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    ConnectionFineIcon = tmp2(16036).ConnectionFineIcon;
    return closure_12(metroRequire, obj);
  }
}
function ConnectionBannerContent(state) {
  let items;
  let stringResult;
  state = state.state;
  const obj = { style: closure_21().content, children: items };
  items = [closure_12(ConnectionBannerIcon, { state }), ];
  let str = "text-muted";
  const Text = Text_Text.Text;
  const tmp = map1;
  const tmp2 = metroRequire;
  const tmp3 = closure_12;
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  const obj2 = { variant: "text-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: stringResult };
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl2 = tmp4(1115).intl;
    stringResult = intl2.string(tmp4(1115).t.XKk1gp);
  } else if (constants.NO_CONNECTION === state) {
    const intl = tmp4(1115).intl;
    stringResult = intl.string(tmp4(1115).t.zPerw8);
  } else if (constants.BACK_ONLINE === state) {
    const intl3 = tmp4(1115).intl;
    stringResult = intl3.string(tmp4(1115).t.j8lYE2);
  }
  items[1] = tmp3(Text, obj2);
  return tmp(tmp2, obj);
}
function BackOnlineGlow(progress) {
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let tmp4;
  let token;
  progress = progress.progress;
  const tmp = closure_21();
  let obj = token(4531);
  token = obj.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = react.useMemo(() => {
    const obj = _modDef672(token);
    const items = [, , , ];
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.css();
    const alphaResult1 = obj.alpha(0.1);
    items[1] = alphaResult1.css();
    const alphaResult2 = obj.alpha(0.28);
    items[2] = alphaResult2.css();
    const alphaResult3 = obj.alpha(0.55);
    items[3] = alphaResult3.css();
    return items;
  }, items);
  const obj2 = { style: items1, pointerEvents: "none", children: closure_12(tmp4, obj3) };
  items1 = [tmp.glow, { opacity: progress }];
  const View = ReanimatedRexportDefault.View;
  obj3 = { style: tmp.glow, maskElement: closure_12(LinearGradientDefault, obj4), children: closure_12(LinearGradientDefault, obj5) };
  obj4 = { style: tmp.glowMaskGradient, colors, locations, start, end };
  obj5 = { style: tmp.glowMaskGradient, colors: memo, locations: locations2, start: start2, end: end2 };
  tmp4 = _modDef5976;
  return closure_12(View, obj2);
}
function ConnectionBannerInner() {
  let closure_0;
  let closure_1;
  let items3;
  let items4;
  let setRenderState;
  let sharedValue;
  let sharedValue1;
  let state;
  let tmp12;
  let tmp13;
  let tmp2 = _require;
  const tmp3 = sharedValue;
  let tmp = closure_21();
  let obj = require("useYouBarMargins");
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  const obj2 = require("get initialized");
  let items = [ConnectivityIndicatorStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => state.getState());
  _require = tmp7;
  importDefault = tmp8;
  let tmp9 = null;
  const tmp6 = constants;
  if (stateFromStores !== constants.HIDDEN) {
    tmp9 = stateFromStores;
  }
  const tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  [tmp12, tmp13] = sharedValue1.useState(tmp9);
  _slicedToArray(sharedValue1.useState(tmp9), 2);
  _slicedToArray = tmp13;
  const tmp2Result3 = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result3.useSharedValue(0);
  const tmp15 = null != tmp9 && tmp12 !== tmp9;
  if (tmp15) {
    tmp13(tmp9);
  }
  const items1 = [stateFromStores !== constants.HIDDEN, sharedValue1];
  const effect = obj4.useEffect(() => {
    let tmp = sharedValue1;
    set = sharedValue1.set;
    let num = 0;
    const withSpring = spring.withSpring;
    if (closure_0) {
      num = 1;
    }
    const fn = function n(arg0) {
      const tmp = true !== arg0 || closure_1_0;
      if (!tmp) {
        const obj = closure_0(sharedValue[15]);
        obj.runOnJS(setRenderState)(null);
      }
    };
    let obj = { shouldShowBanner: tmp5, runOnJS: ReanimatedRexport.runOnJS, setRenderState: _slicedToArray };
    fn.__closure = obj;
    fn.__workletHash = 3065113239920;
    fn.__initData = __initData;
    const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn));
  }, items1);
  const items2 = [stateFromStores === constants.BACK_ONLINE, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (closure_1) {
      num = 1;
    }
    const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG));
  }, items2);
  const tmp2Result4 = tmp2(tmp3[15]);
  class A {
    constructor() {
      let items;
      const obj = { transform: items, opacity: sharedValue1.get() };
      items = [{ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT }];
      ({ translateY: (1 - sharedValue1.get()) * CONNECTION_BANNER_HEIGHT });
      return obj;
    }
  }
  const obj3 = { progress: sharedValue1, CONNECTION_BANNER_HEIGHT };
  A.__closure = obj3;
  A.__workletHash = 13973493587548;
  A.__initData = __initData;
  const animatedStyle = tmp2Result4.useAnimatedStyle(A);
  const obj5 = { pointerEvents: "none", style: items3, children: items4 };
  items3 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  let tmp21 = null;
  const View = require("ReanimatedRexport").View;
  const tmp20 = closure_13;
  if (tmp12 === tmp6.BACK_ONLINE) {
    const obj6 = { progress: sharedValue };
    tmp21 = closure_12(BackOnlineGlow, obj6);
  }
  items4 = [tmp21, ];
  let tmp24 = null;
  if (null != tmp12) {
    const obj7 = { state: tmp12 };
    tmp24 = closure_12(ConnectionBannerContent, obj7);
  }
  items4[1] = tmp24;
  return tmp20(View, obj5);
}
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const constants = ConnectivityIndicatorStateStore2.ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const colors = ["transparent", "black", "black", "transparent"];
const locations = [0, 0.25, 0.75, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const locations2 = [0, 0.4, 0.75, 1];
const start2 = { x: 0, y: 0 };
const end2 = { x: 0, y: 1 };
let obj = { container: { position: "absolute", left: 0, right: 0, bottom: 0 }, glow: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, glowMaskGradient: { flex: 1 }, content: rect, leadingSlot: { width: 16, height: 16, alignItems: "center", justifyContent: "center" }, spinner: obj2 };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: CONNECTION_BANNER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
obj2 = { transform: items };
items = [{ scale: 0.8 }];
let closure_21 = createStyles.createStyles(obj);
let closure_25 = { code: "function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}" };
const __initData = { code: "function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  let ref;
  let state;
  let stateFromStores;
  let obj = stateFromStores(13231);
  const config = obj.useConfig({ location: "ConnectionBanner" });
  const hidden = config.hidden;
  const timeoutMs = config.timeoutMs;
  let obj2 = hidden(504);
  const items = [ConnectivityIndicatorStateStore];
  stateFromStores = obj2.useStateFromStores(items, () => state.getState());
  dependencyMap = react.useRef(null);
  const items1 = [stateFromStores, hidden];
  const effect = react.useEffect(() => {
    const current = ref.current;
    ref.current = stateFromStores;
    if (null != current) {
      if (current === constants.HIDDEN) {
        if (stateFromStores !== constants.HIDDEN) {
          if (stateFromStores !== constants.BACK_ONLINE) {
            let str = "hidden";
            if (!hidden) {
              let str2 = "connecting";
              if (stateFromStores === constants.NO_CONNECTION) {
                str2 = "offline";
              }
              str = str2;
            }
            const obj2 = { connection_indicator_type: str };
            const obj = AnalyticsUtilsDefault;
            obj.track(AnalyticEvents.CONNECTION_INDICATOR_SHOWN, obj2);
          }
        }
      }
    }
  }, items1);
  let tmp4 = null;
  if (null != timeoutMs) {
    tmp4 = null;
    if (!hidden) {
      tmp4 = closure_12(ConnectionBannerInner, {});
    }
  }
  return tmp4;
};
