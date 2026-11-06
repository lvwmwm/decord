// Module ID: 18759
// Function ID: 18760
// Name: ConnectionBanner
// Dependencies: [32, 19, 17, 15827, 17337, 1072, 21, 5170, 575, 1113, 5754, 18760, 18762, 5781, 671, 1652, 7129, 5745, 504, 1252, 17336, 5791, 1705, 15828, 2]
// Exports: default

// Module 18759 (ConnectionBanner)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import useToken from "useToken" /* 5754 */;
import Text_Text from "Text/Text" /* 5781 */;
import spring_spring from "spring/spring" /* 5791 */;
import _modDef7129 from "module_7129" /* 7129 */;
import ConnectivityIndicatorStateStore2 from "ConnectivityIndicatorStateStore" /* 15827 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import YouBarConstants from "YouBarConstants" /* 17337 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConnectivityIndicatorStateStore = ConnectivityIndicatorStateStore2;
let _require, dependencyMap, importDefault, set, tmp5;

let closure_12;
let hasOwnProperty;
let items;
let map1;
let metroRequire;
let obj2;
let rect;
let tmp2;
const _mod1705 = tmp2(1705);
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
    const obj2 = { style: tmp.leadingSlot, children: authStore2(hasOwnProperty, obj3) };
    obj3 = { size: "small", color: tmp6, style: tmp.spinner };
    return authStore2(metroRequire, obj2);
  } else if (constants.NO_CONNECTION === state) {
    const obj4 = { style: tmp.leadingSlot, children: authStore2(ConnectionUnknownIcon, obj5) };
    obj5 = { size: "xs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    ConnectionUnknownIcon = tmp2(18760).ConnectionUnknownIcon;
    return authStore2(metroRequire, obj4);
  } else if (constants.BACK_ONLINE === state) {
    const obj = { style: tmp.leadingSlot, children: authStore2(ConnectionFineIcon, obj6) };
    obj6 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    ConnectionFineIcon = tmp2(18762).ConnectionFineIcon;
    return authStore2(metroRequire, obj);
  }
}
function ConnectionBannerContent(state) {
  let items;
  let stringResult;
  state = state.state;
  const obj = { style: closure_21().content, children: items };
  items = [authStore2(ConnectionBannerIcon, { state }), ];
  let str = "text-muted";
  const Text = Text_Text.Text;
  const tmp = map1;
  const tmp2 = metroRequire;
  const tmp3 = authStore2;
  if (state === constants.BACK_ONLINE) {
    str = "text-feedback-positive";
  }
  const obj2 = { variant: "body-sm/medium", color: str, maxFontSizeMultiplier: 1.5, children: stringResult };
  if (constants.WAITING_FOR_NETWORK === state) {
    const intl2 = tmp4(1113).intl;
    stringResult = intl2.string(tmp4(1113).t.XKk1gp);
  } else if (constants.NO_CONNECTION === state) {
    const intl = tmp4(1113).intl;
    stringResult = intl.string(tmp4(1113).t.zPerw8);
  } else if (constants.BACK_ONLINE === state) {
    const intl3 = tmp4(1113).intl;
    stringResult = intl3.string(tmp4(1113).t.j8lYE2);
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
  let obj = token(5754);
  token = obj.useToken(nativeDefault.colors.ICON_FEEDBACK_POSITIVE);
  let items = [token];
  const memo = react.useMemo(() => {
    const obj = _modDef671(token);
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
  const View = _modDef1652.View;
  obj3 = { style: tmp.glow, maskElement: closure_12(LinearGradientDefault, obj4), children: closure_12(LinearGradientDefault, obj5) };
  obj4 = { style: tmp.glowMaskGradient, colors, locations, start, end };
  obj5 = { style: tmp.glowMaskGradient, colors: memo, locations: locations2, start: start2, end: end2 };
  tmp4 = _modDef7129;
  return closure_12(View, obj2);
}
function ConnectionBannerInner() {
  let closure_0;
  let closure_1;
  let closure_3;
  let items5;
  let items6;
  let sharedValue;
  let sharedValue1;
  let state;
  let tmp12;
  let tmp13;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp2 = _require;
  const tmp3 = sharedValue;
  let tmp = closure_21();
  let obj = require("useYouBarMargins");
  const youBarBottomMargin = obj.useYouBarBottomMargin();
  const obj2 = require("get initialized");
  let items = [ConnectivityIndicatorStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => state.getState());
  const tmp7 = stateFromStores !== constants.HIDDEN;
  _require = tmp7;
  const tmp8 = stateFromStores === constants.BACK_ONLINE;
  importDefault = tmp8;
  let tmp9 = null;
  let tmp6 = constants;
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
  let items1 = [tmp7, sharedValue1];
  const effect = obj4.useEffect(() => {
    let tmp10;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp = sharedValue1;
    set = sharedValue1.set;
    let num = 0;
    const withSpring = spring_spring.withSpring;
    if (closure_0) {
      num = 1;
    }
    const items = [closure_25, tmp5, _mod1705.scheduleOnRN, _slicedToArray];
    let c0;
    let c1;
    let c2;
    [tmp7, tmp8, tmp9, tmp10] = items;
    const tmp6 = YOU_BAR_SPRING_CONFIG;
    class ConnectionBannerTsx1 {
      constructor(arg0) {
        tmp = true !== arg0 || closure_0;
        if (!tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = null;
          tmp5 = closure_1(closure_2, null);
        }
        return;
      }
    }
    const items1 = [tmp8, tmp9, tmp10];
    ConnectionBannerTsx1.__closure = items1;
    ConnectionBannerTsx1.__workletHash = 16931767235940;
    ConnectionBannerTsx1.__initData = tmp7;
    const result = set(withSpring(num, tmp6, "respect-motion-settings", ConnectionBannerTsx1));
  }, items1);
  const items2 = [tmp8, sharedValue];
  const effect1 = obj4.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (closure_1) {
      num = 1;
    }
    const result = set(withSpring(num, YOU_BAR_SPRING_CONFIG));
  }, items2);
  const items3 = [closure_26, sharedValue1, CONNECTION_BANNER_HEIGHT];
  let c0;
  let c1;
  [tmp20, tmp21, tmp22] = items3;
  const tmp2Result4 = tmp2(tmp3[15]);
  class ConnectionBannerTsx2 {
    constructor() {
      let items;
      const obj = { transform: items, opacity: _undefined.get() };
      items = [{ translateY: (1 - _undefined.get()) * c1 }];
      ({ translateY: (1 - _undefined.get()) * c1 });
      return obj;
    }
  }
  const items4 = [tmp21, tmp22];
  ConnectionBannerTsx2.__closure = items4;
  ConnectionBannerTsx2.__workletHash = 11372304326917;
  ConnectionBannerTsx2.__initData = tmp20;
  const animatedStyle = tmp2Result4.useAnimatedStyle(ConnectionBannerTsx2);
  const obj3 = { pointerEvents: "none", style: items5, children: items6 };
  items5 = [tmp.container, { height: youBarBottomMargin + CONNECTION_BANNER_HEIGHT }, animatedStyle];
  let tmp25 = null;
  const View = require("module_1652").View;
  const tmp24 = closure_13;
  if (tmp12 === tmp6.BACK_ONLINE) {
    const obj5 = { progress: sharedValue };
    tmp25 = closure_12(BackOnlineGlow, obj5);
  }
  items6 = [tmp25, ];
  let tmp28 = null;
  if (null != tmp12) {
    const obj6 = { state: tmp12 };
    tmp28 = closure_12(ConnectionBannerContent, obj6);
  }
  items6[1] = tmp28;
  return tmp24(View, obj3);
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
let closure_25 = { code: "(function ConnectionBannerTsx1(finished){let[shouldShowBanner,scheduleOnRN,setRenderState]=this.__closure;if(finished===true&&!shouldShowBanner){scheduleOnRN(setRenderState,null);}})" };
let closure_26 = { code: "(function ConnectionBannerTsx2(){let[progress,CONNECTION_BANNER_HEIGHT]=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionBanner.tsx");

export default function ConnectionBanner() {
  let ref;
  let state;
  let stateFromStores;
  let obj = stateFromStores(15828);
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
