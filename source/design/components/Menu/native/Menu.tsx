// Module ID: 13042
// Function ID: 100689
// Name: NOOP
// Dependencies: [57, 31, 27, 653, 33, 13032, 4130, 689, 3991, 3849, 1557, 1450, 477, 3843, 1212, 4539, 4131, 13036, 13030, 4542, 2]
// Exports: Menu

// Module 13042 (NOOP)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const ScrollView = get_ActivityIndicator.ScrollView;
let closure_8 = { mass: 1, stiffness: 300, damping: 25, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let obj = { duration: 250, easing: require("STANDARD_EASING").STANDARD_EASING };
obj = {};
let obj1 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj1["zIndex"] = 1;
obj.backdrop = obj1;
_createForOfIteratorHelperLoose = { position: "absolute", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, width: 220 };
obj.menu = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const context = importAllResult.createContext({ menuClose: NOOP, menuDismiss: NOOP });
let closure_12 = { code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}" };
let closure_13 = (() => {
  function measureButtonRef(arg0, arg1) {
    const measureResult = outer1_0(outer1_2[8]).measure(arg0);
    if (null != measureResult) {
      outer1_0(outer1_2[8]).runOnJS(arg1)(measureResult);
      const obj2 = outer1_0(outer1_2[8]);
    }
  }
  measureButtonRef.__closure = { measure: require(3991).measure, runOnJS: require(3991).runOnJS };
  measureButtonRef.__workletHash = 15651320687527;
  measureButtonRef.__initData = closure_12;
  return measureButtonRef;
})();
let closure_14 = { code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}" };
let closure_15 = { code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}" };
let closure_16 = { code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
  let children;
  let _slicedToArray;
  let offsetAnimated;
  let onClose;
  let position;
  let style;
  toggleButtonRef = toggleButtonRef.toggleButtonRef;
  ({ onClose, position } = toggleButtonRef);
  if (position === undefined) {
    position = "right";
  }
  let str = toggleButtonRef.align;
  if (str === undefined) {
    str = "start";
  }
  ({ offset: _slicedToArray, offsetAnimated } = toggleButtonRef);
  let enabled;
  let closure_6;
  let jsx;
  let closure_8;
  let first;
  let callback2;
  let sharedValue;
  let sharedValue1;
  onClose = undefined;
  let c14;
  let c15;
  function openMenuCallback() {
    let obj = toggleButtonRef(str[12]);
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = toggleButtonRef(str[13]).AccessibilityAnnouncer;
      const intl = toggleButtonRef(str[14]).intl;
      AccessibilityAnnouncer.announce(intl.string(toggleButtonRef(str[14]).t.ZqK0uI));
    }
    obj = { ref: closure_8 };
    const result = toggleButtonRef(str[15]).setAccessibilityFocus(obj);
  }
  function handleClose() {
    let obj = toggleButtonRef(str[16]);
    const fn = function t() {
      return toggleButtonRef(str[8]).runOnJS(outer1_13)();
    };
    obj = { runOnJS: toggleButtonRef(str[8]).runOnJS, closeMenuCallback: onClose };
    fn.__closure = obj;
    fn.__workletHash = 5879184549724;
    fn.__initData = c15;
    const result = sharedValue.set(obj.withTiming(0, first, "respect-motion-settings", fn));
  }
  function handleDismiss() {
    let obj = toggleButtonRef(str[15]);
    obj = { ref: toggleButtonRef };
    const result = obj.setAccessibilityFocus(obj);
    handleClose();
  }
  ({ style, children } = toggleButtonRef);
  const tmp = callback2();
  enabled = offsetAnimated.useContext(toggleButtonRef(str[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  closure_6 = position(str[10])();
  jsx = position(str[11])();
  closure_8 = offsetAnimated.useRef(null);
  const tmp2 = callback(offsetAnimated.useState(null), 2);
  first = tmp2[0];
  callback2 = tmp2[1];
  let obj = toggleButtonRef(str[8]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = toggleButtonRef(str[8]);
  sharedValue1 = obj1.useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, first];
  const layoutEffect = offsetAnimated.useLayoutEffect(() => {
    let current;
    if (null != toggleButtonRef) {
      current = toggleButtonRef.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = null == first;
    }
    if (tmp3) {
      toggleButtonRef(str[8]).runOnUI(onClose)(toggleButtonRef, closure_10);
      const obj = toggleButtonRef(str[8]);
    }
  }, items);
  if (null == onClose) {
    onClose = closure_6;
  }
  let obj2 = toggleButtonRef(str[17]);
  const boxShadowStyle = obj2.generateBoxShadowStyle(toggleButtonRef(str[17]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  let tmp8 = callback((() => {
    let pageX;
    let pageY;
    if ("left" === position) {
      let str = "column";
    } else {
      str = "row";
    }
    if (null == first) {
      let point = { x: 0, y: 0 };
    } else {
      let num = 0;
      ({ pageX, pageY } = first);
      if ("right" === position) {
        num = first.width;
      }
      const sum = pageX + num;
      let num2 = 0;
      if ("bottom" === position) {
        num2 = first.height;
      }
      const sum1 = pageY + num2;
      let tmp8 = sum;
      let sum3 = sum1;
      if ("end" === str) {
        let num3 = 0;
        if ("row" === str) {
          num3 = first.width;
        }
        let num4 = 0;
        const sum2 = sum + num3;
        if ("column" === str) {
          num4 = first.height;
        }
        sum3 = sum1 + num4;
        tmp8 = sum2;
      }
      point = { x: tmp8, y: sum3 };
    }
    const height = styles.height;
    if ("left" === position) {
      let str8 = "right";
    } else {
      str8 = "left";
      if ("row" === str) {
        str8 = "left";
      }
    }
    if ("top" === position) {
      let str11 = "bottom";
    } else {
      str11 = "top";
      if ("column" === str) {
        str11 = "top";
      }
    }
    if ("left" === str8) {
      let x = point.x;
    } else {
      x = styles.width - point.x;
    }
    const y = point.y;
    const tmp17 = "top" === str11 ? y : height - y;
    if (null != _slicedToArray) {
      let sum4 = x + _slicedToArray.x;
      let sum5 = tmp17 + _slicedToArray.y;
    } else {
      let num5 = 0;
      if ("column" === str) {
        num5 = 10;
      }
      sum4 = x + num5;
      let num6 = 0;
      if ("row" === str) {
        num6 = 10;
      }
      sum5 = tmp17 + num6;
    }
    const rect = closure_6;
    const obj = {};
    obj[str8] = sum4;
    obj[str11] = sum5;
    obj["maxHeight"] = height - sum5 - ("top" === str11 ? rect.bottom : rect.top) - 12;
    const items = [obj, str8, str11];
    return items;
  })(), 3);
  c14 = tmp9;
  c15 = tmp10;
  let obj3 = toggleButtonRef(str[8]);
  class P {
    constructor() {
      obj = { opacity: c11.get() };
      if (enabled) {
        items = [];
      } else {
        obj = {};
        tmp = toggleButtonRef;
        tmp2 = start;
        num = 8;
        obj3 = toggleButtonRef(start[8]);
        tmp3 = c11;
        tmp5 = c14;
        num2 = 1;
        str = "left";
        num3 = 1;
        value = c11.get();
        if ("left" === c14) {
          num3 = -1;
        }
        tmp6 = useSharedValue;
        items1 = [, ];
        num4 = 4;
        items1[0] = num3 * useSharedValue.get().width / 4;
        tmp7 = offsetAnimated;
        tmp8 = null;
        x = undefined;
        if (null != offsetAnimated) {
          tmp10 = offsetAnimated;
          value1 = offsetAnimated.get();
          if (null != value1) {
            x = value1.x;
          }
        }
        num5 = 0;
        if (null != x) {
          tmp12 = offsetAnimated;
          value2 = offsetAnimated.get();
          x1 = undefined;
          if (null != value2) {
            x1 = value2.x;
          }
          num5 = x1;
        }
        items1[1] = num5;
        obj.translateX = obj3.interpolate(value, [0, 1], items1);
        items = [, , ];
        items[0] = obj;
        obj1 = {};
        tmp15 = toggleButtonRef;
        tmp16 = start;
        obj5 = toggleButtonRef(start[8]);
        tmp17 = c11;
        tmp19 = generateBoxShadowStyle;
        str2 = "top";
        value3 = c11.get();
        if ("top" === generateBoxShadowStyle) {
          num2 = -1;
        }
        tmp20 = useSharedValue;
        items2 = [, ];
        items2[0] = num2 * useSharedValue.get().height / 4;
        tmp21 = offsetAnimated;
        y = undefined;
        if (null != offsetAnimated) {
          tmp23 = offsetAnimated;
          value4 = offsetAnimated.get();
          if (null != value4) {
            y = value4.y;
          }
        }
        num6 = 0;
        if (null != y) {
          tmp25 = offsetAnimated;
          value5 = offsetAnimated.get();
          y1 = undefined;
          if (null != value5) {
            y1 = value5.y;
          }
          num6 = y1;
        }
        items2[1] = num6;
        obj1.translateY = obj5.interpolate(value3, [0, 1], items2);
        items[1] = obj1;
        obj2 = {};
        tmp28 = c11;
        num7 = 2;
        num8 = 0.5;
        obj2.scale = c11.get() / 2 + 0.5;
        items[2] = obj2;
      }
      obj.transform = items;
      return obj;
    }
  }
  obj = { visible: sharedValue, useReducedMotion: enabled, interpolate: toggleButtonRef(str[8]).interpolate, dirX: tmp9, size: sharedValue1, offsetAnimated, dirY: tmp10 };
  P.__closure = obj;
  P.__workletHash = 7884133597410;
  P.__initData = openMenuCallback;
  const animatedStyle = obj3.useAnimatedStyle(P);
  obj = { style: null, accessibilityViewIsModal: true, importantForAccessibility: "yes" };
  let items1 = [tmp.backdrop];
  obj.style = items1;
  obj.onTouchDown = handleDismiss;
  obj.onAccessibilityEscape = handleDismiss;
  obj1 = {
    accessibilityRole: "list",
    style: items2,
    onLayout(nativeEvent) {
      let obj = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(obj);
      const fn = function n() {
        return toggleButtonRef(str[8]).runOnJS(outer1_16)();
      };
      obj = { runOnJS: toggleButtonRef(str[8]).runOnJS, openMenuCallback };
      fn.__closure = obj;
      fn.__workletHash = 14966618105405;
      fn.__initData = c14;
      const result1 = sharedValue.set(toggleButtonRef(str[19]).withSpring(1, closure_8, "respect-motion-settings", fn));
    }
  };
  items2 = [tmp.menu, boxShadowStyle, tmp8[0], animatedStyle, style];
  obj2 = {};
  obj3 = { value: { menuClose: handleClose, menuDismiss: handleDismiss } };
  const Children = offsetAnimated.Children;
  obj3.children = Children.map(children, (icon) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      cloneElementResult = icon;
      if (offsetAnimated.isValidElement(icon)) {
        const obj = { ref: closure_8 };
        cloneElementResult = offsetAnimated.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj2.children = <sharedValue.Provider value={{ menuClose: handleClose, menuDismiss: handleDismiss }} />;
  obj1.children = <enabled />;
  obj.children = jsx(position(str[8]).View, {
    accessibilityRole: "list",
    style: items2,
    onLayout(nativeEvent) {
      let obj = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(obj);
      const fn = function n() {
        return toggleButtonRef(str[8]).runOnJS(outer1_16)();
      };
      obj = { runOnJS: toggleButtonRef(str[8]).runOnJS, openMenuCallback };
      fn.__closure = obj;
      fn.__workletHash = 14966618105405;
      fn.__initData = c14;
      const result1 = sharedValue.set(toggleButtonRef(str[19]).withSpring(1, closure_8, "respect-motion-settings", fn));
    }
  });
  return jsx(position(str[18]), { style: null, accessibilityViewIsModal: true, importantForAccessibility: "yes" });
};
