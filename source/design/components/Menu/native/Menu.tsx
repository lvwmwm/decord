// Module ID: 12919
// Function ID: 98478
// Name: NOOP
// Dependencies: []
// Exports: Menu

// Module 12919 (NOOP)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const ScrollView = tmp2.ScrollView;
const NOOP = arg1(dependencyMap[3]).NOOP;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = { "Bool(true)": null, "Bool(true)": "5f77547974eb8f3f02aedbb78b4b73bc", "Bool(true)": "NitroGem12", "Bool(true)": "lottie", "Bool(true)": true };
let obj = { duration: 250, easing: arg1(dependencyMap[5]).STANDARD_EASING };
let obj2 = arg1(dependencyMap[6]);
obj = {};
const obj1 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj1["zIndex"] = 1;
obj.backdrop = obj1;
obj2 = { position: "absolute", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.sm, width: 220 };
obj.menu = obj2;
let closure_10 = obj2.createStyles(obj);
const context = importAllResult.createContext({ menuClose: NOOP, menuDismiss: NOOP });
let closure_12 = { code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}" };
let closure_13 = () => {
  function measureButtonRef(arg0, arg1) {
    const measureResult = callback(closure_2[8]).measure(arg0);
    if (null != measureResult) {
      callback(closure_2[8]).runOnJS(arg1)(measureResult);
      const obj2 = callback(closure_2[8]);
    }
  }
  measureButtonRef.__closure = { measure: arg1(dependencyMap[8]).measure, runOnJS: arg1(dependencyMap[8]).runOnJS };
  measureButtonRef.__workletHash = 15651320687527;
  measureButtonRef.__initData = closure_12;
  return measureButtonRef;
}();
let closure_14 = { code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}" };
let closure_15 = { code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}" };
let closure_16 = { code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}" };
const result = arg1(dependencyMap[20]).fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
  let children;
  let offsetAnimated;
  let onClose;
  let position;
  let style;
  toggleButtonRef = toggleButtonRef.toggleButtonRef;
  const arg1 = toggleButtonRef;
  ({ onClose, position } = toggleButtonRef);
  if (position === undefined) {
    position = "right";
  }
  const importDefault = position;
  let str = toggleButtonRef.align;
  if (str === undefined) {
    str = "start";
  }
  const dependencyMap = str;
  ({ offset: closure_3, offsetAnimated } = toggleButtonRef);
  let ScrollView;
  let closure_6;
  let jsx;
  let closure_8;
  let obj;
  let callback2;
  let context;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
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
      return callback(closure_2[8]).runOnJS(closure_13)();
    };
    obj = { runOnJS: toggleButtonRef(str[8]).runOnJS, closeMenuCallback: onClose };
    fn.__closure = obj;
    fn.__workletHash = 5879184549724;
    fn.__initData = tmp10;
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
  const enabled = importAllResult.useContext(arg1(dependencyMap[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  ScrollView = enabled;
  closure_6 = importDefault(dependencyMap[10])();
  jsx = importDefault(dependencyMap[11])();
  closure_8 = importAllResult.useRef(null);
  const tmp2 = callback(offsetAnimated.useState(null), 2);
  const first = tmp2[0];
  obj = first;
  callback2 = tmp2[1];
  obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  context = sharedValue;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue1 = obj1.useSharedValue({ bhk: -536870861, bic: -299892737 });
  closure_12 = sharedValue1;
  const items = [toggleButtonRef, first];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
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
  closure_13 = onClose;
  let obj2 = arg1(dependencyMap[17]);
  const boxShadowStyle = obj2.generateBoxShadowStyle(arg1(dependencyMap[17]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  const tmp8 = callback(() => {
    let pageX;
    let pageY;
    if ("left" === position) {
      let str = "column";
    } else {
      str = "row";
    }
    if (null == first) {
      let point = { max: -536870861, guildId: -299892737 };
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
    if (null != closure_3) {
      let sum4 = x + closure_3.x;
      let sum5 = tmp17 + closure_3.y;
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
    obj["maxHeight"] = height - sum5 - "top" === str11 ? rect.bottom : rect.top - 12;
    const items = [obj, str8, str11];
    return items;
  }(), 3);
  closure_14 = tmp9;
  closure_15 = tmp10;
  let obj3 = arg1(dependencyMap[8]);
  class P {
    constructor() {
      obj = { opacity: closure_11.get() };
      if (enabled) {
        items = [];
      } else {
        obj = {};
        tmp = toggleButtonRef;
        tmp2 = closure_2;
        num = 8;
        obj3 = toggleButtonRef(closure_2[8]);
        tmp3 = closure_11;
        tmp5 = closure_14;
        num2 = 1;
        str = "left";
        num3 = 1;
        value = closure_11.get();
        if ("left" === closure_14) {
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
        obj.translateX = obj3.interpolate(value, ["Text", "lc"], items1);
        items = [, , ];
        items[0] = obj;
        obj1 = {};
        tmp15 = toggleButtonRef;
        tmp16 = closure_2;
        obj5 = toggleButtonRef(closure_2[8]);
        tmp17 = closure_11;
        tmp19 = generateBoxShadowStyle;
        str2 = "top";
        value3 = closure_11.get();
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
        obj1.translateY = obj5.interpolate(value3, ["Text", "lc"], items2);
        items[1] = obj1;
        obj2 = {};
        tmp28 = closure_11;
        num7 = 2;
        num8 = 0.5;
        obj2.scale = closure_11.get() / 2 + 0.5;
        items[2] = obj2;
      }
      obj.transform = items;
      return obj;
    }
  }
  obj = { visible: sharedValue, useReducedMotion: enabled, interpolate: arg1(dependencyMap[8]).interpolate, dirX: tmp9, size: sharedValue1, offsetAnimated, dirY: tmp10 };
  P.__closure = obj;
  P.__workletHash = 7884133597410;
  P.__initData = openMenuCallback;
  const animatedStyle = obj3.useAnimatedStyle(P);
  obj = { style: items1, onTouchDown: handleDismiss, onAccessibilityEscape: handleDismiss };
  const items1 = [tmp.backdrop];
  obj1 = {
    accessibilityRole: "list",
    style: items2,
    onLayout(nativeEvent) {
      let obj = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(obj);
      const fn = function n() {
        return callback(closure_2[8]).runOnJS(closure_16)();
      };
      obj = { runOnJS: toggleButtonRef(str[8]).runOnJS, openMenuCallback };
      fn.__closure = obj;
      fn.__workletHash = 14966618105405;
      fn.__initData = tmp9;
      const result1 = sharedValue.set(toggleButtonRef(str[19]).withSpring(1, closure_8, "respect-motion-settings", fn));
    }
  };
  const items2 = [tmp.menu, boxShadowStyle, tmp8[0], animatedStyle, style];
  obj2 = {};
  obj3 = { value: { menuClose: handleClose, menuDismiss: handleDismiss } };
  const Children = importAllResult.Children;
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
  obj2.children = <context.Provider {...obj3} />;
  obj1.children = <ScrollView {...obj2} />;
  obj.children = jsx(importDefault(dependencyMap[8]).View, obj1);
  return jsx(importDefault(dependencyMap[18]), obj);
};
