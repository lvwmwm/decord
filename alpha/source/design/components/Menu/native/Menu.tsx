// Module ID: 16312
// Function ID: 16313
// Name: Menu
// Dependencies: [32, 19, 17, 1072, 21, 16313, 5243, 575, 1652, 1705, 5257, 1627, 1493, 1377, 5252, 1113, 6268, 5485, 6269, 16314, 16315, 5876, 2]
// Exports: Menu

// Module 16312 (Menu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5485 */;
import spring_spring from "spring/spring" /* 5876 */;
import react_native from "react-native" /* 6268 */;
import Easing_Easing from "Easing/Easing" /* 16313 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let StyleSheet;
let hasOwnProperty;
let obj3;
let obj4;
let tmp6;
let tmp7;
let tmp8;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, StyleSheet } = react_native2);
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let closure_8 = { mass: 1, stiffness: 300, damping: 25 };
let obj = { duration: 250, easing: Easing_Easing.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = { backdrop: obj3, menu: obj4 };
obj3 = { zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: 220 };
let closure_10 = createStyles(obj2);
const context = react.createContext({ menuClose: NOOP, menuDismiss: NOOP });
let items = [{ code: "(function measureButtonRef_MenuTsx1(ref,setDimensions){let[measure,scheduleOnRN]=this.__closure;const measurements=measure(ref);if(measurements==null)return;scheduleOnRN(setDimensions,measurements);})" }, _mod1652.measure, _mod1705.scheduleOnRN];
let c0;
let c1;
[tmp6, tmp7, tmp8] = items;
function measureButtonRef(arg0, arg1) {
  const tmp = _undefined(arg0);
  if (null != tmp) {
    _undefined2(arg1, tmp);
  }
}
let items1 = [tmp7, tmp8];
measureButtonRef.__closure = items1;
measureButtonRef.__workletHash = 5907268262035;
measureButtonRef.__initData = tmp6;
let closure_13 = { code: "(function MenuTsx2(){let[scheduleOnRN,openMenuCallback]=this.__closure;return scheduleOnRN(openMenuCallback);})" };
let closure_14 = { code: "(function MenuTsx3(){let[scheduleOnRN,closeMenuCallback]=this.__closure;return scheduleOnRN(closeMenuCallback);})" };
let closure_15 = { code: "(function MenuTsx4(){let[visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY]=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export function Menu(toggleButtonRef) {
  let Children;
  let Provider;
  let View;
  let children;
  let closure_3;
  let items8;
  let obj6;
  let obj7;
  let obj8;
  let offsetAnimated;
  let onClose;
  let pageX;
  let pageY;
  let point;
  let position;
  let ref;
  let size2;
  let str12;
  let str2;
  let str9;
  let style;
  let sum4;
  let sum5;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let x;
  toggleButtonRef = toggleButtonRef.toggleButtonRef;
  ({ onClose, position } = toggleButtonRef);
  if (position === undefined) {
    position = "right";
  }
  let str = toggleButtonRef.align;
  if (str === undefined) {
    str = "start";
  }
  const offset = toggleButtonRef.offset;
  importDefault = undefined;
  size2 = undefined;
  _slicedToArray = undefined;
  let sharedValue;
  onClose = undefined;
  let menuClose;
  let callback1;
  function openMenuCallback() {
    obj = PlatformUtils;
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = tmp(5252).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp(1113).intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
    const obj2 = { ref };
    const tmpResult = react_native;
    const result = tmpResult.setAccessibilityFocus(obj2);
  }
  ({ offsetAnimated, style, children } = toggleButtonRef);
  let tmp = closure_10();
  obj = sharedValue;
  const tmp2 = toggleButtonRef;
  let tmp3 = size2;
  let tmp4 = importDefault;
  const enabled = sharedValue.useContext(toggleButtonRef(size2[10]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const rect = require("useSafeAreaInsets")();
  size = require("useWindowDimensions")();
  importDefault = sharedValue.useRef(null);
  const tmp5 = _slicedToArray;
  [size2, _slicedToArray] = sharedValue.useState(null);
  let obj2 = toggleButtonRef(size2[8]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = toggleButtonRef(size2[8]);
  const sharedValue1 = obj3.useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, size2];
  const layoutEffect = sharedValue.useLayoutEffect(() => {
    let current;
    if (toggleButtonRef != null) {
      current = tmp.current;
    }
    const tmp3 = null != current && null == size2;
    if (tmp3) {
      obj = _mod1705;
      obj.scheduleOnUI(measureButtonRef, toggleButtonRef, closure_3);
    }
  }, items);
  if (onClose == null) {
    onClose = openMenuCallback;
  }
  let items1 = [onClose, sharedValue];
  menuClose = obj.useCallback(() => {
    let tmp4;
    let tmp5;
    let tmp6;
    const items = [closure_14, , ];
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    items[1] = _mod1705.scheduleOnRN;
    items[2] = onClose;
    let c0;
    let c1;
    [tmp4, tmp5, tmp6] = items;
    const tmp3 = obj;
    class MenuTsx3 {
      constructor() {
        return closure_0(closure_1);
      }
    }
    const items1 = [tmp5, tmp6];
    MenuTsx3.__closure = items1;
    MenuTsx3.__workletHash = 8034387170500;
    MenuTsx3.__initData = tmp4;
    const result = set(withTiming(0, tmp3, "respect-motion-settings", MenuTsx3));
  }, items1);
  let items2 = [menuClose, toggleButtonRef];
  callback1 = obj.useCallback(() => {
    obj = react_native;
    const obj2 = { ref: toggleButtonRef };
    const result = obj.setAccessibilityFocus(obj2);
    callback();
  }, items2);
  const items3 = [callback1];
  const callback2 = obj.useCallback(() => {
    callback1();
    return true;
  }, items3);
  tmp4(tmp3[18])(callback2);
  const items4 = [menuClose, callback1];
  const memo = obj.useMemo(() => ({ menuClose, menuDismiss: callback1 }), items4);
  const tmp2Result = tmp2(tmp3[19]);
  const boxShadowStyle = tmp2Result.generateBoxShadowStyle(tmp2(tmp3[19]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  if ("left" === position) {
    str2 = "column";
  } else {
    str2 = "row";
  }
  if (null == size2) {
    point = { x: 0, y: 0 };
  } else {
    let num = 0;
    ({ pageX, pageY } = size2);
    if ("right" === position) {
      num = size2.width;
    }
    const sum = pageX + num;
    let num2 = 0;
    if ("bottom" === position) {
      num2 = size2.height;
    }
    const sum1 = pageY + num2;
    let sum3 = sum1;
    let tmp20 = sum;
    if ("end" === str) {
      let num3 = 0;
      if ("row" === str2) {
        num3 = size2.width;
      }
      let num4 = 0;
      const sum2 = sum + num3;
      if ("column" === str2) {
        num4 = size2.height;
      }
      sum3 = sum1 + num4;
      tmp20 = sum2;
    }
    point = { x: tmp20, y: sum3 };
  }
  const height = size.height;
  if ("left" === position) {
    str9 = "right";
  } else {
    str9 = "left";
    if ("row" === str2) {
      str9 = "left";
    }
  }
  if ("top" === position) {
    str12 = "bottom";
  } else {
    str12 = "top";
    if ("column" === str2) {
      str12 = "top";
    }
  }
  if ("left" === str9) {
    x = point.x;
  } else {
    x = size.width - point.x;
  }
  let y = point.y;
  const tmp23 = "top" === str12 ? y : height - y;
  if (null != offset) {
    sum4 = x + offset.x;
    sum5 = tmp23 + offset.y;
  } else {
    let num5 = 0;
    if ("column" === str2) {
      num5 = 10;
    }
    sum4 = x + num5;
    let num6 = 0;
    if ("row" === str2) {
      num6 = 10;
    }
    sum5 = tmp23 + num6;
  }
  const obj4 = { maxHeight: height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12 };
  obj4[str9] = sum4;
  obj4[str12] = sum5;
  const items5 = [obj4, str9, str12];
  [tmp27, tmp28, tmp29] = tmp5(items5, 3);
  tmp5(items5, 3);
  const items6 = [closure_15, sharedValue, enabled, , , , , ];
  const useAnimatedStyle = tmp2(tmp3[8]).useAnimatedStyle;
  tmp2(tmp3[8]);
  items6[3] = tmp2(tmp3[8]).interpolate;
  items6[4] = tmp28;
  items6[5] = sharedValue1;
  items6[6] = offsetAnimated;
  items6[7] = tmp29;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items6;
  class MenuTsx4 {
    constructor() {
      let items;
      obj = { opacity: _undefined.get(), transform: items };
      const tmp = c1;
      if (tmp) {
        items = [];
      } else {
        let num = 1;
        let num2 = 1;
        const value = obj2.get();
        if ("left" === c3) {
          num2 = -1;
        }
        const items1 = [num2 * _undefined2.get().width / 4, ];
        let x;
        const obj3 = _undefined2;
        if (c5 != null) {
          const value6 = obj4.get();
          if (value6 != null) {
            x = value6.x;
          }
        }
        let num4 = 0;
        if (null != x) {
          const value7 = obj4.get();
          let x1;
          if (value7 != null) {
            x1 = value7.x;
          }
          num4 = x1;
        }
        items1[1] = num4;
        items = [{ translateX: _undefined(value, [0, 1], items1) }, , ];
        const obj5 = { translateX: _undefined(value, [0, 1], items1) };
        const value8 = obj2.get();
        if ("top" === c6) {
          num = -1;
        }
        const items2 = [num * obj3.get().height / 4, ];
        let y;
        if (c5 != null) {
          const value9 = obj4.get();
          if (value9 != null) {
            y = value9.y;
          }
        }
        let num5 = 0;
        if (null != y) {
          const value10 = obj4.get();
          let y1;
          if (value10 != null) {
            y1 = value10.y;
          }
          num5 = y1;
        }
        items2[1] = num5;
        items[1] = { translateY: _undefined(value8, [0, 1], items2) };
        const obj6 = { translateY: _undefined(value8, [0, 1], items2) };
        items[2] = { scale: _undefined.get() / 2 + 0.5 };
        const obj7 = { scale: _undefined.get() / 2 + 0.5 };
      }
      return obj;
    }
  }
  const items7 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  MenuTsx4.__closure = items7;
  MenuTsx4.__workletHash = 14672287725499;
  MenuTsx4.__initData = tmp31;
  const animatedStyle = useAnimatedStyle(MenuTsx4);
  let obj5 = { style: tmp.backdrop, accessibilityViewIsModal: true, importantForAccessibility: "yes", onTouchDown: callback1, onAccessibilityEscape: callback1, children: onClose(View, obj6) };
  obj6 = {
    accessibilityRole: "list",
    style: items8,
    onLayout: function handleOpen(nativeEvent) {
      let tmp5;
      let tmp6;
      let tmp7;
      size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(size);
      const items = [closure_13, , ];
      set = sharedValue.set;
      const withSpring = spring_spring.withSpring;
      spring_spring;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = openMenuCallback;
      let c0;
      let c1;
      [tmp5, tmp6, tmp7] = items;
      const tmp4 = closure_8;
      class MenuTsx2 {
        constructor() {
          return closure_0(closure_1);
        }
      }
      const items1 = [tmp6, tmp7];
      MenuTsx2.__closure = items1;
      MenuTsx2.__workletHash = 9487274314277;
      MenuTsx2.__initData = tmp5;
      const result1 = set(withSpring(1, tmp4, "respect-motion-settings", MenuTsx2));
    },
    children: onClose(sharedValue1, obj7)
  };
  items8 = [tmp.menu, boxShadowStyle, tmp27, animatedStyle, style];
  obj7 = { children: onClose(Provider, obj8) };
  obj8 = {
    value: memo,
    children: Children.map(children, (icon, arg1) => {
      let cloneElementResult = icon;
      if (0 === arg1) {
        cloneElementResult = icon;
        obj = react;
        if (react.isValidElement(icon)) {
          const obj2 = { ref };
          cloneElementResult = obj.cloneElement(icon, obj2);
        }
      }
      return cloneElementResult;
    })
  };
  Children = obj.Children;
  const tmp4Result = tmp4(tmp3[20]);
  View = tmp4(tmp3[8]).View;
  Provider = context.Provider;
  return onClose(tmp4Result, obj5);
}
