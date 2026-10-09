// Module ID: 14140
// Function ID: 14141
// Name: Menu
// Dependencies: [32, 19, 17, 1085, 21, 14141, 5091, 587, 4811, 4795, 1631, 1497, 1382, 4789, 1126, 5370, 5092, 5371, 14142, 14143, 5375, 2]
// Exports: Menu

// Module 14140 (Menu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import react_native from "react-native" /* 5370 */;
import spring from "spring" /* 5375 */;
import Easing from "Easing" /* 14141 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5091 */;
import size_mod from "module_2" /* 2 */;

let set;

let StyleSheet;
let hasOwnProperty;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, StyleSheet } = react_native2);
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let closure_8 = { mass: 1, stiffness: 300, damping: 25, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let __closure = { duration: 250, easing: Easing.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = { backdrop: obj3, menu: obj4 };
obj3 = { zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: 220 };
let closure_10 = createStyles(obj2);
const context = react.createContext({ menuClose: NOOP, menuDismiss: NOOP });
function measureButtonRef(arg0, arg1) {
  const obj = ReanimatedRexport;
  const measureResult = obj.measure(arg0);
  if (null != measureResult) {
    const tmpResult = ReanimatedRexport;
    tmpResult.runOnJS(arg1)(measureResult);
  }
}
let obj5 = { measure: ReanimatedRexport.measure, runOnJS: ReanimatedRexport.runOnJS };
measureButtonRef.__closure = obj5;
measureButtonRef.__workletHash = 15651320687527;
measureButtonRef.__initData = { code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}" };
let closure_13 = { code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}" };
let closure_14 = { code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}" };
let __initData = { code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
  let Children;
  let Provider;
  let View;
  let children;
  let closure_5;
  let items5;
  let obj7;
  let obj8;
  let obj9;
  let offset;
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
  ({ offset, offsetAnimated } = toggleButtonRef);
  let enabled;
  size2 = undefined;
  closure_5 = undefined;
  onClose = undefined;
  let menuClose;
  let callback1;
  let closure_12;
  __initData = undefined;
  function openMenuCallback() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = tmp(4789).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp(1126).intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
    const obj2 = { ref };
    const tmpResult = react_native;
    const result = tmpResult.setAccessibilityFocus(obj2);
  }
  ({ style, children } = toggleButtonRef);
  let tmp = menuClose();
  let obj = size2;
  const tmp2 = toggleButtonRef;
  let tmp3 = enabled;
  enabled = size2.useContext(toggleButtonRef(enabled[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp4 = offsetAnimated;
  const rect = offsetAnimated(enabled[10])();
  size = offsetAnimated(enabled[11])();
  _slicedToArray = size2.useRef(null);
  [size2, closure_5] = size2.useState(null);
  let obj2 = toggleButtonRef(enabled[8]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = toggleButtonRef(enabled[8]);
  const sharedValue1 = obj3.useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, size2];
  const layoutEffect = size2.useLayoutEffect(() => {
    let current;
    if (toggleButtonRef != null) {
      current = tmp.current;
    }
    const tmp3 = null != current && null == size2;
    if (tmp3) {
      const obj = ReanimatedRexport;
      obj.runOnUI(measureButtonRef)(toggleButtonRef, closure_5);
    }
  }, items);
  const tmp5 = _slicedToArray;
  if (onClose == null) {
    onClose = sharedValue;
  }
  let items1 = [onClose, sharedValue];
  menuClose = obj.useCallback(() => {
    set = sharedValue.set;
    let obj = timing;
    const fn = function t() {
      const obj = toggleButtonRef(enabled[8]);
      return obj.runOnJS(onClose)();
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose };
    fn.__workletHash = 5879184549724;
    fn.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose });
    const result = set(obj.withTiming(0, obj, "respect-motion-settings", fn));
  }, items1);
  let items2 = [menuClose, toggleButtonRef];
  callback1 = obj.useCallback(() => {
    const obj = react_native;
    const obj2 = { ref: toggleButtonRef };
    const result = obj.setAccessibilityFocus(obj2);
    callback();
  }, items2);
  const items3 = [callback1];
  const callback2 = obj.useCallback(() => {
    callback1();
    return true;
  }, items3);
  tmp4(tmp3[17])(callback2);
  const tmp2Result = tmp2(tmp3[18]);
  const boxShadowStyle = tmp2Result.generateBoxShadowStyle(tmp2(tmp3[18]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
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
    let tmp19 = sum;
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
      tmp19 = sum2;
    }
    point = { x: tmp19, y: sum3 };
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
  const tmp22 = "top" === str12 ? y : height - y;
  if (null != offset) {
    sum4 = x + offset.x;
    sum5 = tmp22 + offset.y;
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
    sum5 = tmp22 + num6;
  }
  const obj4 = { maxHeight: height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12 };
  obj4[str9] = sum4;
  obj4[str12] = sum5;
  const items4 = [obj4, str9, str12];
  closure_12 = tmp27;
  __initData = tmp28;
  const first = tmp5(items4, 3)[0];
  let fn = function z() {
    let items;
    const obj = { opacity: sharedValue.get(), transform: items };
    const tmp = enabled;
    if (tmp) {
      items = [];
    } else {
      const interpolate = ReanimatedRexport.interpolate;
      let num = 1;
      let num2 = 1;
      ReanimatedRexport;
      const value = obj2.get();
      if ("left" === closure_12) {
        num2 = -1;
      }
      const items1 = [num2 * sharedValue1.get().width / 4, ];
      let x;
      const obj3 = sharedValue1;
      if (offsetAnimated != null) {
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
      items = [{ translateX: interpolate(value, [0, 1], items1) }, , ];
      const obj5 = { translateX: interpolate(value, [0, 1], items1) };
      const interpolate2 = tmp2(4811).interpolate;
      ReanimatedRexport;
      const value8 = obj2.get();
      if ("top" === __initData) {
        num = -1;
      }
      const items2 = [num * obj3.get().height / 4, ];
      let y;
      if (offsetAnimated != null) {
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
      items[1] = { translateY: interpolate2(value8, [0, 1], items2) };
      const obj6 = { translateY: interpolate2(value8, [0, 1], items2) };
      items[2] = { scale: sharedValue.get() / 2 + 0.5 };
      const obj7 = { scale: sharedValue.get() / 2 + 0.5 };
    }
    return obj;
  };
  const tmp5Result = tmp5(items4, 3);
  const tmp2Result2 = tmp2(tmp3[8]);
  let obj5 = { visible: sharedValue, useReducedMotion: enabled, interpolate: tmp2(tmp3[8]).interpolate, dirX: tmp27, size: sharedValue1, offsetAnimated, dirY: tmp28 };
  fn.__closure = obj5;
  fn.__workletHash = 7884133597410;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
  let obj6 = { style: tmp.backdrop, accessibilityViewIsModal: true, importantForAccessibility: "yes", onTouchDown: callback1, onAccessibilityEscape: callback1, children: sharedValue1(View, obj7) };
  obj7 = {
    accessibilityRole: "list",
    style: items5,
    onLayout: function handleOpen(nativeEvent) {
      size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(size);
      const fn = function n() {
        const obj = toggleButtonRef(enabled[8]);
        return obj.runOnJS(openMenuCallback)();
      };
      set = sharedValue.set;
      const obj2 = spring;
      __closure = { runOnJS: ReanimatedRexport.runOnJS, openMenuCallback };
      fn.__closure = __closure;
      fn.__workletHash = 14966618105405;
      fn.__initData = __initData;
      const result1 = set(obj2.withSpring(1, closure_8, "respect-motion-settings", fn));
    },
    children: sharedValue1(closure_5, obj8)
  };
  items5 = [tmp.menu, boxShadowStyle, first, animatedStyle, style];
  obj8 = { children: sharedValue1(Provider, obj9) };
  obj9 = {
    value: { menuClose, menuDismiss: callback1 },
    children: Children.map(children, (label, arg1) => {
      let cloneElementResult = label;
      if (0 === arg1) {
        cloneElementResult = label;
        const obj = react;
        if (react.isValidElement(label)) {
          const obj2 = { ref };
          cloneElementResult = obj.cloneElement(label, obj2);
        }
      }
      return cloneElementResult;
    })
  };
  Children = obj.Children;
  const tmp4Result = tmp4(tmp3[19]);
  View = tmp4(tmp3[8]).View;
  Provider = callback1.Provider;
  return sharedValue1(tmp4Result, obj6);
};
